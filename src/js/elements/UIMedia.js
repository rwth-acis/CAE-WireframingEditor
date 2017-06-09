/*global y*/
import Y from 'yjs';
import UIControl from './UIControl.js';

UIMedia.prototype = new UIControl();
UIMedia.prototype.constructor = UIMedia;

function UIMedia(geometry, style) {
    UIControl.call(this, geometry, style);
    this.value.setAttribute('src', '');
    this.value.setAttribute('controls', true);
    this.value.setAttribute('autoplay', false);
    this.value.setAttribute('muted', false);
    this.value.setAttribute('loop', false);
    this.value.setAttribute('preload', 'auto');
    this.addComboAttr('preload',  ['auto', 'metadata', 'none']);

    return this;
}
UIMedia.prototype.initShared = function(createdByLocalUser){
    UIControl.prototype.initShared.call(this, createdByLocalUser);
    if(createdByLocalUser)
        y.share.attrs.set(this.getId()+'_src', Y.Text);
}
export default UIMedia;