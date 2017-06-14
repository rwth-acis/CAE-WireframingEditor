import {mxCellOverlay, mxUtils, mxConstants}  from '../misc/mxExport.js';
 
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

export default AbstractTag;