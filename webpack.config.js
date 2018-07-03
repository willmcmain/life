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
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
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
