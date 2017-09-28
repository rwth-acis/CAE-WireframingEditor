/*global y, mxLog*/
import { mxEvent, mxCodec, mxUtils, mxPoint, mxGraph } from '../misc/mxExport.js';
import CONST from '../misc/Constants.js';
import SyncMeta from 'syncmeta-plugin';
import TagRegistry from '../tags/TagRegistry.js';
import $ from 'jquery';
import SyncMetaSelectOverlay from '../overlays/SyncMetaSelectOverlay.js';

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
            var mxCellsAddedFlag = true, mxCellsRemoveFlag = true, mxCellOverlayAddFlag = true;
            if (model) {
                nodeLoop:
                    for (var key in model.nodes) {
                        if (model.nodes.hasOwnProperty(key)) {
                            var node = model.nodes[key];
                            if (node.type === 'Widget') {
                                widgetNodeId = key;
                            }else if(node.type === 'HTML Element'){
                                attrLoop:
                                    for(var attrKey in node.attributes){
                                        var attr = node.attributes[attrKey];
                                        if(attr.name === 'static'){
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
                        else if(edge.type === 'Widget to HTML Element'){
                            isConnected[edge.target] = true;
                        }
                    }
                }
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

            function createUIControlElementFromNode(nodeId){
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
                        mxCellsAddedFlag = false;
                        //Create Node
                        y.share.action.set(mxEvent.ADD_VERTEX, {
                            userId: y.db.userId,
                            id: nodeId,
                            data: xml,
                            parent: null
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
                    if(isStaticMap.hasOwnProperty(event.target) && isStaticMap[event.target]){
                        //only the user who triggered the event in syncmeta create the UI control and progapates it to the others
                        var userInfo = y.share.yfUsers.get(y.db.userId);
                        if(userInfo && userInfo.id ===  event.jabberId)
                            createUIControlElementFromNode(event.target);
                    }
                    else isConnected[event.target] = true;
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
                if (cell && event.type === 'Widget to HTML Element') {
                    delete isConnected[cell.id];
                    y.share.action.set(mxEvent.REMOVE, {
                        userId: y.db.userId,
                        cells: [cell.id]
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
                    case 'static':{
                        isStaticMap[entity] = value;
                        if(value){
                            if(isConnected.hasOwnProperty(entity) && isConnected[entity]){
                                var uiControl =  editor.graph.model.getCell(entity);
                                var userInfo = y.share.yfUsers.get(y.db.userId);
                                if(!uiControl && userInfo && userInfo.id === userId) 
                                    createUIControlElementFromNode(entity);
                            }
                        }
                        else{
                            //check if ui control element exists and delete it from wireframe only
                            var uiControl =  editor.graph.model.getCell(entity);
                            if(uiControl){
                                mxCellsRemoveFlag = false;
                                editor.graph.removeCells([uiControl]);
                            }
                        }
                        break;
                    }
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
                        }, 1000);
                    }
                } else {
                    if (parent.id != '1') {
                        for (var i = 0; i < cells.length; i++) {
                            if (hasChildMap.hasOwnProperty(cells[i].id)) {
                                SyncMeta.deleteEdge(hasChildMap[cells[i].id]);
                                delete hasChildMap[cells[i].id];
                            }
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
                var recursiveDelete = function (parent) {
                    if (!parent || !parent.children) return;
                    for (var i = 0; i < parent.children.length; i++) {
                        var cell = parent.children[i];
                        SyncMeta.deleteNode(cell.id);
                        delete hasChildMap[cell.id];
                    }
                    recursiveDelete(cell);
                }
                var cells = event.getProperty('cells');
                for (var i = 0; i < cells.length; i++) {
                    SyncMeta.deleteNode(cells[i].id);
                    recursiveDelete(cells[i]);
                    setTimeout(function () {
                        SyncMeta.applyLayout();
                    }, 500);
                }
            });
            editor.graph.addListener(mxEvent.GROUP_CELLS, function (graph, event) {
                var group = event.getProperty('group');
                var cells = event.getProperty('cells');
                setTimeout(function () {
                    for (var i = 0; i < cells.length; i++) {
                        var edgeId = SyncMeta.createEdge('hasChild', group.id, cells[i].id);
                        hasChildMap[cells[i].id] = edgeId;
                    }
                }, 800);
            });
            editor.graph.addListener(mxEvent.UNGROUP_CELLS, function (graph, event) {
                var cells = event.getProperty('cells');
                for (var i = 0; i < cells.length; i++) {
                    var cell = cells[i];
                    SyncMeta.deleteNode(cell.id);
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
                }
            });
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