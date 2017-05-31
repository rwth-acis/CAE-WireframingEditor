import {mxEditor, mxUtils, mxStencil, mxStencilRegistry, mxGeometry, mxConstants, mxCellRenderer} from './mxExport.js';
import UIControl from './UIControl.js';
import KeyHandler from './KeyHandler.js';
import ContextMenu from './ContextMenu.js';
import VideoPlayerShape from './shapes/VideoShape.js';
import DivContainerShape from './shapes/DivShape.js';

Editor.prototype = new mxEditor();
Editor.prototype.constructor = Editor;

function Editor(wireframe, palette) {
    mxEditor.call(this);
    this.graph = wireframe;
    this.installUndoHandler(wireframe);
    this.setGraphContainer(wireframe.container);
    this.setToolbarContainer(palette.container);
    this.keyHandler = new KeyHandler(this);
    //Editor.prototype.disableContextMenu = false;
    //this.popupHandler = new ContextMenu('contextmenu.xml');
     new ContextMenu(this);
    //Load stencils 
    var xml = mxUtils.load('html5stencils.xml');
    var root = xml.getDocumentElement();
    var shape = root.firstChild;

    while (shape != null) {
        if (shape.nodeType == mxConstants.NODETYPE_ELEMENT) {
            var stencil = new mxStencil(shape);
            var stencilName = shape.getAttribute('name');
            mxStencilRegistry.addStencil(shape.getAttribute('name'), stencil);
            var cell = new UIControl(stencilName , new mxGeometry(0, 0,shape.getAttribute('w') || 100, shape.getAttribute('h') || 100), "shape="+stencilName);
            var type = palette.createItem(cell, shape.getAttribute('name'));
            cell.makeTypeDraggable(type, wireframe);
        }
        shape = shape.nextSibling;
    }

    mxCellRenderer.prototype.defaultShapes[VideoPlayerShape.prototype.cst.SHAPE_VIDEO_PLAYER] = VideoPlayerShape;
    mxCellRenderer.prototype.defaultShapes[DivContainerShape.prototype.cst.SHAPE_GROUP] = DivContainerShape;

    var cell = new UIControl("" , new mxGeometry(0, 0, 200, 100), "shape=VideoPlayer;"+mxConstants.STYLE_FILLCOLOR+ "=none;" + mxConstants.STYLE_STROKECOLOR + '=grey;');
    var type = palette.createItem(cell, "Video Player");
    cell.makeTypeDraggable(type, wireframe);

    cell = new UIControl("" , new mxGeometry(0, 0, 200, 100), "shape=DivContainer;"+mxConstants.STYLE_FILLCOLOR+ "=none;"+ mxConstants.STYLE_POINTER_EVENTS+"=true;" + mxConstants.STYLE_STROKECOLOR + '=grey;');
    type = palette.createItem(cell, "Container");
    cell.makeTypeDraggable(type, wireframe);
    //horizontal line
    palette.addLine();
    //palette.addBreak();

    return this;
}
export default Editor;