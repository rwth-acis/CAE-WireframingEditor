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
function FunctionTag(cell, offset) {
    AbstractTag.call(this, cell, new mxImage(CONST.IMAGES.FUNC_TAG, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Javascript Function', offset);

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
    this.initYText('_name');
    this.initYText('_returnParameter');
}

export default FunctionTag;