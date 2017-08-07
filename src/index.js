/*global mxLog*/
import $ from 'jquery';
import GoogleLogin from './js/GoogleLogin.js';
import YjsSync from './js/misc/YjsSync.js';
import SyncMeta from 'syncmeta-plugin';
import Main from './js/Main.js';
import TagRegistry from './js/tags/TagRegistry.js';
import { mxEvent } from './js/misc/mxExport.js';
$(function () {
    YjsSync('yireframetesting').done(function (y) {
        var vls = y.share.data.get('metamodel');
        if (vls)
            window.vls = vls;
        else {
            vls = require('./data/vls.json');
            window.vls = vls;
        }
        TagRegistry.initFromVLS(vls);
        //Important load a vls before calling Main
        var editor = Main();
        GoogleLogin();
        SyncMeta.init(y);
        var model = y.share.data.get('model');
        var widgetNodeId = null;
        var hasChildMap = {};
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
        });

        SyncMeta.onEdgeAdd(function (event) {
            mxLog.writeln('Edge was created in SyncMeta: ' + JSON.stringify(event));
            if (event.source === widgetNodeId)
                mxLog.writeln('Node connected to the Widget');
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
            y.share.action.set(mxEvent.REMOVE, {
                userId: y.db.userId,
                cells: [cell.id]
            });
        });

        editor.graph.addListener(mxEvent.CELLS_ADDED, function (graph, event) {
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
                        if (parent.id != '1')
                            SyncMeta.createEdge('hasChild', parent.id, cell.id);

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
            var cells = event.getProperty('cells');
            for (var i = 0; i < cells.length; i++) {
                SyncMeta.deleteNode(cells[i].id);
                setTimeout(function () {
                    SyncMeta.applyLayout();
                }, 500);
            }
        });

        editor.graph.addListener(mxEvent.GROUP_CELLS, function (graph, event) {
            var test = true;
        });
    });
});
