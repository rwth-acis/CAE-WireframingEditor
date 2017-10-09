/**
 * @module UIElements
 */
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../misc/mxExport.js';
import UIControl from './UIControl.js';

DescriptionList.prototype = new UIControl();
DescriptionList.prototype.constructor = DescriptionList;

/**
 * The HTML node name
 * @static 
 * @default dl
 * @readonly
 */
DescriptionList.HTML_NODE_NAME = 'dl';

/**
 * The Name in the wireframing editor
 * @static 
 * @default DescriptionList
 * @readonly
 */
DescriptionList.NAME = "Description List";

window.DescriptionList = DescriptionList;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new DescriptionList();
mxCodecRegistry.register(codec);

/**
 * @classdesc A HTMl image element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function DescriptionList(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    var style = mxConstants.STYLE_SHAPE + '=dl;' +
        mxConstants.STYLE_EDITABLE + "=0;";
    UIControl.call(this, geometry, style);
}
export default DescriptionList;