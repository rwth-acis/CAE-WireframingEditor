/*global y*/
import { expect } from 'chai';
export default function(xmlDoc, wireframe){
    var model = wireframe.getModel();
   
    describe('Wireframe Model Meta Attributes Test', function(){
        it('Check size and bounds of the wireframe', function(){
            var maxBounds = wireframe.maximumGraphBounds;
            var m_width = model.getMeta().getAttribute('width');
            var m_height = model.getMeta().getAttribute('height');

            expect(m_width).to.be.equal(xmlDoc.getAttribute('width'));
            expect(m_height).to.be.equal(xmlDoc.getAttribute('height'));
            expect(parseInt(m_height)).to.be.equal(maxBounds.height);
            expect(parseInt(m_width)).to.be.equal(maxBounds.width);
            expect(m_width+'px').to.be.equal(wireframe.container.parentElement.style.width);
            expect(m_height+'px').to.be.equal(wireframe.container.parentElement.style.height);
        });

        it('Compare meta attribtues of the model and XML', function(){
            var meta = model.getMeta();
            for(var i=0;i<meta.attributes.length;i++){
                var m_attr = meta.attributes[i];
                var x_attr = xmlDoc.getAttribute(m_attr.name);
                expect(m_attr.value).to.be.equal(x_attr);
            }
        });

        it('Check meta attributes in Yjs', function(){
            var meta = model.getMeta();
            for(var i=0;i<meta.attributes.length;i++){
                var m_attr = meta.attributes[i];
                if(m_attr.name[0]==='_'){
                    var ytext = y.share.attrs.get('meta' + m_attr.name);
                    expect(ytext).to.be.not.null;
                }
            }
        });

        /*it('Check the Name in the Wireframe bar', function(){
            expect(model.getMeta().getAttribute('_name')).to.be.equal(wireframe.container.previousElementSibling.innerText);
            expect(xmlDoc.getAttribute('_name')).to.be.equal(wireframe.container.previousElementSibling.innerText);
        });*/
    });
};