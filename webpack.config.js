const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: {
        app: './src/js/index.js',
        about: './src/js/about.js',
    },
    mode: "development", 
    output: {
        filename: '[name].bundle.js',
        path: path.resolve[__dirname, 'dist']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'postcss-loader', options:{sourceMap: true}},
                        {loader: 'sass-loader', options: {sourceMap: true}}
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('style.css'),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/view/index.html',
            chunks: ['app'],
        }),
        new htmlWebpackPlugin({
            filename: 'about.html',
            template: 'src/view/about.html',
            chunks: ['about'],
        }),
        new BrowserSyncPlugin(
            {
              host: 'localhost',
              port: 8080,
              proxy: 'http://localhost:8080/'
            },
            {
              reload: true
            }
        )
    ]
}