/*global y*/
require(['../node_modules/mocha/mocha.css']);
import Main from '../src/js/Main.js';
import {mxWindow, mxUtils} from '../src/js/misc/mxExport.js';
require('../node_modules/mocha/mocha.js');
import $ from 'jquery';
import WireframeTest from './src/Wireframe.test.js';
import GoogleLogin from '../src/js/GoogleLogin.js';

var WrapMain = function(){
    var deferred = $.Deferred();
    $(function(){
        Main(GoogleLogin, false, deferred);
    });
    return deferred.promise();
}

WrapMain().done(function(editor){
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