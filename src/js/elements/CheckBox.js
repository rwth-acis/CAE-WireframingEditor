import UIText from './UIText.js';
import $ from 'jquery';
import {
    mxGeometry
} from '../misc/mxExport.js';
CheckBox.prototype = new UIText();
CheckBox.prototype.constructor = CheckBox;
UIText.registerCodec(CheckBox);
//Global for the codec converter
window.CheckBox = CheckBox;

/**
 * @classdesc A HTMl checkbox element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 150, 30)] the width, height, x and y of the ui element
 * @extends UIText
 */
function CheckBox(geometry) {
    var text = 'Option';
    if (!geometry)
        geometry = new mxGeometry(0, 0, 150, 30);
    UIText.call(this, text, geometry);
    this.value.setAttribute('_checked', false);
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_disabled', false);

    this.initDOM = function () {
        this.set$node(
            $('<div>')
            .css('pointer-events', 'none')
            .append($('<input>').attr('type', 'checkbox').attr('checked', true).attr('disabled', true))
            .append($('<input>')
                .attr('type', 'input')
                .css('font-size', 15)
                .css('width', this.geometry.width - 30)
                .css('height', this.geometry.height - 10)
                .css('background-color', 'transparent')
                .css('border-style', 'initial')
                .val(text)));
    }
}
CheckBox.prototype.bindLabel = function(ytext){
    ytext.bind(this.get$node().find('input[type="input"]')[0]);
}

CheckBox.prototype.initShared = function () {
    UIText.prototype.initShared.call(this);
}
export default CheckBox;