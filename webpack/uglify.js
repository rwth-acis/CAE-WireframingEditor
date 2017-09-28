var webpack = require('webpack');
module.exports = new webpack.optimize.UglifyJsPlugin({
  mangle: false
})