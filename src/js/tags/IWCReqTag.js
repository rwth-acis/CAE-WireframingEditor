import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(IWCReqTag, AbstractTag);
AbstractTag.registerCodec(IWCReqTag);
function IWCReqTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.IWC_REQ_TAG, CONST.TAG.SIZE-4, CONST.TAG.SIZE-4), 'IWC Request', offset);
    
    this.tagObj.setAttribute('intentAction', '');
    this.tagObj.setAttribute('content', '');
}

export default IWCReqTag;