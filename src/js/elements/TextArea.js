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

export default TextArea;