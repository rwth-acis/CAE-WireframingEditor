/*global y*/
import {expect} from 'chai';

/**
 * @param {XMlDocument} x_tagObj the tag object from xml
 * @param {UIControl} cell the cell 
 * @return {undefined}
 */
export default function(x_tagObj, cell){
    var t = cell.getTagById(x_tagObj.id);

    describe('Tag element check for ' + x_tagObj.getAttribute('tagType') + ': ' + x_tagObj.id.replace(cell.getId()+'_',''), function(){
        it('Check type of Tag', function(){
            expect(t).to.be.not.null;
            expect(t.tagObj.getAttribute('tagType')).to.be.equal(x_tagObj.getAttribute('tagType'));           
        });

        it('Compare attributes values of tag', function(){
            for(var i=0;i<x_tagObj.attributes.length;i++){
                var x_attr = x_tagObj.attributes[i];
                expect(x_attr.value).to.be.equal(t.tagObj.getAttribute(x_attr.name));
            }
        });
        it('Check attributes in Yjs', function(){
            for(var i=0;i<x_tagObj.attributes.length;i++){
                var x_attr = x_tagObj.attributes[i];
                if(x_attr.name[0] === '_' && !t.getComboAttrMap().getComboAttr(x_attr.name) && x_attr.value !== 'true' && x_attr.value !== 'false'){
                    var ytext = y.share.attrs.get(x_tagObj.id + x_attr.name);
                    expect(ytext).to.be.not.null;
                }
            }
        });
    });
};