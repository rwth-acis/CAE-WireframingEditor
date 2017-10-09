/**
 * @module UIElements/Basic
 */
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../../misc/mxExport.js';
import UIControl from '../UIControl.js';

OrderedList.prototype = new UIControl();
OrderedList.prototype.constructor = OrderedList;

/**
 * The HTML node name
 * @static 
 * @default ol
 * @readonly
 */
OrderedList.HTML_NODE_NAME = 'ol';

/**
 * The Name in the wireframing editor
 * @static 
 * @default OrderedList
 * @readonly
 */
OrderedList.NAME = "Ordered List";

window.OrderedList = OrderedList;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new OrderedList();
mxCodecRegistry.register(codec);

/**
 * An ordered list. <ol>
 * @classdesc A HTMl ordered list
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function OrderedList(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    var style = mxConstants.STYLE_SHAPE + '=ol;' +
        mxConstants.STYLE_EDITABLE + "=0;";
    UIControl.call(this, geometry, style);
}
export default OrderedList;