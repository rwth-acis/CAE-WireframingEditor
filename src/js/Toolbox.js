/*global y*/
import {
    mxDefaultToolbar,
    mxEvent,
    mxCodec,
    mxClipboard,
    mxUtils,
    mxRectangle
} from './misc/mxExport.js';
import $ from 'jquery';
import Util from './misc/Util.js';
import CONST from './misc/Constants.js';

Toolbox.prototype = new mxDefaultToolbar();
Toolbox.prototype.constructor = Toolbox;

/**
 * The toolbox of the editor
 * @param {DOM} container 
 * @param {mxEditor} editor 
 */
function Toolbox(container, editor) {
    mxDefaultToolbar.call(this, container, editor);

    this._editor = editor;
    var that = this;

    /*eslint-disable no-unused-vars*/
    editor.addAction(CONST.ACTIONS.SHARED.PASTE, function (editor, cell) {
        var codec = new mxCodec();
        var result = codec.encode(mxClipboard.getCells());
        var xml = mxUtils.getXml(result);
        y.share.action.set(CONST.ACTIONS.SHARED.PASTE, {
            userId: y.db.userId,
            xml: xml
        });
    });

    editor.addAction(CONST.ACTIONS.SHARED.DELETE, function (editor, cell) {
        y.share.action.set(mxEvent.REMOVE, {
            userId: y.db.userId,
            cells: Util.getIdsOfSelectedCells(that._editor.graph)
        });
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(CONST.ACTIONS.SHOW_USER_LIST, function (editor, cell) {
        var $window = $('#userList').parents('.mxWindow').parents('.mxWindow');
        if ($window.is(':visible'))
            $window.hide();
        else $window.show();
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(CONST.ACTIONS.SHARED.UNDO, function (editor, cell) {
        y.share.action.set(mxEvent.UNDO, y.db.userId);
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(CONST.ACTIONS.SHARED.REDO, function (editor, cell) {
        y.share.action.set(mxEvent.REDO, y.db.userId);
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(CONST.ACTIONS.SHARED.GROUP, function (editor, cell) {
        y.share.action.set(mxEvent.GROUP_CELLS, {
            userId: y.db.userId,
            ids: Util.getIdsOfSelectedCells(that._editor.graph)
        });
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(CONST.ACTIONS.SHARED.UNGROUP, function (editor, cell) {
        y.share.action.set(mxEvent.UNGROUP_CELLS, {
            userId: y.db.userId,
            ids: Util.getIdsOfSelectedCells(that._editor.graph)
        });
    });

    editor.addAction(CONST.ACTIONS.EXPORT, function () {
        var link = document.createElement('a');
        link.download = "wireframe.xml";
        link.href = 'data:,' + encodeURI(y.share.data.get('model'));
        link.click();
    });

    editor.addAction(CONST.ACTIONS.IMPORT, function () {
        var input = document.createElement('input');
        input.type = 'file';

        //$(input).change(function(){});
        //input.addEventListener('change', function(){});
        input.onchange = function () {
            var fileReader, files, file;
            fileReader = new FileReader();
            fileReader.onload = function (e) {
                var data = e.target.result;
                y.share.data.set('model', data);
                window.location.reload();
                //TODO improve import
            };
            files = this.files;
            if (!files || files.length === 0) return;
            file = files[0];
            fileReader.readAsText(file);
        };
        input.click();
    });

    editor.addAction(CONST.ACTIONS.SAVE, function () {
        Util.Save(editor.graph);
    })

    y.share.action.observe(function (event) {
        switch (event.name) {
            case mxEvent.UNDO:
                //that._editor.execute("undo");
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.undo();
                    that._editor.graph.setSelectionCells(cells);
                } else
                    that._editor.undo();
                Util.Save(that._editor.graph);
                break;
            case mxEvent.REDO:
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.redo();
                    that._editor.graph.setSelectionCells(cells);
                } else
                    that._editor.redo();
                Util.Save(that._editor.graph);
                break;
            case mxEvent.REMOVE:
                that._editor.graph.setSelectionCells(Util.getCellsFromIdList(that._editor.graph, event.value.cells));
                that._editor.execute("delete");
                if (y.db.userId === event.value.userId)
                    Util.Save(that._editor.graph);
                break;
            case mxEvent.GROUP_CELLS:
                var group = that._editor.graph.groupCells(null, 20, Util.getCellsFromIdList(that._editor.graph, event.value.ids));
                if (y.db.userId === event.value.userId) {
                    //that._editor.graph.setSelectionCells(group);
                    that._editor.graph.getSelectionModel().setCell(group);
                    group.createShared(true);
                }
                break;
            case mxEvent.UNGROUP_CELLS:
                var cells = that._editor.graph.ungroupCells(Util.getCellsFromIdList(that._editor.graph, event.value.ids));
                if (y.db.userId === event.value.userId)
                    that._editor.graph.setSelectionCells(cells);

                break;
            case CONST.ACTIONS.SHARED.PASTE:
                var selectedCells = that._editor.graph.getSelectionCells();

                var doc = mxUtils.parseXml(event.value.xml);
                var elt = doc.documentElement.firstChild.childNodes[1];
                var cells = [];
                while (elt != null) {
                    var codec = new mxCodec();
                    var cell = codec.decode(elt);
                    cells.push(cell);
                    elt = elt.nextSibling;
                }
                mxClipboard.setCells(cells);
                var pastedCells = mxClipboard.paste(that._editor.graph);

                if (event.value.userId !== y.db.userId) {
                    that._editor.graph.setSelectionCells(selectedCells);
                } else {
                    for (var i = 0; i < pastedCells.length; i++)
                        if (pastedCells[i].hasOwnProperty('createShared'))
                            pastedCells[i].createShared(true);
                }
                break;
            case CONST.ACTIONS.SHARED.GRAPH_RESIZE: //event triggerd in index.html
                if (y.db.userId !== event.value.userId) {
                    //var size = $('#wireframeWrap').css(["width", "height"]);
                    $('#wireframeWrap').css("width", "+=" + event.value.dWidth).css("height", "+=" + event.value.dHeight);
                    $('#wireframe').css("width", "+=" + event.value.dWidth).css("height", "+=" + event.value.dHeight);
                    $('#draggingBar').css("width", "+=" + event.value.dWidth).css("height", "+=" + event.value.dHeight);
                }
                var prevBounds = that._editor.graph.maximumGraphBounds;
                that._editor.graph.maximumGraphBounds = new mxRectangle(0, 0, prevBounds.width + event.value.dWidth, prevBounds.height + event.value.dHeight);
                break;
        }
    });

    this.addSeparator = function (icon) {
        //The first two lines are from the addSeperator(icon) of mxDefaultToolbar
        icon = icon || CONST.IMAGES.SEPERATOR;
        var item = this.toolbar.addSeparator(icon);
        $(item).addClass("mxSeparator");
        return item;
    }

    //this.addSeparator();
    var item = this.addItem('Save', CONST.IMAGES.SAVE, CONST.ACTIONS.SAVE);
    $(item).addClass('wfSave');
    //this.addSeparator();
    this.addItem("Copy", CONST.IMAGES.COPY, CONST.ACTIONS.COPY);
    this.addItem("Paste", CONST.IMAGES.PASTE, CONST.ACTIONS.SHARED.PASTE);
    //  this.addSeparator();
    this.addItem("Delete", CONST.IMAGES.DELETE, CONST.ACTIONS.SHARED.DELETE);
    //this.addSeparator();
    //this.addItem("Cut", "images/toolbox/cut.gif", "shared_cut");
    this.addItem("Undo", CONST.IMAGES.UNDO, CONST.ACTIONS.SHARED.UNDO);
    this.addItem("Redo", CONST.IMAGES.REDO, CONST.ACTIONS.SHARED.REDO);
    //this.addSeparator();
    this.addItem("Group", CONST.IMAGES.GROUP, CONST.ACTIONS.SHARED.GROUP);
    this.addItem("Ungroup", CONST.IMAGES.UNGROUP, CONST.ACTIONS.SHARED.UNGROUP);
    //this.addSeparator();
    this.addItem("Import", CONST.IMAGES.IMPORT, CONST.ACTIONS.IMPORT);
    this.addItem("Export", CONST.IMAGES.EXPORT, CONST.ACTIONS.EXPORT);
    //this.addSeparator();
    this.addItem("User List", CONST.IMAGES.USER_LIST, CONST.ACTIONS.SHOW_USER_LIST);
    //this.addSeparator();

    return this;
}
export default Toolbox;