/*global y*/
import Y from 'yjs';
import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';

Button.prototype = new UIText();
Button.prototype.constructor = Button;

//Global for the codec converter
window.Button = Button;

function Button(geometry) {
    var text = 'Button';
    if (!geometry)
        geometry = new mxGeometry(0, 0, 100, 50);
    UIText.call(this, text, geometry);
    this.value.setAttribute('disabled', false);
    this.value.setAttribute('autofocus', false);
    this.value.setAttribute('type', 'button');
    this.addComboAttr('type', ['button', 'reset', 'submit']);

    this.initDOM = function () {
        UIText.prototype.initDOM.call(this);
        var $node = this.get$node()
        $node.css('text-align', 'center')
            .css('border-radius', '12px')
            .css('background-color', 'rgb(227, 227, 228)')
            .css('border-style', 'ridge')
            .val(text);
        this.set$node($node);
    }

    this.initShared = function (createdByLocalUser) {
        UIText.prototype.initShared.call(this, createdByLocalUser);
        if (createdByLocalUser) {
            var ytext = y.share.attrs.set(this.getId() + '_type', Y.Text);
            ytext.insert(0, this.value.getAttribute('type'));
        }
    };

    return this;
}
export default Button;