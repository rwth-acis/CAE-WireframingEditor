import {
    mxUtils
} from '../misc/mxExport.js';
import UIText from './UIText.js';
import $ from 'jquery';

CheckBox.prototype = new UIText();
CheckBox.prototype.constructor = CheckBox;

//Global for the codec converter
window.CheckBox = CheckBox;

function CheckBox(geometry) {
    var text = 'Option';

    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('CheckBoxObj');
    uiObj.setAttribute('label', text);
    uiObj.setAttribute('checked', false);
    uiObj.setAttribute('name', '');

    UIText.call(this, text, geometry, uiObj);

    this.init = function () {
        this.$input = $('<div>')
            .append($('<input>').attr('type', 'checkbox').attr('checked', true))
            .append($('<input>')
            .attr('type', 'input')
            .css('font-size', 15)
            .css('width', this.geometry.width - 30) 
            .css('height', this.geometry.height - 10)
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .val(text));
    }
    return this;
}
export default CheckBox;