/*global y*/
/**
 * @module UIElements
 */
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../../misc/mxExport.js';
import UIControl from '../UIControl.js';

List.prototype = new UIControl();
List.prototype.constructor = List;

/**
 * The HTML node name
 * @static 
 * @default ul
 * @readonly
 */
List.HTML_NODE_NAME = 'ul';

/**
 * The Name in the wireframing editor
 * @static 
 * @default List
 * @readonly
 */
List.NAME = "List";

window.List = List;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new List();
mxCodecRegistry.register(codec);

/**
 * @classdesc A HTMl image element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function List(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    var style = mxConstants.STYLE_SHAPE + '=ul;' +
        mxConstants.STYLE_EDITABLE + "=0;";
    UIControl.call(this, geometry, style);
}
export default List;