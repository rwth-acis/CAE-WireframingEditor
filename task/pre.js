var fs = require('fs');
var _ = require('lodash');
console.log('Run preprocessing task to build widget.');
fs.readFile('task/config.json', 'utf8', function (err, config) {
    var jsonConfig = JSON.parse(config);
    fs.readFile('src/js/misc/Constants.js', 'utf8', function (err, data) {
        fs.writeFileSync('Constants.js', data); //make a copy of Constants.js
        var compile = _.template(data);
        var output = compile({ basePath: jsonConfig.basePath });
        output = output.replace('var widgetMode = false;', 'var widgetMode = true;');
        fs.writeFileSync('src/js/misc/Constants.js', output);
        console.log('Preprocess Finished');
    });
});
