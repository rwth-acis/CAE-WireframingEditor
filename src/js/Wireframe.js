import UIControl from './UIControl.js';
window.UIControl = UIControl;
import {
    mxGraph, mxEvent, mxGraphHandler, mxConstants, mxCodec, mxCodecRegistry,
    mxKeyHandler, mxRubberband, mxUtils, mxRectangle, mxGeometry
} from './mxExport.js';
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
    that.maximumGraphBounds = new mxRectangle(0, 0, 500, 500);
    //enable guiding lines
    mxGraphHandler.prototype.guidesEnabled = true;
    mxGraphHandler.prototype.highlightEnabled = true;

    var sharedAction = null;
    var SharedCellsMovedEvent = function (wf, event) {
        var properties = event.getProperties();
        var cells = properties.cells;
        var ids = [];
        for (var i = 0; i < cells.length; i++) {
            ids.push(cells[0].id);
        }
        sharedAction = {
            userId: y.db.userId,
            dx: properties.dx,
            dy: properties.dy,
            ids: ids
        };
    };
    var SharedCellResizedEvent = function (graph, event) {
        //Proudly stolen from the docs
        var cells = event.getProperty('cells');
        var bounds = event.getProperty('bounds');
        if (cells != null) {
            for (var i = 0; i < cells.length; i++) {
                if (graph.getModel().getChildCount(cells[i]) > 0) {
                    var geo = graph.getCellGeometry(cells[i]);

                    if (geo != null) {
                        var children = graph.getChildCells(cells[i], true, true);
                        var bb = graph.getBoundingBoxFromGeometry(children, true);

                        geo = geo.clone();
                        geo.width = Math.max(geo.width, bb.width);
                        geo.height = Math.max(geo.height, bb.height);

                        graph.getModel().setGeometry(cells[i], geo);
                    }
                }
            }
            sharedAction = {
                userId : y.db.userId,
                ids : [],
                bounds: []
            };
            for (var i = 0; i < cells.length; i++) {
              sharedAction.ids.push(cells[i].id);
              sharedAction.bounds.push({x: bounds[i].x, y: bounds[i].y, width : bounds[i].width, height : bounds[i].height});  
            }
        }

    };
    that.addListener(mxEvent.CELLS_MOVED, SharedCellsMovedEvent);
    that.addListener(mxEvent.CELLS_RESIZED, SharedCellResizedEvent);
    /*that.addListener(mxEvent.CELLS_ADDED, function(wf, event){
        var test = true;
    });*/
    

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
        group.setStyle('shape=DivContainer;fillColor=none;' + mxConstants.STYLE_STROKECOLOR + '=black;'+mxConstants.STYLE_POINTER_EVENTS+"=true");
        return group;
    };
    that.moveCells = function (cells, dx, dy, clone, target, evt, mapping, shared) {
        var cells = mxGraph.prototype.moveCells.apply(this, arguments);
        if (cells.length > 0 && sharedAction && !shared) {
            sharedAction.parentId = cells[0].parent.id;
            y.share.map.set(mxEvent.MOVE, sharedAction);
            sharedAction = null;
        }
        return cells;
    }
    that.resizeCells = function (cells, bounds, recurse, shared) {
        var cells = mxGraph.prototype.resizeCells.apply(this, arguments);
        if (cells.length > 0 && sharedAction && !shared) {
            y.share.map.set(mxEvent.RESIZE, sharedAction);
            sharedAction = null;
        }
        return cells;
    };
    y.share.map.observe(function (event) {
        switch (event.name) {
            case mxEvent.ADD_VERTEX: {
                var doc = mxUtils.parseXml(event.value.data);
                var codec = new mxCodec(doc);
                var elt = doc.documentElement;
                var cells = [];
                while (elt != null) {
                    var cell = codec.decode(elt);
                    cell.setId(event.value.id);
                    cells.push(cell);
                    elt = elt.nextSibling;
                }
                that.addCells(cells);
                break;
            }
            case mxEvent.MOVE: {
                if (event.value.userId !== y.db.userId) {
                    that.removeListener(SharedCellsMovedEvent);
                    var cells = Util.getCellsFromIdList(that, event.value.ids);
                    if (cells.length > 0) {
                        if (event.value.dx != 0 || event.value.dy != 0)
                            that.moveCells(cells, event.value.dx, event.value.dy, false, that.getModel().getCell(event.value.parentId), null, null, true);
                    }
                    that.addListener(mxEvent.CELLS_MOVED, SharedCellsMovedEvent);
                }
                break;
            }
            case mxEvent.RESIZE: {
                if (event.value.userId !== y.db.userId) {
                    var cells = Util.getCellsFromIdList(that, event.value.ids);
                    var bounds = [];
                    for(var i=0;i<event.value.bounds.length;i++){
                        var bound = event.value.bounds[i];
                        bounds.push(new mxRectangle(bound.x, bound.y, bound.width, bound.height));
                    }
                    if(cells.length > 0)
                        that.resizeCells(cells, bounds, false, true);
                }
                break;
            }
        }
    });
    return this;
}
export default Wireframe;