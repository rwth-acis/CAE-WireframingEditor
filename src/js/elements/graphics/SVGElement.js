/**
 * @module UIElements
 */
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../../misc/mxExport.js';
import UIControl from '../UIControl.js';

SVGElement.prototype = new UIControl();
SVGElement.prototype.constructor = SVGElement;

/**
 * The HTML node name
 * @static 
 * @default svg
 * @readonly
 */
SVGElement.HTML_NODE_NAME = 'svg';

/**
 * The Name in the wireframing editor
 * @static 
 * @default SVG
 * @readonly
 */
SVGElement.NAME = "SVG";

window.SVGElement = SVGElement;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new SVGElement();
mxCodecRegistry.register(codec);

/**
 * @classdesc A HTMl image element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function SVGElement(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    var style = mxConstants.STYLE_SHAPE + '=svg;' +
        mxConstants.STYLE_EDITABLE + "=0;";
    UIControl.call(this, geometry, style);
}
export default SVGElement;