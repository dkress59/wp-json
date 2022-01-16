import JsonToTS from 'json-to-ts'
import fsPromises from 'fs/promises'
import path from 'path'
import fetch from 'cross-fetch'

async function main() {
	/* const routes = Object.keys((await (
		await fetch('http://localhost:8080/wp-json/wp/v2/?context=view')
	).json()).routes).filter(entry => !entry.includes('(')) */
	const publicView = await (
		await fetch('http://localhost:8080/wp-json/wp/v2/?context=view')
	).json()
	const publicEmbed = await (
		await fetch('http://localhost:8080/wp-json/wp/v2/?context=embed')
	).json()

	const types = JsonToTS(publicView)

	await fsPromises.writeFile(
		path.resolve(__dirname, './index.ts'),
		types.join("\n\n"),
	)
}

void main()
