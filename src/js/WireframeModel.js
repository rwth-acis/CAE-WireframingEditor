/*global y, vls*/
import {
    mxGraphModel,
    mxUtils,
    mxCodecRegistry
} from './misc/mxExport.js';
import $ from 'jquery';
import Y from 'yjs';
import _ from 'lodash';
import ComboAttributeMap from './misc/ComboAttributeMap.js';

mxUtils.extend(WireframeModel, mxGraphModel);

var codec = mxCodecRegistry.getCodec(mxGraphModel);
codec.template = new WireframeModel();
mxCodecRegistry.addAlias('WireframeModel', 'mxGraphModel');
window.WireframeModel = WireframeModel;

/**
 * @classdesc The conceptual model behind the wireframe
 * @constructor
 * @extends mxGraphModel
 */
function WireframeModel() {
    var that = this;
    var xmlDoc = mxUtils.createXmlDocument();
    var meta = xmlDoc.createElement('WireframeMeta');
    var comboAttrMap = new ComboAttributeMap();
    var exclude = ['width', 'height'];
    var strAttrs = [];
    if (window.hasOwnProperty('vls')) {
        for (var key in vls.nodes) {
            var node = vls.nodes[key];
            if (node.label === 'Widget') {
                for (var attrKey in node.attributes) {
                    var attr = node.attributes[attrKey];
                    if (exclude.indexOf(attr.key) === -1) {
                        if (attr.value === 'string') {
                            meta.setAttribute('_' + attr.key, '');
                            strAttrs.push('_' + attr.key);
                        } else if (attr.value === 'boolean')
                            meta.setAttribute('_' + attr.key, true);
                        else if (attr.hasOwnProperty('options')) {
                            var values = Object.keys(attr.options);
                            comboAttrMap.addComboAttr('_' + attr.key, values);
                            meta.setAttribute('_' + attr.key, values[0]);
                        }
                    }
                }
            }

        }
    }

    meta.setAttribute('width', '500');
    meta.setAttribute('height', '500');
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
    this.getComboAttrMap = function () {
        return comboAttrMap;
    }

    var initYText = function (attrName) {
        var ytext = y.share.attrs.get('meta' + attrName, Y.Text);
        if (!ytext)
            y.share.attrs.set('meta' + attrName, Y.Text);
        else {
            ytext.observe(that.getYTextObserver());
            meta.setAttribute(attrName, ytext.toString());
        }
    }
    this.getYTextObserver = function () {
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
        for (var i = 0; i < strAttrs.length; i++) {
            initYText(strAttrs[i]);
        }
    }
}



export default WireframeModel;