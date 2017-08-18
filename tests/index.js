/*global y*/
require(['../node_modules/mocha/mocha.css']);
import {
    mxWindow,
    mxUtils
} from '../src/js/misc/mxExport.js';
require('../node_modules/mocha/mocha.js');
import $ from 'jquery';
import WireframeTest from './src/Wireframe.test.js';
import WireframeToModelTest from './src/WireframeToModel.test.js';
import ModelToWireframeTest from './src/ModelToWireframe.test.js';
import GoogleLogin from '../src/js/GoogleLogin.js';
import YjsSync from '../src/js/misc/YjsSync.js';
import Main from '../src/js/Main.js';
import TagRegistry from '../src/js/tags/TagRegistry.js';

$(function () {
    YjsSync('yireframetesting').done(function (y) {
        var vls = y.share.data.get('metamodel');
        if (vls) {
            window.vls = vls;
        } else {
            var vls = require('../src/data/vls.json');
            window.vls = vls;
        }
        //Important load a vls before calling Main
            TagRegistry.initFromVLS(vls);
            var editor = Main();
            GoogleLogin();

            mocha.setup('bdd');
            mocha.checkLeaks();
            //mocha.timeout(1000);

            var tb = document.getElementById('mocha');
            var wnd = new mxWindow('Tests', tb, 850, 50, 550, 550, true, true);
            wnd.setVisible(true);
            wnd.setResizable(true);
            wnd.setScrollable(true);
            wnd.setMaximizable(true);
            var doc = mxUtils.parseXml(y.share.data.get('wireframe'));
            WireframeTest(doc.documentElement, editor.graph);
            WireframeToModelTest();
            ModelToWireframeTest(editor);
            mocha.run();

    });
});