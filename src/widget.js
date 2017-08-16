/*global mxLog*/
import $ from 'jquery';
import RoleLogin from './js/ROLELogin.js';
import YjsSync from './js/misc/YjsSync.js';
import Main from './js/Main.js';
import TagRegistry from './js/tags/TagRegistry.js';
import CAELiveMapper from './js/mapper/CAELiveMapper.js';

$(function(){
    var roleSpaceTitle = frameElement.baseURI.substring(frameElement.baseURI.lastIndexOf('spaces/')).replace(/spaces|#\S*|\?\S*|\//g, '');
     YjsSync(roleSpaceTitle).done(function (y) {
        var vls = y.share.data.get('metamodel');
        if(vls){
          window.vls = vls;
        }
        else{
            var vls = require('./data/vls.json');
            window.vls = vls;
        }
        TagRegistry.initFromVLS(vls);
        //Important load a vls before calling Main
        var editor = Main();
        RoleLogin();
        CAELiveMapper.init(editor);
            
     });
});
