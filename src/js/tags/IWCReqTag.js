/*global y*/
import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';
import Y from 'yjs';

mxUtils.extend(IWCReqTag, AbstractTag);
AbstractTag.registerCodec(IWCReqTag);
IWCReqTag.Alias = CONST.TAG.ALIAS.IWC_CALL;
function IWCReqTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.IWC_REQ_TAG, CONST.TAG.SIZE-4, CONST.TAG.SIZE-4), 'IWC Request', offset);
    
    this.tagObj.setAttribute('intentAction', '');
    this.tagObj.setAttribute('content', '');
}

IWCReqTag.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_intentAction', Y.Text);
        y.share.attrs.set(this.getId() + '_content', Y.Text);

    }
}
export default IWCReqTag;