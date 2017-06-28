/*global y*/
import Y from 'yjs';
import UIControl from './UIControl.js';

UIMedia.prototype = new UIControl();
UIMedia.prototype.constructor = UIMedia;

function UIMedia(geometry, style) {
    UIControl.call(this, geometry, style);
    this.value.setAttribute('_src', '');
    this.value.setAttribute('_controls', true);
    this.value.setAttribute('_autoplay', false);
    this.value.setAttribute('_muted', false);
    this.value.setAttribute('_loop', false);
    this.value.setAttribute('_preload', 'auto');
    this.addComboAttr('_preload',  ['auto', 'metadata', 'none']);

    return this;
}
UIMedia.prototype.createShared = function(createdByLocalUser){
    UIControl.prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser)
        y.share.attrs.set(this.getId()+'_src', Y.Text);
}
UIMedia.prototype.initShared = function(){
    UIControl.prototype.initShared.call(this);
    this.initYText('_src');
}

UIMedia.registerCodec = function(ctor){
    UIControl.registerCodec(ctor);
}
export default UIMedia;