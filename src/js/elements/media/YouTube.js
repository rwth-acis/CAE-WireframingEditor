/*global y*/
/**
 * @module UIElements
 */
import Y from './../../../../node_modules/yjs/dist/y.js';
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../../misc/mxExport.js';
import UIControl from '../UIControl.js';

YouTube.prototype = new UIControl();
YouTube.prototype.constructor = YouTube;

/**
 * The HTML node name
 * @static 
 * @default iframe
 * @readonly
 */
YouTube.HTML_NODE_NAME = 'iframe';

/**
 * The Name in the wireframing editor
 * @static 
 * @default YouTube
 * @readonly
 */
YouTube.NAME = "YouTube";

window.YouTube = YouTube;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new YouTube();
mxCodecRegistry.register(codec);

/**
 * @classdesc A HTMl image element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function YouTube(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + '=youtube;' +
        mxConstants.STYLE_EDITABLE + "=0;";

    UIControl.call(this, geometry, style);
    this.setAttribute('_src','https://www.youtube.com/embed/rnj6cnlIjM4');
}
YouTube.prototype.createShared = function(createdByLocalUser){
    UIControl.prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser){
        y.share.attrs.set(this.getId()+'_src', Y.Text);
    }
}

YouTube.prototype.initShared = function(){
    UIControl.prototype.initShared.call(this);
    this.initYText('_src');
}
export default YouTube;