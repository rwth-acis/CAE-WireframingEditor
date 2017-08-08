/*global y, vls*/
import {
    mxEditor,
    mxConstants,
    mxCellRenderer,
    mxGraph
} from './misc/mxExport.js';
import KeyHandler from './KeyHandler.js';
import ContextMenu from './ContextMenu.js';

import DefaultShape from './shapes/DefaultShape.js';
import VideoPlayerShape from './shapes/VideoShape.js';
import AudioPlayerShape from './shapes/AudioShape.js';
import ButtonShape from './shapes/ButtonShape.js';
import TextNodeShape from './shapes/TextNodeShape.js';
import LinkShape from './shapes/LinkShape.js';
import ParagraphShape from './shapes/ParagraphShape.js';
import TextAreaShape from './shapes/TextAreaShape.js';
import TextBoxShape from './shapes/TextBoxShape.js';
import CheckboxShape from './shapes/CheckboxShape.js';
import RadioButtonShape from './shapes/RadioButtonShape.js';
import ImageShape from './shapes/ImageShape.js';

import UIControl from './elements/UIControl.js';
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

import config from '../data/config.json';

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
    new ContextMenu(this);

    mxCellRenderer.prototype.defaultShapes[VideoPlayerShape.prototype.cst.SHAPE] = VideoPlayerShape;
    mxCellRenderer.prototype.defaultShapes[AudioPlayerShape.prototype.cst.SHAPE] = AudioPlayerShape;
    mxCellRenderer.prototype.defaultShapes["button"] = ButtonShape;
    mxCellRenderer.prototype.defaultShapes["link"] = LinkShape;
    mxCellRenderer.prototype.defaultShapes["textbox"] = TextBoxShape;
    mxCellRenderer.prototype.defaultShapes["paragraph"] = ParagraphShape;
    mxCellRenderer.prototype.defaultShapes["textarea"] = TextAreaShape;
    mxCellRenderer.prototype.defaultShapes["checkbox"] = CheckboxShape;
    mxCellRenderer.prototype.defaultShapes["radio"] = RadioButtonShape;
    mxCellRenderer.prototype.defaultShapes["image"] = ImageShape;
    mxCellRenderer.prototype.defaultShapes["textnode"] = TextNodeShape;
    mxCellRenderer.prototype.defaultShapes["default"] = DefaultShape;

    //TODO rework the callback for Wireframe model attributes
    y.share.attrs.observe(function (event) {
        var name;
        var arr = event.name.split('_');
        var id = arr[0];
        var cell = that.graph.getModel().getCell(id);
        if (arr.length == 2) {
            if (event.name.indexOf('_label') != -1) {
                cell.bindLabel(event.value);
            } else if (typeof event.value === 'boolean') {
                name = event.name.substring(event.name.indexOf('_'));
                cell.setBooleanAttributeValue(name, event.value);
            }
            else if (typeof event.value === 'string') {
                name = event.name.substring(event.name.indexOf('_'));
                cell.setComboAttributeValue(name, event.value);
            }
            else if (event.value.constructor.name === 'YText') {
                event.value.observe(cell.getYTextObserver());
            }
        } else {
            var tag = cell.getTagById(arr[0] + '_' + arr[1]);
            if (tag) {
                if (typeof event.value === 'boolean') {
                    name = event.name.substring(event.name.lastIndexOf('_'));
                    tag.setBooleanAttributeValue(name, event.value);
                }
                else if (typeof event.value === 'string') {
                    name = event.name.substring(event.name.lastIndexOf('_'));
                    tag.setComboAttributeValue(name, event.value);
                }
                else if (event.value.constructor.name === 'YText') {
                    event.value.observe(tag.getYTextObserver());
                }
            }
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
     * Overrides createGroupCell from the superclass mxGraph for the Wireframe-class
     */
    /*eslint-disable no-unused-vars*/
    that.graph.createGroupCell = function (cells) {
        var group = new DivContainer();
        return group;
    };
    //-------------------------------------------------------------------
    var htmlNodeMap = {};
    htmlNodeMap[DivContainer.HTML_NODE_NAME] = DivContainer.NAME;
    htmlNodeMap[Paragraph.HTML_NODE_NAME] = Paragraph.NAME;
    htmlNodeMap[Button.HTML_NODE_NAME] = Button.NAME;
    htmlNodeMap[TextArea.HTML_NODE_NAME] = TextArea.NAME;
    htmlNodeMap[Link.HTML_NODE_NAME] = Link.NAME;
    htmlNodeMap[TextBox.HTML_NODE_NAME] = TextBox.NAME;

    var vlsComponents = {};
    for (var key in vls.nodes) {
        var node = vls.nodes[key];
        if (node.label === 'HTML Element') {
            for (var attrKey in node.attributes) {
                var attr = node.attributes[attrKey];
                if (attr.value === 'HTML Type') {
                    var elements = attr.options;
                    for (var e in elements) {
                        if (config.html.exclude.indexOf(e) === -1) {
                            if (config.html.map.hasOwnProperty(e))
                                vlsComponents[e] = config.html.map[e];
                            else if (htmlNodeMap.hasOwnProperty(e))
                                vlsComponents[e] = htmlNodeMap[e];
                            else
                                vlsComponents[e] = 'Default';
                        }
                    }
                }
            }
        }
    }

    var yfUIComponents = {
        "TextNode": TextNode,
        "Checkbox": CheckBox,
        "Radio Button": RadioBtn,
        "Image": Image,
        "Audio Player": AudioPlayer,
        "Video Player": VideoPlayer,
        "Default": UIControl
    };
    yfUIComponents[DivContainer.NAME] = DivContainer;
    yfUIComponents[Button.NAME] = Button;
    yfUIComponents[TextArea.NAME] = TextArea;
    yfUIComponents[Paragraph.NAME] = Paragraph;
    yfUIComponents[TextBox.NAME] = TextBox;
    yfUIComponents[Link.NAME] = Link;

    var yfShapeMapping = {
        "TextNode": mxConstants.STYLE_SHAPE + '=textnode;',
        "Button": mxConstants.STYLE_SHAPE + '=button;',
        "Link": mxConstants.STYLE_SHAPE + '=link;' + mxConstants.STYLE_FILLCOLOR + "=none;",
        "TextBox": mxConstants.STYLE_SHAPE + '=textbox;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;',
        "Checkbox": mxConstants.STYLE_SHAPE + '=checkbox;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;',
        "Radio Button": mxConstants.STYLE_SHAPE + '=radio;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;',
    };
    yfShapeMapping[Paragraph.NAME] = mxConstants.STYLE_SHAPE + '=paragraph;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;';
    yfShapeMapping[TextArea.NAME] = mxConstants.STYLE_SHAPE + '=textarea;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;';

    var addUIComponent = function (componentName) {
        var cell, type, shapeCell;
        var tmp = componentName;
        componentName = vlsComponents[componentName];
        cell = new yfUIComponents[componentName]();
        if (yfShapeMapping.hasOwnProperty(componentName))
            shapeCell = new UIControl(cell.geometry, yfShapeMapping[componentName]);
        else
            shapeCell = cell;
        type = palette.createItem(shapeCell, componentName === 'Default' ? tmp : componentName, false);
        cell.makeTypeDraggable(type, wireframe);
    }
    this.getUIComponentFromHTMLName = function (name) {
        if (htmlNodeMap.hasOwnProperty(name)) {
            if (yfUIComponents.hasOwnProperty(htmlNodeMap[name])) {
                return yfUIComponents[htmlNodeMap[name]];
            }
        }
    }
    this.getUIComponents = function () {
        return yfUIComponents;
    }
    for (var componentName in vlsComponents) {
        addUIComponent(componentName);
    }
    palette.addLine(); //conclude with a horizontal line at the end
    return this;
}
export default Editor;