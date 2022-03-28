import { isRecord } from '@tool-belt/type-predicates'
import fetch from 'cross-fetch'
import dtsgenerator, { parseSchema } from 'dtsgenerator'
import fs from 'fs'
import fsPromises from 'fs/promises'
import { capitalize } from 'lodash'
import path from 'path'
import rimraf from 'rimraf'

const output = path.resolve(__dirname, '../dist')

const baseUrl = 'http://localhost:8080/wp-json'
const baseEP = '/wp/v2'

interface TopLevel {
	schema: Record<string, unknown> & {
		title: string
	}
}
interface RouteLevel {
	methods: string[]
	endpoints: { methods: string[]; args: Record<string, unknown> }[]
}
interface Collection {
	uri: string
	postSchema?: Record<string, unknown>
}

type RestContext = 'view' | 'edit' | 'embed'

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

	// await Promise.all(['view', 'create', 'edit', 'embed'].map(createIndexDts))

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
}

void main()
