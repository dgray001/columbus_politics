import google from 'eslint-config-google';
import prettier from 'eslint-config-prettier';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';

// The eslint-config-google package is trying to use these deprecated rules
// Must be before loading the google package
if (google.rules) {
	delete google.rules['valid-jsdoc'];
	delete google.rules['require-jsdoc'];
}

export default [
	google,
	prettier,
	{
		files: ["src/**/*.{js,mjs,ts,tsx}"],
		rules: {
			"no-unused-vars": "off",
		}
	},
	{
		files: ["src/**/*.{ts,tsx}"],
		plugins: {
			"@typescript-eslint": tsEslintPlugin
		},
		languageOptions: {
			parser: tsEslintParser,
			parserOptions: {
				project: './tsconfig.json'
			}
		},
		rules: {
			"eqeqeq": ["error", "always"],
			"prefer-const": "error",
			"block-scoped-var": "error",
			"no-use-before-define": ["error", { "functions": false, "classes": false, "variables": true }],
			"no-console": "off",
			"no-alert": "off",
			"@typescript-eslint/consistent-type-imports": ["error", { "prefer": "type-imports" }],
			"@typescript-eslint/no-explicit-any": "error",
			"camelcase": "off",
			"@typescript-eslint/naming-convention": [
				"error",
				{
					selector: ["class", "interface"],
					format: ["PascalCase"],
				},
				{
					selector: ["function", "method"],
					format: ["camelCase"],
					leadingUnderscore: "allow",
				},
				{
					selector: ["variableLike", "property", "parameter"],
					format: ["snake_case", "UPPER_CASE"],
					leadingUnderscore: "allow",
				},
				{
					selector: ["objectLiteralProperty", "typeProperty"],
					format: null,
					filter: {
						regex: "^cbp-[a-z-]+$",
						match: true,
					},
				},
			],
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					"argsIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
					"caughtErrorsIgnorePattern": "^_"
				}
			],
		},
		settings: {},
	},
];
