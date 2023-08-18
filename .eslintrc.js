/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'@typescript-eslint',
		'jsx-a11y',
		'import',
		'unused-imports',
		'jest-dom',
		'testing-library',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:jsx-a11y/recommended',
		'next/core-web-vitals',
		'prettier',
		'plugin:storybook/recommended',
	],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'no-unused-vars': 'off',
		'react/display-name': 'off',
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'type'],
				pathGroups: [
					{
						pattern: '{.,..}/**/*.css',
						group: 'type',
						position: 'after',
					},
				],
				'newlines-between': 'never',
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
	},
};
