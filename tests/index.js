require(['../node_modules/mocha/mocha.css']);
import Main from '../src/js/Main.js';
import {mxWindow} from '../src/js/misc/mxExport.js';
require('../node_modules/mocha/mocha.js');
import $ from 'jquery';
import WireframeModelTest from './src/WireframeModel.test.js';

var WrapMain = function(){
    var deferred = $.Deferred();
    $(function(){
        Main();
        deferred.resolve();
    });
    return deferred.promise();
}

WrapMain().done(function(){
    mocha.setup('bdd');
    mocha.checkLeaks();
    //mocha.timeout(1000);

    var tb = document.getElementById('mocha');
    var wnd = new mxWindow('Tests', tb, 800, 50, 500, 500, true, true);
    wnd.setVisible(true);
    wnd.setResizable(true);
    WireframeModelTest();

    mocha.run();
});