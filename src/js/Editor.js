/*global y, vls*/
import {
    mxEditor,
    mxConstants,
    mxCellRenderer,
    mxGraph
} from './misc/mxExport.js';
import KeyHandler from './KeyHandler.js';
import ContextMenu from './ContextMenu.js';
import Y from './../../node_modules/yjs/dist/y.js';

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
import YouTubeShape from './shapes/YouTubeShape.js';

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
import YouTube from './elements/YouTube.js';

Editor.prototype = new mxEditor();
Editor.prototype.constructor = Editor;

/**
 * @classdesc The main editor class of the wireframing editor 
 * @constructor
 * @param {Wireframe} wireframe the wireframe of the editor 
 * @param {Palette} palette the palette
 * @param {Object} config the configuration file
 * @extends mxEditor 
 */
function Editor(wireframe, palette, config) {
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
    mxCellRenderer.prototype.defaultShapes["youtube"] = YouTubeShape;

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
            else if (event.value instanceof Y.Text.typeDefinition.class) {
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
                else if (event.value instanceof Y.Text.typeDefinition.class) {
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
     * @param {*} state the state
     * @return {String} the label
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

     /**
     * A map that maps the HTML tag name to the name of the of the class 
     * representing the html element in the wireframing editor.
     * @member {Object}
     */
    var htmlNodeMap = {};
    htmlNodeMap[DivContainer.HTML_NODE_NAME] = DivContainer.NAME;
    htmlNodeMap[Paragraph.HTML_NODE_NAME] = Paragraph.NAME;
    htmlNodeMap[Button.HTML_NODE_NAME] = Button.NAME;
    htmlNodeMap[TextArea.HTML_NODE_NAME] = TextArea.NAME;
    htmlNodeMap[Link.HTML_NODE_NAME] = Link.NAME;
    htmlNodeMap[TextBox.HTML_NODE_NAME] = TextBox.NAME;
    htmlNodeMap[Image.HTML_NODE_NAME] = Image.NAME;
    htmlNodeMap[AudioPlayer.HTML_NODE_NAME] = AudioPlayer.NAME;
    htmlNodeMap[VideoPlayer.HTML_NODE_NAME] = VideoPlayer.NAME;
    htmlNodeMap[TextNode.HTML_NODE_NAME] = TextNode.NAME;
    htmlNodeMap[RadioBtn.HTML_NODE_NAME] = RadioBtn.NAME;
    htmlNodeMap[CheckBox.HTML_NODE_NAME] = CheckBox.NAME;
    htmlNodeMap[YouTube.HTML_NODE_NAME] = YouTube.NAME;

     /**
     * Maps the HTML elements types defined in the VLS to their corresponding ui control element in the wireframing editor.
     * First tries to look up the element in the htmlNodeMap and in the map-object of the config.json.
     * If no match is found, use the default UIControl implementation.
     * @member {Object}
     */
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

    /**
     * A simple map the get the constructor function for the NAME of a ui element class.
     * @member {Object}
     */
    var yfUIComponents = {};
    yfUIComponents[UIControl.NAME] = UIControl;
    yfUIComponents[DivContainer.NAME] = DivContainer;
    yfUIComponents[Button.NAME] = Button;
    yfUIComponents[TextArea.NAME] = TextArea;
    yfUIComponents[Paragraph.NAME] = Paragraph;
    yfUIComponents[TextBox.NAME] = TextBox;
    yfUIComponents[Link.NAME] = Link;
    yfUIComponents[TextNode.NAME] = TextNode;
    yfUIComponents[Image.NAME] = Image;
    yfUIComponents[AudioPlayer.NAME] = AudioPlayer;
    yfUIComponents[VideoPlayer.NAME] = VideoPlayer;
    yfUIComponents[CheckBox.NAME] = CheckBox;
    yfUIComponents[RadioBtn.NAME] = RadioBtn;
    yfUIComponents[YouTube.NAME] = YouTube;

    /**
     * The map contains as key as the name of the UIObjects and as value the style as String
     * The shape has to be registered before to the mxCellRenderer-object of this class
     * @member {Object}
     */
    var yfShapeMapping = {};
    yfShapeMapping[Paragraph.NAME] = mxConstants.STYLE_SHAPE + '=paragraph;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;';
    yfShapeMapping[TextArea.NAME] = mxConstants.STYLE_SHAPE + '=textarea;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;';
    yfShapeMapping[TextNode.NAME] = mxConstants.STYLE_SHAPE + '=textnode;';
    yfShapeMapping[Button.NAME] = mxConstants.STYLE_SHAPE + '=button;';
    yfShapeMapping[Link.NAME] = mxConstants.STYLE_SHAPE + '=link;' + mxConstants.STYLE_FILLCOLOR + "=none;";
    yfShapeMapping[TextBox.NAME] = mxConstants.STYLE_SHAPE + '=textbox;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;';
    yfShapeMapping[CheckBox.NAME] = mxConstants.STYLE_SHAPE + '=checkbox;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;';
    yfShapeMapping[RadioBtn.NAME] = mxConstants.STYLE_SHAPE + '=radio;' + mxConstants.STYLE_FILLCOLOR + "=white;" + +mxConstants.STYLE_STROKECOLOR + '=black;';

    /**
     * Adds a UI component to the palette and makes it drag&drop-able to the wireframe canvas
     * @param {String} componentName the NAME of the UIControl-class
     * @return {undefined}
     */
    var addUIComponent = function (componentName) {
        var cell, type, shapeCell;
        var tmp = componentName;
        componentName = vlsComponents[componentName];
        if(componentName === UIControl.NAME)
            cell = new yfUIComponents[componentName](null, null, tmp);
        else
            cell = new yfUIComponents[componentName]();
        if (yfShapeMapping.hasOwnProperty(componentName))
            shapeCell = new UIControl(cell.geometry, yfShapeMapping[componentName]);
        else
            shapeCell = cell;
        type = palette.createItem(shapeCell, componentName === UIControl.NAME ? tmp : componentName, false);
        cell.makeTypeDraggable(type, wireframe);
    }
    /**
     * Get the name of the UI object class associated with the provided tag name
     * @param {String} name the name of the html tag
     * @return {String|undefined} the name for the html tag name in the yfUIComponents-map
     * @see yfUIComponents
     */
    this.getUIComponentFromHTMLName = function (name) {
        if (htmlNodeMap.hasOwnProperty(name)) {
            if (yfUIComponents.hasOwnProperty(htmlNodeMap[name])) {
                return yfUIComponents[htmlNodeMap[name]];
            }
        }
    }
    /**
     * Get the yfUIComponents-map
     * Used by the ContextMenu-module to realize creation of ui elements via context menu
     * @return {Object}  return the yfUIComponents-map
     * @see ContextMenu
     */
    this.getUIComponents = function () {
        return yfUIComponents;
    }

    /**
     * Currently this function is never used. REMOVE IT
     * @param {String} name the html tag name
     * @return {undefined|String} the name of the corresponding ui element
     */
    this.getUIComponentNameForTagName = function(name){
        return htmlNodeMap.hasOwnProperty(name) ? htmlNodeMap[name] : undefined;
    }
    for (var componentName in vlsComponents) {
        addUIComponent(componentName);
    }
    palette.addLine(); //conclude with a horizontal line at the end
    return this;
}
export default Editor;