import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(IWCReqTag, AbstractTag);
function IWCReqTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.IWC_REQ_TAG, CONST.TAG.SIZE, CONST.TAG.SIZE), 'IWC Request', offset);
}

export default IWCReqTag;