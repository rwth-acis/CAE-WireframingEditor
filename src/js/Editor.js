import {mxEditor, mxUtils, mxStencil, mxStencilRegistry, mxGeometry, mxConstants, mxCellRenderer} from './misc/mxExport.js';
import UIControl from './elements/UIControl.js';
import KeyHandler from './KeyHandler.js';
import ContextMenu from './ContextMenu.js';

import VideoPlayerShape from './shapes/VideoShape.js';
import DivContainerShape from './shapes/DivShape.js';
import LinkShape from './shapes/LinkShape.js';
import TextBoxShape from './shapes/TextBoxShape.js';

import Link from './elements/Link.js';
import TextBox from './elements/TextBox.js';
import Paragraph from './elements/Paragraph.js';
import TextArea from './elements/TextArea.js';

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
            var type = palette.createItem(cell, shape.getAttribute('name'), false);
            cell.makeTypeDraggable(type, wireframe);
        }
        shape = shape.nextSibling;
    }

    mxCellRenderer.prototype.defaultShapes[VideoPlayerShape.prototype.cst.SHAPE] = VideoPlayerShape;
    mxCellRenderer.prototype.defaultShapes[DivContainerShape.prototype.cst.SHAPE] = DivContainerShape;
    mxCellRenderer.prototype.defaultShapes[LinkShape.prototype.cst.SHAPE] = LinkShape;
    mxCellRenderer.prototype.defaultShapes[TextBoxShape.prototype.cst.SHAPE] = TextBoxShape;


    var cell = new UIControl("" , new mxGeometry(0, 0, 200, 100), "shape=VideoPlayer;"+mxConstants.STYLE_FILLCOLOR+ "=none;" + mxConstants.STYLE_STROKECOLOR + '=grey;');
    var type = palette.createItem(cell, "Video Player");
    cell.makeTypeDraggable(type, wireframe);

    cell = new UIControl("" , new mxGeometry(0, 0, 200, 100), "shape=DivContainer;"+mxConstants.STYLE_FILLCOLOR+ "=none;"+ mxConstants.STYLE_POINTER_EVENTS+"=true;" + mxConstants.STYLE_STROKECOLOR + '=grey;');
    type = palette.createItem(cell, "Container");
    cell.makeTypeDraggable(type, wireframe);

    //cell = new UIControl("" , new mxGeometry(0, 0, 50, 20), "shape=link;"+ mxConstants.STYLE_EDITABLE + "=0;" + mxConstants.STYLE_RESIZABLE+ "=0");
    cell = new Link(new mxGeometry(0,0,100,70));
    type = palette.createItem(cell, "Link", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new TextBox(new mxGeometry(0, 0, 120, 30));
    type = palette.createItem(cell, "TextBox", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new Paragraph(new mxGeometry(0, 0, 320, 80));
    type = palette.createItem(cell, "Paragraph", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new TextArea(new mxGeometry(0, 0, 320, 80));
    type = palette.createItem(cell, "TextArea", true);
    cell.makeTypeDraggable(type, wireframe);

    //horizontal line
    palette.addLine();
    //palette.addBreak();

    return this;
}
export default Editor;