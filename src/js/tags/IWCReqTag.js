import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(IWCReqTag, AbstractTag);
function IWCReqTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.IWC_REQ_TAG, CONST.TAG.SIZE-4, CONST.TAG.SIZE-4), 'IWC Request', offset);
}

export default IWCReqTag;