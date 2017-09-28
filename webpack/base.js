var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        'yVendor': ['./node_modules/yjs/dist/y.js',
        './node_modules/y-websockets-client/dist/y-websockets-client.js',
        './node_modules/y-map/dist/y-map.js',
        './node_modules/y-array/dist/y-array.js',
        './node_modules/y-text/dist/y-text.js',
        './node_modules/y-memory/dist/y-memory.js'],
        'jVendor': ['jquery', 'jquery-ui', 'jstree'],
        'mxVendor': ['mxgraph'],
        'vendor': ['lodash', 'randomcolor', 'noty'],
        "style":['./src/css/style.css',
        './node_modules/jquery-ui/themes/base/theme.css', 
        './node_modules/jquery-ui/themes/base/core.css',
        './node_modules/jquery-ui/themes/base/tabs.css',
        './node_modules/jquery-ui/themes/base/dialog.css',
        './node_modules/jquery-ui/themes/base/progressbar.css',
        './node_modules/mxgraph/javascript/src/css/common.css',
        './node_modules/jstree/dist/themes/default/style.min.css',
        './node_modules/noty/lib/noty.css']
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
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
                  url: true
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
          },
          {
            test: /\.(txt|xml)$/,
            use: 'raw-loader'
          } 
        ]
      },
      plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'yVendor', 'jVendor', 'mxVendor', 'vendor', 'style', 'manifest']
        }),
        new ExtractTextPlugin({
          filename: "css/style.css",
          allChunks: true
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
        ])
      ]
}