module.exports = {
	root: true,
	extends: [
		'@sprylab/eslint-config',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'unused-imports'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.d.ts', '.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
			node: {
				paths: ['src', 'dist'],
				extensions: ['.js', '.d.ts', '.ts', '.tsx'],
			},
		},
	},
	rules: {
		'curly': 'off',
		'no-console': 'off',
		'unused-imports/no-unused-imports': 'error',
	},
}
