import JsonToTS from 'json-to-ts'
import fsPromises from 'fs/promises'
import path from 'path'
import fetch from 'cross-fetch'
import dtsgenerator, { parseSchema } from 'dtsgenerator'
import convert from '@openapi-contrib/json-schema-to-openapi-schema'

async function main() {
	/* const routes = Object.keys((await (
		await fetch('http://localhost:8080/wp-json/wp/v2/?context=view')
	).json()).routes).filter(entry => !entry.includes('(')) */
	const publicView = JSON.parse(
		(await (
			await fetch('http://localhost:8080/wp-json/wp/v2/?context=view')
		).text())
		.replace('"bool"', '"boolean"'))
	const publicEmbed = JSON.parse(
		(await (
			await fetch('http://localhost:8080/wp-json/wp/v2/?context=embed')
		).text())
		.replace('"bool"', '"boolean"'))
	const swagger = JSON.parse(
		(await (
			await fetch('http://localhost:8080/wp-json/document-generator-for-openapi/v1/document?namespace=wp/v2')
		).text())
		.replace('"bool"', '"boolean"'))
	const openApi = await convert(publicView)

	//const types = JsonToTS(publicView)
	const types = await dtsgenerator({
		contents: [parseSchema(openApi)]
	})


	await fsPromises.writeFile(
		path.resolve(__dirname, './index.d.ts'),
		types//.join("\n\n"),
	)
}

void main()
