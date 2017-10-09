/**
 * @module UIElements
 */
import $ from 'jquery';
import _ from 'lodash';
import UIText from '../UIText.js';
import {
    mxGeometry
} from '../../misc/mxExport.js';


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
        var $button = $(document.createElement('button'));
        $button.attr('disabled', true)
        .css('width', this.geometry.width)
        .css('height', this.geometry.height)
        .append(
            $(document.createElement('input')).css('text-align', 'center')
            //.css('border-radius', '12px')
            .css('background-color', 'transparent')
            .css('border-style', 'unset')
            .css('width', '100%')
            .val(text));
        this.set$node($button);
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

Button.prototype.bindLabel = function(ytext){
    var that = this;
    ytext.bind(this.get$node().find('input')[0]);
    ytext.observe(_.debounce(function(event){
        that.value.setAttribute('label', event.object.toString());
        $('.wfSave').click();
    }, 300));

}
export default Button;