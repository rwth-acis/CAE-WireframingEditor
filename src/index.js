require(['./css/style.css',
 './../node_modules/jquery-ui/themes/base/theme.css', 
 './../node_modules/jquery-ui/themes/base/core.css',
'./../node_modules/jquery-ui/themes/base/tabs.css',
'./../node_modules/jquery-ui/themes/base/dialog.css',
'./../node_modules/jquery-ui/themes/base/progressbar.css',
'../node_modules/mxgraph/javascript/src/css/common.css',
 '../node_modules/jstree/dist/themes/default/style.min.css']);

import $ from 'jquery';
import GoogleLogin from './js/GoogleLogin.js';
import YjsSync from './js/misc/YjsSync.js';
import Main from './js/Main.js';
import TagRegistry from './js/tags/TagRegistry.js';
import CAELiveMapper from './js/mapper/CAELiveMapper.js';
import Loader from './js/Loader.js';

$(function () {
    Loader.init();
    YjsSync('yireframetesting5').done(function (y) {
        Loader.check(0, 33);
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
        Loader.check(1, 66);
        
        
        GoogleLogin().done(function (userId) {
            CAELiveMapper.init(editor, userId);
            Loader.check(2, 100);
            Loader.destroy(500);
        });
    });
});
