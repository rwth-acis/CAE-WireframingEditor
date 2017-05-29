import UIControl from './UIControl.js';
window.UIControl = UIControl;
import {mxGraph, mxEvent, mxGraphHandler, mxConstants, mxCodec, mxCodecRegistry,
     mxKeyHandler, mxRubberband, mxUtils, mxRectangle, mxGeometry} from './mxExport.js';
import Util from './Util.js';
window.mxGeometry = mxGeometry;
Wireframe.prototype = new mxGraph();
Wireframe.prototype.constructor = Wireframe;
function Wireframe(container, model) {
    var that = this;
    mxGraph.call(this, container);

    var handler = new mxGraphHandler(that)

    that.foldingEnabled = false;
    that.autoExtend = false;
    that.maximumGraphBounds = new mxRectangle(0,0,500,500);
    //enable guiding lines
    mxGraphHandler.prototype.guidesEnabled = true;
    mxGraphHandler.prototype.highlightEnabled = true;

    //register Codec for UIControl

    var deltas = [];
    handler.mouseDown = function (wf, evt) {
        var cells = wf.getSelectionCells();
        for (var i = 0; i < cells.length; i++) {
            deltas.push({
                prevX: cells[i].geometry.x,
                prevY: cells[i].geometry.y,
                prevHeight: cells[i].geometry.height,
                prevWidth: cells[i].geometry.width
            });
        }
    };
    handler.mouseUp = function (wf, evt) {
        var cells = wf.getSelectionCells();
        if (cells.length > 0 && deltas.length > 0) {
            var dx = cells[0].geometry.x - deltas[0].prevX;
            var dy = cells[0].geometry.y - deltas[0].prevY;
            //Check if its is a dragging operation
            if (dx !== 0 || dy !== 0)
                y.share.map.set(mxEvent.MOVE, {
                    userId: y.db.userId,
                    dx: dx,
                    dy: dy,
                    ids: Util.getIdsOfSelectedCells(that)
                });
            else {
                var dHeight, dWidth;
                for (var i = 0; i < cells.length; i++) {
                    dWidth = cells[i].geometry.width - deltas[i].prevWidth;
                    dHeight = cells[i].geometry.height - deltas[i].prevHeight;
                    if (dWidth !== 0 || dHeight !== 0) {
                        y.share.map.set(mxEvent.RESIZE, {
                            userId: y.db.userId,
                            id: cells[i].getId(),
                            x: cells[i].geometry.x,
                            y: cells[i].geometry.y,
                            height: cells[i].geometry.height,
                            width: cells[i].geometry.width
                        });
                        break;
                    }
                  
                }
            }
        }
        deltas = [];
    };


    this.dropEnabled = true;

    //For the DynamicGrid
    //this.graphHandler.scaleGrid = true; 
    //this.setPanning(true);

    new mxKeyHandler(this);
    new mxRubberband(this);

    /*
    rubberBand.mouseDown = function(wf, evt){
        mxLog.debug("mxRubberBand MouseDown Event");
        mxRubberband.prototype.mouseDown.call(this, wf, evt);
    };
    rubberBand.mouseUp = function(wf, evt){
        mxLog.debug("mxRubberBand Mouseup Event");
        mxRubberband.prototype.mouseUp.call(this, wf, evt);
    };
    */

    that.createGroupCell = function (cells) {
        var group = mxGraph.prototype.createGroupCell.apply(this, arguments);
        group.setStyle('fillColor=none;' + mxConstants.STYLE_STROKECOLOR + '=black');
        return group;
    };

    y.share.map.observe(function (event) {
        switch (event.name) {
            case mxEvent.ADD_VERTEX: {
                var doc = mxUtils.parseXml(event.value);
                var codec = new mxCodec(doc);
                var elt = doc.documentElement;
                var cells = [];
                while (elt != null) {
                    var cell = codec.decode(elt);
                    cells.push(cell);
                    elt = elt.nextSibling;
                }
                that.addCells(cells);
                break;
            }
            case mxEvent.MOVE: {
                if (event.value.userId !== y.db.userId) {
                    var cells = Util.getCellsFromIdList(that, event.value.ids);
                    if (cells.length > 0) {
                        if (event.value.dx != 0 || event.value.dy != 0)
                            handler.moveCells(cells, event.value.dx, event.value.dy);
                    }
                }
                break;
            }
            case mxEvent.RESIZE: {
                if (event.value.userId !== y.db.userId) {
                    var cell = that.getModel().getCell(event.value.id);
                    if (cell)
                        that.resizeCell(cell, new mxRectangle(event.value.x, event.value.y, event.value.width, event.value.height));
                }
                break;
            }
        }
    });
    return this;
}
export default Wireframe;