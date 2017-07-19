import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';

Button.prototype = new UIText();
Button.prototype.constructor = Button;
UIText.registerCodec(Button);
//Global for the codec converter
window.Button = Button;
Button.HTML_NODE_NAME = 'button';
Button.NAME = "Button";

function Button(geometry) {
    var text = 'Button';
    if (!geometry)
        geometry = new mxGeometry(0, 0, 100, 50);
    UIText.call(this, text, geometry);
    this.value.setAttribute('_disabled', false);
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_type', 'button');
    this.getComboAttrMap().addComboAttr('_type', ['button', 'reset', 'submit']);

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
    };
    
    return this;
}
Button.prototype.initShared = function(){
    UIText.prototype.initShared.call(this);
}
export default Button;