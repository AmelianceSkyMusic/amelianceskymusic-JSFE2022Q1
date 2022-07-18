module.exports = {

	'env': {
		'browser': true,
		'node': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'max-len': ['warn', 200],
		'@typescript-eslint/no-explicit-any': 2,
	},
	'overrides': [
		{
			'files': ['_legacy/*.*'],
			'rules': {

			}
		}
	]
};
