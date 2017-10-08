import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';
import CONST from '../misc/Constants.js';

/**
 * @module Shapes
 */

mxUtils.extend(PolymerShape, mxShape);
/**
 * @classdesc The shape for the Image-element
 * @constructor
 * @extends mxShape
 * @see PolymerShape
 */
function PolymerShape(){
    var str = '<shape name="youtube" w="128" h="128"><background><fillcolor color="none"/><strokecolor color="none"/><rect x="0" y="0" w="128" h="128"/><fillstroke/></background><foreground><image src="'+ CONST.IMAGES.POLYMER +'" x="0" y="0" w="128" h="128"/></foreground></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default PolymerShape;