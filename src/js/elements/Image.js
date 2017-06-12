/*global y*/
import Y from 'yjs';
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../misc/mxExport.js';
import UIControl from './UIControl.js';

Image.prototype = new UIControl();
Image.prototype.constructor = Image;
window.Image = Image;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new Image();
mxCodecRegistry.register(codec);

function Image(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + '=image;' +
        mxConstants.STYLE_EDITABLE + "=0;";

    UIControl.call(this, geometry, style);
    this.setAttribute('src','');
    return this;
}
Image.prototype.initShared = function(createdByLocalUser){
    UIControl.prototype.initShared.call(this, createdByLocalUser);
    if(createdByLocalUser){
        y.share.attrs.set(this.getId()+'_src', Y.Text);
    }
}
export default Image;