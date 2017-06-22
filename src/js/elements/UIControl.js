/*global y*/
import {
    mxCell,
    mxCodec,
    mxUtils,
    mxEvent,
    mxCodecRegistry,
    mxPoint
} from './../misc/mxExport.js';
import Util from '../misc/Util';
import Y from 'yjs';
import $ from 'jquery';
import CONST from '../misc/Constants.js';

import SharedTag from '../tags/SharedTag.js';
import MicroserviceCallTag from '../tags/MicroserviceCallTag.js';
import EventTag from '../tags/EventTag.js';
import FunctionTag from '../tags/FunctionTag.js';
import IWCReqTag from '../tags/IWCReqTag.js';
import IWCRespTag from '../tags/IWCRespTag.js';

UIControl.prototype = new mxCell();
UIControl.prototype.constructor = UIControl;
window.UIControl = UIControl;
function UIControl(geometry, style) {
    var that = this;
    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('uiObj');
    uiObj.setAttribute('id', '');
    uiObj.setAttribute('class', '');
    uiObj.setAttribute('uiType', this.constructor.name.toLowerCase());
    var tagsObj = xmlDoc.createElement('tagRoot');
    uiObj.append(tagsObj);
    var comboAttr = {};
    var tagCounter = 0;
    
    mxCell.call(this, uiObj, geometry, style);

    this.setVertex(true);

    this.funct = function (wf, evt /*, cell*/) {
        wf.stopEditing(false);

        //encode UIControl
        var encoder = new mxCodec();

        var pt = wf.getPointForEvent(evt);
        var v = wf.getModel().cloneCell(that);
        v.geometry.x = pt.x;
        v.geometry.y = pt.y;

        var result = encoder.encode(v);

        var xml = mxUtils.getXml(result);

        y.share.action.set(mxEvent.ADD_VERTEX, {
            userId: y.db.userId,
            id: Util.GUID(),
            data: xml
        });
    }
    this.makeTypeDraggable = function (type, wireframe) {
        mxUtils.makeDraggable(type, wireframe, that.funct);
    }

    this.setValueFromJson = function (json) {
        for (var key in json) {
            if (this.value.hasAttribute(key)) {
                this.value.setAttribute(key, json[key]);
            }
        }
    }

    this.getComboAttr = function (name) {
        if (comboAttr.hasOwnProperty(name))
            return comboAttr[name];
        else return undefined;
    }
    this.addComboAttr = function (name, values) {
        if (!comboAttr.hasOwnProperty(name)) {
            comboAttr[name] = values;
            return true;
        } else return false;
    }
    this.getTagCounter = function(){
        return tagCounter;
    }

    this.increaseTagCounter = function(){
        tagCounter++;
    }
    this.decreaseTagCounter = function(){
        tagCounter--;
    }
    this.addTag = function(tagObj){
        tagsObj.append(tagObj)
    }
    this.createTags = function(){
        var that = this;
        var tags = [];
        this.value.childNodes[0].childNodes.forEach(function(node){
            var tag;
            var point =  new mxPoint(-CONST.TAG.SIZE * that.getTagCounter(), 0);
            switch(node.getAttribute('tagType')){   
                case SharedTag.name.toLowerCase(): {
                    tag = new SharedTag(that, point);
                    break;
                }
                case MicroserviceCallTag.name.toLowerCase():{
                    tag = new MicroserviceCallTag(that, point);
                    break;
                }
                case EventTag.name.toLowerCase():{
                    tag = new EventTag(that, point);
                    break;
                }
                case FunctionTag.name.toLowerCase():{
                    tag = new FunctionTag(that, point);
                    break;
                }
                case IWCReqTag.name.toLowerCase():{
                    tag = new IWCReqTag(that, point);
                    break;
                }
                case IWCRespTag.name.toLowerCase():{
                    tag = new IWCRespTag(that, point);
                    break;
                }
            }
            tag.tagObj = node;
            tags.push(tag);
            that.increaseTagCounter();
        });
        return tags;
    }
    return this;
}

UIControl.registerCodec = function (ctor) {
    var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
    codec.template = new ctor();
    mxCodecRegistry.register(codec);
}
UIControl.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_id', Y.Text);
        y.share.attrs.set(this.getId() + '_class', Y.Text);
    }
}
UIControl.prototype.setBooleanAttributeValue = function (name, value) {
    this.value.setAttribute(name, value);
    var $input = $('#propertyEditor_' + this.getId() + ' #attributesTab').find('td:contains(' + name + ') + td input');
    if ($input.length > 0)
        $input[0].checked = value;
}
UIControl.prototype.setComboAttributeValue = function (name, value) {
    this.value.setAttribute(name, value);
    var $select = $('#propertyEditor_' + this.getId() + ' #attributesTab').find('td:contains(' + name + ') + td select');
    if ($select.length > 0)
        $select.find('option[value=' + value + ']').prop('selected', true);
}
UIControl.prototype.initShared = function () {
    var ytext = y.share.attrs.get(this.getId() + '_id', Y.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + '_id', Y.Text);

    ytext = y.share.attrs.get(this.getId() + '_class', Y.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + '_class', Y.Text);
}
UIControl.prototype.getTagById = function(id){
    if(this.hasOwnProperty('overlays') && this.overlays){
        for(var i=0;i<this.overlays.length; i++){
            var tag = this.overlays[i];
            if(tag.constructor.name !== 'UserOverlay'){
                if(tag.tagObj.getAttribute('_id') === id){
                    return tag;
                }
            }
        }
    }
    return null;
}
export default UIControl;