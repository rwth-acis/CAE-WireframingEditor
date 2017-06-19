import {mxCellOverlay, mxUtils, mxConstants, mxCodec, mxCodecRegistry, mxObjectCodec}  from '../misc/mxExport.js';
import Util from '../misc/Util.js';

 mxUtils.extend(AbstractTag, mxCellOverlay);

/**
 * Abstract tag class for interacitivty tags
 * @param {mxImage} image 
 * @param {string} tooltip 
 * @param {string} align 
 * @param {string} verticalAlign 
 * @param {*} offset 
 * @param {*} cursor 
 */
function AbstractTag(image, tooltip, offset, cursor){
    var comboAttr = {};
    var xmlDoc = mxUtils.createXmlDocument();
    this.tagObj = xmlDoc.createElement('tagObj');
    this.tagObj.setAttribute('tagType', this.constructor.name.toLowerCase());
    this.tagObj.setAttribute('_id', Util.GUID());

    mxCellOverlay.call(this, image , tooltip, mxConstants.ALIGN_RIGHT, mxConstants.ALIGN_TOP, offset, cursor);

    this.getComboAttr = function (name) {
        if (comboAttr.hasOwnProperty(name))
            return comboAttr[name];
        else return undefined;
    }
    this.addComboAttr = function (name, values) {
        if (!comboAttr.hasOwnProperty(name)) {
            comboAttr[name] = values;
            return true;
        } else return false;
    }
}

AbstractTag.prototype.toXML = function(){
    var encoder = new mxCodec();
    encoder.encodeDefaults = true;
    var result = encoder.encode(this);
    return mxUtils.getXml(result);
}

AbstractTag.registerCodec = function (ctor) {
    var codec = new mxObjectCodec();
    codec.template = new ctor();
    mxCodecRegistry.register(codec);
}
export default AbstractTag;