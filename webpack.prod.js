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
        'yVendor': ['yjs', 'y-websockets-client', 'y-map', 'y-array', 'y-text', 'y-memory'],
        'jVendor': ['jquery', 'jquery-ui', 'jstree'],
        'mxVendor': ['mxgraph'],
        'vendor': ['lodash', 'randomcolor']
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