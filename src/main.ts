import fsPromises from 'fs/promises'
import path from 'path'
import fetch from 'cross-fetch'
import dtsgenerator, { parseSchema } from 'dtsgenerator'
import { capitalize } from 'lodash'

const baseUrl = 'http://localhost:8080/wp-json'
const baseEP = '/wp/v2'

async function endpointDts(route: string) {
	route = route.replace(baseEP, '')
	const name = route.substring(1)
	if (name.includes('/')) {
		console.error('error: ' + name)
		return Promise.resolve()
	}
	const response = await fetch(baseUrl + baseEP + route, {
		method: 'options'
	})
	const rawSchema = JSON.stringify(await response.json())
	const { schema } = JSON.parse(rawSchema.replace('"bool"', '"boolean"'))
	try {
		const types = await dtsgenerator({
			contents: [parseSchema({
				...schema,
				id: `http://wp.rest/Wp${capitalize(name)}`,
				title: capitalize(schema.title)
			})]
		})
	
		console.debug(`writing ${name}.d.ts`)
		await fsPromises.writeFile(
			path.resolve(__dirname, `../dist/${name}.d.ts`),
			types
		)
	} catch (error) {
		console.error(error)
	}

}

async function main() {
	const { routes } = await (
		await fetch(baseUrl + baseEP)
	).json()
	const uris = 
		Object.keys(routes)
			.slice(1)
			.filter(route => !route.endsWith(')'))
	
	uris.map(uri => {
		if (!uri.includes('<')) {
			return endpointDts(uri)
		}
	})

	await Promise.all(uris)
}

void main()
