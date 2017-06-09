/*global y*/
import {
    mxCell,
    mxCodec,
    mxUtils,
    mxEvent
} from './../misc/mxExport.js';
import Util from '../misc/Util';
import Y from 'yjs';

UIControl.prototype = new mxCell();
UIControl.prototype.constructor = UIControl;

function UIControl(geometry, style) {
    var that = this;
    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('uiObj');
    uiObj.setAttribute('id', '');
    uiObj.setAttribute('class', '');
    uiObj.setAttribute('uiType', this.constructor.name.toLowerCase());

    this.comboAttr = {};

    mxCell.call(this, uiObj, geometry, style);

    this.setVertex(true);

    this.funct = function (wf, evt /*, cell*/ ) {
        wf.stopEditing(false);

        //encode UIControl
        var encoder = new mxCodec();

        var pt = wf.getPointForEvent(evt);
        var v = wf.getModel().cloneCell(that);
        v.geometry.x = pt.x;
        v.geometry.y = pt.y;

        var result = encoder.encode(v);
        var xml = mxUtils.getXml(result);
        y.share.map.set(mxEvent.ADD_VERTEX, {
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
        if (this.comboAttr.hasOwnProperty(name))
            return this.comboAttr[name];
        else return undefined;
    }
    this.addComboAttr = function (name, values) {
        if (!this.comboAttr.hasOwnProperty(name)) {
            this.comboAttr[name] = values;
            return true;
        } else return false;
    }
    return this;
}
UIControl.prototype.initShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_id', Y.Text);
        y.share.attrs.set(this.getId() + '_class', Y.Text);
    }
}
export default UIControl;