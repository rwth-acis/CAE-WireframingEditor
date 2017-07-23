/*global y*/
require(['../node_modules/mocha/mocha.css']);
import {
    mxWindow,
    mxUtils
} from '../src/js/misc/mxExport.js';
require('../node_modules/mocha/mocha.js');
import $ from 'jquery';
import WireframeTest from './src/Wireframe.test.js';
import GoogleLogin from '../src/js/GoogleLogin.js';
import YjsSync from '../src/js/misc/YjsSync.js';

$(function () {
    YjsSync().done(function (y) {
        var vls = y.share.data.get('vls');
        if (vls) {
            window.vls = vls;
        } else {
            var vls = require('../src/data/vls.json');
            window.vls = vls;
        }
        //Important load a vls before calling Main
        require(['../src/js/Main.js'], function (Main) {
            var editor = Main.default();
            GoogleLogin();

            mocha.setup('bdd');
            mocha.checkLeaks();
            //mocha.timeout(1000);

            var tb = document.getElementById('mocha');
            var wnd = new mxWindow('Tests', tb, 850, 50, 750, 500, true, true);
            wnd.setVisible(true);
            wnd.setResizable(true);
            wnd.setScrollable(true);
            wnd.setMaximizable(true);
            var doc = mxUtils.parseXml(y.share.data.get('model'));

            WireframeTest(doc.documentElement, editor.graph);

            mocha.run();
        });

    });
});