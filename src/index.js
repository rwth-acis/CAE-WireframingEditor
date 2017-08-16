import $ from 'jquery';
import GoogleLogin from './js/GoogleLogin.js';
import YjsSync from './js/misc/YjsSync.js';
import Main from './js/Main.js';
import TagRegistry from './js/tags/TagRegistry.js';
import CAELiveMapper from './js/mapper/CAELiveMapper.js';

$(function () {
    YjsSync('yireframetesting').done(function (y) {
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
        GoogleLogin().done(function (userId) {
            CAELiveMapper.init(editor, userId);
        });
    });
});
