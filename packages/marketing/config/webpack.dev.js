const { merge } = require('webpack-merge')

// Merge is a function that we can use to merge together two different webpack config objects. 
// So this merge function is what's going to allow us to take all the config 
// that we just wrote out inside that common file and merge it together with a configuration
//  that we're about to write inside this development file. That's all the merge function does.

const HtmlWebpackPlugin = require('html-webpack-plugin')

// Remember, this is what is going to take some kind of HTML file inside of our project 
// and inject a couple of different script tags inside of it.

//import module feferation plugin
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')


//import packages.json to share dependencies
const packagesJson = require('../package.json')

// now we need to take our dev config and merge it together with a configuration 
// that we wrote out inside the common file. To do so, we're going to require in the common configuration, at the top,
const commonConfig = require('./webpack.common')

const devConfig = {
    mode : 'development',
    devServer : {
        port: 8081,
        historyApiFallback : {
            index : 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name : 'marketing',
            filename: 'remoteEntry.js',
            exposes : {
                './MarketingApp' : './src/bootstrap'
            },
            // shared: ['react', 'react-dom']
            shared: packagesJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)

// we will assign it the result of merging together our common config and the dev config 
// by listing out the dev config second, that means that the dev config is going to override or 
// kind of take priority over any other similar options that we might have assigned to common config.