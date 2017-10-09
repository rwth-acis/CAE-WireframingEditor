/**
 * @module UIElements/Basic
 */
import UIText from '../UIText.js';
import {
    mxGeometry
} from '../../misc/mxExport.js';

TextNode.prototype = new UIText();
TextNode.prototype.constructor = TextNode;
UIText.registerCodec(TextNode);
//Global for the codec converter
window.TextNode = TextNode;

/**
 * The HTML node name
 * @static 
 * @default text
 * @readonly
 */
TextNode.HTML_NODE_NAME = 'span';

/**
 * The Name in the wireframing editor
 * @static 
 * @default TextNode
 * @readonly
 */
TextNode.NAME = "Text Node";

/**
 * A simple element to represent text
 * @classdesc A HTMl <span>-element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 75, 30)] the width, height, x and y of the ui element
 * @extends UIText
 */
function TextNode(geometry) {
    var text = 'text';
    if(!geometry)
        geometry = new mxGeometry(0, 0, 75, 30);
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