import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(FunctionTag, AbstractTag);
AbstractTag.registerCodec(FunctionTag);
function FunctionTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.FUNC_TAG, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Javascript Function', offset);
}

export default FunctionTag;