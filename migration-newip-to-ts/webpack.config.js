const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const stylesHandler = MiniCssExtractPlugin.loader;

const baseConfig = {
    entry: {
        'theme-dark': './src/theme-dark', // #asm основной путь к файлу вхождения в сборку
        'theme-light': './src/theme-light', // #asm основной путь к файлу вхождения в сборку
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
                // use: [stylesHandler, 'style-loader', 'css-loader', 'sss-loader'],
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
                // type: 'asset/resource',
            },
        ],
    },
    // devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all', // #asm оптимизация кода для выненесния повторющихся кодов в одельные чанки
        },
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            chunks: ['theme-dark', 'theme-light', 'index'],
            // chunks: ['index'],
            inject: 'body',
        }),
        new CleanWebpackPlugin(),
        new EslintWebpackPlugin({ extensions: 'ts' }),
        new MiniCssExtractPlugin({
            // filename: filename('css'), // #asm имя файла выхода
            filename: '[name].[hash].css',
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
