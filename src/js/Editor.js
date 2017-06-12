/*global y*/
import $ from 'jquery';
import {
    mxEditor,
    mxUtils,
    mxStencil,
    mxStencilRegistry,
    mxGeometry,
    mxConstants,
    mxCellRenderer,
    mxGraph
} from './misc/mxExport.js';
import UIControl from './elements/UIControl.js';
import KeyHandler from './KeyHandler.js';
import ContextMenu from './ContextMenu.js';

import VideoPlayerShape from './shapes/VideoShape.js';
import AudioPlayerShape from './shapes/AudioShape.js';

import Link from './elements/Link.js';
import TextBox from './elements/TextBox.js';
import Paragraph from './elements/Paragraph.js';
import TextArea from './elements/TextArea.js';
import Button from './elements/Button.js';
import TextNode from './elements/TextNode.js';
import CheckBox from './elements/CheckBox.js';
import RadioBtn from './elements/RadioButton.js';
import Image from './elements/Image.js';
import VideoPlayer from './elements/VideoPlayer.js';
import AudioPlayer from './elements/AudioPlayer.js';
import DivContainer from './elements/DivContainer.js';

Editor.prototype = new mxEditor();
Editor.prototype.constructor = Editor;

function Editor(wireframe, palette) {
    var that = this;
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

    y.share.attrs.observe(function (event) {
        var name;
        var id = event.name.substring(0, event.name.indexOf('_'));
        var cell = that.graph.getModel().getCell(id);
        if(event.name.indexOf('_label') != -1){
            if (cell instanceof RadioBtn || cell instanceof CheckBox)
                event.value.bind(cell.get$node().find('input[type="input"]')[0]);
            else
                event.value.bind(cell.get$node()[0]);
        }else if(typeof event.value === 'boolean'){
            name = event.name.substring(event.name.indexOf('_')+1);
            cell.value.setAttribute(name, event.value);
            var $input = $('#propertyEditor_'+id + ' #attributesTab').find('td:contains(' + name + ') + td input');
            if ($input.length > 0 ) 
                $input[0].checked = event.value;
        }
        else if(typeof event.value === 'string'){
            name = event.name.substring(event.name.indexOf('_')+1);
            cell.value.setAttribute(name, event.value);
            var $select = $('#propertyEditor_'+id + ' #attributesTab').find('td:contains(' + name + ') + td select');
            if ($select.length > 0 ) 
                $select.find('option[value=' + event.value +']').prop('selected', true);
        }
    });

    //-------------------------------------------------------------------
    // Overrides functions from Wireframe which is derived from mxGraph 
    //-------------------------------------------------------------------
    /**
     * Overrides getLabel from mxGraph for the Wireframe-class
     */
    that.graph.getLabel = function (state) {
        var label = mxGraph.prototype.getLabel.apply(this, arguments);
        if (state instanceof DivContainer)
            return state.value.getAttribute('label');
        else return label;
    }
    /**
     * Overrices createGroupCell from the superclass mxGraph for the Wireframe-class
     */
    /*eslint-disable no-unused-vars*/
    that.graph.createGroupCell = function (cells) {
        var group = new DivContainer();
        return group;
    };
    //-------------------------------------------------------------------

    var yfUIComponents  = {
       "UI Component Container": DivContainer,
       "TextNode" : TextNode,
       "Button": Button, 
       "Link" : Link, 
       "TextBox" : TextBox, 
       "Paragraph of Text" : Paragraph, 
       "TextArea" : TextArea, 
       "Checkbox" : CheckBox,
       "Radio Button" : RadioBtn,
       "Image" : Image,
       "Audio Player" : AudioPlayer,
       "Video Player" : VideoPlayer
    };

    var yfShapeMapping = {
        "TextNode" : mxConstants.STYLE_SHAPE + '=textnode;',
        "Button" : mxConstants.STYLE_SHAPE + '=button;', 
        "Link": mxConstants.STYLE_SHAPE + '=link;' + mxConstants.STYLE_FILLCOLOR + "=none;",
        "TextBox" : mxConstants.STYLE_SHAPE + '=textbox;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;',
        "Paragraph of Text" : mxConstants.STYLE_SHAPE + '=paragraph;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;',
        "TextArea": mxConstants.STYLE_SHAPE + '=textarea;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;',
        "Checkbox" : mxConstants.STYLE_SHAPE + '=checkbox;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;',
        "Radio Button" : mxConstants.STYLE_SHAPE + '=radio;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;',

    };

    var addUIComponent = function(componentName){
        var cell, type, shapeCell;
        cell = new yfUIComponents[componentName]();
        if(yfShapeMapping.hasOwnProperty(componentName))
            shapeCell = new UIControl(cell.geometry, yfShapeMapping[componentName]);
        else 
            shapeCell = cell;
        type = palette.createItem(shapeCell, componentName, false);
        cell.makeTypeDraggable(type, wireframe);
    }
    
    this.getUIComponents = function(){
        return yfUIComponents;
    }
    for(var componentName in yfUIComponents){
        addUIComponent(componentName);
    }

    //horizontal line
    palette.addLine();
    //palette.addBreak();

    return this;
}
export default Editor;