module.exports = {
	root: true,
	env: {
		browser: true,
		jest: true,
	},
	extends: [
		'@tool-belt/eslint-config',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
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
	},
}
