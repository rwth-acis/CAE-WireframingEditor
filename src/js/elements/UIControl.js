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
import _ from 'lodash';
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

/**
 * Base class for all UI components of the editor
 * @param {mxGeometry} geometry 
 * @param {string} style 
 */
function UIControl(geometry, style) {
    var that = this;
    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('uiObj');
    uiObj.setAttribute('_id', '');
    uiObj.setAttribute('_class', '');
    uiObj.setAttribute('uiType', this.constructor.name.toLowerCase());
    var tagRoot = xmlDoc.createElement('tagRoot');
    uiObj.append(tagRoot);
    var comboAttr = {};
    var tagCounter = 0;

    mxCell.call(this, uiObj, geometry, style);

    this.setVertex(true);

    this.funct = function (wf, evt, dropTarget, x0, y0) {
        wf.stopEditing(false);

        //encode UIControl
        var encoder = new mxCodec();

        //var pt = wf.getPointForEvent(evt);

        var v = wf.getModel().cloneCell(that);
        v.geometry.x = dropTarget ? Math.abs(x0 - dropTarget.geometry.x) : x0;
        v.geometry.y = dropTarget ? Math.abs(y0 - dropTarget.geometry.y) : y0;
        var result = encoder.encode(v);

        var xml = mxUtils.getXml(result);

        y.share.action.set(mxEvent.ADD_VERTEX, {
            userId: y.db.userId,
            id: Util.GUID(),
            data: xml,
            parent: dropTarget ? dropTarget.getId() : null
        });
    }
    this.makeTypeDraggable = function (type, wireframe) {
        var preview = document.createElement('div');
        preview.style.width = that.geometry.width+'px';
        preview.style.height = that.geometry.height + 'px';
        preview.style.border = 'black 0.5px dashed';

        mxUtils.makeDraggable(type, wireframe, that.funct, preview, 0, 0);
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
    this.getTagCounter = function () {
        return tagCounter;
    }

    this.addTag = function (tag) {
        this.value.getElementsByTagName('tagRoot')[0].appendChild(tag.tagObj);
        tagCounter++;
    }
    this.removeTagById = function (tagId) {
        var r = this.value.getElementsByTagName('tagRoot')[0];
        var arr = Array.prototype.slice.call(r.childNodes);
        for (var i = 0; i < arr.length; i++) {
            if (tagId === arr[i].getAttribute('id')) {
                r.removeChild(arr[i]);
                tagCounter--;
                return true;
            }
        }

        return false;
    }
    this.getUIObject = function () {
        return uiObj;
    }
    this.createTags = function () {
        var that = this;
        var tags = {};
        var _createTag = function (node, point) {
            var tag;
            switch (node.getAttribute('tagType')) {
                case SharedTag.name.toLowerCase():
                    {
                        tag = new SharedTag(that, point);
                        break;
                    }
                case MicroserviceCallTag.name.toLowerCase():
                    {
                        tag = new MicroserviceCallTag(that, point);
                        break;
                    }
                case EventTag.name.toLowerCase():
                    {
                        tag = new EventTag(that, point);
                        break;
                    }
                case FunctionTag.name.toLowerCase():
                    {
                        tag = new FunctionTag(that, point);
                        break;
                    }
                case IWCReqTag.name.toLowerCase():
                    {
                        tag = new IWCReqTag(that, point);
                        break;
                    }
                case IWCRespTag.name.toLowerCase():
                    {
                        tag = new IWCRespTag(that, point);
                        break;
                    }
            }
            return tag;
        }

        var children = this.value.childNodes[0].childNodes;
        var arr = Array.prototype.slice.call(children)

        for (var i = 0; i < arr.length; i++) {
            var point = new mxPoint(-CONST.TAG.SIZE * that.getTagCounter(), 0);
            var tag = _createTag(arr[i], point);
            tag.tagObj = arr[i];
            tags[tag.getId()] = tag;
            this.value.getElementsByTagName('tagRoot')[0].appendChild(tag.tagObj);
            tagCounter++;
            if (tag.tagObj.getAttribute('parent') !== '#') {
                var parentTag = tags[tag.tagObj.getAttribute('parent')];
                if (parentTag)
                    parentTag.addChildTag(tag);
            }
        }


        //that.value.get = that.getUIObject();
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
    var $input = $('#propertyEditor_' + this.getId() + ' #attributesTab').find('td:contains(' + name.substr(1) + ') + td input');
    if ($input.length > 0)
        $input[0].checked = value;
    $('.wfSave').click();
}
UIControl.prototype.setComboAttributeValue = function (name, value) {
    this.value.setAttribute(name, value);
    var $select = $('#propertyEditor_' + this.getId() + ' #attributesTab').find('td:contains(' + name.substr(1) + ') + td select');
    if ($select.length > 0)
        $select.find('option[value=' + value + ']').prop('selected', true);
    $('.wfSave').click();
}
UIControl.prototype.initShared = function () {
    this.initYText('_id');
    this.initYText('_class');
}
UIControl.prototype.getTagById = function (id) {
    if (this.hasOwnProperty('overlays') && this.overlays) {
        for (var i = 0; i < this.overlays.length; i++) {
            var tag = this.overlays[i];
            if (tag.constructor.name !== 'UserOverlay' && tag.constructor.name !== 'EditOverlay') {
                if (tag.tagObj.getAttribute('id') === id) {
                    return tag;
                }
            }
        }
    }
    return null;
}
UIControl.prototype.containsTagType = function (tag) {
    if (this.hasOwnProperty('overlays') && this.overlays) {
        for (var i = 0; i < this.overlays.length; i++) {
            var t = this.overlays[i];
            if (t.constructor.name === tag.constructor.name)
                return true;
        }
    }
    return false;
}
UIControl.prototype.getYTextObserver = function () {
    var that = this;
    var observer = _.debounce(function (evt) {
        var value = evt.object.toString();
        var path = evt.object.getPath()[0];
        var attrName = path.substring(path.indexOf('_'));
        that.value.setAttribute(attrName, value);
        $('.wfSave').click();
    }, 500);
    return observer;
}
UIControl.prototype.initYText = function (attrName) {
    var ytext = y.share.attrs.get(this.getId() + attrName, Y.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + attrName, Y.Text);
    else {
        ytext.observe(this.getYTextObserver());
        this.value.setAttribute(attrName, ytext.toString());
    }
}
UIControl.prototype.toXML = function () {
    var codec = new mxCodec();
    var result = codec.encode(this);
    return mxUtils.getXml(result);
}
UIControl.prototype.getEditOverlay = function () {
    if (this.hasOwnProperty('overlays') && this.overlays) {
        for (var i = 0; i < this.overlays.length; i++) {
            var t = this.overlays[i];
            if (t.constructor.name === 'EditOverlay')
                return t;
        }
    }
}

export default UIControl;