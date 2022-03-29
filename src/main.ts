import { isRecord } from '@tool-belt/type-predicates'
import fetch from 'cross-fetch'
import dtsgenerator, { parseSchema } from 'dtsgenerator'
import fs from 'fs'
import fsPromises from 'fs/promises'
import { capitalize } from 'lodash'
import path from 'path'
import rimraf from 'rimraf'

import { Collection, RestContext, RouteLevel, TopLevel } from './types'

const output = path.resolve(__dirname, '../dist')

const baseUrl = 'http://localhost:8080/wp-json'
const baseEP = '/wp/v2'

function _upperFirst(string: string) {
	return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
}

function _snakeToPascal(string: string) {
	return string
		.split('_')
		.map(str => {
			return _upperFirst(str.split('/').map(_upperFirst).join('/'))
		})
		.join('')
}

function transformForContext(
	entry: Record<string, unknown>,
	context: RestContext,
) {
	const copy = { ...entry }
	const keys = Object.keys(copy)
	if (
		keys.includes('context') &&
		Array.isArray(copy.context) &&
		!copy.context.includes(context)
	)
		return undefined
	keys.forEach(key => {
		const value = copy[key]
		if (isRecord(value)) {
			const transformed = transformForContext(value, context)
			if (transformed) copy[key] = { ...transformed }
			else delete copy[key]
		}
	})
	return copy
}

async function endpointToDts({ uri, postSchema }: Collection) {
	const route = uri.replace(baseEP, '')
	// OPTIONS (schema)
	const response = await fetch(baseUrl + baseEP + route, {
		method: 'options',
	})
	const rawSchema = JSON.stringify(await response.json())
	const { schema } = JSON.parse(
		rawSchema.replaceAll('"bool"', '"boolean"'), // wtf
	) as TopLevel
	const title = schema.title.replace('wp_', 'wp-')

	const contexts = (['view', 'edit', 'embed'] as RestContext[]).map(
		async context => {
			try {
				const transformed = transformForContext(schema, context)
				const types = await dtsgenerator({
					contents: [
						parseSchema({
							...transformed,
							id: `http://${context}.context/Wp${capitalize(
								title.replace('wp-', ''),
							)}`,
							title: capitalize(schema.title),
						}),
					],
				})
				if (types.includes('{}')) {
					await fsPromises.writeFile(
						path.resolve(__dirname) + '/error.log',
						JSON.stringify({ context, title }),
						{ mode: 'a' },
					)
					return Promise.resolve(null) //FIXME
				}

				const fileName = `${context}.${title}.d.ts`
				console.debug(`writing ${fileName}`)
				return fsPromises.writeFile(
					path.resolve(output, `./${context}/${fileName}`),
					//trimData(types.replaceAll('?: ', ': ')),
					types.replaceAll('?: ', ': '),
				)
			} catch (error) {
				console.error(error)
			}
		},
	)
	await Promise.all(contexts)

	if (postSchema)
		try {
			postSchema = JSON.parse(
				JSON.stringify(postSchema)
					.replaceAll(',"required":true', '')
					.replaceAll(',"required":false', ''),
			) as Record<string, unknown>
			const postTypes = await dtsgenerator({
				contents: [
					parseSchema({
						$schema: 'http://json-schema.org/draft-04/schema#',
						type: 'object',
						id: `http://create.context/Wp${capitalize(
							title.replace('wp-', ''),
						)}`,
						title: capitalize(schema.title),
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						properties: postSchema,
					}),
				],
			})

			const fileName = `create.${title}.d.ts`
			console.debug(`writing ${fileName}`)
			return fsPromises.writeFile(
				path.resolve(output, `./create/${fileName}`),
				//trimData(postTypes),
				postTypes,
			)
		} catch (error) {
			console.error(error)
		}
}

function trimData(data: string): string {
	const split = data.split('\n')
	return split.slice(1, split.length - 2).join('\n')
}

async function trimFile(file: string): Promise<string> {
	file = path.resolve(output, `./${file}`)
	const data = await fsPromises.readFile(file, 'utf8')
	return '\n' + trimData(data) + '\n'
}

