const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const htmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    mode: "development", 
    output: {
        filename: 'bundle.js',
        path: path.resolve[__dirname, 'dist']
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    //     overlay: true
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ExtractTextPlugin.extract({
    //                 fallback: 'style-loader',
    //                 use: ['css-loader', 'postcss-loader']
    //             })
    //         },
    //         {
    //             test: /\.scss$/,
    //             use: ExtractTextPlugin.extract({
    //                 fallback: 'style-loader',
    //                 use: [
    //                     {loader: 'css-loader', options:{sourceMap: true}},
    //                     {loader: 'postcss-loader', options:{sourceMap: true}},
    //                     {loader: 'sass-loader', options: {sourceMap: true}}
    //                 ]
    //             })
    //         },
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             loader: 'babel-loader'
    //         }
    //     ]
    // },
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
                    use: ['postcss-loader', 'sass-loader']
                    // use: [
                    //     {loader: 'css-loader', options:{sourceMap: true}},
                    //     {loader: 'postcss-loader', options:{sourceMap: true}},
                    //     {loader: 'sass-loader', options: {sourceMap: true}}
                    // ]
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
        // new CleanWebpackPlugin(),
        new ExtractTextPlugin('style.css'),
        // new htmlWebpackPlugin({
        //     filename: '../html/index.html',
        //     template: 'src/view/index.html',
        //     chunks: ['app'],
        // }),
        // new htmlWebpackPlugin({
        //     filename: '../html/about.html',
        //     template: 'src/view/about.html',
        //     chunks: ['about'],
        // }),
        // new BrowserSyncPlugin(
        //     // BrowserSync options
        //     {
        //       // browse to http://localhost:3000/ during development
        //       host: 'localhost',
        //       port: 8080,
        //       // proxy the Webpack Dev Server endpoint
        //       // (which should be serving on http://localhost:3100/)
        //       // through BrowserSync
        //       proxy: 'http://localhost:8080/'
        //     },
        //     // plugin options
        //     {
        //       // prevent BrowserSync from reloading the page
        //       // and let Webpack Dev Server take care of this
        //       reload: false
        //     }
        // )
    ]
}