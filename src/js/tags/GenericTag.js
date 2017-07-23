/*global y*/
import {
    mxUtils,
    mxImage
} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';
import Y from 'yjs';
import TagRegistry from './TagRegistry.js';
mxUtils.extend(GenericTag, AbstractTag);
AbstractTag.registerCodec(GenericTag);

function GenericTag(cell, offset, className) {

    var reg;
    try{
        reg = TagRegistry.get(className);
    }
    catch(e){
        reg = null;
    }
            
    if (reg)
        AbstractTag.call(this, cell, new mxImage(reg.image, CONST.TAG.SIZE, CONST.TAG.SIZE), className, offset);
    else
        AbstractTag.call(this, cell, new mxImage(CONST.IMAGES.DEFAULT_TAG, CONST.TAG.SIZE, CONST.TAG.SIZE), className, offset);


    this.tagObj.setAttribute('tagType', className);

    this.initAttributes = function () {
        var reg = TagRegistry.get(this.tagObj.getAttribute('tagType'));
        for (var attrKey in reg.attrs) {
            var type = reg.attrs[attrKey];
            if (type === 'string')
                this.tagObj.setAttribute('_' + attrKey, '');
            else if (type === 'boolean')
                this.tagObj.setAttribute('_' + attrKey, true);
            else {
                this.tagObj.setAttribute('_' + attrKey, type[0]);
                this.getComboAttrMap().addComboAttr('_' + attrKey, type);
            }
        }
    }

    this.createShared = function (createdByLocalUser) {
        if (createdByLocalUser) {
            for (var attrKey in reg.attrs) {
                if (reg.attrs.hasOwnProperty(attrKey) && reg.attrs[attrKey] === 'string')
                    y.share.attrs.set(this.getId() + '_' + attrKey, Y.Text);
            }
        }
    }

    this.initShared = function () {
        for (var attrKey in reg.attrs) {
            if (reg.attrs.hasOwnProperty(attrKey) && reg.attrs[attrKey] === 'string')
                this.initYText('_' + attrKey);
        }
    }
    if (reg)
        this.initAttributes();

}
export default GenericTag;