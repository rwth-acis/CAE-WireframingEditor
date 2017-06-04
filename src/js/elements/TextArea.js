import {
    mxUtils,
    mxConstants
} from '../mxExport.js';
import UIText from './UIText.js';

TextArea.prototype = new UIText();
TextArea.prototype.constructor = TextArea;

window.TextArea = TextArea;

function TextArea(geometry) {
    var text='Multi-Line text input area';
   // var text = 'hallo';
    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('textareaObj');
    uiObj.setAttribute('label', text);

    UIText.call(this, text, geometry, uiObj);

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