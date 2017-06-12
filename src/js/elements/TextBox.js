import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';

TextBox.prototype = new UIText();
TextBox.prototype.constructor = TextBox;

//Global for the codec converter
window.TextBox = TextBox;

function TextBox(geometry) {
    var text = 'Some Text...';
    if(!geometry)
        geometry = new mxGeometry(0, 0, 120, 30);
    UIText.call(this, text, geometry);
    this.setAttribute('autofocus', false);
    this.setAttribute('disabled', false);
    this.setAttribute('autocomplete', 'off');
    this.addComboAttr('autocomplete',  ['off', 'on']);
    this.initDOM = function(){
        UIText.prototype.initDOM.call(this);
        var $node =this.get$node()
        $node.val(text);
        this.set$node($node);
    }
    return this;
}
export default TextBox;