/**
 * @module UIElements
 */
import {
    mxConstants,
    mxGeometry,
    mxUtils, mxCell, mxCodecRegistry
} from '../../misc/mxExport.js';
import UIControl from '../UIControl.js';

HTML5Canvas.prototype = new UIControl();
HTML5Canvas.prototype.constructor = HTML5Canvas;

/**
 * The HTML node name
 * @static 
 * @default canvas
 * @readonly
 */
HTML5Canvas.HTML_NODE_NAME = 'canvas';

/**
 * The Name in the wireframing editor
 * @static 
 * @default Canvas
 * @readonly
 */
HTML5Canvas.NAME = "HTML5 Canvas";

window.HTML5Canvas = HTML5Canvas;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new HTML5Canvas();
mxCodecRegistry.register(codec);

/**
 * @classdesc A HTMl image element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function HTML5Canvas(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 128, 128);
    var style = mxConstants.STYLE_SHAPE + '=html5canvas;' +
        mxConstants.STYLE_EDITABLE + "=0;";
    UIControl.call(this, geometry, style);
}
export default HTML5Canvas;