/*global mxLog*/
import $ from 'jquery';
import RoleLogin from './js/ROLELogin.js';
import YjsSync from './js/misc/YjsSync.js';
import SyncMeta from 'syncmeta-plugin';
import Main from './js/Main.js';
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
        //Important load a vls before calling Main
            Main();
            RoleLogin();
            SyncMeta.init(y);
            SyncMeta.onNodeAdd(function(event){
                mxLog.writeln('Node was created in SyncMeta: ' + JSON.stringify(event));
            });
     });
});
