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
import GoogleLogin from './js/GoogleLogin.js';
import YjsSync from './js/misc/YjsSync.js';
import Main from './js/Main.js';
import CAELiveMapper from './js/mapper/CAELiveMapper.js';
import Loader from './js/Loader.js';

import config from './data/config.json';

$(function () {
    Loader.init();
    YjsSync('yireframetesting5').done(function (y) {
        Loader.check(0, 50);
        var vls = y.share.data.get('metamodel');
        if (vls)
            window.vls = vls;
        else {
            vls = require('./data/vls.json');
            window.vls = vls;
        }
        //Important load a vls before calling Main
        var editor = Main(config);
        Loader.check(1, 100);
        Loader.destroy(500);
        
        GoogleLogin().done(function (userId) {
            CAELiveMapper.init(editor, userId);
        });
    });
});
