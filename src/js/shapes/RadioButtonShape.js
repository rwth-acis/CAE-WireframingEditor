import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';

/**
 * @module Shapes
 */

mxUtils.extend(RadioButtonShape, mxShape);
/**
 * @classdesc The shape for the Radio-element
 * @constructor
 * @extends mxShape
 * @see UIObject
 */
function RadioButtonShape(){
    var str = '<shape name="radio" w="100" h="30" aspect="1"><foreground><fontsize size="25"/><text str="RadioBtn" x="21" y="23"/><strokecolor color="black"/><fillcolor color="black"/><ellipse x="5" y="32" w="10" h="10" /><fillstroke/></foreground><background><strokecolor color="black"/><fillcolor color="#e3e3e4"/><ellipse x="0" y="25" w="20" h="25" /><fillstroke/></background></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default RadioButtonShape;