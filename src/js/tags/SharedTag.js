import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

SharedTag.Alias = 'Shared';
SharedTag.IMAGE = CONST.IMAGES.YJS;
mxUtils.extend(SharedTag, AbstractTag);
AbstractTag.registerCodec(SharedTag);

function SharedTag(cell, offset){
    AbstractTag.call(this, cell, new mxImage(SharedTag.IMAGE, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Shared editing enabled', offset);
    this.tagObj.setAttribute('isUnique', true);
    this.tagObj.setAttribute('tagType', SharedTag.Alias);

}

export default SharedTag;