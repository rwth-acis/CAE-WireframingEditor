/*global y*/
import Y from 'yjs';
import UIText from './UIText.js';

TextArea.prototype = new UIText();
TextArea.prototype.constructor = TextArea;

window.TextArea = TextArea;

function TextArea(geometry) {
    var text='Multi-Line text input area';
   // var text = 'hallo';
   

    UIText.call(this, text, geometry);
    this.value.setAttribute('placeholder', '');
    this.value.setAttribute('autofocus', false);
    this.value.setAttribute('maxlength', '');
    this.value.setAttribute('readonly', false);
    this.value.setAttribute('disabled', false);
    this.value.setAttribute('cols', '');
    this.value.setAttribute('rows', '');
    this.init = function () {
        this.__proto__.init.call(this, 'textarea');
        this.$input
            .css('overflow', 'hidden')
            .css('resize', 'none')
            .text(text);
    }
    return this;
}
TextArea.prototype.initShared = function(createdByLocalUser){
    UIText.prototype.initShared.call(this, createdByLocalUser);
    if(createdByLocalUser){
        y.share.attrs.set(this.getId()+'_placeholder', Y.Text);
        y.share.attrs.set(this.getId()+'_maxlength', Y.Text);
        y.share.attrs.set(this.getId()+'_cols', Y.Text);
        y.share.attrs.set(this.getId()+'_rows', Y.Text);
    }
}
export default TextArea;