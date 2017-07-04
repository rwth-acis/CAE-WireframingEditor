var fs = require('fs');
var _ = require('lodash');
fs.readFile('src/js/misc/Constants.js', 'utf8', function(err, data){
    fs.writeFile('task/Constants.js', data);
    var compile = _.template(data);
    var output = compile({basePath: "http://localhost:8080/"});
    output = output.replace('var widgetMode = false;', 'var widgetMode = true;');
    fs.writeFile('src/js/misc/Constants.js', output);
});