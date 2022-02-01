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

async function endpointDts(route: string) {
	route = route.replace(baseEP, '')
	const response = await fetch(baseUrl + baseEP + route, {
		method: 'options', // OPTIONS
	})
	const rawSchema = JSON.stringify(await response.json())
	const { schema } = JSON.parse(
		rawSchema.replaceAll('"bool"', '"boolean"'),
	) as TopLevel
	const { title } = schema

	const contexts = (['view', 'edit', 'embed'] as RestContext[]).map(
		async context => {
			try {
				const transformed = transformForContext(schema, context)
				const types = await dtsgenerator({
					contents: [
						parseSchema({
							...transformed,
							id: `http://${context}.context/Wp${capitalize(
								title,
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
}

async function main() {
	const output = path.resolve(__dirname, '../dist')
	await new Promise((resolve, reject) => {
		rimraf(output, {}, error => (error ? reject(error) : resolve(null)))
	})
	if (!fs.existsSync(output)) await fsPromises.mkdir(output)
	const { routes } = (await (
		await fetch(baseUrl + baseEP)
	) // GET
		.json()) as { routes: Record<string, unknown> }
	const uris = Object.keys(routes)
		.slice(1)
		.filter(route => !route.endsWith(')'))

	const resolved = uris.map(uri => {
		if (!uri.includes('<')) {
			return endpointDts(uri)
		}
	})

	await Promise.all(resolved)
}

void main()
