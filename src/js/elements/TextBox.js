/*global y*/
import UIText from './UIText.js';
import {
    mxGeometry, mxCodecRegistry, mxCell, mxUtils
} from '../misc/mxExport.js';

TextBox.prototype = new UIText();
TextBox.prototype.constructor = TextBox;

var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
codec.template = new TextBox();
codec.isCellCodec   = function(){return true;};
mxCodecRegistry.register(codec);
window.TextBox = TextBox;

function TextBox(geometry) {
    var text = 'Some Text...';
    if(!geometry)
        geometry = new mxGeometry(0, 0, 120, 30);
    UIText.call(this, text, geometry);
    this.setAttribute('_autofocus', false);
    this.setAttribute('_disabled', false);
    this.setAttribute('_autocomplete', 'off');
    this.addComboAttr('_autocomplete',  ['off', 'on']);
    this.initDOM = function(){
        UIText.prototype.initDOM.call(this);
        var $node =this.get$node()
        $node.val(text);
        this.set$node($node);
    }
    return this;
}
TextBox.prototype.initShared = function(){
    UIText.prototype.initShared.call(this);
    var val = y.share.attrs.get(this.getId() + '_disabled');
    if (val)
        this.setBooleanAttributeValue('_disabled', val);
    val = y.share.attrs.get(this.getId() + '_autofocus');
    if (val)
        this.setBooleanAttributeValue('_autofocus', val);
    val = y.share.attrs.get(this.getId() + '_autocomplete');
    if (val && typeof val === 'string')
        this.setComboAttributeValue('_autocomplete', val);
}   
export default TextBox;