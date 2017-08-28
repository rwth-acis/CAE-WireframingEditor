import {ModelToWireframe} from '../../src/js/mapper/CAE.js';
import Util from '../../src/js/misc/Util.js';
import model1 from '../data/frontend_model_1.json';
import model2 from '../data/frontend_model_2.json';
import { expect } from 'chai';
import $ from 'jquery';
export default function(editor){
    var WireframeTester = function(model, wireframe){
        expect(wireframe).to.be.not.null;
        var numberOfUIElements =0;

        var childMap = {};
        var $wireframe = $(wireframe);
        
        expect($wireframe.find('WireframeModel').length).to.be.equal(1);
        expect($wireframe.find('root').length).to.be.equal(1);
        var $root = $wireframe.find('#0');
        expect($root.length).to.be.equal(1);
        expect($root[0].tagName.toLowerCase()).to.be.equal('mxcell');
        var $defaultParent = $wireframe.find('#1');
        expect($defaultParent.length).to.be.equal(1);
        expect($defaultParent[0].tagName.toLowerCase()).to.be.equal('mxcell');
        
        expect($wireframe.find('mxCell').length).to.be.equal(2);
        for (var key in model.edges) {
            if (model.edges.hasOwnProperty(key)) {
                var edge = model.edges[key];
                if (edge.type === 'hasChild') {
                    childMap[edge.target] = edge.source;
                }
            }
        }
        for (var key in model.nodes) {
            if (model.nodes.hasOwnProperty(key) && model.nodes[key].type === 'HTML Element') {
                var node = model.nodes[key];
                var type = Util.GetValueFormAttributes(node, 'type');
                var Ctor = editor.getUIComponentFromHTMLName(type);
                var $ui = $wireframe.find('#'+key);
                expect($ui.length).to.be.equal(1);
                expect($ui.find(Ctor.name).length).to.be.equal(1);
                //check parent
                if(childMap.hasOwnProperty(key))
                    expect($ui.find('*[parent=' + childMap[key] + ']').length).to.be.equal(1);
                else
                    expect($ui.find('*[parent=1]').length).to.be.equal(1);

                var collaborative = Util.GetValueFormAttributes(node, 'collaborative');
                if(collaborative){
                    //check if a shared tag is present
                    var $tagRoot = $ui.find('tagRoot');
                    expect($tagRoot.length).to.be.equal(1);
                    var $shared = $tagRoot.find('*[tagType=Shared]');
                    expect($shared.length).to.be.equal(1);
                }
                numberOfUIElements++;
            }
            else if (model.nodes.hasOwnProperty(key) && model.nodes[key].type === 'Widget') {
                var node = model.nodes[key];
                var height = Util.GetValueFormAttributes(node, 'height');
                var width= Util.GetValueFormAttributes(node, 'width');
                expect(height).to.be.equal($wireframe.attr('height'));
                expect(width).to.be.equal($wireframe.attr('width'));
            }
        }
        expect($wireframe.find('uiObj').length).to.be.equal(numberOfUIElements);
    }

    describe('ModelToWireframe Tests', function(){
        it('Validate transformation of frontend_model_1.json', function(){
            WireframeTester(model1, ModelToWireframe(model1, editor));
        });

        it('Validate transformation of frontend_model_2.json', function(){
            WireframeTester(model2, ModelToWireframe(model2, editor));
        });
    });
}