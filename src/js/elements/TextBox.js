import UIText from './UIText.js';

TextBox.prototype = new UIText();
TextBox.prototype.constructor = TextBox;

//Global for the codec converter
window.TextBox = TextBox;

function TextBox(geometry) {
    var text = 'Some Text...';

    UIText.call(this, text, geometry);
    this.setAttribute('autofocus', false);
    this.setAttribute('disabled', false);
    this.setAttribute('autocomplete', 'off');
    this.init = function(){
        this.__proto__.init.call(this);
        this.$input.val(text);
    }

    return this;
}
export default TextBox;