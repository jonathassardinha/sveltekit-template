/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier',
		'plugin:import/recommended',
		'plugin:import/typescript'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	settings: {
		'import/resolver': {
			typescript: {
				project: ['./.svelte-kit/tsconfig.json']
			}
		},
		'import/extensions': ['.ts', '.svelte'],
		'import/core-modules': ['$app/navigation', '$app/forms', '$app/stores', '$app/environment'],
		// prettier-ignore
		// eslint-disable-next-line no-useless-escape
		'import/ignore': ['\.svelte$']
	},
	rules: {
		'object-curly-spacing': ['warn', 'always'],
		curly: ['error', 'all'],
		'no-unused-vars': [
			'warn',
			{
				vars: 'all',
				destructuredArrayIgnorePattern: '^_',
				varsIgnorePattern: `\\$\\$Props`,
				args: 'none'
			}
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				destructuredArrayIgnorePattern: '^_',
				varsIgnorePattern: `\\$\\$Props`,
				args: 'none'
			}
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'vite.config.ts',
					'vitest-setup.ts',
					'svelte.config.js',
					'tailwind.config.cjs',
					'**/*.test.ts',
					'**/*.spec.ts',
					'src/tests/**/*'
				]
			}
		],
		'import/prefer-default-export': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'import/extensions': ['off'],
		'import/no-duplicates': ['off'],
		'no-restricted-exports': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off'
	}
};
