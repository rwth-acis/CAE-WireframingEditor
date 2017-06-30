/*global y*/
import {
    mxCellOverlay,
    mxUtils,
    mxConstants,
    mxCodec,
    mxCodecRegistry,
    mxObjectCodec
} from '../misc/mxExport.js';
import $ from 'jquery';
import Util from '../misc/Util.js';
import Y from 'yjs';
import _ from 'lodash';

mxUtils.extend(AbstractTag, mxCellOverlay);

/**
 * Abstract tag class for interacitivty tags
 * @param {UIControl | AbstractTag} entity
 * @param {mxImage} image 
 * @param {string} tooltip 
 * @param {string} align 
 * @param {string} verticalAlign 
 * @param {mxPoint} offset 
 * @param {*} cursor 
 */
function AbstractTag(entity, image, tooltip, offset, cursor) {
    var comboAttr = {};
    var childTags = {};
    var xmlDoc = mxUtils.createXmlDocument();
    this.tagObj = xmlDoc.createElement('tagObj');
    this.tagObj.setAttribute('tagType', this.constructor.name.toLowerCase());
    this.tagObj.setAttribute('parent', '#');

    var _cell = entity;
    mxCellOverlay.call(this, image, tooltip, mxConstants.ALIGN_RIGHT, mxConstants.ALIGN_TOP, offset, cursor);
    if(entity)
        this.tagObj.setAttribute('id', entity.getId() + '_'+ Util.GUID());
    
    this.getId = function(){
        return this.tagObj.getAttribute('id');
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

    this.getCell = function(){
        return _cell;
    }
    this.setCell = function(cell){
        _cell = cell;
    }

    this.addChildTag = function(tag){
        childTags[tag.getId()] = tag;
    }

    this.getChildTags = function(){
        return childTags;
    }
    
}

AbstractTag.prototype.toXML = function () {
    var encoder = new mxCodec();
    encoder.encodeDefaults = true;
    var result = encoder.encode(this);
    return mxUtils.getXml(result);
}

AbstractTag.registerCodec = function (ctor) {
    var codec = new mxObjectCodec();
    codec.template = new ctor();
    mxCodecRegistry.register(codec);
}
AbstractTag.prototype.setBooleanAttributeValue = function (name, value) {
    this.tagObj.setAttribute(name, value);
    var id = this.getId().substring(0, this.getId().indexOf('_'));
    var $input = $('#' + id + '_tagAttribute').find('td:contains(' + name.substr(1) + ') + td input');
    if ($input.length > 0)
        $input[0].checked = value;
    $('.wfSave').click();
}
AbstractTag.prototype.setComboAttributeValue = function (name, value) {
    this.tagObj.setAttribute(name, value);
    var id = this.getId().substring(0, this.getId().indexOf('_'));
    var $select = $('#' + id + '_tagAttribute').find('td:contains(' + name.substr(1) + ') + td select');
    if ($select.length > 0)
        $select.find('option[value="' + value + '"]').prop('selected', true);
    $('.wfSave').click();
}

AbstractTag.prototype.createShared = function(){}

AbstractTag.prototype.initShared = function(){}

AbstractTag.prototype.getYTextObserver = function(){
    var that = this;
    var observer = _.debounce(function (evt) {
        var value = evt.object.toString();
        var path = evt.object.getPath()[0];
        var attrName = path.substring(path.lastIndexOf('_'));
        var cell = that.getCell();
        var tagRoot = cell.value.getElementsByTagName('tagRoot')[0];
        var tag = tagRoot.getElementsByTagName('tagObj').namedItem(that.getId());
        tag.setAttribute(attrName, value);
        $('.wfSave').click();
    },500);
    return observer;
}

AbstractTag.prototype.initYText = function(attrName){
    var ytext =y.share.attrs.get(this.getId() + attrName, Y.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + attrName, Y.Text);
    else{
         ytext.observe(this.getYTextObserver());
         this.tagObj.setAttribute(attrName, ytext.toString());
    }
}
export default AbstractTag;