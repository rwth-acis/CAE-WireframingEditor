import {
    mxUtils
} from '../misc/mxExport.js';
import UIText from './UIText.js';
import $ from 'jquery';

TextBox.prototype = new UIText();
TextBox.prototype.constructor = TextBox;

//Global for the codec converter
window.TextBox = TextBox;

function TextBox(geometry) {
    var text = 'Some Text...';
    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('TextBoxObj');
    uiObj.setAttribute('label', text);

    UIText.call(this, text, geometry, uiObj);
    
    this.init = function(){
        this.__proto__.init.call(this);
        this.$input.val(text);
    }

    return this;
}
export default TextBox;