import {mxCellOverlay, mxUtils, mxConstants, mxCodec, mxCodecRegistry, mxObjectCodec}  from '../misc/mxExport.js';
 
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
    mxCellOverlay.call(this, image , tooltip, mxConstants.ALIGN_RIGHT, mxConstants.ALIGN_TOP, offset, cursor);


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