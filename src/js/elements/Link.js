/*global y*/
/**
 * @module UIElements
 */
import Y from 'yjs';
import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';
Link.prototype = new UIText();
Link.prototype.constructor = Link;
UIText.registerCodec(Link);

/**
 * The HTML node name
 * @static 
 * @default a
 * @readonly
 */
Link.HTML_NODE_NAME = 'a';

/**
 * The Name of element in the Wireframing editor
 * @static 
 * @default Link
 * @readonly
 */
Link.NAME = "Link";

//Global for the codec converter
window.Link = Link;

/**
 * @classdesc A HTMl link element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 50, 30)] the width, height, x and y of the ui element
 * @extends UIMedia
 */
function Link(geometry) {
    var text = 'Link';
    if(!geometry)
        geometry = new mxGeometry(0, 0, 50, 30)
    UIText.call(this, text, geometry);
    this.value.setAttribute('_href', '');

    this.initDOM = function () {
        UIText.prototype.initDOM.call(this);
        var $input = this.get$node();
        $input.css('color', 'blue')
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('text-decoration', 'underline')
            .val(text);
        this.set$node($input);
    }
    return this;
}

Link.prototype.createShared = function(createdByLocalUser){
    UIText.prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser){
        y.share.attrs.set(this.getId()+'_href', Y.Text);
    }
}

Link.prototype.initShared = function(){
    UIText.prototype.initShared.call(this);
    this.initYText('_href');
}
export default Link;