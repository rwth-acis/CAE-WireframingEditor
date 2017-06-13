/*global y*/
import {
    mxConstants
} from '../misc/mxExport.js';
import UIControl from './UIControl.js';
import $ from 'jquery';
import Y from 'yjs';

UIText.prototype = new UIControl();
UIText.prototype.constructor = UIText;
window.UIText = UIText;
function UIText(text, geometry) {
    var style = mxConstants.STYLE_SHAPE + "=rectangle;" +
        mxConstants.STYLE_EDITABLE + "=0;" +
        mxConstants.STYLE_RESIZABLE + "=1;" +
        mxConstants.STYLE_FILLCOLOR + "=none;" +
        mxConstants.STYLE_STROKECOLOR + '=none;';

    UIControl.call(this, geometry, style);
    this.value.setAttribute('label', text);

    var _$node = null;

    this.get$node = function(){
        return _$node;
    }

    this.set$node =  function($node){
        _$node = $node;
    }
    return this;
}

UIText.prototype.initDOM = function(element){
    var _$node;
    var dom = element || 'input';
        _$node = $('<' + dom + '>')
            .css('width', this.geometry.width - 15)
            .css('height', this.geometry.height - 15)
            .css('font-size', 15);
    this.set$node(_$node);
};

UIText.prototype.createShared = function (createdByLocalUser) {
    UIControl.prototype.createShared.call(this, createdByLocalUser);
    if (createdByLocalUser) {
        var ytext = y.share.attrs.set(this.getId() + '_label', Y.Text);
        ytext.insert(0, this.value.getAttribute('label'));
        ytext.observe(function(event){
            this.value.setAttribute('label', event.value);
        });
    }
};
 UIText.prototype.initShared = function(){
    UIControl.prototype.initShared.call(this);
    var ytext = y.share.attrs.get(this.getId()+ '_label');
    if(ytext)
        this.bindLabel(ytext);
    else
        y.share.attrs.set(this.getId() + '_label', Y.Text);
 };

UIText.prototype.bindLabel = function(ytext){
    ytext.bind(this.get$node()[0]);
}

UIText.registerCodec = function(ctor){
    UIControl.registerCodec(ctor);
}

export default UIText;