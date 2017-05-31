import { mxDefaultToolbar, mxEvent, mxCodec, mxLog, mxClient, mxClipboard, mxUtils, mxRectangle } from './mxExport.js';
import $ from 'jquery';
import Util from './Util.js';

Toolbox.prototype = new mxDefaultToolbar();
Toolbox.prototype.constructor = Toolbox;

function Toolbox(container, editor) {
    mxDefaultToolbar.call(this, container, editor);

    this._editor = editor;
    var that = this;

    editor.addAction("shared_paste", function (editor, cell) {
        var encoder = new mxCodec();
        var result = encoder.encode(mxClipboard.getCells());
        var xml = mxUtils.getXml(result);
        y.share.action.set("paste", { userId: y.db.userId, xml: xml });
        //editor.execute("paste", cell);
    });

    editor.addAction('shared_delete', function (editor, cell) {
        y.share.action.set(mxEvent.REMOVE, Util.getIdsOfSelectedCells(that._editor.graph));
    });

    editor.addAction("toggleConsole", function (editor, cell) {
        if (mxLog.isVisible())
            mxLog.setVisible(false);
        else
            mxLog.setVisible(true);
    });

    editor.addAction("shared_undo", function (editor, cell) {
        y.share.action.set(mxEvent.UNDO, y.db.userId);
    });

    editor.addAction("shared_redo", function (editor, cell) {
        y.share.action.set(mxEvent.REDO, y.db.userId);
    });

    editor.addAction("shared_group", function (editor, cell) {

        y.share.action.set(mxEvent.GROUP_CELLS, { userId: y.db.userId, ids: Util.getIdsOfSelectedCells(that._editor.graph) });
    });

    editor.addAction("shared_ungroup", function (editor, cell) {
        y.share.action.set(mxEvent.UNGROUP_CELLS, { userId: y.db.userId, ids: Util.getIdsOfSelectedCells(that._editor.graph) });
    });

    y.share.action.observe(function (event) {
        switch (event.name) {
            case mxEvent.UNDO:
                //that._editor.execute("undo");
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.undo();
                    that._editor.graph.setSelectionCells(cells);
                }
                else
                    that._editor.undo();
                break;
            case mxEvent.REDO:
                //that._editor.execute("redo");
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.redo();
                    that._editor.graph.setSelectionCells(cells);
                }
                else
                    that._editor.redo();
                break;
            case mxEvent.REMOVE:
                that._editor.graph.setSelectionCells(Util.getCellsFromIdList(that._editor.graph, event.value));
                that._editor.execute("delete");
                break;
            case mxEvent.GROUP_CELLS:
                var group = that._editor.graph.groupCells(null, 20, Util.getCellsFromIdList(that._editor.graph, event.value.ids));
                if (y.db.userId === event.value.userId)
                    //that._editor.graph.setSelectionCells(group);
                    that._editor.graph.getSelectionModel().setCell(group)
                break;
            case mxEvent.UNGROUP_CELLS:
                var cells = that._editor.graph.ungroupCells(Util.getCellsFromIdList(that._editor.graph, event.value.ids));
                if (y.db.userId === event.value.userId)
                    that._editor.graph.setSelectionCells(cells);

                break;
            case "paste":
                var selectedCells = that._editor.graph.getSelectionCells();

                var doc = mxUtils.parseXml(event.value.xml);
                var elt = doc.documentElement.firstChild;
                var cells = [];
                while (elt != null) {
                    var codec = new mxCodec();
                    var cell = codec.decode(elt);
                    cells.push(cell);
                    elt = elt.nextSibling;
                }
                mxClipboard.setCells(cells);
                mxClipboard.paste(that._editor.graph);

                if (event.value.userId !== y.db.userId) {
                    that._editor.graph.setSelectionCells(selectedCells);
                }
                break;
            case "graphResize": //event triggerd in index.html
                if (y.db.userId !== event.value.userId) {
                    //var size = $('#wireframeWrap').css(["width", "height"]);
                    $('#wireframeWrap').css("width", "+=" + event.value.dWidth).css("height", "+=" + event.value.dHeight);
                    $('#wireframe').css("width", "+=" + event.value.dWidth).css("height", "+=" + event.value.dHeight);
                    $('#draggingBar').css("width", "+=" + event.value.dWidth).css("height", "+=" + event.value.dHeight);
                }
                var prevBounds = that._editor.graph.maximumGraphBounds;
                that._editor.graph.maximumGraphBounds = new mxRectangle(0, 0, prevBounds.width + event.value.dWidth, prevBounds.height + event.value.height);
                break;
        }
    });

    this.addSeparator = function (icon) {
        //The first two lines are from the addSeperator(icon) of mxDefaultToolbar
        icon = icon || mxClient.imageBasePath + '/separator.gif';
        var item = this.toolbar.addSeparator(icon);
        $(item).addClass("mxSeparator");
        return item;
    }

    this.addSeparator();
    this.addItem("Copy", "images/toolbox/copy.png", "copy");
    this.addItem("Paste", "images/toolbox/paste.png", "shared_paste");
    this.addSeparator();
    this.addItem("Delete", "images/toolbox/delete.png", "shared_delete");
    this.addSeparator();
    //this.addItem("Cut", "images/toolbox/cut.gif", "shared_cut");
    this.addItem("Undo", "images/toolbox/undo2.png", "shared_undo");
    this.addItem("Redo", "images/toolbox/redo2.png", "shared_redo");
    this.addSeparator();
    this.addItem("Group", "images/toolbox/group.png", "shared_group");
    this.addItem("Ungroup", "images/toolbox/ungroup.png", "shared_ungroup");
    this.addSeparator();
    this.addItem("Console", "images/toolbox/console.png", "toggleConsole");
    this.addSeparator();

    return this;
}
export default Toolbox;