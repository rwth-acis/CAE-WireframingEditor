import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(SharedTag, AbstractTag);
AbstractTag.registerCodec(SharedTag);
SharedTag.Alias = CONST.TAG.ALIAS.SHARED;
function SharedTag(cellId, offset){
    AbstractTag.call(this, cellId, new mxImage(CONST.IMAGES.YJS, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Shared editing enabled', offset);
    this.tagObj.setAttribute('isUnique', true);

}

export default SharedTag;