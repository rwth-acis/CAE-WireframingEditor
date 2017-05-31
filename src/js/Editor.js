import {mxEditor, mxUtils, mxStencil, mxStencilRegistry, mxGeometry, mxConstants} from './mxExport.js';
import UIControl from './UIControl.js';
import KeyHandler from './KeyHandler.js';
import ContextMenu from './ContextMenu.js';

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
            var cell = new UIControl(stencilName , new mxGeometry(0, 0, 100, 40), "shape="+stencilName);
            var type = palette.createItem(cell);
            cell.makeTypeDraggable(type, wireframe);
        }
        shape = shape.nextSibling;
    }
    var cell = new UIControl("Text" , new mxGeometry(0, 0, 100, 40), "shape="+mxConstants.SHAPE_ACTOR);
    var type = palette.createItem(cell);
            cell.makeTypeDraggable(type, wireframe);
    //horizontal line
    palette.addLine();
    //palette.addBreak();

    return this;
}
export default Editor;