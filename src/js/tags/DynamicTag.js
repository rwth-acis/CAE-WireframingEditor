/**
 * @module Tags
 */
import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

/**
 * An alias name for the DynamicTag class
 * @default Dynamic
 * @static
 * @readonly 
 */
DynamicTag.Alias = 'Dynamic';

/**
 * The URL to the image as defined in the constants-modules
 * @default CONST.IMAGES.YJS
 * @static 
 * @readonly
 */
DynamicTag.IMAGE = CONST.IMAGES.DYNAMIC;

mxUtils.extend(DynamicTag, AbstractTag);
AbstractTag.registerCodec(DynamicTag);

/**
 * @classdesc The tag indicates if the ui element is dynamic
 * 
 * It maps the collabortive property the front end component model
 * The tag is unique that means it is only allowed once for a cell
 * @constructor
 * @param  {UIControl} cell the cell that holds the tag
 * @param  {mxPoint} offset the offset
 * @extends AbstractTag
 */
function DynamicTag(cell, offset){
    AbstractTag.call(this, cell, new mxImage(DynamicTag.IMAGE, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Shared editing enabled', offset);
    this.tagObj.setAttribute('isUnique', true);
    this.tagObj.setAttribute('tagType', DynamicTag.Alias);

}

export default DynamicTag;