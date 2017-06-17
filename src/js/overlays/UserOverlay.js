import {mxCellOverlay, mxUtils, mxConstants, mxImage}  from '../misc/mxExport.js';
 import CONST from '../misc/Constants.js';
 mxUtils.extend(UserOverlay, mxCellOverlay);

/**
 * User image overlay class for better awareness 
 * @param {string} username 
 * @param {string} imageURL
 * @param {string} align 
 * @param {string} verticalAlign 
 * @param {*} offset 
 * @param {*} cursor 
 */
function UserOverlay(username, imageURL, offset, cursor){
    mxCellOverlay.call(this, new mxImage(CONST.IMAGES.DEFAULT_USER || imageURL, CONST.TAG.SIZE, CONST.TAG.SIZE), username, mxConstants.ALIGN_RIGHT, mxConstants.ALIGN_BOTTOM, offset, cursor);
}

export default UserOverlay;