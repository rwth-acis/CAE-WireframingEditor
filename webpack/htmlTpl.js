var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function(path, inject){
    return new HtmlWebpackPlugin({
    title: 'CAE Wireframing Editor',
    template: path,
    inject: inject
  });
}