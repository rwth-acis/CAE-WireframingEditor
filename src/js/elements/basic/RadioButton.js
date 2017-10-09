/**
 * @module UIElements/Basic
 */
import UIText from '../UIText.js';
import $ from 'jquery';
import _ from 'lodash';
import {
    mxGeometry
} from '../../misc/mxExport.js';

RadioButton.prototype = new UIText();
RadioButton.prototype.constructor = RadioButton;
UIText.registerCodec(RadioButton);
//Global for the codec converter
window.RadioButton = RadioButton;

/**
 * The Name in the wireframing editor
 * @static 
 * @default RadioButton
 * @readonly
 */
RadioButton.NAME = "Radio Button";

/**
 * The HTML node name
 * @static 
 * @default radio
 * @readonly
 */
RadioButton.HTML_NODE_NAME = 'radio';

/**
 * A radio button with label
 * @classdesc A radio button element
 * @param {mxGeometry} geometry the geometry object which holds the size and position of the element
 * @constructor
 * @extends UIText
 */
function RadioButton(geometry) {
    var text = 'Option';
    if (!geometry)
        geometry = new mxGeometry(0, 0, 150, 30);
    UIText.call(this, text, geometry);
    this.value.setAttribute('_checked', false);
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_disabled', false);

    /**
     * Intialize the DOM elements for the label
     * @returns {undefined}
     */
    this.initDOM = function () {
        this.set$node($('<div>')
                .css('pointer-events', 'none')
                .append($('<input>').attr('type', 'radio').attr('checked', true))
                .append($('<input>').attr('type', 'input')
                    .css('font-size', 15)
                    .css('width', this.geometry.width - 30)
                    .css('height', this.geometry.height - 10)
                    .css('background-color', 'transparent')
                    .css('border-style', 'initial')
                    .val(text)));
    }
}

/**
 * Bind the text input element for the label
 * @param {Y.Text} ytext the y-text which is used for binding
 * @returns {undefined}
 */
RadioButton.prototype.bindLabel = function (ytext) {
    ytext.bind(this.get$node().find('input[type="input"]')[0]);
    var that = this;    
    ytext.observe(_.debounce(function(event){
        that.value.setAttribute('label', event.object.toString());
        $('.wfSave').click();
    }, 300));
}

/**
 * Initialize the shared data objects
 * @returns {undefined}
 */
RadioButton.prototype.initShared = function () {
    UIText.prototype.initShared.call(this);
}
export default RadioButton;