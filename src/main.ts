/* eslint-disable no-console */
import { capitalize } from 'lodash'
import { isRecord } from '@tool-belt/type-predicates'
import dtsgenerator, { parseSchema } from 'dtsgenerator'
import fetch from 'cross-fetch'
import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'
import rimraf from 'rimraf'

const baseUrl = 'http://localhost:8080/wp-json'
const baseEP = '/wp/v2'

interface TopLevel {
	schema: Record<string, unknown> & {
		title: string
	}
}
interface RouteLevel {
	namespace: string
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

				const fileName = `${title}.${context}.d.ts`
				console.debug(`writing ${fileName}`)
				return fsPromises.writeFile(
					path.resolve(__dirname, `../dist/${fileName}`),
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

			const fileName = `${title}.create.d.ts`
			console.debug(`writing ${fileName}`)
			return fsPromises.writeFile(
				path.resolve(__dirname, `../dist/${fileName}`),
				postTypes,
			)
		} catch (error) {
			console.error(error)
		}
}

async function main() {
	const output = path.resolve(__dirname, '../dist')
	await new Promise((resolve, reject) => {
		rimraf(output, {}, error => (error ? reject(error) : resolve(null)))
	})
	if (!fs.existsSync(output)) await fsPromises.mkdir(output)
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
		.filter(route => !route.uri.includes('theme'))

	const uris = Object.keys(routes)
		.slice(1)
		.filter(route => !route.endsWith(')'))
		.filter(route => !route.includes('<'))
		.filter(route => !route.includes('theme'))

	await Promise.all(endpoints.map(endpointToDts))
}

void main()
