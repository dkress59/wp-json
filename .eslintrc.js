module.exports = {
	root: true,
	extends: ['@sprylab/eslint-config'],
	ignorePatterns: [
		'**/view/index.d.ts',
		'**/edit/index.d.ts',
		'**/embed/index.d.ts',
		'**/create/index.d.ts',
	],
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	plugins: ['unused-imports'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		'curly': 'off',
		'no-console': 'error',
		'unused-imports/no-unused-imports': 'error',
	},
}