async function compressFinal(output: string): Promise<string> {
	const createContext = await fsPromises.readdir(
		path.resolve(output, './create'),
	)
	const embedContext = await fsPromises.readdir(
		path.resolve(output, './embed'),
	)
	const editContext = await fsPromises.readdir(path.resolve(output, './edit'))
	const viewContext = await fsPromises.readdir(path.resolve(output, './view'))

	console.debug('---')
	console.debug('writing index.d.ts')

	let final = "declare module 'wp-json-types' {"

	for await (const file of viewContext)
		final += await trimFile('./view/' + file)

	final += '\nexport namespace CreateContext {\n'
	for await (const file of createContext)
		final += await trimFile('./create/' + file)
	final += '\n}\n'

	final += '\nexport namespace EditContext {\n'
	for await (const file of editContext)
		final += await trimFile('./edit/' + file)
	final += '\n}\n'

	final += '\nexport namespace EmbedContext {\n'
	for await (const file of embedContext)
		final += await trimFile('./embed/' + file)
	final += '\n}\n'

	final += '\n}\n'

	return final
}

async function makeOutputDir(): Promise<void> {
	if (!fs.existsSync(output)) await fsPromises.mkdir(output)
}

async function deleteOutputDir(): Promise<void> {
	await new Promise((resolve, reject) => {
		rimraf(output, {}, error => (error ? reject(error) : resolve(null)))
	})
}

// FIXME: needs to replace in all places/contexts
async function extractCommonTypes(): Promise<void> {
	const bundle = await fsPromises.readFile(
		path.resolve(output, './index.d.ts'),
	)
	const allLines = bundle.toString().split('\n')
	const interestingUnion = new RegExp(/([a-z_]+): "([a-z| "]+)"/)
	const matched: { line: string; lineNum: number }[] = []
	allLines.forEach((line, lineNum) => {
		const match = line.match(interestingUnion)
		if ((match?.length ?? []) > 1) matched.push({ line, lineNum })
	})

	let commonTypes = ''
	const nameComponents: string[] = []

	const reversedLines = [...allLines].reverse()
	matched.forEach(({ line, lineNum }) => {
		const parentObjectName =
			[...reversedLines]
				.slice(lineNum)
				.find(
					reversedLine =>
						reversedLine.includes('{') &&
						reversedLine.includes('Wp'),
				)
				?.replace('export ', '')
				.replace('interface ', '')
				.replaceAll(' ', '')
				.replace('{', '')
				.replace(':', '') ?? ''
		const matchComponents = line.match(interestingUnion)!
		const nameComponent =
			_snakeToPascal(parentObjectName) +
			_snakeToPascal(matchComponents[1])
		const typeComponent = '"' + matchComponents[2] + '"'

		if (nameComponent.includes('Locale')) return // FIXME

		if (!commonTypes.includes(` ${nameComponent} `))
			commonTypes += `export type ${nameComponent} = ${typeComponent}\n\n`

		nameComponents.push(nameComponent)
		allLines[lineNum] = allLines[lineNum].replace(
			typeComponent,
			nameComponent,
		)
	})

	allLines.unshift(
		`import { ${nameComponents.join(', ')} } from './common'\n`,
	)
	await fsPromises.writeFile(output + '/common.ts', commonTypes, 'utf8')
	await fsPromises.writeFile(
		output + '/index.d.ts',
		allLines.join('\n'),
		'utf8',
	)
}

async function main() {
	await deleteOutputDir()
	await makeOutputDir()
	if (!fs.existsSync(output + '/view'))
		await fsPromises.mkdir(output + '/view')
	if (!fs.existsSync(output + '/edit'))
		await fsPromises.mkdir(output + '/edit')
	if (!fs.existsSync(output + '/embed'))
		await fsPromises.mkdir(output + '/embed')
	if (!fs.existsSync(output + '/create'))
		await fsPromises.mkdir(output + '/create')

	// GET (routes)
	const { routes } = (await (await fetch(baseUrl + baseEP)).json()) as {
		routes: Record<string, RouteLevel>
	}

	const endpoints: Collection[] = Object.values(routes)
		.slice(1)
		.map((route, i) => {
			const uri = Object.keys(routes).slice(1)[i]
			const postSchema =
				route.endpoints.length > 1 ? route.endpoints[1].args : undefined
			return {
				uri,
				postSchema,
			}
		})
		.filter(route => !route.uri.endsWith(')'))
		.filter(route => !route.uri.includes('<'))
		// TODO: fix dts-generation for block- & pattern-directory endpoints
		.filter(route => !route.uri.includes('directory'))
		// TODO: fix dts-generation for search endpoint
		.filter(route => !route.uri.includes('search'))
		// TODO: fix dts-generation for theme endpoint
		.filter(route => !route.uri.includes('theme'))

	await Promise.all(endpoints.map(endpointToDts))

	const final = await compressFinal(output)

	await deleteOutputDir()
	await makeOutputDir()

	await fsPromises.writeFile(output + '/index.d.ts', final, 'utf8')

	await extractCommonTypes()
}

void main()
