/**
 * @module Tags
 */
import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

/**
 * An alias name for the SharedTag class
 * @default Shared
 * @static
 * @readonly 
 */
SharedTag.Alias = 'Shared';

/**
 * The URL to the image as defined in the constants-modules
 * @default CONST.IMAGES.YJS
 * @static 
 * @readonly
 */
SharedTag.IMAGE = CONST.IMAGES.YJS;

mxUtils.extend(SharedTag, AbstractTag);
AbstractTag.registerCodec(SharedTag);

/**
 * @classdesc The tag indicates if the ui element supports NRTC collaborative features realized with Yjs
 * 
 * It maps the collabortive property the front end component model
 * The tag is unique that means it is only allowed once for a cell
 * @constructor
 * @param  {UIControl} cell the cell that holds the tag
 * @param  {mxPoint} offset the offset
 * @extends AbstractTag
 */
function SharedTag(cell, offset){
    AbstractTag.call(this, cell, new mxImage(SharedTag.IMAGE, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Shared editing enabled', offset);
    this.tagObj.setAttribute('isUnique', true);
    this.tagObj.setAttribute('tagType', SharedTag.Alias);

}

export default SharedTag;