/*global y*/
import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';
import Y from 'yjs';

mxUtils.extend(EventTag, AbstractTag);
AbstractTag.registerCodec(EventTag);
EventTag.Alias = CONST.TAG.ALIAS.EVENT;
function EventTag(cellId, offset){
    AbstractTag.call(this, cellId, new mxImage(CONST.IMAGES.EVENT_TAG, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Event', offset);
   
    this.tagObj.setAttribute('_eventCause', '');
    this.tagObj.setAttribute('_name', '');
}

EventTag.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_name', Y.Text);
        y.share.attrs.set(this.getId() + '_eventCause', Y.Text);
    }
}

EventTag.prototype.initShared = function(){
    this.initYText('_name');
    this.initYText('_eventCause');
}

export default EventTag;