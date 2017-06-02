import { mxUtils, mxConstants, mxEvent } from '../mxExport.js';
import UIControl from '../UIControl.js';
import $ from 'jquery';
import Y from 'yjs';

Link.prototype = new UIControl();
Link.prototype.constructor = Link;

//Global for the codec converter
window.Link = Link;

function Link(value, geomentry, style) {
    UIControl.call(this, value, geomentry, style);

    this.setStyle(
        mxConstants.STYLE_SHAPE + "=rectangle;"
        + mxConstants.STYLE_EDITABLE + "=0;"
        + mxConstants.STYLE_RESIZABLE + "=1;"
        + mxConstants.STYLE_FILLCOLOR + "=none;"
        + mxConstants.STYLE_STROKECOLOR + '=none;'
    );

    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('UIObject');
    uiObj.setAttribute('label', 'Link');
    uiObj.setAttribute('url', 'http://localhost:8080/index.html');

    this.setValue(uiObj);

    var ytext= null;
    this.$input= null;

    this.init = function(){
         this.$input = $('<input>')
                .css('background-color', 'transparent')
                .css('width', this.geometry.width - 15)
                .css('height', this.geometry.height - 15)
                .css('color', 'blue')
                .css('border-style', 'initial')
                .css('text-decoration', 'underline')
                .css('font-size', 22)
                .val('Link');
    }
    this.initShared = function(createdByLocalUser){
        if(createdByLocalUser){
            ytext = y.share.attrs.set(this.getId()+'_label', Y.Text);
            ytext.insert(0, 'Link');
        }
    }
}

export default Link;