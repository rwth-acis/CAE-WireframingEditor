require(['../src/css/style.css',
'./../node_modules/jquery-ui/themes/base/theme.css', 
'./../node_modules/jquery-ui/themes/base/core.css',
'./../node_modules/jquery-ui/themes/base/tabs.css',
'./../node_modules/jquery-ui/themes/base/dialog.css',
'./../node_modules/jquery-ui/themes/base/progressbar.css',
'../node_modules/mxgraph/javascript/src/css/common.css',
'../node_modules/jstree/dist/themes/default/style.min.css',
'../node_modules/noty/lib/noty.css',
'../node_modules/mocha/mocha.css']);

import {
    mxWindow,
    mxUtils
} from '../src/js/misc/mxExport.js';
require('../node_modules/mocha/mocha.js');
import $ from 'jquery';
import GoogleLogin from '../src/js/GoogleLogin.js';
import YjsSync from '../src/js/misc/YjsSync.js';
import Main from '../src/js/Main.js';

import WireframeTest from './src/Wireframe.test.js';
import WireframeToModelTest from './src/WireframeToModel.test.js';
import ModelToWireframeTest from './src/ModelToWireframe.test.js';
import OperationsTest from './src/Operations.test.js';

import config from '../src/data/config.json';

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
            var editor = Main(config);
            GoogleLogin();

            mocha.setup('bdd');
            //mocha.checkLeaks();
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
            OperationsTest(editor);                        
            mocha.run();

    });
});