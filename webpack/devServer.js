var path = require('path');
module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        compress: true,
        port: 8085
      }
}