const baseWebpackCfg = require('./webpack.config')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(baseWebpackCfg, {
    // watch: true,
    devtool: '#source-map',
    devServer: {
        inline: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
