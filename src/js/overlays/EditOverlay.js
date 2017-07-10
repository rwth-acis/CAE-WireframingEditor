import {mxCellOverlay, mxUtils, mxConstants, mxImage, mxEvent, mxPoint}  from '../misc/mxExport.js';
 import CONST from '../misc/Constants.js';
 import PropertyEditor from '../PropertyEditor.js';
 mxUtils.extend(EditOverlay, mxCellOverlay);

/**
 * 
 * @param {string} imageURL
 * @param {string} align 
 * @param {string} verticalAlign 
 * @param {*} offset 
 * @param {*} cursor 
 */
function EditOverlay(imageURL, cursor){
    mxCellOverlay.call(this, new mxImage(CONST.IMAGES.FLASH || imageURL, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Edit Attributes', mxConstants.ALIGN_LEFT, mxConstants.ALIGN_BOTTOM, new mxPoint(0, -15), cursor);
    this.bindClickEvent = function(graph){
        this.addListener(mxEvent.CLICK, function(sender, event){
            var mouseEvent = event.getProperty('event');
            new PropertyEditor(event.getProperty('cell'), graph, mouseEvent.x, mouseEvent.y);
        })
    };
}

export default EditOverlay;