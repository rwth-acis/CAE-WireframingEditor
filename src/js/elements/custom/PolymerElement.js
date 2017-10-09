/*global y*/
/**
 * @module UIElements/Custom
 */
import Y from './../../../../node_modules/yjs/dist/y.js';
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../../misc/mxExport.js';
import UIControl from '../UIControl.js';

PoylmerElement.prototype = new UIControl();
PoylmerElement.prototype.constructor = PoylmerElement;

/**
 * The HTML node name
 * @static 
 * @default CUSTOM
 * @readonly
 */
PoylmerElement.HTML_NODE_NAME = 'CUSTOM';

/**
 * The Name in the wireframing editor
 * @static 
 * @default Polymer
 * @readonly
 */
PoylmerElement.NAME = "Polymer";

window.PoylmerElement = PoylmerElement;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new PoylmerElement();
mxCodecRegistry.register(codec);

/**
 * Represent a polymer element
 * @classdesc A Polymer element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function PoylmerElement(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + '=polymer;' +
        mxConstants.STYLE_EDITABLE + "=0;";

    UIControl.call(this, geometry, style);
    this.setAttribute('_link','');
    this.setAttribute('_name', '');
}
PoylmerElement.prototype.createShared = function(createdByLocalUser){
    UIControl.prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser){
        y.share.attrs.set(this.getId()+'_link', Y.Text);
        y.share.attrs.set(this.getId()+'_name', Y.Text);
    }
}

PoylmerElement.prototype.initShared = function(){
    UIControl.prototype.initShared.call(this);
    this.initYText('_link');
    this.initYText('_name');
}
export default PoylmerElement;