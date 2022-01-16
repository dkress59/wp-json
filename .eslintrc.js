module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
	},
	extends: ['@sprylab/eslint-config'],
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
