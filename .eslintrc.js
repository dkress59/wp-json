module.exports = {
	root: true,
	extends: ['@sprylab/eslint-config'],
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	plugins: ['unused-imports'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': 'typescript',
	},
	rules: {
		'curly': 'off',
		'no-console': 'error',
		'unused-imports/no-unused-imports': 'error',
	},
}
