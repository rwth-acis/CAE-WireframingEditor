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
        
        editor.graph.addListener(mxEvent.CELLS_ADDED, function (graph, event) {
            var cells = event.getProperty('cells');
            for (var i = 0; i < cells.length; i++) {
                var cell = cells[i];
                SyncMeta.createNode('HTML Element', 4500, 4500, 100, 100, 1, null, cell.id);
                setTimeout(function () {
                    SyncMeta.setAttributeValue(cell.id, 'type', cell.constructor.HTML_NODE_NAME);
                    SyncMeta.createEdge('Widget to HTML Element', widgetNodeId, cell.id);
                    setTimeout(function () {
                        SyncMeta.applyLayout();
                    }, 500);
                }, 500);
            }

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
        
    });
});
