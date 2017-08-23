/*global y*/
import {expect} from 'chai';
import TagTest from './Tag.test.js';

/**
 * @param {XmlDocument} uiObj the uiObj from XML
 * @param {Wireframe} wireframe the wireframe graph
 * @return {undefined}
 */
export default function(uiObj, wireframe){
    var cell = wireframe.getModel().getCell(uiObj.id);
    var type = uiObj.getElementsByTagName(cell.constructor.name)[0];
    var tags = uiObj.getElementsByTagName('tagObj');
    describe('UI element check ' + cell.constructor.name + ':' + cell.getId(), function(){
        it('Check cell and type of cell', function(){
            expect(cell).to.be.not.null;
            expect(type).to.be.not.null;
            expect(uiObj.getAttribute('uiType')).to.be.equal(cell.constructor.name.toLowerCase());
            expect(type.tagName).to.be.equal(cell.constructor.name);
        });
    
        it('Check geometry of the element', function(){
            var x_geometry = type.firstElementChild;
            if(x_geometry.hasAttribute('x'))
                expect(cell.geometry.x).to.be.equal(parseInt(x_geometry.getAttribute('x')));
            if(x_geometry.hasAttribute('y'))
                expect(cell.geometry.y).to.be.equal(parseInt(x_geometry.getAttribute('y')));
            expect(cell.geometry.width).to.be.equal(parseInt(x_geometry.getAttribute('width')));
            expect(cell.geometry.height).to.be.equal(parseInt(x_geometry.getAttribute('height')));
        });
        
        it('Check parent', function(){
            var x_parent = type.getAttribute('parent');
            var parent = wireframe.getModel().getParent(cell);
            expect(x_parent).to.be.equal(parent.getId());
        });

        it('Compare Attributes of cell and Xml', function(){
            var m_obj = cell.value;
            for(var i=0;i<m_obj.attributes.length;i++){
                var m_attr = m_obj.attributes[i];
                var x_attr = uiObj.getAttribute(m_attr.name);
                expect(m_attr.value).to.be.equal(x_attr);
            }
        });

        it('Check attributes in Yjs', function(){
            var m_obj = cell.value;
            for(var i=0;i<m_obj.attributes.length;i++){
                var m_attr = m_obj.attributes[i];
                if(m_attr.name[0] == '_' && !cell.getComboAttrMap().getComboAttr(m_attr.name) && m_attr.value !== 'true' && m_attr.value !== 'false'){
                    var ytext = y.share.attrs.get(cell.getId() + m_attr.name);
                    expect(ytext).to.be.not.null;
                }
            }
        });

        it('Check number of tags and overlays', function(){
            expect(tags.length).to.be.equal(cell.overlays ? cell.overlays.length : 0);
            expect(tags.length).to.be.equal(cell.getTagCounter());
            expect(tags.length).to.be.equal(cell.value.getElementsByTagName('tagObj').length);
        });
        
        for(var i=0;i<tags.length;i++){
            TagTest(tags[i], cell, wireframe);
        }
    });
};