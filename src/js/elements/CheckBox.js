import UIText from './UIText.js';
import $ from 'jquery';
import {
    mxGeometry
} from '../misc/mxExport.js';
CheckBox.prototype = new UIText();
CheckBox.prototype.constructor = CheckBox;

//Global for the codec converter
window.CheckBox = CheckBox;

function CheckBox(geometry) {
    var text = 'Option';
    if (!geometry)
        geometry = new mxGeometry(0, 0, 150, 30);
    UIText.call(this, text, geometry);
    this.value.setAttribute('checked', false);
    this.value.setAttribute('autofocus', false);
    this.value.setAttribute('disabled', false);

    this.initDOM = function () {
        this.set$input(
            $('<div>')
            .append($('<input>').attr('type', 'checkbox').attr('checked', true))
            .append($('<input>')
                .attr('type', 'input')
                .css('font-size', 15)
                .css('width', this.geometry.width - 30)
                .css('height', this.geometry.height - 10)
                .css('background-color', 'transparent')
                .css('border-style', 'initial')
                .val(text)));
    }
    return this;
}
export default CheckBox;