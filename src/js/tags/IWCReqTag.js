/*global y*/
import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';
import Y from 'yjs';

mxUtils.extend(IWCReqTag, AbstractTag);
AbstractTag.registerCodec(IWCReqTag);
IWCReqTag.Alias = CONST.TAG.ALIAS.IWC_CALL;
function IWCReqTag(cell, offset){
    AbstractTag.call(this, cell, new mxImage(CONST.IMAGES.IWC_REQ_TAG, CONST.TAG.SIZE-4, CONST.TAG.SIZE-4), 'IWC Request', offset);
    
    this.tagObj.setAttribute('_intentAction', '');
    this.tagObj.setAttribute('_content', '');
}

IWCReqTag.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_intentAction', Y.Text);
        y.share.attrs.set(this.getId() + '_content', Y.Text);

    }
}

IWCReqTag.prototype.initShared = function(){
    this.initYText('_intentAction');
    this.initYText('_content');
    
}
export default IWCReqTag;