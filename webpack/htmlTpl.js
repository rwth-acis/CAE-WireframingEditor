var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function(path){
    return new HtmlWebpackPlugin({
    title: 'CAE Wireframing Editor',
    template: path,
    inject: 'head'
  });
}