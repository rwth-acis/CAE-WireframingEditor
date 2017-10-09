/*global y*/
/**
 * @module UIElements
 */
import {
    mxConstants
} from '../misc/mxExport.js';
import UIControl from './UIControl.js';
import $ from 'jquery';
import Y from './../../../node_modules/yjs/dist/y.js';
import _ from 'lodash';

UIText.prototype = new UIControl();
UIText.prototype.constructor = UIText;
window.UIText = UIText;
/**
 * Abstract class for all UI components of the editor that consists of a text input
 * @classdesc Class for all UI components of the editor that consists of a text input
 * @constructor
 * @abstract
 * @param {String} text the text of the Label
 * @param {mxGeometry} geometry the width, height, x and y of the ui element
 * @extends UIControl
 * @requires jQuery
 * @requires Yjs
 */
function UIText(text, geometry) {
    var style = mxConstants.STYLE_SHAPE + "=rectangle;" +
        mxConstants.STYLE_EDITABLE + "=0;" +
        mxConstants.STYLE_RESIZABLE + "=1;" +
        mxConstants.STYLE_FILLCOLOR + "=none;" +
        mxConstants.STYLE_STROKECOLOR + '=none;';

    UIControl.call(this, geometry, style);
    this.value.setAttribute('label', text);

    /**
     * The jquery-object represent the html input node
     * @member {jQuery}
     */
    var _$node = null;

    /**
     * Return the html input node
     * @return {jQuery} the html input node
     */
    this.get$node = function(){
        return _$node;
    }

    /**
     * Set the html input node
     * @param {jQuery} $node the html input node
     * @return {undefined}
     */
    this.set$node =  function($node){
        _$node = $node;
    }
}

/**
 * Create the inner html input element for the ui element
 * @param {String} element the name of the html input element to create
 * @return {undefined}
 */
UIText.prototype.initDOM = function(element){
    var _$node;
    var dom = element || 'input';
        _$node = $('<' + dom + '>')
            .css('width', this.geometry.width)
            .css('height', this.geometry.height)
            .css('font-size', 15)
            .css('pointer-events', 'none');
        
    this.set$node(_$node);
};

UIText.prototype.createShared = function (createdByLocalUser) {
    UIControl.prototype.createShared.call(this, createdByLocalUser);
    if (createdByLocalUser) {
        var ytext = y.share.attrs.set(this.getId() + '_label', Y.Text);
        ytext.insert(0, this.value.getAttribute('label'));
        
    }
};
 UIText.prototype.initShared = function(){
    UIControl.prototype.initShared.call(this);
    var ytext = y.share.attrs.get(this.getId()+ '_label');
    if(ytext){
        if(ytext.toString() != this.getAttribute('label')){
            ytext.delete(0, ytext.toString().length);
            ytext.insert(0, this.getAttribute('label'));
        }
        this.bindLabel(ytext);
    }
    else{
        var ytext = y.share.attrs.set(this.getId() + '_label', Y.Text);
        ytext.insert(0, this.value.getAttribute('label'));        
    }
 };

UIText.prototype.bindLabel = function(ytext){
    var $node = this.get$node();
    if(!$node)
        this.initDOM();
    ytext.bind(this.get$node()[0]);
    var that = this;    
    ytext.observe(_.debounce(function(event){
        that.value.setAttribute('label', event.object.toString());
        $('.wfSave').click();
    }, 300));
}

UIText.registerCodec = function(ctor){
    UIControl.registerCodec(ctor);
}

export default UIText;