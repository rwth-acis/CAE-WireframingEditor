import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';

TextNode.prototype = new UIText();
TextNode.prototype.constructor = TextNode;
UIText.registerCodec(TextNode);
//Global for the codec converter
window.TextNode = TextNode;

function TextNode(geometry) {
    var text = 'A simple TextNode...';
    if(!geometry)
        geometry = new mxGeometry(0, 0, 150, 50);
    UIText.call(this, text, geometry);

    this.initDOM = function(element){
        UIText.prototype.initDOM.call(this, element);
        var $node = this.get$node();
        $node.css('background-color', 'transparent')
            .css('border-style', 'initial')
            .val(text);
        this.set$node($node);
    }

    return this;
}


export default TextNode;