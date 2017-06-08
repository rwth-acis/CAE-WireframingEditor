import UIText from './UIText.js';

TextNode.prototype = new UIText();
TextNode.prototype.constructor = TextNode;

//Global for the codec converter
window.TextNode = TextNode;

function TextNode(geometry) {
    var text = 'A simple TextNode...';
    
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