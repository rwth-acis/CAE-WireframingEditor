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
        Loader.checkSuccessful(0, 50);
        var vls = y.share.data.get('metamodel');
        if (vls)
            window.vls = vls;
        else {
            vls = require('./data/vls.json');
            window.vls = vls;
        }
        //Important load a vls before calling Main
        var editor = Main(config);
        Loader.checkSuccessful(1, 100);
        Loader.destroy(500);
        
        GoogleLogin().done(function (userId) {
            CAELiveMapper.init(editor, userId);
        });
    });
});
