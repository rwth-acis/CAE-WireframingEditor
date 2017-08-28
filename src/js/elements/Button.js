/**
 * @module UIElements
 */
import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';


Button.prototype = new UIText();
Button.prototype.constructor = Button;
UIText.registerCodec(Button);
//Global for the codec converter
window.Button = Button;

/**
 * The HTML node name
 * @static 
 * @default button
 * @readonly
 */
Button.HTML_NODE_NAME = 'button';

/**
 * The Name in the wireframing editor
 * @static 
 * @default Button
 * @readonly
 */
Button.NAME = "Button";

/**
 * A concrete button class representing a button ui element of the wireframe
 * @classdesc The Button html element
 * @constructor
 * @param {mxGeometry} [geometry=new mxGeometry(0, 0, 100, 50)] the width, height, x and y of the ui element
 * @extends UIText
 */
function Button(geometry) {
    /**
     * The default text for the label
     * @member {String}
     * @default Button
     */
    var text = 'Button';

    if (!geometry)
        geometry = new mxGeometry(0, 0, 100, 50);

    UIText.call(this, text, geometry);
    this.value.setAttribute('_disabled', false);
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_type', 'button');
    this.getComboAttrMap().addComboAttr('_type', ['button', 'reset', 'submit']);

    /**
     * Crate the html input element for the button element
     * @return {undefined}
     * @override
     */
    this.initDOM = function () {
        UIText.prototype.initDOM.call(this);
        var $node = this.get$node();
        $node.css('text-align', 'center')
            .css('border-radius', '12px')
            .css('background-color', 'rgb(227, 227, 228)')
            .css('border-style', 'ridge')
            .val(text);
        this.set$node($node);
    }

    /**
     * @override
     * @param {boolean} createdByLocalUser indicates if the the function was called by the local user or not
     * @return {undefined}
     */
    this.createShared = function (createdByLocalUser) {
        UIText.prototype.createShared.call(this, createdByLocalUser);
    };
}

/**
 * Init shared content for the button
 * @override
 */
Button.prototype.initShared = function(){
    UIText.prototype.initShared.call(this);
}
export default Button;