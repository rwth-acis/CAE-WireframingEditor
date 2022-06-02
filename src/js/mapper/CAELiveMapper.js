/*global y, mxLog*/
/**
 * @module CAE-Mapper
 */
import { mxEvent, mxCodec, mxUtils, mxPoint, mxGraph } from '../misc/mxExport.js';
import CONST from '../misc/Constants.js';
import Util from '../misc/Util.js';
import SyncMeta from 'syncmeta-plugin';
import TagRegistry from '../tags/TagRegistry.js';
import $ from 'jquery';
import SyncMetaSelectOverlay from '../overlays/SyncMetaSelectOverlay.js';
import Noty from 'noty';

/**
 * @classdesc Live mapper for the CAE. Its a Singleton class.
 * @constructor
 * @requires syncmeta-plugin
 * @memberof module:CAE-Mapper
 */
function CAELiveMapper() {
    var widgetAttr = {};

    return {
        /**
         * Initialize the live mapping the the CAE frontend component model
         * @param {mxEditor} editor the editor
         * @param {String} userId the id of the user which is just passed to the syncmeta-plugin module
         * @return {undefined}
         * @memberof module:CAE-Mapper.CAELiveMapper
         */
        init: function (editor, userId) {
            //The live mapper starts here
            SyncMeta.init(y, userId);
            var model = y.share.data.get('model');
            var widgetNodeId = null;
            var hasChildMap = {};
            var mxCellOverlayAddFlag = true;
            if (model) {
                nodeLoop:
                for (var key in model.nodes) {
                    if (model.nodes.hasOwnProperty(key)) {
                        var node = model.nodes[key];
                        if (node.type === 'Widget') {
                            widgetNodeId = key;
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
            //check if the frontend component metamodel is loaded
            var metamodelCheck = false;
            var metamodel = y.share.data.get('metamodel');
            if (metamodel && metamodel.hasOwnProperty("nodes") && metamodel.hasOwnProperty("edges") && metamodel.hasOwnProperty("attributes")) {
                //check if a 'Widget'-node type is a part of the metamodel
                for (var nodeKey in metamodel.nodes) {
                    var node = metamodel.nodes[nodeKey];
                    if (node.label === 'Widget') {
                        metamodelCheck = true;
                        break;
                    }
                }
            }
            if (!metamodelCheck) {
                new Noty({
                    type: 'error',
                    layout: 'topRight',
                    text: 'No CAE-Frontend-Component metamodel found! Please load it and refresh.',
                    timeout: 2000
                }).show();
                return;
            } else {
                new Noty({
                    type: 'success',
                    layout: 'topRight',
                    text: 'Found a CAE-Frontend-Component metamodel.',
                    timeout: 2000
                }).show();
            }

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
                        type = 'span';

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

                        var cell = editor.graph.model.getCell(nodeId);
                        var staticAttr = ymap.get(nodeId+'[static]');
                        if(!staticAttr)
                            createTag('Dynamic', cell);
                        else
                            deleteTag('Dynamic', cell);
                        var sharedAttr = ymap.get(nodeId+'[collaborative]');
                        if(sharedAttr)
                            createTag('Shared', cell);
                        else
                            deleteTag('Shared', cell);

                        if (editor.graph.getDefaultParent().children.length > 1) {
                            y.share.action.set(CONST.ACTIONS.SHARED.APPLY_LAYOUT, { userId: y.db.userId, cellId: null });
                        }
                    }

                }
            }
            function createTag(tagAlias, cell){
                var Tag = TagRegistry.getClass(tagAlias);
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
            };
            function deleteTag(tagAlias, cell){
                var tagId;
                var types = [];
                for (var i = 0; cell.overlays && i < cell.overlays.length; i++) {
                    var overlay = cell.overlays[i];
                    if (overlay.constructor.Alias === tagAlias){
                        tagId = overlay.getId();
                        types.push(overlay.constructor.name);
                    }
                }
                y.share.action.set(CONST.ACTIONS.DELETE_TAG, {
                    userId: y.db.userId,
                    cellId: cell.getId(),
                    selected: [tagId],
                    types: types,
                    fromSyncMeta: true
                });
            }

            SyncMeta.onEdgeAdd(function (event) {

                mxLog.writeln('Edge was created in SyncMeta: ' + JSON.stringify(event));

                var cell = editor.graph.model.getCell(event.target);
                if (cell) return;
            });
            SyncMeta.onNodeDelete(function (event) {

              if(event === widgetNodeId) widgetNodeId = null;
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

            });
            SyncMeta.onNodeAttributeChange(function (value, entity, entityValueId) {

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

                        if (value)
                            createTag('Shared', cell);
                        else
                            deleteTag('Shared', cell);
                        break;
                    }
                    case 'static': {

                        if (!value)
                            createTag('Dynamic', cell);
                        else
                           deleteTag('Dynamic', cell);
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
                        if (event.value.xml.indexOf('SharedTag') != -1) {
                            SyncMeta.setAttributeValue(event.value.id, 'collaborative', true);

                            var cell = editor.graph.model.getCell(event.value.id);
                            var msg = cell ? cell.constructor.NAME : 'UI Element';
                            SyncMeta.createActivity('WireframeCreateTag', event.value.id,
                                '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong> Tagged ' + msg + ' as shared', event.value);
                        } else if (event.value.xml.indexOf('DynamicTag') != -1) {
                            SyncMeta.setAttributeValue(event.value.id, 'static', false);

                            var cell = editor.graph.model.getCell(event.value.id);
                            var msg = cell ? cell.constructor.NAME : 'UI Element';
                            SyncMeta.createActivity('WireframeCreateTag', event.value.id,
                                '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong> Tagged ' + msg + ' as dynamic', event.value);
                        }
                        break;
                    }
                    case CONST.ACTIONS.SHARED.GRAPH_RESIZE: {

                        if (event.value.fromSyncMeta) return;
                        if (event.value.userId !== y.db.userId) return;
                        SyncMeta.setAttributeValue(widgetNodeId, 'width', Util.formatNumber(event.value.width.toString()));
                        SyncMeta.setAttributeValue(widgetNodeId, 'height', Util.formatNumber(event.value.height.toString()));
                        break;
                    }
                    case CONST.ACTIONS.DELETE_TAG: {

                        if (event.value.fromSyncMeta) return;
                        for (var i = 0; i < event.value.types.length; i++) {
                            var type = event.value.types[i];
                            if (type === 'SharedTag') {
                                SyncMeta.setAttributeValue(event.value.cellId, 'collaborative', false);

                                var cell = editor.graph.model.getCell(event.value.cellId);
                                var msg = cell ? cell.constructor.NAME : 'UI Element';
                                SyncMeta.createActivity('WireframeDeleteTag', event.value.cellId,
                                    '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong> Removed shared tag from ' + msg, event.value);
                            }
                            else if (type === 'DynamicTag') {
                                SyncMeta.setAttributeValue(event.value.cellId, 'static', true);

                                var cell = editor.graph.model.getCell(event.value.cellId);
                                var msg = cell ? cell.constructor.NAME : 'UI Element';
                                SyncMeta.createActivity('WireframeDeleteTag', event.value.cellId,
                                    '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong> Removed dynamic tag from ' + msg, event.value);
                            }
                        }
                        break;
                    }
                    case mxEvent.GROUP_CELLS: {

                        if (event.value.fromSyncMeta) return;
                        if (event.value.userId !== y.db.userId) return;
                        if (y.share.nodes.get(event.value.groupId) != null) return;

                        SyncMeta.createNode('View Component', 4500, 4500, 100, 100, 1, true, null, event.value.groupId);
                        var msg = '';
                        setTimeout(function () {
                            SyncMeta.setAttributeValue(event.value.groupId, 'type', 'div');
                            SyncMeta.setAttributeValue(event.value.groupId, 'static', true);
                            SyncMeta.setAttributeValue(event.value.groupId, 'id', 'div_' + Util.GUID().substr(0, 5));

                            SyncMeta.createEdge('Widget to View Component', widgetNodeId, event.value.groupId);
                            for (var i = 0; i < event.value.ids.length; i++) {
                              //change to View Component to HTML
                                var edgeId = SyncMeta.createEdge('View Component to HTML', event.value.groupId, event.value.ids[i]);
                                hasChildMap[event.value.ids[i]] = edgeId;

                                var cell = editor.graph.model.getCell(event.value.ids[i]);
                                msg += cell ? cell.constructor.NAME + ', ' : 'UI element, ';
                            }
                            msg = msg.substr(0, msg.lastIndexOf(', '));
                            SyncMeta.createActivity('WireframeGroupEvent', null,
                                '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong> Created a group with ' + msg, event.value);
                            setTimeout(function () {
                                SyncMeta.applyLayout();
                            }, 1000);
                        }, 1000);
                        break;
                    }
                    case mxEvent.UNGROUP_CELLS: {

                        if (event.value.fromSyncMeta) return;
                        if (event.value.userId !== y.db.userId) return;
                        for (var i = 0; i < event.value.ids.length; i++) {
                            var cellId = event.value.ids[i];
                            SyncMeta.deleteNode(cellId);
                        }
                        SyncMeta.createActivity('WireframeUngroupEvent', null,
                            '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong> Ungrouped UI elements! ', event.value);
                        setTimeout(function () {
                            SyncMeta.applyLayout();
                        }, 1000);
                        break;
                    }
                    case mxEvent.ADD_VERTEX: {

                        if (event.value.fromSyncMeta) return;
                        if (event.value.userId !== y.db.userId) return;

                        if (!widgetNodeId) {
                            widgetNodeId = SyncMeta.createNode('Widget', 4500, 4500, 600, 600, 1, true);
                            setTimeout(function () {
                                var meta = editor.graph.model.getMeta();
                                SyncMeta.setAttributeValue(widgetNodeId, 'width', Util.formatNumber(meta.getAttribute('width')));
                                SyncMeta.setAttributeValue(widgetNodeId, 'height', Util.formatNumber(meta.getAttribute('height')));
                                setTimeout(function () {
                                    SyncMeta.applyLayout();
                                }, 1000);
                            }, 1000);
                            // editor.graph.model.setAttribute('id', widgetNodeId);
                        }

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
                            // if type create view component return
                            // is syncmeta call always create timeout?

                            if (cell.constructor.HTML_NODE_NAME === 'div') {
                              SyncMeta.createNode('View Component', 4550, 4600, 300, 200, 1, true, null, cell.id);
                              setTimeout(function () {
                                  var type = cell.constructor.HTML_NODE_NAME || cell.value.getAttribute('uiType');
                                  SyncMeta.setAttributeValue(cell.id, 'type', type);
                                  SyncMeta.setAttributeValue(cell.id, 'static', true);
                                  SyncMeta.setAttributeValue(cell.id, 'id', type + '_' + Util.GUID().substr(0, 5));
                                  SyncMeta.createEdge('Widget to View Component', widgetNodeId, cell.id);

                                  setTimeout(function () {
                                      SyncMeta.applyLayout();
                                      SyncMeta.createActivity('WireframeCreateEvent', cell.id, '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong>\nCreated a new ' + cell.constructor.NAME, event.value);
                                  }, 1000);
                              }, 1000);
                            } else {
                              var parent = editor.graph.model.getCell(event.value.parent);
                              var offsetX = 4550 + cell.geometry.x;
                              var offsetY = 4600 + cell.geometry.y + 60;

                              SyncMeta.createNode('View Component Part', offsetX, offsetY, 200, 50, 1, false, null, cell.id);
                              setTimeout(function () {
                                  var type = cell.constructor.HTML_NODE_NAME || cell.value.getAttribute('uiType');
                                  SyncMeta.setAttributeValue(cell.id, 'type', type);
                                  SyncMeta.setAttributeValue(cell.id, 'static', true);
                                  SyncMeta.setAttributeValue(cell.id, 'id', type + '_' + Util.GUID().substr(0, 5));

                                  setTimeout(function () {
                                      var parent = editor.graph.model.getCell(event.value.parent);
                                      if (parent && parent.id != '1') {
                                          var edgeId = SyncMeta.createEdge('View Component to HTML', parent.id, cell.id);
                                          hasChildMap[cell.id] = edgeId;
                                      }
                                      SyncMeta.applyLayout();
                                      SyncMeta.createActivity('WireframeCreateEvent', cell.id, '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong>\nCreated a new ' + cell.constructor.NAME, event.value);
                                  }, 1000);
                              }, 1000);
                            }
                        }

                        break;
                    }
                    case mxEvent.MOVE: {

                        if (event.value.userId !== y.db.userId) return;
                        var msg = '';
                        for (var i = 0; i < event.value.ids.length; i++) {
                            var id = event.value.ids[i];
                            if (hasChildMap.hasOwnProperty(id)) {
                                SyncMeta.deleteEdge(hasChildMap[id]);
                                delete hasChildMap[id];
                            }
                            if (event.value.parentId != '1') {
                                var edgeId = SyncMeta.createEdge('View Component to HTML', event.value.parentId, id);
                                hasChildMap[id] = edgeId;
                            }
                            var cell = editor.graph.model.getCell(id);
                            msg += cell ? cell.constructor.NAME + ', ' : 'UI element, ';

                        }
                        msg = msg.substr(0, msg.lastIndexOf(', '));
                        SyncMeta.createActivity('WireframeMoveEvent', null,
                            '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong> Moved ' + msg, event.value);
                        setTimeout(function () {
                            SyncMeta.applyLayout();

                        }, 1000);
                        break;
                    } case mxEvent.RESIZE: {

                        if (event.value.userId !== y.db.userId) return;

                        var msg = '';
                        for (var i = 0; i < event.value.ids.length; i++) {
                            var id = event.value.ids[i];
                            var cell = editor.graph.model.getCell(id);
                            var width = event.value.bounds[i].width + 100;
                            var height = event.value.bounds[i].height + 100;

                            SyncMeta.resizeNode(id, width, height);
                            msg += cell ? cell.constructor.NAME + ', ' : 'UI element, ';
                        }
                        msg = msg.substr(0, msg.lastIndexOf(', '));
                        SyncMeta.createActivity('WireframeResizeEvent', null,
                            '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong> Resized ' + msg, event.value);
                        break;
                    }
                    case mxEvent.REMOVE: {

                        if (event.value.fromSyncMeta) return;
                        if (event.value.userId !== y.db.userId) return;
                        var children = event.value.children;

                        function recursiveDelete(parent) {

                            if (children.hasOwnProperty(parent)) {

                                for (var i = 0; i < children[parent].length; i++) {
                                    SyncMeta.deleteNode(children[parent][i]);
                                    delete hasChildMap[children[parent][i]];
                                    if (children.hasOwnProperty(children[parent][i])){
                                        recursiveDelete(children[parent][i]);
                                      }
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
                            //Create activity for the syncmeta activity widget
                            var txt = event.value.cells.length > 1 ? " Removed multiple UI elements" : " Removed a UI element";
                            SyncMeta.createActivity('WireframeDeleteEvent', null,
                                '<strong style="background: black; color: white;">CAE-WIREFRAME:</strong>' + txt, event.value);
                        }, 1000);
                        break;
                    }
                }
            });


            /**
             * hihglight the selected ui control element in SyncMeta
             */
            y.share.awareness.observe(function (event) {
                if (event.name === y.db.userId) {
                    var userInfo = y.share.yfUsers.get(y.db.userId);
                    if (userInfo) {
                        SyncMeta.highlight(event.value.highlight, 'yellow', 'Selected in CAE-Wireframe', userInfo.id);
                        SyncMeta.unhighlight(event.value.unhighlight, userInfo.id);
                    }
                }
            });

            /**
             * y.share.select-map from SyncMeta

             */
            y.share.select.observe(function (event) {
                var userInfo = y.share.yfUsers.get(y.db.userId);
                if (userInfo && event.name === userInfo.id) {
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
                }
            });
        },
        /**
         * Get a shared widget attribute with the given name
         * @param {String} name the name of the attribute
         * @return {YText} the shared y-text object
         * @memberof module:CAE-Mapper.CAELiveMapper
         */
        getSharedWidgetAttr: function (name) {
            return widgetAttr.hasOwnProperty(name) ? widgetAttr[name] : undefined;
        }
    }
}
export default new CAELiveMapper();
