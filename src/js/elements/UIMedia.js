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
UIMedia.prototype.createShared = function(createdByLocalUser){
    UIControl.prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser)
        y.share.attrs.set(this.getId()+'_src', Y.Text);
}
UIMedia.prototype.initShared = function(){
    UIControl.prototype.initShared.call(this);
    var ytext = y.share.attrs.get(this.getId() + '_src', Y.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + '_src', Y.Text);

    var val = y.share.attrs.get(this.getId() + '_controls');
    if (val)
        this.setBooleanAttributeValue('controls', val);

    val = y.share.attrs.get(this.getId() + '_autoplay');
    if (val)
        this.setBooleanAttributeValue('autoplay', val);

    val = y.share.attrs.get(this.getId() + '_muted');
    if (val)
        this.setBooleanAttributeValue('muted', val);

    val = y.share.attrs.get(this.getId() + '_loop');
    if (val)
        this.setBooleanAttributeValue('loop', val);
    
    val = y.share.attrs.get(this.getId() + '_preload');
    if (val && typeof val === 'string')
        this.setComboAttributeValue('preload', val);
}

UIMedia.registerCodec = function(ctor){
    UIControl.registerCodec(ctor);
}
export default UIMedia;