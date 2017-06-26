/*global y*/
import {
    mxUtils,
    mxImage
} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';
import Y from 'yjs';
mxUtils.extend(FunctionTag, AbstractTag);
AbstractTag.registerCodec(FunctionTag);
FunctionTag.Alias = CONST.TAG.ALIAS.FUNC;
function FunctionTag(cellId, offset) {
    AbstractTag.call(this, cellId, new mxImage(CONST.IMAGES.FUNC_TAG, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Javascript Function', offset);

    this.tagObj.setAttribute('_name', '');
    this.tagObj.setAttribute('_returnParameter', '');
}

FunctionTag.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_name', Y.Text);
        y.share.attrs.set(this.getId() + '_returnParameter', Y.Text);

    }
}

FunctionTag.prototype.initShared = function(){
    var ytext = y.share.attrs.get(this.getId() + '_name', Y.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + '_name', Y.Text);

    ytext = y.share.attrs.get(this.getId() + '_returnParameter', Y.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + '_returnParameter', Y.Text);
}

export default FunctionTag;