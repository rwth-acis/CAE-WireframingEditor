import UIText from './UIText.js';

Button.prototype = new UIText();
Button.prototype.constructor = Button;

//Global for the codec converter
window.Button = Button;

function Button(geometry) {
    var text = 'Button';
    
    UIText.call(this, text, geometry);
    this.value.setAttribute('disabled', false);
    this.value.setAttribute('autofocus', false);
    this.value.setAttribute('type', 'button');

    this.init = function(){
        this.__proto__.init.call(this);
        this.$input
            .css('text-align', 'center')
            .css('border-radius', '12px')
            .css('background-color', 'rgb(227, 227, 228)')
            .css('border-style', 'ridge')
            .val(text);
    }

    return this;
}
export default Button;