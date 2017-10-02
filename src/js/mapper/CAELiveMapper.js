/*global y, mxLog*/
import { mxEvent, mxCodec, mxUtils, mxPoint, mxGraph } from '../misc/mxExport.js';
import CONST from '../misc/Constants.js';
import SyncMeta from 'syncmeta-plugin';
import TagRegistry from '../tags/TagRegistry.js';
import $ from 'jquery';
import SyncMetaSelectOverlay from '../overlays/SyncMetaSelectOverlay.js';
import Noty from 'noty';

/**
 * @classdesc Live mapper for the CAE. Its a Singleton class.
 * @constructor
 * @requires syncmeta-plugin
 */
function CAELiveMapper() {

    var widgetAttr = {};

    return {
        /**
         * Initialize the live mapping the the CAE frontend component model
         * @param {mxEditor} editor the editor
         * @param {String} userId the id of the user which is just passed to the syncmeta-plugin module
         * @return {undefined}
         * @memberof CAELiveMapper
         */
        init: function (editor, userId) {
            //The live mapper starts here
            SyncMeta.init(y, userId);
            var model = y.share.data.get('model');
            var widgetNodeId = null;
            var hasChildMap = {};
            var isStaticMap = {}; //is the html element static
            var isConnected = {}; //is the html element connected to the widget
            var mxCellOverlayAddFlag = true;
            if (model) {
                nodeLoop:
                for (var key in model.nodes) {
                    if (model.nodes.hasOwnProperty(key)) {
                        var node = model.nodes[key];
                        if (node.type === 'Widget') {
                            widgetNodeId = key;
                        } else if (node.type === 'HTML Element') {
                            attrLoop:
                            for (var attrKey in node.attributes) {
                                var attr = node.attributes[attrKey];
                                if (attr.name === 'static') {
                                    isStaticMap[key] = attr.value.value;
                                    break attrLoop;
                                }
                            }
                        }
                    }
                }
                for (var key in model.edges) {
                    if (model.edges.hasOwnProperty(key)) {
                        var edge = model.edges[key];
                        if (edge.type === 'hasChild') {
                            hasChildMap[edge.target] = key;
                        }
                        else if (edge.type === 'Widget to HTML Element') {
                            isConnected[edge.target] = true;
                        }
                    }
                }
            }
            //check if the frontend component metamodel is loaded
            var metamodelCheck = false;
            var metamodel = y.share.data.get('metamodel');
            if(metamodel && metamodel.hasOwnProperty("nodes") && metamodel.hasOwnProperty("edges") && metamodel.hasOwnProperty("attributes")){
                //check if a 'Widget'-node type is a part of the metamodel 
                for(var nodeKey in metamodel.nodes){
                    var node = metamodel.nodes[nodeKey];
                    if(node.label === 'Widget'){
                        metamodelCheck = true;
                        break;
                    }
                }
            }
            if(!metamodelCheck){
                new Noty({
                    type: 'error',
                    layout : 'topRight',
                    text: 'No CAE-Frontend-Component metamodel found! Please load it and refresh.',
                    timeout: 2000
                }).show();
                return;
            }else{
                new Noty({
                    type: 'success',
                    layout : 'topRight',
                    text: 'Found a CAE-Frontend-Component metamodel.',
                    timeout: 2000
                }).show();
            }

            if (!widgetNodeId) {
                widgetNodeId = SyncMeta.createNode('Widget', 4500, 4500, 100, 100, 1);
                setTimeout(function () {
                    var meta = editor.graph.model.getMeta();
                    SyncMeta.setAttributeValue(widgetNodeId, 'width', meta.getAttribute('width'));
                    SyncMeta.setAttributeValue(widgetNodeId, 'height', meta.getAttribute('height'));
                }, 750);
            } else {
                var meta = editor.graph.model.getMeta();
                /*for (var i = 0; i < meta.attributes.length; i++) {
                    var attrib = meta.attributes[i];
                    var ytext = widgetYMap.get(widgetNodeId + '[' + attrib.name.slice(1) + ']');
                    if(ytext)
                        widgetAttr[attrib.name] = ytext;
                    else mxLog.writeln('Widget node attribute ' + attrib.name + ' is not ytext????');
                }*/
                SyncMeta.setAttributeValue(widgetNodeId, 'width', meta.getAttribute('width'));
                SyncMeta.setAttributeValue(widgetNodeId, 'height', meta.getAttribute('height'));
            }

            //if no widget node is found dont initialize the events
            if (!widgetNodeId) return;

            editor.graph.model.setAttribute('id', widgetNodeId);

            SyncMeta.onNodeAdd(function (event) {
                mxLog.writeln('Node was created in SyncMeta: ' + JSON.stringify(event));
            });

            function createUIControlElementFromNode(nodeId) {
                var ymap = y.share.nodes.get(nodeId);
                if (ymap) {
                    var attr = ymap.get(nodeId + '[type]');
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
                        //Create Node
                        y.share.action.set(mxEvent.ADD_VERTEX, {
                            userId: y.db.userId,
                            id: nodeId,
                            data: xml,
                            parent: null,
                            fromSyncMeta: true
                        });
                        if (editor.graph.getDefaultParent().children.length > 1) {
                            y.share.action.set(CONST.ACTIONS.SHARED.APPLY_LAYOUT, { userId: y.db.userId, cellId: null });
                        }
                    }

                }
            }
            SyncMeta.onEdgeAdd(function (event) {
                mxLog.writeln('Edge was created in SyncMeta: ' + JSON.stringify(event));

                var cell = editor.graph.model.getCell(event.target);
                if (cell) return;
                if (event.source === widgetNodeId && event.type === 'Widget to HTML Element') {
                    if (isStaticMap.hasOwnProperty(event.target) && isStaticMap[event.target]) {
                        //only the user who triggered the event in syncmeta create the UI control and progapates it to the others
                        var userInfo = y.share.yfUsers.get(y.db.userId);
                        if (userInfo && userInfo.id === event.jabberId)
                            createUIControlElementFromNode(event.target);
                    }
                    else isConnected[event.target] = true;
                }
            });
            SyncMeta.onNodeDelete(function (event) {
                mxLog.writeln('Node deleted from Widget: ' + JSON.stringify(event));
                y.share.action.set(mxEvent.REMOVE, {
                    userId: y.db.userId,
                    cells: [event],
                    fromSyncMeta: true
                });

            });
            SyncMeta.onEdgeDelete(function (event) {
                mxLog.writeln('Edge deleted from the Widget: ' + JSON.stringify(event));
                var cell = editor.graph.model.getCell(event.target);
                if (cell && event.type === 'Widget to HTML Element') {
                    delete isConnected[cell.id];
                    y.share.action.set(mxEvent.REMOVE, {
                        userId: y.db.userId,
                        cells: [cell.id],
                        fromSyncMeta : true
                    });
                }
            });
            SyncMeta.onNodeAttributeChange(function (value, entity, entityValueId, userId) {
                var cell = editor.graph.model.getCell(entity);
                if (!entityValueId) return;
                var attr = entityValueId.substring(entityValueId.indexOf('[') + 1, entityValueId.length - 1);
                switch (attr) {
                    case 'type': {
                        if (!value || !cell || cell.constructor.HTML_NODE_NAME === value || cell.value.getAttribute('uiType') === value) return;
                        var UIControl = editor.getUIComponentFromHTMLName(value);
                        if (UIControl) {
                            y.share.action.set(mxEvent.REMOVE, {
                                userId: y.db.userId,
                                cells: [entity],
                                fromSyncMeta: true
                            });

                            var uiControl = new UIControl();
                            uiControl.geometry.x = cell.geometry.x;
                            uiControl.geometry.y = cell.geometry.y;
                            var encoder = new mxCodec();
                            var result = encoder.encode(uiControl);

                            var xml = mxUtils.getXml(result);
                            y.share.action.set(mxEvent.ADD_VERTEX, {
                                userId: y.db.userId,
                                id: entity,
                                data: xml,
                                parent: cell.parent,
                                fromSyncMeta: true
                            });
                        } else {
                            y.share.action.set(mxEvent.REMOVE, {
                                userId: y.db.userId,
                                cells: [entity],
                                fromSyncMeta: true
                            });
                        }
                        break;
                    }
                    case 'collaborative': {
                        if (value) {
                            var Tag = TagRegistry.getClass('Shared');
                            var tag = new Tag(cell, new mxPoint(-CONST.TAG.SIZE * cell.getTagCounter(), 0));
                            if (cell && tag && userId && !cell.containsTagType(tag)) {
                                mxCellOverlayAddFlag = false;
                                mxGraph.prototype.addCellOverlay.apply(editor.graph, [cell, tag]);
                                cell.addTag(tag);
                                tag.setCell(cell);
                                if (tag.hasOwnProperty('initAttributes')) tag.initAttributes();
                                tag.createShared(y.share.yfUsers.get(y.db.userId).id === userId);
                                tag.bindClickEvent(editor.graph);
                                var ref = $('#' + cell.getId() + '_tagTree').jstree(true);
                                if (ref) {
                                    ref.create_node(null, {
                                        id: tag.tagObj.getAttribute('id'),
                                        type: tag.tagObj.getAttribute('tagType'),
                                        text: tag.constructor.Alias || tag.tagObj.getAttribute('tagType'),
                                        state: {
                                            selected: false,
                                            opened: true
                                        }
                                    });
                                    //if (sel) ref.edit(sel);
                                }
                            }
                        }
                        else {
                            var tagId;
                            for (var i = 0; cell.overlays && i < cell.overlays.length; i++) {
                                var overlay = cell.overlays[i];
                                if (overlay.constructor.name === 'SharedTag')
                                    tagId = overlay.getId();
                            }
                            y.share.action.set(CONST.ACTIONS.DELETE_TAG, { userId: y.db.userId, cellId: cell.getId(), selected: [tagId], types: ['SharedTag'], fromSyncMeta: true });
                        }
                        break;
                    }
                    case 'static': {
                        isStaticMap[entity] = value;
                        if (value) {
                            if (isConnected.hasOwnProperty(entity) && isConnected[entity]) {
                                var uiControl = editor.graph.model.getCell(entity);
                                var userInfo = y.share.yfUsers.get(y.db.userId);
                                if (!uiControl && userInfo && userInfo.id === userId)
                                    createUIControlElementFromNode(entity);
                            }
                        }
                        else {
                            //check if ui control element exists and delete it from wireframe only
                            var uiControl = editor.graph.model.getCell(entity);
                            if (uiControl) {
                                editor.graph.removeCells([uiControl]);
                            }
                        }
                        break;
                    }
                }

            });

            y.share.action.observe(function (event) {
                switch (event.name) {
                    case mxEvent.ADD_OVERLAY: {
                        if (!mxCellOverlayAddFlag) {
                            mxCellOverlayAddFlag = true;
                            return;
                        }
                        if (event.value.fromSyncMeta) return;
                        if (event.value.xml.indexOf('SharedTag') != -1)
                            SyncMeta.setAttributeValue(event.value.id, 'collaborative', true);
                        break;
                    }
                    case CONST.ACTIONS.SHARED.GRAPH_RESIZE: {
                        SyncMeta.setAttributeValue(widgetNodeId, 'width', event.value.width.toString());
                        SyncMeta.setAttributeValue(widgetNodeId, 'height', event.value.height.toString());
                        break;
                    }
                    case CONST.ACTIONS.DELETE_TAG: {
                        if (event.value.fromSyncMeta) return;
                        for (var i = 0; i < event.value.types.length; i++) {
                            var type = event.value.types[i];
                            if (type === 'SharedTag')
                                SyncMeta.setAttributeValue(event.value.cellId, 'collaborative', false);
                        }
                        break;
                    }
                    case mxEvent.GROUP_CELLS: {
                        if( event.value.fromSyncMeta) return;
                        if (event.value.userId !== y.db.userId) return;
                        if (y.share.nodes.get(event.value.groupId) != null) return;
                        SyncMeta.createNode('HTML Element', 4500, 4500, 100, 100, 1, null, event.value.groupId);
                        setTimeout(function () {
                            SyncMeta.setAttributeValue(event.value.groupId, 'type', 'div');
                            SyncMeta.setAttributeValue(event.value.groupId, 'static', true);
                            SyncMeta.createEdge('Widget to HTML Element', widgetNodeId, event.value.groupId);
                            for (var i = 0; i < event.value.ids.length; i++) {
                                var edgeId = SyncMeta.createEdge('hasChild', event.value.groupId, event.value.ids[i]);
                                hasChildMap[event.value.ids[i]] = edgeId;
                            }
                            setTimeout(function () {
                                SyncMeta.applyLayout();
                            }, 1000);
                        }, 1000);
                        break;
                    }
                    case mxEvent.UNGROUP_CELLS: {
                        if( event.value.fromSyncMeta) return;                        
                        if (event.value.userId !== y.db.userId) return;
                        for (var i = 0; i < event.value.ids.length; i++) {
                            var cellId = event.value.ids[i];
                            SyncMeta.deleteNode(cellId);
                        }
                        setTimeout(function () {
                            SyncMeta.applyLayout();
                        }, 1000);
                        break;
                    }
                    case mxEvent.ADD_VERTEX: {
                        if( event.value.fromSyncMeta) return;                        
                        if (event.value.userId !== y.db.userId) return;

                        var doc = mxUtils.parseXml(event.value.data);
                        var codec = new mxCodec(doc);
                        var type = doc.documentElement.getAttribute('uiType');
                        var elt = doc.documentElement.childNodes[1];
                        var cells = [];
                        while (elt != null) {
                            var cell = codec.decode(elt);
                            cell.setId(event.value.id);
                            cell.setType(type);
                            cells.push(cell);
                            elt = elt.nextSibling;
                        }
                        if (y.share.nodes.get(cell.id) != null) return;
                        for (var i = 0; i < cells.length; i++) {
                            var cell = cells[i];
                            if (y.share.nodes.get(cell.id) != null) return;
                            SyncMeta.createNode('HTML Element', 4500, 4500, 100, 100, 1, null, cell.id);
                            setTimeout(function () {
                                SyncMeta.setAttributeValue(cell.id, 'type', cell.constructor.HTML_NODE_NAME || cell.value.getAttribute('uiType'));
                                SyncMeta.setAttributeValue(cell.id, 'static', true);
                                SyncMeta.createEdge('Widget to HTML Element', widgetNodeId, cell.id);
                                if (parent.id != '1') {
                                    var edgeId = SyncMeta.createEdge('hasChild', parent.id, cell.id);
                                    hasChildMap[cell.id] = edgeId;
                                }
                                setTimeout(function () {
                                    SyncMeta.applyLayout();
                                }, 1000);
                            }, 1000);
                        }

                        break;
                    }
                    case mxEvent.REMOVE: {
                        if( event.value.fromSyncMeta) return;                        
                        if (event.value.userId !== y.db.userId) return;
                        var children = event.value.children;

                        function recursiveDelete(parent) {
                            if (children.hasOwnProperty(parent)) {
                                for (var i = 0; i < children[parent].length; i++) {
                                    SyncMeta.deleteNode(children[parent][i]);
                                    delete hasChildMap[children[parent][i]];
                                    if (children.hasOwnProperty(children[parent][i]))
                                        recursiveDelete(children[parent][i]);
                                }
                            }
                        }
                        var cells = event.value.cells;
                        for (var i = 0; i < cells.length; i++) {
                            SyncMeta.deleteNode(cells[i]);
                            recursiveDelete(cells[i]);
                        }
                        setTimeout(function () {
                            SyncMeta.applyLayout();
                        }, 1000);
                        break;
                    }
                }
            });


            /**
             * hihglight the selected ui control element in SyncMeta
             */
            y.share.awareness.observe(function(event){
                if(event.name === y.db.userId){
                    var userInfo = y.share.yfUsers.get(y.db.userId);
                    if(userInfo){
                        SyncMeta.highlight(event.value.highlight, 'yellow', 'Selected in CAE-Wireframe', userInfo.id);                   
                        SyncMeta.unhighlight(event.value.unhighlight, userInfo.id);
                    }
                }
            });

            /**
             * y.share.select-map from SyncMeta

             */
            y.share.select.observe(function (event) {
                var cell = editor.graph.model.getCell(event.value);
                if (cell) {
                    var overlay = new SyncMetaSelectOverlay(null, new mxPoint(0, -cell.geometry.height));
                    mxGraph.prototype.addCellOverlay.apply(editor.graph, [cell, overlay]);
                }
                var oldCell = editor.graph.model.getCell(event.oldValue);
                if (oldCell) {
                    for (var i = 0; oldCell.overlays && i < oldCell.overlays.length; i++) {
                        var overlay = oldCell.overlays[i];
                        if (overlay instanceof SyncMetaSelectOverlay) {
                            mxGraph.prototype.removeCellOverlay.apply(editor.graph, [oldCell, overlay]);
                        }
                    }
                }

            });
        },
        /**
         * Get a shared widget attribute with the given name
         * @param {String} name the name of the attribute
         * @return {YText} the shared y-text object
         * @memberof CAELiveMapper
         */
        getSharedWidgetAttr: function (name) {
            return widgetAttr.hasOwnProperty(name) ? widgetAttr[name] : undefined;
        }
    }
}
export default new CAELiveMapper();