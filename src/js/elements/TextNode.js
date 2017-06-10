import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';

TextNode.prototype = new UIText();
TextNode.prototype.constructor = TextNode;

//Global for the codec converter
window.TextNode = TextNode;

function TextNode(geometry) {
    var text = 'A simple TextNode...';
    if(!geometry)
        geometry = new mxGeometry(0, 0, 150, 50);
    UIText.call(this, text, geometry);

    this.init = function () {
        this.__proto__.init.call(this);
        this.$input
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .val(text);
    }

    return this;
}
export default TextNode;