import {
	InputData,
	jsonInputForTargetLanguage,
	quicktype,
} from 'quicktype-core'
import fsPromises from 'fs/promises'
import path from 'path'

async function quicktypeJSON(
	targetLanguage: string,
	typeName: string,
	jsonStrings: string[],
) {
	const jsonInput = jsonInputForTargetLanguage(targetLanguage)

	// We could add multiple samples for the same desired
	// type, or many sources for other types. Here we're
	// just making one type from one piece of sample JSON.
	await jsonInput.addSource({
		name: typeName,
		samples: jsonStrings,
	})

	const inputData = new InputData()
	inputData.addInput(jsonInput)

	return await quicktype({
		inputData,
		lang: targetLanguage,
		// fixedTopLevels: true,
		// ignoreJsonRefs: true,
		indentation: '	',
		combineClasses: false,
		// checkProvenance: true,
		// inferBooleanStrings: true,
		inferDateTimes: true,
		inferEnums: true,
		// inferIntegerStrings: true,
		inferMaps: true,
		inferUuids: true,
	})
}

async function main() {
	/* const routes = Object.keys((await (
		await fetch('http://localhost:8080/wp-json/wp/v2/?context=view')
	).json()).routes).filter(entry => !entry.includes('(')) */
	const publicView = await (
		await fetch('http://localhost:8080/wp-json/wp/v2/?context=view')
	).text()
	const publicEmbed = await (
		await fetch('http://localhost:8080/wp-json/wp/v2/?context=embed')
	).text()
	const types = await quicktypeJSON('typescript', 'WpREST', [
		// publicEmbed,
		publicView,
	])

	await fsPromises.writeFile(
		path.resolve(__dirname, './index.ts'),
		types.lines.join('\n'),
	)
}

void main()
