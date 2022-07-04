const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const stylesHandler = MiniCssExtractPlugin.loader;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = {
    entry: {
        'theme-dark': './src/theme-dark',
        'theme-light': './src/theme-light',
        index: path.resolve(__dirname, './src/index'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|ico)$/i,
                type: 'asset',
            },
        ],
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            chunks: ['theme-dark', 'theme-light', 'index'],
            inject: 'body',
        }),
        new CleanWebpackPlugin(),
        new EslintWebpackPlugin({ extensions: 'ts' }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: __dirname + '/src/assets', to: 'assets', noErrorOnMissing: true }],
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
