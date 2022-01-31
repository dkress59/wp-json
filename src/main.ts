import fsPromises from 'fs/promises'
import path from 'path'
import fetch from 'cross-fetch'
import dtsgenerator, { parseSchema } from 'dtsgenerator'
import { capitalize } from 'lodash'

async function main() {
	const response = await fetch('http://localhost:8080/wp-json/wp/v2/pages', { method: 'options' })
	const overview = await response.json()

	const { schema } = overview
	try {
		const types = await dtsgenerator({
			contents: [parseSchema({ ...schema, id: 'http://wp.rest/WpPage', title: capitalize(schema.title) })]
		})
	
		await fsPromises.writeFile(
			path.resolve(__dirname, './page.d.ts'),
			types
		)
	} catch (error) {
		console.error(error)
	}

}

void main()
