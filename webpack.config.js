var webpack = require('webpack');
var path = require('path');
module.exports = function(env) {
  return require(`./webpack.${env || 'dev'}.js`)
}