import {
    mxUtils
} from '../misc/mxExport.js';
import UIText from './UIText.js';

Button.prototype = new UIText();
Button.prototype.constructor = Button;

//Global for the codec converter
window.Button = Button;

function Button(geometry) {
    var text = 'Button';
    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('btnObj');
    uiObj.setAttribute('label', text);

    UIText.call(this, text, geometry, uiObj);
    
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