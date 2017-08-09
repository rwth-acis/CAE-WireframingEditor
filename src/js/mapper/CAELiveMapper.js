/*global y, mxLog*/
import { mxEvent, mxCodec, mxUtils } from '../misc/mxExport.js';
import CONST from '../misc/Constants.js';
import SyncMeta from 'syncmeta-plugin';

/**
 * Live mapper for the CAE
 * @param {WireframeEditor} editor 
 */
function CAELiveMapper(editor) {
    //The live mapper starts here
    SyncMeta.init(y);
    var model = y.share.data.get('model');
    var widgetNodeId = null;
    var hasChildMap = {};
    var nodeCreateMap = {};
    var mxCellsAddedFlag = true, mxCellsRemoveFlag = true;
    if (model) {
        for (var key in model.nodes) {
            if (model.nodes.hasOwnProperty(key)) {
                var node = model.nodes[key];
                if (node.type === 'Widget') {
                    widgetNodeId = key;
                    break;
                }
            }
        }
        for (var key in model.edges) {
            if (model.edges.hasOwnProperty(key)) {
                var edge = model.edges[key];
                if (edge.type === 'hasChild') {
                    hasChildMap[edge.target] = key;
                }
            }
        }
    }
    if (!widgetNodeId) {
        setTimeout(function () {
            var id = SyncMeta.createNode('Widget', 4500, 4500, 100, 100, 1);
            widgetNodeId = id;
        }, 500);
    }

    SyncMeta.onNodeAdd(function (event) {
        mxLog.writeln('Node was created in SyncMeta: ' + JSON.stringify(event));
        nodeCreateMap[event.id] = event;
    });
    SyncMeta.onEdgeAdd(function (event) {
        mxLog.writeln('Edge was created in SyncMeta: ' + JSON.stringify(event));
        var cell = editor.graph.model.getCell(event.target);
        if (cell) return;
        if (event.source === widgetNodeId && event.type === 'Widget to HTML Element') {
            var ymap = y.share.nodes.get(event.target);
            if (ymap) {
                var attr = ymap.get(event.target + '[type]');
                var type;
                if (attr)
                    type = attr.value;
                else
                    type = 'input';

                var UIControl = editor.getUIComponentFromHTMLName(type);
                if (UIControl) {
                    var encoder = new mxCodec();
                    var uiControl = new UIControl();
                    var result = encoder.encode(uiControl);

                    var xml = mxUtils.getXml(result);
                    mxCellsAddedFlag = false;
                    //Create Node
                    y.share.action.set(mxEvent.ADD_VERTEX, {
                        userId: y.db.userId,
                        id: event.target,
                        data: xml,
                        parent: null
                    });
                    if (editor.graph.getDefaultParent().children.length > 1) {
                        y.share.action.set(CONST.ACTIONS.SHARED.APPLY_LAYOUT, { userId: y.db.userId, cellId: null });
                    }
                }

            }
        }
    });
    SyncMeta.onNodeDelete(function (event) {
        mxLog.writeln('Node deleted from Widget: ' + JSON.stringify(event));
        y.share.action.set(mxEvent.REMOVE, {
            userId: y.db.userId,
            cells: [event]
        });

    });
    SyncMeta.onEdgeDelete(function (event) {
        mxLog.writeln('Edge deleted from the Widget: ' + JSON.stringify(event));
        var cell = editor.graph.model.getCell(event.target);
        if (event.type === 'Widget to HTML Element') {
            y.share.action.set(mxEvent.REMOVE, {
                userId: y.db.userId,
                cells: [cell.id]
            });
        }
    });
    SyncMeta.onNodeAttributeChange(function (value, entity, entityValueId) {
        var cell = editor.graph.model.getCell(entity);
        var UIControl = editor.getUIComponentFromHTMLName(value);
        if (!value || !cell || cell.constructor.HTML_NODE_NAME === value || entityValueId.indexOf('[type]') == -1) return;
        if (UIControl) {
            mxCellsRemoveFlag = false;
            y.share.action.set(mxEvent.REMOVE, {
                userId: y.db.userId,
                cells: [entity]
            });

            var uiControl = new UIControl();
            uiControl.geometry.x = cell.geometry.x;
            uiControl.geometry.y = cell.geometry.y;
            var encoder = new mxCodec();
            var result = encoder.encode(uiControl);

            var xml = mxUtils.getXml(result);
            mxCellsAddedFlag = false;
            y.share.action.set(mxEvent.ADD_VERTEX, {
                userId: y.db.userId,
                id: entity,
                data: xml,
                parent: cell.parent
            });
        } else {
            y.share.action.set(mxEvent.REMOVE, {
                userId: y.db.userId,
                cells: [entity]
            });
        }
    });

    editor.graph.addListener(mxEvent.CELLS_ADDED, function (graph, event) {
        if (!mxCellsAddedFlag) {
            mxCellsAddedFlag = true;
            return;
        }
        var cells = event.getProperty('cells');
        var absolute = event.getProperty('absolute');
        var parent = event.getProperty('parent');

        if (!absolute) {
            for (var i = 0; i < cells.length; i++) {
                var cell = cells[i];
                SyncMeta.createNode('HTML Element', 4500, 4500, 100, 100, 1, null, cell.id);
                setTimeout(function () {
                    SyncMeta.setAttributeValue(cell.id, 'type', cell.constructor.HTML_NODE_NAME);
                    SyncMeta.createEdge('Widget to HTML Element', widgetNodeId, cell.id);
                    if (parent.id != '1') {
                        var edgeId = SyncMeta.createEdge('hasChild', parent.id, cell.id);
                        hasChildMap[cell.id] = edgeId;
                    }

                }, 500);
            }
        } else {
            if (parent.id != '1') {
                for (var i = 0; i < cells.length; i++) {
                    var edgeId = SyncMeta.createEdge('hasChild', parent.id, cells[i].id);
                    hasChildMap[cells[i].id] = edgeId;
                }
            } else {
                for (var i = 0; i < cells.length; i++) {
                    if (hasChildMap.hasOwnProperty(cells[i].id)) {
                        SyncMeta.deleteEdge(hasChildMap[cells[i].id]);
                        delete hasChildMap[cells[i].id];
                    }
                }
            }
        }
        setTimeout(function () {
            SyncMeta.applyLayout();
        }, 1000);
    });
    editor.graph.addListener(mxEvent.REMOVE_CELLS, function (graph, event) {
        if (!mxCellsRemoveFlag) {
            mxCellsRemoveFlag = true;
            return;
        }
        var cells = event.getProperty('cells');
        for (var i = 0; i < cells.length; i++) {
            SyncMeta.deleteNode(cells[i].id);
            setTimeout(function () {
                SyncMeta.applyLayout();
            }, 500);
        }
    });
    /*editor.graph.addListener(mxEvent.GROUP_CELLS, function (graph, event) {
        var test = true;
    });*/
}
export default CAELiveMapper;