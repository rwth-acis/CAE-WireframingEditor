var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    //devtool: 'cheap-module-source-map',
    //devtool: 'inline-source-map', 
    entry: {
        app: './src/index.js',
        //"bundle.css" : ['./src/css/style.css',  './node_modules/jquery-ui/themes/base/theme.css', './node_modules/jquery-ui/themes/base/tabs.css']
        'yVendor': ['./node_modules/yjs/dist/y.js',
        './node_modules/y-websockets-client/dist/y-websockets-client.js',
        './node_modules/y-map/dist/y-map.js',
        './node_modules/y-array/dist/y-array.js',
        './node_modules/y-text/dist/y-text.js',
        './node_modules/y-memory/dist/y-memory.js'],
        'jVendor': ['jquery', 'jquery-ui', 'jstree'],
        'mxVendor': ['mxgraph'],
        'vendor': ['lodash', 'randomcolor', 'noty']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[name].map',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: {
                    loader: "css-loader",
                    options: {
                        url: true,
                        minimize: true
                    }
                }
            })
        },
        {
            test: /\.(jpeg|png|gif|svg)$/i,
            loader: "file-loader?name=../images/[name].[ext]&emitFile=false"
        },
        {
            test: /\.json$/,
            use: 'json-loader'
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/bundle.css",
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['yVendor', 'jVendor', 'mxVendor', 'vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            title: 'CAE Wireframing Editor',
            template: './src/index.ejs',
            inject: 'head'

        }),
        new CopyWebpackPlugin([{
            from: 'src/images',
            to: 'images'
        },
        {
            from: './node_modules/mxgraph/javascript/src/images',
            to: './images'
        },
        {
            from: './node_modules/jquery-ui/themes/base/images',
            to: './images'
        },
        {
            from: './node_modules/jstree/dist/themes/default/32px.png',
            to: './images/32px.png'
        },
        {
            from: './node_modules/jstree/dist/themes/default/throbber.gif',
            to: './images/throbber.gif'
        }
        ]),
        new webpack.optimize.UglifyJsPlugin({
            exclude: ['yVendor.js'],
            mangle: false
        })
    ]
};