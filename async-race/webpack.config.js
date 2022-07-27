const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = MiniCssExtractPlugin.loader;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const generateFilename = (ext) => (isProduction ? `[name].[hash].${ext}` : `[name].${ext}`);
const setEslintWebpackPlugin = () => !isProduction ? [ new EslintWebpackPlugin({extensions: ['ts','js']}) ] : [ new EslintWebpackPlugin({extensions: ['ts','js']}) ];

const config = {
	context: path.resolve(__dirname, 'src'),

	entry: {
		'theme-light': './theme-light.ts',
		'theme-dark': './theme-dark.ts',
		index: './index.ts',
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: generateFilename('js'),
		clean: true,
	},

	devtool: isProduction ? false : 'source-map' ,

	devServer: isProduction ? {} : {
		open: 'chrome',
		host: 'localhost',
		hot: false,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			chunks: ['theme-dark', 'theme-light', 'index'],
			inject: 'body',
		}),
		new MiniCssExtractPlugin({
			filename: generateFilename('css'),
		}),
		...setEslintWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{ from: '../public/assets', to: 'assets' },
			],
		}),
	],

	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler,'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [stylesHandler, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};
