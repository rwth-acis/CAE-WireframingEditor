require(['./css/style.css',
'./../node_modules/jquery-ui/themes/base/theme.css', 
'./../node_modules/jquery-ui/themes/base/core.css',
'./../node_modules/jquery-ui/themes/base/tabs.css',
'./../node_modules/jquery-ui/themes/base/dialog.css',
'./../node_modules/jquery-ui/themes/base/progressbar.css',
'../node_modules/mxgraph/javascript/src/css/common.css',
'../node_modules/jstree/dist/themes/default/style.min.css',
'../node_modules/noty/lib/noty.css']);

import $ from 'jquery';
import RoleLogin from './js/ROLELogin.js';
import YjsSync from './js/misc/YjsSync.js';
import Main from './js/Main.js';
import CAELiveMapper from './js/mapper/CAELiveMapper.js';
import Loader from './js/Loader.js';

import config from './data/config_widget.json';

$(function(){
    Loader.init();
    var roleSpaceTitle = frameElement.baseURI.substring(frameElement.baseURI.lastIndexOf('spaces/')).replace(/spaces|#\S*|\?\S*|\//g, '');
     YjsSync(roleSpaceTitle).done(function (y) {
        Loader.checkSuccessful(0, 25);        
        var vls = y.share.data.get('metamodel');
        if(vls){
          window.vls = vls;
        }
        else{
            var vls = require('./data/vls.json');
            window.vls = vls;
        }
        //Important load a vls before calling Main
        var editor = Main(config, true);
        Loader.checkSuccessful(1, 25);
        
        CAELiveMapper.init(editor);
        Loader.checkSuccessful(2, 75);

        RoleLogin().done(function(){
            Loader.checkSuccessful(3, 100);
            Loader.destroy(500);    
        }).fail(function(){
            $('.widget-title-bar', frameElement.offsetParent).find('span').text('CAE-WireframingEditor[NOT LOGGED IN]');
            Loader.destroy(500);       
            Loader.checkFail(3, 100);     
        });
        
        
        
     });
});
