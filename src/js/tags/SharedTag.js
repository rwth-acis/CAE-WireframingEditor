import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(SharedTag, AbstractTag);
AbstractTag.registerCodec(SharedTag);
SharedTag.Alias = CONST.TAG.ALIAS.SHARED;
function SharedTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.YJS, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Shared editing enabled', offset);
    this.tagObj.setAttribute('_isUnique', true);

}

export default SharedTag;