/*global y*/
import { mxCodec, mxUtils, mxForm, mxGraph } from './mxExport.js';
import $ from 'jquery';
import Noty from 'noty';

/**
 * @module Misc
 */

/**
 * Some utilty functions to initilaize the wireframe from XML or save the wireframe to XML
 * @classdesc A set of helper functions used by various modules and classes
 * @constructor
 */
function Util() { }

/**
 * Returns the Ids for cells currently selected in the graph
 * @param {Wireframe} graph the wireframe
 * @return{array} array of ids
 */
Util.getIdsOfSelectedCells = function (graph) {
    var cells = graph.getSelectionCells();
    var ids = [];
    for (var i = 0; i < cells.length; i++) {
        ids.push(cells[i].id);
    }
    return ids;
}

/**
 * Returns the cells for the given ids
 * @param {Wireframe} graph the wireframe
 * @param {array} ids the ids as string to look for 
 * @return {UIControl[]} an array of ui elements
 */
Util.getCellsFromIdList = function (graph, ids) {
    var cells = [];
    for (var i = 0; i < ids.length; i++) {
        cells.push(graph.getModel().getCell(ids[i]));
    }
    return cells;
}

/**
 * Generates a GUID string.
 * @returns {String} The generated GUID.
 * @example af8a84166e18a307bd9cf2c947bbb3aa
 * @author Slavik Meltser (slavik@meltser.info).
 * @link http://slavik.meltser.info/?p=142
 */
Util.GUID = function () {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? p.substr(0, 4) + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}

/**
 * Serializes the current wireframe to XML and stores it in y.share.data.wireframe
 * @param {Wireframe} graph the wireframe
 * @return  {undefined}
 */
Util.Save = function (graph) {
    var encoder = new mxCodec();
    //encoder.encodeDefaults = true;
    var result = encoder.encode(graph.getModel());
    var meta = graph.getModel().getMeta();
    if(meta.hasChildNodes())
        meta.replaceChild(result, meta.getElementsByTagName('WireframeModel')[0]);
    else 
        meta.appendChild(result);
    var xml = mxUtils.getXml(meta);
    y.share.data.set('wireframe', xml);
    var $save = $('.wfSave');
    $save.css('opacity', 1.0);

    new Noty({
        type: 'success',
        layout : 'topRight',
        text: 'Saved Wireframe Model',
        timeout: 750
    }).show();
    setTimeout(function () {
        $save.css('opacity', 0.5);
    }, 750);
    
}

Util.initSharedData = function (parent, graph) {
    var uiControl;
    if (!parent.children) return;
    for (var i = 0; i < parent.children.length; i++) {
        uiControl = parent.children[i];
        uiControl.initShared();
        var tags = uiControl.createTags();
        for (var key in tags) {
            if (tags.hasOwnProperty(key)) {
                var tag = tags[key];
                mxGraph.prototype.addCellOverlay.apply(graph, [uiControl, tag]);
                tag.initShared();
                tag.bindClickEvent(graph);
            }
        }
        if (uiControl.constructor.name === 'DivContainer') {
            this.initSharedData(uiControl, graph);
        }
    }
}

Util.createFormFromCellAttributes = function (className, obj, entity) {
    var form = new mxForm(className);
    var attrs = obj.attributes;
    var attr;
    for (var i = 0; i < attrs.length; i++) {
        attr = attrs[i];
        if (attr.name[0] !== '_') continue; //skip non-html-element attributes
        if (attr.value.indexOf('true') != -1 || attr.value.indexOf('false') != -1) //a boolean value
            form.addCheckbox(attr.name.substr(1), attr.value.indexOf('true') != -1 ? true : false);
        else {
            var values = entity.getComboAttrMap().getComboAttr(attr.name);
            if (values) {
                var combo = form.addCombo(attr.name.substr(1));
                for (var j = 0; j < values.length; j++) {
                    form.addOption(combo, values[j], values[j], attr.value === values[j]);
                }
            } else
                form.addText(attr.name.substr(1), attr.value);
        }
    }
    return form;
}

Util.bindSharedAttributes = function (entity, form) {
    var id = entity ? entity.getId() : 'meta';
    $(form.body).find('tr').map(function (i, elem) {
        var name = $(elem).find('td:first').text();
        var $input = $(elem).find('input');
        if ($input.length > 0) {
            if ($input.attr('type') === 'text') {
                var ytext = y.share.attrs.get(id + '_' + name);
                if (ytext) {
                    ytext.bind($input[0]);
                    //var caeYText = CAELiveMapper.getSharedWidgetAttr('_'+name);
                    //if(caeYText != undefined)
                    //    caeYText.bind($input[0]);
                    if(!entity && name === 'name')
                        ytext.bind($('#draggingBar')[0]);
                }
                //else //should actually not happen but add something to mxLog if ytext does not exists for whatever reason
            } else if ($input.attr('type') === 'checkbox') {
                $input.change(function () {
                    y.share.attrs.set(id + '_' + name, this.checked);
                });
            }
        } else {
            $(elem).find('select').change(function () {
                //var optionSelected = $("option:selected", this);
                y.share.attrs.set(id + '_' + name, this.value);
            });
        }
    });
}

Util.GetValueFormAttributes = function(node, name){
    for(var key in node.attributes){
        if(node.attributes.hasOwnProperty(key) && node.attributes[key].name  === name){
            return node.attributes[key].value.value;
        }
    }
    return undefined;
}
export default Util;