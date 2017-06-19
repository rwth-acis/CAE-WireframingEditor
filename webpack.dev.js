var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  },
  devtool: 'inline-source-map',
  entry: {
    app: './src/js/index.js'
    //"bundle.css" : ['./src/css/style.css',  './node_modules/jquery-ui/themes/base/theme.css', './node_modules/jquery-ui/themes/base/tabs.css']
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
            url: true
          }
        }
      })
    },
    {
      test: /\.(jpeg|png|gif|svg)$/i,
      loader: "file-loader?name=../images/[name].[ext]&emitFile=false"
    }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    }),
    new HtmlWebpackPlugin({
      title: 'CAE Wireframing Editor',
      template: './src/index.ejs',
      inject: 'head'

    }),
    new ExtractTextPlugin({
      filename: "css/bundle.css",
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      from: 'src/images',
      to: 'images'
    },
    {
      from: 'src/js/shapes/html5stencils.xml',
      to: 'html5stencils.xml'
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
};