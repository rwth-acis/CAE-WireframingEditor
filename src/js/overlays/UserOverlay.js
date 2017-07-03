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
function UserOverlay(userId, username, imageURL, offset, cursor){
    mxCellOverlay.call(this, new mxImage(imageURL || CONST.IMAGES.DEFAULT_USER, CONST.TAG.SIZE, CONST.TAG.SIZE), username, mxConstants.ALIGN_RIGHT, mxConstants.ALIGN_BOTTOM, offset, cursor);
    var _userId = userId;
    this.getUserId = function(){
        return _userId;
    }
}

export default UserOverlay;