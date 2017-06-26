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
    var xmlDoc = mxUtils.createXmlDocument();
    this.tagObj = xmlDoc.createElement('tagObj');
    this.tagObj.setAttribute('tagType', this.constructor.name.toLowerCase());
    this.tagObj.setAttribute('parent', '#');
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
}
AbstractTag.prototype.setComboAttributeValue = function (name, value) {
    this.tagObj.setAttribute(name, value);
    var id = this.getId().substring(0, this.getId().indexOf('_'));
    var $select = $('#' + id + '_tagAttribute').find('td:contains(' + name.substr(1) + ') + td select');
    if ($select.length > 0)
        $select.find('option[value="' + value + '"]').prop('selected', true);
}
AbstractTag.prototype.createShared = function(){
    //nothing to do here
}

AbstractTag.prototype.initShared = function(){}
export default AbstractTag;