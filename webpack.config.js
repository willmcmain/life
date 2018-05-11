const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            'node_modules',
        ],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: __dirname + '/dist',
        port: 9000
    }
}
