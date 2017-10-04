/*global y*/
/**
 * @module UIElements
 */
import Y from './../../../node_modules/yjs/dist/y.js';
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../misc/mxExport.js';
import UIControl from './UIControl.js';

IFrame.prototype = new UIControl();
IFrame.prototype.constructor = IFrame;

/**
 * The HTML node name
 * @static 
 * @default img
 * @readonly
 */
IFrame.HTML_NODE_NAME = 'iframe';

/**
 * The Name in the wireframing editor
 * @static 
 * @default Image
 * @readonly
 */
IFrame.NAME = "iFrame";

window.IFrame = IFrame;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new IFrame();
mxCodecRegistry.register(codec);

/**
 * @classdesc A HTMl image element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function IFrame(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + '=default;' +
        mxConstants.STYLE_EDITABLE + "=0;";

    UIControl.call(this, geometry, style);
    this.setAttribute('_src','https://www.youtube.com/watch?v=rnj6cnlIjM4');
}
IFrame.prototype.createShared = function(createdByLocalUser){
    UIControl.prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser){
        y.share.attrs.set(this.getId()+'_src', Y.Text);
    }
}

IFrame.prototype.initShared = function(){
    UIControl.prototype.initShared.call(this);
    this.initYText('_src');
}
export default IFrame;