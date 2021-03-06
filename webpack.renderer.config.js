const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackRules = require('./webpack.rules');

module.exports = {
    target: 'electron-renderer',
    // WebPack Entry Scanner; starts looking through all the modules to pull in from this point
    entry: {
        // Main App Index
        app: [
            'react-hot-loader/patch',
            './app/index.js'
        ]
    },
    // WebPack Bundler Output location and strategy
    output: {
        filename: 'electron-renderer.bundle.js'
    },
    module: {
        // Where the bundler magic happens; each rule represents a "transform" of sorts on a file
        rules: [
            webpackRules.fileRule,
            webpackRules.bundleCssRule,
            webpackRules.babelRule
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.ejs'
        })
    ]
};
