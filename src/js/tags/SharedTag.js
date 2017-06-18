import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(SharedTag, AbstractTag);
AbstractTag.registerCodec(SharedTag);
function SharedTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.YJS, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Shared editing enabled', offset);
}

export default SharedTag;