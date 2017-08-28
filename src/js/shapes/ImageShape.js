import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';
import CONST from '../misc/Constants.js';

/**
 * @module Shapes
 */

mxUtils.extend(ImageShape, mxShape);
/**
 * @classdesc The shape for the Image-element
 * @constructor
 * @extends mxShape
 * @see Image
 */
function ImageShape(){
    var str = '<shape name="image" w="128" h="128" aspect="4/3"><background><fillcolor color="none"/><strokecolor color="none"/><rect x="0" y="0" w="128" h="128"/><fillstroke/></background><foreground><image src="'+ CONST.IMAGES.IMAGE_SHAPE +'" x="0" y="0" w="128" h="128"/></foreground></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default ImageShape;