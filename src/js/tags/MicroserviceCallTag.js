/*global y*/
import { mxUtils, mxImage } from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';
import Y from 'yjs';

mxUtils.extend(MicroserviceCallTag, AbstractTag);
AbstractTag.registerCodec(MicroserviceCallTag);
MicroserviceCallTag.Alias = CONST.TAG.ALIAS.MICRO_CALL;
function MicroserviceCallTag(offset) {
    AbstractTag.call(this, new mxImage(CONST.IMAGES.MICROSERVICECALL, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Microservice call', offset);

    this.tagObj.setAttribute('methodType', 'GET');
    this.tagObj.setAttribute('contentType', 'application/json');
    this.tagObj.setAttribute('path', '');
    this.tagObj.setAttribute('authorize', true);
    this.tagObj.setAttribute('content', '');
    this.addComboAttr('methodType',  ['GET', 'POST', 'PUT', 'DELETE']);
    this.addComboAttr('contentType',  ['application/json', 'text/plain', 'CUSTOM']);
}

MicroserviceCallTag.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_path', Y.Text);
        y.share.attrs.set(this.getId() + '_content', Y.Text);
    }
}

export default MicroserviceCallTag;