var path = require('path');

module.exports = function(env) {
  console.log(env);
  var conf = require(`./webpack/base.js`);
  if(env == undefined || env === 'test'){
    var devServer = require('./webpack/devServer.js');
    Object.assign(conf, devServer);
  }

  if(env === 'dev' || env === 'prod' || env == undefined){
    var htmlTpl = require('./webpack/htmlTpl.js')('src/index.ejs');
    conf.plugins.push(htmlTpl);
  }
  else if(env === 'test'){
    conf.entry.app = './tests/index.js';
    var htmlTpl = require('./webpack/htmlTpl.js')('tests/index.ejs');
    conf.plugins.push(htmlTpl);
  }
  else if(env === 'widget'){
    conf.entry.app = './src/widget.js';    
    conf.output.path = path.resolve(__dirname, 'widget');
    var htmlTpl = require('./webpack/htmlTpl.js')('src/widget.ejs');
    conf.plugins.push(htmlTpl);
  }

  if(env == undefined || env === 'test'){
    conf.plugins.push(require('./webpack/dashboard.js'));
  }
  console.log(conf);
  return conf;
}