/*global y*/
import { mxCodec, mxUtils, mxForm } from './mxExport.js';

/**
 * Some helper functions
 */
function Util() { }

/**
 * Returns the Ids for cells currently selected in the graph
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
 * @param {array} ids the ids as string to look for 
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

Util.Save = function (graph) {
    var encoder = new mxCodec();
    var result = encoder.encode(graph.getModel());
    var xml = mxUtils.getXml(result);
    y.share.data.set('model', xml);
}

Util.initSharedData = function (parent) {
    var uiControl;
    for (var i = 0; i < parent.children.length; i++) {
        uiControl = parent.children[i];
        uiControl.initShared();
        if(uiControl.constructor.name === 'DivContainer'){
            this.initSharedData(uiControl);
        }
    }    
}

Util.createFormFromCellAttributes = function(className, obj, entity){
    var form = new mxForm(className);
    var attrs = obj.attributes;
    var attr;
        for (var i = 0; i < attrs.length; i++) {
            attr = attrs[i];
            if (attr.name === 'label' || attr.name === 'uiType' || attr.name === 'tagType' || attr.name === '_id') continue; //skip the label and the ui-type
            if (attr.value.indexOf('true') != -1 || attr.value.indexOf('false') != -1) //a boolean value
                form.addCheckbox(attr.name, attr.value.indexOf('true') != -1 ? true : false);
            else {
                var values = entity.getComboAttr(attr.name);
                if (values) {
                    var combo = form.addCombo(attr.name);
                    for (var j = 0; j < values.length; j++) {
                        form.addOption(combo, values[j], values[j], attr.value === values[j]);
                    }
                } else
                    form.addText(attr.name, attr.value);
            }
        }
    return form;
}
export default Util;