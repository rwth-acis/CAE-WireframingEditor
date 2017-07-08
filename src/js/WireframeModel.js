/*global y*/
import {
    mxGraphModel,
    mxUtils,
    mxCodecRegistry
} from './misc/mxExport.js';
import $ from 'jquery';
import Y from 'yjs';
import _ from 'lodash';

mxUtils.extend(WireframeModel, mxGraphModel);

var codec = mxCodecRegistry.getCodec(mxGraphModel);
codec.template = new WireframeModel();
mxCodecRegistry.addAlias('WireframeModel', 'mxGraphModel');
window.WireframeModel = WireframeModel;

function WireframeModel() {
    var xmlDoc = mxUtils.createXmlDocument();
    var meta = xmlDoc.createElement('WireframeMeta');
    meta.setAttribute('_name', '');
    meta.setAttribute('_description', '');
    meta.setAttribute('_developerName', '');
    meta.setAttribute('_developerMail', '');
    meta.setAttribute('width', '');
    meta.setAttribute('height', '');
    meta.setAttribute('_mircoserviceAddress', '');
    mxGraphModel.call(this);

    this.getMeta = function () {
        return meta;
    }
    this.setAttribute = function (name, value) {
        if (!meta.hasAttribute(name)) return false;
        meta.setAttribute(name, value);
        return true;
    }
    this.getAttribute = function (name) {
        return meta.getAttribute(name);
    }
    this.initMetaFromXml = function (m) {
        meta = m;
    }
    this.getComboAttr = function () {
        return undefined;
    }

    var initYText = function (attrName) {
        var ytext = y.share.attrs.get('meta' + attrName, Y.Text);
        if (!ytext)
            y.share.attrs.set('meta' + attrName, Y.Text);
        else {
            ytext.observe(getYTextObserver());
            meta.setAttribute(attrName, ytext.toString());
        }
    }
    var getYTextObserver = function () {
        var observer = _.debounce(function (evt) {
            var value = evt.object.toString();
            var path = evt.object.getPath()[0];
            var attrName = path.substring(path.indexOf('_'));
            meta.setAttribute(attrName, value);
            $('.wfSave').click();
        }, 500);
        return observer;
    }
    this.initSharedData = function () {
        initYText('_name');
        initYText('_description');
        initYText('_developerName');
        initYText('_developerMail');
        initYText('_mircoserviceAddress');
    }
}



export default WireframeModel;