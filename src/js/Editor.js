import {
    mxEditor,
    mxUtils,
    mxStencil,
    mxStencilRegistry,
    mxGeometry,
    mxConstants,
    mxCellRenderer
} from './misc/mxExport.js';
import UIControl from './elements/UIControl.js';
import KeyHandler from './KeyHandler.js';
import ContextMenu from './ContextMenu.js';

import VideoPlayerShape from './shapes/VideoShape.js';
import AudioPlayerShape from './shapes/AudioShape.js';
import DivContainerShape from './shapes/DivShape.js';

import Link from './elements/Link.js';
import TextBox from './elements/TextBox.js';
import Paragraph from './elements/Paragraph.js';
import TextArea from './elements/TextArea.js';
import Button from './elements/Button.js';
import TextNode from './elements/TextNode.js';
import CheckBox from './elements/Checkbox.js';
import RadioBtn from './elements/RadioButton.js';
import Image from './elements/Image.js';
import VideoPlayer from './elements/VideoPlayer.js';
import AudioPlayer from './elements/AudioPlayer.js';

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
            //var stencilName = shape.getAttribute('name');
            mxStencilRegistry.addStencil(shape.getAttribute('name'), stencil);
        }
        shape = shape.nextSibling;
    }

    mxCellRenderer.prototype.defaultShapes[VideoPlayerShape.prototype.cst.SHAPE] = VideoPlayerShape;
    mxCellRenderer.prototype.defaultShapes[AudioPlayerShape.prototype.cst.SHAPE] = AudioPlayerShape;
    mxCellRenderer.prototype.defaultShapes[DivContainerShape.prototype.cst.SHAPE] = DivContainerShape;

    //Div container needs rework --> look at swimlanes
    var cell = new UIControl("", new mxGeometry(0, 0, 200, 100), mxConstants.STYLE_SHAPE + "=DivContainer;" + mxConstants.STYLE_FILLCOLOR + "=none;" + mxConstants.STYLE_POINTER_EVENTS + "=true;" + mxConstants.STYLE_STROKECOLOR + '=grey;');
    var type = palette.createItem(cell, "Container");
    cell.makeTypeDraggable(type, wireframe);

    cell = new TextNode(new mxGeometry(0, 0, 150, 50));
    var shapeCell = new UIControl(null, cell.geometry, mxConstants.STYLE_SHAPE + '=textnode;');
    type = palette.createItem(shapeCell, "TextNode", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new Button(new mxGeometry(0, 0, 100, 50));
    shapeCell = new UIControl(null, cell.geometry, mxConstants.STYLE_SHAPE + '=button;');
    type = palette.createItem(shapeCell, "Button", false);
    cell.makeTypeDraggable(type, wireframe);

    cell = new Link(new mxGeometry(0, 0, 50, 30));
    shapeCell = new UIControl(null, cell.geometry, mxConstants.STYLE_SHAPE + '=link;' + mxConstants.STYLE_FILLCOLOR + "=none;");
    type = palette.createItem(shapeCell, "Link", false);
    cell.makeTypeDraggable(type, wireframe);

    cell = new TextBox(new mxGeometry(0, 0, 120, 30));
    shapeCell = new UIControl(null, cell.geometry, mxConstants.STYLE_SHAPE + '=textbox;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "TextBox", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new Paragraph(new mxGeometry(0, 0, 320, 80));
    shapeCell = new UIControl(null, cell.geometry, mxConstants.STYLE_SHAPE + '=paragraph;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "Paragraph of Text", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new TextArea(new mxGeometry(0, 0, 320, 80));
    shapeCell = new UIControl(null, cell.geometry, mxConstants.STYLE_SHAPE + '=textarea;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "TextArea", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new CheckBox(new mxGeometry(0, 0, 150, 30));
    shapeCell = new UIControl(null, cell.geometry, mxConstants.STYLE_SHAPE + '=checkbox;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "Checkbox", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new RadioBtn(new mxGeometry(0, 0, 150, 30));
    shapeCell = new UIControl(null, cell.geometry, mxConstants.STYLE_SHAPE + '=radio;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "Radio Button", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new Image(new mxGeometry(0, 0, 128, 128));
    type = palette.createItem(cell, "Image", false);
    cell.makeTypeDraggable(type, wireframe);

    cell = new VideoPlayer(new mxGeometry(0, 0, 200, 100));
    type = palette.createItem(cell, "Video Player", false);
    cell.makeTypeDraggable(type, wireframe);

    cell = new AudioPlayer(new mxGeometry(0, 0, 200, 30));
    type = palette.createItem(cell, "Audio Player", false);
    cell.makeTypeDraggable(type, wireframe);

    //horizontal line
    palette.addLine();
    //palette.addBreak();

    return this;
}
export default Editor;