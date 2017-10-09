/**
 * @module UIElements/Basic
 */
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../../misc/mxExport.js';
import UIControl from '../UIControl.js';

Table.prototype = new UIControl();
Table.prototype.constructor = Table;

/**
 * The HTML node name
 * @static 
 * @default table
 * @readonly
 */
Table.HTML_NODE_NAME = 'table';

/**
 * The Name in the wireframing editor
 * @static 
 * @default Table
 * @readonly
 */
Table.NAME = "Table";

window.Table = Table;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new Table();
mxCodecRegistry.register(codec);

/**
 * A HTML table
 * @classdesc A HTMl <table>-element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function Table(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    var style = mxConstants.STYLE_SHAPE + '=table;' +
        mxConstants.STYLE_EDITABLE + "=0;";
    UIControl.call(this, geometry, style);
}
export default Table;