import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(IWCRespTag, AbstractTag);
AbstractTag.registerCodec(IWCRespTag);
function IWCRespTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.IWC_RESP_TAG,CONST.TAG.SIZE-4, CONST.TAG.SIZE-4), 'IWC Response', offset);
    
    this.tagObj.setAttribute('intentAction', '');
    this.tagObj.setAttribute('content', '');
}

export default IWCRespTag;