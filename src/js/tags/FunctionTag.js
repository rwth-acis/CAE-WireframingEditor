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
function FunctionTag(offset) {
    AbstractTag.call(this, new mxImage(CONST.IMAGES.FUNC_TAG, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Javascript Function', offset);

    this.tagObj.setAttribute('name', '');
    this.tagObj.setAttribute('returnParameter', '');
}

FunctionTag.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_name', Y.Text);
        y.share.attrs.set(this.getId() + '_returnParameter', Y.Text);

    }
}

export default FunctionTag;