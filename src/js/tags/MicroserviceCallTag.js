/*global y*/
import { mxUtils, mxImage } from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';
import Y from 'yjs';

mxUtils.extend(MicroserviceCallTag, AbstractTag);
AbstractTag.registerCodec(MicroserviceCallTag);
MicroserviceCallTag.Alias = CONST.TAG.ALIAS.MICRO_CALL;
function MicroserviceCallTag(cellId, offset) {
    AbstractTag.call(this, cellId, new mxImage(CONST.IMAGES.MICROSERVICECALL, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Microservice call', offset);

    this.tagObj.setAttribute('_methodType', 'GET');
    this.tagObj.setAttribute('_contentType', 'application/json');
    this.tagObj.setAttribute('_path', '');
    this.tagObj.setAttribute('_authorize', true);
    this.tagObj.setAttribute('_content', '');
    this.addComboAttr('_methodType',  ['GET', 'POST', 'PUT', 'DELETE']);
    this.addComboAttr('_contentType',  ['application/json', 'text/plain', 'CUSTOM']);
}

MicroserviceCallTag.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_path', Y.Text);
        y.share.attrs.set(this.getId() + '_content', Y.Text);
    }
}

MicroserviceCallTag.prototype.initShared = function(){
    this.initYText('_path');
    this.initYText('_content');
}
export default MicroserviceCallTag;