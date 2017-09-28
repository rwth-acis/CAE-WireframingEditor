/*global vls*/
import { WireframeToModel } from '../../src/js/mapper/CAE.js';
import Xml1 from '../data/wireframe_1.xml';
import Xml2 from '../data/wireframe_2.xml';
import { expect } from 'chai';
import WireframeModel from '../../src/js/WireframeModel.js';
import { mxCodec, mxUtils } from '../../src/js/misc/mxExport.js';
import Util from '../../src/js/misc/Util.js';
import $ from 'jquery';

export default function () {
    function ModelTester(model, wireframeModel) {
        var defaultParent = wireframeModel.root.children[0];

        function helperFnc(parent) {
            if (!parent.children || parent.children.length < 1) return;
            for (var i = 0; i < parent.children.length; i++) {
                var cell = parent.children[i];
                expect(model.nodes.hasOwnProperty(cell.id)).to.be.true;
                var node = model.nodes[cell.id];

                //Check type

                var type = Util.GetValueFormAttributes(node, 'type');
                expect(cell.constructor.HTML_NODE_NAME).to.be.equal(type);//TODO: might fail here for some ui elements


                //check for the shared tag
                var collaborative = Util.GetValueFormAttributes(node, 'collaborative');
                if (collaborative) {
                    var $cell = $(cell.value);
                    var $tag = $cell.find('tagObj[tagType=Shared]');
                    expect($tag.length).to.be.equal(1);
                }

                var hasConnectionToWidget = false;
                var hasConnectionToParent = false;
                for (var key in model.edges) {
                    if (model.edges.hasOwnProperty(key)) {
                        var edge = model.edges[key];
                        switch (edge.type) {
                            case 'Widget to HTML Element':
                                if (edge.target === cell.id)
                                    hasConnectionToWidget = true;
                                break;
                            case 'hasChild':
                                if (cell.parent.id === edge.source && cell.id === edge.target)
                                    hasConnectionToParent = true;

                                break;
                        }
                    }
                }
                expect(hasConnectionToWidget).to.be.true;
                if(cell.parent.id !== '1')
                    expect(hasConnectionToParent).to.be.true;
                else 
                    expect(hasConnectionToParent).to.be.false;

                helperFnc(cell);
            }
        }
        helperFnc(defaultParent);
    }
    describe('WireframeToModel Tests', function () {
        it('Test wireframe_1', function () {
            var doc = mxUtils.parseXml(Xml1);
            var model = new WireframeModel();
            var codec = new mxCodec(doc);
            codec.decode(doc.documentElement.firstChild, model);
            model.initMetaFromXml(doc.documentElement);
            ModelTester(WireframeToModel(model, vls), model);
        });
        it('Test wireframe_2', function () {
            var doc = mxUtils.parseXml(Xml2);
            var model = new WireframeModel();
            var codec = new mxCodec(doc);
            codec.decode(doc.documentElement.firstChild, model);
            model.initMetaFromXml(doc.documentElement);
            ModelTester(WireframeToModel(model, vls), model);
        });
    });
}