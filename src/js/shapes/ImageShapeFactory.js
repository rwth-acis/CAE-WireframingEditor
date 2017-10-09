import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';

/**
 * @module Shapes
 */

/**
 * A singelton factory class to generate image shapes
 * @classdesc A factory class that generates images shape
 * @constructor
 * @extends mxShape
 * @memberof module:Shapes
 * @see GenericImageShape
 */
function ImageShapeFactory(){
    return {
        /**
         * Create a shape class that consists only of an image
         * @param {String} name the name of the shape
         * @param {String} imageUrl the url to the image
         * @returns {Function} the constructor function of the new shape
         * @memberof module:Shapes.ImageShapeFactory
         */
        createImageShape: function(name,imageUrl){
            mxUtils.extend(GenericImageShape, mxShape);
            function GenericImageShape(){
                var str = '<shape name="'+ name + '" w="128" h="128"><background><fillcolor color="none"/><strokecolor color="none"/><rect x="0" y="0" w="128" h="128"/><fillstroke/></background><foreground><image src="'+ imageUrl +'" x="0" y="0" w="128" h="128"/></foreground></shape>';
                var xml = mxUtils.parseXml(str);
                var stencil = new mxStencil(xml.documentElement);
                mxShape.call(this, stencil);
            }
            return GenericImageShape;
        }
    }
}
export default new ImageShapeFactory();