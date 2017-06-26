/*global y*/
import Y from 'yjs';
import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';

Button.prototype = new UIText();
Button.prototype.constructor = Button;
UIText.registerCodec(Button);
//Global for the codec converter
window.Button = Button;

function Button(geometry) {
    var text = 'Button';
    if (!geometry)
        geometry = new mxGeometry(0, 0, 100, 50);
    UIText.call(this, text, geometry);
    this.value.setAttribute('_disabled', false);
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_type', 'button');
    this.addComboAttr('_type', ['button', 'reset', 'submit']);

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

    this.createShared = function (createdByLocalUser) {
        UIText.prototype.createShared.call(this, createdByLocalUser);
        if (createdByLocalUser) {
            var ytext = y.share.attrs.set(this.getId() + '_type', Y.Text);
            ytext.insert(0, this.value.getAttribute('_type'));
        }
    };
    
    return this;
}
Button.prototype.initShared = function(){
    UIText.prototype.initShared.call(this);
    var val = y.share.attrs.get(this.getId() + '_disabled');
    if (val)
        this.setBooleanAttributeValue('_disabled', val);
    val = y.share.attrs.get(this.getId() + '_autofocus');
    if (val)
        this.setBooleanAttributeValue('_autofocus', val);

    val = y.share.attrs.get(this.getId() + '_type');
    if (val && typeof val === 'string')
        this.setComboAttributeValue('_type', val);
}
export default Button;