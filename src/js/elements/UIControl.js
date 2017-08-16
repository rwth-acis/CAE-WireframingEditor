/*global y*/
/**
 * @module UIElements
 */
import {
    mxCell,
    mxCodec,
    mxUtils,
    mxEvent,
    mxCodecRegistry,
    mxPoint,
    mxGeometry,
    mxConstants
} from './../misc/mxExport.js';
import Util from '../misc/Util';
import ComboAttributeMap from '../misc/ComboAttributeMap.js';
import Y from 'yjs';
import $ from 'jquery';
import _ from 'lodash';
import CONST from '../misc/Constants.js';
import TagRegistry from '../tags/TagRegistry.js';


UIControl.prototype = new mxCell();
UIControl.prototype.constructor = UIControl;
window.UIControl = UIControl;

/**
 * The Name of element in the Wireframing editor
 * @static 
 * @default Default
 * @readonly
 */
UIControl.NAME = "Default";

/**
 * Base class for all UI components of the editor
 * @classdesc Base abstract class for all UI components of the editor. 
 * @constructor 
 * @param {mxGeometry} geometry the width, height, x and y of the ui element
 * @param {String} style the style of the ui element
 * @param {String} type the type of the ui element
 * @extends mxCells
 * @requires TagRegistry
 * @requires CONST
 * @requires ComboAttributeMap
 */
function UIControl(geometry, style, type) {
    var that = this;

    /**
     * The map of combo attributes.
     * key is the attribute name. 
     * value is a array of possible values for the attribute.
     * @member {ComboAttributeMap} 
     */
    var comboAttrMap = new ComboAttributeMap();

    var xmlDoc = mxUtils.createXmlDocument();
    /**
     * Contains the data for the attributes of the ui element
     * A ui element always has a 'id'- and 'class'-attribute
     * @member {XMLDocument}
     */
    var uiObj = xmlDoc.createElement('uiObj');

    uiObj.setAttribute('_id', '');
    uiObj.setAttribute('_class', '');
    uiObj.setAttribute('uiType', type || this.constructor.name.toLowerCase());
    
    /**
     * Contains the data of the tags assigned to the ui element.
     * The xml document is appended to the uiObj
     * @member {XMLDocument}
     */
    var tagRoot = xmlDoc.createElement('tagRoot');
    uiObj.append(tagRoot);

    /**
     * The number of tags assigned to the ui element
     * @member {Integer}
     */
    var tagCounter = 0;
    if (!geometry)
        geometry = new mxGeometry(0, 0, 78, 78 );
    if(!style)
        style =style = mxConstants.STYLE_SHAPE + "=default;" +
        mxConstants.STYLE_FILLCOLOR + "=white;" +
        mxConstants.STYLE_STROKECOLOR + '=black;' +
        mxConstants.STYLE_ASPECT + '=fixed;' +
        mxConstants.STYLE_EDITABLE + "=0;";
    mxCell.call(this, uiObj, geometry, style);

    this.setVertex(true);

    /**
     * @param  {Wireframe} wf The wireframe
     * @param  {object} evt a event which is not used
     * @param  {mxCell} dropTarget the target to add the new cell
     * @param  {Integer} x0 x-coordinate
     * @param  {Integer} y0 y-corrdinate
     * @return {undefined}
     */
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
    
    /**
     * Make a type draggable to the canvas
     * @param {object} type the type
     * @param {Wireframe} wireframe the wireframe
     * @return{undefined}
     */
    this.makeTypeDraggable = function (type, wireframe) {
        var preview = document.createElement('div');
        preview.style.width = that.geometry.width+'px';
        preview.style.height = that.geometry.height + 'px';
        preview.style.border = 'black 0.5px dashed';

        mxUtils.makeDraggable(type, wireframe, that.funct, preview, 0, 0);
    }

    /**
     * Set attribute values from json file
     * @param {any} json a json
     * @return{undefined}
     */
    this.setValueFromJson = function (json) {
        for (var key in json) {
            if (this.value.hasAttribute(key)) {
                this.value.setAttribute(key, json[key]);
            }
        }
    }

    /**
     * Get the current number of tags for the ui element
     * @returns {Integer} the tag counter
     */
    this.getTagCounter = function () {
        return tagCounter;
    }
    
    /**
     * @param  {AbstractTag} tag the tag to add to the ui element
     * @return {undefined}
     */
    this.addTag = function (tag) {
        this.value.getElementsByTagName('tagRoot')[0].appendChild(tag.tagObj);
        tagCounter++;
    }
    
    /**
     * Remove a Tag by the id
     * @param  {String} tagId the id of the tag as string
     * @return {undefined}
     */
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
   
    /**
     * Creates the tags for the ui control
     * @return {undefined}
     */
    this.createTags = function () {
        var that = this;
        var tags = {};
        var _createTag = function (node, point) {
            var tag;
            var C = TagRegistry.getClass(node.getAttribute('tagType'));            
            if(C)
                tag = new C(that, point, node.getAttribute('tagType'));
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
        return tags;
    }

    /**
     * Get the combo attribute map for the ui element
     * @return {undefined}
     */
    this.getComboAttrMap = function(){
        return comboAttrMap;
    }

    /**
     * Set the uiType attribute
     * @param {String} type the type of the ui control
     * @return {undefined}
     */
    this.setType = function(type){
        that.value.setAttribute('uiType', type);
    }
}

/**
 * Registers a ui element to the mxCodecRegistry
 * @param  {Function} ctor the constructor to register to mxCodexRegistry
 * @return {undefined}
 */
UIControl.registerCodec = function (ctor) {
    var codec = mxUtils.clone(mxCodecRegistry.getCodec(mxCell));
    codec.template = new ctor();
    mxCodecRegistry.register(codec);
}
UIControl.registerCodec(UIControl);

/**
 * Create the shared attributes
 * @param  {boolean} createdByLocalUser Only the local user is allowed to create the shared types
 * @return {undefined}
 */
UIControl.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_id', Y.Text);
        y.share.attrs.set(this.getId() + '_class', Y.Text);
    }
}

