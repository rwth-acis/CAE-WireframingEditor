/*global y*/
import Y from 'yjs';
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

    this.initShared = function(createdByLocalUser){
        UIText.prototype.initShared.call(this, createdByLocalUser);
        if(createdByLocalUser){
            var ytext = y.share.attrs.set(this.getId() + '_type', Y.Text);
            ytext.insert(0, this.value.getAttribute('type'));
        }
    };

    return this;
}
export default Button;