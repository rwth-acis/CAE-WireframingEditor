require(['./css/style.css',
 './../node_modules/jquery-ui/themes/base/theme.css', 
 './../node_modules/jquery-ui/themes/base/core.css',
'./../node_modules/jquery-ui/themes/base/tabs.css',
'./../node_modules/jquery-ui/themes/base/dialog.css',
'./../node_modules/jquery-ui/themes/base/progressbar.css',
'../node_modules/mxgraph/javascript/src/css/common.css',
 '../node_modules/jstree/dist/themes/default/style.min.css']);

import $ from 'jquery';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/ui/widgets/progressbar';

import GoogleLogin from './js/GoogleLogin.js';
import YjsSync from './js/misc/YjsSync.js';
import Main from './js/Main.js';
import TagRegistry from './js/tags/TagRegistry.js';
import CAELiveMapper from './js/mapper/CAELiveMapper.js';

$(function () {

    $("#init").dialog({
        resizable: false,
        modal : true,
        height: "auto",
        width: 400,
        classes: {
            "ui-dialog": "no-close",
        }
    });
    var check = function($node, progress){
        $node.append('<span class="ui-icon ui-icon-circle-check" style="float:left;"></span>');
        $node.css('opacity', 1);
        $progressbar.progressbar( "value", progress);
    }
    var $progressbar = $( "#progressbar" ), $progressLabel = $( ".progress-label" );
    $progressbar.progressbar({value : 0,
        change: function() {
            $progressLabel.text($progressbar.progressbar( "value" ) + "%" );
          },
          complete: function() {
            $progressLabel.text( "Complete!" );
          }});

    YjsSync('yireframetesting5').done(function (y) {
        check( $("#loading").find('p:eq(0)'), 33);
        var vls = y.share.data.get('metamodel');
        if (vls)
            window.vls = vls;
        else {
            vls = require('./data/vls.json');
            window.vls = vls;
        }
        TagRegistry.initFromVLS(vls);
        //Important load a vls before calling Main
        var editor = Main();
        check( $("#loading").find('p:eq(1)'), 66);
        
        
        GoogleLogin().done(function (userId) {
            CAELiveMapper.init(editor, userId);
            check( $("#loading").find('p:eq(2)'), 100);
            
            
            setTimeout(function(){
                $("#init").dialog( "destroy" );    
                $('#init').remove();            
            }, 2000);
        });
    });
});