/**
 * Set the value of a boolean attribute in the property editor and the ui element
 * @param  {String} name the name of the attribtue
 * @param  {Boolean} value the boolean value
 * @returns {undefined}
 */
UIControl.prototype.setBooleanAttributeValue = function (name, value) {
    this.value.setAttribute(name, value);
    var $input = $('#propertyEditor_' + this.getId() + ' #attributesTab').find('td:contains(' + name.substr(1) + ') + td input');
    if ($input.length > 0)
        $input[0].checked = value;
    $('.wfSave').click();
}
/**
 * Set the value of a combo attribute in the property editor and the ui element
 * @param  {String} name the name of the attribute
 * @param  {String} value a value for the attribute 
 * @return {undefined}
 */
UIControl.prototype.setComboAttributeValue = function (name, value) {
    this.value.setAttribute(name, value);
    var $select = $('#propertyEditor_' + this.getId() + ' #attributesTab').find('td:contains(' + name.substr(1) + ') + td select');
    if ($select.length > 0)
        $select.find('option[value=' + value + ']').prop('selected', true);
    $('.wfSave').click();
}

/**
 * Initialize shared attributes
 * @return {undefined}
 */
UIControl.prototype.initShared = function () {
    this.initYText('_id');
    this.initYText('_class');
}

/**
 * Get the tag by the id or null
 * @param  {String} id the id of the tag
 * @return {AbstractTag|Null} the tag or null 
 */
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

/**
 * Check if the ui elements contains the tag
 * @param  {AbstractTag} tag the tag to check
 * @return {Boolean}  true if the ui element contains the tag else false
 */
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
/**
 * Returns the observer function for a string attribute of a ui element
 * @return {Function} the observer for a ytext 
 */
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

/**
 * Create the attribute in y.share.attrs if it does not exists
 * If it exists bind the Observer and initialize the attribute for the uiObj
 * @param  {String} attrName the name of the attribute
 * @return {undefined}
 */
UIControl.prototype.initYText = function (attrName) {
    var ytext = y.share.attrs.get(this.getId() + attrName, Y.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + attrName, Y.Text);
    else {
        ytext.observe(this.getYTextObserver());
        this.value.setAttribute(attrName, ytext.toString());
    }
}

/**
 * Serializes the ui element to xml
 * @return {XMLDocument} the xml representation of the ui element
 */
UIControl.prototype.toXML = function () {
    var codec = new mxCodec();
    var result = codec.encode(this);
    return mxUtils.getXml(result);
}

/**
 * Get the edit overlay for the ui element
 * @return {EditOverlay} the edit overlay for the ui element
 */
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