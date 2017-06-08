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

    return this;
}
export default UIMedia;