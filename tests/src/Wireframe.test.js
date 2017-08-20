import {expect} from 'chai';
import WireframeModelTest from './WireframeModel.test.js';
import UIControlTest from './UIControl.test.js';

export default function (xmlDoc, wireframe) {

    describe('Check Model Initialization from XML', function () {
        WireframeModelTest(xmlDoc, wireframe);

        describe('UI Element tests', function () {
            var uiObjs = xmlDoc.getElementsByTagName('uiObj');
            
            it('Check number of UI elements', function(){
                var no = Object.keys(wireframe.getModel().cells).length; 
                expect(no-2).to.be.equal(uiObjs.length);
                expect(xmlDoc.getElementsByTagName('root')[0].childElementCount).to.be.equal(no);
            });

            for (var i = 0; i < uiObjs.length; i++) {
                var uiObj = uiObjs[i];
                UIControlTest(uiObj, wireframe);
            }
        });
    });
}