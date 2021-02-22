/*
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    devServer: {
        port: 3000,
        inline: true //refresh everytime we make changes
    },
    module: {
        rules: [ //rules to search for files
            {
                test: /\.js$/, //all my javascript file will be affected by the bundle
                exclude: /node_modules/, //excludes node modules because we don't want it to apply to node
                use: {
                    loader: 'babel.loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugin: [
        new HtmlWebpackPlugin({ //We need to require it, so on top is the const htmlwebpackplugin
            template: './public/index.html'
        })
    ]
}

*/
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    devServer: {
        port: 3000,
        inline: true 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

