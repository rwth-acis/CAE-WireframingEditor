/**
 * @module UIElements
 */
import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';
Paragraph.prototype = new UIText();
Paragraph.prototype.constructor = Paragraph;
UIText.registerCodec(Paragraph);
window.Paragraph = Paragraph;

/**
 * The HTML node name
 * @static 
 * @default p
 * @readonly
 */
Paragraph.HTML_NODE_NAME = 'p';

/**
 * The Name of element in the Wireframing editor
 * @static 
 * @default Paragraph of Text
 * @readonly
 */
Paragraph.NAME = "Paragraph of Text";

/**
 * @classdesc A HTMl paragraph element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 150, 35)] the width, height, x and y of the ui element
 * @extends UIText
 */
function Paragraph(geometry) {
    var text = 'Some text for this paragraph';
    if(!geometry)
        geometry = new mxGeometry(0, 0, 150, 35);
    UIText.call(this, text, geometry);

    this.initDOM = function () {
        UIText.prototype.initDOM.call(this, 'textarea');
        var $node = this.get$node();
        $node.css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('overflow', 'hidden')
            .css('resize', 'none')
            .text(text);
        this.set$node($node);
    }
    return this;
}

export default Paragraph;