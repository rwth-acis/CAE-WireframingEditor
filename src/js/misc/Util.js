/*global y*/
import { mxCodec, mxUtils } from './mxExport.js';

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
export default Util;