var  _ = require('lodash');
var fs = require('fs');

fs.readFile('src/widget.xml', 'utf8', function(err, data){
    var widgetXML = data;
    fs.readFile('widget/index.html', 'utf8', function(err, html){
        html = html.replace('<!=','<%=').replace('!>', '%>');
        var htmlTpl = _.template(html);
        var htmlOut = htmlTpl({basePath : 'http://localhost:8080/'});
        var compiled = _.template(widgetXML);
        var output = compiled({html: htmlOut});
        fs.writeFile('widget/yireframe.xml', output, function(){
            if(err) throw err;
            console.log('Widget successfully created!');
        });
    })
});
