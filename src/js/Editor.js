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
            mxStencilRegistry.addStencil(shape.getAttribute('name'), new mxStencil(shape));
            //add UI controls and types to palette dynamically
        }
        shape = shape.nextSibling;
    }

    var DivVertex = new UIControl("Div", new mxGeometry(0, 0, 100, 40), "shape=div");
    var vertex = new UIControl("Default", new mxGeometry(0, 0, 100, 40), 'shape=' + mxConstants.SHAPE_CLOUD);
    var vertexActor = new UIControl("Actor", new mxGeometry(0, 0, 100, 40), 'shape=' + mxConstants.SHAPE_ACTOR);
    //vertexActor.setStyle('shape='+ mxConstants.SHAPE_ACTOR);
    //vertex.setStyle('shape=' + mxConstants.SHAPE_CLOUD);
   
    var rectType = palette.addType("Rectangle", "images/rectangle.gif", vertex.funct);
    vertex.makeTypeDraggable(rectType, wireframe);

    var actorType = palette.addType("Actor", "images/actor.gif", vertexActor.funct);
    vertexActor.makeTypeDraggable(actorType, wireframe);

    var divType = palette.addType("Div", "images/rectangle.gif", DivVertex.funct);
    DivVertex.makeTypeDraggable(divType, wireframe);

    //horizontal line
    palette.addLine();
    //palette.addBreak();

    return this;
}
export default Editor;