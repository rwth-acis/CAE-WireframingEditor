import {
    mxUtils
} from '../misc/mxExport.js';
import UIText from './UIText.js';


Link.prototype = new UIText();
Link.prototype.constructor = Link;

//Global for the codec converter
window.Link = Link;

function Link(geometry) {
    var text = 'Link';
    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('LinkObj');
    uiObj.setAttribute('label', text);
    uiObj.setAttribute('url', 'http://localhost:8080/index.html');

    UIText.call(this, text, geometry, uiObj);

    this.init = function () {
        this.__proto__.init.call(this);
        this.$input.css('color', 'blue')
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('text-decoration', 'underline')
            .val(text);
    }
    return this;
}

export default Link;