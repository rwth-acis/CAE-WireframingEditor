var  _ = require('lodash');
var fs = require('fs');

var jsonConfig = JSON.parse(fs.readFileSync('task/config.json', 'utf8'));

fs.readFile('src/widget.xml', 'utf8', function(err, data){
    var widgetXML = data;
    fs.readFile('widget/index.html', 'utf8', function(err, html){
        html = html.replace('<!=','<%=').replace('!>', '%>');
        var htmlTpl = _.template(html);
        var htmlOut = htmlTpl({basePath : jsonConfig.basePath});
        var compiled = _.template(widgetXML);
        var output = compiled({html: htmlOut});
        fs.writeFile('widget/yireframe.xml', output, function(){
            if(err) throw err;
            console.log('Widget successfully created!');
        });
        fs.rename('Constants.js', 'src/js/misc/Constants.js');//copy original version back
    })
});
