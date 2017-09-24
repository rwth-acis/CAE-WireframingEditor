webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mxClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return mxEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mxGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return mxGraphModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return mxCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mxCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return mxCodecRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mxEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return mxGraphHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return mxConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mxImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return mxKeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return mxRubberband; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mxUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return mxRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return mxToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return mxStencil; });
/* unused harmony export mxStencilRegistry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mxWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return mxShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return mxGeometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return mxDefaultKeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return mxForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return mxDefaultToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return mxLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return mxClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return mxCellRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return mxObjectCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mxCellOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mxPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return mxCellHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return mxPartitionLayout; });
/* unused harmony export mxGraphLayout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants_js__ = __webpack_require__(3);


var mxLib = __WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build_js___default()({
    mxImageBasePath: __WEBPACK_IMPORTED_MODULE_1__Constants_js__["a" /* default */].MXGRAPH.IMAGE_BASE_PATH,
    mxBasePath: ".",
    mxLoadStylesheets: false,
    mxLoadResources: false
});
/*var mxgraph = require("../node_modules/mxgraph/javascript/dist/build")({
      mxImageBasePath: "../node_modules/mxgraph/javascript/src/images",
      mxBasePath: "../node_modules/mxgraph/javascript/src"
    });*/

var mxClient = mxLib.mxClient;
var mxEditor = mxLib.mxEditor;
var mxGraph = mxLib.mxGraph;
var mxGraphModel = mxLib.mxGraphModel;
var mxCell = mxLib.mxCell;
window.mxCell = mxCell; //for the encoding and decoding

var mxCodec = mxLib.mxCodec;
var mxCodecRegistry = mxLib.mxCodecRegistry;
window.mxCodecRegistry = mxCodecRegistry;

var mxEvent = mxLib.mxEvent;
var mxGraphHandler = mxLib.mxGraphHandler;
var mxConstants = mxLib.mxConstants;
var mxKeyHandler = mxLib.mxKeyHandler;
var mxRubberband = mxLib.mxRubberband;
var mxUtils = mxLib.mxUtils;
var mxRectangle = mxLib.mxRectangle;
var mxToolbar = mxLib.mxToolbar;
var mxStencil = mxLib.mxStencil;
var mxStencilRegistry = mxLib.mxStencilRegistry;
var mxGeometry = mxLib.mxGeometry;
var mxDefaultKeyHandler = mxLib.mxDefaultKeyHandler;
var mxForm = mxLib.mxForm;
var mxDefaultToolbar = mxLib.mxDefaultToolbar;

var mxLog = mxLib.mxLog;
window.mxLog = mxLog;

var mxClipboard = mxLib.mxClipboard;
var mxWindow = mxLib.mxWindow;
var mxShape = mxLib.mxShape;
var mxCellRenderer = mxLib.mxCellRenderer;
var mxObjectCodec = mxLib.mxObjectCodec;
var mxCellOverlay = mxLib.mxCellOverlay;
var mxCellHighlight = mxLib.mxCellHighlight;
var mxImage = mxLib.mxImage;
var mxPoint = mxLib.mxPoint;

var codec = new mxObjectCodec(new mxImage());
mxCodecRegistry.register(codec);

var codec = new mxObjectCodec(new mxPoint());
mxCodecRegistry.register(codec);

var mxPartitionLayout = mxLib.mxPartitionLayout;
var mxGraphLayout = mxLib.mxGraphLayout;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var widgetMode = true;
var basePath = 'https://rwth-acis.github.io/CAE-WireframingEditor/role/';
var constants = {
    MXGRAPH: {
        IMAGE_BASE_PATH: "images"
    },
    ACTIONS: {
        SHARED: {
            DELETE: 'shared_delete',
            GROUP: 'shared_group',
            UNGROUP: 'shared_ungroup',
            UNDO: 'shared_undo',
            REDO: 'shared_redo',
            PASTE: 'shared_paste',
            GRAPH_RESIZE: 'graphResize',
            APPLY_LAYOUT: 'applyLayout'
        },
        COPY: 'copy',
        PASTE: 'paste',
        SHOW_USER_LIST: 'showUserList',
        SHOW_CONSOLE: 'showConsole',
        EXPORT: 'export',
        IMPORT: 'import',
        MOVE_TAG: 'moveTag',
        DELETE_TAG: 'deleteTag',
        RENAME_TAG: 'renameTag',
        SAVE: 'save',
        SYNC: 'sync',
        HIERACHY_TREE: 'hierachy'
    },
    IMAGES: {
        COPY: 'images/toolbox/copy.png',
        PASTE: 'images/toolbox/paste.png',
        DELETE: 'images/toolbox/delete.png',
        UNDO: 'images/toolbox/undo2.png',
        REDO: 'images/toolbox/redo2.png',
        GROUP: 'images/toolbox/group.png',
        UNGROUP: 'images/toolbox/ungroup.png',
        ADD: 'images/toolbox/add.png',
        FLASH: 'images/toolbox/flash.png',
        IMPORT: 'images/toolbox/import.png',
        EXPORT: 'images/toolbox/export.png',
        LAYOUT : 'images/toolbox/layout.png',
        YJS: 'images/tags/yjs.png',
        MICROSERVICECALL: 'images/tags/las2peer-logo-circle.png',
        EVENT_TAG: 'images/tags/event.png',
        FUNC_TAG: 'images/tags/func.png',
        IWC_REQ_TAG: 'images/tags/IWCRequest.png',
        IWC_RESP_TAG: 'images/tags/IWCResponse.png',
        DEFAULT_TAG: 'images/tags/default.png',
        DEFAULT_USER: 'images/user.png',
        SAVE: 'images/toolbox/save.png',
        USER_LIST: 'images/toolbox/list.png',
        SEPERATOR: 'images/toolbox/separator.gif',
        IMAGE_SHAPE: 'images/image.png',
        SYNC: 'images/toolbox/sync.png',
        SYNCMETA: 'images/syncmeta.png'
    },
    TAG: {
        SIZE: 20/*,
        ALIAS: {
            EVENT: 'Event',
            MICRO_CALL: 'Microservice Call',
            FUNC: 'Function',
            IWC_CALL: 'IWC Call',
            IWC_RESP: 'IWC Response',
            SHARED: 'Share'
        }*/
    }
};

//Specify which elements supports which interactivity tags
/*var T = constants.TAG.ALIAS;
constants.TAG.MAPPING = {
    Button: [T.EVENT, T.FUNC, T.MICRO_CALL, T.IWC_CALL, T.IWC_RESP],
    TextArea: [T.SHARED],
    TextBox: [T.SHARED],
    Paragraph: [T.SHARED],
    TextNode: [T.SHARED],
    Checkbox: [T.EVENT, T.FUNC, T.MICRO_CALL, T.IWC_CALL, T.IWC_RESP],
    RadioButton: [T.EVENT, T.FUNC, T.MICRO_CALL, T.IWC_CALL, T.IWC_RESP],
    Link: [T.EVENT, T.FUNC, T.MICRO_CALL, T.IWC_CALL, T.IWC_RESP],
    DivContainer: [T.EVENT, T.FUNC, T.MICRO_CALL, T.IWC_CALL, T.IWC_RESP],
    Image: [T.EVENT, T.FUNC, T.MICRO_CALL, T.IWC_CALL, T.IWC_RESP]
}*/
//add base path to urls if not null
if (widgetMode) {
    constants.MXGRAPH.IMAGE_BASE_PATH = basePath + constants.MXGRAPH.IMAGE_BASE_PATH;
    
    for (var key in constants.IMAGES) 
        constants.IMAGES[key] = basePath + constants.IMAGES[key];
}
/* harmony default export */ __webpack_exports__["a"] = (constants);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_noty__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_noty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_noty__);
/*global y*/




/**
 * @module Misc
 */

/**
 * Some utilty functions to initilaize the wireframe from XML or save the wireframe to XML
 * @classdesc A set of helper functions used by various modules and classes
 * @constructor
 */
function Util() { }

/**
 * Returns the Ids for cells currently selected in the graph
 * @param {Wireframe} graph the wireframe
 * @return{array} array of ids
 */
Util.getIdsOfSelectedCells = function (graph) {
    var cells = graph.getSelectionCells();
    var ids = [];
    for (var i = 0; i < cells.length; i++) {
        ids.push(cells[i].id);
    }
    return ids;
}

/**
 * Returns the cells for the given ids
 * @param {Wireframe} graph the wireframe
 * @param {array} ids the ids as string to look for 
 * @return {UIControl[]} an array of ui elements
 */
Util.getCellsFromIdList = function (graph, ids) {
    var cells = [];
    for (var i = 0; i < ids.length; i++) {
        cells.push(graph.getModel().getCell(ids[i]));
    }
    return cells;
}

/**
 * Generates a GUID string.
 * @returns {String} The generated GUID.
 * @example af8a84166e18a307bd9cf2c947bbb3aa
 * @author Slavik Meltser (slavik@meltser.info).
 * @link http://slavik.meltser.info/?p=142
 */
Util.GUID = function () {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? p.substr(0, 4) + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}

/**
 * Serializes the current wireframe to XML and stores it in y.share.data.wireframe
 * @param {Wireframe} graph the wireframe
 * @return  {undefined}
 */
Util.Save = function (graph) {
    var encoder = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["b" /* mxCodec */]();
    //encoder.encodeDefaults = true;
    var result = encoder.encode(graph.getModel());
    var meta = graph.getModel().getMeta();
    if(meta.hasChildNodes())
        meta.replaceChild(result, meta.getElementsByTagName('WireframeModel')[0]);
    else 
        meta.appendChild(result);
    var xml = __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["c" /* mxUtils */].getXml(meta);
    y.share.data.set('wireframe', xml);
    var $save = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.wfSave');
    $save.css('opacity', 1.0);

    /*new Noty({
        type: 'success',
        layout : 'topRight',
        text: 'Saved Wireframe Model',
        timeout: 750
    }).show();*/
    setTimeout(function () {
        $save.css('opacity', 0.5);
    }, 750);
    
}

Util.initSharedData = function (parent, graph) {
    var uiControl;
    if (!parent.children) return;
    for (var i = 0; i < parent.children.length; i++) {
        uiControl = parent.children[i];
        uiControl.initShared();
        var tags = uiControl.createTags();
        for (var key in tags) {
            if (tags.hasOwnProperty(key)) {
                var tag = tags[key];
                __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["f" /* mxGraph */].prototype.addCellOverlay.apply(graph, [uiControl, tag]);
                tag.initShared();
                tag.bindClickEvent(graph);
            }
        }
        if (uiControl.constructor.name === 'DivContainer') {
            this.initSharedData(uiControl, graph);
        }
    }
}

Util.createFormFromCellAttributes = function (className, obj, entity) {
    var form = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["l" /* mxForm */](className);
    var attrs = obj.attributes;
    var attr;
    for (var i = 0; i < attrs.length; i++) {
        attr = attrs[i];
        if (attr.name[0] !== '_') continue; //skip non-html-element attributes
        if (attr.value.indexOf('true') != -1 || attr.value.indexOf('false') != -1) //a boolean value
            form.addCheckbox(attr.name.substr(1), attr.value.indexOf('true') != -1 ? true : false);
        else {
            var values = entity.getComboAttrMap().getComboAttr(attr.name);
            if (values) {
                var combo = form.addCombo(attr.name.substr(1));
                for (var j = 0; j < values.length; j++) {
                    form.addOption(combo, values[j], values[j], attr.value === values[j]);
                }
            } else
                form.addText(attr.name.substr(1), attr.value);
        }
    }
    return form;
}

Util.bindSharedAttributes = function (entity, form) {
    var id = entity ? entity.getId() : 'meta';
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(form.body).find('tr').map(function (i, elem) {
        var name = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(elem).find('td:first').text();
        var $input = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(elem).find('input');
        if ($input.length > 0) {
            if ($input.attr('type') === 'text') {
                var ytext = y.share.attrs.get(id + '_' + name);
                if (ytext) {
                    ytext.bind($input[0]);
                    //var caeYText = CAELiveMapper.getSharedWidgetAttr('_'+name);
                    //if(caeYText != undefined)
                    //    caeYText.bind($input[0]);
                    if(!entity && name === 'name')
                        ytext.bind(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('#draggingBar')[0]);
                }
                //else //should actually not happen but add something to mxLog if ytext does not exists for whatever reason
            } else if ($input.attr('type') === 'checkbox') {
                $input.change(function () {
                    y.share.attrs.set(id + '_' + name, this.checked);
                });
            }
        } else {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(elem).find('select').change(function () {
                //var optionSelected = $("option:selected", this);
                y.share.attrs.set(id + '_' + name, this.value);
            });
        }
    });
}

Util.GetValueFormAttributes = function(node, name){
    for(var key in node.attributes){
        if(node.attributes.hasOwnProperty(key) && node.attributes[key].name  === name){
            return node.attributes[key].value.value;
        }
    }
    return undefined;
}
/* harmony default export */ __webpack_exports__["a"] = (Util);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIControl_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__ = __webpack_require__(6);
/*global y*/
/**
 * @module UIElements
 */







UIText.prototype = new __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */]();
UIText.prototype.constructor = UIText;
window.UIText = UIText;
/**
 * Abstract class for all UI components of the editor that consists of a text input
 * @classdesc Class for all UI components of the editor that consists of a text input
 * @constructor
 * @abstract
 * @param {String} text the text of the Label
 * @param {mxGeometry} geometry the width, height, x and y of the ui element
 * @extends UIControl
 * @requires jQuery
 * @requires Yjs
 */
function UIText(text, geometry) {
    var style = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + "=rectangle;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_EDITABLE + "=0;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_RESIZABLE + "=1;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=none;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=none;';

    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].call(this, geometry, style);
    this.value.setAttribute('label', text);

    /**
     * The jquery-object represent the html input node
     * @member {jQuery}
     */
    var _$node = null;

    /**
     * Return the html input node
     * @return {jQuery} the html input node
     */
    this.get$node = function(){
        return _$node;
    }

    /**
     * Set the html input node
     * @param {jQuery} $node the html input node
     * @return {undefined}
     */
    this.set$node =  function($node){
        _$node = $node;
    }
}

/**
 * Create the inner html input element for the ui element
 * @param {String} element the name of the html input element to create
 * @return {undefined}
 */
UIText.prototype.initDOM = function(element){
    var _$node;
    var dom = element || 'input';
        _$node = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('<' + dom + '>')
            .css('width', this.geometry.width - 15)
            .css('height', this.geometry.height - 15)
            .css('font-size', 15)
            .css('pointer-events', 'none');
        
    this.set$node(_$node);
};

UIText.prototype.createShared = function (createdByLocalUser) {
    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].prototype.createShared.call(this, createdByLocalUser);
    if (createdByLocalUser) {
        var ytext = y.share.attrs.set(this.getId() + '_label', __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default.a.Text);
        ytext.insert(0, this.value.getAttribute('label'));
        
    }
};
 UIText.prototype.initShared = function(){
    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].prototype.initShared.call(this);
    var ytext = y.share.attrs.get(this.getId()+ '_label');
    if(ytext){
        if(ytext.toString() != this.getAttribute('label')){
            ytext.delete(0, ytext.toString().length);
            ytext.insert(0, this.getAttribute('label'));
        }
        this.bindLabel(ytext);
    }
    else{
        var ytext = y.share.attrs.set(this.getId() + '_label', __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default.a.Text);
        ytext.insert(0, this.value.getAttribute('label'));        
    }
 };

UIText.prototype.bindLabel = function(ytext){
    ytext.bind(this.get$node()[0]);
    var that = this;    
    ytext.observe(__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.debounce(function(event){
        that.value.setAttribute('label', event.object.toString());
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.wfSave').click();
    }, 300));
}

UIText.registerCodec = function(ctor){
    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].registerCodec(ctor);
}

/* harmony default export */ __webpack_exports__["a"] = (UIText);

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_ComboAttributeMap_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__misc_Constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tags_TagRegistry_js__ = __webpack_require__(10);
/*global y*/
/**
 * @module UIElements
 */










UIControl.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["u" /* mxCell */]();
UIControl.prototype.constructor = UIControl;
window.UIControl = UIControl;

/**
 * The Name of element in the Wireframing editor
 * @static 
 * @default Default
 * @readonly
 */
UIControl.NAME = "Default";

/**
 * Base class for all UI components of the editor
 * @classdesc Base abstract class for all UI components of the editor. 
 * @constructor 
 * @param {mxGeometry} geometry the width, height, x and y of the ui element
 * @param {String} style the style of the ui element
 * @param {String} type the type of the ui element
 * @extends mxCells
 * @requires TagRegistry
 * @requires CONST
 * @requires ComboAttributeMap
 */
function UIControl(geometry, style, type) {
    var that = this;

    /**
     * The map of combo attributes.
     * key is the attribute name. 
     * value is a array of possible values for the attribute.
     * @member {ComboAttributeMap} 
     */
    var comboAttrMap = new __WEBPACK_IMPORTED_MODULE_2__misc_ComboAttributeMap_js__["a" /* default */]();

    var xmlDoc = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].createXmlDocument();
    /**
     * Contains the data for the attributes of the ui element
     * A ui element always has a 'id'- and 'class'-attribute
     * @member {XMLDocument}
     */
    var uiObj = xmlDoc.createElement('uiObj');

    uiObj.setAttribute('_id', '');
    uiObj.setAttribute('_class', '');
    uiObj.setAttribute('uiType', type || this.constructor.name.toLowerCase());
    
    /**
     * Contains the data of the tags assigned to the ui element.
     * The xml document is appended to the uiObj
     * @member {XMLDocument}
     */
    var tagRoot = xmlDoc.createElement('tagRoot');
    uiObj.append(tagRoot);

    /**
     * The number of tags assigned to the ui element
     * @member {Integer}
     */
    var tagCounter = 0;
    if (!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 78, 78 );
    if(!style)
        style =style = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + "=default;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=white;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=black;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_ASPECT + '=fixed;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_EDITABLE + "=0;";
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["u" /* mxCell */].call(this, uiObj, geometry, style);

    this.setVertex(true);

    /**
     * The callback method for the makeTypeDraggable-function
     * TODO: Find a proper name for the function
     * @param  {Wireframe} wf The wireframe
     * @param  {object} evt a event which is not used
     * @param  {mxCell} dropTarget the target to add the new cell
     * @param  {Integer} x0 x-coordinate
     * @param  {Integer} y0 y-corrdinate
     * @return {String} the id of the created ui component
     */
    this.dropElementCallback = function (wf, evt, dropTarget, x0, y0) {
        wf.stopEditing(false);

        //encode UIControl
        var encoder = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxCodec */]();

        //var pt = wf.getPointForEvent(evt);

        var v = wf.getModel().cloneCell(that);
        v.geometry.x = dropTarget ? Math.abs(x0 - dropTarget.geometry.x) : x0;
        v.geometry.y = dropTarget ? Math.abs(y0 - dropTarget.geometry.y) : y0;
        var result = encoder.encode(v);

        var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getXml(result);
        var id = __WEBPACK_IMPORTED_MODULE_1__misc_Util__["a" /* default */].GUID();
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].ADD_VERTEX, {
            userId: y.db.userId,
            id: id,
            data: xml,
            parent: dropTarget ? dropTarget.getId() : null
        });
        return id;
    }
    
    /**
     * Make a type draggable to the canvas
     * @param {object} type the type
     * @param {Wireframe} wireframe the wireframe
     * @return{undefined}
     */
    this.makeTypeDraggable = function (type, wireframe) {
        var preview = document.createElement('div');
        preview.style.width = that.geometry.width+'px';
        preview.style.height = that.geometry.height + 'px';
        preview.style.border = 'black 0.5px dashed';

        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].makeDraggable(type, wireframe, that.dropElementCallback, preview, 0, 0);
    }

    /**
     * Set attribute values from json file
     * @param {any} json a json
     * @return{undefined}
     */
    this.setValueFromJson = function (json) {
        for (var key in json) {
            if (this.value.hasAttribute(key)) {
                this.value.setAttribute(key, json[key]);
            }
        }
    }

    /**
     * Get the current number of tags for the ui element
     * @returns {Integer} the tag counter
     */
    this.getTagCounter = function () {
        return tagCounter;
    }
    
    /**
     * @param  {AbstractTag} tag the tag to add to the ui element
     * @return {undefined}
     */
    this.addTag = function (tag) {
        this.value.getElementsByTagName('tagRoot')[0].appendChild(tag.tagObj);
        tagCounter++;
    }
    
    /**
     * Remove a Tag by the id
     * @param  {String} tagId the id of the tag as string
     * @return {undefined}
     */
    this.removeTagById = function (tagId) {
        var r = this.value.getElementsByTagName('tagRoot')[0];
        var arr = Array.prototype.slice.call(r.childNodes);
        for (var i = 0; i < arr.length; i++) {
            if (tagId === arr[i].getAttribute('id')) {
                r.removeChild(arr[i]);
                tagCounter--;
                return true;
            }
        }

        return false;
    }
   
    /**
     * Creates the tags for the ui control
     * @return {undefined}
     */
    this.createTags = function () {
        var that = this;
        var tags = {};
        var _createTag = function (node, point) {
            var tag;
            var C = __WEBPACK_IMPORTED_MODULE_7__tags_TagRegistry_js__["a" /* default */].getClass(node.getAttribute('tagType'));            
            if(C)
                tag = new C(that, point, node.getAttribute('tagType'));
            return tag;
        }

        var children = this.value.childNodes[0].childNodes;
        var arr = Array.prototype.slice.call(children)

        for (var i = 0; i < arr.length; i++) {
            var point = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxPoint */](-__WEBPACK_IMPORTED_MODULE_6__misc_Constants_js__["a" /* default */].TAG.SIZE * that.getTagCounter(), 0);
            var tag = _createTag(arr[i], point);
            tag.tagObj = arr[i];
            tags[tag.getId()] = tag;
            this.value.getElementsByTagName('tagRoot')[0].appendChild(tag.tagObj);
            tagCounter++;
            if (tag.tagObj.getAttribute('parent') !== '#') {
                var parentTag = tags[tag.tagObj.getAttribute('parent')];
                if (parentTag)
                    parentTag.addChildTag(tag);
            }
        }
        return tags;
    }

    /**
     * Get the combo attribute map for the ui element
     * @return {undefined}
     */
    this.getComboAttrMap = function(){
        return comboAttrMap;
    }

    /**
     * Set the uiType attribute
     * @param {String} type the type of the ui control
     * @return {undefined}
     */
    this.setType = function(type){
        that.value.setAttribute('uiType', type);
    }
}

/**
 * Registers a ui element to the mxCodecRegistry
 * @param  {Function} ctor the constructor to register to mxCodexRegistry
 * @return {undefined}
 */
UIControl.registerCodec = function (ctor) {
    var codec = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].clone(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxCodecRegistry */].getCodec(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["u" /* mxCell */]));
    codec.template = new ctor();
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxCodecRegistry */].register(codec);
}
UIControl.registerCodec(UIControl);

/**
 * Create the shared attributes
 * @param  {boolean} createdByLocalUser Only the local user is allowed to create the shared types
 * @return {undefined}
 */
UIControl.prototype.createShared = function (createdByLocalUser) {
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_id', __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default.a.Text);
        y.share.attrs.set(this.getId() + '_class', __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default.a.Text);
    }
}

/**
 * Set the value of a boolean attribute in the property editor and the ui element
 * @param  {String} name the name of the attribtue
 * @param  {Boolean} value the boolean value
 * @returns {undefined}
 */
UIControl.prototype.setBooleanAttributeValue = function (name, value) {
    this.value.setAttribute(name, value);
    var $input = __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#propertyEditor_' + this.getId() + ' #attributesTab').find('td:contains(' + name.substr(1) + ') + td input');
    if ($input.length > 0)
        $input[0].checked = value;
    __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.wfSave').click();
}

/**
 * Set the value of a combo attribute in the property editor and the ui element
 * @param  {String} name the name of the attribute
 * @param  {String} value a value for the attribute 
 * @return {undefined}
 */
UIControl.prototype.setComboAttributeValue = function (name, value) {
    this.value.setAttribute(name, value);
    var $select = __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#propertyEditor_' + this.getId() + ' #attributesTab').find('td:contains(' + name.substr(1) + ') + td select');
    if ($select.length > 0)
        $select.find('option[value=' + value + ']').prop('selected', true);
    __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.wfSave').click();
}

/**
 * Initialize shared attributes
 * @return {undefined}
 */
UIControl.prototype.initShared = function () {
    this.initYText('_id');
    this.initYText('_class');
}

/**
 * Get the tag by the id or null
 * @param  {String} id the id of the tag
 * @return {AbstractTag|Null} the tag or null 
 */
UIControl.prototype.getTagById = function (id) {
    if (this.hasOwnProperty('overlays') && this.overlays) {
        for (var i = 0; i < this.overlays.length; i++) {
            var tag = this.overlays[i];
            if (tag.constructor.name !== 'UserOverlay' && tag.constructor.name !== 'EditOverlay' && tag.constructor.name !== 'SyncMetaSelectOverlay') {
                if (tag.tagObj.getAttribute('id') === id) {
                    return tag;
                }
            }
        }
    }
    return null;
}

/**
 * Check if the ui elements contains the tag
 * @param  {AbstractTag} tag the tag to check
 * @return {Boolean}  true if the ui element contains the tag else false
 */
UIControl.prototype.containsTagType = function (tag) {
    if (this.hasOwnProperty('overlays') && this.overlays) {
        for (var i = 0; i < this.overlays.length; i++) {
            var t = this.overlays[i];
            if (t.constructor.name === tag.constructor.name)
                return true;
        }
    }
    return false;
}

/**
 * Returns the observer function for a string attribute of a ui element
 * @return {Function} the observer for a ytext 
 */
UIControl.prototype.getYTextObserver = function () {
    var that = this;
    var observer = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.debounce(function (evt) {
        var value = evt.object.toString();
        var path = evt.object.getPath()[0];
        var attrName = path.substring(path.indexOf('_'));
        that.value.setAttribute(attrName, value);
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.wfSave').click();
    }, 500);
    return observer;
}

/**
 * Create the attribute in y.share.attrs if it does not exists
 * If it exists bind the Observer and initialize the attribute for the uiObj
 * @param  {String} attrName the name of the attribute
 * @return {undefined}
 */
UIControl.prototype.initYText = function (attrName) {
    var ytext = y.share.attrs.get(this.getId() + attrName, __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default.a.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + attrName, __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default.a.Text);
    else {
        ytext.observe(this.getYTextObserver());
        this.value.setAttribute(attrName, ytext.toString());
    }
}

/**
 * Serializes the ui element to xml
 * @return {XMLDocument} the xml representation of the ui element
 */
UIControl.prototype.toXML = function () {
    var codec = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxCodec */]();
    var result = codec.encode(this);
    return __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getXml(result);
}

/**
 * Get the edit overlay for the ui element
 * @return {EditOverlay} the edit overlay for the ui element
 */
UIControl.prototype.getEditOverlay = function () {
    if (this.hasOwnProperty('overlays') && this.overlays) {
        for (var i = 0; i < this.overlays.length; i++) {
            var t = this.overlays[i];
            if (t.constructor.name === 'EditOverlay')
                return t;
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (UIControl);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_Constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SharedTag_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GenericTag_js__ = __webpack_require__(109);




/**
 * @classdesc A registry for all generic and predefined tags
 * 
 * The class is a Singleton 
 * @constructor
 * @requires SharedTag
 * @requires GenericTag
 */
function TagRegistry() {
    /**
     * The description map
     * @member {Object}
     */
    var _descriptions = {};
    
    /**
     * The registry map containing all constructors
     * @member {Object}
     */
    var _registry = {};
    
    //Register the SharedTag
    _registry[__WEBPACK_IMPORTED_MODULE_1__SharedTag_js__["a" /* default */].Alias] = __WEBPACK_IMPORTED_MODULE_1__SharedTag_js__["a" /* default */];
    _descriptions[__WEBPACK_IMPORTED_MODULE_1__SharedTag_js__["a" /* default */].Alias] = {
        image: __WEBPACK_IMPORTED_MODULE_1__SharedTag_js__["a" /* default */].IMAGE
    };

    return {
        
        /**
         * Initialize the TagRegistry with the given VLS
         * @static
         * @param {Object} vls the VLS
         * @param {Object} config the configuration file
         * @return {undefined}
         * @memberof TagRegistry
         */
        initFromVLS: function (vls, config) {
            var findNodeClassInVLS = function (nodeClassName, vls) {
                var nodes = vls.nodes;
                for (var key in nodes) {
                    if (nodes.hasOwnProperty(key) && nodes[key].label === nodeClassName)
                        return nodes[key];
                }
                return false;
            }
            var tags = config.tags;
            if (tags) {
                for (var i = 0; i < tags.length; i++) {
                    var node = findNodeClassInVLS(tags[i].node_class, vls);
                    var attrs = {};

                    for (var key in node.attributes) {
                        var attr = node.attributes[key];
                        if (attr.hasOwnProperty('options')) {
                            var values = [];
                            for (var v in attr.options)
                                values.push(v);
                            attrs[attr.key] = values;
                        } else
                            attrs[attr.key] = attr['value'];
                    }
                    _descriptions[tags[i].node_class] = {
                        image: tags[i].options && tags[i].options.imgConst ? __WEBPACK_IMPORTED_MODULE_0__misc_Constants_js__["a" /* default */].IMAGES[tags[i].options.imgConst] : __WEBPACK_IMPORTED_MODULE_0__misc_Constants_js__["a" /* default */].IMAGES.DEFAULT_TAG,
                        attrs: attrs
                    };
                    _registry[tags[i].node_class] = __WEBPACK_IMPORTED_MODULE_2__GenericTag_js__["a" /* default */];
                }
            }
        },
        /**
         * 
         * @param {String} nodeClassName get the dsecription for the given node class
         * @return {Object|null} the object containing the description or null
         * @memberof TagRegistry
         */
        get: function (nodeClassName) {
            return _descriptions.hasOwnProperty(nodeClassName) ? _descriptions[nodeClassName] : null;
        },
        /**
         * Get the whole description map
         * @return {Object} the description map is returned
         * @memberof TagRegistry
         */
        getDescription: function () {
            return _descriptions;
        },
        /**
         * Get the constructor for a given name
         * @param {String} name the alias name of the class
         * @return {Function|null} the constructor function or null
         * @memberof TagRegistry
         */
        getClass: function (name) {
            return _registry.hasOwnProperty(name) ? _registry[name] : null;
        },
        /**
         * Get the whole registry map with all constructor functions for all predefined tags and generic tags from the VLS
         * @return {Object} returns the registry map
         * @memberof TagRegistry
         */
        getClasses: function () {
            return _registry;
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (new TagRegistry());

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// Internal use only
return $.ui.escapeSelector = ( function() {
	var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
	return function( selector ) {
		return selector.replace( selectorEscape, "\\$1" );
	};
} )();

} ) );


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.keyCode = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};

} ) );


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeActiveElement = function( document ) {
	var activeElement;

	// Support: IE 9 only
	// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
	try {
		activeElement = document.activeElement;
	} catch ( error ) {
		activeElement = document.body;
	}

	// Support: IE 9 - 11 only
	// IE may return null instead of an element
	// Interestingly, this only seems to occur when NOT in an iframe
	if ( !activeElement ) {
		activeElement = document.body;
	}

	// Support: IE 11 only
	// IE11 returns a seemingly empty object in some cases when accessing
	// document.activeElement from an <iframe>
	if ( !activeElement.nodeName ) {
		activeElement = document.body;
	}

	return activeElement;
};

} ) );


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(59),
			__webpack_require__(2),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

return $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );

} ) );


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_jstree_dist_jstree_min_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_jstree_dist_jstree_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_jstree_dist_jstree_min_js__);
/*global y*/




/**
 * @classdesc the hierachy tree visualize the hierachical structure of the ui elements in the wireframing editor and allows to edit the hierachy structure
 * @constructor
 * @requires jQuery
 * @requires jsTree
 */
function HierachyTree() {
    /**
     * The html dom element as string
     * @member {String}
     */
    var htmlTree = '<div id="hierachyTree"></div>';
    
    /**
     * the mxWindows-instance that contains the hierachy tree in the DOM
     * @member {mxWindow}
     */
    var wnd;

    /**
     * The jsTree that handles and visualize the hierachy tree
     * @member {jsTree}
     */
    var $tree = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.parseHTML(htmlTree)).jstree({
        core: {
            multiple: false,
            check_callback: true,
            themes: {
                stripes: true,
                ellipsis: true,
                icons: false,
                dots: true
            }
        },
        contextmenu: {
            items: {
                up: {
                    label: 'Up',
                    title: 'Move the element Up in the hierachy',
                    separator_after: true,
                    action: function (event) {
                        y.share.action.set('upIndex', event.reference.prevObject.attr('id'));
                    }
                },
                down: {
                    label: 'Down',
                    title: 'Move the element down in the hierachy',
                    action: function (event) {
                        y.share.action.set('downIndex', event.reference.prevObject.attr('id'));
                    }
                }
            }
        },
        plugins: ["contextmenu"]
    });

    var addRecursive = function (parent) {
        if (!parent.children) return false;
        for (var i = 0; i < parent.children.length; i++) {
            var cell = parent.children[i];
            $tree.jstree(true).create_node(cell.parent.id === '1' ? '#' : cell.parent.id, {
                id: cell.id,
                text: cell.constructor.NAME || cell.value.getAttribute('uiType'),
                state: {
                    selected: false
                },
                pos: cell.parent.getIndex(cell)
            });
            addRecursive(cell);
        }
    };
    return {
        /**
         * Initialize the hierachy tree in a seperate mxWindow-instance
         * @param {mxEditor} editor the wireframing editor instance
         * @return {undefined}
         * @memberof HierachyTree
         */
        init: function (editor) {
            function buildTree(parent) {
                if (!parent.children) return;
                for (var i = 0; i < parent.children.length; i++) {
                    var cell = parent.children[i];
                    $tree.jstree(true).create_node(cell.parent.id === '1' ? null : cell.parent.id, {
                        id: cell.id,
                        text: cell.constructor.NAME || cell.value.getAttribute('uiType'),
                        state: {
                            selected: false,
                            opened: true
                        }
                    });
                    buildTree(cell);
                }
            }
            buildTree(editor.graph.getDefaultParent());
            $tree.jstree(true).open_all();
            document.body.appendChild($tree[0]);

            y.share.action.observe(function (event) {
                switch (event.name) {
                    case 'upIndex': {
                        var cell = editor.graph.model.getCell(event.value);
                        var index = cell.parent.getIndex(cell);
                        if (index > 0) {
                            index--;
                            cell.parent.insert(cell, index);
                            $tree.jstree(true).move_node(cell.id, cell.parent.id === '1' ? '#' : cell.parent.id, index);
                        }
                        break;
                    }
                    case 'downIndex': {
                        var cell = editor.graph.model.getCell(event.value);
                        var index = cell.parent.getIndex(cell);
                        if (index < cell.parent.children.length - 1) {
                            index++;
                            cell.parent.insert(cell, index);
                            $tree.jstree(true).move_node(cell.id, cell.parent.id === '1' ? '#' : cell.parent.id, index + 1);
                        }
                        break;
                    }
                }
            });

            var undoCallback = function (edit, event) {
                var edit = event.getProperty('edit');
                for (var i = 0; i < edit.changes.length; i++) {
                    var change = edit.changes[i];
                    if (change.constructor.name === 'mxRootChange') {
                        //TODO
                    }
                    else if (change.constructor.name === 'mxChildChange') {
                        if (!change.previous) {
                            $tree.jstree(true).create_node(change.child.parent.id === '1' ? '#' : change.child.parent.id, {
                                id: change.child.id,
                                text: change.child.constructor.NAME || change.child.value.getAttribute('uiType'),
                                state: {
                                    selected: false,
                                    opened: true
                                },
                                pos: change.child.parent.getIndex(change.child)
                            });
                            addRecursive(change.child);
                        } else{
                            if((change.previous.constructor.name === 'DivContainer' || change.previous.id === '1') && change.parent){
                                $tree.jstree(true).delete_node(change.child.id);
                                $tree.jstree(true).create_node(change.parent.id === '1' ? '#' : change.parent.id, {
                                    id: change.child.id,
                                    text: change.child.constructor.NAME || change.child.value.getAttribute('uiType'),
                                    state: {
                                        selected: false,
                                        opened: true
                                    },
                                    pos: change.child.parent.getIndex(change.child)
                                });                            
                                addRecursive(change.child);
                            }else
                                $tree.jstree(true).delete_node(change.child.id);
                        }
                            
                    }
                }
            };
            editor.undoManager.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].UNDO, undoCallback);
            editor.undoManager.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REDO, undoCallback);

            wnd = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["a" /* mxWindow */]('Hierachy', $tree[0], 300, 200, '100%', '40%', true, true);
            wnd.destroyOnClose = false;
            wnd.setVisible(false);
            wnd.setMaximizable(false);
            wnd.setResizable(false);
            wnd.setClosable(true);
        },
        /**
         * Show the mxWindow that displays the hierachy tree
         * @return {undefined}
         * @memberof HierachyTree
         */
        show: function () {
            wnd.setVisible(true);
        },
        /**
         * Hide the mxWindow that displays the hierachy tree
         * @return {undefined}
         * @memberof HierachyTree
         */
        hide: function () {
            wnd.setVisible(false);
        },
        /**
         * Check if the mxWindow-instance that displays the hierachy tree is visible
         * @return {Boolean} true if the mxWindow is visible else false
         * @memberof HierachyTree
         */
        isVisible: function () {
            return wnd.isVisible();
        },
        /**
         * Add a ui element to the hierachy tree
         * @param {UIObject} cell the ui element to add to the hierachy tree
         * @return {undefined}
         * @memberof HierachyTree
         */
        add: function (cell) {
            $tree.jstree(true).create_node(cell.parent.id === '1' ? '#' : cell.parent.id, {
                id: cell.id,
                text: cell.constructor.NAME || cell.value.getAttribute('uiType'),
                state: {
                    selected: false,
                    opened: true
                },
                pos: cell.parent.getIndex(cell)
            });
        },
        /**
         * Remove a set of cells from the hierachy tree
         * @param {String[]} cells an array of strings containing the id of the cells to remove
         * @return {undefined}
         * @memberof HierachyTree
         */
        remove: function (cells) {
            $tree.jstree(true).delete_node(cells);
        },
        /**
         * Move a entry in the hierachy tree
         * @param {UIObject} cell the cell to move
         * @param {UIObject} parent the new parent of the cell
         * @param {Integer} position the new position of the cell
         * @return {undefined}
         * @memberof HierachyTree
         */
        move: function (cell, parent, position) {
            var oldParent = $tree.jstree(true).get_parent(cell);
            oldParent = oldParent === '#' ? '1' : oldParent; //if root in mxGraph is '1' in jsTree '#' map them to compare
            if(oldParent !== parent)
                $tree.jstree(true).move_node(cell, parent === '1' ? '#' : parent, position);
        },
        /**
         * Group a set of cells
         * The functions creates the parent of the all elements in the cells array 
         * and moves the cells to the new parent
         * @param {UIObject} group the new parent
         * @param {UIOObject[]} cells the children of the group 
         * @return {undefined}
         * @memberof HierachyTree
         */
        group: function (group, cells) {
            $tree.jstree(true).create_node(group.parent.id === '1' ? '#' : group.parent.id, {
                id: group.id,
                text: group.constructor.NAME || group.value.getAttribute('uiType'),
                state: {
                    selected: false,
                    opened: true
                },
                pos: group.parent.getIndex(group)
            });
            for (var i = 0; i < cells.length; i++) {
                var cell = cells[i];
                $tree.jstree(true).move_node(cell.id, group.id, group.getIndex(cell));

            }
        },
        /**
         * Ungroup the cells from their parent
         * The function recursively adds the children of the deleted parent to the hierachy tree
         * @param {UIObject[]} cells the child cells which were ungrouped
         * @return {undefined}
         * @memberof HierachyTree
         */
        ungroup: function (cells) {
            var helperFnc = function(cell){
                $tree.jstree(true).create_node(cell.parent.id === '1' ? '#' : cell.parent.id, {
                    id: cell.id,
                    text: cell.constructor.NAME || cell.value.getAttribute('uiType'),
                    state: {
                        selected: false,
                        opened: true
                    },
                    pos: cell.parent.getIndex(cell)
                });
                if(cell.children){
                    for(var i=0;i<cell.children.length;i++){
                        helperFnc(cell.children[i]);
                    }
                }
            
            }
            for (var i = 0; i < cells.length; i++) {
                helperFnc(cells[i]);
            }
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (new HierachyTree());

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_tabs__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TagEditor_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_Util_js__ = __webpack_require__(6);
/**
 * @module
 */






/**
 * Generates the property editor for the given cell at position (x,y)
 * @param {mxCell} cell the cell 
 * @param {Wireframe} graph the wireframe containing the cell
 * @param {Integer} x the x-coordinate 
 * @param {Integer} y the y-coordinate
 * @return {jQuery} the jquery object of the html editor in the DOM
 */
function PropertyEditor(cell, graph, x, y) {
    var id;
    if (cell)
        id = cell.getId();
    else
        id = 'meta';

    var htmlEditorTemplate = '<div id="propertyEditor_' + id + '"><ul></ul>';

    //Check if property editor already exists
    var $htmlEditor = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#propertyEditor_' + id);
    if ($htmlEditor.length == 0) {
        var $htmlEditor = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.parseHTML(htmlEditorTemplate)[0]);

        //Add the templates
        var htmlAttributeTab = '<li><a href="#attributesTab">Attributes</a></li>';
        var htmlAttributeTabContent = '<div id="attributesTab"></div>';
        $htmlEditor.find('ul').append(__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.parseHTML(htmlAttributeTab));
        $htmlEditor.append(__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.parseHTML(htmlAttributeTabContent));

        var form = __WEBPACK_IMPORTED_MODULE_4__misc_Util_js__["a" /* default */].createFormFromCellAttributes('attributes', cell ? cell.value : graph.getModel().getMeta(), cell ? cell : graph.getModel());

        var $attrsForm = $htmlEditor.find('#attributesTab');
        $attrsForm.append(form.body);
        var propertyEditorWnd = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["a" /* mxWindow */]((cell ? cell.constructor.name : 'Widget') + ' Attributes', $htmlEditor[0], x, y, '100%', '40%', true, true);
        propertyEditorWnd.setVisible(true);
        propertyEditorWnd.setMaximizable(false);
        propertyEditorWnd.setResizable(false);
        propertyEditorWnd.setClosable(true);
        
        __WEBPACK_IMPORTED_MODULE_4__misc_Util_js__["a" /* default */].bindSharedAttributes(cell ? cell : null, form);
        if(cell)
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__TagEditor_js__["a" /* default */])(cell, $htmlEditor, graph);
        
        $htmlEditor.tabs();
    }
    return $htmlEditor;
}
/* harmony default export */ __webpack_exports__["a"] = (PropertyEditor);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @module Misc
 */

/**
 * A simple map to handle combo attributes for the Wireframe Model, UI Controls and Tags
 * @constructor 
 */
function ComboAttributeMap(){
    var comboAttr = {};
    /**
     * Get the combo attribute with given name
     * @param  {String} name the name of attribute
     * @return {String[]|undefined} the array of possible values of the combo attribute
     */
    this.getComboAttr = function (name) {
        if (comboAttr.hasOwnProperty(name))
            return comboAttr[name];
        else return undefined;
    }
    /**
     * Add a combo attribute to the map
     * @param  {String} name the name of the attribute
     * @param {String[]} values the array of values of the combo attribute
     * @return {Boolean} true if the attribute was added to the map else false
     */
    this.addComboAttr = function (name, values) {
        if (!comboAttr.hasOwnProperty(name)) {
            comboAttr[name] = values;
            return true;
        } else return false;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (ComboAttributeMap);

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :focusable Selector
//>>group: Core
//>>description: Selects elements which can be focused.
//>>docs: http://api.jqueryui.com/focusable-selector/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// Selectors
$.ui.focusable = function( element, hasTabindex ) {
	var map, mapName, img, focusableIfVisible, fieldset,
		nodeName = element.nodeName.toLowerCase();

	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap='#" + mapName + "']" );
		return img.length > 0 && img.is( ":visible" );
	}

	if ( /^(input|select|textarea|button|object)$/.test( nodeName ) ) {
		focusableIfVisible = !element.disabled;

		if ( focusableIfVisible ) {

			// Form controls within a disabled fieldset are disabled.
			// However, controls within the fieldset's legend do not get disabled.
			// Since controls generally aren't placed inside legends, we skip
			// this portion of the check.
			fieldset = $( element ).closest( "fieldset" )[ 0 ];
			if ( fieldset ) {
				focusableIfVisible = !fieldset.disabled;
			}
		}
	} else if ( "a" === nodeName ) {
		focusableIfVisible = element.href || hasTabindex;
	} else {
		focusableIfVisible = hasTabindex;
	}

	return focusableIfVisible && $( element ).is( ":visible" ) && visible( $( element ) );
};

// Support: IE 8 only
// IE 8 doesn't resolve inherit to visible/hidden for computed values
function visible( element ) {
	var visibility = element.css( "visibility" );
	while ( visibility === "inherit" ) {
		element = element.parent();
		visibility = element.css( "visibility" );
	}
	return visibility !== "hidden";
}

$.extend( $.expr[ ":" ], {
	focusable: function( element ) {
		return $.ui.focusable( element, $.attr( element, "tabindex" ) != null );
	}
} );

return $.ui.focusable;

} ) );


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
return $.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
				instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};

} ) );


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeBlur = function( element ) {

	// Support: IE9 - 10 only
	// If the <body> is blurred, IE will switch windows, see #9420
	if ( element && element.nodeName.toLowerCase() !== "body" ) {
		$( element ).trigger( "blur" );
	}
};

} ) );


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.extend( {
	uniqueId: ( function() {
		var uuid = 0;

		return function() {
			return this.each( function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			} );
		};
	} )(),

	removeUniqueId: function() {
		return this.each( function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		} );
	}
} );

} ) );


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(15),
			__webpack_require__(55),
			__webpack_require__(29),
			__webpack_require__(14),
			__webpack_require__(30),
			__webpack_require__(62),
			__webpack_require__(2),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.draggable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// Callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: function() {

		if ( this.options.helper === "original" ) {
			this._setPositionRelative();
		}
		if ( this.options.addClasses ) {
			this._addClass( "ui-draggable" );
		}
		this._setHandleClassName();

		this._mouseInit();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "handle" ) {
			this._removeHandleClassName();
			this._setHandleClassName();
		}
	},

	_destroy: function() {
		if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
			this.destroyOnClear = true;
			return;
		}
		this._removeHandleClassName();
		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var o = this.options;

		// Among others, prevent a drag on a resizable-handle
		if ( this.helper || o.disabled ||
				$( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
			return false;
		}

		//Quit if we're not on a valid handle
		this.handle = this._getHandle( event );
		if ( !this.handle ) {
			return false;
		}

		this._blurActiveElement( event );

		this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

		return true;

	},

	_blockFrames: function( selector ) {
		this.iframeBlocks = this.document.find( selector ).map( function() {
			var iframe = $( this );

			return $( "<div>" )
				.css( "position", "absolute" )
				.appendTo( iframe.parent() )
				.outerWidth( iframe.outerWidth() )
				.outerHeight( iframe.outerHeight() )
				.offset( iframe.offset() )[ 0 ];
		} );
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_blurActiveElement: function( event ) {
		var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
			target = $( event.target );

		// Don't blur if the event occurred on an element that is within
		// the currently focused element
		// See #10527, #12472
		if ( target.closest( activeElement ).length ) {
			return;
		}

		// Blur any element that currently has focus, see #4261
		$.ui.safeBlur( activeElement );
	},

	_mouseStart: function( event ) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper( event );

		this._addClass( this.helper, "ui-draggable-dragging" );

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.current = this;
		}

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css( "position" );
		this.scrollParent = this.helper.scrollParent( true );
		this.offsetParent = this.helper.offsetParent();
		this.hasFixedAncestor = this.helper.parents().filter( function() {
				return $( this ).css( "position" ) === "fixed";
			} ).length > 0;

		//The element's absolute position on the page minus margins
		this.positionAbs = this.element.offset();
		this._refreshOffsets( event );

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition( event, false );
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

		//Set a containment if given in the options
		this._setContainment();

		//Trigger event + callbacks
		if ( this._trigger( "start", event ) === false ) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ( $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( this, event );
		}

		// Execute the drag once - this causes the helper not to be visible before getting its
		// correct position
		this._mouseDrag( event, true );

		// If the ddmanager is used for droppables, inform the manager that dragging has started
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStart( this, event );
		}

		return true;
	},

	_refreshOffsets: function( event ) {
		this.offset = {
			top: this.positionAbs.top - this.margins.top,
			left: this.positionAbs.left - this.margins.left,
			scroll: false,
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset()
		};

		this.offset.click = {
			left: event.pageX - this.offset.left,
			top: event.pageY - this.offset.top
		};
	},

	_mouseDrag: function( event, noPropagation ) {

		// reset any necessary cached properties (see #5009)
		if ( this.hasFixedAncestor ) {
			this.offset.parent = this._getParentOffset();
		}

		//Compute the helpers position
		this.position = this._generatePosition( event, true );
		this.positionAbs = this._convertPositionTo( "absolute" );

		//Call plugins and callbacks and use the resulting position if something is returned
		if ( !noPropagation ) {
			var ui = this._uiHash();
			if ( this._trigger( "drag", event, ui ) === false ) {
				this._mouseUp( new $.Event( "mouseup", event ) );
				return false;
			}
			this.position = ui.position;
		}

		this.helper[ 0 ].style.left = this.position.left + "px";
		this.helper[ 0 ].style.top = this.position.top + "px";

		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.drag( this, event );
		}

		return false;
	},

	_mouseStop: function( event ) {

		//If we are using droppables, inform the manager about the drop
		var that = this,
			dropped = false;
		if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
			dropped = $.ui.ddmanager.drop( this, event );
		}

		//if a drop comes from outside (a sortable)
		if ( this.dropped ) {
			dropped = this.dropped;
			this.dropped = false;
		}

		if ( ( this.options.revert === "invalid" && !dropped ) ||
				( this.options.revert === "valid" && dropped ) ||
				this.options.revert === true || ( $.isFunction( this.options.revert ) &&
				this.options.revert.call( this.element, dropped ) )
		) {
			$( this.helper ).animate(
				this.originalPosition,
				parseInt( this.options.revertDuration, 10 ),
				function() {
					if ( that._trigger( "stop", event ) !== false ) {
						that._clear();
					}
				}
			);
		} else {
			if ( this._trigger( "stop", event ) !== false ) {
				this._clear();
			}
		}

		return false;
	},

	_mouseUp: function( event ) {
		this._unblockFrames();

		// If the ddmanager is used for droppables, inform the manager that dragging has stopped
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStop( this, event );
		}

		// Only need to focus if the event occurred on the draggable itself, see #10527
		if ( this.handleElement.is( event.target ) ) {

			// The interaction is over; whether or not the click resulted in a drag,
			// focus the element
			this.element.trigger( "focus" );
		}

		return $.ui.mouse.prototype._mouseUp.call( this, event );
	},

	cancel: function() {

		if ( this.helper.is( ".ui-draggable-dragging" ) ) {
			this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
		} else {
			this._clear();
		}

		return this;

	},

	_getHandle: function( event ) {
		return this.options.handle ?
			!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
			true;
	},

	_setHandleClassName: function() {
		this.handleElement = this.options.handle ?
			this.element.find( this.options.handle ) : this.element;
		this._addClass( this.handleElement, "ui-draggable-handle" );
	},

	_removeHandleClassName: function() {
		this._removeClass( this.handleElement, "ui-draggable-handle" );
	},

	_createHelper: function( event ) {

		var o = this.options,
			helperIsFunction = $.isFunction( o.helper ),
			helper = helperIsFunction ?
				$( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
				( o.helper === "clone" ?
					this.element.clone().removeAttr( "id" ) :
					this.element );

		if ( !helper.parents( "body" ).length ) {
			helper.appendTo( ( o.appendTo === "parent" ?
				this.element[ 0 ].parentNode :
				o.appendTo ) );
		}

		// Http://bugs.jqueryui.com/ticket/9446
		// a helper function can return the original element
		// which wouldn't have been set to relative in _create
		if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
			this._setPositionRelative();
		}

		if ( helper[ 0 ] !== this.element[ 0 ] &&
				!( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
			helper.css( "position", "absolute" );
		}

		return helper;

	},

	_setPositionRelative: function() {
		if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
			this.element[ 0 ].style.position = "relative";
		}
	},

	_adjustOffsetFromHelper: function( obj ) {
		if ( typeof obj === "string" ) {
			obj = obj.split( " " );
		}
		if ( $.isArray( obj ) ) {
			obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
		}
		if ( "left" in obj ) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ( "right" in obj ) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ( "top" in obj ) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ( "bottom" in obj ) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_isRootNode: function( element ) {
		return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		var po = this.offsetParent.offset(),
			document = this.document[ 0 ];

		// This is a special case where we need to modify a offset calculated on start, since the
		// following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the
		// next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
		// the document, which means that the scroll is included in the initial calculation of the
		// offset of the parent, and never recalculated upon drag
		if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
				$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
			left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
		};

	},

	_getRelativeOffset: function() {
		if ( this.cssPosition !== "relative" ) {
			return { top: 0, left: 0 };
		}

		var p = this.element.position(),
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
			left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
		};

	},

	_cacheMargins: function() {
		this.margins = {
			left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
			top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
			right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
			bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var isUserScrollable, c, ce,
			o = this.options,
			document = this.document[ 0 ];

		this.relativeContainer = null;

		if ( !o.containment ) {
			this.containment = null;
			return;
		}

		if ( o.containment === "window" ) {
			this.containment = [
				$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
				$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
				$( window ).scrollLeft() + $( window ).width() -
					this.helperProportions.width - this.margins.left,
				$( window ).scrollTop() +
					( $( window ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment === "document" ) {
			this.containment = [
				0,
				0,
				$( document ).width() - this.helperProportions.width - this.margins.left,
				( $( document ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment.constructor === Array ) {
			this.containment = o.containment;
			return;
		}

		if ( o.containment === "parent" ) {
			o.containment = this.helper[ 0 ].parentNode;
		}

		c = $( o.containment );
		ce = c[ 0 ];

		if ( !ce ) {
			return;
		}

		isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

		this.containment = [
			( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
			( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
			( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
				( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
				this.helperProportions.width -
				this.margins.left -
				this.margins.right,
			( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
				( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
				this.helperProportions.height -
				this.margins.top -
				this.margins.bottom
		];
		this.relativeContainer = c;
	},

	_convertPositionTo: function( d, pos ) {

		if ( !pos ) {
			pos = this.position;
		}

		var mod = d === "absolute" ? 1 : -1,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: (

				// The absolute mouse position
				pos.top	+

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top * mod -
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
			),
			left: (

				// The absolute mouse position
				pos.left +

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left * mod	-
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
			)
		};

	},

	_generatePosition: function( event, constrainPosition ) {

		var containment, co, top, left,
			o = this.options,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
			pageX = event.pageX,
			pageY = event.pageY;

		// Cache the scroll
		if ( !scrollIsRootNode || !this.offset.scroll ) {
			this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			};
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		// If we are not dragging yet, we won't check for options
		if ( constrainPosition ) {
			if ( this.containment ) {
				if ( this.relativeContainer ) {
					co = this.relativeContainer.offset();
					containment = [
						this.containment[ 0 ] + co.left,
						this.containment[ 1 ] + co.top,
						this.containment[ 2 ] + co.left,
						this.containment[ 3 ] + co.top
					];
				} else {
					containment = this.containment;
				}

				if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
					pageX = containment[ 0 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
					pageY = containment[ 1 ] + this.offset.click.top;
				}
				if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
					pageX = containment[ 2 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
					pageY = containment[ 3 ] + this.offset.click.top;
				}
			}

			if ( o.grid ) {

				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
				// argument errors in IE (see ticket #6950)
				top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
					this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
				pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
					top - this.offset.click.top > containment[ 3 ] ) ?
						top :
						( ( top - this.offset.click.top >= containment[ 1 ] ) ?
							top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;

				left = o.grid[ 0 ] ? this.originalPageX +
					Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
					this.originalPageX;
				pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
					left - this.offset.click.left > containment[ 2 ] ) ?
						left :
						( ( left - this.offset.click.left >= containment[ 0 ] ) ?
							left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
			}

			if ( o.axis === "y" ) {
				pageX = this.originalPageX;
			}

			if ( o.axis === "x" ) {
				pageY = this.originalPageY;
			}
		}

		return {
			top: (

				// The absolute mouse position
				pageY -

				// Click offset (relative to the element)
				this.offset.click.top -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
			),
			left: (

				// The absolute mouse position
				pageX -

				// Click offset (relative to the element)
				this.offset.click.left -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
			)
		};

	},

	_clear: function() {
		this._removeClass( this.helper, "ui-draggable-dragging" );
		if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
			this.helper.remove();
		}
		this.helper = null;
		this.cancelHelperRemoval = false;
		if ( this.destroyOnClear ) {
			this.destroy();
		}
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function( type, event, ui ) {
		ui = ui || this._uiHash();
		$.ui.plugin.call( this, type, [ event, ui, this ], true );

		// Absolute position and offset (see #6884 ) have to be recalculated after plugins
		if ( /^(drag|start|stop)/.test( type ) ) {
			this.positionAbs = this._convertPositionTo( "absolute" );
			ui.offset = this.positionAbs;
		}
		return $.Widget.prototype._trigger.call( this, type, event, ui );
	},

	plugins: {},

	_uiHash: function() {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

} );

$.ui.plugin.add( "draggable", "connectToSortable", {
	start: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.sortables = [];
		$( draggable.options.connectToSortable ).each( function() {
			var sortable = $( this ).sortable( "instance" );

			if ( sortable && !sortable.options.disabled ) {
				draggable.sortables.push( sortable );

				// RefreshPositions is called at drag start to refresh the containerCache
				// which is used in drag. This ensures it's initialized and synchronized
				// with any changes that might have happened on the page since initialization.
				sortable.refreshPositions();
				sortable._trigger( "activate", event, uiSortable );
			}
		} );
	},
	stop: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.cancelHelperRemoval = false;

		$.each( draggable.sortables, function() {
			var sortable = this;

			if ( sortable.isOver ) {
				sortable.isOver = 0;

				// Allow this sortable to handle removing the helper
				draggable.cancelHelperRemoval = true;
				sortable.cancelHelperRemoval = false;

				// Use _storedCSS To restore properties in the sortable,
				// as this also handles revert (#9675) since the draggable
				// may have modified them in unexpected ways (#8809)
				sortable._storedCSS = {
					position: sortable.placeholder.css( "position" ),
					top: sortable.placeholder.css( "top" ),
					left: sortable.placeholder.css( "left" )
				};

				sortable._mouseStop( event );

				// Once drag has ended, the sortable should return to using
				// its original helper, not the shared helper from draggable
				sortable.options.helper = sortable.options._helper;
			} else {

				// Prevent this Sortable from removing the helper.
				// However, don't set the draggable to remove the helper
				// either as another connected Sortable may yet handle the removal.
				sortable.cancelHelperRemoval = true;

				sortable._trigger( "deactivate", event, uiSortable );
			}
		} );
	},
	drag: function( event, ui, draggable ) {
		$.each( draggable.sortables, function() {
			var innermostIntersecting = false,
				sortable = this;

			// Copy over variables that sortable's _intersectsWith uses
			sortable.positionAbs = draggable.positionAbs;
			sortable.helperProportions = draggable.helperProportions;
			sortable.offset.click = draggable.offset.click;

			if ( sortable._intersectsWith( sortable.containerCache ) ) {
				innermostIntersecting = true;

				$.each( draggable.sortables, function() {

					// Copy over variables that sortable's _intersectsWith uses
					this.positionAbs = draggable.positionAbs;
					this.helperProportions = draggable.helperProportions;
					this.offset.click = draggable.offset.click;

					if ( this !== sortable &&
							this._intersectsWith( this.containerCache ) &&
							$.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
						innermostIntersecting = false;
					}

					return innermostIntersecting;
				} );
			}

			if ( innermostIntersecting ) {

				// If it intersects, we use a little isOver variable and set it once,
				// so that the move-in stuff gets fired only once.
				if ( !sortable.isOver ) {
					sortable.isOver = 1;

					// Store draggable's parent in case we need to reappend to it later.
					draggable._parent = ui.helper.parent();

					sortable.currentItem = ui.helper
						.appendTo( sortable.element )
						.data( "ui-sortable-item", true );

					// Store helper option to later restore it
					sortable.options._helper = sortable.options.helper;

					sortable.options.helper = function() {
						return ui.helper[ 0 ];
					};

					// Fire the start events of the sortable with our passed browser event,
					// and our own helper (so it doesn't create a new one)
					event.target = sortable.currentItem[ 0 ];
					sortable._mouseCapture( event, true );
					sortable._mouseStart( event, true, true );

					// Because the browser event is way off the new appended portlet,
					// modify necessary variables to reflect the changes
					sortable.offset.click.top = draggable.offset.click.top;
					sortable.offset.click.left = draggable.offset.click.left;
					sortable.offset.parent.left -= draggable.offset.parent.left -
						sortable.offset.parent.left;
					sortable.offset.parent.top -= draggable.offset.parent.top -
						sortable.offset.parent.top;

					draggable._trigger( "toSortable", event );

					// Inform draggable that the helper is in a valid drop zone,
					// used solely in the revert option to handle "valid/invalid".
					draggable.dropped = sortable.element;

					// Need to refreshPositions of all sortables in the case that
					// adding to one sortable changes the location of the other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );

					// Hack so receive/update callbacks work (mostly)
					draggable.currentItem = draggable.element;
					sortable.fromOutside = draggable;
				}

				if ( sortable.currentItem ) {
					sortable._mouseDrag( event );

					// Copy the sortable's position because the draggable's can potentially reflect
					// a relative position, while sortable is always absolute, which the dragged
					// element has now become. (#8809)
					ui.position = sortable.position;
				}
			} else {

				// If it doesn't intersect with the sortable, and it intersected before,
				// we fake the drag stop of the sortable, but make sure it doesn't remove
				// the helper by using cancelHelperRemoval.
				if ( sortable.isOver ) {

					sortable.isOver = 0;
					sortable.cancelHelperRemoval = true;

					// Calling sortable's mouseStop would trigger a revert,
					// so revert must be temporarily false until after mouseStop is called.
					sortable.options._revert = sortable.options.revert;
					sortable.options.revert = false;

					sortable._trigger( "out", event, sortable._uiHash( sortable ) );
					sortable._mouseStop( event, true );

					// Restore sortable behaviors that were modfied
					// when the draggable entered the sortable area (#9481)
					sortable.options.revert = sortable.options._revert;
					sortable.options.helper = sortable.options._helper;

					if ( sortable.placeholder ) {
						sortable.placeholder.remove();
					}

					// Restore and recalculate the draggable's offset considering the sortable
					// may have modified them in unexpected ways. (#8809, #10669)
					ui.helper.appendTo( draggable._parent );
					draggable._refreshOffsets( event );
					ui.position = draggable._generatePosition( event, true );

					draggable._trigger( "fromSortable", event );

					// Inform draggable that the helper is no longer in a valid drop zone
					draggable.dropped = false;

					// Need to refreshPositions of all sortables just in case removing
					// from one sortable changes the location of other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );
				}
			}
		} );
	}
} );

$.ui.plugin.add( "draggable", "cursor", {
	start: function( event, ui, instance ) {
		var t = $( "body" ),
			o = instance.options;

		if ( t.css( "cursor" ) ) {
			o._cursor = t.css( "cursor" );
		}
		t.css( "cursor", o.cursor );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._cursor ) {
			$( "body" ).css( "cursor", o._cursor );
		}
	}
} );

$.ui.plugin.add( "draggable", "opacity", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;
		if ( t.css( "opacity" ) ) {
			o._opacity = t.css( "opacity" );
		}
		t.css( "opacity", o.opacity );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._opacity ) {
			$( ui.helper ).css( "opacity", o._opacity );
		}
	}
} );

$.ui.plugin.add( "draggable", "scroll", {
	start: function( event, ui, i ) {
		if ( !i.scrollParentNotHidden ) {
			i.scrollParentNotHidden = i.helper.scrollParent( false );
		}

		if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
				i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
			i.overflowOffset = i.scrollParentNotHidden.offset();
		}
	},
	drag: function( event, ui, i  ) {

		var o = i.options,
			scrolled = false,
			scrollParent = i.scrollParentNotHidden[ 0 ],
			document = i.document[ 0 ];

		if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
			if ( !o.axis || o.axis !== "x" ) {
				if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
						o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
				} else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
						o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
				} else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
				}
			}

		} else {

			if ( !o.axis || o.axis !== "x" ) {
				if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
				} else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() - o.scrollSpeed
					);
				} else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() + o.scrollSpeed
					);
				}
			}

		}

		if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( i, event );
		}

	}
} );

$.ui.plugin.add( "draggable", "snap", {
	start: function( event, ui, i ) {

		var o = i.options;

		i.snapElements = [];

		$( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
			.each( function() {
				var $t = $( this ),
					$o = $t.offset();
				if ( this !== i.element[ 0 ] ) {
					i.snapElements.push( {
						item: this,
						width: $t.outerWidth(), height: $t.outerHeight(),
						top: $o.top, left: $o.left
					} );
				}
			} );

	},
	drag: function( event, ui, inst ) {

		var ts, bs, ls, rs, l, r, t, b, i, first,
			o = inst.options,
			d = o.snapTolerance,
			x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {

			l = inst.snapElements[ i ].left - inst.margins.left;
			r = l + inst.snapElements[ i ].width;
			t = inst.snapElements[ i ].top - inst.margins.top;
			b = t + inst.snapElements[ i ].height;

			if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
					!$.contains( inst.snapElements[ i ].item.ownerDocument,
					inst.snapElements[ i ].item ) ) {
				if ( inst.snapElements[ i ].snapping ) {
					( inst.options.snap.release &&
						inst.options.snap.release.call(
							inst.element,
							event,
							$.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
						) );
				}
				inst.snapElements[ i ].snapping = false;
				continue;
			}

			if ( o.snapMode !== "inner" ) {
				ts = Math.abs( t - y2 ) <= d;
				bs = Math.abs( b - y1 ) <= d;
				ls = Math.abs( l - x2 ) <= d;
				rs = Math.abs( r - x1 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l - inst.helperProportions.width
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r
					} ).left;
				}
			}

			first = ( ts || bs || ls || rs );

			if ( o.snapMode !== "outer" ) {
				ts = Math.abs( t - y1 ) <= d;
				bs = Math.abs( b - y2 ) <= d;
				ls = Math.abs( l - x1 ) <= d;
				rs = Math.abs( r - x2 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r - inst.helperProportions.width
					} ).left;
				}
			}

			if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
				( inst.options.snap.snap &&
					inst.options.snap.snap.call(
						inst.element,
						event,
						$.extend( inst._uiHash(), {
							snapItem: inst.snapElements[ i ].item
						} ) ) );
			}
			inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );

		}

	}
} );

$.ui.plugin.add( "draggable", "stack", {
	start: function( event, ui, instance ) {
		var min,
			o = instance.options,
			group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
				return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
					( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
			} );

		if ( !group.length ) { return; }

		min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
		$( group ).each( function( i ) {
			$( this ).css( "zIndex", min + i );
		} );
		this.css( "zIndex", ( min + group.length ) );
	}
} );

$.ui.plugin.add( "draggable", "zIndex", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;

		if ( t.css( "zIndex" ) ) {
			o._zIndex = t.css( "zIndex" );
		}
		t.css( "zIndex", o.zIndex );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;

		if ( o._zIndex ) {
			$( ui.helper ).css( "zIndex", o._zIndex );
		}
	}
} );

return $.ui.draggable;

} ) );


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(15),
			__webpack_require__(56),
			__webpack_require__(29),
			__webpack_require__(2),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.resizable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "resize",
	options: {
		alsoResize: false,
		animate: false,
		animateDuration: "slow",
		animateEasing: "swing",
		aspectRatio: false,
		autoHide: false,
		classes: {
			"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
		},
		containment: false,
		ghost: false,
		grid: false,
		handles: "e,s,se",
		helper: false,
		maxHeight: null,
		maxWidth: null,
		minHeight: 10,
		minWidth: 10,

		// See #7960
		zIndex: 90,

		// Callbacks
		resize: null,
		start: null,
		stop: null
	},

	_num: function( value ) {
		return parseFloat( value ) || 0;
	},

	_isNumber: function( value ) {
		return !isNaN( parseFloat( value ) );
	},

	_hasScroll: function( el, a ) {

		if ( $( el ).css( "overflow" ) === "hidden" ) {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	},

	_create: function() {

		var margins,
			o = this.options,
			that = this;
		this._addClass( "ui-resizable" );

		$.extend( this, {
			_aspectRatio: !!( o.aspectRatio ),
			aspectRatio: o.aspectRatio,
			originalElement: this.element,
			_proportionallyResizeElements: [],
			_helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
		} );

		// Wrap the element if it cannot hold child nodes
		if ( this.element[ 0 ].nodeName.match( /^(canvas|textarea|input|select|button|img)$/i ) ) {

			this.element.wrap(
				$( "<div class='ui-wrapper' style='overflow: hidden;'></div>" ).css( {
					position: this.element.css( "position" ),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css( "top" ),
					left: this.element.css( "left" )
				} )
			);

			this.element = this.element.parent().data(
				"ui-resizable", this.element.resizable( "instance" )
			);

			this.elementIsWrapper = true;

			margins = {
				marginTop: this.originalElement.css( "marginTop" ),
				marginRight: this.originalElement.css( "marginRight" ),
				marginBottom: this.originalElement.css( "marginBottom" ),
				marginLeft: this.originalElement.css( "marginLeft" )
			};

			this.element.css( margins );
			this.originalElement.css( "margin", 0 );

			// support: Safari
			// Prevent Safari textarea resize
			this.originalResizeStyle = this.originalElement.css( "resize" );
			this.originalElement.css( "resize", "none" );

			this._proportionallyResizeElements.push( this.originalElement.css( {
				position: "static",
				zoom: 1,
				display: "block"
			} ) );

			// Support: IE9
			// avoid IE jump (hard set the margin)
			this.originalElement.css( margins );

			this._proportionallyResize();
		}

		this._setupHandles();

		if ( o.autoHide ) {
			$( this.element )
				.on( "mouseenter", function() {
					if ( o.disabled ) {
						return;
					}
					that._removeClass( "ui-resizable-autohide" );
					that._handles.show();
				} )
				.on( "mouseleave", function() {
					if ( o.disabled ) {
						return;
					}
					if ( !that.resizing ) {
						that._addClass( "ui-resizable-autohide" );
						that._handles.hide();
					}
				} );
		}

		this._mouseInit();
	},

	_destroy: function() {

		this._mouseDestroy();

		var wrapper,
			_destroy = function( exp ) {
				$( exp )
					.removeData( "resizable" )
					.removeData( "ui-resizable" )
					.off( ".resizable" )
					.find( ".ui-resizable-handle" )
						.remove();
			};

		// TODO: Unwrap at same DOM position
		if ( this.elementIsWrapper ) {
			_destroy( this.element );
			wrapper = this.element;
			this.originalElement.css( {
				position: wrapper.css( "position" ),
				width: wrapper.outerWidth(),
				height: wrapper.outerHeight(),
				top: wrapper.css( "top" ),
				left: wrapper.css( "left" )
			} ).insertAfter( wrapper );
			wrapper.remove();
		}

		this.originalElement.css( "resize", this.originalResizeStyle );
		_destroy( this.originalElement );

		return this;
	},

	_setOption: function( key, value ) {
		this._super( key, value );

		switch ( key ) {
		case "handles":
			this._removeHandles();
			this._setupHandles();
			break;
		default:
			break;
		}
	},

	_setupHandles: function() {
		var o = this.options, handle, i, n, hname, axis, that = this;
		this.handles = o.handles ||
			( !$( ".ui-resizable-handle", this.element ).length ?
				"e,s,se" : {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} );

		this._handles = $();
		if ( this.handles.constructor === String ) {

			if ( this.handles === "all" ) {
				this.handles = "n,e,s,w,se,sw,ne,nw";
			}

			n = this.handles.split( "," );
			this.handles = {};

			for ( i = 0; i < n.length; i++ ) {

				handle = $.trim( n[ i ] );
				hname = "ui-resizable-" + handle;
				axis = $( "<div>" );
				this._addClass( axis, "ui-resizable-handle " + hname );

				axis.css( { zIndex: o.zIndex } );

				this.handles[ handle ] = ".ui-resizable-" + handle;
				this.element.append( axis );
			}

		}

		this._renderAxis = function( target ) {

			var i, axis, padPos, padWrapper;

			target = target || this.element;

			for ( i in this.handles ) {

				if ( this.handles[ i ].constructor === String ) {
					this.handles[ i ] = this.element.children( this.handles[ i ] ).first().show();
				} else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
					this.handles[ i ] = $( this.handles[ i ] );
					this._on( this.handles[ i ], { "mousedown": that._mouseDown } );
				}

				if ( this.elementIsWrapper &&
						this.originalElement[ 0 ]
							.nodeName
							.match( /^(textarea|input|select|button)$/i ) ) {
					axis = $( this.handles[ i ], this.element );

					padWrapper = /sw|ne|nw|se|n|s/.test( i ) ?
						axis.outerHeight() :
						axis.outerWidth();

					padPos = [ "padding",
						/ne|nw|n/.test( i ) ? "Top" :
						/se|sw|s/.test( i ) ? "Bottom" :
						/^e$/.test( i ) ? "Right" : "Left" ].join( "" );

					target.css( padPos, padWrapper );

					this._proportionallyResize();
				}

				this._handles = this._handles.add( this.handles[ i ] );
			}
		};

		// TODO: make renderAxis a prototype function
		this._renderAxis( this.element );

		this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
		this._handles.disableSelection();

		this._handles.on( "mouseover", function() {
			if ( !that.resizing ) {
				if ( this.className ) {
					axis = this.className.match( /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i );
				}
				that.axis = axis && axis[ 1 ] ? axis[ 1 ] : "se";
			}
		} );

		if ( o.autoHide ) {
			this._handles.hide();
			this._addClass( "ui-resizable-autohide" );
		}
	},

	_removeHandles: function() {
		this._handles.remove();
	},

	_mouseCapture: function( event ) {
		var i, handle,
			capture = false;

		for ( i in this.handles ) {
			handle = $( this.handles[ i ] )[ 0 ];
			if ( handle === event.target || $.contains( handle, event.target ) ) {
				capture = true;
			}
		}

		return !this.options.disabled && capture;
	},

	_mouseStart: function( event ) {

		var curleft, curtop, cursor,
			o = this.options,
			el = this.element;

		this.resizing = true;

		this._renderProxy();

		curleft = this._num( this.helper.css( "left" ) );
		curtop = this._num( this.helper.css( "top" ) );

		if ( o.containment ) {
			curleft += $( o.containment ).scrollLeft() || 0;
			curtop += $( o.containment ).scrollTop() || 0;
		}

		this.offset = this.helper.offset();
		this.position = { left: curleft, top: curtop };

		this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.originalSize = this._helper ? {
				width: el.outerWidth(),
				height: el.outerHeight()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.sizeDiff = {
			width: el.outerWidth() - el.width(),
			height: el.outerHeight() - el.height()
		};

		this.originalPosition = { left: curleft, top: curtop };
		this.originalMousePosition = { left: event.pageX, top: event.pageY };

		this.aspectRatio = ( typeof o.aspectRatio === "number" ) ?
			o.aspectRatio :
			( ( this.originalSize.width / this.originalSize.height ) || 1 );

		cursor = $( ".ui-resizable-" + this.axis ).css( "cursor" );
		$( "body" ).css( "cursor", cursor === "auto" ? this.axis + "-resize" : cursor );

		this._addClass( "ui-resizable-resizing" );
		this._propagate( "start", event );
		return true;
	},

	_mouseDrag: function( event ) {

		var data, props,
			smp = this.originalMousePosition,
			a = this.axis,
			dx = ( event.pageX - smp.left ) || 0,
			dy = ( event.pageY - smp.top ) || 0,
			trigger = this._change[ a ];

		this._updatePrevProperties();

		if ( !trigger ) {
			return false;
		}

		data = trigger.apply( this, [ event, dx, dy ] );

		this._updateVirtualBoundaries( event.shiftKey );
		if ( this._aspectRatio || event.shiftKey ) {
			data = this._updateRatio( data, event );
		}

		data = this._respectSize( data, event );

		this._updateCache( data );

		this._propagate( "resize", event );

		props = this._applyChanges();

		if ( !this._helper && this._proportionallyResizeElements.length ) {
			this._proportionallyResize();
		}

		if ( !$.isEmptyObject( props ) ) {
			this._updatePrevProperties();
			this._trigger( "resize", event, this.ui() );
			this._applyChanges();
		}

		return false;
	},

	_mouseStop: function( event ) {

		this.resizing = false;
		var pr, ista, soffseth, soffsetw, s, left, top,
			o = this.options, that = this;

		if ( this._helper ) {

			pr = this._proportionallyResizeElements;
			ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName );
			soffseth = ista && this._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height;
			soffsetw = ista ? 0 : that.sizeDiff.width;

			s = {
				width: ( that.helper.width()  - soffsetw ),
				height: ( that.helper.height() - soffseth )
			};
			left = ( parseFloat( that.element.css( "left" ) ) +
				( that.position.left - that.originalPosition.left ) ) || null;
			top = ( parseFloat( that.element.css( "top" ) ) +
				( that.position.top - that.originalPosition.top ) ) || null;

			if ( !o.animate ) {
				this.element.css( $.extend( s, { top: top, left: left } ) );
			}

			that.helper.height( that.size.height );
			that.helper.width( that.size.width );

			if ( this._helper && !o.animate ) {
				this._proportionallyResize();
			}
		}

		$( "body" ).css( "cursor", "auto" );

		this._removeClass( "ui-resizable-resizing" );

		this._propagate( "stop", event );

		if ( this._helper ) {
			this.helper.remove();
		}

		return false;

	},

	_updatePrevProperties: function() {
		this.prevPosition = {
			top: this.position.top,
			left: this.position.left
		};
		this.prevSize = {
			width: this.size.width,
			height: this.size.height
		};
	},

	_applyChanges: function() {
		var props = {};

		if ( this.position.top !== this.prevPosition.top ) {
			props.top = this.position.top + "px";
		}
		if ( this.position.left !== this.prevPosition.left ) {
			props.left = this.position.left + "px";
		}
		if ( this.size.width !== this.prevSize.width ) {
			props.width = this.size.width + "px";
		}
		if ( this.size.height !== this.prevSize.height ) {
			props.height = this.size.height + "px";
		}

		this.helper.css( props );

		return props;
	},

	_updateVirtualBoundaries: function( forceAspectRatio ) {
		var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
			o = this.options;

		b = {
			minWidth: this._isNumber( o.minWidth ) ? o.minWidth : 0,
			maxWidth: this._isNumber( o.maxWidth ) ? o.maxWidth : Infinity,
			minHeight: this._isNumber( o.minHeight ) ? o.minHeight : 0,
			maxHeight: this._isNumber( o.maxHeight ) ? o.maxHeight : Infinity
		};

		if ( this._aspectRatio || forceAspectRatio ) {
			pMinWidth = b.minHeight * this.aspectRatio;
			pMinHeight = b.minWidth / this.aspectRatio;
			pMaxWidth = b.maxHeight * this.aspectRatio;
			pMaxHeight = b.maxWidth / this.aspectRatio;

			if ( pMinWidth > b.minWidth ) {
				b.minWidth = pMinWidth;
			}
			if ( pMinHeight > b.minHeight ) {
				b.minHeight = pMinHeight;
			}
			if ( pMaxWidth < b.maxWidth ) {
				b.maxWidth = pMaxWidth;
			}
			if ( pMaxHeight < b.maxHeight ) {
				b.maxHeight = pMaxHeight;
			}
		}
		this._vBoundaries = b;
	},

	_updateCache: function( data ) {
		this.offset = this.helper.offset();
		if ( this._isNumber( data.left ) ) {
			this.position.left = data.left;
		}
		if ( this._isNumber( data.top ) ) {
			this.position.top = data.top;
		}
		if ( this._isNumber( data.height ) ) {
			this.size.height = data.height;
		}
		if ( this._isNumber( data.width ) ) {
			this.size.width = data.width;
		}
	},

	_updateRatio: function( data ) {

		var cpos = this.position,
			csize = this.size,
			a = this.axis;

		if ( this._isNumber( data.height ) ) {
			data.width = ( data.height * this.aspectRatio );
		} else if ( this._isNumber( data.width ) ) {
			data.height = ( data.width / this.aspectRatio );
		}

		if ( a === "sw" ) {
			data.left = cpos.left + ( csize.width - data.width );
			data.top = null;
		}
		if ( a === "nw" ) {
			data.top = cpos.top + ( csize.height - data.height );
			data.left = cpos.left + ( csize.width - data.width );
		}

		return data;
	},

	_respectSize: function( data ) {

		var o = this._vBoundaries,
			a = this.axis,
			ismaxw = this._isNumber( data.width ) && o.maxWidth && ( o.maxWidth < data.width ),
			ismaxh = this._isNumber( data.height ) && o.maxHeight && ( o.maxHeight < data.height ),
			isminw = this._isNumber( data.width ) && o.minWidth && ( o.minWidth > data.width ),
			isminh = this._isNumber( data.height ) && o.minHeight && ( o.minHeight > data.height ),
			dw = this.originalPosition.left + this.originalSize.width,
			dh = this.originalPosition.top + this.originalSize.height,
			cw = /sw|nw|w/.test( a ), ch = /nw|ne|n/.test( a );
		if ( isminw ) {
			data.width = o.minWidth;
		}
		if ( isminh ) {
			data.height = o.minHeight;
		}
		if ( ismaxw ) {
			data.width = o.maxWidth;
		}
		if ( ismaxh ) {
			data.height = o.maxHeight;
		}

		if ( isminw && cw ) {
			data.left = dw - o.minWidth;
		}
		if ( ismaxw && cw ) {
			data.left = dw - o.maxWidth;
		}
		if ( isminh && ch ) {
			data.top = dh - o.minHeight;
		}
		if ( ismaxh && ch ) {
			data.top = dh - o.maxHeight;
		}

		// Fixing jump error on top/left - bug #2330
		if ( !data.width && !data.height && !data.left && data.top ) {
			data.top = null;
		} else if ( !data.width && !data.height && !data.top && data.left ) {
			data.left = null;
		}

		return data;
	},

	_getPaddingPlusBorderDimensions: function( element ) {
		var i = 0,
			widths = [],
			borders = [
				element.css( "borderTopWidth" ),
				element.css( "borderRightWidth" ),
				element.css( "borderBottomWidth" ),
				element.css( "borderLeftWidth" )
			],
			paddings = [
				element.css( "paddingTop" ),
				element.css( "paddingRight" ),
				element.css( "paddingBottom" ),
				element.css( "paddingLeft" )
			];

		for ( ; i < 4; i++ ) {
			widths[ i ] = ( parseFloat( borders[ i ] ) || 0 );
			widths[ i ] += ( parseFloat( paddings[ i ] ) || 0 );
		}

		return {
			height: widths[ 0 ] + widths[ 2 ],
			width: widths[ 1 ] + widths[ 3 ]
		};
	},

	_proportionallyResize: function() {

		if ( !this._proportionallyResizeElements.length ) {
			return;
		}

		var prel,
			i = 0,
			element = this.helper || this.element;

		for ( ; i < this._proportionallyResizeElements.length; i++ ) {

			prel = this._proportionallyResizeElements[ i ];

			// TODO: Seems like a bug to cache this.outerDimensions
			// considering that we are in a loop.
			if ( !this.outerDimensions ) {
				this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
			}

			prel.css( {
				height: ( element.height() - this.outerDimensions.height ) || 0,
				width: ( element.width() - this.outerDimensions.width ) || 0
			} );

		}

	},

	_renderProxy: function() {

		var el = this.element, o = this.options;
		this.elementOffset = el.offset();

		if ( this._helper ) {

			this.helper = this.helper || $( "<div style='overflow:hidden;'></div>" );

			this._addClass( this.helper, this._helper );
			this.helper.css( {
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++o.zIndex //TODO: Don't modify option
			} );

			this.helper
				.appendTo( "body" )
				.disableSelection();

		} else {
			this.helper = this.element;
		}

	},

	_change: {
		e: function( event, dx ) {
			return { width: this.originalSize.width + dx };
		},
		w: function( event, dx ) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { left: sp.left + dx, width: cs.width - dx };
		},
		n: function( event, dx, dy ) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { top: sp.top + dy, height: cs.height - dy };
		},
		s: function( event, dx, dy ) {
			return { height: this.originalSize.height + dy };
		},
		se: function( event, dx, dy ) {
			return $.extend( this._change.s.apply( this, arguments ),
				this._change.e.apply( this, [ event, dx, dy ] ) );
		},
		sw: function( event, dx, dy ) {
			return $.extend( this._change.s.apply( this, arguments ),
				this._change.w.apply( this, [ event, dx, dy ] ) );
		},
		ne: function( event, dx, dy ) {
			return $.extend( this._change.n.apply( this, arguments ),
				this._change.e.apply( this, [ event, dx, dy ] ) );
		},
		nw: function( event, dx, dy ) {
			return $.extend( this._change.n.apply( this, arguments ),
				this._change.w.apply( this, [ event, dx, dy ] ) );
		}
	},

	_propagate: function( n, event ) {
		$.ui.plugin.call( this, n, [ event, this.ui() ] );
		( n !== "resize" && this._trigger( n, event, this.ui() ) );
	},

	plugins: {},

	ui: function() {
		return {
			originalElement: this.originalElement,
			element: this.element,
			helper: this.helper,
			position: this.position,
			size: this.size,
			originalSize: this.originalSize,
			originalPosition: this.originalPosition
		};
	}

} );

/*
 * Resizable Extensions
 */

$.ui.plugin.add( "resizable", "animate", {

	stop: function( event ) {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			pr = that._proportionallyResizeElements,
			ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName ),
			soffseth = ista && that._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height,
			soffsetw = ista ? 0 : that.sizeDiff.width,
			style = {
				width: ( that.size.width - soffsetw ),
				height: ( that.size.height - soffseth )
			},
			left = ( parseFloat( that.element.css( "left" ) ) +
				( that.position.left - that.originalPosition.left ) ) || null,
			top = ( parseFloat( that.element.css( "top" ) ) +
				( that.position.top - that.originalPosition.top ) ) || null;

		that.element.animate(
			$.extend( style, top && left ? { top: top, left: left } : {} ), {
				duration: o.animateDuration,
				easing: o.animateEasing,
				step: function() {

					var data = {
						width: parseFloat( that.element.css( "width" ) ),
						height: parseFloat( that.element.css( "height" ) ),
						top: parseFloat( that.element.css( "top" ) ),
						left: parseFloat( that.element.css( "left" ) )
					};

					if ( pr && pr.length ) {
						$( pr[ 0 ] ).css( { width: data.width, height: data.height } );
					}

					// Propagating resize, and updating values for each animation step
					that._updateCache( data );
					that._propagate( "resize", event );

				}
			}
		);
	}

} );

$.ui.plugin.add( "resizable", "containment", {

	start: function() {
		var element, p, co, ch, cw, width, height,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			el = that.element,
			oc = o.containment,
			ce = ( oc instanceof $ ) ?
				oc.get( 0 ) :
				( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

		if ( !ce ) {
			return;
		}

		that.containerElement = $( ce );

		if ( /document/.test( oc ) || oc === document ) {
			that.containerOffset = {
				left: 0,
				top: 0
			};
			that.containerPosition = {
				left: 0,
				top: 0
			};

			that.parentData = {
				element: $( document ),
				left: 0,
				top: 0,
				width: $( document ).width(),
				height: $( document ).height() || document.body.parentNode.scrollHeight
			};
		} else {
			element = $( ce );
			p = [];
			$( [ "Top", "Right", "Left", "Bottom" ] ).each( function( i, name ) {
				p[ i ] = that._num( element.css( "padding" + name ) );
			} );

			that.containerOffset = element.offset();
			that.containerPosition = element.position();
			that.containerSize = {
				height: ( element.innerHeight() - p[ 3 ] ),
				width: ( element.innerWidth() - p[ 1 ] )
			};

			co = that.containerOffset;
			ch = that.containerSize.height;
			cw = that.containerSize.width;
			width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
			height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

			that.parentData = {
				element: ce,
				left: co.left,
				top: co.top,
				width: width,
				height: height
			};
		}
	},

	resize: function( event ) {
		var woset, hoset, isParent, isOffsetRelative,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cp = that.position,
			pRatio = that._aspectRatio || event.shiftKey,
			cop = {
				top: 0,
				left: 0
			},
			ce = that.containerElement,
			continueResize = true;

		if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
			cop = co;
		}

		if ( cp.left < ( that._helper ? co.left : 0 ) ) {
			that.size.width = that.size.width +
				( that._helper ?
					( that.position.left - co.left ) :
					( that.position.left - cop.left ) );

			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
			that.position.left = o.helper ? co.left : 0;
		}

		if ( cp.top < ( that._helper ? co.top : 0 ) ) {
			that.size.height = that.size.height +
				( that._helper ?
					( that.position.top - co.top ) :
					that.position.top );

			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
			that.position.top = that._helper ? co.top : 0;
		}

		isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
		isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

		if ( isParent && isOffsetRelative ) {
			that.offset.left = that.parentData.left + that.position.left;
			that.offset.top = that.parentData.top + that.position.top;
		} else {
			that.offset.left = that.element.offset().left;
			that.offset.top = that.element.offset().top;
		}

		woset = Math.abs( that.sizeDiff.width +
			( that._helper ?
				that.offset.left - cop.left :
				( that.offset.left - co.left ) ) );

		hoset = Math.abs( that.sizeDiff.height +
			( that._helper ?
				that.offset.top - cop.top :
				( that.offset.top - co.top ) ) );

		if ( woset + that.size.width >= that.parentData.width ) {
			that.size.width = that.parentData.width - woset;
			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
		}

		if ( hoset + that.size.height >= that.parentData.height ) {
			that.size.height = that.parentData.height - hoset;
			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
		}

		if ( !continueResize ) {
			that.position.left = that.prevPosition.left;
			that.position.top = that.prevPosition.top;
			that.size.width = that.prevSize.width;
			that.size.height = that.prevSize.height;
		}
	},

	stop: function() {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cop = that.containerPosition,
			ce = that.containerElement,
			helper = $( that.helper ),
			ho = helper.offset(),
			w = helper.outerWidth() - that.sizeDiff.width,
			h = helper.outerHeight() - that.sizeDiff.height;

		if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
			$( this ).css( {
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			} );
		}

		if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
			$( this ).css( {
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			} );
		}
	}
} );

$.ui.plugin.add( "resizable", "alsoResize", {

	start: function() {
		var that = $( this ).resizable( "instance" ),
			o = that.options;

		$( o.alsoResize ).each( function() {
			var el = $( this );
			el.data( "ui-resizable-alsoresize", {
				width: parseFloat( el.width() ), height: parseFloat( el.height() ),
				left: parseFloat( el.css( "left" ) ), top: parseFloat( el.css( "top" ) )
			} );
		} );
	},

	resize: function( event, ui ) {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			os = that.originalSize,
			op = that.originalPosition,
			delta = {
				height: ( that.size.height - os.height ) || 0,
				width: ( that.size.width - os.width ) || 0,
				top: ( that.position.top - op.top ) || 0,
				left: ( that.position.left - op.left ) || 0
			};

			$( o.alsoResize ).each( function() {
				var el = $( this ), start = $( this ).data( "ui-resizable-alsoresize" ), style = {},
					css = el.parents( ui.originalElement[ 0 ] ).length ?
							[ "width", "height" ] :
							[ "width", "height", "top", "left" ];

				$.each( css, function( i, prop ) {
					var sum = ( start[ prop ] || 0 ) + ( delta[ prop ] || 0 );
					if ( sum && sum >= 0 ) {
						style[ prop ] = sum || null;
					}
				} );

				el.css( style );
			} );
	},

	stop: function() {
		$( this ).removeData( "ui-resizable-alsoresize" );
	}
} );

$.ui.plugin.add( "resizable", "ghost", {

	start: function() {

		var that = $( this ).resizable( "instance" ), cs = that.size;

		that.ghost = that.originalElement.clone();
		that.ghost.css( {
			opacity: 0.25,
			display: "block",
			position: "relative",
			height: cs.height,
			width: cs.width,
			margin: 0,
			left: 0,
			top: 0
		} );

		that._addClass( that.ghost, "ui-resizable-ghost" );

		// DEPRECATED
		// TODO: remove after 1.12
		if ( $.uiBackCompat !== false && typeof that.options.ghost === "string" ) {

			// Ghost option
			that.ghost.addClass( this.options.ghost );
		}

		that.ghost.appendTo( that.helper );

	},

	resize: function() {
		var that = $( this ).resizable( "instance" );
		if ( that.ghost ) {
			that.ghost.css( {
				position: "relative",
				height: that.size.height,
				width: that.size.width
			} );
		}
	},

	stop: function() {
		var that = $( this ).resizable( "instance" );
		if ( that.ghost && that.helper ) {
			that.helper.get( 0 ).removeChild( that.ghost.get( 0 ) );
		}
	}

} );

$.ui.plugin.add( "resizable", "grid", {

	resize: function() {
		var outerDimensions,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			cs = that.size,
			os = that.originalSize,
			op = that.originalPosition,
			a = that.axis,
			grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
			gridX = ( grid[ 0 ] || 1 ),
			gridY = ( grid[ 1 ] || 1 ),
			ox = Math.round( ( cs.width - os.width ) / gridX ) * gridX,
			oy = Math.round( ( cs.height - os.height ) / gridY ) * gridY,
			newWidth = os.width + ox,
			newHeight = os.height + oy,
			isMaxWidth = o.maxWidth && ( o.maxWidth < newWidth ),
			isMaxHeight = o.maxHeight && ( o.maxHeight < newHeight ),
			isMinWidth = o.minWidth && ( o.minWidth > newWidth ),
			isMinHeight = o.minHeight && ( o.minHeight > newHeight );

		o.grid = grid;

		if ( isMinWidth ) {
			newWidth += gridX;
		}
		if ( isMinHeight ) {
			newHeight += gridY;
		}
		if ( isMaxWidth ) {
			newWidth -= gridX;
		}
		if ( isMaxHeight ) {
			newHeight -= gridY;
		}

		if ( /^(se|s|e)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
		} else if ( /^(ne)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.top = op.top - oy;
		} else if ( /^(sw)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.left = op.left - ox;
		} else {
			if ( newHeight - gridY <= 0 || newWidth - gridX <= 0 ) {
				outerDimensions = that._getPaddingPlusBorderDimensions( this );
			}

			if ( newHeight - gridY > 0 ) {
				that.size.height = newHeight;
				that.position.top = op.top - oy;
			} else {
				newHeight = gridY - outerDimensions.height;
				that.size.height = newHeight;
				that.position.top = op.top + os.height - newHeight;
			}
			if ( newWidth - gridX > 0 ) {
				that.size.width = newWidth;
				that.position.left = op.left - ox;
			} else {
				newWidth = gridX - outerDimensions.width;
				that.size.width = newWidth;
				that.position.left = op.left + os.width - newWidth;
			}
		}
	}

} );

return $.ui.resizable;

} ) );


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jsTree - v3.3.4 - 2017-04-06 - (MIT) */
!function(a){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a,b){"use strict";if(!a.jstree){var c=0,d=!1,e=!1,f=!1,g=[],h=a("script:last").attr("src"),i=window.document;a.jstree={version:"3.3.4",defaults:{plugins:[]},plugins:{},path:h&&-1!==h.indexOf("/")?h.replace(/\/[^\/]+$/,""):"",idregex:/[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,root:"#"},a.jstree.create=function(b,d){var e=new a.jstree.core(++c),f=d;return d=a.extend(!0,{},a.jstree.defaults,d),f&&f.plugins&&(d.plugins=f.plugins),a.each(d.plugins,function(a,b){"core"!==a&&(e=e.plugin(b,d[b]))}),a(b).data("jstree",e),e.init(b,d),e},a.jstree.destroy=function(){a(".jstree:jstree").jstree("destroy"),a(i).off(".jstree")},a.jstree.core=function(a){this._id=a,this._cnt=0,this._wrk=null,this._data={core:{themes:{name:!1,dots:!1,icons:!1,ellipsis:!1},selected:[],last_error:{},working:!1,worker_queue:[],focused:null}}},a.jstree.reference=function(b){var c=null,d=null;if(!b||!b.id||b.tagName&&b.nodeType||(b=b.id),!d||!d.length)try{d=a(b)}catch(e){}if(!d||!d.length)try{d=a("#"+b.replace(a.jstree.idregex,"\\$&"))}catch(e){}return d&&d.length&&(d=d.closest(".jstree")).length&&(d=d.data("jstree"))?c=d:a(".jstree").each(function(){var d=a(this).data("jstree");return d&&d._model.data[b]?(c=d,!1):void 0}),c},a.fn.jstree=function(c){var d="string"==typeof c,e=Array.prototype.slice.call(arguments,1),f=null;return c!==!0||this.length?(this.each(function(){var g=a.jstree.reference(this),h=d&&g?g[c]:null;return f=d&&h?h.apply(g,e):null,g||d||c!==b&&!a.isPlainObject(c)||a.jstree.create(this,c),(g&&!d||c===!0)&&(f=g||!1),null!==f&&f!==b?!1:void 0}),null!==f&&f!==b?f:this):!1},a.expr.pseudos.jstree=a.expr.createPseudo(function(c){return function(c){return a(c).hasClass("jstree")&&a(c).data("jstree")!==b}}),a.jstree.defaults.core={data:!1,strings:!1,check_callback:!1,error:a.noop,animation:200,multiple:!0,themes:{name:!1,url:!1,dir:!1,dots:!0,icons:!0,ellipsis:!1,stripes:!1,variant:!1,responsive:!1},expand_selected_onload:!0,worker:!0,force_text:!1,dblclick_toggle:!0},a.jstree.core.prototype={plugin:function(b,c){var d=a.jstree.plugins[b];return d?(this._data[b]={},d.prototype=this,new d(c,this)):this},init:function(b,c){this._model={data:{},changed:[],force_full_redraw:!1,redraw_timeout:!1,default_state:{loaded:!0,opened:!1,selected:!1,disabled:!1}},this._model.data[a.jstree.root]={id:a.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this.element=a(b).addClass("jstree jstree-"+this._id),this.settings=c,this._data.core.ready=!1,this._data.core.loaded=!1,this._data.core.rtl="rtl"===this.element.css("direction"),this.element[this._data.core.rtl?"addClass":"removeClass"]("jstree-rtl"),this.element.attr("role","tree"),this.settings.core.multiple&&this.element.attr("aria-multiselectable",!0),this.element.attr("tabindex")||this.element.attr("tabindex","0"),this.bind(),this.trigger("init"),this._data.core.original_container_html=this.element.find(" > ul > li").clone(!0),this._data.core.original_container_html.find("li").addBack().contents().filter(function(){return 3===this.nodeType&&(!this.nodeValue||/^\s+$/.test(this.nodeValue))}).remove(),this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j"+this._id+"_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='tree-item'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading"),this._data.core.li_height=this.get_container_ul().children("li").first().outerHeight()||24,this._data.core.node=this._create_prototype_node(),this.trigger("loading"),this.load_node(a.jstree.root)},destroy:function(a){if(this.trigger("destroy"),this._wrk)try{window.URL.revokeObjectURL(this._wrk),this._wrk=null}catch(b){}a||this.element.empty(),this.teardown()},_create_prototype_node:function(){var a=i.createElement("LI"),b,c;return a.setAttribute("role","treeitem"),b=i.createElement("I"),b.className="jstree-icon jstree-ocl",b.setAttribute("role","presentation"),a.appendChild(b),b=i.createElement("A"),b.className="jstree-anchor",b.setAttribute("href","#"),b.setAttribute("tabindex","-1"),c=i.createElement("I"),c.className="jstree-icon jstree-themeicon",c.setAttribute("role","presentation"),b.appendChild(c),a.appendChild(b),b=c=null,a},teardown:function(){this.unbind(),this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class",function(){return this.className.replace(/jstree[^ ]*|$/gi,"")}),this.element=null},bind:function(){var b="",c=null,d=0;this.element.on("dblclick.jstree",function(a){if(a.target.tagName&&"input"===a.target.tagName.toLowerCase())return!0;if(i.selection&&i.selection.empty)i.selection.empty();else if(window.getSelection){var b=window.getSelection();try{b.removeAllRanges(),b.collapse()}catch(c){}}}).on("mousedown.jstree",a.proxy(function(a){a.target===this.element[0]&&(a.preventDefault(),d=+new Date)},this)).on("mousedown.jstree",".jstree-ocl",function(a){a.preventDefault()}).on("click.jstree",".jstree-ocl",a.proxy(function(a){this.toggle_node(a.target)},this)).on("dblclick.jstree",".jstree-anchor",a.proxy(function(a){return a.target.tagName&&"input"===a.target.tagName.toLowerCase()?!0:void(this.settings.core.dblclick_toggle&&this.toggle_node(a.target))},this)).on("click.jstree",".jstree-anchor",a.proxy(function(b){b.preventDefault(),b.currentTarget!==i.activeElement&&a(b.currentTarget).focus(),this.activate_node(b.currentTarget,b)},this)).on("keydown.jstree",".jstree-anchor",a.proxy(function(b){if(b.target.tagName&&"input"===b.target.tagName.toLowerCase())return!0;if(32!==b.which&&13!==b.which&&(b.shiftKey||b.ctrlKey||b.altKey||b.metaKey))return!0;var c=null;switch(this._data.core.rtl&&(37===b.which?b.which=39:39===b.which&&(b.which=37)),b.which){case 32:b.ctrlKey&&(b.type="click",a(b.currentTarget).trigger(b));break;case 13:b.type="click",a(b.currentTarget).trigger(b);break;case 37:b.preventDefault(),this.is_open(b.currentTarget)?this.close_node(b.currentTarget):(c=this.get_parent(b.currentTarget),c&&c.id!==a.jstree.root&&this.get_node(c,!0).children(".jstree-anchor").focus());break;case 38:b.preventDefault(),c=this.get_prev_dom(b.currentTarget),c&&c.length&&c.children(".jstree-anchor").focus();break;case 39:b.preventDefault(),this.is_closed(b.currentTarget)?this.open_node(b.currentTarget,function(a){this.get_node(a,!0).children(".jstree-anchor").focus()}):this.is_open(b.currentTarget)&&(c=this.get_node(b.currentTarget,!0).children(".jstree-children")[0],c&&a(this._firstChild(c)).children(".jstree-anchor").focus());break;case 40:b.preventDefault(),c=this.get_next_dom(b.currentTarget),c&&c.length&&c.children(".jstree-anchor").focus();break;case 106:this.open_all();break;case 36:b.preventDefault(),c=this._firstChild(this.get_container_ul()[0]),c&&a(c).children(".jstree-anchor").filter(":visible").focus();break;case 35:b.preventDefault(),this.element.find(".jstree-anchor").filter(":visible").last().focus();break;case 113:b.preventDefault(),this.edit(b.currentTarget)}},this)).on("load_node.jstree",a.proxy(function(b,c){c.status&&(c.node.id!==a.jstree.root||this._data.core.loaded||(this._data.core.loaded=!0,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.trigger("loaded")),this._data.core.ready||setTimeout(a.proxy(function(){if(this.element&&!this.get_container_ul().find(".jstree-loading").length){if(this._data.core.ready=!0,this._data.core.selected.length){if(this.settings.core.expand_selected_onload){var b=[],c,d;for(c=0,d=this._data.core.selected.length;d>c;c++)b=b.concat(this._model.data[this._data.core.selected[c]].parents);for(b=a.vakata.array_unique(b),c=0,d=b.length;d>c;c++)this.open_node(b[c],!1,0)}this.trigger("changed",{action:"ready",selected:this._data.core.selected})}this.trigger("ready")}},this),0))},this)).on("keypress.jstree",a.proxy(function(d){if(d.target.tagName&&"input"===d.target.tagName.toLowerCase())return!0;c&&clearTimeout(c),c=setTimeout(function(){b=""},500);var e=String.fromCharCode(d.which).toLowerCase(),f=this.element.find(".jstree-anchor").filter(":visible"),g=f.index(i.activeElement)||0,h=!1;if(b+=e,b.length>1){if(f.slice(g).each(a.proxy(function(c,d){return 0===a(d).text().toLowerCase().indexOf(b)?(a(d).focus(),h=!0,!1):void 0},this)),h)return;if(f.slice(0,g).each(a.proxy(function(c,d){return 0===a(d).text().toLowerCase().indexOf(b)?(a(d).focus(),h=!0,!1):void 0},this)),h)return}if(new RegExp("^"+e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+"+$").test(b)){if(f.slice(g+1).each(a.proxy(function(b,c){return a(c).text().toLowerCase().charAt(0)===e?(a(c).focus(),h=!0,!1):void 0},this)),h)return;if(f.slice(0,g+1).each(a.proxy(function(b,c){return a(c).text().toLowerCase().charAt(0)===e?(a(c).focus(),h=!0,!1):void 0},this)),h)return}},this)).on("init.jstree",a.proxy(function(){var a=this.settings.core.themes;this._data.core.themes.dots=a.dots,this._data.core.themes.stripes=a.stripes,this._data.core.themes.icons=a.icons,this._data.core.themes.ellipsis=a.ellipsis,this.set_theme(a.name||"default",a.url),this.set_theme_variant(a.variant)},this)).on("loading.jstree",a.proxy(function(){this[this._data.core.themes.dots?"show_dots":"hide_dots"](),this[this._data.core.themes.icons?"show_icons":"hide_icons"](),this[this._data.core.themes.stripes?"show_stripes":"hide_stripes"](),this[this._data.core.themes.ellipsis?"show_ellipsis":"hide_ellipsis"]()},this)).on("blur.jstree",".jstree-anchor",a.proxy(function(b){this._data.core.focused=null,a(b.currentTarget).filter(".jstree-hovered").mouseleave(),this.element.attr("tabindex","0")},this)).on("focus.jstree",".jstree-anchor",a.proxy(function(b){var c=this.get_node(b.currentTarget);c&&c.id&&(this._data.core.focused=c.id),this.element.find(".jstree-hovered").not(b.currentTarget).mouseleave(),a(b.currentTarget).mouseenter(),this.element.attr("tabindex","-1")},this)).on("focus.jstree",a.proxy(function(){if(+new Date-d>500&&!this._data.core.focused){d=0;var a=this.get_node(this.element.attr("aria-activedescendant"),!0);a&&a.find("> .jstree-anchor").focus()}},this)).on("mouseenter.jstree",".jstree-anchor",a.proxy(function(a){this.hover_node(a.currentTarget)},this)).on("mouseleave.jstree",".jstree-anchor",a.proxy(function(a){this.dehover_node(a.currentTarget)},this))},unbind:function(){this.element.off(".jstree"),a(i).off(".jstree-"+this._id)},trigger:function(a,b){b||(b={}),b.instance=this,this.element.triggerHandler(a.replace(".jstree","")+".jstree",b)},get_container:function(){return this.element},get_container_ul:function(){return this.element.children(".jstree-children").first()},get_string:function(b){var c=this.settings.core.strings;return a.isFunction(c)?c.call(this,b):c&&c[b]?c[b]:b},_firstChild:function(a){a=a?a.firstChild:null;while(null!==a&&1!==a.nodeType)a=a.nextSibling;return a},_nextSibling:function(a){a=a?a.nextSibling:null;while(null!==a&&1!==a.nodeType)a=a.nextSibling;return a},_previousSibling:function(a){a=a?a.previousSibling:null;while(null!==a&&1!==a.nodeType)a=a.previousSibling;return a},get_node:function(b,c){b&&b.id&&(b=b.id);var d;try{if(this._model.data[b])b=this._model.data[b];else if("string"==typeof b&&this._model.data[b.replace(/^#/,"")])b=this._model.data[b.replace(/^#/,"")];else if("string"==typeof b&&(d=a("#"+b.replace(a.jstree.idregex,"\\$&"),this.element)).length&&this._model.data[d.closest(".jstree-node").attr("id")])b=this._model.data[d.closest(".jstree-node").attr("id")];else if((d=a(b,this.element)).length&&this._model.data[d.closest(".jstree-node").attr("id")])b=this._model.data[d.closest(".jstree-node").attr("id")];else{if(!(d=a(b,this.element)).length||!d.hasClass("jstree"))return!1;b=this._model.data[a.jstree.root]}return c&&(b=b.id===a.jstree.root?this.element:a("#"+b.id.replace(a.jstree.idregex,"\\$&"),this.element)),b}catch(e){return!1}},get_path:function(b,c,d){if(b=b.parents?b:this.get_node(b),!b||b.id===a.jstree.root||!b.parents)return!1;var e,f,g=[];for(g.push(d?b.id:b.text),e=0,f=b.parents.length;f>e;e++)g.push(d?b.parents[e]:this.get_text(b.parents[e]));return g=g.reverse().slice(1),c?g.join(c):g},get_next_dom:function(b,c){var d;if(b=this.get_node(b,!0),b[0]===this.element[0]){d=this._firstChild(this.get_container_ul()[0]);while(d&&0===d.offsetHeight)d=this._nextSibling(d);return d?a(d):!1}if(!b||!b.length)return!1;if(c){d=b[0];do d=this._nextSibling(d);while(d&&0===d.offsetHeight);return d?a(d):!1}if(b.hasClass("jstree-open")){d=this._firstChild(b.children(".jstree-children")[0]);while(d&&0===d.offsetHeight)d=this._nextSibling(d);if(null!==d)return a(d)}d=b[0];do d=this._nextSibling(d);while(d&&0===d.offsetHeight);return null!==d?a(d):b.parentsUntil(".jstree",".jstree-node").nextAll(".jstree-node:visible").first()},get_prev_dom:function(b,c){var d;if(b=this.get_node(b,!0),b[0]===this.element[0]){d=this.get_container_ul()[0].lastChild;while(d&&0===d.offsetHeight)d=this._previousSibling(d);return d?a(d):!1}if(!b||!b.length)return!1;if(c){d=b[0];do d=this._previousSibling(d);while(d&&0===d.offsetHeight);return d?a(d):!1}d=b[0];do d=this._previousSibling(d);while(d&&0===d.offsetHeight);if(null!==d){b=a(d);while(b.hasClass("jstree-open"))b=b.children(".jstree-children").first().children(".jstree-node:visible:last");return b}return d=b[0].parentNode.parentNode,d&&d.className&&-1!==d.className.indexOf("jstree-node")?a(d):!1},get_parent:function(b){return b=this.get_node(b),b&&b.id!==a.jstree.root?b.parent:!1},get_children_dom:function(a){return a=this.get_node(a,!0),a[0]===this.element[0]?this.get_container_ul().children(".jstree-node"):a&&a.length?a.children(".jstree-children").children(".jstree-node"):!1},is_parent:function(a){return a=this.get_node(a),a&&(a.state.loaded===!1||a.children.length>0)},is_loaded:function(a){return a=this.get_node(a),a&&a.state.loaded},is_loading:function(a){return a=this.get_node(a),a&&a.state&&a.state.loading},is_open:function(a){return a=this.get_node(a),a&&a.state.opened},is_closed:function(a){return a=this.get_node(a),a&&this.is_parent(a)&&!a.state.opened},is_leaf:function(a){return!this.is_parent(a)},load_node:function(b,c){var d,e,f,g,h;if(a.isArray(b))return this._load_nodes(b.slice(),c),!0;if(b=this.get_node(b),!b)return c&&c.call(this,b,!1),!1;if(b.state.loaded){for(b.state.loaded=!1,f=0,g=b.parents.length;g>f;f++)this._model.data[b.parents[f]].children_d=a.vakata.array_filter(this._model.data[b.parents[f]].children_d,function(c){return-1===a.inArray(c,b.children_d)});for(d=0,e=b.children_d.length;e>d;d++)this._model.data[b.children_d[d]].state.selected&&(h=!0),delete this._model.data[b.children_d[d]];h&&(this._data.core.selected=a.vakata.array_filter(this._data.core.selected,function(c){return-1===a.inArray(c,b.children_d)})),b.children=[],b.children_d=[],h&&this.trigger("changed",{action:"load_node",node:b,selected:this._data.core.selected})}return b.state.failed=!1,b.state.loading=!0,this.get_node(b,!0).addClass("jstree-loading").attr("aria-busy",!0),this._load_node(b,a.proxy(function(a){b=this._model.data[b.id],b.state.loading=!1,b.state.loaded=a,b.state.failed=!b.state.loaded;var d=this.get_node(b,!0),e=0,f=0,g=this._model.data,h=!1;for(e=0,f=b.children.length;f>e;e++)if(g[b.children[e]]&&!g[b.children[e]].state.hidden){h=!0;break}b.state.loaded&&d&&d.length&&(d.removeClass("jstree-closed jstree-open jstree-leaf"),h?"#"!==b.id&&d.addClass(b.state.opened?"jstree-open":"jstree-closed"):d.addClass("jstree-leaf")),d.removeClass("jstree-loading").attr("aria-busy",!1),this.trigger("load_node",{node:b,status:a}),c&&c.call(this,b,a)},this)),!0},_load_nodes:function(a,b,c,d){var e=!0,f=function(){this._load_nodes(a,b,!0)},g=this._model.data,h,i,j=[];for(h=0,i=a.length;i>h;h++)g[a[h]]&&(!g[a[h]].state.loaded&&!g[a[h]].state.failed||!c&&d)&&(this.is_loading(a[h])||this.load_node(a[h],f),e=!1);if(e){for(h=0,i=a.length;i>h;h++)g[a[h]]&&g[a[h]].state.loaded&&j.push(a[h]);b&&!b.done&&(b.call(this,j),b.done=!0)}},load_all:function(b,c){if(b||(b=a.jstree.root),b=this.get_node(b),!b)return!1;var d=[],e=this._model.data,f=e[b.id].children_d,g,h;for(b.state&&!b.state.loaded&&d.push(b.id),g=0,h=f.length;h>g;g++)e[f[g]]&&e[f[g]].state&&!e[f[g]].state.loaded&&d.push(f[g]);d.length?this._load_nodes(d,function(){this.load_all(b,c)}):(c&&c.call(this,b),this.trigger("load_all",{node:b}))},_load_node:function(b,c){var d=this.settings.core.data,e,f=function g(){return 3!==this.nodeType&&8!==this.nodeType};return d?a.isFunction(d)?d.call(this,b,a.proxy(function(d){d===!1?c.call(this,!1):this["string"==typeof d?"_append_html_data":"_append_json_data"](b,"string"==typeof d?a(a.parseHTML(d)).filter(f):d,function(a){c.call(this,a)})},this)):"object"==typeof d?d.url?(d=a.extend(!0,{},d),a.isFunction(d.url)&&(d.url=d.url.call(this,b)),a.isFunction(d.data)&&(d.data=d.data.call(this,b)),a.ajax(d).done(a.proxy(function(d,e,g){var h=g.getResponseHeader("Content-Type");return h&&-1!==h.indexOf("json")||"object"==typeof d?this._append_json_data(b,d,function(a){c.call(this,a)}):h&&-1!==h.indexOf("html")||"string"==typeof d?this._append_html_data(b,a(a.parseHTML(d)).filter(f),function(a){c.call(this,a)}):(this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:b.id,xhr:g})},this.settings.core.error.call(this,this._data.core.last_error),c.call(this,!1))},this)).fail(a.proxy(function(a){this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:b.id,xhr:a})},c.call(this,!1),this.settings.core.error.call(this,this._data.core.last_error)},this))):(e=a.isArray(d)?a.extend(!0,[],d):a.isPlainObject(d)?a.extend(!0,{},d):d,b.id===a.jstree.root?this._append_json_data(b,e,function(a){c.call(this,a)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_05",reason:"Could not load node",data:JSON.stringify({id:b.id})},this.settings.core.error.call(this,this._data.core.last_error),c.call(this,!1))):"string"==typeof d?b.id===a.jstree.root?this._append_html_data(b,a(a.parseHTML(d)).filter(f),function(a){c.call(this,a)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_06",reason:"Could not load node",data:JSON.stringify({id:b.id})},this.settings.core.error.call(this,this._data.core.last_error),c.call(this,!1)):c.call(this,!1):b.id===a.jstree.root?this._append_html_data(b,this._data.core.original_container_html.clone(!0),function(a){c.call(this,a)}):c.call(this,!1)},_node_changed:function(a){a=this.get_node(a),a&&this._model.changed.push(a.id)},_append_html_data:function(b,c,d){b=this.get_node(b),b.children=[],b.children_d=[];var e=c.is("ul")?c.children():c,f=b.id,g=[],h=[],i=this._model.data,j=i[f],k=this._data.core.selected.length,l,m,n;for(e.each(a.proxy(function(b,c){l=this._parse_model_from_html(a(c),f,j.parents.concat()),l&&(g.push(l),h.push(l),i[l].children_d.length&&(h=h.concat(i[l].children_d)))},this)),j.children=g,j.children_d=h,m=0,n=j.parents.length;n>m;m++)i[j.parents[m]].children_d=i[j.parents[m]].children_d.concat(h);this.trigger("model",{nodes:h,parent:f}),f!==a.jstree.root?(this._node_changed(f),this.redraw()):(this.get_container_ul().children(".jstree-initial-node").remove(),this.redraw(!0)),this._data.core.selected.length!==k&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),d.call(this,!0)},_append_json_data:function(b,c,d,e){if(null!==this.element){b=this.get_node(b),b.children=[],b.children_d=[],c.d&&(c=c.d,"string"==typeof c&&(c=JSON.parse(c))),a.isArray(c)||(c=[c]);var f=null,g={df:this._model.default_state,dat:c,par:b.id,m:this._model.data,t_id:this._id,t_cnt:this._cnt,sel:this._data.core.selected},h=function(a,b){a.data&&(a=a.data);var c=a.dat,d=a.par,e=[],f=[],g=[],h=a.df,i=a.t_id,j=a.t_cnt,k=a.m,l=k[d],m=a.sel,n,o,p,q,r=function(a,c,d){d=d?d.concat():[],c&&d.unshift(c);var e=a.id.toString(),f,i,j,l,m={id:e,text:a.text||"",icon:a.icon!==b?a.icon:!0,parent:c,parents:d,children:a.children||[],children_d:a.children_d||[],data:a.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(f in h)h.hasOwnProperty(f)&&(m.state[f]=h[f]);if(a&&a.data&&a.data.jstree&&a.data.jstree.icon&&(m.icon=a.data.jstree.icon),(m.icon===b||null===m.icon||""===m.icon)&&(m.icon=!0),a&&a.data&&(m.data=a.data,a.data.jstree))for(f in a.data.jstree)a.data.jstree.hasOwnProperty(f)&&(m.state[f]=a.data.jstree[f]);if(a&&"object"==typeof a.state)for(f in a.state)a.state.hasOwnProperty(f)&&(m.state[f]=a.state[f]);if(a&&"object"==typeof a.li_attr)for(f in a.li_attr)a.li_attr.hasOwnProperty(f)&&(m.li_attr[f]=a.li_attr[f]);if(m.li_attr.id||(m.li_attr.id=e),a&&"object"==typeof a.a_attr)for(f in a.a_attr)a.a_attr.hasOwnProperty(f)&&(m.a_attr[f]=a.a_attr[f]);for(a&&a.children&&a.children===!0&&(m.state.loaded=!1,m.children=[],m.children_d=[]),k[m.id]=m,f=0,i=m.children.length;i>f;f++)j=r(k[m.children[f]],m.id,d),l=k[j],m.children_d.push(j),l.children_d.length&&(m.children_d=m.children_d.concat(l.children_d));return delete a.data,delete a.children,k[m.id].original=a,m.state.selected&&g.push(m.id),m.id},s=function(a,c,d){d=d?d.concat():[],c&&d.unshift(c);var e=!1,f,l,m,n,o;do e="j"+i+"_"+ ++j;while(k[e]);o={id:!1,text:"string"==typeof a?a:"",icon:"object"==typeof a&&a.icon!==b?a.icon:!0,parent:c,parents:d,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(f in h)h.hasOwnProperty(f)&&(o.state[f]=h[f]);if(a&&a.id&&(o.id=a.id.toString()),a&&a.text&&(o.text=a.text),a&&a.data&&a.data.jstree&&a.data.jstree.icon&&(o.icon=a.data.jstree.icon),(o.icon===b||null===o.icon||""===o.icon)&&(o.icon=!0),a&&a.data&&(o.data=a.data,a.data.jstree))for(f in a.data.jstree)a.data.jstree.hasOwnProperty(f)&&(o.state[f]=a.data.jstree[f]);if(a&&"object"==typeof a.state)for(f in a.state)a.state.hasOwnProperty(f)&&(o.state[f]=a.state[f]);if(a&&"object"==typeof a.li_attr)for(f in a.li_attr)a.li_attr.hasOwnProperty(f)&&(o.li_attr[f]=a.li_attr[f]);if(o.li_attr.id&&!o.id&&(o.id=o.li_attr.id.toString()),o.id||(o.id=e),o.li_attr.id||(o.li_attr.id=o.id),a&&"object"==typeof a.a_attr)for(f in a.a_attr)a.a_attr.hasOwnProperty(f)&&(o.a_attr[f]=a.a_attr[f]);if(a&&a.children&&a.children.length){for(f=0,l=a.children.length;l>f;f++)m=s(a.children[f],o.id,d),n=k[m],o.children.push(m),n.children_d.length&&(o.children_d=o.children_d.concat(n.children_d));o.children_d=o.children_d.concat(o.children)}return a&&a.children&&a.children===!0&&(o.state.loaded=!1,o.children=[],o.children_d=[]),delete a.data,delete a.children,o.original=a,k[o.id]=o,o.state.selected&&g.push(o.id),o.id};if(c.length&&c[0].id!==b&&c[0].parent!==b){for(o=0,p=c.length;p>o;o++)c[o].children||(c[o].children=[]),k[c[o].id.toString()]=c[o];for(o=0,p=c.length;p>o;o++)k[c[o].parent.toString()].children.push(c[o].id.toString()),l.children_d.push(c[o].id.toString());for(o=0,p=l.children.length;p>o;o++)n=r(k[l.children[o]],d,l.parents.concat()),f.push(n),k[n].children_d.length&&(f=f.concat(k[n].children_d));for(o=0,p=l.parents.length;p>o;o++)k[l.parents[o]].children_d=k[l.parents[o]].children_d.concat(f);q={cnt:j,mod:k,sel:m,par:d,dpc:f,add:g}}else{for(o=0,p=c.length;p>o;o++)n=s(c[o],d,l.parents.concat()),n&&(e.push(n),f.push(n),k[n].children_d.length&&(f=f.concat(k[n].children_d)));for(l.children=e,l.children_d=f,o=0,p=l.parents.length;p>o;o++)k[l.parents[o]].children_d=k[l.parents[o]].children_d.concat(f);q={cnt:j,mod:k,sel:m,par:d,dpc:f,add:g}}return"undefined"!=typeof window&&"undefined"!=typeof window.document?q:void postMessage(q)},i=function(b,c){if(null!==this.element){this._cnt=b.cnt;var e,f=this._model.data;for(e in f)f.hasOwnProperty(e)&&f[e].state&&f[e].state.loading&&b.mod[e]&&(b.mod[e].state.loading=!0);if(this._model.data=b.mod,c){var g,h=b.add,i=b.sel,j=this._data.core.selected.slice();if(f=this._model.data,i.length!==j.length||a.vakata.array_unique(i.concat(j)).length!==i.length){for(e=0,g=i.length;g>e;e++)-1===a.inArray(i[e],h)&&-1===a.inArray(i[e],j)&&(f[i[e]].state.selected=!1);for(e=0,g=j.length;g>e;e++)-1===a.inArray(j[e],i)&&(f[j[e]].state.selected=!0)}}b.add.length&&(this._data.core.selected=this._data.core.selected.concat(b.add)),this.trigger("model",{nodes:b.dpc,parent:b.par}),b.par!==a.jstree.root?(this._node_changed(b.par),this.redraw()):this.redraw(!0),b.add.length&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),d.call(this,!0)}};if(this.settings.core.worker&&window.Blob&&window.URL&&window.Worker)try{null===this._wrk&&(this._wrk=window.URL.createObjectURL(new window.Blob(["self.onmessage = "+h.toString()],{type:"text/javascript"}))),!this._data.core.working||e?(this._data.core.working=!0,f=new window.Worker(this._wrk),f.onmessage=a.proxy(function(a){i.call(this,a.data,!0);try{f.terminate(),f=null}catch(b){}this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1},this),g.par?f.postMessage(g):this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1):this._data.core.worker_queue.push([b,c,d,!0])}catch(j){i.call(this,h(g),!1),this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1}else i.call(this,h(g),!1)}},_parse_model_from_html:function(c,d,e){e=e?[].concat(e):[],d&&e.unshift(d);var f,g,h=this._model.data,i={id:!1,text:!1,icon:!0,parent:d,parents:e,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},j,k,l;for(j in this._model.default_state)this._model.default_state.hasOwnProperty(j)&&(i.state[j]=this._model.default_state[j]);if(k=a.vakata.attributes(c,!0),a.each(k,function(b,c){return c=a.trim(c),c.length?(i.li_attr[b]=c,void("id"===b&&(i.id=c.toString()))):!0}),k=c.children("a").first(),k.length&&(k=a.vakata.attributes(k,!0),a.each(k,function(b,c){c=a.trim(c),c.length&&(i.a_attr[b]=c)})),k=c.children("a").first().length?c.children("a").first().clone():c.clone(),k.children("ins, i, ul").remove(),k=k.html(),k=a("<div />").html(k),i.text=this.settings.core.force_text?k.text():k.html(),k=c.data(),i.data=k?a.extend(!0,{},k):null,i.state.opened=c.hasClass("jstree-open"),i.state.selected=c.children("a").hasClass("jstree-clicked"),i.state.disabled=c.children("a").hasClass("jstree-disabled"),i.data&&i.data.jstree)for(j in i.data.jstree)i.data.jstree.hasOwnProperty(j)&&(i.state[j]=i.data.jstree[j]);k=c.children("a").children(".jstree-themeicon"),k.length&&(i.icon=k.hasClass("jstree-themeicon-hidden")?!1:k.attr("rel")),i.state.icon!==b&&(i.icon=i.state.icon),(i.icon===b||null===i.icon||""===i.icon)&&(i.icon=!0),k=c.children("ul").children("li");do l="j"+this._id+"_"+ ++this._cnt;while(h[l]);return i.id=i.li_attr.id?i.li_attr.id.toString():l,k.length?(k.each(a.proxy(function(b,c){f=this._parse_model_from_html(a(c),i.id,e),g=this._model.data[f],i.children.push(f),g.children_d.length&&(i.children_d=i.children_d.concat(g.children_d))},this)),i.children_d=i.children_d.concat(i.children)):c.hasClass("jstree-closed")&&(i.state.loaded=!1),i.li_attr["class"]&&(i.li_attr["class"]=i.li_attr["class"].replace("jstree-closed","").replace("jstree-open","")),i.a_attr["class"]&&(i.a_attr["class"]=i.a_attr["class"].replace("jstree-clicked","").replace("jstree-disabled","")),h[i.id]=i,i.state.selected&&this._data.core.selected.push(i.id),i.id},_parse_model_from_flat_json:function(a,c,d){d=d?d.concat():[],c&&d.unshift(c);var e=a.id.toString(),f=this._model.data,g=this._model.default_state,h,i,j,k,l={id:e,text:a.text||"",icon:a.icon!==b?a.icon:!0,parent:c,parents:d,children:a.children||[],children_d:a.children_d||[],data:a.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(h in g)g.hasOwnProperty(h)&&(l.state[h]=g[h]);if(a&&a.data&&a.data.jstree&&a.data.jstree.icon&&(l.icon=a.data.jstree.icon),(l.icon===b||null===l.icon||""===l.icon)&&(l.icon=!0),a&&a.data&&(l.data=a.data,a.data.jstree))for(h in a.data.jstree)a.data.jstree.hasOwnProperty(h)&&(l.state[h]=a.data.jstree[h]);if(a&&"object"==typeof a.state)for(h in a.state)a.state.hasOwnProperty(h)&&(l.state[h]=a.state[h]);if(a&&"object"==typeof a.li_attr)for(h in a.li_attr)a.li_attr.hasOwnProperty(h)&&(l.li_attr[h]=a.li_attr[h]);if(l.li_attr.id||(l.li_attr.id=e),a&&"object"==typeof a.a_attr)for(h in a.a_attr)a.a_attr.hasOwnProperty(h)&&(l.a_attr[h]=a.a_attr[h]);for(a&&a.children&&a.children===!0&&(l.state.loaded=!1,l.children=[],l.children_d=[]),f[l.id]=l,h=0,i=l.children.length;i>h;h++)j=this._parse_model_from_flat_json(f[l.children[h]],l.id,d),k=f[j],l.children_d.push(j),k.children_d.length&&(l.children_d=l.children_d.concat(k.children_d));return delete a.data,delete a.children,f[l.id].original=a,l.state.selected&&this._data.core.selected.push(l.id),l.id},_parse_model_from_json:function(a,c,d){d=d?d.concat():[],c&&d.unshift(c);var e=!1,f,g,h,i,j=this._model.data,k=this._model.default_state,l;do e="j"+this._id+"_"+ ++this._cnt;while(j[e]);l={id:!1,text:"string"==typeof a?a:"",icon:"object"==typeof a&&a.icon!==b?a.icon:!0,parent:c,parents:d,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(f in k)k.hasOwnProperty(f)&&(l.state[f]=k[f]);if(a&&a.id&&(l.id=a.id.toString()),a&&a.text&&(l.text=a.text),a&&a.data&&a.data.jstree&&a.data.jstree.icon&&(l.icon=a.data.jstree.icon),(l.icon===b||null===l.icon||""===l.icon)&&(l.icon=!0),a&&a.data&&(l.data=a.data,a.data.jstree))for(f in a.data.jstree)a.data.jstree.hasOwnProperty(f)&&(l.state[f]=a.data.jstree[f]);if(a&&"object"==typeof a.state)for(f in a.state)a.state.hasOwnProperty(f)&&(l.state[f]=a.state[f]);if(a&&"object"==typeof a.li_attr)for(f in a.li_attr)a.li_attr.hasOwnProperty(f)&&(l.li_attr[f]=a.li_attr[f]);if(l.li_attr.id&&!l.id&&(l.id=l.li_attr.id.toString()),l.id||(l.id=e),l.li_attr.id||(l.li_attr.id=l.id),a&&"object"==typeof a.a_attr)for(f in a.a_attr)a.a_attr.hasOwnProperty(f)&&(l.a_attr[f]=a.a_attr[f]);if(a&&a.children&&a.children.length){for(f=0,g=a.children.length;g>f;f++)h=this._parse_model_from_json(a.children[f],l.id,d),i=j[h],l.children.push(h),i.children_d.length&&(l.children_d=l.children_d.concat(i.children_d));l.children_d=l.children_d.concat(l.children)}return a&&a.children&&a.children===!0&&(l.state.loaded=!1,l.children=[],l.children_d=[]),delete a.data,delete a.children,l.original=a,j[l.id]=l,l.state.selected&&this._data.core.selected.push(l.id),l.id},_redraw:function(){var b=this._model.force_full_redraw?this._model.data[a.jstree.root].children.concat([]):this._model.changed.concat([]),c=i.createElement("UL"),d,e,f,g=this._data.core.focused;for(e=0,f=b.length;f>e;e++)d=this.redraw_node(b[e],!0,this._model.force_full_redraw),d&&this._model.force_full_redraw&&c.appendChild(d);this._model.force_full_redraw&&(c.className=this.get_container_ul()[0].className,c.setAttribute("role","group"),this.element.empty().append(c)),null!==g&&(d=this.get_node(g,!0),d&&d.length&&d.children(".jstree-anchor")[0]!==i.activeElement?d.children(".jstree-anchor").focus():this._data.core.focused=null),this._model.force_full_redraw=!1,this._model.changed=[],this.trigger("redraw",{nodes:b})},redraw:function(a){a&&(this._model.force_full_redraw=!0),this._redraw()},draw_children:function(b){var c=this.get_node(b),d=!1,e=!1,f=!1,g=i;if(!c)return!1;if(c.id===a.jstree.root)return this.redraw(!0);if(b=this.get_node(b,!0),!b||!b.length)return!1;if(b.children(".jstree-children").remove(),b=b[0],c.children.length&&c.state.loaded){for(f=g.createElement("UL"),f.setAttribute("role","group"),f.className="jstree-children",d=0,e=c.children.length;e>d;d++)f.appendChild(this.redraw_node(c.children[d],!0,!0));b.appendChild(f)}},redraw_node:function(b,c,d,e){
var f=this.get_node(b),g=!1,h=!1,j=!1,k=!1,l=!1,m=!1,n="",o=i,p=this._model.data,q=!1,r=!1,s=null,t=0,u=0,v=!1,w=!1;if(!f)return!1;if(f.id===a.jstree.root)return this.redraw(!0);if(c=c||0===f.children.length,b=i.querySelector?this.element[0].querySelector("#"+(-1!=="0123456789".indexOf(f.id[0])?"\\3"+f.id[0]+" "+f.id.substr(1).replace(a.jstree.idregex,"\\$&"):f.id.replace(a.jstree.idregex,"\\$&"))):i.getElementById(f.id))b=a(b),d||(g=b.parent().parent()[0],g===this.element[0]&&(g=null),h=b.index()),c||!f.children.length||b.children(".jstree-children").length||(c=!0),c||(j=b.children(".jstree-children")[0]),q=b.children(".jstree-anchor")[0]===i.activeElement,b.remove();else if(c=!0,!d){if(g=f.parent!==a.jstree.root?a("#"+f.parent.replace(a.jstree.idregex,"\\$&"),this.element)[0]:null,!(null===g||g&&p[f.parent].state.opened))return!1;h=a.inArray(f.id,null===g?p[a.jstree.root].children:p[f.parent].children)}b=this._data.core.node.cloneNode(!0),n="jstree-node ";for(k in f.li_attr)if(f.li_attr.hasOwnProperty(k)){if("id"===k)continue;"class"!==k?b.setAttribute(k,f.li_attr[k]):n+=f.li_attr[k]}for(f.a_attr.id||(f.a_attr.id=f.id+"_anchor"),b.setAttribute("aria-selected",!!f.state.selected),b.setAttribute("aria-level",f.parents.length),b.setAttribute("aria-labelledby",f.a_attr.id),f.state.disabled&&b.setAttribute("aria-disabled",!0),k=0,l=f.children.length;l>k;k++)if(!p[f.children[k]].state.hidden){v=!0;break}if(null!==f.parent&&p[f.parent]&&!f.state.hidden&&(k=a.inArray(f.id,p[f.parent].children),w=f.id,-1!==k))for(k++,l=p[f.parent].children.length;l>k;k++)if(p[p[f.parent].children[k]].state.hidden||(w=p[f.parent].children[k]),w!==f.id)break;f.state.hidden&&(n+=" jstree-hidden"),f.state.loaded&&!v?n+=" jstree-leaf":(n+=f.state.opened&&f.state.loaded?" jstree-open":" jstree-closed",b.setAttribute("aria-expanded",f.state.opened&&f.state.loaded)),w===f.id&&(n+=" jstree-last"),b.id=f.id,b.className=n,n=(f.state.selected?" jstree-clicked":"")+(f.state.disabled?" jstree-disabled":"");for(l in f.a_attr)if(f.a_attr.hasOwnProperty(l)){if("href"===l&&"#"===f.a_attr[l])continue;"class"!==l?b.childNodes[1].setAttribute(l,f.a_attr[l]):n+=" "+f.a_attr[l]}if(n.length&&(b.childNodes[1].className="jstree-anchor "+n),(f.icon&&f.icon!==!0||f.icon===!1)&&(f.icon===!1?b.childNodes[1].childNodes[0].className+=" jstree-themeicon-hidden":-1===f.icon.indexOf("/")&&-1===f.icon.indexOf(".")?b.childNodes[1].childNodes[0].className+=" "+f.icon+" jstree-themeicon-custom":(b.childNodes[1].childNodes[0].style.backgroundImage='url("'+f.icon+'")',b.childNodes[1].childNodes[0].style.backgroundPosition="center center",b.childNodes[1].childNodes[0].style.backgroundSize="auto",b.childNodes[1].childNodes[0].className+=" jstree-themeicon-custom")),this.settings.core.force_text?b.childNodes[1].appendChild(o.createTextNode(f.text)):b.childNodes[1].innerHTML+=f.text,c&&f.children.length&&(f.state.opened||e)&&f.state.loaded){for(m=o.createElement("UL"),m.setAttribute("role","group"),m.className="jstree-children",k=0,l=f.children.length;l>k;k++)m.appendChild(this.redraw_node(f.children[k],c,!0));b.appendChild(m)}if(j&&b.appendChild(j),!d){for(g||(g=this.element[0]),k=0,l=g.childNodes.length;l>k;k++)if(g.childNodes[k]&&g.childNodes[k].className&&-1!==g.childNodes[k].className.indexOf("jstree-children")){s=g.childNodes[k];break}s||(s=o.createElement("UL"),s.setAttribute("role","group"),s.className="jstree-children",g.appendChild(s)),g=s,h<g.childNodes.length?g.insertBefore(b,g.childNodes[h]):g.appendChild(b),q&&(t=this.element[0].scrollTop,u=this.element[0].scrollLeft,b.childNodes[1].focus(),this.element[0].scrollTop=t,this.element[0].scrollLeft=u)}return f.state.opened&&!f.state.loaded&&(f.state.opened=!1,setTimeout(a.proxy(function(){this.open_node(f.id,!1,0)},this),0)),b},open_node:function(c,d,e){var f,g,h,i;if(a.isArray(c)){for(c=c.slice(),f=0,g=c.length;g>f;f++)this.open_node(c[f],d,e);return!0}return c=this.get_node(c),c&&c.id!==a.jstree.root?(e=e===b?this.settings.core.animation:e,this.is_closed(c)?this.is_loaded(c)?(h=this.get_node(c,!0),i=this,h.length&&(e&&h.children(".jstree-children").length&&h.children(".jstree-children").stop(!0,!0),c.children.length&&!this._firstChild(h.children(".jstree-children")[0])&&this.draw_children(c),e?(this.trigger("before_open",{node:c}),h.children(".jstree-children").css("display","none").end().removeClass("jstree-closed").addClass("jstree-open").attr("aria-expanded",!0).children(".jstree-children").stop(!0,!0).slideDown(e,function(){this.style.display="",i.element&&i.trigger("after_open",{node:c})})):(this.trigger("before_open",{node:c}),h[0].className=h[0].className.replace("jstree-closed","jstree-open"),h[0].setAttribute("aria-expanded",!0))),c.state.opened=!0,d&&d.call(this,c,!0),h.length||this.trigger("before_open",{node:c}),this.trigger("open_node",{node:c}),e&&h.length||this.trigger("after_open",{node:c}),!0):this.is_loading(c)?setTimeout(a.proxy(function(){this.open_node(c,d,e)},this),500):void this.load_node(c,function(a,b){return b?this.open_node(a,d,e):d?d.call(this,a,!1):!1}):(d&&d.call(this,c,!1),!1)):!1},_open_to:function(b){if(b=this.get_node(b),!b||b.id===a.jstree.root)return!1;var c,d,e=b.parents;for(c=0,d=e.length;d>c;c+=1)c!==a.jstree.root&&this.open_node(e[c],!1,0);return a("#"+b.id.replace(a.jstree.idregex,"\\$&"),this.element)},close_node:function(c,d){var e,f,g,h;if(a.isArray(c)){for(c=c.slice(),e=0,f=c.length;f>e;e++)this.close_node(c[e],d);return!0}return c=this.get_node(c),c&&c.id!==a.jstree.root?this.is_closed(c)?!1:(d=d===b?this.settings.core.animation:d,g=this,h=this.get_node(c,!0),c.state.opened=!1,this.trigger("close_node",{node:c}),void(h.length?d?h.children(".jstree-children").attr("style","display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").attr("aria-expanded",!1).children(".jstree-children").stop(!0,!0).slideUp(d,function(){this.style.display="",h.children(".jstree-children").remove(),g.element&&g.trigger("after_close",{node:c})}):(h[0].className=h[0].className.replace("jstree-open","jstree-closed"),h.attr("aria-expanded",!1).children(".jstree-children").remove(),this.trigger("after_close",{node:c})):this.trigger("after_close",{node:c}))):!1},toggle_node:function(b){var c,d;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.toggle_node(b[c]);return!0}return this.is_closed(b)?this.open_node(b):this.is_open(b)?this.close_node(b):void 0},open_all:function(b,c,d){if(b||(b=a.jstree.root),b=this.get_node(b),!b)return!1;var e=b.id===a.jstree.root?this.get_container_ul():this.get_node(b,!0),f,g,h;if(!e.length){for(f=0,g=b.children_d.length;g>f;f++)this.is_closed(this._model.data[b.children_d[f]])&&(this._model.data[b.children_d[f]].state.opened=!0);return this.trigger("open_all",{node:b})}d=d||e,h=this,e=this.is_closed(b)?e.find(".jstree-closed").addBack():e.find(".jstree-closed"),e.each(function(){h.open_node(this,function(a,b){b&&this.is_parent(a)&&this.open_all(a,c,d)},c||0)}),0===d.find(".jstree-closed").length&&this.trigger("open_all",{node:this.get_node(d)})},close_all:function(b,c){if(b||(b=a.jstree.root),b=this.get_node(b),!b)return!1;var d=b.id===a.jstree.root?this.get_container_ul():this.get_node(b,!0),e=this,f,g;for(d.length&&(d=this.is_open(b)?d.find(".jstree-open").addBack():d.find(".jstree-open"),a(d.get().reverse()).each(function(){e.close_node(this,c||0)})),f=0,g=b.children_d.length;g>f;f++)this._model.data[b.children_d[f]].state.opened=!1;this.trigger("close_all",{node:b})},is_disabled:function(a){return a=this.get_node(a),a&&a.state&&a.state.disabled},enable_node:function(b){var c,d;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.enable_node(b[c]);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(b.state.disabled=!1,this.get_node(b,!0).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled",!1),void this.trigger("enable_node",{node:b})):!1},disable_node:function(b){var c,d;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.disable_node(b[c]);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(b.state.disabled=!0,this.get_node(b,!0).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled",!0),void this.trigger("disable_node",{node:b})):!1},is_hidden:function(a){return a=this.get_node(a),a.state.hidden===!0},hide_node:function(b,c){var d,e;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.hide_node(b[d],!0);return c||this.redraw(),!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?void(b.state.hidden||(b.state.hidden=!0,this._node_changed(b.parent),c||this.redraw(),this.trigger("hide_node",{node:b}))):!1},show_node:function(b,c){var d,e;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.show_node(b[d],!0);return c||this.redraw(),!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?void(b.state.hidden&&(b.state.hidden=!1,this._node_changed(b.parent),c||this.redraw(),this.trigger("show_node",{node:b}))):!1},hide_all:function(b){var c,d=this._model.data,e=[];for(c in d)d.hasOwnProperty(c)&&c!==a.jstree.root&&!d[c].state.hidden&&(d[c].state.hidden=!0,e.push(c));return this._model.force_full_redraw=!0,b||this.redraw(),this.trigger("hide_all",{nodes:e}),e},show_all:function(b){var c,d=this._model.data,e=[];for(c in d)d.hasOwnProperty(c)&&c!==a.jstree.root&&d[c].state.hidden&&(d[c].state.hidden=!1,e.push(c));return this._model.force_full_redraw=!0,b||this.redraw(),this.trigger("show_all",{nodes:e}),e},activate_node:function(a,c){if(this.is_disabled(a))return!1;if(c&&"object"==typeof c||(c={}),this._data.core.last_clicked=this._data.core.last_clicked&&this._data.core.last_clicked.id!==b?this.get_node(this._data.core.last_clicked.id):null,this._data.core.last_clicked&&!this._data.core.last_clicked.state.selected&&(this._data.core.last_clicked=null),!this._data.core.last_clicked&&this._data.core.selected.length&&(this._data.core.last_clicked=this.get_node(this._data.core.selected[this._data.core.selected.length-1])),this.settings.core.multiple&&(c.metaKey||c.ctrlKey||c.shiftKey)&&(!c.shiftKey||this._data.core.last_clicked&&this.get_parent(a)&&this.get_parent(a)===this._data.core.last_clicked.parent))if(c.shiftKey){var d=this.get_node(a).id,e=this._data.core.last_clicked.id,f=this.get_node(this._data.core.last_clicked.parent).children,g=!1,h,i;for(h=0,i=f.length;i>h;h+=1)f[h]===d&&(g=!g),f[h]===e&&(g=!g),this.is_disabled(f[h])||!g&&f[h]!==d&&f[h]!==e?this.deselect_node(f[h],!0,c):this.is_hidden(f[h])||this.select_node(f[h],!0,!1,c);this.trigger("changed",{action:"select_node",node:this.get_node(a),selected:this._data.core.selected,event:c})}else this.is_selected(a)?this.deselect_node(a,!1,c):this.select_node(a,!1,!1,c);else!this.settings.core.multiple&&(c.metaKey||c.ctrlKey||c.shiftKey)&&this.is_selected(a)?this.deselect_node(a,!1,c):(this.deselect_all(!0),this.select_node(a,!1,!1,c),this._data.core.last_clicked=this.get_node(a));this.trigger("activate_node",{node:this.get_node(a),event:c})},hover_node:function(a){if(a=this.get_node(a,!0),!a||!a.length||a.children(".jstree-hovered").length)return!1;var b=this.element.find(".jstree-hovered"),c=this.element;b&&b.length&&this.dehover_node(b),a.children(".jstree-anchor").addClass("jstree-hovered"),this.trigger("hover_node",{node:this.get_node(a)}),setTimeout(function(){c.attr("aria-activedescendant",a[0].id)},0)},dehover_node:function(a){return a=this.get_node(a,!0),a&&a.length&&a.children(".jstree-hovered").length?(a.children(".jstree-anchor").removeClass("jstree-hovered"),void this.trigger("dehover_node",{node:this.get_node(a)})):!1},select_node:function(b,c,d,e){var f,g,h,i;if(a.isArray(b)){for(b=b.slice(),g=0,h=b.length;h>g;g++)this.select_node(b[g],c,d,e);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(f=this.get_node(b,!0),void(b.state.selected||(b.state.selected=!0,this._data.core.selected.push(b.id),d||(f=this._open_to(b)),f&&f.length&&f.attr("aria-selected",!0).children(".jstree-anchor").addClass("jstree-clicked"),this.trigger("select_node",{node:b,selected:this._data.core.selected,event:e}),c||this.trigger("changed",{action:"select_node",node:b,selected:this._data.core.selected,event:e})))):!1},deselect_node:function(b,c,d){var e,f,g;if(a.isArray(b)){for(b=b.slice(),e=0,f=b.length;f>e;e++)this.deselect_node(b[e],c,d);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(g=this.get_node(b,!0),void(b.state.selected&&(b.state.selected=!1,this._data.core.selected=a.vakata.array_remove_item(this._data.core.selected,b.id),g.length&&g.attr("aria-selected",!1).children(".jstree-anchor").removeClass("jstree-clicked"),this.trigger("deselect_node",{node:b,selected:this._data.core.selected,event:d}),c||this.trigger("changed",{action:"deselect_node",node:b,selected:this._data.core.selected,event:d})))):!1},select_all:function(b){var c=this._data.core.selected.concat([]),d,e;for(this._data.core.selected=this._model.data[a.jstree.root].children_d.concat(),d=0,e=this._data.core.selected.length;e>d;d++)this._model.data[this._data.core.selected[d]]&&(this._model.data[this._data.core.selected[d]].state.selected=!0);this.redraw(!0),this.trigger("select_all",{selected:this._data.core.selected}),b||this.trigger("changed",{action:"select_all",selected:this._data.core.selected,old_selection:c})},deselect_all:function(a){var b=this._data.core.selected.concat([]),c,d;for(c=0,d=this._data.core.selected.length;d>c;c++)this._model.data[this._data.core.selected[c]]&&(this._model.data[this._data.core.selected[c]].state.selected=!1);this._data.core.selected=[],this.element.find(".jstree-clicked").removeClass("jstree-clicked").parent().attr("aria-selected",!1),this.trigger("deselect_all",{selected:this._data.core.selected,node:b}),a||this.trigger("changed",{action:"deselect_all",selected:this._data.core.selected,old_selection:b})},is_selected:function(b){return b=this.get_node(b),b&&b.id!==a.jstree.root?b.state.selected:!1},get_selected:function(b){return b?a.map(this._data.core.selected,a.proxy(function(a){return this.get_node(a)},this)):this._data.core.selected.slice()},get_top_selected:function(b){var c=this.get_selected(!0),d={},e,f,g,h;for(e=0,f=c.length;f>e;e++)d[c[e].id]=c[e];for(e=0,f=c.length;f>e;e++)for(g=0,h=c[e].children_d.length;h>g;g++)d[c[e].children_d[g]]&&delete d[c[e].children_d[g]];c=[];for(e in d)d.hasOwnProperty(e)&&c.push(e);return b?a.map(c,a.proxy(function(a){return this.get_node(a)},this)):c},get_bottom_selected:function(b){var c=this.get_selected(!0),d=[],e,f;for(e=0,f=c.length;f>e;e++)c[e].children.length||d.push(c[e].id);return b?a.map(d,a.proxy(function(a){return this.get_node(a)},this)):d},get_state:function(){var b={core:{open:[],scroll:{left:this.element.scrollLeft(),top:this.element.scrollTop()},selected:[]}},c;for(c in this._model.data)this._model.data.hasOwnProperty(c)&&c!==a.jstree.root&&(this._model.data[c].state.opened&&b.core.open.push(c),this._model.data[c].state.selected&&b.core.selected.push(c));return b},set_state:function(c,d){if(c){if(c.core&&c.core.selected&&c.core.initial_selection===b&&(c.core.initial_selection=this._data.core.selected.concat([]).sort().join(",")),c.core){var e,f,g,h,i;if(c.core.open)return a.isArray(c.core.open)&&c.core.open.length?this._load_nodes(c.core.open,function(a){this.open_node(a,!1,0),delete c.core.open,this.set_state(c,d)}):(delete c.core.open,this.set_state(c,d)),!1;if(c.core.scroll)return c.core.scroll&&c.core.scroll.left!==b&&this.element.scrollLeft(c.core.scroll.left),c.core.scroll&&c.core.scroll.top!==b&&this.element.scrollTop(c.core.scroll.top),delete c.core.scroll,this.set_state(c,d),!1;if(c.core.selected)return h=this,(c.core.initial_selection===b||c.core.initial_selection===this._data.core.selected.concat([]).sort().join(","))&&(this.deselect_all(),a.each(c.core.selected,function(a,b){h.select_node(b,!1,!0)})),delete c.core.initial_selection,delete c.core.selected,this.set_state(c,d),!1;for(i in c)c.hasOwnProperty(i)&&"core"!==i&&-1===a.inArray(i,this.settings.plugins)&&delete c[i];if(a.isEmptyObject(c.core))return delete c.core,this.set_state(c,d),!1}return a.isEmptyObject(c)?(c=null,d&&d.call(this),this.trigger("set_state"),!1):!0}return!1},refresh:function(b,c){this._data.core.state=c===!0?{}:this.get_state(),c&&a.isFunction(c)&&(this._data.core.state=c.call(this,this._data.core.state)),this._cnt=0,this._model.data={},this._model.data[a.jstree.root]={id:a.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this._data.core.selected=[],this._data.core.last_clicked=null,this._data.core.focused=null;var d=this.get_container_ul()[0].className;b||(this.element.html("<ul class='"+d+"' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='treeitem' id='j"+this._id+"_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading")),this.load_node(a.jstree.root,function(b,c){c&&(this.get_container_ul()[0].className=d,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.set_state(a.extend(!0,{},this._data.core.state),function(){this.trigger("refresh")})),this._data.core.state=null})},refresh_node:function(b){if(b=this.get_node(b),!b||b.id===a.jstree.root)return!1;var c=[],d=[],e=this._data.core.selected.concat([]);d.push(b.id),b.state.opened===!0&&c.push(b.id),this.get_node(b,!0).find(".jstree-open").each(function(){d.push(this.id),c.push(this.id)}),this._load_nodes(d,a.proxy(function(a){this.open_node(c,!1,0),this.select_node(e),this.trigger("refresh_node",{node:b,nodes:a})},this),!1,!0)},set_id:function(b,c){if(b=this.get_node(b),!b||b.id===a.jstree.root)return!1;var d,e,f=this._model.data,g=b.id;for(c=c.toString(),f[b.parent].children[a.inArray(b.id,f[b.parent].children)]=c,d=0,e=b.parents.length;e>d;d++)f[b.parents[d]].children_d[a.inArray(b.id,f[b.parents[d]].children_d)]=c;for(d=0,e=b.children.length;e>d;d++)f[b.children[d]].parent=c;for(d=0,e=b.children_d.length;e>d;d++)f[b.children_d[d]].parents[a.inArray(b.id,f[b.children_d[d]].parents)]=c;return d=a.inArray(b.id,this._data.core.selected),-1!==d&&(this._data.core.selected[d]=c),d=this.get_node(b.id,!0),d&&(d.attr("id",c),this.element.attr("aria-activedescendant")===b.id&&this.element.attr("aria-activedescendant",c)),delete f[b.id],b.id=c,b.li_attr.id=c,f[c]=b,this.trigger("set_id",{node:b,"new":b.id,old:g}),!0},get_text:function(b){return b=this.get_node(b),b&&b.id!==a.jstree.root?b.text:!1},set_text:function(b,c){var d,e;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.set_text(b[d],c);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(b.text=c,this.get_node(b,!0).length&&this.redraw_node(b.id),this.trigger("set_text",{obj:b,text:c}),!0):!1},get_json:function(b,c,d){if(b=this.get_node(b||a.jstree.root),!b)return!1;c&&c.flat&&!d&&(d=[]);var e={id:b.id,text:b.text,icon:this.get_icon(b),li_attr:a.extend(!0,{},b.li_attr),a_attr:a.extend(!0,{},b.a_attr),state:{},data:c&&c.no_data?!1:a.extend(!0,a.isArray(b.data)?[]:{},b.data)},f,g;if(c&&c.flat?e.parent=b.parent:e.children=[],c&&c.no_state)delete e.state;else for(f in b.state)b.state.hasOwnProperty(f)&&(e.state[f]=b.state[f]);if(c&&c.no_li_attr&&delete e.li_attr,c&&c.no_a_attr&&delete e.a_attr,c&&c.no_id&&(delete e.id,e.li_attr&&e.li_attr.id&&delete e.li_attr.id,e.a_attr&&e.a_attr.id&&delete e.a_attr.id),c&&c.flat&&b.id!==a.jstree.root&&d.push(e),!c||!c.no_children)for(f=0,g=b.children.length;g>f;f++)c&&c.flat?this.get_json(b.children[f],c,d):e.children.push(this.get_json(b.children[f],c));return c&&c.flat?d:b.id===a.jstree.root?e.children:e},create_node:function(c,d,e,f,g){if(null===c&&(c=a.jstree.root),c=this.get_node(c),!c)return!1;if(e=e===b?"last":e,!e.toString().match(/^(before|after)$/)&&!g&&!this.is_loaded(c))return this.load_node(c,function(){this.create_node(c,d,e,f,!0)});d||(d={text:this.get_string("New node")}),d="string"==typeof d?{text:d}:a.extend(!0,{},d),d.text===b&&(d.text=this.get_string("New node"));var h,i,j,k;switch(c.id===a.jstree.root&&("before"===e&&(e="first"),"after"===e&&(e="last")),e){case"before":h=this.get_node(c.parent),e=a.inArray(c.id,h.children),c=h;break;case"after":h=this.get_node(c.parent),e=a.inArray(c.id,h.children)+1,c=h;break;case"inside":case"first":e=0;break;case"last":e=c.children.length;break;default:e||(e=0)}if(e>c.children.length&&(e=c.children.length),d.id||(d.id=!0),!this.check("create_node",d,c,e))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(d.id===!0&&delete d.id,d=this._parse_model_from_json(d,c.id,c.parents.concat()),!d)return!1;for(h=this.get_node(d),i=[],i.push(d),i=i.concat(h.children_d),this.trigger("model",{nodes:i,parent:c.id}),c.children_d=c.children_d.concat(i),j=0,k=c.parents.length;k>j;j++)this._model.data[c.parents[j]].children_d=this._model.data[c.parents[j]].children_d.concat(i);for(d=h,h=[],j=0,k=c.children.length;k>j;j++)h[j>=e?j+1:j]=c.children[j];return h[e]=d.id,c.children=h,this.redraw_node(c,!0),this.trigger("create_node",{node:this.get_node(d),parent:c.id,position:e}),f&&f.call(this,this.get_node(d)),d.id},rename_node:function(b,c){var d,e,f;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.rename_node(b[d],c);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(f=b.text,this.check("rename_node",b,this.get_parent(b),c)?(this.set_text(b,c),this.trigger("rename_node",{node:b,text:c,old:f}),!0):(this.settings.core.error.call(this,this._data.core.last_error),!1)):!1},delete_node:function(b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.delete_node(b[c]);return!0}if(b=this.get_node(b),!b||b.id===a.jstree.root)return!1;if(e=this.get_node(b.parent),f=a.inArray(b.id,e.children),l=!1,!this.check("delete_node",b,e,f))return this.settings.core.error.call(this,this._data.core.last_error),!1;for(-1!==f&&(e.children=a.vakata.array_remove(e.children,f)),g=b.children_d.concat([]),g.push(b.id),h=0,i=b.parents.length;i>h;h++)this._model.data[b.parents[h]].children_d=a.vakata.array_filter(this._model.data[b.parents[h]].children_d,function(b){return-1===a.inArray(b,g)});for(j=0,k=g.length;k>j;j++)if(this._model.data[g[j]].state.selected){l=!0;break}for(l&&(this._data.core.selected=a.vakata.array_filter(this._data.core.selected,function(b){return-1===a.inArray(b,g)})),this.trigger("delete_node",{node:b,parent:e.id}),l&&this.trigger("changed",{action:"delete_node",node:b,selected:this._data.core.selected,parent:e.id}),j=0,k=g.length;k>j;j++)delete this._model.data[g[j]];return-1!==a.inArray(this._data.core.focused,g)&&(this._data.core.focused=null,m=this.element[0].scrollTop,n=this.element[0].scrollLeft,e.id===a.jstree.root?this._model.data[a.jstree.root].children[0]&&this.get_node(this._model.data[a.jstree.root].children[0],!0).children(".jstree-anchor").focus():this.get_node(e,!0).children(".jstree-anchor").focus(),this.element[0].scrollTop=m,this.element[0].scrollLeft=n),this.redraw_node(e,!0),!0},check:function(b,c,d,e,f){c=c&&c.id?c:this.get_node(c),d=d&&d.id?d:this.get_node(d);var g=b.match(/^move_node|copy_node|create_node$/i)?d:c,h=this.settings.core.check_callback;return"move_node"!==b&&"copy_node"!==b||f&&f.is_multi||c.id!==d.id&&("move_node"!==b||a.inArray(c.id,d.children)!==e)&&-1===a.inArray(d.id,c.children_d)?(g&&g.data&&(g=g.data),g&&g.functions&&(g.functions[b]===!1||g.functions[b]===!0)?(g.functions[b]===!1&&(this._data.core.last_error={error:"check",plugin:"core",id:"core_02",reason:"Node data prevents function: "+b,data:JSON.stringify({chk:b,pos:e,obj:c&&c.id?c.id:!1,par:d&&d.id?d.id:!1})}),g.functions[b]):h===!1||a.isFunction(h)&&h.call(this,b,c,d,e,f)===!1||h&&h[b]===!1?(this._data.core.last_error={error:"check",plugin:"core",id:"core_03",reason:"User config for core.check_callback prevents function: "+b,data:JSON.stringify({chk:b,pos:e,obj:c&&c.id?c.id:!1,par:d&&d.id?d.id:!1})},!1):!0):(this._data.core.last_error={error:"check",plugin:"core",id:"core_01",reason:"Moving parent inside child",data:JSON.stringify({chk:b,pos:e,obj:c&&c.id?c.id:!1,par:d&&d.id?d.id:!1})},!1)},last_error:function(){return this._data.core.last_error},move_node:function(c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w;if(d=this.get_node(d),e=e===b?0:e,!d)return!1;if(!e.toString().match(/^(before|after)$/)&&!g&&!this.is_loaded(d))return this.load_node(d,function(){this.move_node(c,d,e,f,!0,!1,i)});if(a.isArray(c)){if(1!==c.length){for(j=0,k=c.length;k>j;j++)(r=this.move_node(c[j],d,e,f,g,!1,i))&&(d=r,e="after");return this.redraw(),!0}c=c[0]}if(c=c&&c.id?c:this.get_node(c),!c||c.id===a.jstree.root)return!1;if(l=(c.parent||a.jstree.root).toString(),n=e.toString().match(/^(before|after)$/)&&d.id!==a.jstree.root?this.get_node(d.parent):d,o=i?i:this._model.data[c.id]?this:a.jstree.reference(c.id),p=!o||!o._id||this._id!==o._id,m=o&&o._id&&l&&o._model.data[l]&&o._model.data[l].children?a.inArray(c.id,o._model.data[l].children):-1,o&&o._id&&(c=o._model.data[c.id]),p)return(r=this.copy_node(c,d,e,f,g,!1,i))?(o&&o.delete_node(c),r):!1;switch(d.id===a.jstree.root&&("before"===e&&(e="first"),"after"===e&&(e="last")),e){case"before":e=a.inArray(d.id,n.children);break;case"after":e=a.inArray(d.id,n.children)+1;break;case"inside":case"first":e=0;break;case"last":e=n.children.length;break;default:e||(e=0)}if(e>n.children.length&&(e=n.children.length),!this.check("move_node",c,n,e,{core:!0,origin:i,is_multi:o&&o._id&&o._id!==this._id,is_foreign:!o||!o._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(c.parent===n.id){for(q=n.children.concat(),r=a.inArray(c.id,q),-1!==r&&(q=a.vakata.array_remove(q,r),e>r&&e--),r=[],s=0,t=q.length;t>s;s++)r[s>=e?s+1:s]=q[s];r[e]=c.id,n.children=r,this._node_changed(n.id),this.redraw(n.id===a.jstree.root)}else{for(r=c.children_d.concat(),r.push(c.id),s=0,t=c.parents.length;t>s;s++){for(q=[],w=o._model.data[c.parents[s]].children_d,u=0,v=w.length;v>u;u++)-1===a.inArray(w[u],r)&&q.push(w[u]);o._model.data[c.parents[s]].children_d=q}for(o._model.data[l].children=a.vakata.array_remove_item(o._model.data[l].children,c.id),s=0,t=n.parents.length;t>s;s++)this._model.data[n.parents[s]].children_d=this._model.data[n.parents[s]].children_d.concat(r);for(q=[],s=0,t=n.children.length;t>s;s++)q[s>=e?s+1:s]=n.children[s];for(q[e]=c.id,n.children=q,n.children_d.push(c.id),n.children_d=n.children_d.concat(c.children_d),c.parent=n.id,r=n.parents.concat(),r.unshift(n.id),w=c.parents.length,c.parents=r,r=r.concat(),s=0,t=c.children_d.length;t>s;s++)this._model.data[c.children_d[s]].parents=this._model.data[c.children_d[s]].parents.slice(0,-1*w),Array.prototype.push.apply(this._model.data[c.children_d[s]].parents,r);(l===a.jstree.root||n.id===a.jstree.root)&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||(this._node_changed(l),this._node_changed(n.id)),h||this.redraw()}return f&&f.call(this,c,n,e),this.trigger("move_node",{node:c,parent:n.id,position:e,old_parent:l,old_position:m,is_multi:o&&o._id&&o._id!==this._id,is_foreign:!o||!o._id,old_instance:o,new_instance:this}),c.id},copy_node:function(c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t;if(d=this.get_node(d),e=e===b?0:e,!d)return!1;if(!e.toString().match(/^(before|after)$/)&&!g&&!this.is_loaded(d))return this.load_node(d,function(){this.copy_node(c,d,e,f,!0,!1,i)});if(a.isArray(c)){if(1!==c.length){for(j=0,k=c.length;k>j;j++)(m=this.copy_node(c[j],d,e,f,g,!0,i))&&(d=m,e="after");return this.redraw(),!0}c=c[0]}if(c=c&&c.id?c:this.get_node(c),!c||c.id===a.jstree.root)return!1;switch(q=(c.parent||a.jstree.root).toString(),r=e.toString().match(/^(before|after)$/)&&d.id!==a.jstree.root?this.get_node(d.parent):d,s=i?i:this._model.data[c.id]?this:a.jstree.reference(c.id),t=!s||!s._id||this._id!==s._id,s&&s._id&&(c=s._model.data[c.id]),d.id===a.jstree.root&&("before"===e&&(e="first"),"after"===e&&(e="last")),e){case"before":e=a.inArray(d.id,r.children);break;case"after":e=a.inArray(d.id,r.children)+1;break;case"inside":case"first":e=0;break;case"last":e=r.children.length;break;default:e||(e=0)}if(e>r.children.length&&(e=r.children.length),!this.check("copy_node",c,r,e,{core:!0,origin:i,is_multi:s&&s._id&&s._id!==this._id,is_foreign:!s||!s._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(p=s?s.get_json(c,{no_id:!0,no_data:!0,no_state:!0}):c,!p)return!1;if(p.id===!0&&delete p.id,p=this._parse_model_from_json(p,r.id,r.parents.concat()),!p)return!1;for(m=this.get_node(p),c&&c.state&&c.state.loaded===!1&&(m.state.loaded=!1),l=[],l.push(p),l=l.concat(m.children_d),this.trigger("model",{nodes:l,parent:r.id}),n=0,o=r.parents.length;o>n;n++)this._model.data[r.parents[n]].children_d=this._model.data[r.parents[n]].children_d.concat(l);for(l=[],n=0,o=r.children.length;o>n;n++)l[n>=e?n+1:n]=r.children[n];return l[e]=m.id,r.children=l,r.children_d.push(m.id),r.children_d=r.children_d.concat(m.children_d),r.id===a.jstree.root&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||this._node_changed(r.id),h||this.redraw(r.id===a.jstree.root),f&&f.call(this,m,r,e),this.trigger("copy_node",{node:m,original:c,parent:r.id,position:e,old_parent:q,old_position:s&&s._id&&q&&s._model.data[q]&&s._model.data[q].children?a.inArray(c.id,s._model.data[q].children):-1,is_multi:s&&s._id&&s._id!==this._id,is_foreign:!s||!s._id,old_instance:s,new_instance:this}),m.id},cut:function(b){if(b||(b=this._data.core.selected.concat()),a.isArray(b)||(b=[b]),!b.length)return!1;var c=[],g,h,i;for(h=0,i=b.length;i>h;h++)g=this.get_node(b[h]),g&&g.id&&g.id!==a.jstree.root&&c.push(g);return c.length?(d=c,f=this,e="move_node",void this.trigger("cut",{node:b})):!1},copy:function(b){if(b||(b=this._data.core.selected.concat()),a.isArray(b)||(b=[b]),!b.length)return!1;var c=[],g,h,i;for(h=0,i=b.length;i>h;h++)g=this.get_node(b[h]),g&&g.id&&g.id!==a.jstree.root&&c.push(g);return c.length?(d=c,f=this,e="copy_node",void this.trigger("copy",{node:b})):!1},get_buffer:function(){return{mode:e,node:d,inst:f}},can_paste:function(){return e!==!1&&d!==!1},paste:function(a,b){return a=this.get_node(a),a&&e&&e.match(/^(copy_node|move_node)$/)&&d?(this[e](d,a,b,!1,!1,!1,f)&&this.trigger("paste",{parent:a.id,node:d,mode:e}),d=!1,e=!1,void(f=!1)):!1},clear_buffer:function(){d=!1,e=!1,f=!1,this.trigger("clear_buffer")},edit:function(b,c,d){var e,f,g,h,j,k,l,m,n,o=!1;return(b=this.get_node(b))?this.check("edit",b,this.get_parent(b))?(n=b,c="string"==typeof c?c:b.text,this.set_text(b,""),b=this._open_to(b),n.text=c,e=this._data.core.rtl,f=this.element.width(),this._data.core.focused=n.id,g=b.children(".jstree-anchor").focus(),h=a("<span>"),j=c,k=a("<div />",{css:{position:"absolute",top:"-200px",left:e?"0px":"-1000px",visibility:"hidden"}}).appendTo("body"),l=a("<input />",{value:j,"class":"jstree-rename-input",css:{padding:"0",border:"1px solid silver","box-sizing":"border-box",display:"inline-block",height:this._data.core.li_height+"px",lineHeight:this._data.core.li_height+"px",width:"150px"},blur:a.proxy(function(c){c.stopImmediatePropagation(),c.preventDefault();var e=h.children(".jstree-rename-input"),f=e.val(),i=this.settings.core.force_text,m;""===f&&(f=j),k.remove(),h.replaceWith(g),h.remove(),j=i?j:a("<div></div>").append(a.parseHTML(j)).html(),this.set_text(b,j),m=!!this.rename_node(b,i?a("<div></div>").text(f).text():a("<div></div>").append(a.parseHTML(f)).html()),m||this.set_text(b,j),this._data.core.focused=n.id,setTimeout(a.proxy(function(){var a=this.get_node(n.id,!0);a.length&&(this._data.core.focused=n.id,a.children(".jstree-anchor").focus())},this),0),d&&d.call(this,n,m,o),l=null},this),keydown:function(a){var b=a.which;27===b&&(o=!0,this.value=j),(27===b||13===b||37===b||38===b||39===b||40===b||32===b)&&a.stopImmediatePropagation(),(27===b||13===b)&&(a.preventDefault(),this.blur())},click:function(a){a.stopImmediatePropagation();
},mousedown:function(a){a.stopImmediatePropagation()},keyup:function(a){l.width(Math.min(k.text("pW"+this.value).width(),f))},keypress:function(a){return 13===a.which?!1:void 0}}),m={fontFamily:g.css("fontFamily")||"",fontSize:g.css("fontSize")||"",fontWeight:g.css("fontWeight")||"",fontStyle:g.css("fontStyle")||"",fontStretch:g.css("fontStretch")||"",fontVariant:g.css("fontVariant")||"",letterSpacing:g.css("letterSpacing")||"",wordSpacing:g.css("wordSpacing")||""},h.attr("class",g.attr("class")).append(g.contents().clone()).append(l),g.replaceWith(h),k.css(m),l.css(m).width(Math.min(k.text("pW"+l[0].value).width(),f))[0].select(),void a(i).one("mousedown.jstree touchstart.jstree dnd_start.vakata",function(b){l&&b.target!==l&&a(l).blur()})):(this.settings.core.error.call(this,this._data.core.last_error),!1):!1},set_theme:function(b,c){if(!b)return!1;if(c===!0){var d=this.settings.core.themes.dir;d||(d=a.jstree.path+"/themes"),c=d+"/"+b+"/style.css"}c&&-1===a.inArray(c,g)&&(a("head").append('<link rel="stylesheet" href="'+c+'" type="text/css" />'),g.push(c)),this._data.core.themes.name&&this.element.removeClass("jstree-"+this._data.core.themes.name),this._data.core.themes.name=b,this.element.addClass("jstree-"+b),this.element[this.settings.core.themes.responsive?"addClass":"removeClass"]("jstree-"+b+"-responsive"),this.trigger("set_theme",{theme:b})},get_theme:function(){return this._data.core.themes.name},set_theme_variant:function(a){this._data.core.themes.variant&&this.element.removeClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant),this._data.core.themes.variant=a,a&&this.element.addClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant)},get_theme_variant:function(){return this._data.core.themes.variant},show_stripes:function(){this._data.core.themes.stripes=!0,this.get_container_ul().addClass("jstree-striped"),this.trigger("show_stripes")},hide_stripes:function(){this._data.core.themes.stripes=!1,this.get_container_ul().removeClass("jstree-striped"),this.trigger("hide_stripes")},toggle_stripes:function(){this._data.core.themes.stripes?this.hide_stripes():this.show_stripes()},show_dots:function(){this._data.core.themes.dots=!0,this.get_container_ul().removeClass("jstree-no-dots"),this.trigger("show_dots")},hide_dots:function(){this._data.core.themes.dots=!1,this.get_container_ul().addClass("jstree-no-dots"),this.trigger("hide_dots")},toggle_dots:function(){this._data.core.themes.dots?this.hide_dots():this.show_dots()},show_icons:function(){this._data.core.themes.icons=!0,this.get_container_ul().removeClass("jstree-no-icons"),this.trigger("show_icons")},hide_icons:function(){this._data.core.themes.icons=!1,this.get_container_ul().addClass("jstree-no-icons"),this.trigger("hide_icons")},toggle_icons:function(){this._data.core.themes.icons?this.hide_icons():this.show_icons()},show_ellipsis:function(){this._data.core.themes.ellipsis=!0,this.get_container_ul().addClass("jstree-ellipsis"),this.trigger("show_ellipsis")},hide_ellipsis:function(){this._data.core.themes.ellipsis=!1,this.get_container_ul().removeClass("jstree-ellipsis"),this.trigger("hide_ellipsis")},toggle_ellipsis:function(){this._data.core.themes.ellipsis?this.hide_ellipsis():this.show_ellipsis()},set_icon:function(c,d){var e,f,g,h;if(a.isArray(c)){for(c=c.slice(),e=0,f=c.length;f>e;e++)this.set_icon(c[e],d);return!0}return c=this.get_node(c),c&&c.id!==a.jstree.root?(h=c.icon,c.icon=d===!0||null===d||d===b||""===d?!0:d,g=this.get_node(c,!0).children(".jstree-anchor").children(".jstree-themeicon"),d===!1?this.hide_icon(c):d===!0||null===d||d===b||""===d?(g.removeClass("jstree-themeicon-custom "+h).css("background","").removeAttr("rel"),h===!1&&this.show_icon(c)):-1===d.indexOf("/")&&-1===d.indexOf(".")?(g.removeClass(h).css("background",""),g.addClass(d+" jstree-themeicon-custom").attr("rel",d),h===!1&&this.show_icon(c)):(g.removeClass(h).css("background",""),g.addClass("jstree-themeicon-custom").css("background","url('"+d+"') center center no-repeat").attr("rel",d),h===!1&&this.show_icon(c)),!0):!1},get_icon:function(b){return b=this.get_node(b),b&&b.id!==a.jstree.root?b.icon:!1},hide_icon:function(b){var c,d;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.hide_icon(b[c]);return!0}return b=this.get_node(b),b&&b!==a.jstree.root?(b.icon=!1,this.get_node(b,!0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"),!0):!1},show_icon:function(b){var c,d,e;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.show_icon(b[c]);return!0}return b=this.get_node(b),b&&b!==a.jstree.root?(e=this.get_node(b,!0),b.icon=e.length?e.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"):!0,b.icon||(b.icon=!0),e.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"),!0):!1}},a.vakata={},a.vakata.attributes=function(b,c){b=a(b)[0];var d=c?{}:[];return b&&b.attributes&&a.each(b.attributes,function(b,e){-1===a.inArray(e.name.toLowerCase(),["style","contenteditable","hasfocus","tabindex"])&&null!==e.value&&""!==a.trim(e.value)&&(c?d[e.name]=e.value:d.push(e.name))}),d},a.vakata.array_unique=function(a){var c=[],d,e,f,g={};for(d=0,f=a.length;f>d;d++)g[a[d]]===b&&(c.push(a[d]),g[a[d]]=!0);return c},a.vakata.array_remove=function(a,b){return a.splice(b,1),a},a.vakata.array_remove_item=function(b,c){var d=a.inArray(c,b);return-1!==d?a.vakata.array_remove(b,d):b},a.vakata.array_filter=function(a,b,c,d,e){if(a.filter)return a.filter(b,c);d=[];for(e in a)~~e+""==e+""&&e>=0&&b.call(c,a[e],+e,a)&&d.push(a[e]);return d},a.jstree.plugins.changed=function(a,b){var c=[];this.trigger=function(a,d){var e,f;if(d||(d={}),"changed"===a.replace(".jstree","")){d.changed={selected:[],deselected:[]};var g={};for(e=0,f=c.length;f>e;e++)g[c[e]]=1;for(e=0,f=d.selected.length;f>e;e++)g[d.selected[e]]?g[d.selected[e]]=2:d.changed.selected.push(d.selected[e]);for(e=0,f=c.length;f>e;e++)1===g[c[e]]&&d.changed.deselected.push(c[e]);c=d.selected.slice()}b.trigger.call(this,a,d)},this.refresh=function(a,d){return c=[],b.refresh.apply(this,arguments)}};var j=i.createElement("I");j.className="jstree-icon jstree-checkbox",j.setAttribute("role","presentation"),a.jstree.defaults.checkbox={visible:!0,three_state:!0,whole_node:!0,keep_selected_style:!0,cascade:"",tie_selection:!0,cascade_to_disabled:!0,cascade_to_hidden:!0},a.jstree.plugins.checkbox=function(c,d){this.bind=function(){d.bind.call(this),this._data.checkbox.uto=!1,this._data.checkbox.selected=[],this.settings.checkbox.three_state&&(this.settings.checkbox.cascade="up+down+undetermined"),this.element.on("init.jstree",a.proxy(function(){this._data.checkbox.visible=this.settings.checkbox.visible,this.settings.checkbox.keep_selected_style||this.element.addClass("jstree-checkbox-no-clicked"),this.settings.checkbox.tie_selection&&this.element.addClass("jstree-checkbox-selection")},this)).on("loading.jstree",a.proxy(function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]()},this)),-1!==this.settings.checkbox.cascade.indexOf("undetermined")&&this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree",a.proxy(function(){this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(a.proxy(this._undetermined,this),50)},this)),this.settings.checkbox.tie_selection||this.element.on("model.jstree",a.proxy(function(a,b){var c=this._model.data,d=c[b.parent],e=b.nodes,f,g;for(f=0,g=e.length;g>f;f++)c[e[f]].state.checked=c[e[f]].state.checked||c[e[f]].original&&c[e[f]].original.state&&c[e[f]].original.state.checked,c[e[f]].state.checked&&this._data.checkbox.selected.push(e[f])},this)),(-1!==this.settings.checkbox.cascade.indexOf("up")||-1!==this.settings.checkbox.cascade.indexOf("down"))&&this.element.on("model.jstree",a.proxy(function(b,c){var d=this._model.data,e=d[c.parent],f=c.nodes,g=[],h,i,j,k,l,m,n=this.settings.checkbox.cascade,o=this.settings.checkbox.tie_selection;if(-1!==n.indexOf("down"))if(e.state[o?"selected":"checked"]){for(i=0,j=f.length;j>i;i++)d[f[i]].state[o?"selected":"checked"]=!0;this._data[o?"core":"checkbox"].selected=this._data[o?"core":"checkbox"].selected.concat(f)}else for(i=0,j=f.length;j>i;i++)if(d[f[i]].state[o?"selected":"checked"]){for(k=0,l=d[f[i]].children_d.length;l>k;k++)d[d[f[i]].children_d[k]].state[o?"selected":"checked"]=!0;this._data[o?"core":"checkbox"].selected=this._data[o?"core":"checkbox"].selected.concat(d[f[i]].children_d)}if(-1!==n.indexOf("up")){for(i=0,j=e.children_d.length;j>i;i++)d[e.children_d[i]].children.length||g.push(d[e.children_d[i]].parent);for(g=a.vakata.array_unique(g),k=0,l=g.length;l>k;k++){e=d[g[k]];while(e&&e.id!==a.jstree.root){for(h=0,i=0,j=e.children.length;j>i;i++)h+=d[e.children[i]].state[o?"selected":"checked"];if(h!==j)break;e.state[o?"selected":"checked"]=!0,this._data[o?"core":"checkbox"].selected.push(e.id),m=this.get_node(e,!0),m&&m.length&&m.attr("aria-selected",!0).children(".jstree-anchor").addClass(o?"jstree-clicked":"jstree-checked"),e=this.get_node(e.parent)}}}this._data[o?"core":"checkbox"].selected=a.vakata.array_unique(this._data[o?"core":"checkbox"].selected)},this)).on(this.settings.checkbox.tie_selection?"select_node.jstree":"check_node.jstree",a.proxy(function(b,c){var d=this,e=c.node,f=this._model.data,g=this.get_node(e.parent),h,i,j,k,l=this.settings.checkbox.cascade,m=this.settings.checkbox.tie_selection,n={},o=this._data[m?"core":"checkbox"].selected;for(h=0,i=o.length;i>h;h++)n[o[h]]=!0;if(-1!==l.indexOf("down")){var p=this._cascade_new_checked_state(e.id,!0);e.children_d.concat(e.id).forEach(function(a){p.indexOf(a)>-1?n[a]=!0:delete n[a]})}if(-1!==l.indexOf("up"))while(g&&g.id!==a.jstree.root){for(j=0,h=0,i=g.children.length;i>h;h++)j+=f[g.children[h]].state[m?"selected":"checked"];if(j!==i)break;g.state[m?"selected":"checked"]=!0,n[g.id]=!0,k=this.get_node(g,!0),k&&k.length&&k.attr("aria-selected",!0).children(".jstree-anchor").addClass(m?"jstree-clicked":"jstree-checked"),g=this.get_node(g.parent)}o=[];for(h in n)n.hasOwnProperty(h)&&o.push(h);this._data[m?"core":"checkbox"].selected=o},this)).on(this.settings.checkbox.tie_selection?"deselect_all.jstree":"uncheck_all.jstree",a.proxy(function(b,c){var d=this.get_node(a.jstree.root),e=this._model.data,f,g,h;for(f=0,g=d.children_d.length;g>f;f++)h=e[d.children_d[f]],h&&h.original&&h.original.state&&h.original.state.undetermined&&(h.original.state.undetermined=!1)},this)).on(this.settings.checkbox.tie_selection?"deselect_node.jstree":"uncheck_node.jstree",a.proxy(function(a,b){var c=this,d=b.node,e=this.get_node(d,!0),f,g,h,i=this.settings.checkbox.cascade,j=this.settings.checkbox.tie_selection,k=this._data[j?"core":"checkbox"].selected,l={},m=[],n=d.children_d.concat(d.id);if(-1!==i.indexOf("down")){var o=this._cascade_new_checked_state(d.id,!1);k=k.filter(function(a){return-1===n.indexOf(a)||o.indexOf(a)>-1})}if(-1!==i.indexOf("up")&&-1===k.indexOf(d.id)){for(f=0,g=d.parents.length;g>f;f++)h=this._model.data[d.parents[f]],h.state[j?"selected":"checked"]=!1,h&&h.original&&h.original.state&&h.original.state.undetermined&&(h.original.state.undetermined=!1),h=this.get_node(d.parents[f],!0),h&&h.length&&h.attr("aria-selected",!1).children(".jstree-anchor").removeClass(j?"jstree-clicked":"jstree-checked");k=k.filter(function(a){return-1===d.parents.indexOf(a)})}this._data[j?"core":"checkbox"].selected=k},this)),-1!==this.settings.checkbox.cascade.indexOf("up")&&this.element.on("delete_node.jstree",a.proxy(function(b,c){var d=this.get_node(c.parent),e=this._model.data,f,g,h,i,j=this.settings.checkbox.tie_selection;while(d&&d.id!==a.jstree.root&&!d.state[j?"selected":"checked"]){for(h=0,f=0,g=d.children.length;g>f;f++)h+=e[d.children[f]].state[j?"selected":"checked"];if(!(g>0&&h===g))break;d.state[j?"selected":"checked"]=!0,this._data[j?"core":"checkbox"].selected.push(d.id),i=this.get_node(d,!0),i&&i.length&&i.attr("aria-selected",!0).children(".jstree-anchor").addClass(j?"jstree-clicked":"jstree-checked"),d=this.get_node(d.parent)}},this)).on("move_node.jstree",a.proxy(function(b,c){var d=c.is_multi,e=c.old_parent,f=this.get_node(c.parent),g=this._model.data,h,i,j,k,l,m=this.settings.checkbox.tie_selection;if(!d){h=this.get_node(e);while(h&&h.id!==a.jstree.root&&!h.state[m?"selected":"checked"]){for(i=0,j=0,k=h.children.length;k>j;j++)i+=g[h.children[j]].state[m?"selected":"checked"];if(!(k>0&&i===k))break;h.state[m?"selected":"checked"]=!0,this._data[m?"core":"checkbox"].selected.push(h.id),l=this.get_node(h,!0),l&&l.length&&l.attr("aria-selected",!0).children(".jstree-anchor").addClass(m?"jstree-clicked":"jstree-checked"),h=this.get_node(h.parent)}}h=f;while(h&&h.id!==a.jstree.root){for(i=0,j=0,k=h.children.length;k>j;j++)i+=g[h.children[j]].state[m?"selected":"checked"];if(i===k)h.state[m?"selected":"checked"]||(h.state[m?"selected":"checked"]=!0,this._data[m?"core":"checkbox"].selected.push(h.id),l=this.get_node(h,!0),l&&l.length&&l.attr("aria-selected",!0).children(".jstree-anchor").addClass(m?"jstree-clicked":"jstree-checked"));else{if(!h.state[m?"selected":"checked"])break;h.state[m?"selected":"checked"]=!1,this._data[m?"core":"checkbox"].selected=a.vakata.array_remove_item(this._data[m?"core":"checkbox"].selected,h.id),l=this.get_node(h,!0),l&&l.length&&l.attr("aria-selected",!1).children(".jstree-anchor").removeClass(m?"jstree-clicked":"jstree-checked")}h=this.get_node(h.parent)}},this))},this._undetermined=function(){if(null!==this.element){var c,d,e,f,g={},h=this._model.data,i=this.settings.checkbox.tie_selection,j=this._data[i?"core":"checkbox"].selected,k=[],l=this;for(c=0,d=j.length;d>c;c++)if(h[j[c]]&&h[j[c]].parents)for(e=0,f=h[j[c]].parents.length;f>e;e++){if(g[h[j[c]].parents[e]]!==b)break;h[j[c]].parents[e]!==a.jstree.root&&(g[h[j[c]].parents[e]]=!0,k.push(h[j[c]].parents[e]))}for(this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function(){var i=l.get_node(this),j;if(i)if(i.state.loaded){for(c=0,d=i.children_d.length;d>c;c++)if(j=h[i.children_d[c]],!j.state.loaded&&j.original&&j.original.state&&j.original.state.undetermined&&j.original.state.undetermined===!0)for(g[j.id]===b&&j.id!==a.jstree.root&&(g[j.id]=!0,k.push(j.id)),e=0,f=j.parents.length;f>e;e++)g[j.parents[e]]===b&&j.parents[e]!==a.jstree.root&&(g[j.parents[e]]=!0,k.push(j.parents[e]))}else if(i.original&&i.original.state&&i.original.state.undetermined&&i.original.state.undetermined===!0)for(g[i.id]===b&&i.id!==a.jstree.root&&(g[i.id]=!0,k.push(i.id)),e=0,f=i.parents.length;f>e;e++)g[i.parents[e]]===b&&i.parents[e]!==a.jstree.root&&(g[i.parents[e]]=!0,k.push(i.parents[e]))}),this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"),c=0,d=k.length;d>c;c++)h[k[c]].state[i?"selected":"checked"]||(j=this.get_node(k[c],!0),j&&j.length&&j.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined"))}},this.redraw_node=function(b,c,e,f){if(b=d.redraw_node.apply(this,arguments)){var g,h,i=null,k=null;for(g=0,h=b.childNodes.length;h>g;g++)if(b.childNodes[g]&&b.childNodes[g].className&&-1!==b.childNodes[g].className.indexOf("jstree-anchor")){i=b.childNodes[g];break}i&&(!this.settings.checkbox.tie_selection&&this._model.data[b.id].state.checked&&(i.className+=" jstree-checked"),k=j.cloneNode(!1),this._model.data[b.id].state.checkbox_disabled&&(k.className+=" jstree-checkbox-disabled"),i.insertBefore(k,i.childNodes[0]))}return e||-1===this.settings.checkbox.cascade.indexOf("undetermined")||(this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(a.proxy(this._undetermined,this),50)),b},this.show_checkboxes=function(){this._data.core.themes.checkboxes=!0,this.get_container_ul().removeClass("jstree-no-checkboxes")},this.hide_checkboxes=function(){this._data.core.themes.checkboxes=!1,this.get_container_ul().addClass("jstree-no-checkboxes")},this.toggle_checkboxes=function(){this._data.core.themes.checkboxes?this.hide_checkboxes():this.show_checkboxes()},this.is_undetermined=function(b){b=this.get_node(b);var c=this.settings.checkbox.cascade,d,e,f=this.settings.checkbox.tie_selection,g=this._data[f?"core":"checkbox"].selected,h=this._model.data;if(!b||b.state[f?"selected":"checked"]===!0||-1===c.indexOf("undetermined")||-1===c.indexOf("down")&&-1===c.indexOf("up"))return!1;if(!b.state.loaded&&b.original.state.undetermined===!0)return!0;for(d=0,e=b.children_d.length;e>d;d++)if(-1!==a.inArray(b.children_d[d],g)||!h[b.children_d[d]].state.loaded&&h[b.children_d[d]].original.state.undetermined)return!0;return!1},this.disable_checkbox=function(b){var c,d,e;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.disable_checkbox(b[c]);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(e=this.get_node(b,!0),void(b.state.checkbox_disabled||(b.state.checkbox_disabled=!0,e&&e.length&&e.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled"),this.trigger("disable_checkbox",{node:b})))):!1},this.enable_checkbox=function(b){var c,d,e;if(a.isArray(b)){for(b=b.slice(),c=0,d=b.length;d>c;c++)this.enable_checkbox(b[c]);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(e=this.get_node(b,!0),void(b.state.checkbox_disabled&&(b.state.checkbox_disabled=!1,e&&e.length&&e.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled"),this.trigger("enable_checkbox",{node:b})))):!1},this.activate_node=function(b,c){return a(c.target).hasClass("jstree-checkbox-disabled")?!1:(this.settings.checkbox.tie_selection&&(this.settings.checkbox.whole_node||a(c.target).hasClass("jstree-checkbox"))&&(c.ctrlKey=!0),this.settings.checkbox.tie_selection||!this.settings.checkbox.whole_node&&!a(c.target).hasClass("jstree-checkbox")?d.activate_node.call(this,b,c):this.is_disabled(b)?!1:(this.is_checked(b)?this.uncheck_node(b,c):this.check_node(b,c),void this.trigger("activate_node",{node:this.get_node(b)})))},this._cascade_new_checked_state=function(a,b){var c=this,d=this.settings.checkbox.tie_selection,e=this._model.data[a],f=[],g=[];if(!this.settings.checkbox.cascade_to_disabled&&e.state.disabled||!this.settings.checkbox.cascade_to_hidden&&e.state.hidden){var h=this.get_checked_descendants(a);e.state[d?"selected":"checked"]&&h.push(e.id),f=f.concat(h)}else{e.children&&e.children.forEach(function(a){var d=c._cascade_new_checked_state(a,b);f=f.concat(d),d.indexOf(a)>-1&&g.push(a)});var i=c.get_node(e,!0),j=g.length>0&&g.length<e.children.length;e.original&&e.original.state&&e.original.state.undetermined&&(e.original.state.undetermined=j),j?(e.state[d?"selected":"checked"]=!1,i.attr("aria-selected",!1).children(".jstree-anchor").removeClass(d?"jstree-clicked":"jstree-checked")):b&&g.length===e.children.length?(e.state[d?"selected":"checked"]=b,f.push(e.id),i.attr("aria-selected",!0).children(".jstree-anchor").addClass(d?"jstree-clicked":"jstree-checked")):(e.state[d?"selected":"checked"]=!1,i.attr("aria-selected",!1).children(".jstree-anchor").removeClass(d?"jstree-clicked":"jstree-checked"))}return f},this.get_checked_descendants=function(a){var b=this,c=b.settings.checkbox.tie_selection,d=b._model.data[a];return d.children_d.filter(function(a){return b._model.data[a].state[c?"selected":"checked"]})},this.check_node=function(b,c){if(this.settings.checkbox.tie_selection)return this.select_node(b,!1,!0,c);var d,e,f,g;if(a.isArray(b)){for(b=b.slice(),e=0,f=b.length;f>e;e++)this.check_node(b[e],c);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(d=this.get_node(b,!0),void(b.state.checked||(b.state.checked=!0,this._data.checkbox.selected.push(b.id),d&&d.length&&d.children(".jstree-anchor").addClass("jstree-checked"),this.trigger("check_node",{node:b,selected:this._data.checkbox.selected,event:c})))):!1},this.uncheck_node=function(b,c){if(this.settings.checkbox.tie_selection)return this.deselect_node(b,!1,c);var d,e,f;if(a.isArray(b)){for(b=b.slice(),d=0,e=b.length;e>d;d++)this.uncheck_node(b[d],c);return!0}return b=this.get_node(b),b&&b.id!==a.jstree.root?(f=this.get_node(b,!0),void(b.state.checked&&(b.state.checked=!1,this._data.checkbox.selected=a.vakata.array_remove_item(this._data.checkbox.selected,b.id),f.length&&f.children(".jstree-anchor").removeClass("jstree-checked"),this.trigger("uncheck_node",{node:b,selected:this._data.checkbox.selected,event:c})))):!1},this.check_all=function(){if(this.settings.checkbox.tie_selection)return this.select_all();var b=this._data.checkbox.selected.concat([]),c,d;for(this._data.checkbox.selected=this._model.data[a.jstree.root].children_d.concat(),c=0,d=this._data.checkbox.selected.length;d>c;c++)this._model.data[this._data.checkbox.selected[c]]&&(this._model.data[this._data.checkbox.selected[c]].state.checked=!0);this.redraw(!0),this.trigger("check_all",{selected:this._data.checkbox.selected})},this.uncheck_all=function(){if(this.settings.checkbox.tie_selection)return this.deselect_all();var a=this._data.checkbox.selected.concat([]),b,c;for(b=0,c=this._data.checkbox.selected.length;c>b;b++)this._model.data[this._data.checkbox.selected[b]]&&(this._model.data[this._data.checkbox.selected[b]].state.checked=!1);this._data.checkbox.selected=[],this.element.find(".jstree-checked").removeClass("jstree-checked"),this.trigger("uncheck_all",{selected:this._data.checkbox.selected,node:a})},this.is_checked=function(b){return this.settings.checkbox.tie_selection?this.is_selected(b):(b=this.get_node(b),b&&b.id!==a.jstree.root?b.state.checked:!1)},this.get_checked=function(b){return this.settings.checkbox.tie_selection?this.get_selected(b):b?a.map(this._data.checkbox.selected,a.proxy(function(a){return this.get_node(a)},this)):this._data.checkbox.selected},this.get_top_checked=function(b){if(this.settings.checkbox.tie_selection)return this.get_top_selected(b);var c=this.get_checked(!0),d={},e,f,g,h;for(e=0,f=c.length;f>e;e++)d[c[e].id]=c[e];for(e=0,f=c.length;f>e;e++)for(g=0,h=c[e].children_d.length;h>g;g++)d[c[e].children_d[g]]&&delete d[c[e].children_d[g]];c=[];for(e in d)d.hasOwnProperty(e)&&c.push(e);return b?a.map(c,a.proxy(function(a){return this.get_node(a)},this)):c},this.get_bottom_checked=function(b){if(this.settings.checkbox.tie_selection)return this.get_bottom_selected(b);var c=this.get_checked(!0),d=[],e,f;for(e=0,f=c.length;f>e;e++)c[e].children.length||d.push(c[e].id);return b?a.map(d,a.proxy(function(a){return this.get_node(a)},this)):d},this.load_node=function(b,c){var e,f,g,h,i,j;if(!a.isArray(b)&&!this.settings.checkbox.tie_selection&&(j=this.get_node(b),j&&j.state.loaded))for(e=0,f=j.children_d.length;f>e;e++)this._model.data[j.children_d[e]].state.checked&&(i=!0,this._data.checkbox.selected=a.vakata.array_remove_item(this._data.checkbox.selected,j.children_d[e]));return d.load_node.apply(this,arguments)},this.get_state=function(){var a=d.get_state.apply(this,arguments);return this.settings.checkbox.tie_selection?a:(a.checkbox=this._data.checkbox.selected.slice(),a)},this.set_state=function(b,c){var e=d.set_state.apply(this,arguments);if(e&&b.checkbox){if(!this.settings.checkbox.tie_selection){this.uncheck_all();var f=this;a.each(b.checkbox,function(a,b){f.check_node(b)})}return delete b.checkbox,this.set_state(b,c),!1}return e},this.refresh=function(a,b){return this.settings.checkbox.tie_selection||(this._data.checkbox.selected=[]),d.refresh.apply(this,arguments)}},a.jstree.defaults.conditionalselect=function(){return!0},a.jstree.plugins.conditionalselect=function(a,b){this.activate_node=function(a,c){this.settings.conditionalselect.call(this,this.get_node(a),c)&&b.activate_node.call(this,a,c)}},a.jstree.defaults.contextmenu={select_node:!0,show_at_node:!0,items:function(b,c){return{create:{separator_before:!1,separator_after:!0,_disabled:!1,label:"Create",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.create_node(d,{},"last",function(a){try{c.edit(a)}catch(b){setTimeout(function(){c.edit(a)},0)}})}},rename:{separator_before:!1,separator_after:!1,_disabled:!1,label:"Rename",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.edit(d)}},remove:{separator_before:!1,icon:!1,separator_after:!1,_disabled:!1,label:"Delete",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.is_selected(d)?c.delete_node(c.get_selected()):c.delete_node(d)}},ccp:{separator_before:!0,icon:!1,separator_after:!1,label:"Edit",action:!1,submenu:{cut:{separator_before:!1,separator_after:!1,label:"Cut",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.is_selected(d)?c.cut(c.get_top_selected()):c.cut(d)}},copy:{separator_before:!1,icon:!1,separator_after:!1,label:"Copy",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.is_selected(d)?c.copy(c.get_top_selected()):c.copy(d)}},paste:{separator_before:!1,icon:!1,_disabled:function(b){return!a.jstree.reference(b.reference).can_paste()},separator_after:!1,label:"Paste",action:function(b){var c=a.jstree.reference(b.reference),d=c.get_node(b.reference);c.paste(d)}}}}}}},a.jstree.plugins.contextmenu=function(c,d){this.bind=function(){d.bind.call(this);var b=0,c=null,e,f;this.element.on("init.jstree loading.jstree ready.jstree",a.proxy(function(){this.get_container_ul().addClass("jstree-contextmenu")},this)).on("contextmenu.jstree",".jstree-anchor",a.proxy(function(a,d){"input"!==a.target.tagName.toLowerCase()&&(a.preventDefault(),b=a.ctrlKey?+new Date:0,(d||c)&&(b=+new Date+1e4),c&&clearTimeout(c),this.is_loading(a.currentTarget)||this.show_contextmenu(a.currentTarget,a.pageX,a.pageY,a))},this)).on("click.jstree",".jstree-anchor",a.proxy(function(c){this._data.contextmenu.visible&&(!b||+new Date-b>250)&&a.vakata.context.hide(),b=0},this)).on("touchstart.jstree",".jstree-anchor",function(b){b.originalEvent&&b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]&&(e=b.originalEvent.changedTouches[0].clientX,f=b.originalEvent.changedTouches[0].clientY,c=setTimeout(function(){a(b.currentTarget).trigger("contextmenu",!0)},750))}).on("touchmove.vakata.jstree",function(a){c&&a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]&&(Math.abs(e-a.originalEvent.changedTouches[0].clientX)>50||Math.abs(f-a.originalEvent.changedTouches[0].clientY)>50)&&clearTimeout(c)}).on("touchend.vakata.jstree",function(a){c&&clearTimeout(c)}),a(i).on("context_hide.vakata.jstree",a.proxy(function(b,c){this._data.contextmenu.visible=!1,a(c.reference).removeClass("jstree-context")},this))},this.teardown=function(){this._data.contextmenu.visible&&a.vakata.context.hide(),d.teardown.call(this)},this.show_contextmenu=function(c,d,e,f){if(c=this.get_node(c),!c||c.id===a.jstree.root)return!1;var g=this.settings.contextmenu,h=this.get_node(c,!0),i=h.children(".jstree-anchor"),j=!1,k=!1;(g.show_at_node||d===b||e===b)&&(j=i.offset(),d=j.left,e=j.top+this._data.core.li_height),this.settings.contextmenu.select_node&&!this.is_selected(c)&&this.activate_node(c,f),k=g.items,a.isFunction(k)&&(k=k.call(this,c,a.proxy(function(a){this._show_contextmenu(c,d,e,a)},this))),a.isPlainObject(k)&&this._show_contextmenu(c,d,e,k)},this._show_contextmenu=function(b,c,d,e){var f=this.get_node(b,!0),g=f.children(".jstree-anchor");a(i).one("context_show.vakata.jstree",a.proxy(function(b,c){var d="jstree-contextmenu jstree-"+this.get_theme()+"-contextmenu";a(c.element).addClass(d),g.addClass("jstree-context")},this)),this._data.contextmenu.visible=!0,a.vakata.context.show(g,{x:c,y:d},e),this.trigger("show_contextmenu",{node:b,x:c,y:d})}},function(a){var b=!1,c={element:!1,reference:!1,position_x:0,position_y:0,items:[],html:"",is_visible:!1};a.vakata.context={settings:{hide_onmouseleave:0,icons:!0},_trigger:function(b){a(i).triggerHandler("context_"+b+".vakata",{reference:c.reference,element:c.element,position:{x:c.position_x,y:c.position_y}})},_execute:function(b){return b=c.items[b],b&&(!b._disabled||a.isFunction(b._disabled)&&!b._disabled({item:b,reference:c.reference,element:c.element}))&&b.action?b.action.call(null,{item:b,reference:c.reference,element:c.element,position:{x:c.position_x,y:c.position_y}}):!1},_parse:function(b,d){if(!b)return!1;d||(c.html="",c.items=[]);var e="",f=!1,g;return d&&(e+="<ul>"),a.each(b,function(b,d){return d?(c.items.push(d),!f&&d.separator_before&&(e+="<li class='vakata-context-separator'><a href='#' "+(a.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>"),f=!1,e+="<li class='"+(d._class||"")+(d._disabled===!0||a.isFunction(d._disabled)&&d._disabled({item:d,reference:c.reference,element:c.element})?" vakata-contextmenu-disabled ":"")+"' "+(d.shortcut?" data-shortcut='"+d.shortcut+"' ":"")+">",e+="<a href='#' rel='"+(c.items.length-1)+"' "+(d.title?"title='"+d.title+"'":"")+">",a.vakata.context.settings.icons&&(e+="<i ",d.icon&&(e+=-1!==d.icon.indexOf("/")||-1!==d.icon.indexOf(".")?" style='background:url(\""+d.icon+"\") center center no-repeat' ":" class='"+d.icon+"' "),e+="></i><span class='vakata-contextmenu-sep'>&#160;</span>"),e+=(a.isFunction(d.label)?d.label({item:b,reference:c.reference,element:c.element}):d.label)+(d.shortcut?' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-'+d.shortcut+'">'+(d.shortcut_label||"")+"</span>":"")+"</a>",d.submenu&&(g=a.vakata.context._parse(d.submenu,!0),g&&(e+=g)),e+="</li>",void(d.separator_after&&(e+="<li class='vakata-context-separator'><a href='#' "+(a.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>",f=!0))):!0}),e=e.replace(/<li class\='vakata-context-separator'\><\/li\>$/,""),d&&(e+="</ul>"),d||(c.html=e,a.vakata.context._trigger("parse")),e.length>10?e:!1},_show_submenu:function(c){if(c=a(c),c.length&&c.children("ul").length){var d=c.children("ul"),e=c.offset().left,f=e+c.outerWidth(),g=c.offset().top,h=d.width(),i=d.height(),j=a(window).width()+a(window).scrollLeft(),k=a(window).height()+a(window).scrollTop();b?c[f-(h+10+c.outerWidth())<0?"addClass":"removeClass"]("vakata-context-left"):c[f+h>j&&e>j-f?"addClass":"removeClass"]("vakata-context-right"),g+i+10>k&&d.css("bottom","-1px"),c.hasClass("vakata-context-right")?h>e&&d.css("margin-right",e-h):h>j-f&&d.css("margin-left",j-f-h),d.show()}},show:function(d,e,f){var g,h,i,j,k,l,m,n,o=!0;switch(c.element&&c.element.length&&c.element.width(""),o){case!e&&!d:return!1;case!!e&&!!d:c.reference=d,c.position_x=e.x,c.position_y=e.y;break;case!e&&!!d:c.reference=d,g=d.offset(),c.position_x=g.left+d.outerHeight(),c.position_y=g.top;break;case!!e&&!d:c.position_x=e.x,c.position_y=e.y}d&&!f&&a(d).data("vakata_contextmenu")&&(f=a(d).data("vakata_contextmenu")),a.vakata.context._parse(f)&&c.element.html(c.html),c.items.length&&(c.element.appendTo("body"),h=c.element,i=c.position_x,j=c.position_y,k=h.width(),l=h.height(),m=a(window).width()+a(window).scrollLeft(),n=a(window).height()+a(window).scrollTop(),b&&(i-=h.outerWidth()-a(d).outerWidth(),i<a(window).scrollLeft()+20&&(i=a(window).scrollLeft()+20)),i+k+20>m&&(i=m-(k+20)),j+l+20>n&&(j=n-(l+20)),c.element.css({left:i,top:j}).show().find("a").first().focus().parent().addClass("vakata-context-hover"),c.is_visible=!0,a.vakata.context._trigger("show"))},hide:function(){c.is_visible&&(c.element.hide().find("ul").hide().end().find(":focus").blur().end().detach(),c.is_visible=!1,a.vakata.context._trigger("hide"))}},a(function(){b="rtl"===a("body").css("direction");var d=!1;c.element=a("<ul class='vakata-context'></ul>"),c.element.on("mouseenter","li",function(b){b.stopImmediatePropagation(),a.contains(this,b.relatedTarget)||(d&&clearTimeout(d),c.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(),a(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context","li").addBack().addClass("vakata-context-hover"),a.vakata.context._show_submenu(this))}).on("mouseleave","li",function(b){
a.contains(this,b.relatedTarget)||a(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")}).on("mouseleave",function(b){a(this).find(".vakata-context-hover").removeClass("vakata-context-hover"),a.vakata.context.settings.hide_onmouseleave&&(d=setTimeout(function(b){return function(){a.vakata.context.hide()}}(this),a.vakata.context.settings.hide_onmouseleave))}).on("click","a",function(b){b.preventDefault(),a(this).blur().parent().hasClass("vakata-context-disabled")||a.vakata.context._execute(a(this).attr("rel"))===!1||a.vakata.context.hide()}).on("keydown","a",function(b){var d=null;switch(b.which){case 13:case 32:b.type="click",b.preventDefault(),a(b.currentTarget).trigger(b);break;case 37:c.is_visible&&(c.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus(),b.stopImmediatePropagation(),b.preventDefault());break;case 38:c.is_visible&&(d=c.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first(),d.length||(d=c.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()),d.addClass("vakata-context-hover").children("a").focus(),b.stopImmediatePropagation(),b.preventDefault());break;case 39:c.is_visible&&(c.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus(),b.stopImmediatePropagation(),b.preventDefault());break;case 40:c.is_visible&&(d=c.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first(),d.length||(d=c.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()),d.addClass("vakata-context-hover").children("a").focus(),b.stopImmediatePropagation(),b.preventDefault());break;case 27:a.vakata.context.hide(),b.preventDefault()}}).on("keydown",function(a){a.preventDefault();var b=c.element.find(".vakata-contextmenu-shortcut-"+a.which).parent();b.parent().not(".vakata-context-disabled")&&b.click()}),a(i).on("mousedown.vakata.jstree",function(b){c.is_visible&&c.element[0]!==b.target&&!a.contains(c.element[0],b.target)&&a.vakata.context.hide()}).on("context_show.vakata.jstree",function(a,d){c.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"),b&&c.element.addClass("vakata-context-rtl").css("direction","rtl"),c.element.find("ul").hide().end()})})}(a),a.jstree.defaults.dnd={copy:!0,open_timeout:500,is_draggable:!0,check_while_dragging:!0,always_copy:!1,inside_pos:0,drag_selection:!0,touch:!0,large_drop_target:!1,large_drag_target:!1,use_html5:!1};var k,l;a.jstree.plugins.dnd=function(b,c){this.init=function(a,b){c.init.call(this,a,b),this.settings.dnd.use_html5=this.settings.dnd.use_html5&&"draggable"in i.createElement("span")},this.bind=function(){c.bind.call(this),this.element.on(this.settings.dnd.use_html5?"dragstart.jstree":"mousedown.jstree touchstart.jstree",this.settings.dnd.large_drag_target?".jstree-node":".jstree-anchor",a.proxy(function(b){if(this.settings.dnd.large_drag_target&&a(b.target).closest(".jstree-node")[0]!==b.currentTarget)return!0;if("touchstart"===b.type&&(!this.settings.dnd.touch||"selected"===this.settings.dnd.touch&&!a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked")))return!0;var c=this.get_node(b.target),d=this.is_selected(c)&&this.settings.dnd.drag_selection?this.get_top_selected().length:1,e=d>1?d+" "+this.get_string("nodes"):this.get_text(b.currentTarget);if(this.settings.core.force_text&&(e=a.vakata.html.escape(e)),c&&c.id&&c.id!==a.jstree.root&&(1===b.which||"touchstart"===b.type||"dragstart"===b.type)&&(this.settings.dnd.is_draggable===!0||a.isFunction(this.settings.dnd.is_draggable)&&this.settings.dnd.is_draggable.call(this,d>1?this.get_top_selected(!0):[c],b))){if(k={jstree:!0,origin:this,obj:this.get_node(c,!0),nodes:d>1?this.get_top_selected():[c.id]},l=b.currentTarget,!this.settings.dnd.use_html5)return this.element.trigger("mousedown.jstree"),a.vakata.dnd.start(b,k,'<div id="jstree-dnd" class="jstree-'+this.get_theme()+" jstree-"+this.get_theme()+"-"+this.get_theme_variant()+" "+(this.settings.core.themes.responsive?" jstree-dnd-responsive":"")+'"><i class="jstree-icon jstree-er"></i>'+e+'<ins class="jstree-copy" style="display:none;">+</ins></div>');a.vakata.dnd._trigger("start",b,{helper:a(),element:l,data:k})}},this)),this.settings.dnd.use_html5&&this.element.on("dragover.jstree",function(b){return b.preventDefault(),a.vakata.dnd._trigger("move",b,{helper:a(),element:l,data:k}),!1}).on("drop.jstree",a.proxy(function(b){return b.preventDefault(),a.vakata.dnd._trigger("stop",b,{helper:a(),element:l,data:k}),!1},this))},this.redraw_node=function(a,b,d,e){if(a=c.redraw_node.apply(this,arguments),a&&this.settings.dnd.use_html5)if(this.settings.dnd.large_drag_target)a.setAttribute("draggable",!0);else{var f,g,h=null;for(f=0,g=a.childNodes.length;g>f;f++)if(a.childNodes[f]&&a.childNodes[f].className&&-1!==a.childNodes[f].className.indexOf("jstree-anchor")){h=a.childNodes[f];break}h&&h.setAttribute("draggable",!0)}return a}},a(function(){var c=!1,d=!1,e=!1,f=!1,g=a('<div id="jstree-marker">&#160;</div>').hide();a(i).on("dnd_start.vakata.jstree",function(a,b){c=!1,e=!1,b&&b.data&&b.data.jstree&&g.appendTo("body")}).on("dnd_move.vakata.jstree",function(h,i){var j=i.event.target!==e.target;if(f&&(!i.event||"dragover"!==i.event.type||j)&&clearTimeout(f),i&&i.data&&i.data.jstree&&(!i.event.target.id||"jstree-marker"!==i.event.target.id)){e=i.event;var k=a.jstree.reference(i.event.target),l=!1,m=!1,n=!1,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E;if(k&&k._data&&k._data.dnd)if(g.attr("class","jstree-"+k.get_theme()+(k.settings.core.themes.responsive?" jstree-dnd-responsive":"")),D=i.data.origin&&(i.data.origin.settings.dnd.always_copy||i.data.origin.settings.dnd.copy&&(i.event.metaKey||i.event.ctrlKey)),i.helper.children().attr("class","jstree-"+k.get_theme()+" jstree-"+k.get_theme()+"-"+k.get_theme_variant()+" "+(k.settings.core.themes.responsive?" jstree-dnd-responsive":"")).find(".jstree-copy").first()[D?"show":"hide"](),i.event.target!==k.element[0]&&i.event.target!==k.get_container_ul()[0]||0!==k.get_container_ul().children().length){if(l=k.settings.dnd.large_drop_target?a(i.event.target).closest(".jstree-node").children(".jstree-anchor"):a(i.event.target).closest(".jstree-anchor"),l&&l.length&&l.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")&&(m=l.offset(),n=(i.event.pageY!==b?i.event.pageY:i.event.originalEvent.pageY)-m.top,r=l.outerHeight(),u=r/3>n?["b","i","a"]:n>r-r/3?["a","i","b"]:n>r/2?["i","a","b"]:["i","b","a"],a.each(u,function(b,e){switch(e){case"b":p=m.left-6,q=m.top,s=k.get_parent(l),t=l.parent().index();break;case"i":B=k.settings.dnd.inside_pos,C=k.get_node(l.parent()),p=m.left-2,q=m.top+r/2+1,s=C.id,t="first"===B?0:"last"===B?C.children.length:Math.min(B,C.children.length);break;case"a":p=m.left-6,q=m.top+r,s=k.get_parent(l),t=l.parent().index()+1}for(v=!0,w=0,x=i.data.nodes.length;x>w;w++)if(y=i.data.origin&&(i.data.origin.settings.dnd.always_copy||i.data.origin.settings.dnd.copy&&(i.event.metaKey||i.event.ctrlKey))?"copy_node":"move_node",z=t,"move_node"===y&&"a"===e&&i.data.origin&&i.data.origin===k&&s===k.get_parent(i.data.nodes[w])&&(A=k.get_node(s),z>a.inArray(i.data.nodes[w],A.children)&&(z-=1)),v=v&&(k&&k.settings&&k.settings.dnd&&k.settings.dnd.check_while_dragging===!1||k.check(y,i.data.origin&&i.data.origin!==k?i.data.origin.get_node(i.data.nodes[w]):i.data.nodes[w],s,z,{dnd:!0,ref:k.get_node(l.parent()),pos:e,origin:i.data.origin,is_multi:i.data.origin&&i.data.origin!==k,is_foreign:!i.data.origin})),!v){k&&k.last_error&&(d=k.last_error());break}return"i"===e&&l.parent().is(".jstree-closed")&&k.settings.dnd.open_timeout&&(!i.event||"dragover"!==i.event.type||j)&&(f&&clearTimeout(f),f=setTimeout(function(a,b){return function(){a.open_node(b)}}(k,l),k.settings.dnd.open_timeout)),v?(E=k.get_node(s,!0),E.hasClass(".jstree-dnd-parent")||(a(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),E.addClass("jstree-dnd-parent")),c={ins:k,par:s,pos:"i"!==e||"last"!==B||0!==t||k.is_loaded(C)?t:"last"},g.css({left:p+"px",top:q+"px"}).show(),i.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),i.event.originalEvent&&i.event.originalEvent.dataTransfer&&(i.event.originalEvent.dataTransfer.dropEffect=D?"copy":"move"),d={},u=!0,!1):void 0}),u===!0))return}else{for(v=!0,w=0,x=i.data.nodes.length;x>w;w++)if(v=v&&k.check(i.data.origin&&(i.data.origin.settings.dnd.always_copy||i.data.origin.settings.dnd.copy&&(i.event.metaKey||i.event.ctrlKey))?"copy_node":"move_node",i.data.origin&&i.data.origin!==k?i.data.origin.get_node(i.data.nodes[w]):i.data.nodes[w],a.jstree.root,"last",{dnd:!0,ref:k.get_node(a.jstree.root),pos:"i",origin:i.data.origin,is_multi:i.data.origin&&i.data.origin!==k,is_foreign:!i.data.origin}),!v)break;if(v)return c={ins:k,par:a.jstree.root,pos:"last"},g.hide(),i.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),void(i.event.originalEvent&&i.event.originalEvent.dataTransfer&&(i.event.originalEvent.dataTransfer.dropEffect=D?"copy":"move"))}a(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),c=!1,i.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"),i.event.originalEvent&&i.event.originalEvent.dataTransfer&&(i.event.originalEvent.dataTransfer.dropEffect="none"),g.hide()}}).on("dnd_scroll.vakata.jstree",function(a,b){b&&b.data&&b.data.jstree&&(g.hide(),c=!1,e=!1,b.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))}).on("dnd_stop.vakata.jstree",function(b,h){if(a(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),f&&clearTimeout(f),h&&h.data&&h.data.jstree){g.hide().detach();var i,j,k=[];if(c){for(i=0,j=h.data.nodes.length;j>i;i++)k[i]=h.data.origin?h.data.origin.get_node(h.data.nodes[i]):h.data.nodes[i];c.ins[h.data.origin&&(h.data.origin.settings.dnd.always_copy||h.data.origin.settings.dnd.copy&&(h.event.metaKey||h.event.ctrlKey))?"copy_node":"move_node"](k,c.par,c.pos,!1,!1,!1,h.data.origin)}else i=a(h.event.target).closest(".jstree"),i.length&&d&&d.error&&"check"===d.error&&(i=i.jstree(!0),i&&i.settings.core.error.call(this,d));e=!1,c=!1}}).on("keyup.jstree keydown.jstree",function(b,h){h=a.vakata.dnd._get(),h&&h.data&&h.data.jstree&&("keyup"===b.type&&27===b.which?(f&&clearTimeout(f),c=!1,d=!1,e=!1,f=!1,g.hide().detach(),a.vakata.dnd._clean()):(h.helper.find(".jstree-copy").first()[h.data.origin&&(h.data.origin.settings.dnd.always_copy||h.data.origin.settings.dnd.copy&&(b.metaKey||b.ctrlKey))?"show":"hide"](),e&&(e.metaKey=b.metaKey,e.ctrlKey=b.ctrlKey,a.vakata.dnd._trigger("move",e))))})}),function(a){a.vakata.html={div:a("<div />"),escape:function(b){return a.vakata.html.div.text(b).html()},strip:function(b){return a.vakata.html.div.empty().append(a.parseHTML(b)).text()}};var c={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1};a.vakata.dnd={settings:{scroll_speed:10,scroll_proximity:20,helper_left:5,helper_top:10,threshold:5,threshold_touch:50},_trigger:function(c,d,e){e===b&&(e=a.vakata.dnd._get()),e.event=d,a(i).triggerHandler("dnd_"+c+".vakata",e)},_get:function(){return{data:c.data,element:c.element,helper:c.helper}},_clean:function(){c.helper&&c.helper.remove(),c.scroll_i&&(clearInterval(c.scroll_i),c.scroll_i=!1),c={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1},a(i).off("mousemove.vakata.jstree touchmove.vakata.jstree",a.vakata.dnd.drag),a(i).off("mouseup.vakata.jstree touchend.vakata.jstree",a.vakata.dnd.stop)},_scroll:function(b){if(!c.scroll_e||!c.scroll_l&&!c.scroll_t)return c.scroll_i&&(clearInterval(c.scroll_i),c.scroll_i=!1),!1;if(!c.scroll_i)return c.scroll_i=setInterval(a.vakata.dnd._scroll,100),!1;if(b===!0)return!1;var d=c.scroll_e.scrollTop(),e=c.scroll_e.scrollLeft();c.scroll_e.scrollTop(d+c.scroll_t*a.vakata.dnd.settings.scroll_speed),c.scroll_e.scrollLeft(e+c.scroll_l*a.vakata.dnd.settings.scroll_speed),(d!==c.scroll_e.scrollTop()||e!==c.scroll_e.scrollLeft())&&a.vakata.dnd._trigger("scroll",c.scroll_e)},start:function(b,d,e){"touchstart"===b.type&&b.originalEvent&&b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]&&(b.pageX=b.originalEvent.changedTouches[0].pageX,b.pageY=b.originalEvent.changedTouches[0].pageY,b.target=i.elementFromPoint(b.originalEvent.changedTouches[0].pageX-window.pageXOffset,b.originalEvent.changedTouches[0].pageY-window.pageYOffset)),c.is_drag&&a.vakata.dnd.stop({});try{b.currentTarget.unselectable="on",b.currentTarget.onselectstart=function(){return!1},b.currentTarget.style&&(b.currentTarget.style.touchAction="none",b.currentTarget.style.msTouchAction="none",b.currentTarget.style.MozUserSelect="none")}catch(f){}return c.init_x=b.pageX,c.init_y=b.pageY,c.data=d,c.is_down=!0,c.element=b.currentTarget,c.target=b.target,c.is_touch="touchstart"===b.type,e!==!1&&(c.helper=a("<div id='vakata-dnd'></div>").html(e).css({display:"block",margin:"0",padding:"0",position:"absolute",top:"-2000px",lineHeight:"16px",zIndex:"10000"})),a(i).on("mousemove.vakata.jstree touchmove.vakata.jstree",a.vakata.dnd.drag),a(i).on("mouseup.vakata.jstree touchend.vakata.jstree",a.vakata.dnd.stop),!1},drag:function(b){if("touchmove"===b.type&&b.originalEvent&&b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]&&(b.pageX=b.originalEvent.changedTouches[0].pageX,b.pageY=b.originalEvent.changedTouches[0].pageY,b.target=i.elementFromPoint(b.originalEvent.changedTouches[0].pageX-window.pageXOffset,b.originalEvent.changedTouches[0].pageY-window.pageYOffset)),c.is_down){if(!c.is_drag){if(!(Math.abs(b.pageX-c.init_x)>(c.is_touch?a.vakata.dnd.settings.threshold_touch:a.vakata.dnd.settings.threshold)||Math.abs(b.pageY-c.init_y)>(c.is_touch?a.vakata.dnd.settings.threshold_touch:a.vakata.dnd.settings.threshold)))return;c.helper&&(c.helper.appendTo("body"),c.helper_w=c.helper.outerWidth()),c.is_drag=!0,a(c.target).one("click.vakata",!1),a.vakata.dnd._trigger("start",b)}var d=!1,e=!1,f=!1,g=!1,h=!1,j=!1,k=!1,l=!1,m=!1,n=!1;return c.scroll_t=0,c.scroll_l=0,c.scroll_e=!1,a(a(b.target).parentsUntil("body").addBack().get().reverse()).filter(function(){return/^auto|scroll$/.test(a(this).css("overflow"))&&(this.scrollHeight>this.offsetHeight||this.scrollWidth>this.offsetWidth)}).each(function(){var d=a(this),e=d.offset();return this.scrollHeight>this.offsetHeight&&(e.top+d.height()-b.pageY<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_t=1),b.pageY-e.top<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_t=-1)),this.scrollWidth>this.offsetWidth&&(e.left+d.width()-b.pageX<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_l=1),b.pageX-e.left<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_l=-1)),c.scroll_t||c.scroll_l?(c.scroll_e=a(this),!1):void 0}),c.scroll_e||(d=a(i),e=a(window),f=d.height(),g=e.height(),h=d.width(),j=e.width(),k=d.scrollTop(),l=d.scrollLeft(),f>g&&b.pageY-k<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_t=-1),f>g&&g-(b.pageY-k)<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_t=1),h>j&&b.pageX-l<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_l=-1),h>j&&j-(b.pageX-l)<a.vakata.dnd.settings.scroll_proximity&&(c.scroll_l=1),(c.scroll_t||c.scroll_l)&&(c.scroll_e=d)),c.scroll_e&&a.vakata.dnd._scroll(!0),c.helper&&(m=parseInt(b.pageY+a.vakata.dnd.settings.helper_top,10),n=parseInt(b.pageX+a.vakata.dnd.settings.helper_left,10),f&&m+25>f&&(m=f-50),h&&n+c.helper_w>h&&(n=h-(c.helper_w+2)),c.helper.css({left:n+"px",top:m+"px"})),a.vakata.dnd._trigger("move",b),!1}},stop:function(b){if("touchend"===b.type&&b.originalEvent&&b.originalEvent.changedTouches&&b.originalEvent.changedTouches[0]&&(b.pageX=b.originalEvent.changedTouches[0].pageX,b.pageY=b.originalEvent.changedTouches[0].pageY,b.target=i.elementFromPoint(b.originalEvent.changedTouches[0].pageX-window.pageXOffset,b.originalEvent.changedTouches[0].pageY-window.pageYOffset)),c.is_drag)b.target!==c.target&&a(c.target).off("click.vakata"),a.vakata.dnd._trigger("stop",b);else if("touchend"===b.type&&b.target===c.target){var d=setTimeout(function(){a(b.target).click()},100);a(b.target).one("click",function(){d&&clearTimeout(d)})}return a.vakata.dnd._clean(),!1}}}(a),a.jstree.defaults.massload=null,a.jstree.plugins.massload=function(b,c){this.init=function(a,b){this._data.massload={},c.init.call(this,a,b)},this._load_nodes=function(b,d,e,f){var g=this.settings.massload,h=JSON.stringify(b),i=[],j=this._model.data,k,l,m;if(!e){for(k=0,l=b.length;l>k;k++)(!j[b[k]]||!j[b[k]].state.loaded&&!j[b[k]].state.failed||f)&&(i.push(b[k]),m=this.get_node(b[k],!0),m&&m.length&&m.addClass("jstree-loading").attr("aria-busy",!0));if(this._data.massload={},i.length){if(a.isFunction(g))return g.call(this,i,a.proxy(function(a){var g,h;if(a)for(g in a)a.hasOwnProperty(g)&&(this._data.massload[g]=a[g]);for(g=0,h=b.length;h>g;g++)m=this.get_node(b[g],!0),m&&m.length&&m.removeClass("jstree-loading").attr("aria-busy",!1);c._load_nodes.call(this,b,d,e,f)},this));if("object"==typeof g&&g&&g.url)return g=a.extend(!0,{},g),a.isFunction(g.url)&&(g.url=g.url.call(this,i)),a.isFunction(g.data)&&(g.data=g.data.call(this,i)),a.ajax(g).done(a.proxy(function(a,g,h){var i,j;if(a)for(i in a)a.hasOwnProperty(i)&&(this._data.massload[i]=a[i]);for(i=0,j=b.length;j>i;i++)m=this.get_node(b[i],!0),m&&m.length&&m.removeClass("jstree-loading").attr("aria-busy",!1);c._load_nodes.call(this,b,d,e,f)},this)).fail(a.proxy(function(a){c._load_nodes.call(this,b,d,e,f)},this))}}return c._load_nodes.call(this,b,d,e,f)},this._load_node=function(b,d){var e=this._data.massload[b.id],f=null,g;return e?(f=this["string"==typeof e?"_append_html_data":"_append_json_data"](b,"string"==typeof e?a(a.parseHTML(e)).filter(function(){return 3!==this.nodeType}):e,function(a){d.call(this,a)}),g=this.get_node(b.id,!0),g&&g.length&&g.removeClass("jstree-loading").attr("aria-busy",!1),delete this._data.massload[b.id],f):c._load_node.call(this,b,d)}},a.jstree.defaults.search={ajax:!1,fuzzy:!1,case_sensitive:!1,show_only_matches:!1,show_only_matches_children:!1,close_opened_onclear:!0,search_leaves_only:!1,search_callback:!1},a.jstree.plugins.search=function(c,d){this.bind=function(){d.bind.call(this),this._data.search.str="",this._data.search.dom=a(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=!1,this._data.search.smc=!1,this._data.search.hdn=[],this.element.on("search.jstree",a.proxy(function(b,c){if(this._data.search.som&&c.res.length){var d=this._model.data,e,f,g=[],h,i;for(e=0,f=c.res.length;f>e;e++)if(d[c.res[e]]&&!d[c.res[e]].state.hidden&&(g.push(c.res[e]),g=g.concat(d[c.res[e]].parents),this._data.search.smc))for(h=0,i=d[c.res[e]].children_d.length;i>h;h++)d[d[c.res[e]].children_d[h]]&&!d[d[c.res[e]].children_d[h]].state.hidden&&g.push(d[c.res[e]].children_d[h]);g=a.vakata.array_remove_item(a.vakata.array_unique(g),a.jstree.root),this._data.search.hdn=this.hide_all(!0),this.show_node(g,!0),this.redraw(!0)}},this)).on("clear_search.jstree",a.proxy(function(a,b){this._data.search.som&&b.res.length&&(this.show_node(this._data.search.hdn,!0),this.redraw(!0))},this))},this.search=function(c,d,e,f,g,h){if(c===!1||""===a.trim(c.toString()))return this.clear_search();f=this.get_node(f),f=f&&f.id?f.id:null,c=c.toString();var i=this.settings.search,j=i.ajax?i.ajax:!1,k=this._model.data,l=null,m=[],n=[],o,p;if(this._data.search.res.length&&!g&&this.clear_search(),e===b&&(e=i.show_only_matches),h===b&&(h=i.show_only_matches_children),!d&&j!==!1)return a.isFunction(j)?j.call(this,c,a.proxy(function(b){b&&b.d&&(b=b.d),this._load_nodes(a.isArray(b)?a.vakata.array_unique(b):[],function(){this.search(c,!0,e,f,g,h)})},this),f):(j=a.extend({},j),j.data||(j.data={}),j.data.str=c,f&&(j.data.inside=f),this._data.search.lastRequest&&this._data.search.lastRequest.abort(),this._data.search.lastRequest=a.ajax(j).fail(a.proxy(function(){this._data.core.last_error={error:"ajax",plugin:"search",id:"search_01",reason:"Could not load search parents",data:JSON.stringify(j)},this.settings.core.error.call(this,this._data.core.last_error)},this)).done(a.proxy(function(b){b&&b.d&&(b=b.d),this._load_nodes(a.isArray(b)?a.vakata.array_unique(b):[],function(){this.search(c,!0,e,f,g,h)})},this)),this._data.search.lastRequest);if(g||(this._data.search.str=c,this._data.search.dom=a(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=e,this._data.search.smc=h),l=new a.vakata.search(c,!0,{caseSensitive:i.case_sensitive,fuzzy:i.fuzzy}),a.each(k[f?f:a.jstree.root].children_d,function(a,b){var d=k[b];d.text&&!d.state.hidden&&(!i.search_leaves_only||d.state.loaded&&0===d.children.length)&&(i.search_callback&&i.search_callback.call(this,c,d)||!i.search_callback&&l.search(d.text).isMatch)&&(m.push(b),n=n.concat(d.parents))}),m.length){for(n=a.vakata.array_unique(n),o=0,p=n.length;p>o;o++)n[o]!==a.jstree.root&&k[n[o]]&&this.open_node(n[o],null,0)===!0&&this._data.search.opn.push(n[o]);g?(this._data.search.dom=this._data.search.dom.add(a(this.element[0].querySelectorAll("#"+a.map(m,function(b){return-1!=="0123456789".indexOf(b[0])?"\\3"+b[0]+" "+b.substr(1).replace(a.jstree.idregex,"\\$&"):b.replace(a.jstree.idregex,"\\$&")}).join(", #")))),this._data.search.res=a.vakata.array_unique(this._data.search.res.concat(m))):(this._data.search.dom=a(this.element[0].querySelectorAll("#"+a.map(m,function(b){return-1!=="0123456789".indexOf(b[0])?"\\3"+b[0]+" "+b.substr(1).replace(a.jstree.idregex,"\\$&"):b.replace(a.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.res=m),this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")}this.trigger("search",{nodes:this._data.search.dom,str:c,res:this._data.search.res,show_only_matches:e})},this.clear_search=function(){this.settings.search.close_opened_onclear&&this.close_node(this._data.search.opn,0),this.trigger("clear_search",{nodes:this._data.search.dom,str:this._data.search.str,res:this._data.search.res}),this._data.search.res.length&&(this._data.search.dom=a(this.element[0].querySelectorAll("#"+a.map(this._data.search.res,function(b){return-1!=="0123456789".indexOf(b[0])?"\\3"+b[0]+" "+b.substr(1).replace(a.jstree.idregex,"\\$&"):b.replace(a.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search")),this._data.search.str="",this._data.search.res=[],this._data.search.opn=[],this._data.search.dom=a()},this.redraw_node=function(b,c,e,f){if(b=d.redraw_node.apply(this,arguments),b&&-1!==a.inArray(b.id,this._data.search.res)){var g,h,i=null;for(g=0,h=b.childNodes.length;h>g;g++)if(b.childNodes[g]&&b.childNodes[g].className&&-1!==b.childNodes[g].className.indexOf("jstree-anchor")){i=b.childNodes[g];break}i&&(i.className+=" jstree-search")}return b}},function(a){a.vakata.search=function(b,c,d){d=d||{},d=a.extend({},a.vakata.search.defaults,d),d.fuzzy!==!1&&(d.fuzzy=!0),b=d.caseSensitive?b:b.toLowerCase();var e=d.location,f=d.distance,g=d.threshold,h=b.length,i,j,k,l;return h>32&&(d.fuzzy=!1),d.fuzzy&&(i=1<<h-1,j=function(){var a={},c=0;for(c=0;h>c;c++)a[b.charAt(c)]=0;for(c=0;h>c;c++)a[b.charAt(c)]|=1<<h-c-1;return a}(),k=function(a,b){var c=a/h,d=Math.abs(e-b);return f?c+d/f:d?1:c}),l=function(a){if(a=d.caseSensitive?a:a.toLowerCase(),b===a||-1!==a.indexOf(b))return{isMatch:!0,score:0};if(!d.fuzzy)return{isMatch:!1,score:1};var c,f,l=a.length,m=g,n=a.indexOf(b,e),o,p,q=h+l,r,s,t,u,v,w=1,x=[];for(-1!==n&&(m=Math.min(k(0,n),m),n=a.lastIndexOf(b,e+h),-1!==n&&(m=Math.min(k(0,n),m))),n=-1,c=0;h>c;c++){o=0,p=q;while(p>o)k(c,e+p)<=m?o=p:q=p,p=Math.floor((q-o)/2+o);for(q=p,s=Math.max(1,e-p+1),t=Math.min(e+p,l)+h,u=new Array(t+2),u[t+1]=(1<<c)-1,f=t;f>=s;f--)if(v=j[a.charAt(f-1)],0===c?u[f]=(u[f+1]<<1|1)&v:u[f]=(u[f+1]<<1|1)&v|((r[f+1]|r[f])<<1|1)|r[f+1],u[f]&i&&(w=k(c,f-1),m>=w)){if(m=w,n=f-1,x.push(n),!(n>e))break;s=Math.max(1,2*e-n)}if(k(c+1,e)>m)break;r=u}return{isMatch:n>=0,score:w}},c===!0?{search:l}:l(c)},a.vakata.search.defaults={location:0,distance:100,threshold:.6,fuzzy:!1,caseSensitive:!1}}(a),a.jstree.defaults.sort=function(a,b){return this.get_text(a)>this.get_text(b)?1:-1},a.jstree.plugins.sort=function(b,c){this.bind=function(){c.bind.call(this),this.element.on("model.jstree",a.proxy(function(a,b){this.sort(b.parent,!0)},this)).on("rename_node.jstree create_node.jstree",a.proxy(function(a,b){this.sort(b.parent||b.node.parent,!1),this.redraw_node(b.parent||b.node.parent,!0)},this)).on("move_node.jstree copy_node.jstree",a.proxy(function(a,b){this.sort(b.parent,!1),this.redraw_node(b.parent,!0)},this))},this.sort=function(b,c){var d,e;if(b=this.get_node(b),b&&b.children&&b.children.length&&(b.children.sort(a.proxy(this.settings.sort,this)),c))for(d=0,e=b.children_d.length;e>d;d++)this.sort(b.children_d[d],!1)}};var m=!1;a.jstree.defaults.state={key:"jstree",events:"changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",ttl:!1,filter:!1},a.jstree.plugins.state=function(b,c){this.bind=function(){c.bind.call(this);var b=a.proxy(function(){this.element.on(this.settings.state.events,a.proxy(function(){m&&clearTimeout(m),m=setTimeout(a.proxy(function(){this.save_state()},this),100)},this)),this.trigger("state_ready")},this);this.element.on("ready.jstree",a.proxy(function(a,c){this.element.one("restore_state.jstree",b),this.restore_state()||b()},this))},this.save_state=function(){var b={state:this.get_state(),ttl:this.settings.state.ttl,sec:+new Date};a.vakata.storage.set(this.settings.state.key,JSON.stringify(b))},this.restore_state=function(){var b=a.vakata.storage.get(this.settings.state.key);if(b)try{b=JSON.parse(b)}catch(c){return!1}return b&&b.ttl&&b.sec&&+new Date-b.sec>b.ttl?!1:(b&&b.state&&(b=b.state),b&&a.isFunction(this.settings.state.filter)&&(b=this.settings.state.filter.call(this,b)),b?(this.element.one("set_state.jstree",function(c,d){d.instance.trigger("restore_state",{state:a.extend(!0,{},b)})}),this.set_state(b),!0):!1)},this.clear_state=function(){return a.vakata.storage.del(this.settings.state.key)}},function(a,b){a.vakata.storage={set:function(a,b){return window.localStorage.setItem(a,b)},get:function(a){return window.localStorage.getItem(a)},del:function(a){return window.localStorage.removeItem(a)}}}(a),a.jstree.defaults.types={"default":{}},a.jstree.defaults.types[a.jstree.root]={},a.jstree.plugins.types=function(c,d){this.init=function(c,e){var f,g;if(e&&e.types&&e.types["default"])for(f in e.types)if("default"!==f&&f!==a.jstree.root&&e.types.hasOwnProperty(f))for(g in e.types["default"])e.types["default"].hasOwnProperty(g)&&e.types[f][g]===b&&(e.types[f][g]=e.types["default"][g]);d.init.call(this,c,e),this._model.data[a.jstree.root].type=a.jstree.root},this.refresh=function(b,c){d.refresh.call(this,b,c),this._model.data[a.jstree.root].type=a.jstree.root},this.bind=function(){this.element.on("model.jstree",a.proxy(function(c,d){var e=this._model.data,f=d.nodes,g=this.settings.types,h,i,j="default",k;for(h=0,i=f.length;i>h;h++){if(j="default",e[f[h]].original&&e[f[h]].original.type&&g[e[f[h]].original.type]&&(j=e[f[h]].original.type),e[f[h]].data&&e[f[h]].data.jstree&&e[f[h]].data.jstree.type&&g[e[f[h]].data.jstree.type]&&(j=e[f[h]].data.jstree.type),e[f[h]].type=j,e[f[h]].icon===!0&&g[j].icon!==b&&(e[f[h]].icon=g[j].icon),g[j].li_attr!==b&&"object"==typeof g[j].li_attr)for(k in g[j].li_attr)if(g[j].li_attr.hasOwnProperty(k)){if("id"===k)continue;e[f[h]].li_attr[k]===b?e[f[h]].li_attr[k]=g[j].li_attr[k]:"class"===k&&(e[f[h]].li_attr["class"]=g[j].li_attr["class"]+" "+e[f[h]].li_attr["class"])}if(g[j].a_attr!==b&&"object"==typeof g[j].a_attr)for(k in g[j].a_attr)if(g[j].a_attr.hasOwnProperty(k)){if("id"===k)continue;e[f[h]].a_attr[k]===b?e[f[h]].a_attr[k]=g[j].a_attr[k]:"href"===k&&"#"===e[f[h]].a_attr[k]?e[f[h]].a_attr.href=g[j].a_attr.href:"class"===k&&(e[f[h]].a_attr["class"]=g[j].a_attr["class"]+" "+e[f[h]].a_attr["class"])}}e[a.jstree.root].type=a.jstree.root},this)),d.bind.call(this)},this.get_json=function(b,c,e){var f,g,h=this._model.data,i=c?a.extend(!0,{},c,{no_id:!1}):{},j=d.get_json.call(this,b,i,e);if(j===!1)return!1;if(a.isArray(j))for(f=0,g=j.length;g>f;f++)j[f].type=j[f].id&&h[j[f].id]&&h[j[f].id].type?h[j[f].id].type:"default",c&&c.no_id&&(delete j[f].id,j[f].li_attr&&j[f].li_attr.id&&delete j[f].li_attr.id,j[f].a_attr&&j[f].a_attr.id&&delete j[f].a_attr.id);else j.type=j.id&&h[j.id]&&h[j.id].type?h[j.id].type:"default",c&&c.no_id&&(j=this._delete_ids(j));return j},this._delete_ids=function(b){if(a.isArray(b)){for(var c=0,d=b.length;d>c;c++)b[c]=this._delete_ids(b[c]);return b}return delete b.id,b.li_attr&&b.li_attr.id&&delete b.li_attr.id,b.a_attr&&b.a_attr.id&&delete b.a_attr.id,b.children&&a.isArray(b.children)&&(b.children=this._delete_ids(b.children)),b},this.check=function(c,e,f,g,h){if(d.check.call(this,c,e,f,g,h)===!1)return!1;e=e&&e.id?e:this.get_node(e),f=f&&f.id?f:this.get_node(f);var i=e&&e.id?h&&h.origin?h.origin:a.jstree.reference(e.id):null,j,k,l,m;switch(i=i&&i._model&&i._model.data?i._model.data:null,c){case"create_node":case"move_node":case"copy_node":if("move_node"!==c||-1===a.inArray(e.id,f.children)){if(j=this.get_rules(f),j.max_children!==b&&-1!==j.max_children&&j.max_children===f.children.length)return this._data.core.last_error={error:"check",plugin:"types",id:"types_01",reason:"max_children prevents function: "+c,data:JSON.stringify({chk:c,pos:g,obj:e&&e.id?e.id:!1,par:f&&f.id?f.id:!1})},!1;if(j.valid_children!==b&&-1!==j.valid_children&&-1===a.inArray(e.type||"default",j.valid_children))return this._data.core.last_error={error:"check",plugin:"types",id:"types_02",reason:"valid_children prevents function: "+c,data:JSON.stringify({chk:c,pos:g,obj:e&&e.id?e.id:!1,par:f&&f.id?f.id:!1})},!1;if(i&&e.children_d&&e.parents){for(k=0,l=0,m=e.children_d.length;m>l;l++)k=Math.max(k,i[e.children_d[l]].parents.length);k=k-e.parents.length+1}(0>=k||k===b)&&(k=1);do{if(j.max_depth!==b&&-1!==j.max_depth&&j.max_depth<k)return this._data.core.last_error={error:"check",plugin:"types",id:"types_03",reason:"max_depth prevents function: "+c,data:JSON.stringify({chk:c,pos:g,obj:e&&e.id?e.id:!1,par:f&&f.id?f.id:!1})},!1;f=this.get_node(f.parent),j=this.get_rules(f),k++}while(f)}}return!0},this.get_rules=function(a){if(a=this.get_node(a),!a)return!1;var c=this.get_type(a,!0);return c.max_depth===b&&(c.max_depth=-1),c.max_children===b&&(c.max_children=-1),c.valid_children===b&&(c.valid_children=-1),c},this.get_type=function(b,c){return b=this.get_node(b),b?c?a.extend({type:b.type},this.settings.types[b.type]):b.type:!1},this.set_type=function(c,d){var e=this._model.data,f,g,h,i,j,k,l,m;if(a.isArray(c)){for(c=c.slice(),g=0,h=c.length;h>g;g++)this.set_type(c[g],d);return!0}if(f=this.settings.types,c=this.get_node(c),!f[d]||!c)return!1;if(l=this.get_node(c,!0),l&&l.length&&(m=l.children(".jstree-anchor")),i=c.type,j=this.get_icon(c),c.type=d,(j===!0||!f[i]||f[i].icon!==b&&j===f[i].icon)&&this.set_icon(c,f[d].icon!==b?f[d].icon:!0),f[i]&&f[i].li_attr!==b&&"object"==typeof f[i].li_attr)for(k in f[i].li_attr)if(f[i].li_attr.hasOwnProperty(k)){if("id"===k)continue;"class"===k?(e[c.id].li_attr["class"]=(e[c.id].li_attr["class"]||"").replace(f[i].li_attr[k],""),l&&l.removeClass(f[i].li_attr[k])):e[c.id].li_attr[k]===f[i].li_attr[k]&&(e[c.id].li_attr[k]=null,l&&l.removeAttr(k))}if(f[i]&&f[i].a_attr!==b&&"object"==typeof f[i].a_attr)for(k in f[i].a_attr)if(f[i].a_attr.hasOwnProperty(k)){if("id"===k)continue;"class"===k?(e[c.id].a_attr["class"]=(e[c.id].a_attr["class"]||"").replace(f[i].a_attr[k],""),
m&&m.removeClass(f[i].a_attr[k])):e[c.id].a_attr[k]===f[i].a_attr[k]&&("href"===k?(e[c.id].a_attr[k]="#",m&&m.attr("href","#")):(delete e[c.id].a_attr[k],m&&m.removeAttr(k)))}if(f[d].li_attr!==b&&"object"==typeof f[d].li_attr)for(k in f[d].li_attr)if(f[d].li_attr.hasOwnProperty(k)){if("id"===k)continue;e[c.id].li_attr[k]===b?(e[c.id].li_attr[k]=f[d].li_attr[k],l&&("class"===k?l.addClass(f[d].li_attr[k]):l.attr(k,f[d].li_attr[k]))):"class"===k&&(e[c.id].li_attr["class"]=f[d].li_attr[k]+" "+e[c.id].li_attr["class"],l&&l.addClass(f[d].li_attr[k]))}if(f[d].a_attr!==b&&"object"==typeof f[d].a_attr)for(k in f[d].a_attr)if(f[d].a_attr.hasOwnProperty(k)){if("id"===k)continue;e[c.id].a_attr[k]===b?(e[c.id].a_attr[k]=f[d].a_attr[k],m&&("class"===k?m.addClass(f[d].a_attr[k]):m.attr(k,f[d].a_attr[k]))):"href"===k&&"#"===e[c.id].a_attr[k]?(e[c.id].a_attr.href=f[d].a_attr.href,m&&m.attr("href",f[d].a_attr.href)):"class"===k&&(e[c.id].a_attr["class"]=f[d].a_attr["class"]+" "+e[c.id].a_attr["class"],m&&m.addClass(f[d].a_attr[k]))}return!0}},a.jstree.defaults.unique={case_sensitive:!1,duplicate:function(a,b){return a+" ("+b+")"}},a.jstree.plugins.unique=function(c,d){this.check=function(b,c,e,f,g){if(d.check.call(this,b,c,e,f,g)===!1)return!1;if(c=c&&c.id?c:this.get_node(c),e=e&&e.id?e:this.get_node(e),!e||!e.children)return!0;var h="rename_node"===b?f:c.text,i=[],j=this.settings.unique.case_sensitive,k=this._model.data,l,m;for(l=0,m=e.children.length;m>l;l++)i.push(j?k[e.children[l]].text:k[e.children[l]].text.toLowerCase());switch(j||(h=h.toLowerCase()),b){case"delete_node":return!0;case"rename_node":return l=-1===a.inArray(h,i)||c.text&&c.text[j?"toString":"toLowerCase"]()===h,l||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_01",reason:"Child with name "+h+" already exists. Preventing: "+b,data:JSON.stringify({chk:b,pos:f,obj:c&&c.id?c.id:!1,par:e&&e.id?e.id:!1})}),l;case"create_node":return l=-1===a.inArray(h,i),l||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_04",reason:"Child with name "+h+" already exists. Preventing: "+b,data:JSON.stringify({chk:b,pos:f,obj:c&&c.id?c.id:!1,par:e&&e.id?e.id:!1})}),l;case"copy_node":return l=-1===a.inArray(h,i),l||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_02",reason:"Child with name "+h+" already exists. Preventing: "+b,data:JSON.stringify({chk:b,pos:f,obj:c&&c.id?c.id:!1,par:e&&e.id?e.id:!1})}),l;case"move_node":return l=c.parent===e.id&&(!g||!g.is_multi)||-1===a.inArray(h,i),l||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_03",reason:"Child with name "+h+" already exists. Preventing: "+b,data:JSON.stringify({chk:b,pos:f,obj:c&&c.id?c.id:!1,par:e&&e.id?e.id:!1})}),l}return!0},this.create_node=function(c,e,f,g,h){if(!e||e.text===b){if(null===c&&(c=a.jstree.root),c=this.get_node(c),!c)return d.create_node.call(this,c,e,f,g,h);if(f=f===b?"last":f,!f.toString().match(/^(before|after)$/)&&!h&&!this.is_loaded(c))return d.create_node.call(this,c,e,f,g,h);e||(e={});var i,j,k,l,m,n=this._model.data,o=this.settings.unique.case_sensitive,p=this.settings.unique.duplicate;for(j=i=this.get_string("New node"),k=[],l=0,m=c.children.length;m>l;l++)k.push(o?n[c.children[l]].text:n[c.children[l]].text.toLowerCase());l=1;while(-1!==a.inArray(o?j:j.toLowerCase(),k))j=p.call(this,i,++l).toString();e.text=j}return d.create_node.call(this,c,e,f,g,h)}};var n=i.createElement("DIV");if(n.setAttribute("unselectable","on"),n.setAttribute("role","presentation"),n.className="jstree-wholerow",n.innerHTML="&#160;",a.jstree.plugins.wholerow=function(b,c){this.bind=function(){c.bind.call(this),this.element.on("ready.jstree set_state.jstree",a.proxy(function(){this.hide_dots()},this)).on("init.jstree loading.jstree ready.jstree",a.proxy(function(){this.get_container_ul().addClass("jstree-wholerow-ul")},this)).on("deselect_all.jstree",a.proxy(function(a,b){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")},this)).on("changed.jstree",a.proxy(function(a,b){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");var c=!1,d,e;for(d=0,e=b.selected.length;e>d;d++)c=this.get_node(b.selected[d],!0),c&&c.length&&c.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("open_node.jstree",a.proxy(function(a,b){this.get_node(b.node,!0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("hover_node.jstree dehover_node.jstree",a.proxy(function(a,b){"hover_node"===a.type&&this.is_disabled(b.node)||this.get_node(b.node,!0).children(".jstree-wholerow")["hover_node"===a.type?"addClass":"removeClass"]("jstree-wholerow-hovered")},this)).on("contextmenu.jstree",".jstree-wholerow",a.proxy(function(b){if(this._data.contextmenu){b.preventDefault();var c=a.Event("contextmenu",{metaKey:b.metaKey,ctrlKey:b.ctrlKey,altKey:b.altKey,shiftKey:b.shiftKey,pageX:b.pageX,pageY:b.pageY});a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c)}},this)).on("click.jstree",".jstree-wholerow",function(b){b.stopImmediatePropagation();var c=a.Event("click",{metaKey:b.metaKey,ctrlKey:b.ctrlKey,altKey:b.altKey,shiftKey:b.shiftKey});a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c).focus()}).on("dblclick.jstree",".jstree-wholerow",function(b){b.stopImmediatePropagation();var c=a.Event("dblclick",{metaKey:b.metaKey,ctrlKey:b.ctrlKey,altKey:b.altKey,shiftKey:b.shiftKey});a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c).focus()}).on("click.jstree",".jstree-leaf > .jstree-ocl",a.proxy(function(b){b.stopImmediatePropagation();var c=a.Event("click",{metaKey:b.metaKey,ctrlKey:b.ctrlKey,altKey:b.altKey,shiftKey:b.shiftKey});a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c).focus()},this)).on("mouseover.jstree",".jstree-wholerow, .jstree-icon",a.proxy(function(a){return a.stopImmediatePropagation(),this.is_disabled(a.currentTarget)||this.hover_node(a.currentTarget),!1},this)).on("mouseleave.jstree",".jstree-node",a.proxy(function(a){this.dehover_node(a.currentTarget)},this))},this.teardown=function(){this.settings.wholerow&&this.element.find(".jstree-wholerow").remove(),c.teardown.call(this)},this.redraw_node=function(b,d,e,f){if(b=c.redraw_node.apply(this,arguments)){var g=n.cloneNode(!0);-1!==a.inArray(b.id,this._data.core.selected)&&(g.className+=" jstree-wholerow-clicked"),this._data.core.focused&&this._data.core.focused===b.id&&(g.className+=" jstree-wholerow-hovered"),b.insertBefore(g,b.childNodes[0])}return b}},i.registerElement&&Object&&Object.create){var o=Object.create(HTMLElement.prototype);o.createdCallback=function(){var b={core:{},plugins:[]},c;for(c in a.jstree.plugins)a.jstree.plugins.hasOwnProperty(c)&&this.attributes[c]&&(b.plugins.push(c),this.getAttribute(c)&&JSON.parse(this.getAttribute(c))&&(b[c]=JSON.parse(this.getAttribute(c))));for(c in a.jstree.defaults.core)a.jstree.defaults.core.hasOwnProperty(c)&&this.attributes[c]&&(b.core[c]=JSON.parse(this.getAttribute(c))||this.getAttribute(c));a(this).jstree(b)};try{i.registerElement("vakata-jstree",{prototype:o})}catch(p){}}}});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIControl_js__ = __webpack_require__(9);
/*global y*/
/**
 * @module UIElements
 */





UIMedia.prototype = new __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */]();
UIMedia.prototype.constructor = UIMedia;

/**
 * An abstract class representing HTML 5 media elements
 * @classdesc Base class for all UI media componets of the editor
 * @constructor
 * @abstract
 * @param {mxGeometry} geometry the width, height, x and y of the ui element
 * @param {String} style the style as a string
 * @extends UIControl
 */
function UIMedia(geometry, style) {
    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].call(this, geometry, style);
    this.value.setAttribute('_src', '');
    this.value.setAttribute('_controls', true);
    this.value.setAttribute('_autoplay', false);
    this.value.setAttribute('_muted', false);
    this.value.setAttribute('_loop', false);
    this.value.setAttribute('_preload', 'auto');
    this.getComboAttrMap().addComboAttr('_preload',  ['auto', 'metadata', 'none']);
}
UIMedia.prototype.createShared = function(createdByLocalUser){
    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser)
        y.share.attrs.set(this.getId()+'_src', __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default.a.Text);
}
UIMedia.prototype.initShared = function(){
    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].prototype.initShared.call(this);
    this.initYText('_src');
}

UIMedia.registerCodec = function(ctor){
    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].registerCodec(ctor);
}
/* harmony default export */ __webpack_exports__["a"] = (UIMedia);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__ = __webpack_require__(3);
/**
 * @module Overlays
 */


__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(UserOverlay, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCellOverlay */]);

/**
 * User image overlay class for better awareness 
 * @constructor
 * @param {String} userId the user id
 * @param {string} username the name of the user
 * @param {string} imageURL the URL to the image
 * @param {*} offset the offset
 * @param {*} cursor the cursor
 * @extends mxCellOverlay
 */
function UserOverlay(userId, username, imageURL, offset, cursor) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCellOverlay */].call(this, new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["h" /* mxImage */](imageURL || __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.DEFAULT_USER, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].TAG.SIZE, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].TAG.SIZE), username, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_RIGHT, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_BOTTOM, offset, cursor);
    var _userId = userId;
    this.getUserId = function () {
        return _userId;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (UserOverlay);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PropertyEditor_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__misc_ComboAttributeMap_js__ = __webpack_require__(20);
/*global y*/
/**
 * @module Tags
 */









__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(AbstractTag, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCellOverlay */]);

/**
 * @classdesc Abstract tag class for interacitivty tags.
 * 
 * Subclass of  {@link https://jgraph.github.io/mxgraph/docs/js-api/files/view/mxCellOverlay-js.html#mxCellOverlay|mxCellOverlay}
 * @constructor
 * @abstract
 * @extends mxCellOverlay
 * @param {UIControl | AbstractTag} entity a tag or a ui element
 * @param {mxImage} image the image for the tag
 * @param {String} tooltip a description for the image
 * @param {mxPoint} offset mxCellOverlay documentation 
 * @param {*} cursor see mxCellOverlay documentation
 * @requires ComboAttributeMap
 * @requires Util
 * @requires PropertyEditor
 */
function AbstractTag(entity, image, tooltip, offset, cursor) {
    /**
     * the child tags for the tag
     * @member {Object}
     */
    var childTags = {};

    /**
     * The map contains the key and the possible values as array for all combo attributes for the tag
     * @member {ComboAttributeMap}
     */
    var comboAttrMap = new __WEBPACK_IMPORTED_MODULE_6__misc_ComboAttributeMap_js__["a" /* default */]();
    var xmlDoc = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].createXmlDocument();

    /**
     * Contains the data of the attributes for the tag
     * @member {XMLDocument}
     */
    this.tagObj = xmlDoc.createElement('tagObj');
    //take the tooltip as tag type if it is a generic tag else the constructor description
    this.tagObj.setAttribute('parent', '#');

    /**
     * The parent cell or tag
     * @member {AbstractTag|UIControl}
     */
    var _cell = entity;
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCellOverlay */].call(this, image, tooltip, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_RIGHT, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_TOP, offset, cursor);
    if(entity)
        this.tagObj.setAttribute('id', entity.getId() + '_'+ __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].GUID());
    
    
    /**
     * Get the identifier as String
     * @return {String} the id of the tag as String
     */
    this.getId = function(){
        return this.tagObj.getAttribute('id');
    }
    /**
     * Get the map of the combo attributes
     * @return {undefined}
     */
    this.getComboAttrMap = function(){
        return comboAttrMap;
    }

    /**
     * Get the cell of the tag
     * @return {UIControl} the ui element of the tag
     */
    this.getCell = function(){
        return _cell;
    }

    /**
     * @param {UIControl} cell a reference to the cell that contains the tag
     * @return {undefined}
     */
    this.setCell = function(cell){
        _cell = cell;
    }

    /**
     * @param {AbstractTag} tag the tag to add as child 
     * @return {undefined}
     */
    this.addChildTag = function(tag){
        childTags[tag.getId()] = tag;
    }

    /**
     * Get all child tags 
     * @return {undefined}
     */
    this.getChildTags = function(){
        return childTags;
    }

    /**
     * Click event for the property editor
     * @param {Wireframe} graph the wireframe or graph
     * @return {undefined}
     */
    this.bindClickEvent = function(graph){
        this.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].CLICK, function(sender, event){
            var mouseEvent = event.getProperty('event');
            var $editor = new __WEBPACK_IMPORTED_MODULE_5__PropertyEditor_js__["a" /* default */](event.getProperty('cell'), graph, mouseEvent.x, mouseEvent.y);
            $editor.tabs("option", "active", 1);
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.jstree').jstree(true).select_node(this.getId());
        });
    };
    
}

/**
 * Serializes the Tag to XML
 * @return {XMLDocument} the XML representation of the Tag
 */
AbstractTag.prototype.toXML = function () {
    var encoder = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxCodec */]();
    encoder.encodeDefaults = true;
    var result = encoder.encode(this);
    return __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getXml(result);
}

/**
 * Register a constructor to the mxCodecRegistry
 * @param {Function} ctor the constructor to register
 * @return {undefined}
 */
AbstractTag.registerCodec = function (ctor) {
    var codec = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["j" /* mxObjectCodec */]();
    codec.template = new ctor();
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxCodecRegistry */].register(codec);
}
/**
 * Set the value for a boolean attribute in tagObj and the property editor
 * @param  {String} name the name of the attribute
 * @param  {Boolean} value true or false
 * @return {undefined}
 */
AbstractTag.prototype.setBooleanAttributeValue = function (name, value) {
    this.tagObj.setAttribute(name, value);
    var id = this.getId().substring(0, this.getId().indexOf('_'));
    var $input = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#' + id + '_tagAttribute').find('td:contains(' + name.substr(1) + ') + td input');
    if ($input.length > 0)
        $input[0].checked = value;
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.wfSave').click();
}

/**
 * Set the value for the combo attribute in tabObj and the property editor
 * @param {String} name the name of the attribute
 * @param {String} value the value for combo attribute
 * @return {undefined}
 */
AbstractTag.prototype.setComboAttributeValue = function (name, value) {
    this.tagObj.setAttribute(name, value);
    var id = this.getId().substring(0, this.getId().indexOf('_'));
    var $select = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#' + id + '_tagAttribute').find('td:contains(' + name.substr(1) + ') + td select');
    if ($select.length > 0)
        $select.find('option[value="' + value + '"]').prop('selected', true);
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.wfSave').click();
}

/**
 * Create the shared data for the attribute
 * Empty function
 * @return {undefined}
 */
AbstractTag.prototype.createShared = function(){}

/**
 * Initialize the shared data
 * Empty function
 * @return {undefined}
 */
AbstractTag.prototype.initShared = function(){}

/**
 * Get the observer function for a string attribute
 * @return {Function} the observer function for the ytext object
 */
AbstractTag.prototype.getYTextObserver = function(){
    var that = this;
    var observer = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.debounce(function (evt) {
        var value = evt.object.toString();
        var path = evt.object.getPath()[0];
        var attrName = path.substring(path.lastIndexOf('_'));
        var cell = that.getCell();
        var tagRoot = cell.value.getElementsByTagName('tagRoot')[0];
        var tag = tagRoot.getElementsByTagName('tagObj').namedItem(that.getId());
        tag.setAttribute(attrName, value);
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.wfSave').click();
    },500);
    return observer;
}

/**
 * 
 * @param {String} attrName the name of the attribute
 * @return {undefined}
 */
AbstractTag.prototype.initYText = function(attrName){
    var ytext =y.share.attrs.get(this.getId() + attrName, __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default.a.Text);
    if (!ytext)
        y.share.attrs.set(this.getId() + attrName, __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default.a.Text);
        //observer should be registered in callback
    else{
         ytext.observe(this.getYTextObserver());
         this.tagObj.setAttribute(attrName, ytext.toString());
    }
}
/* harmony default export */ __webpack_exports__["a"] = (AbstractTag);

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

module.exports = {
	"html": {
		"exclude": [
			"br",
			"CUSTOM"
		],
		"map": {
			"input": "TextBox"
		}
	},
	"___tags": [
		{
			"node_class": "IWC Response",
			"options": {
				"imgConst": "IWC_RESP_TAG"
			}
		},
		{
			"node_class": "Event",
			"options": {
				"imgConst": "EVENT_TAG"
			}
		},
		{
			"node_class": "Function",
			"options": {
				"imgConst": "FUNC_TAG"
			}
		},
		{
			"node_class": "IWC Call",
			"options": {
				"imgConst": "IWC_REQ_TAG"
			}
		},
		{
			"node_class": "Microservice Call",
			"options": {
				"imgConst": "MICROSERVICECALL"
			}
		},
		{
			"node_class": "Input Parameter"
		}
	]
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {
	"attributes": {},
	"nodes": {
		"182e51d01e990b398cd0b4cc": {
			"label": "Widget",
			"attributes": {
				"8429a9c1eb8ecdc2b1dbd097": {
					"key": "name",
					"value": "string"
				},
				"22c9ff8652e8f0c06d062b02": {
					"key": "description",
					"value": "string"
				},
				"46981b3227d71acbe05331bf": {
					"key": "developerName",
					"value": "string"
				},
				"140cc72cc3228a273326c450": {
					"key": "developerMail",
					"value": "string"
				},
				"e21ce18ca763e433fcb16546": {
					"key": "width",
					"value": "string"
				},
				"d36e79e0c322818ddcefd09c": {
					"key": "height",
					"value": "string"
				},
				"0eb8e4a4a056d7198eb90eed": {
					"key": "microserviceAddress",
					"value": "string"
				}
			},
			"shape": {
				"shape": "rectangle",
				"color": "",
				"defaultWidth": 100,
				"defaultHeight": 100,
				"customShape": "<div class=\"custom_node\">\n    <div class=\"type\"><%= type %></div>\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   preserveAspectRatio=\"none\" \n   viewBox=\"0 0 100 100\" \n   class=\"fill_parent\"\n   id=\"svg3043\"\n   version=\"1.1\"\n   inkscape:version=\"0.48.3.1 r9886\"\n   sodipodi:docname=\"widget.svg\"\n   width=\"100%\"\n   height=\"100%\">\n  <metadata\n     id=\"metadata3064\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title />\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id=\"defs3062\">\n    <inkscape:perspective\n       sodipodi:type=\"inkscape:persp3d\"\n       inkscape:vp_x=\"0 : 49.032848 : 1\"\n       inkscape:vp_y=\"0 : 1000 : 0\"\n       inkscape:vp_z=\"99.805931 : 49.032848 : 1\"\n       inkscape:persp3d-origin=\"49.902966 : 32.688566 : 1\"\n       id=\"perspective3123\" />\n  </defs>\n  <sodipodi:namedview\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#666666\"\n     borderopacity=\"1\"\n     objecttolerance=\"10\"\n     gridtolerance=\"10\"\n     guidetolerance=\"10\"\n     inkscape:pageopacity=\"0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:window-width=\"1920\"\n     inkscape:window-height=\"1018\"\n     id=\"namedview3060\"\n     showgrid=\"false\"\n     inkscape:zoom=\"4\"\n     inkscape:cx=\"-23.922675\"\n     inkscape:cy=\"33.203042\"\n     inkscape:window-x=\"-8\"\n     inkscape:window-y=\"-8\"\n     inkscape:window-maximized=\"1\"\n     inkscape:current-layer=\"svg3043\"\n     fit-margin-top=\"0\"\n     fit-margin-left=\"0\"\n     fit-margin-right=\"0\"\n     fit-margin-bottom=\"0\" />\n  <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->\n  <g\n     id=\"g3828\"\n     transform=\"matrix(1.0605577,0,0,1.0972872,-3.0193692,-2.8391392)\">\n    <rect\n       y=\"2.5874166\"\n       x=\"2.8469636\"\n       height=\"91.024017\"\n       width=\"94.290016\"\n       id=\"rect3208\"\n       style=\"fill:#f2f2f2;fill-opacity:1;stroke:none\" />\n    <rect\n       y=\"2.6876004\"\n       x=\"2.9932988\"\n       height=\"10.777027\"\n       width=\"94.121559\"\n       id=\"rect3230\"\n       style=\"fill:#008000;fill-opacity:1;stroke:none\" />\n    <text\n       sodipodi:linespacing=\"127%\"\n       id=\"text3236\"\n       y=\"11.260236\"\n       x=\"88.665543\"\n       style=\"font-size:24px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:126.99999809%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:Arial;-inkscape-font-specification:Arial\"\n       xml:space=\"preserve\"><tspan\n         style=\"font-size:12px\"\n         y=\"11.260236\"\n         x=\"88.665543\"\n         id=\"tspan3238\"\n         sodipodi:role=\"line\">x</tspan></text>\n    <rect\n       y=\"93.0205\"\n       x=\"2.967025\"\n       height=\"0.70075554\"\n       width=\"94.121559\"\n       id=\"rect3230-7\"\n       style=\"fill:#008000;fill-opacity:1;stroke:none\" />\n    <rect\n       transform=\"matrix(3.8347152e-4,-0.99999993,-0.35122038,-0.93629282,0,0)\"\n       y=\"-276.25995\"\n       x=\"164.99924\"\n       height=\"1.9059393\"\n       width=\"80.21981\"\n       id=\"rect3230-7-4\"\n       style=\"fill:#008000;fill-opacity:1;stroke:none\" />\n    <rect\n       transform=\"matrix(4.2491346e-4,-0.99999991,0.35188364,-0.93604375,0,0)\"\n       y=\"8.5403452\"\n       x=\"-101.45443\"\n       height=\"1.9064465\"\n       width=\"80.21981\"\n       id=\"rect3230-7-4-0\"\n       style=\"fill:#008000;fill-opacity:1;stroke:none\" />\n  </g>\n</svg>\n<div class=\"fill_parent\">\n        <div style=\"position: absolute; left: 50%; top: 50%; -webkit-transform: translateY(-50%) translateX(-50%)\" class=\"name\"></div>\n    </div>\n</div>",
				"customAnchors": ""
			}
		},
		"ff8ef51660b61ef2ca96a874": {
			"label": "HTML Element",
			"attributes": {
				"f8b228ce6cb6e6ca97080624": {
					"key": "type",
					"value": "HTML Type",
					"options": {
						"input": "input",
						"table": "table",
						"br": "br",
						"button": "button",
						"p": "p",
						"div": "div",
						"textarea": "textarea",
						"CUSTOM": "CUSTOM"
					}
				},
				"d326bc315a5c9e11522b58e5": {
					"key": "id",
					"value": "string"
				},
				"8a1165e52b225727d3c4fd75": {
					"key": "static",
					"value": "boolean"
				},
				"4a7fa8f9d5c8c37a64832eff": {
					"key": "collaborative",
					"value": "boolean"
				}
			},
			"shape": {
				"shape": "rectangle",
				"color": "",
				"defaultWidth": 100,
				"defaultHeight": 100,
				"customShape": "<div class=\"custom_node\">\n    <div class=\"type\"><%= type %></div>\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   preserveAspectRatio=\"none\" \n   viewBox=\"0 0 100 60\" \n   class=\"fill_parent\"\n   id=\"svg2\"\n   version=\"1.1\"\n   inkscape:version=\"0.48.3.1 r9886\"\n   sodipodi:docname=\"html_element.svg\">\n  <defs\n     id=\"defs4\">\n    <inkscape:perspective\n       id=\"perspective3123\"\n       inkscape:persp3d-origin=\"49.902966 : 32.688566 : 1\"\n       inkscape:vp_z=\"99.805931 : 49.032848 : 1\"\n       inkscape:vp_y=\"0 : 1000 : 0\"\n       inkscape:vp_x=\"0 : 49.032848 : 1\"\n       sodipodi:type=\"inkscape:persp3d\" />\n  </defs>\n  <sodipodi:namedview\n     id=\"base\"\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#666666\"\n     borderopacity=\"1.0\"\n     inkscape:pageopacity=\"0.0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:zoom=\"2.8\"\n     inkscape:cx=\"78.110628\"\n     inkscape:cy=\"-2.2046182\"\n     inkscape:document-units=\"px\"\n     inkscape:current-layer=\"g3198\"\n     showgrid=\"false\"\n     fit-margin-top=\"0\"\n     fit-margin-left=\"0\"\n     fit-margin-right=\"0\"\n     fit-margin-bottom=\"0\"\n     inkscape:window-width=\"1920\"\n     inkscape:window-height=\"1018\"\n     inkscape:window-x=\"-8\"\n     inkscape:window-y=\"-8\"\n     inkscape:window-maximized=\"1\" />\n  <metadata\n     id=\"metadata7\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title />\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <g\n     inkscape:label=\"Layer 1\"\n     inkscape:groupmode=\"layer\"\n     id=\"layer1\"\n     transform=\"translate(-569.23849,-454.98019)\">\n    <g\n       transform=\"matrix(1.0217784,0,0,1.675551,581.42857,476.66695)\"\n       id=\"g3198\">\n      <rect\n         style=\"fill:#f16529;fill-opacity:1;stroke:#000000;stroke-width:1.34970939;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:0.09411765;stroke-dasharray:none;stroke-dashoffset:0\"\n         id=\"rect3192\"\n         width=\"96.14019\"\n         height=\"23.685043\"\n         x=\"-11.066062\"\n         y=\"-1.3177207\" />\n      <text\n         xml:space=\"preserve\"\n         style=\"font-size:23.88303375px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:126.99999809%;letter-spacing:0px;word-spacing:0px;fill:#de8787;fill-opacity:1;stroke:none;font-family:Arial;-inkscape-font-specification:Arial\"\n         x=\"-7.5980649\"\n         y=\"16.432377\"\n         id=\"text3194\"\n         sodipodi:linespacing=\"127%\"\n         transform=\"scale(0.89553827,1.1166469)\"><tspan\n           sodipodi:role=\"line\"\n           id=\"tspan3196\"\n           x=\"-7.5980649\"\n           y=\"16.432377\"\n           style=\"font-size:21.29507065px;fill:#ffffff\">&lt;element&gt;</tspan></text>\n      <text\n         xml:space=\"preserve\"\n         style=\"font-size:18.25291824px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:126.99999809%;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;font-family:Arial;-inkscape-font-specification:Arial\"\n         x=\"4.1073666\"\n         y=\"-1.7771865\"\n         id=\"text3020\"\n         sodipodi:linespacing=\"127%\"\n         transform=\"scale(1.1467919,0.87199777)\"><tspan\n           sodipodi:role=\"line\"\n           id=\"tspan3022\"\n           x=\"4.1073666\"\n           y=\"-1.7771865\">HTML5</tspan></text>\n    </g>\n  </g>\n</svg>\n<div class=\"fill_parent\">\n        <div style=\"position: absolute; left: 50%; top: 50%; -webkit-transform: translateY(-50%) translateX(-50%)\" class=\"name\"></div>\n    </div>\n</div>",
				"customAnchors": ""
			}
		},
		"d4ac54b4f1903f2cd6729ee8": {
			"label": "Function",
			"attributes": {
				"919c6c03fb051f16d8fef15f": {
					"key": "name",
					"value": "string"
				},
				"9cdca7cf182676e04bfd0a0b": {
					"key": "returnParameter",
					"value": "string"
				}
			},
			"shape": {
				"shape": "diamond",
				"color": "",
				"defaultWidth": 100,
				"defaultHeight": 100,
				"customShape": "<div class=\"custom_node\">\n    <div class=\"type\"><%= type %></div>\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   preserveAspectRatio=\"none\" \n   viewBox=\"0 0 100 100\" \n   class=\"fill_parent\"\n   id=\"svg3043\"\n   version=\"1.1\"\n   inkscape:version=\"0.48.3.1 r9886\"\n   sodipodi:docname=\"function.svg\">\n  <metadata\n     id=\"metadata3064\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id=\"defs3062\">\n    <inkscape:perspective\n       sodipodi:type=\"inkscape:persp3d\"\n       inkscape:vp_x=\"0 : 49.032848 : 1\"\n       inkscape:vp_y=\"0 : 1000 : 0\"\n       inkscape:vp_z=\"99.805931 : 49.032848 : 1\"\n       inkscape:persp3d-origin=\"49.902966 : 32.688566 : 1\"\n       id=\"perspective3123\" />\n  </defs>\n  <sodipodi:namedview\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#666666\"\n     borderopacity=\"1\"\n     objecttolerance=\"10\"\n     gridtolerance=\"10\"\n     guidetolerance=\"10\"\n     inkscape:pageopacity=\"0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:window-width=\"1920\"\n     inkscape:window-height=\"1018\"\n     id=\"namedview3060\"\n     showgrid=\"false\"\n     inkscape:zoom=\"4.0827586\"\n     inkscape:cx=\"121.40399\"\n     inkscape:cy=\"48.676627\"\n     inkscape:window-x=\"-8\"\n     inkscape:window-y=\"-8\"\n     inkscape:window-maximized=\"1\"\n     inkscape:current-layer=\"g3178\"\n     fit-margin-top=\"0\"\n     fit-margin-left=\"0\"\n     fit-margin-right=\"0\"\n     fit-margin-bottom=\"0\" />\n  <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->\n  <g\n     id=\"g3172\"\n     transform=\"scale(1,0.89192141)\">\n    <g\n       id=\"g3178\">\n      <text\n         xml:space=\"preserve\"\n         style=\"font-size:96.83550262px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:126.99999809%;letter-spacing:0px;word-spacing:0px;fill:#c83737;fill-opacity:1;stroke:none;font-family:Arial;-inkscape-font-specification:Arial\"\n         x=\"22.208141\"\n         y=\"91.820709\"\n         id=\"text3164\"\n         sodipodi:linespacing=\"127%\"\n         transform=\"matrix(1.1905589,0.17875962,-0.26603058,0.79999777,0,0)\"><tspan\n           sodipodi:role=\"line\"\n           id=\"tspan3166\"\n           x=\"22.208141\"\n           y=\"91.820709\"\n           style=\"font-size:154.93681335px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;fill:#c83737;font-family:Matura MT Script Capitals;-inkscape-font-specification:Matura MT Script Capitals\">f</tspan></text>\n      <text\n         xml:space=\"preserve\"\n         style=\"font-size:24px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:126.99999809%;letter-spacing:0px;word-spacing:0px;fill:#c83737;fill-opacity:1;stroke:none;font-family:Arial;-inkscape-font-specification:Arial\"\n         x=\"7.1030421\"\n         y=\"105.70029\"\n         id=\"text3168\"\n         sodipodi:linespacing=\"127%\"><tspan\n           sodipodi:role=\"line\"\n           id=\"tspan3170\"\n           x=\"7.1030421\"\n           y=\"105.70029\">&lt;script&gt;</tspan></text>\n    </g>\n  </g>\n</svg>\n<div class=\"fill_parent\">\n        <div style=\"position: absolute; left: 50%; top: 50%; -webkit-transform: translateY(-50%) translateX(-50%)\" class=\"name\"></div>\n    </div>\n</div>\n",
				"customAnchors": ""
			}
		},
		"8ad56cf80886251ac80b42ff": {
			"label": "Event",
			"attributes": {
				"fadb9895b330d412f2128e78": {
					"key": "eventCause",
					"value": "EventCause",
					"options": {
						"click": "click"
					}
				},
				"887f48d86171c31b0ac46177": {
					"key": "name",
					"value": "string"
				}
			},
			"shape": {
				"shape": "diamond",
				"color": "",
				"defaultWidth": 100,
				"defaultHeight": 100,
				"customShape": "<div class=\"custom_node\">\n    <div class=\"type\"><%= type %></div>\n<svg xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" viewBox=\"0 0 100 100\" class=\"fill_parent\" id=\"svg3043\" version=\"1.1\"><metadata id=\"metadata3064\"/><defs id=\"defs3062\"/><g id=\"g3080\" transform=\"matrix(0.64549932,0,0,0.64725401,46.559911,34.465729)\"><path d=\"M25.47 80.57-3.48 49.85-45.41 54.7-25.14 17.67-42.71-20.72-1.23-12.88 29.85-41.45 35.21 0.42 71.99 21.15 33.82 39.19z\" id=\"path3074\" style=\"fill:#008080;stroke-miterlimit:4;stroke-opacity:0.09;stroke-width:2.1;stroke:#000\"/><path transform=\"translate(166.55405,6.8581081)\" d=\"m-114.63 38.45-47.38-18.35-16.28 43.27 2.81-50.74-46.19-2.11 49.12-13.01-12.26-44.58 27.55 42.7 38.61-25.44-32.09 39.4z\" id=\"path3076\" style=\"fill:#008080;stroke-miterlimit:4;stroke-opacity:0.09;stroke-width:2.1;stroke:#000\"/><path transform=\"translate(172.43243,19.594595)\" d=\"m-91.11 12.97-67.38 0.22-0.24 67.38-21.03-64.02-64.16 20.59 54.38-39.79-39.41-54.66 54.64 39.43 39.8-54.37-20.61 64.15z\" id=\"path3078\" style=\"fill:#008080;stroke-miterlimit:4;stroke-opacity:0.09;stroke-width:2.1;stroke:#000\"/></g></svg>\n<div class=\"fill_parent\">\n        <div style=\"position: absolute; left: 50%; top: 50%; -webkit-transform: translateY(-50%) translateX(-50%)\" class=\"name\"></div>\n    </div>\n</div>",
				"customAnchors": ""
			}
		},
		"d728d61dd8119739fb5e8243": {
			"label": "IWC Response",
			"attributes": {
				"181d0177c3bfcc27ca3c9535": {
					"key": "intentAction",
					"value": "string"
				},
				"4392a3a0cbaafd160c127c7b": {
					"key": "content",
					"value": "string"
				}
			},
			"shape": {
				"shape": "circle",
				"color": "",
				"defaultWidth": 100,
				"defaultHeight": 60,
				"customShape": "<div class=\"custom_node\">\n    <div class=\"type\"><%= type %></div>\n<svg xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" viewBox=\"0 0 100 60\" class=\"fill_parent\" id=\"svg3043\" version=\"1.1\">\n  <metadata id=\"metadata3064\"/>\n  <defs id=\"defs3062\"/>\n  <g id=\"g3045\" transform=\"translate(-75.25,-163.78125)\">\n    <title id=\"title3047\">\n      background\n    </title>\n    <rect id=\"canvas_background\" height=\"402\" width=\"582\" y=\"-1\" x=\"-1\" fill=\"#fff\"/>\n    <g display=\"none\" overflow=\"visible\" y=\"0\" x=\"0\" height=\"100\" width=\"100\" id=\"canvasGrid\" style=\"display:none;overflow:visible\">\n      <rect y=\"0\" x=\"0\" height=\"400\" width=\"580\" id=\"rect3051\" fill=\"url(#gridpattern)\"/>\n    </g>\n  </g>\n  <g id=\"g3053\" transform=\"translate(-75.25,-163.78125)\">\n    <title id=\"title3055\">\n      Layer 1\n    </title>\n    <path id=\"svg_1\" d=\"m170.99 164.42-91.52 0 45.76 23.62 45.76-23.62zm-43.05 33.68c-0.84 0.44-1.77 0.65-2.71 0.65-0.93 0-1.86-0.22-2.71-0.65l-46.64-24.07 0 49.09 98.7 0 0-49.09-46.65 24.07z\" style=\"fill:#8cd79f;stroke-width:1.3;stroke:#000\"/>\n  </g>\n</svg>\n<div class=\"fill_parent\">\n        <div style=\"position: absolute; left: 50%; top: 50%; -webkit-transform: translateY(-50%) translateX(-50%)\" class=\"name\"></div>\n    </div>\n</div>",
				"customAnchors": ""
			}
		},
		"cd3f1240fd76bbb493025955": {
			"label": "IWC Call",
			"attributes": {
				"68f96ac4cd5abc379fd65aba": {
					"key": "intentAction",
					"value": "string"
				},
				"4c047ef2a06f415381585a45": {
					"key": "content",
					"value": "string"
				}
			},
			"shape": {
				"shape": "circle",
				"color": "",
				"defaultWidth": 100,
				"defaultHeight": 60,
				"customShape": "<div class=\"custom_node\">\n    <div class=\"type\"><%= type %></div>\n<svg xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" reserveAspectRatio=\"none\" viewBox=\"0 0 100 60\" class=\"fill_parent\" id=\"svg2\" version=\"1.1\"><defs id=\"defs4\"/><metadata id=\"metadata7\"/><g id=\"layer1\" transform=\"translate(-403.65648,-488.18794)\"><g id=\"g3008\" transform=\"translate(403.64286,451.00504)\"><g id=\"g2987\" transform=\"matrix(1.3104597,0,0,1.2365547,0.31045973,0.23655471)\"><title id=\"title2989\">background</title><rect x=\"-1\" y=\"-1\" width=\"109\" height=\"79\" id=\"canvas_background\" fill=\"#fff\"/><g id=\"canvasGrid\" width=\"100\" height=\"100\" x=\"0\" y=\"0\" overflow=\"visible\" display=\"none\" style=\"display:none;overflow:visible\"><rect id=\"rect2993\" width=\"1\" height=\"1\" x=\"0\" y=\"0\" fill=\"url(#gridpattern)\"/></g></g><g id=\"g2995\" transform=\"matrix(0.71292911,0,0,0.6427925,0.01362272,35.395133)\"><title id=\"title2997\">Layer 1</title><path d=\"m134.32 3.73-128.33 0L70.16 40.65 134.32 3.73zM73.96 56.38c-1.18 0.68-2.49 1.02-3.79 1.02-1.31 0-2.61-0.34-3.8-1.02L0.96 18.76l0 76.74 138.41 0 0-76.74-65.41 37.63z\" id=\"svg_1\" style=\"fill:#7ad6ca;stroke-width:1.92;stroke:#000\"/></g></g></g></svg>\n<div class=\"fill_parent\">\n        <div style=\"position: absolute; left: 50%; top: 50%; -webkit-transform: translateY(-50%) translateX(-50%)\" class=\"name\"></div>\n    </div>\n</div>",
				"customAnchors": ""
			}
		},
		"7dda20432d876a2570295ced": {
			"label": "Input Parameter",
			"attributes": {
				"170b28736e01825bb6ebb131": {
					"key": "name",
					"value": "string"
				}
			},
			"shape": {
				"shape": "rectangle",
				"color": "LIGHTGRAY",
				"defaultWidth": 60,
				"defaultHeight": 60,
				"customShape": "",
				"customAnchors": ""
			}
		},
		"f99e3c6d6c073bb52ab5cfa3": {
			"label": "Microservice Call",
			"attributes": {
				"e13d6ee2f226d8f624204ad2": {
					"key": "methodType",
					"value": "Method Type",
					"options": {
						"GET": "GET",
						"POST": "POST",
						"PUT": "PUT",
						"DELETE": "DELETE"
					}
				},
				"6c9933251a6ebed9f1885e02": {
					"key": "contentType",
					"value": "Content Type",
					"options": {
						"application/json": "application/json",
						"text/plain": "text/plain",
						"CUSTOM": "CUSTOM"
					}
				},
				"2febb8dfca77f8344124d518": {
					"key": "path",
					"value": "string"
				},
				"6c2b12ca3ec957222d6d6812": {
					"key": "authorize",
					"value": "boolean"
				},
				"decb3f05b6d0e014b6b93ecf": {
					"key": "content",
					"value": "string"
				}
			},
			"shape": {
				"shape": "rectangle",
				"color": "",
				"defaultWidth": 100,
				"defaultHeight": 100,
				"customShape": "<div class=\"custom_node\">\n    <div class=\"type\"><%= type %></div>\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   preserveAspectRatio=\"none\" \n   viewBox=\"0 0 100 100\" \n   class=\"fill_parent\"\n   id=\"svg2\"\n   version=\"1.1\"\n   inkscape:version=\"0.48.3.1 r9886\"\n   sodipodi:docname=\"las2peer.svg\">\n  <defs\n     id=\"defs4\" />\n  <sodipodi:namedview\n     id=\"base\"\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#666666\"\n     borderopacity=\"1.0\"\n     inkscape:pageopacity=\"0.0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:zoom=\"3.959798\"\n     inkscape:cx=\"-12.861105\"\n     inkscape:cy=\"19.656169\"\n     inkscape:document-units=\"px\"\n     inkscape:current-layer=\"g4425\"\n     showgrid=\"false\"\n     fit-margin-top=\"0\"\n     fit-margin-left=\"0\"\n     fit-margin-right=\"0\"\n     fit-margin-bottom=\"0\"\n     inkscape:window-width=\"1920\"\n     inkscape:window-height=\"1018\"\n     inkscape:window-x=\"-8\"\n     inkscape:window-y=\"-8\"\n     inkscape:window-maximized=\"1\" />\n  <metadata\n     id=\"metadata7\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <g\n     inkscape:label=\"Layer 1\"\n     inkscape:groupmode=\"layer\"\n     id=\"layer1\"\n     transform=\"translate(-372.15942,-444.51679)\">\n    <g\n       transform=\"translate(97.142861,78.565856)\"\n       id=\"layer1-7\"\n       inkscape:label=\"Layer 1\">\n      <g\n         style=\"fill:#ff0000;fill-opacity:1;stroke:#3b4040;stroke-opacity:1\"\n         id=\"g4425\">\n        <g\n           id=\"g7816-2-38-2\"\n           transform=\"matrix(-0.78609545,-0.96783883,0.93683207,-0.81211321,164.49266,1078.4928)\"\n           style=\"fill:#ff0000;fill-opacity:1;stroke:#ff4040;stroke-width:6.5;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\">\n          <g\n             transform=\"translate(103.49967,23.717213)\"\n             id=\"g3944-4-8-9-36-0-1\"\n             style=\"fill:#ff0000;fill-opacity:1;stroke:#ff4040;stroke-width:6.5;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\">\n            <g\n               id=\"g3936-7-6-47-15-8-8\"\n               style=\"fill:#ff0000;fill-opacity:1;stroke:#ff4040;stroke-width:6.5;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" />\n            <path\n               sodipodi:nodetypes=\"cc\"\n               style=\"fill:#808000;fill-opacity:1;stroke:#ff4040;stroke-width:6.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\"\n               d=\"m 213.64319,391.29075 0,46.46172\"\n               id=\"path3934-9-9-81-5-6-5\"\n               inkscape:connector-curvature=\"0\" />\n          </g>\n        </g>\n        <path\n           inkscape:connector-curvature=\"0\"\n           id=\"path3783-52-2-8-9-0-0-99-8\"\n           d=\"M 289.2975,460.79034 303.98087,434.5162\"\n           style=\"fill:#808000;fill-opacity:1;stroke:#ff4040;stroke-width:2.45863318;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" />\n        <path\n           inkscape:connector-curvature=\"0\"\n           id=\"path3783-52-2-8-9-0-0-9-3-6\"\n           d=\"m 309.08037,464.39403 -5.0995,-29.87783\"\n           style=\"fill:#808000;fill-opacity:1;stroke:#ff4040;stroke-width:2.45863318;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" />\n        <path\n           inkscape:connector-curvature=\"0\"\n           id=\"path3783-52-2-8-9-0-0-8-5-8\"\n           d=\"M 326.47712,454.01755 303.98087,434.5162\"\n           style=\"fill:#808000;fill-opacity:1;stroke:#ff4040;stroke-width:2.45863318;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" />\n        <path\n           inkscape:connector-curvature=\"0\"\n           id=\"path3783-52-2-8-9-0-0-80-1-9\"\n           d=\"M 276.38513,444.89271 303.98087,434.5162\"\n           style=\"fill:#ff0000;fill-opacity:1;stroke:#f64040;stroke-width:2.45863318;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" />\n        <path\n           inkscape:connector-curvature=\"0\"\n           id=\"path3783-52-2-8-9-0-0-88-10-1\"\n           d=\"m 276.38509,424.13981 27.59578,10.37639\"\n           style=\"fill:#808000;fill-opacity:1;stroke:#ff4040;stroke-width:2.45863318;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" />\n        <path\n           inkscape:connector-curvature=\"0\"\n           id=\"path3783-52-2-8-9-0-0-5-2-7\"\n           d=\"m 289.29742,408.24214 14.68345,26.27406\"\n           style=\"fill:#808000;fill-opacity:1;stroke:#ff4040;stroke-width:2.45863318;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" />\n        <g\n           id=\"g7816-2-2-1\"\n           transform=\"matrix(-0.64278761,0.76604444,-0.76604444,-0.64278761,891.64755,464.76172)\"\n           style=\"fill:#ff0000;fill-opacity:1;stroke:#3b4040;stroke-width:6.5;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\">\n          <g\n             transform=\"translate(103.49967,23.717213)\"\n             id=\"g3944-4-8-9-36-7-2\"\n             style=\"fill:#ff0000;fill-opacity:1;stroke:#3b4040;stroke-width:6.5;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\">\n            <g\n               id=\"g3936-7-6-47-15-4-4\"\n               style=\"fill:#ff0000;fill-opacity:1;stroke:#3b4040;stroke-width:6.5;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\" />\n          </g>\n        </g>\n      </g>\n      <path\n         transform=\"matrix(1.2529711,0,0,1.2843742,45.004638,-300.51887)\"\n         d=\"m 258.57143,540.93359 c 0,9.46774 -7.67512,17.14286 -17.14286,17.14286 -9.46773,0 -17.14285,-7.67512 -17.14285,-17.14286 0,-9.46773 7.67512,-17.14285 17.14285,-17.14285 9.46774,0 17.14286,7.67512 17.14286,17.14285 z\"\n         sodipodi:ry=\"17.142857\"\n         sodipodi:rx=\"17.142857\"\n         sodipodi:cy=\"540.93359\"\n         sodipodi:cx=\"241.42857\"\n         id=\"path2985-5-4-6-5\"\n         style=\"fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:#004fd4;stroke-width:9.79855633;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\"\n         sodipodi:type=\"arc\" />\n      <path\n         transform=\"matrix(1.7906912,0,0,1.8499586,-128.79161,-355.09282)\"\n         d=\"m 247.48738,426.82523 c 0,3.20787 -2.6005,5.80837 -5.80838,5.80837 -3.20788,0 -5.80838,-2.6005 -5.80838,-5.80837 0,-3.20788 2.6005,-5.80838 5.80838,-5.80838 3.20788,0 5.80838,2.6005 5.80838,5.80838 z\"\n         sodipodi:ry=\"5.8083773\"\n         sodipodi:rx=\"5.8083773\"\n         sodipodi:cy=\"426.82523\"\n         sodipodi:cx=\"241.679\"\n         id=\"path3761-3-4-2-2-74-1\"\n         style=\"fill:#ff0000;fill-opacity:1;fill-rule:nonzero;stroke:#004f3d;stroke-width:2.7317884;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\"\n         sodipodi:type=\"arc\" />\n    </g>\n  </g>\n</svg>\n<div class=\"fill_parent\">\n        <div style=\"position: absolute; left: 50%; top: 50%; -webkit-transform: translateY(-50%) translateX(-50%)\" class=\"name\"></div>\n    </div>\n</div>",
				"customAnchors": ""
			}
		}
	},
	"edges": {
		"f62aad634f5c4cf127953fb2": {
			"label": "Widget to HTML Element",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"Widget"
					],
					"targetTypes": [
						"HTML Element"
					]
				}
			],
			"attributes": {}
		},
		"746d0eb4658b23c1f24d7d8a": {
			"label": "Element Update",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"Function"
					],
					"targetTypes": [
						"HTML Element"
					]
				}
			],
			"attributes": {}
		},
		"7ba41681530bce9f6550d063": {
			"label": "Element Creation",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"Function"
					],
					"targetTypes": [
						"HTML Element"
					]
				}
			],
			"attributes": {}
		},
		"29d6976c6a007c57b37577c1": {
			"label": "HTML Element to Event",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"HTML Element"
					],
					"targetTypes": [
						"Event"
					]
				}
			],
			"attributes": {}
		},
		"f724189f77aa28361fbf1116": {
			"label": "Parameter Connection",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"Function",
						"Microservice Call"
					],
					"targetTypes": [
						"Input Parameter"
					]
				}
			],
			"attributes": {}
		},
		"3015513f735588a75efbe0a6": {
			"label": "Initiates",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"Function"
					],
					"targetTypes": [
						"IWC Call"
					]
				}
			],
			"attributes": {}
		},
		"d10871a8f6eee90260e499f8": {
			"label": "Waits for",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"Function"
					],
					"targetTypes": [
						"IWC Response"
					]
				}
			],
			"attributes": {}
		},
		"dfa70d87d27fb0576adfc8bb": {
			"label": "Event to Function Call",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"Event"
					],
					"targetTypes": [
						"Function"
					]
				}
			],
			"attributes": {}
		},
		"21d68a647d3f24d9efdf3828": {
			"label": "Function To Microservice Call",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"Function"
					],
					"targetTypes": [
						"Microservice Call"
					]
				}
			],
			"attributes": {}
		},
		"3c94b7e943e2a455a98b1504": {
			"label": "Widget to Function",
			"shape": {
				"arrow": "bidirassociation",
				"shape": "straight",
				"color": "black",
				"overlay": "",
				"overlayPosition": "top",
				"overlayRotate": true
			},
			"relations": [
				{
					"sourceTypes": [
						"Widget"
					],
					"targetTypes": [
						"Function"
					]
				}
			],
			"attributes": {}
		}
	}
};

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_dialog__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_progressbar__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_progressbar__);




function Loader() {
    var $init, $progressbar, $progressLabel;
    return {
        init: function(){
            $init  = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#init');
            $progressbar = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#progressbar");
            $progressLabel = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".progress-label");
            $init.dialog({
                resizable: false,
                modal: true,
                height: "auto",
                width: 400,
                classes: {
                    "ui-dialog": "no-close",
                }
            });
            $progressbar.progressbar({
                value: false,
                change: function () {
                    $progressLabel.text($progressbar.progressbar("value") + "%");
                },
                complete: function () {
                    $progressLabel.text("Complete!");
                }
            });
        },
        checkSuccessful: function (index, progress) {
            var $node = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#loading").find('p:eq(' + index + ')');
            $node.append('<span class="ui-icon ui-icon-circle-check" style="float:left;"></span>');
            $node.css('opacity', 1);
            $progressbar.progressbar("value", progress);
        },
        checkFail : function(index, progress){
            var $node = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#loading").find('p:eq(' + index + ')');
            $node.append('<span class="ui-icon ui-icon-alert" style="float:left;"></span>');
            $node.css('opacity', 1);
            $progressbar.progressbar("value", progress);
        },
        destroy : function(timeout){
            setTimeout(function(){
                $init.dialog( "destroy" );    
                $init.remove();            
            }, timeout);
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (new Loader());


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_resizable__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_resizable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_resizable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_draggable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_Constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WireframeModel_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Wireframe_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Palette_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Editor_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Toolbox_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__HierachyTree_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tags_TagRegistry_js__ = __webpack_require__(10);
/*global y, vls*/















/**
 * The Main function of the Wireframing editor
 * @param {Object} config the configuration file
 * @param {boolean} disableDragging true if drag&drop of the wireframe canvas should be disabled else false
 * @return {Editor} the editor
 */
/* harmony default export */ __webpack_exports__["a"] = (function (config, disableDragging) {
  if (!__WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["m" /* mxClient */].isBrowserSupported()) {
    // Displays an error message if the browser is not supported.
    __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["c" /* mxUtils */].error('Browser is not supported!', 200, false);
  } else {
    var model = new __WEBPACK_IMPORTED_MODULE_6__WireframeModel_js__["a" /* default */]();
    var container = document.getElementById('wireframe');
    //disable default context menu
    __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["d" /* mxEvent */].disableContextMenu(container);
    var wireframe = new __WEBPACK_IMPORTED_MODULE_7__Wireframe_js__["a" /* default */](container, model);

    var htmlPalette = document.getElementById('palette');
    var palette = new __WEBPACK_IMPORTED_MODULE_8__Palette_js__["a" /* default */](htmlPalette);

    var editor = new __WEBPACK_IMPORTED_MODULE_9__Editor_js__["a" /* default */](wireframe, palette, config);
    __WEBPACK_IMPORTED_MODULE_12__tags_TagRegistry_js__["a" /* default */].initFromVLS(vls, config);
    
    //After the editor the add elements to window
    var xml = y.share.data.get('wireframe');
    if (xml) {
      var doc = __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["c" /* mxUtils */].parseXml(xml);
      var codec = new __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["b" /* mxCodec */](doc);
      codec.decode(doc.documentElement.firstChild, model);
      __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__["a" /* default */].initSharedData(wireframe.getDefaultParent(), wireframe);
      model.initMetaFromXml(doc.documentElement);
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wireframeWrap').css('width', model.getAttribute('width')).css('height', model.getAttribute('height'));
      wireframe.maximumGraphBounds = new __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["n" /* mxRectangle */](0, 0, parseInt(model.getAttribute('width')), parseInt(model.getAttribute('height')));
      var bounds = wireframe.getBoundingBox(wireframe.getDefaultParent().children);
      var name = model.getMeta().getAttribute('_name');
      if (name && name.length > 0) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#draggingBar').append(name);
      }
      model.initSharedData();
      __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__["a" /* default */].Save(wireframe);
    }

    var htmlToolbox = document.getElementById('toolbox');
    new __WEBPACK_IMPORTED_MODULE_10__Toolbox_js__["a" /* default */](htmlToolbox, editor);
    __WEBPACK_IMPORTED_MODULE_11__HierachyTree_js__["a" /* default */].init(editor);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wireframeWrap').resizable({
      //handles: "n, e, s, w, se, sw, nw, ne",
      handles: "se",
      containment: '#wireframeContainer',
      //aspectRatio: 4/3,
      minWidth: bounds ? bounds.x + bounds.width : 320,
      minHeight: bounds ? bounds.y + bounds.height : 200,
      alsoResize: "#wireframe, #draggingBar",
      classes: {
        "ui-resizable-se": "ui-icon ui-icon-grip-diagonal-se"
      },
      stop: function (event, ui) {
        //propagate graph resize to other users; handled in Toolbox.js
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_4__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GRAPH_RESIZE, {
          userId: y.db.userId,
          height: ui.size.height,
          width: ui.size.width
        });
        model.setAttribute('height', ui.size.height);
        model.setAttribute('width', ui.size.width);
        __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__["a" /* default */].Save(wireframe);
      }
    });
    if (!disableDragging) {
      __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#wireframeWrap").draggable({
        handle: "#draggingBar",
        containment: '#wireframeContainer'
      });
    }

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.hsplit').click(function () {
      var $palette = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#palette');
      var paletteWidth = $palette.css('width');
      if ($palette.is(':visible')) {
        $palette.hide();
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wireframeContainer').css('left', '-=' + paletteWidth);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#toolbox').css('left', '-=' + paletteWidth);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css('left', '-=' + paletteWidth);
      } else {
        $palette.show();
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css('left', '+=' + paletteWidth);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wireframeContainer').css('left', '+=' + paletteWidth);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#toolbox').css('left', '+=' + paletteWidth);
      }
    });
  }
  return editor;
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserList_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/*@global localStorage*/
/**
 * @module
 */



/**
 * In the ROLE SDK request the user data and generate a user list
 * Uses the data in the localStorage to generate the request for the user data
 * @async
 * @return {undefined}
 */
function RoleLogin(){
    var deferred = __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.Deferred();
    var url = localStorage.userinfo_endpoint + '?access_token=' + localStorage.access_token;
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.get(url, function(data){
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserList_js__["a" /* default */])({name : data.name, imageUrl : data.picture}, false);
        deferred.resolve();
    }).fail(function(error){
        deferred.reject(error);
    });
    
    return deferred.promise();
}

/* harmony default export */ __webpack_exports__["a"] = (RoleLogin);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tags_TagRegistry_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlays_SyncMetaSelectOverlay_js__ = __webpack_require__(96);
/*global y, mxLog*/







/**
 * @classdesc Live mapper for the CAE. Its a Singleton class.
 * @constructor
 * @requires syncmeta-plugin
 */
function CAELiveMapper() {

    var widgetAttr = {};

    return {
        /**
         * Initialize the live mapping the the CAE frontend component model
         * @param {mxEditor} editor the editor
         * @param {String} userId the id of the user which is just passed to the syncmeta-plugin module
         * @return {undefined}
         * @memberof CAELiveMapper
         */
        init: function (editor, userId) {
            //The live mapper starts here
            __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.init(y, userId);
            var model = y.share.data.get('model');
            var widgetNodeId = null;
            var hasChildMap = {};
            var nodeCreateMap = {};
            var mxCellsAddedFlag = true, mxCellsRemoveFlag = true, mxCellOverlayAddFlag = true;
            if (model) {
                for (var key in model.nodes) {
                    if (model.nodes.hasOwnProperty(key)) {
                        var node = model.nodes[key];
                        if (node.type === 'Widget') {
                            widgetNodeId = key;
                            break;
                        }
                    }
                }
                for (var key in model.edges) {
                    if (model.edges.hasOwnProperty(key)) {
                        var edge = model.edges[key];
                        if (edge.type === 'hasChild') {
                            hasChildMap[edge.target] = key;
                        }
                    }
                }
            }
            if (!widgetNodeId) {
                widgetNodeId = __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.createNode('Widget', 4500, 4500, 100, 100, 1);
                setTimeout(function () {
                    var meta = editor.graph.model.getMeta();
                    __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.setAttributeValue(widgetNodeId, 'width', meta.getAttribute('width'));
                    __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.setAttributeValue(widgetNodeId, 'height', meta.getAttribute('height'));
                }, 750);
            } else {
                var meta = editor.graph.model.getMeta();
                /*for (var i = 0; i < meta.attributes.length; i++) {
                    var attrib = meta.attributes[i];
                    var ytext = widgetYMap.get(widgetNodeId + '[' + attrib.name.slice(1) + ']');
                    if(ytext)
                        widgetAttr[attrib.name] = ytext;
                    else mxLog.writeln('Widget node attribute ' + attrib.name + ' is not ytext????');
                }*/
                __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.setAttributeValue(widgetNodeId, 'width', meta.getAttribute('width'));
                __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.setAttributeValue(widgetNodeId, 'height', meta.getAttribute('height'));
            }

            //if no widget node is found dont initialize the events
            if (!widgetNodeId) return;

            editor.graph.model.setAttribute('id', widgetNodeId);

            __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.onNodeAdd(function (event) {
                mxLog.writeln('Node was created in SyncMeta: ' + JSON.stringify(event));
                nodeCreateMap[event.id] = event;
            });
            __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.onEdgeAdd(function (event) {
                mxLog.writeln('Edge was created in SyncMeta: ' + JSON.stringify(event));
                var cell = editor.graph.model.getCell(event.target);
                if (cell) return;
                if (event.source === widgetNodeId && event.type === 'Widget to HTML Element') {
                    var ymap = y.share.nodes.get(event.target);
                    if (ymap) {
                        var attr = ymap.get(event.target + '[type]');
                        var type;
                        if (attr)
                            type = attr.value;
                        else
                            type = 'input';

                        var UIControl = editor.getUIComponentFromHTMLName(type);
                        if (UIControl) {
                            var encoder = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxCodec */]();
                            var uiControl = new UIControl();
                            var result = encoder.encode(uiControl);

                            var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getXml(result);
                            mxCellsAddedFlag = false;
                            //Create Node
                            y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].ADD_VERTEX, {
                                userId: y.db.userId,
                                id: event.target,
                                data: xml,
                                parent: null
                            });
                            if (editor.graph.getDefaultParent().children.length > 1) {
                                y.share.action.set(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.APPLY_LAYOUT, { userId: y.db.userId, cellId: null });
                            }
                        }

                    }
                }
            });
            __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.onNodeDelete(function (event) {
                mxLog.writeln('Node deleted from Widget: ' + JSON.stringify(event));
                y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REMOVE, {
                    userId: y.db.userId,
                    cells: [event]
                });

            });
            __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.onEdgeDelete(function (event) {
                mxLog.writeln('Edge deleted from the Widget: ' + JSON.stringify(event));
                var cell = editor.graph.model.getCell(event.target);
                if (cell && event.type === 'Widget to HTML Element') {
                    y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REMOVE, {
                        userId: y.db.userId,
                        cells: [cell.id]
                    });
                }
            });
            __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.onNodeAttributeChange(function (value, entity, entityValueId, userId) {
                var cell = editor.graph.model.getCell(entity);
                if (!entityValueId) return;
                var attr = entityValueId.substring(entityValueId.indexOf('[') + 1, entityValueId.length - 1);
                switch (attr) {
                    case 'type': {
                        if (!value || !cell || cell.constructor.HTML_NODE_NAME === value || cell.value.getAttribute('uiType') === value) return;
                        var UIControl = editor.getUIComponentFromHTMLName(value);
                        if (UIControl) {
                            mxCellsRemoveFlag = false;
                            y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REMOVE, {
                                userId: y.db.userId,
                                cells: [entity]
                            });

                            var uiControl = new UIControl();
                            uiControl.geometry.x = cell.geometry.x;
                            uiControl.geometry.y = cell.geometry.y;
                            var encoder = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxCodec */]();
                            var result = encoder.encode(uiControl);

                            var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getXml(result);
                            mxCellsAddedFlag = false;
                            y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].ADD_VERTEX, {
                                userId: y.db.userId,
                                id: entity,
                                data: xml,
                                parent: cell.parent
                            });
                        } else {
                            y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REMOVE, {
                                userId: y.db.userId,
                                cells: [entity]
                            });
                        }
                        break;
                    }
                    case 'collaborative': {
                        if (value) {
                            var Tag = __WEBPACK_IMPORTED_MODULE_3__tags_TagRegistry_js__["a" /* default */].getClass('Shared');
                            var tag = new Tag(cell, new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxPoint */](-__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].TAG.SIZE * cell.getTagCounter(), 0));
                            if (cell && tag && userId && !cell.containsTagType(tag)) {
                                mxCellOverlayAddFlag = false;
                                __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.addCellOverlay.apply(editor.graph, [cell, tag]);
                                cell.addTag(tag);
                                tag.setCell(cell);
                                if (tag.hasOwnProperty('initAttributes')) tag.initAttributes();
                                tag.createShared(y.share.yfUsers.get(y.db.userId).id === userId);
                                tag.bindClickEvent(editor.graph);
                                var ref = __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#' + cell.getId() + '_tagTree').jstree(true);
                                if (ref) {
                                    ref.create_node(null, {
                                        id: tag.tagObj.getAttribute('id'),
                                        type: tag.tagObj.getAttribute('tagType'),
                                        text: tag.constructor.Alias || tag.tagObj.getAttribute('tagType'),
                                        state: {
                                            selected: false,
                                            opened: true
                                        }
                                    });
                                    //if (sel) ref.edit(sel);
                                }
                            }
                        }
                        else {
                            var tagId;
                            for (var i = 0; cell.overlays && i < cell.overlays.length; i++) {
                                var overlay = cell.overlays[i];
                                if (overlay.constructor.name === 'SharedTag')
                                    tagId = overlay.getId();
                            }
                            y.share.action.set(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.DELETE_TAG, { userId: y.db.userId, cellId: cell.getId(), selected: [tagId], types: ['SharedTag'], fromSyncMeta: true });
                        }
                        break;
                    }
                }

            });

            editor.graph.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].CELLS_ADDED, function (graph, event) {
                if (!mxCellsAddedFlag) {
                    mxCellsAddedFlag = true;
                    return;
                }
                var cells = event.getProperty('cells');
                var absolute = event.getProperty('absolute');
                var parent = event.getProperty('parent');

                if (!absolute) {
                    for (var i = 0; i < cells.length; i++) {
                        var cell = cells[i];
                        if (y.share.nodes.get(cell.id) != null) return;
                        __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.createNode('HTML Element', 4500, 4500, 100, 100, 1, null, cell.id);
                        setTimeout(function () {
                            __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.setAttributeValue(cell.id, 'type', cell.constructor.HTML_NODE_NAME || cell.value.getAttribute('uiType'));
                            __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.createEdge('Widget to HTML Element', widgetNodeId, cell.id);
                            if (parent.id != '1') {
                                var edgeId = __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.createEdge('hasChild', parent.id, cell.id);
                                hasChildMap[cell.id] = edgeId;
                            }

                        }, 500);
                    }
                } else {
                    if (parent.id != '1') {
                        for (var i = 0; i < cells.length; i++) {
                            if (hasChildMap.hasOwnProperty(cells[i].id)) {
                                __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.deleteEdge(hasChildMap[cells[i].id]);
                                delete hasChildMap[cells[i].id];
                            }
                            var edgeId = __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.createEdge('hasChild', parent.id, cells[i].id);
                            hasChildMap[cells[i].id] = edgeId;
                        }
                    } else {
                        for (var i = 0; i < cells.length; i++) {
                            if (hasChildMap.hasOwnProperty(cells[i].id)) {
                                __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.deleteEdge(hasChildMap[cells[i].id]);
                                delete hasChildMap[cells[i].id];
                            }
                        }
                    }
                }
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.applyLayout();
                }, 1000);
            });
            editor.graph.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REMOVE_CELLS, function (graph, event) {
                if (!mxCellsRemoveFlag) {
                    mxCellsRemoveFlag = true;
                    return;
                }
                var recursiveDelete = function (parent) {
                    if (!parent || !parent.children) return;
                    for (var i = 0; i < parent.children.length; i++) {
                        var cell = parent.children[i];
                        __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.deleteNode(cell.id);
                        delete hasChildMap[cell.id];
                    }
                    recursiveDelete(cell);
                }
                var cells = event.getProperty('cells');
                for (var i = 0; i < cells.length; i++) {
                    __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.deleteNode(cells[i].id);
                    recursiveDelete(cells[i]);
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.applyLayout();
                    }, 500);
                }
            });
            editor.graph.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].GROUP_CELLS, function (graph, event) {
                var group = event.getProperty('group');
                var cells = event.getProperty('cells');
                setTimeout(function () {
                    for (var i = 0; i < cells.length; i++) {
                        var edgeId = __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.createEdge('hasChild', group.id, cells[i].id);
                        hasChildMap[cells[i].id] = edgeId;
                    }
                }, 800);
            });
            editor.graph.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].UNGROUP_CELLS, function (graph, event) {
                var cells = event.getProperty('cells');
                for (var i = 0; i < cells.length; i++) {
                    var cell = cells[i];
                    __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.deleteNode(cell.id);
                }

            });

            y.share.action.observe(function (event) {
                switch (event.name) {
                    case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].ADD_OVERLAY: {
                        if (!mxCellOverlayAddFlag) {
                            mxCellOverlayAddFlag = true;
                            return;
                        }
                        if (event.value.fromSyncMeta) return;
                        if (event.value.xml.indexOf('SharedTag') != -1)
                            __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.setAttributeValue(event.value.id, 'collaborative', true);
                        break;
                    }
                    case __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GRAPH_RESIZE: {
                        __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.setAttributeValue(widgetNodeId, 'width', event.value.width.toString());
                        __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.setAttributeValue(widgetNodeId, 'height', event.value.height.toString());
                        break;
                    }
                    case __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.DELETE_TAG: {
                        if (event.value.fromSyncMeta) return;
                        for (var i = 0; i < event.value.types.length; i++) {
                            var type = event.value.types[i];
                            if (type === 'SharedTag')
                                __WEBPACK_IMPORTED_MODULE_2_syncmeta_plugin___default.a.setAttributeValue(event.value.cellId, 'collaborative', false);
                        }
                        break;
                    }
                }
            });

            y.share.select.observe(function (event) {
                var cell = editor.graph.model.getCell(event.value);
                if (cell) {
                    var overlay = new __WEBPACK_IMPORTED_MODULE_5__overlays_SyncMetaSelectOverlay_js__["a" /* default */](null, new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxPoint */](0, -cell.geometry.height));
                    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.addCellOverlay.apply(editor.graph, [cell, overlay]);
                }
                var oldCell = editor.graph.model.getCell(event.oldValue);
                if (oldCell) {
                    for (var i = 0; oldCell.overlays && i < oldCell.overlays.length; i++) {
                        var overlay = oldCell.overlays[i];
                        if (overlay instanceof __WEBPACK_IMPORTED_MODULE_5__overlays_SyncMetaSelectOverlay_js__["a" /* default */]) {
                            __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.removeCellOverlay.apply(editor.graph, [oldCell, overlay]);
                        }
                    }
                }

            });

        },
        /**
         * Get a shared widget attribute with the given name
         * @param {String} name the name of the attribute
         * @return {YText} the shared y-text object
         * @memberof CAELiveMapper
         */
        getSharedWidgetAttr: function (name) {
            return widgetAttr.hasOwnProperty(name) ? widgetAttr[name] : undefined;
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (new CAELiveMapper());

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_y_websockets_client_dist_y_websockets_client_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_y_websockets_client_dist_y_websockets_client_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_y_websockets_client_dist_y_websockets_client_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_y_memory_dist_y_memory_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_y_memory_dist_y_memory_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_y_memory_dist_y_memory_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_y_map_dist_y_map_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_y_map_dist_y_map_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_y_map_dist_y_map_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_y_text_dist_y_text_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_y_text_dist_y_text_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_y_text_dist_y_text_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_y_array_dist_y_array_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_y_array_dist_y_array_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_y_array_dist_y_array_js__);







__WEBPACK_IMPORTED_MODULE_1__node_modules_yjs_dist_y_js___default.a.extend(__WEBPACK_IMPORTED_MODULE_6__node_modules_y_array_dist_y_array_js___default.a, __WEBPACK_IMPORTED_MODULE_2__node_modules_y_websockets_client_dist_y_websockets_client_js___default.a, __WEBPACK_IMPORTED_MODULE_3__node_modules_y_memory_dist_y_memory_js___default.a, __WEBPACK_IMPORTED_MODULE_4__node_modules_y_map_dist_y_map_js___default.a, __WEBPACK_IMPORTED_MODULE_5__node_modules_y_text_dist_y_text_js___default.a);

window.Y = __WEBPACK_IMPORTED_MODULE_1__node_modules_yjs_dist_y_js___default.a;
/* harmony default export */ __webpack_exports__["a"] = (function (space) {
    var deferred = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
    __WEBPACK_IMPORTED_MODULE_1__node_modules_yjs_dist_y_js___default()({
        db: {
            name: "memory"
        },
        connector: {
            name: "websockets-client",
            room: space || 'yireframe'
        },
        share: {
            action: 'Map',
            attrs: 'Map',
            data : 'Map',
            awareness : 'Map', 
            yfUsers : 'Map',
            yfJoin : 'Map',
            //Syncmeta stuff not used by the Wireframe
            nodes: 'Map',
            edges : 'Map', 
            select: 'Map', 
            canvas: 'Map'
        }
    }).then(function (y) {
        window.y = y;
        deferred.resolve(y);
    });
    return deferred.promise();
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo( function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		} ) :

		// Support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		}
} );
} ) );


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: disableSelection
//>>group: Core
//>>description: Disable selection of text content within the set of matched elements.
//>>docs: http://api.jqueryui.com/disableSelection/

// This file is deprecated
( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.extend( {
	disableSelection: ( function() {
		var eventType = "onselectstart" in document.createElement( "div" ) ?
			"selectstart" :
			"mousedown";

		return function() {
			return this.on( eventType + ".ui-disableSelection", function( event ) {
				event.preventDefault();
			} );
		};
	} )(),

	enableSelection: function() {
		return this.off( ".ui-disableSelection" );
	}
} );

} ) );


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Form Reset Mixin
//>>group: Core
//>>description: Refresh input widgets when their form is reset
//>>docs: http://api.jqueryui.com/form-reset-mixin/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(58),
			__webpack_require__(2)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

return $.ui.formResetMixin = {
	_formResetHandler: function() {
		var form = $( this );

		// Wait for the form reset to actually happen before refreshing
		setTimeout( function() {
			var instances = form.data( "ui-form-reset-instances" );
			$.each( instances, function() {
				this.refresh();
			} );
		} );
	},

	_bindFormResetHandler: function() {
		this.form = this.element.form();
		if ( !this.form.length ) {
			return;
		}

		var instances = this.form.data( "ui-form-reset-instances" ) || [];
		if ( !instances.length ) {

			// We don't use _on() here because we use a single event handler per form
			this.form.on( "reset.ui-form-reset", this._formResetHandler );
		}
		instances.push( this );
		this.form.data( "ui-form-reset-instances", instances );
	},

	_unbindFormResetHandler: function() {
		if ( !this.form.length ) {
			return;
		}

		var instances = this.form.data( "ui-form-reset-instances" );
		instances.splice( $.inArray( this, instances ), 1 );
		if ( instances.length ) {
			this.form.data( "ui-form-reset-instances", instances );
		} else {
			this.form
				.removeData( "ui-form-reset-instances" )
				.off( "reset.ui-form-reset" );
		}
	}
};

} ) );


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// Support: IE8 Only
// IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
// with a string, so we need to find the proper form.
return $.fn.form = function() {
	return typeof this[ 0 ].form === "string" ? this.closest( "form" ) : $( this[ 0 ].form );
};

} ) );


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} ) );


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: labels
//>>group: Core
//>>description: Find all the labels associated with a given input
//>>docs: http://api.jqueryui.com/labels/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2), __webpack_require__(12) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.labels = function() {
	var ancestor, selector, id, labels, ancestors;

	// Check control.labels first
	if ( this[ 0 ].labels && this[ 0 ].labels.length ) {
		return this.pushStack( this[ 0 ].labels );
	}

	// Support: IE <= 11, FF <= 37, Android <= 2.3 only
	// Above browsers do not support control.labels. Everything below is to support them
	// as well as document fragments. control.labels does not work on document fragments
	labels = this.eq( 0 ).parents( "label" );

	// Look for the label based on the id
	id = this.attr( "id" );
	if ( id ) {

		// We don't search against the document in case the element
		// is disconnected from the DOM
		ancestor = this.eq( 0 ).parents().last();

		// Get a full set of top level ancestors
		ancestors = ancestor.add( ancestor.length ? ancestor.siblings() : this.siblings() );

		// Create a selector for the label based on the id
		selector = "label[for='" + $.ui.escapeSelector( id ) + "']";

		labels = labels.add( ancestors.find( selector ).addBack( selector ) );

	}

	// Return whatever we have found for labels
	return this.pushStack( labels );
};

} ) );


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {
( function() {
var cachedScrollbarWidth,
	max = Math.max,
	abs = Math.abs,
	rhorizontal = /left|center|right/,
	rvertical = /top|center|bottom/,
	roffset = /[\+\-]\d+(\.[\d]+)?%?/,
	rposition = /^\w+/,
	rpercent = /%$/,
	_position = $.fn.position;

function getOffsets( offsets, width, height ) {
	return [
		parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
		parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
	];
}

function parseCss( element, property ) {
	return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
	var raw = elem[ 0 ];
	if ( raw.nodeType === 9 ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: 0, left: 0 }
		};
	}
	if ( $.isWindow( raw ) ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
		};
	}
	if ( raw.preventDefault ) {
		return {
			width: 0,
			height: 0,
			offset: { top: raw.pageY, left: raw.pageX }
		};
	}
	return {
		width: elem.outerWidth(),
		height: elem.outerHeight(),
		offset: elem.offset()
	};
}

$.position = {
	scrollbarWidth: function() {
		if ( cachedScrollbarWidth !== undefined ) {
			return cachedScrollbarWidth;
		}
		var w1, w2,
			div = $( "<div " +
				"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
				"<div style='height:100px;width:auto;'></div></div>" ),
			innerDiv = div.children()[ 0 ];

		$( "body" ).append( div );
		w1 = innerDiv.offsetWidth;
		div.css( "overflow", "scroll" );

		w2 = innerDiv.offsetWidth;

		if ( w1 === w2 ) {
			w2 = div[ 0 ].clientWidth;
		}

		div.remove();

		return ( cachedScrollbarWidth = w1 - w2 );
	},
	getScrollInfo: function( within ) {
		var overflowX = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-x" ),
			overflowY = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-y" ),
			hasOverflowX = overflowX === "scroll" ||
				( overflowX === "auto" && within.width < within.element[ 0 ].scrollWidth ),
			hasOverflowY = overflowY === "scroll" ||
				( overflowY === "auto" && within.height < within.element[ 0 ].scrollHeight );
		return {
			width: hasOverflowY ? $.position.scrollbarWidth() : 0,
			height: hasOverflowX ? $.position.scrollbarWidth() : 0
		};
	},
	getWithinInfo: function( element ) {
		var withinElement = $( element || window ),
			isWindow = $.isWindow( withinElement[ 0 ] ),
			isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9,
			hasOffset = !isWindow && !isDocument;
		return {
			element: withinElement,
			isWindow: isWindow,
			isDocument: isDocument,
			offset: hasOffset ? $( element ).offset() : { left: 0, top: 0 },
			scrollLeft: withinElement.scrollLeft(),
			scrollTop: withinElement.scrollTop(),
			width: withinElement.outerWidth(),
			height: withinElement.outerHeight()
		};
	}
};

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// Make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
		target = $( options.of ),
		within = $.position.getWithinInfo( options.within ),
		scrollInfo = $.position.getScrollInfo( within ),
		collision = ( options.collision || "flip" ).split( " " ),
		offsets = {};

	dimensions = getDimensions( target );
	if ( target[ 0 ].preventDefault ) {

		// Force left top to allow flipping
		options.at = "left top";
	}
	targetWidth = dimensions.width;
	targetHeight = dimensions.height;
	targetOffset = dimensions.offset;

	// Clone to reuse original targetOffset later
	basePosition = $.extend( {}, targetOffset );

	// Force my and at to have valid horizontal and vertical positions
	// if a value is missing or invalid, it will be converted to center
	$.each( [ "my", "at" ], function() {
		var pos = ( options[ this ] || "" ).split( " " ),
			horizontalOffset,
			verticalOffset;

		if ( pos.length === 1 ) {
			pos = rhorizontal.test( pos[ 0 ] ) ?
				pos.concat( [ "center" ] ) :
				rvertical.test( pos[ 0 ] ) ?
					[ "center" ].concat( pos ) :
					[ "center", "center" ];
		}
		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

		// Calculate offsets
		horizontalOffset = roffset.exec( pos[ 0 ] );
		verticalOffset = roffset.exec( pos[ 1 ] );
		offsets[ this ] = [
			horizontalOffset ? horizontalOffset[ 0 ] : 0,
			verticalOffset ? verticalOffset[ 0 ] : 0
		];

		// Reduce to just the positions without the offsets
		options[ this ] = [
			rposition.exec( pos[ 0 ] )[ 0 ],
			rposition.exec( pos[ 1 ] )[ 0 ]
		];
	} );

	// Normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	if ( options.at[ 0 ] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[ 0 ] === "center" ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[ 1 ] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[ 1 ] === "center" ) {
		basePosition.top += targetHeight / 2;
	}

	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
	basePosition.left += atOffset[ 0 ];
	basePosition.top += atOffset[ 1 ];

	return this.each( function() {
		var collisionPosition, using,
			elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseCss( this, "marginLeft" ),
			marginTop = parseCss( this, "marginTop" ),
			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) +
				scrollInfo.width,
			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) +
				scrollInfo.height,
			position = $.extend( {}, basePosition ),
			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

		if ( options.my[ 0 ] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[ 0 ] === "center" ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[ 1 ] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[ 1 ] === "center" ) {
			position.top -= elemHeight / 2;
		}

		position.left += myOffset[ 0 ];
		position.top += myOffset[ 1 ];

		collisionPosition = {
			marginLeft: marginLeft,
			marginTop: marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[ i ] ] ) {
				$.ui.position[ collision[ i ] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
					my: options.my,
					at: options.at,
					within: within,
					elem: elem
				} );
			}
		} );

		if ( options.using ) {

			// Adds feedback as second argument to using callback, if present
			using = function( props ) {
				var left = targetOffset.left - position.left,
					right = left + targetWidth - elemWidth,
					top = targetOffset.top - position.top,
					bottom = top + targetHeight - elemHeight,
					feedback = {
						target: {
							element: target,
							left: targetOffset.left,
							top: targetOffset.top,
							width: targetWidth,
							height: targetHeight
						},
						element: {
							element: elem,
							left: position.left,
							top: position.top,
							width: elemWidth,
							height: elemHeight
						},
						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
					};
				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
					feedback.horizontal = "center";
				}
				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
					feedback.vertical = "middle";
				}
				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
					feedback.important = "horizontal";
				} else {
					feedback.important = "vertical";
				}
				options.using.call( this, props, feedback );
			};
		}

		elem.offset( $.extend( position, { using: using } ) );
	} );
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
				outerWidth = within.width,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = withinOffset - collisionPosLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
				newOverRight;

			// Element is wider than within
			if ( data.collisionWidth > outerWidth ) {

				// Element is initially over the left side of within
				if ( overLeft > 0 && overRight <= 0 ) {
					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth -
						withinOffset;
					position.left += overLeft - newOverRight;

				// Element is initially over right side of within
				} else if ( overRight > 0 && overLeft <= 0 ) {
					position.left = withinOffset;

				// Element is initially over both left and right sides of within
				} else {
					if ( overLeft > overRight ) {
						position.left = withinOffset + outerWidth - data.collisionWidth;
					} else {
						position.left = withinOffset;
					}
				}

			// Too far left -> align with left edge
			} else if ( overLeft > 0 ) {
				position.left += overLeft;

			// Too far right -> align with right edge
			} else if ( overRight > 0 ) {
				position.left -= overRight;

			// Adjust based on position and margin
			} else {
				position.left = max( position.left - collisionPosLeft, position.left );
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
				outerHeight = data.within.height,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = withinOffset - collisionPosTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
				newOverBottom;

			// Element is taller than within
			if ( data.collisionHeight > outerHeight ) {

				// Element is initially over the top of within
				if ( overTop > 0 && overBottom <= 0 ) {
					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight -
						withinOffset;
					position.top += overTop - newOverBottom;

				// Element is initially over bottom of within
				} else if ( overBottom > 0 && overTop <= 0 ) {
					position.top = withinOffset;

				// Element is initially over both top and bottom of within
				} else {
					if ( overTop > overBottom ) {
						position.top = withinOffset + outerHeight - data.collisionHeight;
					} else {
						position.top = withinOffset;
					}
				}

			// Too far up -> align with top
			} else if ( overTop > 0 ) {
				position.top += overTop;

			// Too far down -> align with bottom edge
			} else if ( overBottom > 0 ) {
				position.top -= overBottom;

			// Adjust based on position and margin
			} else {
				position.top = max( position.top - collisionPosTop, position.top );
			}
		}
	},
	flip: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.left + within.scrollLeft,
				outerWidth = within.width,
				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = collisionPosLeft - offsetLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					data.at[ 0 ] === "right" ?
						-data.targetWidth :
						0,
				offset = -2 * data.offset[ 0 ],
				newOverRight,
				newOverLeft;

			if ( overLeft < 0 ) {
				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -
					outerWidth - withinOffset;
				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
					position.left += myOffset + atOffset + offset;
				}
			} else if ( overRight > 0 ) {
				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +
					atOffset + offset - offsetLeft;
				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
					position.left += myOffset + atOffset + offset;
				}
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.top + within.scrollTop,
				outerHeight = within.height,
				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = collisionPosTop - offsetTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
				top = data.my[ 1 ] === "top",
				myOffset = top ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					data.at[ 1 ] === "bottom" ?
						-data.targetHeight :
						0,
				offset = -2 * data.offset[ 1 ],
				newOverTop,
				newOverBottom;
			if ( overTop < 0 ) {
				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -
					outerHeight - withinOffset;
				if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
					position.top += myOffset + atOffset + offset;
				}
			} else if ( overBottom > 0 ) {
				newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +
					offset - offsetTop;
				if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
					position.top += myOffset + atOffset + offset;
				}
			}
		}
	},
	flipfit: {
		left: function() {
			$.ui.position.flip.left.apply( this, arguments );
			$.ui.position.fit.left.apply( this, arguments );
		},
		top: function() {
			$.ui.position.flip.top.apply( this, arguments );
			$.ui.position.fit.top.apply( this, arguments );
		}
	}
};

} )();

return $.ui.position;

} ) );


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.scrollParent = function( includeHidden ) {
	var position = this.css( "position" ),
		excludeStaticParent = position === "absolute",
		overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
		scrollParent = this.parents().filter( function() {
			var parent = $( this );
			if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
				return false;
			}
			return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
				parent.css( "overflow-x" ) );
		} ).eq( 0 );

	return position === "fixed" || !scrollParent.length ?
		$( this[ 0 ].ownerDocument || document ) :
		scrollParent;
};

} ) );


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2), __webpack_require__(28) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.extend( $.expr[ ":" ], {
	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			hasTabindex = tabIndex != null;
		return ( !hasTabindex || tabIndex >= 0 ) && $.ui.focusable( element, hasTabindex );
	}
} );

} ) );


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Button
//>>group: Widgets
//>>description: Enhances a form with themeable buttons.
//>>docs: http://api.jqueryui.com/button/
//>>demos: http://jqueryui.com/button/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),

			// These are only for backcompat
			// TODO: Remove after 1.12
			__webpack_require__(66),
			__webpack_require__(65),

			__webpack_require__(13),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.button", {
	version: "1.12.1",
	defaultElement: "<button>",
	options: {
		classes: {
			"ui-button": "ui-corner-all"
		},
		disabled: null,
		icon: null,
		iconPosition: "beginning",
		label: null,
		showLabel: true
	},

	_getCreateOptions: function() {
		var disabled,

			// This is to support cases like in jQuery Mobile where the base widget does have
			// an implementation of _getCreateOptions
			options = this._super() || {};

		this.isInput = this.element.is( "input" );

		disabled = this.element[ 0 ].disabled;
		if ( disabled != null ) {
			options.disabled = disabled;
		}

		this.originalLabel = this.isInput ? this.element.val() : this.element.html();
		if ( this.originalLabel ) {
			options.label = this.originalLabel;
		}

		return options;
	},

	_create: function() {
		if ( !this.option.showLabel & !this.options.icon ) {
			this.options.showLabel = true;
		}

		// We have to check the option again here even though we did in _getCreateOptions,
		// because null may have been passed on init which would override what was set in
		// _getCreateOptions
		if ( this.options.disabled == null ) {
			this.options.disabled = this.element[ 0 ].disabled || false;
		}

		this.hasTitle = !!this.element.attr( "title" );

		// Check to see if the label needs to be set or if its already correct
		if ( this.options.label && this.options.label !== this.originalLabel ) {
			if ( this.isInput ) {
				this.element.val( this.options.label );
			} else {
				this.element.html( this.options.label );
			}
		}
		this._addClass( "ui-button", "ui-widget" );
		this._setOption( "disabled", this.options.disabled );
		this._enhance();

		if ( this.element.is( "a" ) ) {
			this._on( {
				"keyup": function( event ) {
					if ( event.keyCode === $.ui.keyCode.SPACE ) {
						event.preventDefault();

						// Support: PhantomJS <= 1.9, IE 8 Only
						// If a native click is available use it so we actually cause navigation
						// otherwise just trigger a click event
						if ( this.element[ 0 ].click ) {
							this.element[ 0 ].click();
						} else {
							this.element.trigger( "click" );
						}
					}
				}
			} );
		}
	},

	_enhance: function() {
		if ( !this.element.is( "button" ) ) {
			this.element.attr( "role", "button" );
		}

		if ( this.options.icon ) {
			this._updateIcon( "icon", this.options.icon );
			this._updateTooltip();
		}
	},

	_updateTooltip: function() {
		this.title = this.element.attr( "title" );

		if ( !this.options.showLabel && !this.title ) {
			this.element.attr( "title", this.options.label );
		}
	},

	_updateIcon: function( option, value ) {
		var icon = option !== "iconPosition",
			position = icon ? this.options.iconPosition : value,
			displayBlock = position === "top" || position === "bottom";

		// Create icon
		if ( !this.icon ) {
			this.icon = $( "<span>" );

			this._addClass( this.icon, "ui-button-icon", "ui-icon" );

			if ( !this.options.showLabel ) {
				this._addClass( "ui-button-icon-only" );
			}
		} else if ( icon ) {

			// If we are updating the icon remove the old icon class
			this._removeClass( this.icon, null, this.options.icon );
		}

		// If we are updating the icon add the new icon class
		if ( icon ) {
			this._addClass( this.icon, null, value );
		}

		this._attachIcon( position );

		// If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
		// the iconSpace if there is one.
		if ( displayBlock ) {
			this._addClass( this.icon, null, "ui-widget-icon-block" );
			if ( this.iconSpace ) {
				this.iconSpace.remove();
			}
		} else {

			// Position is beginning or end so remove the ui-widget-icon-block class and add the
			// space if it does not exist
			if ( !this.iconSpace ) {
				this.iconSpace = $( "<span> </span>" );
				this._addClass( this.iconSpace, "ui-button-icon-space" );
			}
			this._removeClass( this.icon, null, "ui-wiget-icon-block" );
			this._attachIconSpace( position );
		}
	},

	_destroy: function() {
		this.element.removeAttr( "role" );

		if ( this.icon ) {
			this.icon.remove();
		}
		if ( this.iconSpace ) {
			this.iconSpace.remove();
		}
		if ( !this.hasTitle ) {
			this.element.removeAttr( "title" );
		}
	},

	_attachIconSpace: function( iconPosition ) {
		this.icon[ /^(?:end|bottom)/.test( iconPosition ) ? "before" : "after" ]( this.iconSpace );
	},

	_attachIcon: function( iconPosition ) {
		this.element[ /^(?:end|bottom)/.test( iconPosition ) ? "append" : "prepend" ]( this.icon );
	},

	_setOptions: function( options ) {
		var newShowLabel = options.showLabel === undefined ?
				this.options.showLabel :
				options.showLabel,
			newIcon = options.icon === undefined ? this.options.icon : options.icon;

		if ( !newShowLabel && !newIcon ) {
			options.showLabel = true;
		}
		this._super( options );
	},

	_setOption: function( key, value ) {
		if ( key === "icon" ) {
			if ( value ) {
				this._updateIcon( key, value );
			} else if ( this.icon ) {
				this.icon.remove();
				if ( this.iconSpace ) {
					this.iconSpace.remove();
				}
			}
		}

		if ( key === "iconPosition" ) {
			this._updateIcon( key, value );
		}

		// Make sure we can't end up with a button that has neither text nor icon
		if ( key === "showLabel" ) {
				this._toggleClass( "ui-button-icon-only", null, !value );
				this._updateTooltip();
		}

		if ( key === "label" ) {
			if ( this.isInput ) {
				this.element.val( value );
			} else {

				// If there is an icon, append it, else nothing then append the value
				// this avoids removal of the icon when setting label text
				this.element.html( value );
				if ( this.icon ) {
					this._attachIcon( this.options.iconPosition );
					this._attachIconSpace( this.options.iconPosition );
				}
			}
		}

		this._super( key, value );

		if ( key === "disabled" ) {
			this._toggleClass( null, "ui-state-disabled", value );
			this.element[ 0 ].disabled = value;
			if ( value ) {
				this.element.blur();
			}
		}
	},

	refresh: function() {

		// Make sure to only check disabled if its an element that supports this otherwise
		// check for the disabled class to determine state
		var isDisabled = this.element.is( "input, button" ) ?
			this.element[ 0 ].disabled : this.element.hasClass( "ui-button-disabled" );

		if ( isDisabled !== this.options.disabled ) {
			this._setOptions( { disabled: isDisabled } );
		}

		this._updateTooltip();
	}
} );

// DEPRECATED
if ( $.uiBackCompat !== false ) {

	// Text and Icons options
	$.widget( "ui.button", $.ui.button, {
		options: {
			text: true,
			icons: {
				primary: null,
				secondary: null
			}
		},

		_create: function() {
			if ( this.options.showLabel && !this.options.text ) {
				this.options.showLabel = this.options.text;
			}
			if ( !this.options.showLabel && this.options.text ) {
				this.options.text = this.options.showLabel;
			}
			if ( !this.options.icon && ( this.options.icons.primary ||
					this.options.icons.secondary ) ) {
				if ( this.options.icons.primary ) {
					this.options.icon = this.options.icons.primary;
				} else {
					this.options.icon = this.options.icons.secondary;
					this.options.iconPosition = "end";
				}
			} else if ( this.options.icon ) {
				this.options.icons.primary = this.options.icon;
			}
			this._super();
		},

		_setOption: function( key, value ) {
			if ( key === "text" ) {
				this._super( "showLabel", value );
				return;
			}
			if ( key === "showLabel" ) {
				this.options.text = value;
			}
			if ( key === "icon" ) {
				this.options.icons.primary = value;
			}
			if ( key === "icons" ) {
				if ( value.primary ) {
					this._super( "icon", value.primary );
					this._super( "iconPosition", "beginning" );
				} else if ( value.secondary ) {
					this._super( "icon", value.secondary );
					this._super( "iconPosition", "end" );
				}
			}
			this._superApply( arguments );
		}
	} );

	$.fn.button = ( function( orig ) {
		return function() {
			if ( !this.length || ( this.length && this[ 0 ].tagName !== "INPUT" ) ||
					( this.length && this[ 0 ].tagName === "INPUT" && (
						this.attr( "type" ) !== "checkbox" && this.attr( "type" ) !== "radio"
					) ) ) {
				return orig.apply( this, arguments );
			}
			if ( !$.ui.checkboxradio ) {
				$.error( "Checkboxradio widget missing" );
			}
			if ( arguments.length === 0 ) {
				return this.checkboxradio( {
					"icon": false
				} );
			}
			return this.checkboxradio.apply( this, arguments );
		};
	} )( $.fn.button );

	$.fn.buttonset = function() {
		if ( !$.ui.controlgroup ) {
			$.error( "Controlgroup widget missing" );
		}
		if ( arguments[ 0 ] === "option" && arguments[ 1 ] === "items" && arguments[ 2 ] ) {
			return this.controlgroup.apply( this,
				[ arguments[ 0 ], "items.button", arguments[ 2 ] ] );
		}
		if ( arguments[ 0 ] === "option" && arguments[ 1 ] === "items" ) {
			return this.controlgroup.apply( this, [ arguments[ 0 ], "items.button" ] );
		}
		if ( typeof arguments[ 0 ] === "object" && arguments[ 0 ].items ) {
			arguments[ 0 ].items = {
				button: arguments[ 0 ].items
			};
		}
		return this.controlgroup.apply( this, arguments );
	};
}

return $.ui.button;

} ) );


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Checkboxradio
//>>group: Widgets
//>>description: Enhances a form with multiple themeable checkboxes or radio buttons.
//>>docs: http://api.jqueryui.com/checkboxradio/
//>>demos: http://jqueryui.com/checkboxradio/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.structure: ../../themes/base/checkboxradio.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(12),
			__webpack_require__(57),
			__webpack_require__(60),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.checkboxradio", [ $.ui.formResetMixin, {
	version: "1.12.1",
	options: {
		disabled: null,
		label: null,
		icon: true,
		classes: {
			"ui-checkboxradio-label": "ui-corner-all",
			"ui-checkboxradio-icon": "ui-corner-all"
		}
	},

	_getCreateOptions: function() {
		var disabled, labels;
		var that = this;
		var options = this._super() || {};

		// We read the type here, because it makes more sense to throw a element type error first,
		// rather then the error for lack of a label. Often if its the wrong type, it
		// won't have a label (e.g. calling on a div, btn, etc)
		this._readType();

		labels = this.element.labels();

		// If there are multiple labels, use the last one
		this.label = $( labels[ labels.length - 1 ] );
		if ( !this.label.length ) {
			$.error( "No label found for checkboxradio widget" );
		}

		this.originalLabel = "";

		// We need to get the label text but this may also need to make sure it does not contain the
		// input itself.
		this.label.contents().not( this.element[ 0 ] ).each( function() {

			// The label contents could be text, html, or a mix. We concat each element to get a
			// string representation of the label, without the input as part of it.
			that.originalLabel += this.nodeType === 3 ? $( this ).text() : this.outerHTML;
		} );

		// Set the label option if we found label text
		if ( this.originalLabel ) {
			options.label = this.originalLabel;
		}

		disabled = this.element[ 0 ].disabled;
		if ( disabled != null ) {
			options.disabled = disabled;
		}
		return options;
	},

	_create: function() {
		var checked = this.element[ 0 ].checked;

		this._bindFormResetHandler();

		if ( this.options.disabled == null ) {
			this.options.disabled = this.element[ 0 ].disabled;
		}

		this._setOption( "disabled", this.options.disabled );
		this._addClass( "ui-checkboxradio", "ui-helper-hidden-accessible" );
		this._addClass( this.label, "ui-checkboxradio-label", "ui-button ui-widget" );

		if ( this.type === "radio" ) {
			this._addClass( this.label, "ui-checkboxradio-radio-label" );
		}

		if ( this.options.label && this.options.label !== this.originalLabel ) {
			this._updateLabel();
		} else if ( this.originalLabel ) {
			this.options.label = this.originalLabel;
		}

		this._enhance();

		if ( checked ) {
			this._addClass( this.label, "ui-checkboxradio-checked", "ui-state-active" );
			if ( this.icon ) {
				this._addClass( this.icon, null, "ui-state-hover" );
			}
		}

		this._on( {
			change: "_toggleClasses",
			focus: function() {
				this._addClass( this.label, null, "ui-state-focus ui-visual-focus" );
			},
			blur: function() {
				this._removeClass( this.label, null, "ui-state-focus ui-visual-focus" );
			}
		} );
	},

	_readType: function() {
		var nodeName = this.element[ 0 ].nodeName.toLowerCase();
		this.type = this.element[ 0 ].type;
		if ( nodeName !== "input" || !/radio|checkbox/.test( this.type ) ) {
			$.error( "Can't create checkboxradio on element.nodeName=" + nodeName +
				" and element.type=" + this.type );
		}
	},

	// Support jQuery Mobile enhanced option
	_enhance: function() {
		this._updateIcon( this.element[ 0 ].checked );
	},

	widget: function() {
		return this.label;
	},

	_getRadioGroup: function() {
		var group;
		var name = this.element[ 0 ].name;
		var nameSelector = "input[name='" + $.ui.escapeSelector( name ) + "']";

		if ( !name ) {
			return $( [] );
		}

		if ( this.form.length ) {
			group = $( this.form[ 0 ].elements ).filter( nameSelector );
		} else {

			// Not inside a form, check all inputs that also are not inside a form
			group = $( nameSelector ).filter( function() {
				return $( this ).form().length === 0;
			} );
		}

		return group.not( this.element );
	},

	_toggleClasses: function() {
		var checked = this.element[ 0 ].checked;
		this._toggleClass( this.label, "ui-checkboxradio-checked", "ui-state-active", checked );

		if ( this.options.icon && this.type === "checkbox" ) {
			this._toggleClass( this.icon, null, "ui-icon-check ui-state-checked", checked )
				._toggleClass( this.icon, null, "ui-icon-blank", !checked );
		}

		if ( this.type === "radio" ) {
			this._getRadioGroup()
				.each( function() {
					var instance = $( this ).checkboxradio( "instance" );

					if ( instance ) {
						instance._removeClass( instance.label,
							"ui-checkboxradio-checked", "ui-state-active" );
					}
				} );
		}
	},

	_destroy: function() {
		this._unbindFormResetHandler();

		if ( this.icon ) {
			this.icon.remove();
			this.iconSpace.remove();
		}
	},

	_setOption: function( key, value ) {

		// We don't allow the value to be set to nothing
		if ( key === "label" && !value ) {
			return;
		}

		this._super( key, value );

		if ( key === "disabled" ) {
			this._toggleClass( this.label, null, "ui-state-disabled", value );
			this.element[ 0 ].disabled = value;

			// Don't refresh when setting disabled
			return;
		}
		this.refresh();
	},

	_updateIcon: function( checked ) {
		var toAdd = "ui-icon ui-icon-background ";

		if ( this.options.icon ) {
			if ( !this.icon ) {
				this.icon = $( "<span>" );
				this.iconSpace = $( "<span> </span>" );
				this._addClass( this.iconSpace, "ui-checkboxradio-icon-space" );
			}

			if ( this.type === "checkbox" ) {
				toAdd += checked ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
				this._removeClass( this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check" );
			} else {
				toAdd += "ui-icon-blank";
			}
			this._addClass( this.icon, "ui-checkboxradio-icon", toAdd );
			if ( !checked ) {
				this._removeClass( this.icon, null, "ui-icon-check ui-state-checked" );
			}
			this.icon.prependTo( this.label ).after( this.iconSpace );
		} else if ( this.icon !== undefined ) {
			this.icon.remove();
			this.iconSpace.remove();
			delete this.icon;
		}
	},

	_updateLabel: function() {

		// Remove the contents of the label ( minus the icon, icon space, and input )
		var contents = this.label.contents().not( this.element[ 0 ] );
		if ( this.icon ) {
			contents = contents.not( this.icon[ 0 ] );
		}
		if ( this.iconSpace ) {
			contents = contents.not( this.iconSpace[ 0 ] );
		}
		contents.remove();

		this.label.append( this.options.label );
	},

	refresh: function() {
		var checked = this.element[ 0 ].checked,
			isDisabled = this.element[ 0 ].disabled;

		this._updateIcon( checked );
		this._toggleClass( this.label, "ui-checkboxradio-checked", "ui-state-active", checked );
		if ( this.options.label !== null ) {
			this._updateLabel();
		}

		if ( isDisabled !== this.options.disabled ) {
			this._setOptions( { "disabled": isDisabled } );
		}
	}

} ] );

return $.ui.checkboxradio;

} ) );


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Controlgroup
//>>group: Widgets
//>>description: Visually groups form control widgets
//>>docs: http://api.jqueryui.com/controlgroup/
//>>demos: http://jqueryui.com/controlgroup/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/controlgroup.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {
var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;

return $.widget( "ui.controlgroup", {
	version: "1.12.1",
	defaultElement: "<div>",
	options: {
		direction: "horizontal",
		disabled: null,
		onlyVisible: true,
		items: {
			"button": "input[type=button], input[type=submit], input[type=reset], button, a",
			"controlgroupLabel": ".ui-controlgroup-label",
			"checkboxradio": "input[type='checkbox'], input[type='radio']",
			"selectmenu": "select",
			"spinner": ".ui-spinner-input"
		}
	},

	_create: function() {
		this._enhance();
	},

	// To support the enhanced option in jQuery Mobile, we isolate DOM manipulation
	_enhance: function() {
		this.element.attr( "role", "toolbar" );
		this.refresh();
	},

	_destroy: function() {
		this._callChildMethod( "destroy" );
		this.childWidgets.removeData( "ui-controlgroup-data" );
		this.element.removeAttr( "role" );
		if ( this.options.items.controlgroupLabel ) {
			this.element
				.find( this.options.items.controlgroupLabel )
				.find( ".ui-controlgroup-label-contents" )
				.contents().unwrap();
		}
	},

	_initWidgets: function() {
		var that = this,
			childWidgets = [];

		// First we iterate over each of the items options
		$.each( this.options.items, function( widget, selector ) {
			var labels;
			var options = {};

			// Make sure the widget has a selector set
			if ( !selector ) {
				return;
			}

			if ( widget === "controlgroupLabel" ) {
				labels = that.element.find( selector );
				labels.each( function() {
					var element = $( this );

					if ( element.children( ".ui-controlgroup-label-contents" ).length ) {
						return;
					}
					element.contents()
						.wrapAll( "<span class='ui-controlgroup-label-contents'></span>" );
				} );
				that._addClass( labels, null, "ui-widget ui-widget-content ui-state-default" );
				childWidgets = childWidgets.concat( labels.get() );
				return;
			}

			// Make sure the widget actually exists
			if ( !$.fn[ widget ] ) {
				return;
			}

			// We assume everything is in the middle to start because we can't determine
			// first / last elements until all enhancments are done.
			if ( that[ "_" + widget + "Options" ] ) {
				options = that[ "_" + widget + "Options" ]( "middle" );
			} else {
				options = { classes: {} };
			}

			// Find instances of this widget inside controlgroup and init them
			that.element
				.find( selector )
				.each( function() {
					var element = $( this );
					var instance = element[ widget ]( "instance" );

					// We need to clone the default options for this type of widget to avoid
					// polluting the variable options which has a wider scope than a single widget.
					var instanceOptions = $.widget.extend( {}, options );

					// If the button is the child of a spinner ignore it
					// TODO: Find a more generic solution
					if ( widget === "button" && element.parent( ".ui-spinner" ).length ) {
						return;
					}

					// Create the widget if it doesn't exist
					if ( !instance ) {
						instance = element[ widget ]()[ widget ]( "instance" );
					}
					if ( instance ) {
						instanceOptions.classes =
							that._resolveClassesValues( instanceOptions.classes, instance );
					}
					element[ widget ]( instanceOptions );

					// Store an instance of the controlgroup to be able to reference
					// from the outermost element for changing options and refresh
					var widgetElement = element[ widget ]( "widget" );
					$.data( widgetElement[ 0 ], "ui-controlgroup-data",
						instance ? instance : element[ widget ]( "instance" ) );

					childWidgets.push( widgetElement[ 0 ] );
				} );
		} );

		this.childWidgets = $( $.unique( childWidgets ) );
		this._addClass( this.childWidgets, "ui-controlgroup-item" );
	},

	_callChildMethod: function( method ) {
		this.childWidgets.each( function() {
			var element = $( this ),
				data = element.data( "ui-controlgroup-data" );
			if ( data && data[ method ] ) {
				data[ method ]();
			}
		} );
	},

	_updateCornerClass: function( element, position ) {
		var remove = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
		var add = this._buildSimpleOptions( position, "label" ).classes.label;

		this._removeClass( element, null, remove );
		this._addClass( element, null, add );
	},

	_buildSimpleOptions: function( position, key ) {
		var direction = this.options.direction === "vertical";
		var result = {
			classes: {}
		};
		result.classes[ key ] = {
			"middle": "",
			"first": "ui-corner-" + ( direction ? "top" : "left" ),
			"last": "ui-corner-" + ( direction ? "bottom" : "right" ),
			"only": "ui-corner-all"
		}[ position ];

		return result;
	},

	_spinnerOptions: function( position ) {
		var options = this._buildSimpleOptions( position, "ui-spinner" );

		options.classes[ "ui-spinner-up" ] = "";
		options.classes[ "ui-spinner-down" ] = "";

		return options;
	},

	_buttonOptions: function( position ) {
		return this._buildSimpleOptions( position, "ui-button" );
	},

	_checkboxradioOptions: function( position ) {
		return this._buildSimpleOptions( position, "ui-checkboxradio-label" );
	},

	_selectmenuOptions: function( position ) {
		var direction = this.options.direction === "vertical";
		return {
			width: direction ? "auto" : false,
			classes: {
				middle: {
					"ui-selectmenu-button-open": "",
					"ui-selectmenu-button-closed": ""
				},
				first: {
					"ui-selectmenu-button-open": "ui-corner-" + ( direction ? "top" : "tl" ),
					"ui-selectmenu-button-closed": "ui-corner-" + ( direction ? "top" : "left" )
				},
				last: {
					"ui-selectmenu-button-open": direction ? "" : "ui-corner-tr",
					"ui-selectmenu-button-closed": "ui-corner-" + ( direction ? "bottom" : "right" )
				},
				only: {
					"ui-selectmenu-button-open": "ui-corner-top",
					"ui-selectmenu-button-closed": "ui-corner-all"
				}

			}[ position ]
		};
	},

	_resolveClassesValues: function( classes, instance ) {
		var result = {};
		$.each( classes, function( key ) {
			var current = instance.options.classes[ key ] || "";
			current = $.trim( current.replace( controlgroupCornerRegex, "" ) );
			result[ key ] = ( current + " " + classes[ key ] ).replace( /\s+/g, " " );
		} );
		return result;
	},

	_setOption: function( key, value ) {
		if ( key === "direction" ) {
			this._removeClass( "ui-controlgroup-" + this.options.direction );
		}

		this._super( key, value );
		if ( key === "disabled" ) {
			this._callChildMethod( value ? "disable" : "enable" );
			return;
		}

		this.refresh();
	},

	refresh: function() {
		var children,
			that = this;

		this._addClass( "ui-controlgroup ui-controlgroup-" + this.options.direction );

		if ( this.options.direction === "horizontal" ) {
			this._addClass( null, "ui-helper-clearfix" );
		}
		this._initWidgets();

		children = this.childWidgets;

		// We filter here because we need to track all childWidgets not just the visible ones
		if ( this.options.onlyVisible ) {
			children = children.filter( ":visible" );
		}

		if ( children.length ) {

			// We do this last because we need to make sure all enhancment is done
			// before determining first and last
			$.each( [ "first", "last" ], function( index, value ) {
				var instance = children[ value ]().data( "ui-controlgroup-data" );

				if ( instance && that[ "_" + instance.widgetName + "Options" ] ) {
					var options = that[ "_" + instance.widgetName + "Options" ](
						children.length === 1 ? "only" : value
					);
					options.classes = that._resolveClassesValues( options.classes, instance );
					instance.element[ instance.widgetName ]( options );
				} else {
					that._updateCornerClass( children[ value ](), value );
				}
			} );

			// Finally call the refresh method on each of the child widgets.
			this._callChildMethod( "refresh" );
		}
	}
} );
} ) );


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Dialog
//>>group: Widgets
//>>description: Displays customizable dialog windows.
//>>docs: http://api.jqueryui.com/dialog/
//>>demos: http://jqueryui.com/dialog/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/dialog.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(64),
			__webpack_require__(32),
			__webpack_require__(15),
			__webpack_require__(33),
			__webpack_require__(28),
			__webpack_require__(13),
			__webpack_require__(61),
			__webpack_require__(14),
			__webpack_require__(30),
			__webpack_require__(63),
			__webpack_require__(31),
			__webpack_require__(2),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.dialog", {
	version: "1.12.1",
	options: {
		appendTo: "body",
		autoOpen: true,
		buttons: [],
		classes: {
			"ui-dialog": "ui-corner-all",
			"ui-dialog-titlebar": "ui-corner-all"
		},
		closeOnEscape: true,
		closeText: "Close",
		draggable: true,
		hide: null,
		height: "auto",
		maxHeight: null,
		maxWidth: null,
		minHeight: 150,
		minWidth: 150,
		modal: false,
		position: {
			my: "center",
			at: "center",
			of: window,
			collision: "fit",

			// Ensure the titlebar is always visible
			using: function( pos ) {
				var topOffset = $( this ).css( pos ).offset().top;
				if ( topOffset < 0 ) {
					$( this ).css( "top", pos.top - topOffset );
				}
			}
		},
		resizable: true,
		show: null,
		title: null,
		width: 300,

		// Callbacks
		beforeClose: null,
		close: null,
		drag: null,
		dragStart: null,
		dragStop: null,
		focus: null,
		open: null,
		resize: null,
		resizeStart: null,
		resizeStop: null
	},

	sizeRelatedOptions: {
		buttons: true,
		height: true,
		maxHeight: true,
		maxWidth: true,
		minHeight: true,
		minWidth: true,
		width: true
	},

	resizableRelatedOptions: {
		maxHeight: true,
		maxWidth: true,
		minHeight: true,
		minWidth: true
	},

	_create: function() {
		this.originalCss = {
			display: this.element[ 0 ].style.display,
			width: this.element[ 0 ].style.width,
			minHeight: this.element[ 0 ].style.minHeight,
			maxHeight: this.element[ 0 ].style.maxHeight,
			height: this.element[ 0 ].style.height
		};
		this.originalPosition = {
			parent: this.element.parent(),
			index: this.element.parent().children().index( this.element )
		};
		this.originalTitle = this.element.attr( "title" );
		if ( this.options.title == null && this.originalTitle != null ) {
			this.options.title = this.originalTitle;
		}

		// Dialogs can't be disabled
		if ( this.options.disabled ) {
			this.options.disabled = false;
		}

		this._createWrapper();

		this.element
			.show()
			.removeAttr( "title" )
			.appendTo( this.uiDialog );

		this._addClass( "ui-dialog-content", "ui-widget-content" );

		this._createTitlebar();
		this._createButtonPane();

		if ( this.options.draggable && $.fn.draggable ) {
			this._makeDraggable();
		}
		if ( this.options.resizable && $.fn.resizable ) {
			this._makeResizable();
		}

		this._isOpen = false;

		this._trackFocus();
	},

	_init: function() {
		if ( this.options.autoOpen ) {
			this.open();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;
		if ( element && ( element.jquery || element.nodeType ) ) {
			return $( element );
		}
		return this.document.find( element || "body" ).eq( 0 );
	},

	_destroy: function() {
		var next,
			originalPosition = this.originalPosition;

		this._untrackInstance();
		this._destroyOverlay();

		this.element
			.removeUniqueId()
			.css( this.originalCss )

			// Without detaching first, the following becomes really slow
			.detach();

		this.uiDialog.remove();

		if ( this.originalTitle ) {
			this.element.attr( "title", this.originalTitle );
		}

		next = originalPosition.parent.children().eq( originalPosition.index );

		// Don't try to place the dialog next to itself (#8613)
		if ( next.length && next[ 0 ] !== this.element[ 0 ] ) {
			next.before( this.element );
		} else {
			originalPosition.parent.append( this.element );
		}
	},

	widget: function() {
		return this.uiDialog;
	},

	disable: $.noop,
	enable: $.noop,

	close: function( event ) {
		var that = this;

		if ( !this._isOpen || this._trigger( "beforeClose", event ) === false ) {
			return;
		}

		this._isOpen = false;
		this._focusedElement = null;
		this._destroyOverlay();
		this._untrackInstance();

		if ( !this.opener.filter( ":focusable" ).trigger( "focus" ).length ) {

			// Hiding a focused element doesn't trigger blur in WebKit
			// so in case we have nothing to focus on, explicitly blur the active element
			// https://bugs.webkit.org/show_bug.cgi?id=47182
			$.ui.safeBlur( $.ui.safeActiveElement( this.document[ 0 ] ) );
		}

		this._hide( this.uiDialog, this.options.hide, function() {
			that._trigger( "close", event );
		} );
	},

	isOpen: function() {
		return this._isOpen;
	},

	moveToTop: function() {
		this._moveToTop();
	},

	_moveToTop: function( event, silent ) {
		var moved = false,
			zIndices = this.uiDialog.siblings( ".ui-front:visible" ).map( function() {
				return +$( this ).css( "z-index" );
			} ).get(),
			zIndexMax = Math.max.apply( null, zIndices );

		if ( zIndexMax >= +this.uiDialog.css( "z-index" ) ) {
			this.uiDialog.css( "z-index", zIndexMax + 1 );
			moved = true;
		}

		if ( moved && !silent ) {
			this._trigger( "focus", event );
		}
		return moved;
	},

	open: function() {
		var that = this;
		if ( this._isOpen ) {
			if ( this._moveToTop() ) {
				this._focusTabbable();
			}
			return;
		}

		this._isOpen = true;
		this.opener = $( $.ui.safeActiveElement( this.document[ 0 ] ) );

		this._size();
		this._position();
		this._createOverlay();
		this._moveToTop( null, true );

		// Ensure the overlay is moved to the top with the dialog, but only when
		// opening. The overlay shouldn't move after the dialog is open so that
		// modeless dialogs opened after the modal dialog stack properly.
		if ( this.overlay ) {
			this.overlay.css( "z-index", this.uiDialog.css( "z-index" ) - 1 );
		}

		this._show( this.uiDialog, this.options.show, function() {
			that._focusTabbable();
			that._trigger( "focus" );
		} );

		// Track the dialog immediately upon openening in case a focus event
		// somehow occurs outside of the dialog before an element inside the
		// dialog is focused (#10152)
		this._makeFocusTarget();

		this._trigger( "open" );
	},

	_focusTabbable: function() {

		// Set focus to the first match:
		// 1. An element that was focused previously
		// 2. First element inside the dialog matching [autofocus]
		// 3. Tabbable element inside the content element
		// 4. Tabbable element inside the buttonpane
		// 5. The close button
		// 6. The dialog itself
		var hasFocus = this._focusedElement;
		if ( !hasFocus ) {
			hasFocus = this.element.find( "[autofocus]" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.element.find( ":tabbable" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.uiDialogButtonPane.find( ":tabbable" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.uiDialogTitlebarClose.filter( ":tabbable" );
		}
		if ( !hasFocus.length ) {
			hasFocus = this.uiDialog;
		}
		hasFocus.eq( 0 ).trigger( "focus" );
	},

	_keepFocus: function( event ) {
		function checkFocus() {
			var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
				isActive = this.uiDialog[ 0 ] === activeElement ||
					$.contains( this.uiDialog[ 0 ], activeElement );
			if ( !isActive ) {
				this._focusTabbable();
			}
		}
		event.preventDefault();
		checkFocus.call( this );

		// support: IE
		// IE <= 8 doesn't prevent moving focus even with event.preventDefault()
		// so we check again later
		this._delay( checkFocus );
	},

	_createWrapper: function() {
		this.uiDialog = $( "<div>" )
			.hide()
			.attr( {

				// Setting tabIndex makes the div focusable
				tabIndex: -1,
				role: "dialog"
			} )
			.appendTo( this._appendTo() );

		this._addClass( this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front" );
		this._on( this.uiDialog, {
			keydown: function( event ) {
				if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
						event.keyCode === $.ui.keyCode.ESCAPE ) {
					event.preventDefault();
					this.close( event );
					return;
				}

				// Prevent tabbing out of dialogs
				if ( event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented() ) {
					return;
				}
				var tabbables = this.uiDialog.find( ":tabbable" ),
					first = tabbables.filter( ":first" ),
					last = tabbables.filter( ":last" );

				if ( ( event.target === last[ 0 ] || event.target === this.uiDialog[ 0 ] ) &&
						!event.shiftKey ) {
					this._delay( function() {
						first.trigger( "focus" );
					} );
					event.preventDefault();
				} else if ( ( event.target === first[ 0 ] ||
						event.target === this.uiDialog[ 0 ] ) && event.shiftKey ) {
					this._delay( function() {
						last.trigger( "focus" );
					} );
					event.preventDefault();
				}
			},
			mousedown: function( event ) {
				if ( this._moveToTop( event ) ) {
					this._focusTabbable();
				}
			}
		} );

		// We assume that any existing aria-describedby attribute means
		// that the dialog content is marked up properly
		// otherwise we brute force the content as the description
		if ( !this.element.find( "[aria-describedby]" ).length ) {
			this.uiDialog.attr( {
				"aria-describedby": this.element.uniqueId().attr( "id" )
			} );
		}
	},

	_createTitlebar: function() {
		var uiDialogTitle;

		this.uiDialogTitlebar = $( "<div>" );
		this._addClass( this.uiDialogTitlebar,
			"ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix" );
		this._on( this.uiDialogTitlebar, {
			mousedown: function( event ) {

				// Don't prevent click on close button (#8838)
				// Focusing a dialog that is partially scrolled out of view
				// causes the browser to scroll it into view, preventing the click event
				if ( !$( event.target ).closest( ".ui-dialog-titlebar-close" ) ) {

					// Dialog isn't getting focus when dragging (#8063)
					this.uiDialog.trigger( "focus" );
				}
			}
		} );

		// Support: IE
		// Use type="button" to prevent enter keypresses in textboxes from closing the
		// dialog in IE (#9312)
		this.uiDialogTitlebarClose = $( "<button type='button'></button>" )
			.button( {
				label: $( "<a>" ).text( this.options.closeText ).html(),
				icon: "ui-icon-closethick",
				showLabel: false
			} )
			.appendTo( this.uiDialogTitlebar );

		this._addClass( this.uiDialogTitlebarClose, "ui-dialog-titlebar-close" );
		this._on( this.uiDialogTitlebarClose, {
			click: function( event ) {
				event.preventDefault();
				this.close( event );
			}
		} );

		uiDialogTitle = $( "<span>" ).uniqueId().prependTo( this.uiDialogTitlebar );
		this._addClass( uiDialogTitle, "ui-dialog-title" );
		this._title( uiDialogTitle );

		this.uiDialogTitlebar.prependTo( this.uiDialog );

		this.uiDialog.attr( {
			"aria-labelledby": uiDialogTitle.attr( "id" )
		} );
	},

	_title: function( title ) {
		if ( this.options.title ) {
			title.text( this.options.title );
		} else {
			title.html( "&#160;" );
		}
	},

	_createButtonPane: function() {
		this.uiDialogButtonPane = $( "<div>" );
		this._addClass( this.uiDialogButtonPane, "ui-dialog-buttonpane",
			"ui-widget-content ui-helper-clearfix" );

		this.uiButtonSet = $( "<div>" )
			.appendTo( this.uiDialogButtonPane );
		this._addClass( this.uiButtonSet, "ui-dialog-buttonset" );

		this._createButtons();
	},

	_createButtons: function() {
		var that = this,
			buttons = this.options.buttons;

		// If we already have a button pane, remove it
		this.uiDialogButtonPane.remove();
		this.uiButtonSet.empty();

		if ( $.isEmptyObject( buttons ) || ( $.isArray( buttons ) && !buttons.length ) ) {
			this._removeClass( this.uiDialog, "ui-dialog-buttons" );
			return;
		}

		$.each( buttons, function( name, props ) {
			var click, buttonOptions;
			props = $.isFunction( props ) ?
				{ click: props, text: name } :
				props;

			// Default to a non-submitting button
			props = $.extend( { type: "button" }, props );

			// Change the context for the click callback to be the main element
			click = props.click;
			buttonOptions = {
				icon: props.icon,
				iconPosition: props.iconPosition,
				showLabel: props.showLabel,

				// Deprecated options
				icons: props.icons,
				text: props.text
			};

			delete props.click;
			delete props.icon;
			delete props.iconPosition;
			delete props.showLabel;

			// Deprecated options
			delete props.icons;
			if ( typeof props.text === "boolean" ) {
				delete props.text;
			}

			$( "<button></button>", props )
				.button( buttonOptions )
				.appendTo( that.uiButtonSet )
				.on( "click", function() {
					click.apply( that.element[ 0 ], arguments );
				} );
		} );
		this._addClass( this.uiDialog, "ui-dialog-buttons" );
		this.uiDialogButtonPane.appendTo( this.uiDialog );
	},

	_makeDraggable: function() {
		var that = this,
			options = this.options;

		function filteredUi( ui ) {
			return {
				position: ui.position,
				offset: ui.offset
			};
		}

		this.uiDialog.draggable( {
			cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
			handle: ".ui-dialog-titlebar",
			containment: "document",
			start: function( event, ui ) {
				that._addClass( $( this ), "ui-dialog-dragging" );
				that._blockFrames();
				that._trigger( "dragStart", event, filteredUi( ui ) );
			},
			drag: function( event, ui ) {
				that._trigger( "drag", event, filteredUi( ui ) );
			},
			stop: function( event, ui ) {
				var left = ui.offset.left - that.document.scrollLeft(),
					top = ui.offset.top - that.document.scrollTop();

				options.position = {
					my: "left top",
					at: "left" + ( left >= 0 ? "+" : "" ) + left + " " +
						"top" + ( top >= 0 ? "+" : "" ) + top,
					of: that.window
				};
				that._removeClass( $( this ), "ui-dialog-dragging" );
				that._unblockFrames();
				that._trigger( "dragStop", event, filteredUi( ui ) );
			}
		} );
	},

	_makeResizable: function() {
		var that = this,
			options = this.options,
			handles = options.resizable,

			// .ui-resizable has position: relative defined in the stylesheet
			// but dialogs have to use absolute or fixed positioning
			position = this.uiDialog.css( "position" ),
			resizeHandles = typeof handles === "string" ?
				handles :
				"n,e,s,w,se,sw,ne,nw";

		function filteredUi( ui ) {
			return {
				originalPosition: ui.originalPosition,
				originalSize: ui.originalSize,
				position: ui.position,
				size: ui.size
			};
		}

		this.uiDialog.resizable( {
			cancel: ".ui-dialog-content",
			containment: "document",
			alsoResize: this.element,
			maxWidth: options.maxWidth,
			maxHeight: options.maxHeight,
			minWidth: options.minWidth,
			minHeight: this._minHeight(),
			handles: resizeHandles,
			start: function( event, ui ) {
				that._addClass( $( this ), "ui-dialog-resizing" );
				that._blockFrames();
				that._trigger( "resizeStart", event, filteredUi( ui ) );
			},
			resize: function( event, ui ) {
				that._trigger( "resize", event, filteredUi( ui ) );
			},
			stop: function( event, ui ) {
				var offset = that.uiDialog.offset(),
					left = offset.left - that.document.scrollLeft(),
					top = offset.top - that.document.scrollTop();

				options.height = that.uiDialog.height();
				options.width = that.uiDialog.width();
				options.position = {
					my: "left top",
					at: "left" + ( left >= 0 ? "+" : "" ) + left + " " +
						"top" + ( top >= 0 ? "+" : "" ) + top,
					of: that.window
				};
				that._removeClass( $( this ), "ui-dialog-resizing" );
				that._unblockFrames();
				that._trigger( "resizeStop", event, filteredUi( ui ) );
			}
		} )
			.css( "position", position );
	},

	_trackFocus: function() {
		this._on( this.widget(), {
			focusin: function( event ) {
				this._makeFocusTarget();
				this._focusedElement = $( event.target );
			}
		} );
	},

	_makeFocusTarget: function() {
		this._untrackInstance();
		this._trackingInstances().unshift( this );
	},

	_untrackInstance: function() {
		var instances = this._trackingInstances(),
			exists = $.inArray( this, instances );
		if ( exists !== -1 ) {
			instances.splice( exists, 1 );
		}
	},

	_trackingInstances: function() {
		var instances = this.document.data( "ui-dialog-instances" );
		if ( !instances ) {
			instances = [];
			this.document.data( "ui-dialog-instances", instances );
		}
		return instances;
	},

	_minHeight: function() {
		var options = this.options;

		return options.height === "auto" ?
			options.minHeight :
			Math.min( options.minHeight, options.height );
	},

	_position: function() {

		// Need to show the dialog to get the actual offset in the position plugin
		var isVisible = this.uiDialog.is( ":visible" );
		if ( !isVisible ) {
			this.uiDialog.show();
		}
		this.uiDialog.position( this.options.position );
		if ( !isVisible ) {
			this.uiDialog.hide();
		}
	},

	_setOptions: function( options ) {
		var that = this,
			resize = false,
			resizableOptions = {};

		$.each( options, function( key, value ) {
			that._setOption( key, value );

			if ( key in that.sizeRelatedOptions ) {
				resize = true;
			}
			if ( key in that.resizableRelatedOptions ) {
				resizableOptions[ key ] = value;
			}
		} );

		if ( resize ) {
			this._size();
			this._position();
		}
		if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
			this.uiDialog.resizable( "option", resizableOptions );
		}
	},

	_setOption: function( key, value ) {
		var isDraggable, isResizable,
			uiDialog = this.uiDialog;

		if ( key === "disabled" ) {
			return;
		}

		this._super( key, value );

		if ( key === "appendTo" ) {
			this.uiDialog.appendTo( this._appendTo() );
		}

		if ( key === "buttons" ) {
			this._createButtons();
		}

		if ( key === "closeText" ) {
			this.uiDialogTitlebarClose.button( {

				// Ensure that we always pass a string
				label: $( "<a>" ).text( "" + this.options.closeText ).html()
			} );
		}

		if ( key === "draggable" ) {
			isDraggable = uiDialog.is( ":data(ui-draggable)" );
			if ( isDraggable && !value ) {
				uiDialog.draggable( "destroy" );
			}

			if ( !isDraggable && value ) {
				this._makeDraggable();
			}
		}

		if ( key === "position" ) {
			this._position();
		}

		if ( key === "resizable" ) {

			// currently resizable, becoming non-resizable
			isResizable = uiDialog.is( ":data(ui-resizable)" );
			if ( isResizable && !value ) {
				uiDialog.resizable( "destroy" );
			}

			// Currently resizable, changing handles
			if ( isResizable && typeof value === "string" ) {
				uiDialog.resizable( "option", "handles", value );
			}

			// Currently non-resizable, becoming resizable
			if ( !isResizable && value !== false ) {
				this._makeResizable();
			}
		}

		if ( key === "title" ) {
			this._title( this.uiDialogTitlebar.find( ".ui-dialog-title" ) );
		}
	},

	_size: function() {

		// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
		// divs will both have width and height set, so we need to reset them
		var nonContentHeight, minContentHeight, maxContentHeight,
			options = this.options;

		// Reset content sizing
		this.element.show().css( {
			width: "auto",
			minHeight: 0,
			maxHeight: "none",
			height: 0
		} );

		if ( options.minWidth > options.width ) {
			options.width = options.minWidth;
		}

		// Reset wrapper sizing
		// determine the height of all the non-content elements
		nonContentHeight = this.uiDialog.css( {
			height: "auto",
			width: options.width
		} )
			.outerHeight();
		minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
		maxContentHeight = typeof options.maxHeight === "number" ?
			Math.max( 0, options.maxHeight - nonContentHeight ) :
			"none";

		if ( options.height === "auto" ) {
			this.element.css( {
				minHeight: minContentHeight,
				maxHeight: maxContentHeight,
				height: "auto"
			} );
		} else {
			this.element.height( Math.max( 0, options.height - nonContentHeight ) );
		}

		if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
			this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
		}
	},

	_blockFrames: function() {
		this.iframeBlocks = this.document.find( "iframe" ).map( function() {
			var iframe = $( this );

			return $( "<div>" )
				.css( {
					position: "absolute",
					width: iframe.outerWidth(),
					height: iframe.outerHeight()
				} )
				.appendTo( iframe.parent() )
				.offset( iframe.offset() )[ 0 ];
		} );
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_allowInteraction: function( event ) {
		if ( $( event.target ).closest( ".ui-dialog" ).length ) {
			return true;
		}

		// TODO: Remove hack when datepicker implements
		// the .ui-front logic (#8989)
		return !!$( event.target ).closest( ".ui-datepicker" ).length;
	},

	_createOverlay: function() {
		if ( !this.options.modal ) {
			return;
		}

		// We use a delay in case the overlay is created from an
		// event that we're going to be cancelling (#2804)
		var isOpening = true;
		this._delay( function() {
			isOpening = false;
		} );

		if ( !this.document.data( "ui-dialog-overlays" ) ) {

			// Prevent use of anchors and inputs
			// Using _on() for an event handler shared across many instances is
			// safe because the dialogs stack and must be closed in reverse order
			this._on( this.document, {
				focusin: function( event ) {
					if ( isOpening ) {
						return;
					}

					if ( !this._allowInteraction( event ) ) {
						event.preventDefault();
						this._trackingInstances()[ 0 ]._focusTabbable();
					}
				}
			} );
		}

		this.overlay = $( "<div>" )
			.appendTo( this._appendTo() );

		this._addClass( this.overlay, null, "ui-widget-overlay ui-front" );
		this._on( this.overlay, {
			mousedown: "_keepFocus"
		} );
		this.document.data( "ui-dialog-overlays",
			( this.document.data( "ui-dialog-overlays" ) || 0 ) + 1 );
	},

	_destroyOverlay: function() {
		if ( !this.options.modal ) {
			return;
		}

		if ( this.overlay ) {
			var overlays = this.document.data( "ui-dialog-overlays" ) - 1;

			if ( !overlays ) {
				this._off( this.document, "focusin" );
				this.document.removeData( "ui-dialog-overlays" );
			} else {
				this.document.data( "ui-dialog-overlays", overlays );
			}

			this.overlay.remove();
			this.overlay = null;
		}
	}
} );

// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

	// Backcompat for dialogClass option
	$.widget( "ui.dialog", $.ui.dialog, {
		options: {
			dialogClass: ""
		},
		_createWrapper: function() {
			this._super();
			this.uiDialog.addClass( this.options.dialogClass );
		},
		_setOption: function( key, value ) {
			if ( key === "dialogClass" ) {
				this.uiDialog
					.removeClass( this.options.dialogClass )
					.addClass( value );
			}
			this._superApply( arguments );
		}
	} );
}

return $.ui.dialog;

} ) );


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Progressbar
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Displays a status indicator for loading state, standard percentage, and other progress indicators.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/progressbar/
//>>demos: http://jqueryui.com/progressbar/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/progressbar.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(2),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

return $.widget( "ui.progressbar", {
	version: "1.12.1",
	options: {
		classes: {
			"ui-progressbar": "ui-corner-all",
			"ui-progressbar-value": "ui-corner-left",
			"ui-progressbar-complete": "ui-corner-right"
		},
		max: 100,
		value: 0,

		change: null,
		complete: null
	},

	min: 0,

	_create: function() {

		// Constrain initial value
		this.oldValue = this.options.value = this._constrainedValue();

		this.element.attr( {

			// Only set static values; aria-valuenow and aria-valuemax are
			// set inside _refreshValue()
			role: "progressbar",
			"aria-valuemin": this.min
		} );
		this._addClass( "ui-progressbar", "ui-widget ui-widget-content" );

		this.valueDiv = $( "<div>" ).appendTo( this.element );
		this._addClass( this.valueDiv, "ui-progressbar-value", "ui-widget-header" );
		this._refreshValue();
	},

	_destroy: function() {
		this.element.removeAttr( "role aria-valuemin aria-valuemax aria-valuenow" );

		this.valueDiv.remove();
	},

	value: function( newValue ) {
		if ( newValue === undefined ) {
			return this.options.value;
		}

		this.options.value = this._constrainedValue( newValue );
		this._refreshValue();
	},

	_constrainedValue: function( newValue ) {
		if ( newValue === undefined ) {
			newValue = this.options.value;
		}

		this.indeterminate = newValue === false;

		// Sanitize value
		if ( typeof newValue !== "number" ) {
			newValue = 0;
		}

		return this.indeterminate ? false :
			Math.min( this.options.max, Math.max( this.min, newValue ) );
	},

	_setOptions: function( options ) {

		// Ensure "value" option is set after other values (like max)
		var value = options.value;
		delete options.value;

		this._super( options );

		this.options.value = this._constrainedValue( value );
		this._refreshValue();
	},

	_setOption: function( key, value ) {
		if ( key === "max" ) {

			// Don't allow a max less than min
			value = Math.max( this.min, value );
		}
		this._super( key, value );
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this.element.attr( "aria-disabled", value );
		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	_percentage: function() {
		return this.indeterminate ?
			100 :
			100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
	},

	_refreshValue: function() {
		var value = this.options.value,
			percentage = this._percentage();

		this.valueDiv
			.toggle( this.indeterminate || value > this.min )
			.width( percentage.toFixed( 0 ) + "%" );

		this
			._toggleClass( this.valueDiv, "ui-progressbar-complete", null,
				value === this.options.max )
			._toggleClass( "ui-progressbar-indeterminate", null, this.indeterminate );

		if ( this.indeterminate ) {
			this.element.removeAttr( "aria-valuenow" );
			if ( !this.overlayDiv ) {
				this.overlayDiv = $( "<div>" ).appendTo( this.valueDiv );
				this._addClass( this.overlayDiv, "ui-progressbar-overlay" );
			}
		} else {
			this.element.attr( {
				"aria-valuemax": this.options.max,
				"aria-valuenow": value
			} );
			if ( this.overlayDiv ) {
				this.overlayDiv.remove();
				this.overlayDiv = null;
			}
		}

		if ( this.oldValue !== value ) {
			this.oldValue = value;
			this._trigger( "change" );
		}
		if ( value === this.options.max ) {
			this._trigger( "complete" );
		}
	}
} );

} ) );


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(12),
			__webpack_require__(13),
			__webpack_require__(14),
			__webpack_require__(31),
			__webpack_require__(2),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.tabs", {
	version: "1.12.1",
	delay: 300,
	options: {
		active: null,
		classes: {
			"ui-tabs": "ui-corner-all",
			"ui-tabs-nav": "ui-corner-all",
			"ui-tabs-panel": "ui-corner-bottom",
			"ui-tabs-tab": "ui-corner-top"
		},
		collapsible: false,
		event: "click",
		heightStyle: "content",
		hide: null,
		show: null,

		// Callbacks
		activate: null,
		beforeActivate: null,
		beforeLoad: null,
		load: null
	},

	_isLocal: ( function() {
		var rhash = /#.*$/;

		return function( anchor ) {
			var anchorUrl, locationUrl;

			anchorUrl = anchor.href.replace( rhash, "" );
			locationUrl = location.href.replace( rhash, "" );

			// Decoding may throw an error if the URL isn't UTF-8 (#9518)
			try {
				anchorUrl = decodeURIComponent( anchorUrl );
			} catch ( error ) {}
			try {
				locationUrl = decodeURIComponent( locationUrl );
			} catch ( error ) {}

			return anchor.hash.length > 1 && anchorUrl === locationUrl;
		};
	} )(),

	_create: function() {
		var that = this,
			options = this.options;

		this.running = false;

		this._addClass( "ui-tabs", "ui-widget ui-widget-content" );
		this._toggleClass( "ui-tabs-collapsible", null, options.collapsible );

		this._processTabs();
		options.active = this._initialActive();

		// Take disabling tabs via class attribute from HTML
		// into account and update option properly.
		if ( $.isArray( options.disabled ) ) {
			options.disabled = $.unique( options.disabled.concat(
				$.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
					return that.tabs.index( li );
				} )
			) ).sort();
		}

		// Check for length avoids error when initializing empty list
		if ( this.options.active !== false && this.anchors.length ) {
			this.active = this._findActive( options.active );
		} else {
			this.active = $();
		}

		this._refresh();

		if ( this.active.length ) {
			this.load( options.active );
		}
	},

	_initialActive: function() {
		var active = this.options.active,
			collapsible = this.options.collapsible,
			locationHash = location.hash.substring( 1 );

		if ( active === null ) {

			// check the fragment identifier in the URL
			if ( locationHash ) {
				this.tabs.each( function( i, tab ) {
					if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
						active = i;
						return false;
					}
				} );
			}

			// Check for a tab marked active via a class
			if ( active === null ) {
				active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
			}

			// No active tab, set to false
			if ( active === null || active === -1 ) {
				active = this.tabs.length ? 0 : false;
			}
		}

		// Handle numbers: negative, out of range
		if ( active !== false ) {
			active = this.tabs.index( this.tabs.eq( active ) );
			if ( active === -1 ) {
				active = collapsible ? false : 0;
			}
		}

		// Don't allow collapsible: false and active: false
		if ( !collapsible && active === false && this.anchors.length ) {
			active = 0;
		}

		return active;
	},

	_getCreateEventData: function() {
		return {
			tab: this.active,
			panel: !this.active.length ? $() : this._getPanelForTab( this.active )
		};
	},

	_tabKeydown: function( event ) {
		var focusedTab = $( $.ui.safeActiveElement( this.document[ 0 ] ) ).closest( "li" ),
			selectedIndex = this.tabs.index( focusedTab ),
			goingForward = true;

		if ( this._handlePageNav( event ) ) {
			return;
		}

		switch ( event.keyCode ) {
		case $.ui.keyCode.RIGHT:
		case $.ui.keyCode.DOWN:
			selectedIndex++;
			break;
		case $.ui.keyCode.UP:
		case $.ui.keyCode.LEFT:
			goingForward = false;
			selectedIndex--;
			break;
		case $.ui.keyCode.END:
			selectedIndex = this.anchors.length - 1;
			break;
		case $.ui.keyCode.HOME:
			selectedIndex = 0;
			break;
		case $.ui.keyCode.SPACE:

			// Activate only, no collapsing
			event.preventDefault();
			clearTimeout( this.activating );
			this._activate( selectedIndex );
			return;
		case $.ui.keyCode.ENTER:

			// Toggle (cancel delayed activation, allow collapsing)
			event.preventDefault();
			clearTimeout( this.activating );

			// Determine if we should collapse or activate
			this._activate( selectedIndex === this.options.active ? false : selectedIndex );
			return;
		default:
			return;
		}

		// Focus the appropriate tab, based on which key was pressed
		event.preventDefault();
		clearTimeout( this.activating );
		selectedIndex = this._focusNextTab( selectedIndex, goingForward );

		// Navigating with control/command key will prevent automatic activation
		if ( !event.ctrlKey && !event.metaKey ) {

			// Update aria-selected immediately so that AT think the tab is already selected.
			// Otherwise AT may confuse the user by stating that they need to activate the tab,
			// but the tab will already be activated by the time the announcement finishes.
			focusedTab.attr( "aria-selected", "false" );
			this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

			this.activating = this._delay( function() {
				this.option( "active", selectedIndex );
			}, this.delay );
		}
	},

	_panelKeydown: function( event ) {
		if ( this._handlePageNav( event ) ) {
			return;
		}

		// Ctrl+up moves focus to the current tab
		if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
			event.preventDefault();
			this.active.trigger( "focus" );
		}
	},

	// Alt+page up/down moves focus to the previous/next tab (and activates)
	_handlePageNav: function( event ) {
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
			this._activate( this._focusNextTab( this.options.active - 1, false ) );
			return true;
		}
		if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
			this._activate( this._focusNextTab( this.options.active + 1, true ) );
			return true;
		}
	},

	_findNextTab: function( index, goingForward ) {
		var lastTabIndex = this.tabs.length - 1;

		function constrain() {
			if ( index > lastTabIndex ) {
				index = 0;
			}
			if ( index < 0 ) {
				index = lastTabIndex;
			}
			return index;
		}

		while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
			index = goingForward ? index + 1 : index - 1;
		}

		return index;
	},

	_focusNextTab: function( index, goingForward ) {
		index = this._findNextTab( index, goingForward );
		this.tabs.eq( index ).trigger( "focus" );
		return index;
	},

	_setOption: function( key, value ) {
		if ( key === "active" ) {

			// _activate() will handle invalid values and update this.options
			this._activate( value );
			return;
		}

		this._super( key, value );

		if ( key === "collapsible" ) {
			this._toggleClass( "ui-tabs-collapsible", null, value );

			// Setting collapsible: false while collapsed; open first panel
			if ( !value && this.options.active === false ) {
				this._activate( 0 );
			}
		}

		if ( key === "event" ) {
			this._setupEvents( value );
		}

		if ( key === "heightStyle" ) {
			this._setupHeightStyle( value );
		}
	},

	_sanitizeSelector: function( hash ) {
		return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
	},

	refresh: function() {
		var options = this.options,
			lis = this.tablist.children( ":has(a[href])" );

		// Get disabled tabs from class attribute from HTML
		// this will get converted to a boolean if needed in _refresh()
		options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
			return lis.index( tab );
		} );

		this._processTabs();

		// Was collapsed or no tabs
		if ( options.active === false || !this.anchors.length ) {
			options.active = false;
			this.active = $();

		// was active, but active tab is gone
		} else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {

			// all remaining tabs are disabled
			if ( this.tabs.length === options.disabled.length ) {
				options.active = false;
				this.active = $();

			// activate previous tab
			} else {
				this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
			}

		// was active, active tab still exists
		} else {

			// make sure active index is correct
			options.active = this.tabs.index( this.active );
		}

		this._refresh();
	},

	_refresh: function() {
		this._setOptionDisabled( this.options.disabled );
		this._setupEvents( this.options.event );
		this._setupHeightStyle( this.options.heightStyle );

		this.tabs.not( this.active ).attr( {
			"aria-selected": "false",
			"aria-expanded": "false",
			tabIndex: -1
		} );
		this.panels.not( this._getPanelForTab( this.active ) )
			.hide()
			.attr( {
				"aria-hidden": "true"
			} );

		// Make sure one tab is in the tab order
		if ( !this.active.length ) {
			this.tabs.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			this.active
				.attr( {
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				} );
			this._addClass( this.active, "ui-tabs-active", "ui-state-active" );
			this._getPanelForTab( this.active )
				.show()
				.attr( {
					"aria-hidden": "false"
				} );
		}
	},

	_processTabs: function() {
		var that = this,
			prevTabs = this.tabs,
			prevAnchors = this.anchors,
			prevPanels = this.panels;

		this.tablist = this._getList().attr( "role", "tablist" );
		this._addClass( this.tablist, "ui-tabs-nav",
			"ui-helper-reset ui-helper-clearfix ui-widget-header" );

		// Prevent users from focusing disabled tabs via click
		this.tablist
			.on( "mousedown" + this.eventNamespace, "> li", function( event ) {
				if ( $( this ).is( ".ui-state-disabled" ) ) {
					event.preventDefault();
				}
			} )

			// Support: IE <9
			// Preventing the default action in mousedown doesn't prevent IE
			// from focusing the element, so if the anchor gets focused, blur.
			// We don't have to worry about focusing the previously focused
			// element since clicking on a non-focusable element should focus
			// the body anyway.
			.on( "focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
				if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
					this.blur();
				}
			} );

		this.tabs = this.tablist.find( "> li:has(a[href])" )
			.attr( {
				role: "tab",
				tabIndex: -1
			} );
		this._addClass( this.tabs, "ui-tabs-tab", "ui-state-default" );

		this.anchors = this.tabs.map( function() {
			return $( "a", this )[ 0 ];
		} )
			.attr( {
				role: "presentation",
				tabIndex: -1
			} );
		this._addClass( this.anchors, "ui-tabs-anchor" );

		this.panels = $();

		this.anchors.each( function( i, anchor ) {
			var selector, panel, panelId,
				anchorId = $( anchor ).uniqueId().attr( "id" ),
				tab = $( anchor ).closest( "li" ),
				originalAriaControls = tab.attr( "aria-controls" );

			// Inline tab
			if ( that._isLocal( anchor ) ) {
				selector = anchor.hash;
				panelId = selector.substring( 1 );
				panel = that.element.find( that._sanitizeSelector( selector ) );

			// remote tab
			} else {

				// If the tab doesn't already have aria-controls,
				// generate an id by using a throw-away element
				panelId = tab.attr( "aria-controls" ) || $( {} ).uniqueId()[ 0 ].id;
				selector = "#" + panelId;
				panel = that.element.find( selector );
				if ( !panel.length ) {
					panel = that._createPanel( panelId );
					panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
				}
				panel.attr( "aria-live", "polite" );
			}

			if ( panel.length ) {
				that.panels = that.panels.add( panel );
			}
			if ( originalAriaControls ) {
				tab.data( "ui-tabs-aria-controls", originalAriaControls );
			}
			tab.attr( {
				"aria-controls": panelId,
				"aria-labelledby": anchorId
			} );
			panel.attr( "aria-labelledby", anchorId );
		} );

		this.panels.attr( "role", "tabpanel" );
		this._addClass( this.panels, "ui-tabs-panel", "ui-widget-content" );

		// Avoid memory leaks (#10056)
		if ( prevTabs ) {
			this._off( prevTabs.not( this.tabs ) );
			this._off( prevAnchors.not( this.anchors ) );
			this._off( prevPanels.not( this.panels ) );
		}
	},

	// Allow overriding how to find the list for rare usage scenarios (#7715)
	_getList: function() {
		return this.tablist || this.element.find( "ol, ul" ).eq( 0 );
	},

	_createPanel: function( id ) {
		return $( "<div>" )
			.attr( "id", id )
			.data( "ui-tabs-destroy", true );
	},

	_setOptionDisabled: function( disabled ) {
		var currentItem, li, i;

		if ( $.isArray( disabled ) ) {
			if ( !disabled.length ) {
				disabled = false;
			} else if ( disabled.length === this.anchors.length ) {
				disabled = true;
			}
		}

		// Disable tabs
		for ( i = 0; ( li = this.tabs[ i ] ); i++ ) {
			currentItem = $( li );
			if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
				currentItem.attr( "aria-disabled", "true" );
				this._addClass( currentItem, null, "ui-state-disabled" );
			} else {
				currentItem.removeAttr( "aria-disabled" );
				this._removeClass( currentItem, null, "ui-state-disabled" );
			}
		}

		this.options.disabled = disabled;

		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null,
			disabled === true );
	},

	_setupEvents: function( event ) {
		var events = {};
		if ( event ) {
			$.each( event.split( " " ), function( index, eventName ) {
				events[ eventName ] = "_eventHandler";
			} );
		}

		this._off( this.anchors.add( this.tabs ).add( this.panels ) );

		// Always prevent the default action, even when disabled
		this._on( true, this.anchors, {
			click: function( event ) {
				event.preventDefault();
			}
		} );
		this._on( this.anchors, events );
		this._on( this.tabs, { keydown: "_tabKeydown" } );
		this._on( this.panels, { keydown: "_panelKeydown" } );

		this._focusable( this.tabs );
		this._hoverable( this.tabs );
	},

	_setupHeightStyle: function( heightStyle ) {
		var maxHeight,
			parent = this.element.parent();

		if ( heightStyle === "fill" ) {
			maxHeight = parent.height();
			maxHeight -= this.element.outerHeight() - this.element.height();

			this.element.siblings( ":visible" ).each( function() {
				var elem = $( this ),
					position = elem.css( "position" );

				if ( position === "absolute" || position === "fixed" ) {
					return;
				}
				maxHeight -= elem.outerHeight( true );
			} );

			this.element.children().not( this.panels ).each( function() {
				maxHeight -= $( this ).outerHeight( true );
			} );

			this.panels.each( function() {
				$( this ).height( Math.max( 0, maxHeight -
					$( this ).innerHeight() + $( this ).height() ) );
			} )
				.css( "overflow", "auto" );
		} else if ( heightStyle === "auto" ) {
			maxHeight = 0;
			this.panels.each( function() {
				maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
			} ).height( maxHeight );
		}
	},

	_eventHandler: function( event ) {
		var options = this.options,
			active = this.active,
			anchor = $( event.currentTarget ),
			tab = anchor.closest( "li" ),
			clickedIsActive = tab[ 0 ] === active[ 0 ],
			collapsing = clickedIsActive && options.collapsible,
			toShow = collapsing ? $() : this._getPanelForTab( tab ),
			toHide = !active.length ? $() : this._getPanelForTab( active ),
			eventData = {
				oldTab: active,
				oldPanel: toHide,
				newTab: collapsing ? $() : tab,
				newPanel: toShow
			};

		event.preventDefault();

		if ( tab.hasClass( "ui-state-disabled" ) ||

				// tab is already loading
				tab.hasClass( "ui-tabs-loading" ) ||

				// can't switch durning an animation
				this.running ||

				// click on active header, but not collapsible
				( clickedIsActive && !options.collapsible ) ||

				// allow canceling activation
				( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
			return;
		}

		options.active = collapsing ? false : this.tabs.index( tab );

		this.active = clickedIsActive ? $() : tab;
		if ( this.xhr ) {
			this.xhr.abort();
		}

		if ( !toHide.length && !toShow.length ) {
			$.error( "jQuery UI Tabs: Mismatching fragment identifier." );
		}

		if ( toShow.length ) {
			this.load( this.tabs.index( tab ), event );
		}
		this._toggle( event, eventData );
	},

	// Handles show/hide for selecting tabs
	_toggle: function( event, eventData ) {
		var that = this,
			toShow = eventData.newPanel,
			toHide = eventData.oldPanel;

		this.running = true;

		function complete() {
			that.running = false;
			that._trigger( "activate", event, eventData );
		}

		function show() {
			that._addClass( eventData.newTab.closest( "li" ), "ui-tabs-active", "ui-state-active" );

			if ( toShow.length && that.options.show ) {
				that._show( toShow, that.options.show, complete );
			} else {
				toShow.show();
				complete();
			}
		}

		// Start out by hiding, then showing, then completing
		if ( toHide.length && this.options.hide ) {
			this._hide( toHide, this.options.hide, function() {
				that._removeClass( eventData.oldTab.closest( "li" ),
					"ui-tabs-active", "ui-state-active" );
				show();
			} );
		} else {
			this._removeClass( eventData.oldTab.closest( "li" ),
				"ui-tabs-active", "ui-state-active" );
			toHide.hide();
			show();
		}

		toHide.attr( "aria-hidden", "true" );
		eventData.oldTab.attr( {
			"aria-selected": "false",
			"aria-expanded": "false"
		} );

		// If we're switching tabs, remove the old tab from the tab order.
		// If we're opening from collapsed state, remove the previous tab from the tab order.
		// If we're collapsing, then keep the collapsing tab in the tab order.
		if ( toShow.length && toHide.length ) {
			eventData.oldTab.attr( "tabIndex", -1 );
		} else if ( toShow.length ) {
			this.tabs.filter( function() {
				return $( this ).attr( "tabIndex" ) === 0;
			} )
				.attr( "tabIndex", -1 );
		}

		toShow.attr( "aria-hidden", "false" );
		eventData.newTab.attr( {
			"aria-selected": "true",
			"aria-expanded": "true",
			tabIndex: 0
		} );
	},

	_activate: function( index ) {
		var anchor,
			active = this._findActive( index );

		// Trying to activate the already active panel
		if ( active[ 0 ] === this.active[ 0 ] ) {
			return;
		}

		// Trying to collapse, simulate a click on the current active header
		if ( !active.length ) {
			active = this.active;
		}

		anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
		this._eventHandler( {
			target: anchor,
			currentTarget: anchor,
			preventDefault: $.noop
		} );
	},

	_findActive: function( index ) {
		return index === false ? $() : this.tabs.eq( index );
	},

	_getIndex: function( index ) {

		// meta-function to give users option to provide a href string instead of a numerical index.
		if ( typeof index === "string" ) {
			index = this.anchors.index( this.anchors.filter( "[href$='" +
				$.ui.escapeSelector( index ) + "']" ) );
		}

		return index;
	},

	_destroy: function() {
		if ( this.xhr ) {
			this.xhr.abort();
		}

		this.tablist
			.removeAttr( "role" )
			.off( this.eventNamespace );

		this.anchors
			.removeAttr( "role tabIndex" )
			.removeUniqueId();

		this.tabs.add( this.panels ).each( function() {
			if ( $.data( this, "ui-tabs-destroy" ) ) {
				$( this ).remove();
			} else {
				$( this ).removeAttr( "role tabIndex " +
					"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded" );
			}
		} );

		this.tabs.each( function() {
			var li = $( this ),
				prev = li.data( "ui-tabs-aria-controls" );
			if ( prev ) {
				li
					.attr( "aria-controls", prev )
					.removeData( "ui-tabs-aria-controls" );
			} else {
				li.removeAttr( "aria-controls" );
			}
		} );

		this.panels.show();

		if ( this.options.heightStyle !== "content" ) {
			this.panels.css( "height", "" );
		}
	},

	enable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === false ) {
			return;
		}

		if ( index === undefined ) {
			disabled = false;
		} else {
			index = this._getIndex( index );
			if ( $.isArray( disabled ) ) {
				disabled = $.map( disabled, function( num ) {
					return num !== index ? num : null;
				} );
			} else {
				disabled = $.map( this.tabs, function( li, num ) {
					return num !== index ? num : null;
				} );
			}
		}
		this._setOptionDisabled( disabled );
	},

	disable: function( index ) {
		var disabled = this.options.disabled;
		if ( disabled === true ) {
			return;
		}

		if ( index === undefined ) {
			disabled = true;
		} else {
			index = this._getIndex( index );
			if ( $.inArray( index, disabled ) !== -1 ) {
				return;
			}
			if ( $.isArray( disabled ) ) {
				disabled = $.merge( [ index ], disabled ).sort();
			} else {
				disabled = [ index ];
			}
		}
		this._setOptionDisabled( disabled );
	},

	load: function( index, event ) {
		index = this._getIndex( index );
		var that = this,
			tab = this.tabs.eq( index ),
			anchor = tab.find( ".ui-tabs-anchor" ),
			panel = this._getPanelForTab( tab ),
			eventData = {
				tab: tab,
				panel: panel
			},
			complete = function( jqXHR, status ) {
				if ( status === "abort" ) {
					that.panels.stop( false, true );
				}

				that._removeClass( tab, "ui-tabs-loading" );
				panel.removeAttr( "aria-busy" );

				if ( jqXHR === that.xhr ) {
					delete that.xhr;
				}
			};

		// Not remote
		if ( this._isLocal( anchor[ 0 ] ) ) {
			return;
		}

		this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

		// Support: jQuery <1.8
		// jQuery <1.8 returns false if the request is canceled in beforeSend,
		// but as of 1.8, $.ajax() always returns a jqXHR object.
		if ( this.xhr && this.xhr.statusText !== "canceled" ) {
			this._addClass( tab, "ui-tabs-loading" );
			panel.attr( "aria-busy", "true" );

			this.xhr
				.done( function( response, status, jqXHR ) {

					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout( function() {
						panel.html( response );
						that._trigger( "load", event, eventData );

						complete( jqXHR, status );
					}, 1 );
				} )
				.fail( function( jqXHR, status ) {

					// support: jQuery <1.8
					// http://bugs.jquery.com/ticket/11778
					setTimeout( function() {
						complete( jqXHR, status );
					}, 1 );
				} );
		}
	},

	_ajaxSettings: function( anchor, event, eventData ) {
		var that = this;
		return {

			// Support: IE <11 only
			// Strip any hash that exists to prevent errors with the Ajax request
			url: anchor.attr( "href" ).replace( /#.*$/, "" ),
			beforeSend: function( jqXHR, settings ) {
				return that._trigger( "beforeLoad", event,
					$.extend( { jqXHR: jqXHR, ajaxSettings: settings }, eventData ) );
			}
		};
	},

	_getPanelForTab: function( tab ) {
		var id = $( tab ).attr( "aria-controls" );
		return this.element.find( this._sanitizeSelector( "#" + id ) );
	}
} );

// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

	// Backcompat for ui-tab class (now ui-tabs-tab)
	$.widget( "ui.tabs", $.ui.tabs, {
		_processTabs: function() {
			this._superApply( arguments );
			this._addClass( this.tabs, "ui-tab" );
		}
	} );
}

return $.ui.tabs;

} ) );


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function (root, factory) {
    // Support CommonJS
    if (true) {
        var plugin = factory();

        // Support NodeJS & Component, which allow module.exports to be a function
        if (typeof module === 'object' && module && module.exports) {
            exports = module.exports = plugin;
        }

        // Support CommonJS 1.1.1 spec
        exports.syncmeta = plugin;

        // Support AMD
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);

        // Support vanilla script loading
    } else {
        root.syncmeta = factory();
    }
}(this, function () {
    'use strict';
    var generateRandomId = function (length) {
        var chars = "1234567890abcdef";
        var numOfChars = chars.length;
        var i, rand;
        var res = "";

        if (typeof length === 'undefined') length = 24;

        for (i = 0; i < length; i++) {
            rand = Math.floor(Math.random() * numOfChars);
            res += chars[rand];
        }
        return res;
    };

    function httpGetAsync(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }
    /**
     * Listen to node manipulations. Private helper function
     * @private
     * @param {array} keys - the operations to listen to. All possible options are  ['NodeMoveOperation', 'NodeResizeOperation', 'NodeMoveZOperation']
     * @param {function} callback - the callback if one of the operations defined in keys were issued
     */
    var onNode = function (key, callback) {
        var newObersever = function (event) {
            if (key.indexOf(event.name) != -1) {
                callback(event.value);
            }
        };

        var nodeIds = ySyncMetaInstance.share.nodes.keys();
        for (var i = 0; i < nodeIds.length; i++) {
            var ymap = ySyncMetaInstance.share.nodes.get(nodeIds[i]);
            ymap.observe(newObersever);
        }
        nodeObservers[key].push(newObersever);
    };
    var nodeObservers = {
        NodeMoveOperation: [],
        NodeResizeOperation: [],
        NodeMoveZOperation: []
    };
    var attrObservers = {
        nodes: {
            attributeYTextObserver: undefined,
            attributePrimitiveObserver: undefined
        },
        edges: {
            attributeYTextObserver: undefined,
            attributePrimitiveObserver: undefined
        }
    }
    var ySyncMetaInstance = null;

    var jabberId = null;

    /**
     * Listen to changes on Attributes on nodes or edges
     * @param {string} type - 'nodes' or 'edges'
     * @param {onAttributeChangeCallback} callback - calls back if a attribute is changed
     * @param {string} entityId - id of the node to listen to. If null we listen to all of the specified type
     * @private
     */
    var onAttributeChange = function (type, callback) {
        if (!ySyncMetaInstance)
            return new Error('No Connection to Yjs space');


        attrObservers[type].attributePrimitiveObserver = function (entityId) {
            return function (event) {
                if (event.name.search(/\w*\[(\w|\s)*\]/g) != -1) {
                    callback(event.value.value, entityId, event.value.entityId, event.value.userId);
                }
            }
        }
        attrObservers[type].attributeYTextObserver = function (entityId, attrId) {
            return function (event) {
                callback(event.object.toString(), entityId, attrId);
            }
        };

        var listenToAttributes = function (ymap, entityId) {
            var listentoAttributesHelper = function (attrId, ytext, entityId) {
                var newObserver = attrObservers[type].attributeYTextObserver(entityId, attrId);
                ytext.observe(newObserver);
            };

            var newObserver = attrObservers[type].attributePrimitiveObserver(entityId);
            ymap.observe(newObserver);

            var keys = ymap.keys();
            for (var i = 0; i < keys.length; i++) {
                if (keys[i].search(/\w*\[(\w|\s)*\]/g) != -1) {
                    var ytext = ymap.get(keys[i]);
                    //is it relly a y-text object?
                    if (ytext instanceof Y.Text.typeDefinition.class)
                        listentoAttributesHelper(keys[i], ytext, entityId);
                }
            }
        };

        //listen to everything OR return
        var nodeIds = ySyncMetaInstance.share[type].keys();
        for (var i = 0; i < nodeIds.length; i++) {
            var p = ySyncMetaInstance.share[type].get(nodeIds[i]);
            if (p) {
                listenToAttributes(p, nodeIds[i]);
            }
        }
    };

    /**
     * creates all ytexts for a node/edge created via the API
     * @param {object} metamodel the vls
     * @param {string} entityId the id of the node/edge
     * @param {string} entityType where is the concrete type to find which u want to create in nodes or edges
     * @param {string} type the concrete node/edge type to create
     * @param {Y.Map} ymap the ymap of the node/edge
     */
    var createYTextsForEntityType = function (metamodel, entityId, entityType, type, ymap) {
        var types = metamodel[entityType];
        for (var key in types) {
            if (types.hasOwnProperty(key) && types[key].label === type) {
                var attrs = types[key].attributes;
                for (var attrKey in attrs) {
                    if (attrs.hasOwnProperty(attrKey) && attrs[attrKey].value === 'string') {
                        ymap.set(entityId + '[' + attrs[attrKey].key + ']', Y.Text);
                    }
                }
            }
        }
    }


    return {
        /**
         * If are already connected to a syncmeta yjs space then use this funnction to init the plugin
         * Otherwise connect to yjs with the connect function
         * @param {object} yInstance - the y instance 
         * @param {String} [userId] the id of the user. Otherwise a HTTP GET-request will be issued to get the data
         * @param {Function} [callback]
         * @return {undefined}
         */
        init: function (yInstance, userId, callback) {
            ySyncMetaInstance = yInstance;

            var attrObserverInit = function (type, ymap, id) {
                if (attrObservers[type].attributePrimitiveObserver && attrObservers[type].attributeYTextObserver) {
                    ymap.observe(function (e) {
                        if (e.type === 'add' && e.name.search(/\w*\[(\w|\s)*\]/g) != -1) {
                            var attrId = e.name;
                            if (e.value instanceof Y.Text.typeDefinition.class) {
                                var ytext = e.value;
                                var newObserver = attrObservers[type].attributeYTextObserver(id, attrId);
                                ytext.observe(newObserver);
                            } else {
                                var newObersever = attrObservers[type].attributePrimitiveObserver(id);
                                e.object.observe(newObersever);
                            }
                        }
                    });
                }
            }

            ySyncMetaInstance.share.nodes.observe(function (event) {
                var nodeId = event.name;
                if (event.type === 'add') {
                    var ymap = event.value;
                    for (var key in nodeObservers) {
                        if (nodeObservers.hasOwnProperty(key)) {
                            for (var i = 0; i < nodeObservers[key].length; i++) {
                                ymap.observe(nodeObservers[key][i]);
                            }
                        }
                    }
                    attrObserverInit('nodes', ymap, nodeId);
                }
            });

            ySyncMetaInstance.share.edges.observe(function (event) {
                var edgeId = event.name;
                if (event.type === 'add') {
                    var ymap = event.value;
                    attrObserverInit('edges', ymap, edgeId);
                }
            });
            if (userId)
                jabberId = userId;
            else {
                var url = localStorage.userinfo_endpoint + '?access_token=' + localStorage.access_token;
                httpGetAsync(url, function (data) {
                    var user = JSON.parse(data);
                    jabberId = JSON.parse(data).sub;
                    if (callback) callback(user);
                });
            }

        },
        /**
         * Listen to NodeAddOperations on the SyncMeta canvas widget
         * @param {onNodeAddCallback} callback - the callback if a node was created on syncmeta canvas widget
         */
        onNodeAdd: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');

            ySyncMetaInstance.share.canvas.observe(function (event) {
                if (event.name == 'NodeAddOperation')
                    callback(event.value);
            });
        },
        /**
         * @param{function} callback - callback if a users joins the space
         */
        onUserJoin: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');
            ySyncMetaInstance.share.userList.observe(function (event) {
                callback(event.value);
            })
        },
        /**
         * Listen to EdgeAddOperation on the SyncMeta canvas widget
         * @param {onEdgeAddCallback} callback - the callback if a edge was created on syncmeta canvas widget
         */
        onEdgeAdd: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');

            ySyncMetaInstance.share.canvas.observe(function (event) {
                if (event.name == 'EdgeAddOperation')
                    callback(event.value);
            });
        },
        /**
         * Listen to both EdgeAddOperation and NodeAddOperation
         * @param callback - the callback if edge or node was created on syncmeta canvas widget
         * @see onNodeAdd
         * @see onEdgeAdd
         */
        onEntityAdd: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');

            ySyncMetaInstance.share.canvas.observe(function (event) {
                if (event.name == 'NodeAddOperation')
                    callback(event.value);
                else if (event.name == 'EdgeAddOperation')
                    callback(event.value, event.name);
            });

        },
        /**
         * Listen to selections of entities on the Syncmeta canvas widget
         * @param {onEntitySelectCallback} callback - the callback if a entity was selected
         */
        onEntitySelect: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');

            ySyncMetaInstance.share.select.observe(function (event) {
                if (event.value)
                    callback(event.value);
            });
        },
        /**
         * Listen to selections of nodes on the Syncmeta canvas widget
         * @param {onEntitySelectCallback} callback - the callback if a node was selected
         */
        onNodeSelect: function (callback) {

            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');
            ySyncMetaInstance.share.select.observe(function (event) {
                if (event.value && ySyncMetaInstance.share.nodes.keys().indexOf(event.value) != -1)
                    callback(event.value);
            });
        },
        /**
         * Listen to selections of edges on the Syncmeta canvas widget
         * @param {onEntitySelectCallback} callback - the callback if a edge was selected
         */
        onEdgeSelect: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');
            ySyncMetaInstance.share.select.observe(function (event) {
                if (event.value && ySyncMetaInstance.share.edges.keys().indexOf(event.value) != -1)
                    callback(event.value);
            });
        },
        /**
         * Listen to NodeDeleteOperation
         * @param {onEntityDeleteCallback} callback - the callback if a node was deleted
         */
        onNodeDelete: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');
            ySyncMetaInstance.share.nodes.observe(function (event) {
                if (event.type === 'delete')
                    callback(event.name);
            });

        },
        /**
         * Listen to EdgeDeleteOperations
         * @param {onEntityDeleteCallback} callback - the callback if a edge was deleted
         */
        onEdgeDelete: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');
            ySyncMetaInstance.share.edges.observe(function (event) {
                if (event.type === 'delete')
                    callback({ id: event.name, source: event.oldValue.get('source'), target: event.oldValue.get('target'), type: event.oldValue.get('type') });
            });
        },
        /**
         * Listen to NodeMoveOperations
         * Equivalent to onNode(['NodeMoveOperation'], callback, id);
         * @param {onNodeMoveCallback} callback - the callback if a node is moved on the canvas
         * @param {string} id - id of the node to listen to. If null we listen to all
         * @see onNode
         */
        onNodeMove: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');
            onNode('NodeMoveOperation', callback);
        },
        /**
         * Listen to NodeResizeOperations
         * Equivalent to onNode(['NodeResizeOperation'], callback, id);
         * @param {onNodeResizeCallback} callback - the callback if a node is resized on the canvas
         * @param {string} id - id of the node to listen to. If null we listen to all
         * @see OnNode
         */
        onNodeResize: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');
            onNode('NodeResizeOperation', callback);
        },
        /**
         * Listen to NodeMoveZOperations
         * Equivalent to onNode(['NodeMoveZOperation'], callback, id);
         * @param {onNodeMoveZCallback} callback - the callback if a node is moved to the back- or foreground on the canvas
         * @param {string} id - id of the node to listen to. If null we listen to all
         * @see OnNode
         */
        onNodeMoveZ: function (callback) {
            if (!ySyncMetaInstance)
                return new Error('No Connection to Yjs space');
            onNode('NodeMoveZOperation', callback);
        },
        /**
         * Listen to changes on Attributes on nodes
         * Equivalent to onAttributeChange('nodes', callback, entityId);
         * @param {onAttributeChangeCallback} callback - calls back if a attribute is changed
         * @param {string} entityId - id of the node to listen to. If null we listen to all of the specified type
         * @see OnAttributeChange
         */
        onNodeAttributeChange: function (callback) {
            onAttributeChange('nodes', callback);
        },
        /**
         * Listen to changes on Attributes on edges
         * Equivalent to onAttributeChange('edges', callback, entityId);
         * @param {onAttributeChangeCallback} callback - calls back if a attribute is changed
         * @param {string} entityId - id of the edge to listen to. If null we listen to all of the specified type
         * @see OnAttributeChange
         */
        onEdgeAttributeChange: function (callback) {
            onAttributeChange('edges', callback);
        },
        /**
         * Set a value for a attribute of a entity
         * @param {stirng} entity
         * @param {string} attrName
         * @param {string|bool|integer} value
         */
        setAttributeValue: function (entityId, attrName, value) {
            var idx = ySyncMetaInstance.share.nodes.keys().indexOf(entityId);

            var attrId;
            //Does attrName has the form of the id
            if (attrName.search(/\w*\[(\w|\s)*\]/g) != -1)
                //Yes, the attribute name is the attribute id
                attrId = attrName;
            else
                //No, build the attribute id
                attrId = entityId + '[' + attrName.toLowerCase() + ']';

            var findAttr = function (ymap, attrId, value) {
                var keys = ymap.keys().indexOf(attrId);
                if (keys != -1) {
                    var attr = ymap.get(attrId);

                    if (attr instanceof Y.Text.typeDefinition.class) {
                        var ytext = attr;

                        var l = ytext.toString().length;
                        if (l > 0) {
                            ytext.delete(0, l);
                        }
                        ytext.insert(0, value);
                        //lets wait a bit before trigger the save
                        // so that the canvas and attribute widget can process the value change at their callbacks
                        setTimeout(function () {
                            if (jabberId)
                                ySyncMetaInstance.share.canvas.set('triggerSave', jabberId);
                        }, 500);
                    } else
                        ymap.set(attrId, {
                            'entityId': attrId,
                            'value': value,
                            'type': 'update',
                            'position': 0
                        });
                } else
                    ymap.set(attrId, {
                        'entityId': attrId,
                        'value': value,
                        'type': 'update',
                        'position': 0
                    });
            }

            if (idx != -1) {
                var ymap = ySyncMetaInstance.share.nodes.get(entityId);
                findAttr(ymap, attrId, value);
            } else {
                idx = ySyncMetaInstance.share.edges.keys().indexOf(entityId);
                if (idx != -1) {
                    var ymap = ySyncMetaInstance.share.edges.get(entityId);
                    findAttr(ymap, attrId, value);
                } else {
                    return;
                }
            }
        },
        /**
         * Create a node 
         * @param {String} type the type of the node
         * @param {integer} left the x-coordinate
         * @param {integer} top the y-coordinate
         * @param {integer} width the width of the node 
         * @param {integer} height the height of the node
         * @param {integer} zIndex the z-index of the node
         * @param {Object} json some json date
         * @param {string} id the id of the node
         * @returns returns the id of the created node as string
         */
        createNode: function (type, left, top, width, height, zIndex, json, id) {
            var metamodel = ySyncMetaInstance.share.data.get('metamodel');

            if (!id)
                id = generateRandomId();

            var _ymap = ySyncMetaInstance.share.nodes.set(id, Y.Map);
            if (metamodel) {
                createYTextsForEntityType(metamodel, id, "nodes", type, _ymap);
            } else {
                _ymap.set(id + '[label]', Y.Text);
                if (type === 'Node Shape') {
                    _ymap.set(id + '[color]', Y.Text);
                    _ymap.set(id + '[customAnchors]', Y.Text);
                    _ymap.set(id + '[customShape]', Y.Text);
                } else if (type === 'Edge Shape') {
                    _ymap.set(id + '[color]', Y.Text);
                    _ymap.set(id + '[overlay]', Y.Text);
                }
            }
            _ymap.set('left', left);
            _ymap.set('top', top);
            _ymap.set('width', width);
            _ymap.set('height', height);
            _ymap.set('zIndex', zIndex);
            _ymap.set('type', type);
            _ymap.set('id', id);
            if (json) _ymap.set('json', json);
            _ymap.set('jabberId', jabberId);

            ySyncMetaInstance.share.canvas.set('NodeAddOperation', {
                id: id,
                type: type,
                left: left,
                top: top,
                width: width,
                height: height,
                zIndex: zIndex,
                json: json,
                viewId: undefined,
                oType: undefined,
                jabberId: jabberId
            });
            setTimeout(function () {
                if (jabberId)
                    ySyncMetaInstance.share.canvas.set('triggerSave', jabberId);
            }, 500);
            return id;
        },
        /**
         * delete a node
         * @param {string} id of the node to delete
         */
        deleteNode: function (entityId) {
            ySyncMetaInstance.share.nodes.delete(entityId);
        },
        /**
         * create a edge
         * @param {string} type type of the edge
         * @param {source} source the id of the source node
         * @param {target} target the id of the target node
         * @param {Object} json some additional data
         */
        createEdge: function (type, source, target, json) {
            var id = generateRandomId();
            setTimeout(function () {
                var metamodel = ySyncMetaInstance.share.data.get('metamodel');

                var _ymap = ySyncMetaInstance.share.edges.set(id, Y.Map);
                if (metamodel) {
                    createYTextsForEntityType(metamodel, id, "edges", type, _ymap);
                } else {
                    _ymap.set(id + '[label]', Y.Text);
                }
                _ymap.set('id', id);
                _ymap.set('type', type);
                _ymap.set('source', source);
                _ymap.set('target', target);
                _ymap.set('jabberId', jabberId);
                //if source and target nodes are created previously just wait here for a 

                ySyncMetaInstance.share.canvas.set('EdgeAddOperation', {
                    id: id,
                    type: type,
                    source: source,
                    target: target,
                    json: json,
                    viewId: undefined,
                    oType: undefined,
                    jabberId: jabberId
                });

                setTimeout(function () {
                    if (jabberId)
                        ySyncMetaInstance.share.canvas.set('triggerSave', jabberId);
                }, 100);
            }, 200);
            return id;
        },
        /**
         * Delete a edge
         * @param {string} the id of the edge to delete
         */
        deleteEdge: function (entityId) {
            ySyncMetaInstance.share.edges.delete(entityId);
        },
        /**
         * Applies the drage layout 
         */
        applyLayout: function () {
            ySyncMetaInstance.share.canvas.set('applyLayout', true);
        }

        /**
         * @callback onNodeAddCallback
         * @param {object} event - the NodeAddOperation event
         * @param {string} event.id - the id of the created node
         * @param {string} event.type - the type of the node
         * @param {string} event.oType - the original type (only set in views, then type is the view type)
         * @param {integer} event.top - y position in the canvas
         * @param {integer} event.left - x position in the canvas
         * @param {integer} event.width - width of the node
         * @param {integer} event.height - height of the node
         * @param {integer} event.zIndex - depth value of the node
         * @param {object} event.json - the json representation. Only used for import of (meta-)models. Should be always null
         * @param {string} event.jabberId - jabberId of the user who created the node
         *
         */

        /**
         * @callback onEdgeAddCallback
         * @param {object} event - the EdgeAddOperation event
         * @param {string} event.id - the id of the created edge
         * @param {string} event.jabberId - jabberId of the user who created the edge
         * @param {string} event.type - the type of the edge
         * @param {string} event.oType - the original type (only set in views, then type is the view type)
         * @param {object} event.json - the json representation. Only used for import of (meta-)models. Should be always null
         * @param {string} event.source - the source of the edge
         * @param {string} event.target - the target of the edge
         */

        /**
         * @callback onEntitySelectCallback
         * @param {string} id - the id of the selected entity (node/edge)
         */

        /**
         * @callback onEntityDeleteCallback
         * @param {string} id - the id of the deleted entity (node/edge)
         */

        /**
         * @callback onNodeMoveCallback
         * @param {object} event - the node move operation
         * @param {string} event.id - the id of node
         * @param {string} event.jabberId - the jabberId of the user
         * @param {integer} event.offsetX
         * @param {integer} event.offsetY
         */

        /**
         *@callback onNodeResizeCallback
         * @param {object} event - the node resize operation
         * @param {string} event.id - the id of node
         * @param {string} event.jabberId - the jabberId of the user
         * @param {integer} event.offsetX
         * @param {integer} event.offsetY
         * */

        /**
         * @callback onNodeMoveZCallback
         * @param {object} event - the NodeMoveZOperation
         * @param {string} event.id - the id of the node
         * @param {integer} event.offsetZ - the offset of the z coordinate
         */

        /**
         * @callback onAttributeChangeCallback
         * @param {string} value - the new value of the attribute
         * @param {string} entityId - the id of the entity (node/edge) the attribute belongs to
         * @param {string} attrId - the id of the attribute
         */
    }
}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlays_UserOverlay__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__ = __webpack_require__(3);
/*global y*/
/**
 * @module
 */



/** 
 * The function realizes the awareness features for the Wireframe editor.
 * Enables cell hightlighting and overlays for user informations
 * @param {Wireframe} wireframe the wireframe
 * @return {undefined}
 * @requires UserOverlay
 * @method
 */
function Awareness(wireframe) {
    var highlightMap = {};

    wireframe.getSelectionModel().addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].CHANGE, function (sender, evt) {
        var unselectedCells = evt.getProperty('added');
        var unhighlight = [];
        for (var i = 0; i < unselectedCells.length; i++) {
            unhighlight.push(unselectedCells[i].getId());
        }
        var highlight = [];
        for (var i = 0; i < sender.cells.length; i++) {
            highlight.push(sender.cells[i].getId());
        }
        y.share.awareness.set(y.db.userId, {
            highlight: highlight,
            unhighlight: unhighlight
        });

    });

    y.share.awareness.observe(function (event) {
        if (event.name != y.db.userId) {
            var userInfo = y.share.yfUsers.get(event.name);

            //unhighlight cells
            var unhighlightCells = event.value.unhighlight;
            for (var i = 0; i < unhighlightCells.length; i++) {
                var highlightId = unhighlightCells[i] + '_' + event.name;
                var highlight = highlightMap[highlightId];
                if (highlight) {
                    highlight.hide();
                    delete highlightMap[highlightId];
                    var cell = wireframe.getModel().getCell(unhighlightCells[i]);
                    if (cell) {
                        for (var j = 0; cell.overlays && j < cell.overlays.length; j++) {
                            if (cell.overlays[j] instanceof __WEBPACK_IMPORTED_MODULE_1__overlays_UserOverlay__["a" /* default */] && cell.overlays[j].getUserId() === event.name) {
                                wireframe.removeCellOverlay(cell, cell.overlays[j]);
                                j--;
                            }
                        }
                        var k = 0;
                        var state = wireframe.view.getState(cell);
                        if (state.overlays) {
                            for (var o in state.overlays.map) {
                                var tag = state.overlays.map[o].overlay;
                                if (tag instanceof __WEBPACK_IMPORTED_MODULE_1__overlays_UserOverlay__["a" /* default */]) {
                                    tag.offset.x = -k * __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].TAG.SIZE;
                                    k++;
                                }
                            }
                            wireframe.cellRenderer.redraw(state);
                        }
                    }
                }
            }


                //highlight cells
                var highlightCells = event.value.highlight;
                for (var i = 0; i < highlightCells.length; i++) {
                    var highlight = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["D" /* mxCellHighlight */](wireframe, userInfo ? userInfo.color : '#672d2d', 2);
                    highlightMap[highlightCells[i] + '_' + event.name] = highlight;
                    var cell = wireframe.getModel().getCell(highlightCells[i]);
                    if (cell) {
                        highlight.highlight(wireframe.view.getState(cell));
                        var overlay;
                        var offset = null;
                        var userOverlayCount = 0;
                        if (cell.overlays && cell.overlays.length > 0) {
                            for (var j = 0; j < cell.overlays.length; j++) {
                                if (cell.overlays[i] instanceof __WEBPACK_IMPORTED_MODULE_1__overlays_UserOverlay__["a" /* default */])
                                    userOverlayCount++;
                            }
                            offset = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxPoint */](-__WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].TAG.SIZE * userOverlayCount, 0)
                        }
                        if (userInfo)
                            overlay = new __WEBPACK_IMPORTED_MODULE_1__overlays_UserOverlay__["a" /* default */](event.name, userInfo.name, userInfo.image, offset);
                        else
                            overlay = new __WEBPACK_IMPORTED_MODULE_1__overlays_UserOverlay__["a" /* default */](event.name, 'Unknown User', null, offset);
                        wireframe.addCellOverlay(cell, overlay);
                    }
                }
            }
        });
}
/* harmony default export */ __webpack_exports__["a"] = (Awareness);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PropertyEditor_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__ = __webpack_require__(3);
/*global y*/



/**
 * @classdesc The class builds the context menu for the wireframing editor
 * @constructor
 * @param {mxEditor} editor the editor
 * @requires PropertyEditor
 */
function ContextMenu(editor) {
    editor.graph.popupMenuHandler.factoryMethod = function (menu, cell, evt) {
        return createPopupMenu(editor.graph, menu, cell, evt);
    };

    function createPopupMenu(graph, menu, cell) {

        if (cell == null) {
            menu.addItem('Edit Attributes', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.FLASH, function (event) {
                new __WEBPACK_IMPORTED_MODULE_0__PropertyEditor_js__["a" /* default */](null, editor.graph, event.x, event.y);
            });
            menu.addSeparator();
            var sub = menu.addItem('Create..', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.ADD);
            menu.createSubmenu(sub);
            var UIComponents = editor.getUIComponents();
            for (var name in UIComponents) {
                menu.addItem(name, null, function (event) {
                    var cell = new UIComponents[event.target.innerHTML]();
                    cell.dropElementCallback(editor.graph, event);
                }, sub);
            }
            menu.addSeparator();

        } else {
            menu.addItem('Edit Attributes', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.FLASH, function (event) {
                new __WEBPACK_IMPORTED_MODULE_0__PropertyEditor_js__["a" /* default */](cell, editor.graph, event.x, event.y);
            });
            menu.addSeparator();
        }
        menu.addItem('Undo', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.UNDO, function () {
            editor.execute(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNDO);
        });
        menu.addItem('Redo', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.REDO, function () {
            editor.execute(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.REDO);
        });
        if (cell == null) {
        } else {
            menu.addSeparator();
            //TODO copy & paste for context menu needs rework
            /*menu.addItem('Copy', CONST.IMAGES.COPY, function () {
                editor.execute("copy");
            });
            menu.addItem('Paste', CONST.IMAGES.PASTE, function () {
                editor.execute("shared_paste");
            });*/
            menu.addItem('Group', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.GROUP, function () {
                editor.execute(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GROUP);
            });
            menu.addItem('Ungroup', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.UNGROUP, function () {
                editor.execute(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNGROUP);
            });
            menu.addSeparator();
            menu.addItem('Delete Cell', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.DELETE, function () {
                editor.execute(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.DELETE);
            });

        }
        menu.addSeparator();
        var sub = menu.addItem('Apply Layout...', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.LAYOUT);
        menu.createSubmenu(sub);
        menu.addItem('to parent only', null, function(){
            y.share.action.set(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.APPLY_LAYOUT, {userId: y.db.userId, cellId : cell ? cell.getId(): null, recursive: false});
        }, sub);
        menu.addItem('recursively to all', null, function(){
            y.share.action.set(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.APPLY_LAYOUT, {userId: y.db.userId, cellId : cell ? cell.getId(): null, recursive : true});            
        }, sub)        
    };
};
/* harmony default export */ __webpack_exports__["a"] = (ContextMenu);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KeyHandler_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContextMenu_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shapes_DefaultShape_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shapes_VideoShape_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shapes_AudioShape_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shapes_ButtonShape_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shapes_TextNodeShape_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shapes_LinkShape_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shapes_ParagraphShape_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shapes_TextAreaShape_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shapes_TextBoxShape_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shapes_CheckboxShape_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shapes_RadioButtonShape_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shapes_ImageShape_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__elements_UIControl_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__elements_Link_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__elements_TextBox_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__elements_Paragraph_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__elements_TextArea_js__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__elements_Button_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__elements_TextNode_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__elements_CheckBox_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__elements_RadioButton_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__elements_Image_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__elements_VideoPlayer_js__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__elements_AudioPlayer_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__elements_DivContainer_js__ = __webpack_require__(85);
/*global y, vls*/































Editor.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["r" /* mxEditor */]();
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
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["r" /* mxEditor */].call(this);
    this.graph = wireframe;
    this.installUndoHandler(wireframe);
    this.setGraphContainer(wireframe.container);
    this.setToolbarContainer(palette.container);
    this.keyHandler = new __WEBPACK_IMPORTED_MODULE_1__KeyHandler_js__["a" /* default */](this);
    //Editor.prototype.disableContextMenu = false;
    new __WEBPACK_IMPORTED_MODULE_2__ContextMenu_js__["a" /* default */](this);

    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes[__WEBPACK_IMPORTED_MODULE_4__shapes_VideoShape_js__["a" /* default */].prototype.cst.SHAPE] = __WEBPACK_IMPORTED_MODULE_4__shapes_VideoShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes[__WEBPACK_IMPORTED_MODULE_5__shapes_AudioShape_js__["a" /* default */].prototype.cst.SHAPE] = __WEBPACK_IMPORTED_MODULE_5__shapes_AudioShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["button"] = __WEBPACK_IMPORTED_MODULE_6__shapes_ButtonShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["link"] = __WEBPACK_IMPORTED_MODULE_8__shapes_LinkShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["textbox"] = __WEBPACK_IMPORTED_MODULE_11__shapes_TextBoxShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["paragraph"] = __WEBPACK_IMPORTED_MODULE_9__shapes_ParagraphShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["textarea"] = __WEBPACK_IMPORTED_MODULE_10__shapes_TextAreaShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["checkbox"] = __WEBPACK_IMPORTED_MODULE_12__shapes_CheckboxShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["radio"] = __WEBPACK_IMPORTED_MODULE_13__shapes_RadioButtonShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["image"] = __WEBPACK_IMPORTED_MODULE_14__shapes_ImageShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["textnode"] = __WEBPACK_IMPORTED_MODULE_7__shapes_TextNodeShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxCellRenderer */].prototype.defaultShapes["default"] = __WEBPACK_IMPORTED_MODULE_3__shapes_DefaultShape_js__["a" /* default */];

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
     * @param {*} state the state
     * @return {String} the label
     */
    that.graph.getLabel = function (state) {
        var label = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.getLabel.apply(this, arguments);
        if (state instanceof __WEBPACK_IMPORTED_MODULE_27__elements_DivContainer_js__["a" /* default */])
            return state.value.getAttribute('label');
        else return label;
    }
    /**
     * Overrides createGroupCell from the superclass mxGraph for the Wireframe-class
     */
    /*eslint-disable no-unused-vars*/
    that.graph.createGroupCell = function (cells) {
        var group = new __WEBPACK_IMPORTED_MODULE_27__elements_DivContainer_js__["a" /* default */]();
        return group;
    };
    //-------------------------------------------------------------------

     /**
     * A map that maps the HTML tag name to the name of the of the class 
     * representing the html element in the wireframing editor.
     * @member {Object}
     */
    var htmlNodeMap = {};
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_27__elements_DivContainer_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_27__elements_DivContainer_js__["a" /* default */].NAME;
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_18__elements_Paragraph_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_18__elements_Paragraph_js__["a" /* default */].NAME;
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_20__elements_Button_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_20__elements_Button_js__["a" /* default */].NAME;
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_19__elements_TextArea_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_19__elements_TextArea_js__["a" /* default */].NAME;
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_16__elements_Link_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_16__elements_Link_js__["a" /* default */].NAME;
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_17__elements_TextBox_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_17__elements_TextBox_js__["a" /* default */].NAME;
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_24__elements_Image_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_24__elements_Image_js__["a" /* default */].NAME;
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_26__elements_AudioPlayer_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_26__elements_AudioPlayer_js__["a" /* default */].NAME;
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_25__elements_VideoPlayer_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_25__elements_VideoPlayer_js__["a" /* default */].NAME;
    htmlNodeMap[__WEBPACK_IMPORTED_MODULE_21__elements_TextNode_js__["a" /* default */].HTML_NODE_NAME] = __WEBPACK_IMPORTED_MODULE_21__elements_TextNode_js__["a" /* default */].NAME;

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
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_15__elements_UIControl_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_15__elements_UIControl_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_27__elements_DivContainer_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_27__elements_DivContainer_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_20__elements_Button_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_20__elements_Button_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_19__elements_TextArea_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_19__elements_TextArea_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_18__elements_Paragraph_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_18__elements_Paragraph_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_17__elements_TextBox_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_17__elements_TextBox_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_16__elements_Link_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_16__elements_Link_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_21__elements_TextNode_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_21__elements_TextNode_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_24__elements_Image_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_24__elements_Image_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_26__elements_AudioPlayer_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_26__elements_AudioPlayer_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_25__elements_VideoPlayer_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_25__elements_VideoPlayer_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_22__elements_CheckBox_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_22__elements_CheckBox_js__["a" /* default */];
    yfUIComponents[__WEBPACK_IMPORTED_MODULE_23__elements_RadioButton_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_23__elements_RadioButton_js__["a" /* default */];

    /**
     * The map contains as key as the name of the UIObjects and as value the style as String
     * The shape has to be registered before to the mxCellRenderer-object of this class
     * @member {Object}
     */
    var yfShapeMapping = {};
    yfShapeMapping[__WEBPACK_IMPORTED_MODULE_18__elements_Paragraph_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + '=paragraph;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=black;';
    yfShapeMapping[__WEBPACK_IMPORTED_MODULE_19__elements_TextArea_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + '=textarea;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=black;';
    yfShapeMapping[__WEBPACK_IMPORTED_MODULE_21__elements_TextNode_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + '=textnode;';
    yfShapeMapping[__WEBPACK_IMPORTED_MODULE_20__elements_Button_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + '=button;';
    yfShapeMapping[__WEBPACK_IMPORTED_MODULE_16__elements_Link_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + '=link;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=none;";
    yfShapeMapping[__WEBPACK_IMPORTED_MODULE_17__elements_TextBox_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + '=textbox;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=black;';
    yfShapeMapping[__WEBPACK_IMPORTED_MODULE_22__elements_CheckBox_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + '=checkbox;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=black;';
    yfShapeMapping[__WEBPACK_IMPORTED_MODULE_23__elements_RadioButton_js__["a" /* default */].NAME] = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + '=radio;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=black;';

    /**
     * Adds a UI component to the palette and makes it drag&drop-able to the wireframe canvas
     * @param {String} componentName the NAME of the UIControl-class
     * @return {undefined}
     */
    var addUIComponent = function (componentName) {
        var cell, type, shapeCell;
        var tmp = componentName;
        componentName = vlsComponents[componentName];
        if(componentName === __WEBPACK_IMPORTED_MODULE_15__elements_UIControl_js__["a" /* default */].NAME)
            cell = new yfUIComponents[componentName](null, null, tmp);
        else
            cell = new yfUIComponents[componentName]();
        if (yfShapeMapping.hasOwnProperty(componentName))
            shapeCell = new __WEBPACK_IMPORTED_MODULE_15__elements_UIControl_js__["a" /* default */](cell.geometry, yfShapeMapping[componentName]);
        else
            shapeCell = cell;
        type = palette.createItem(shapeCell, componentName === __WEBPACK_IMPORTED_MODULE_15__elements_UIControl_js__["a" /* default */].NAME ? tmp : componentName, false);
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
/* harmony default export */ __webpack_exports__["a"] = (Editor);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__ = __webpack_require__(3);


KeyHandler.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["x" /* mxDefaultKeyHandler */]();
KeyHandler.prototype.constructor = KeyHandler;

/**
 * Defines the keyboard shortcuts and their actions
 * 
 * For key codes see:
 * https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
 * @classdesc The KeyHandler for the Wireframing Editor
 * @constructor
 * @param {mxEditor} editor the wireframeing editor 
 * @extends mxDefaultKeyHandler
 */
function KeyHandler(editor){
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["x" /* mxDefaultKeyHandler */].call(this, editor);

    //CTRL+delete-key
    this.bindAction(46, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.DELETE, 17);
    
    //CTRL+G for shared grouping
    this.bindAction(71, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GROUP, 17);

    //CTRL+H for shared ungrouping
    this.bindAction(72, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNGROUP, 17);

    //CTRL+Z for shared Undo
    this.bindAction(90, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNDO, 17);

    //CTRL+Y for shared Redo
    this.bindAction(89, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.REDO, 17);

    //CTRL+C for copy
    this.bindAction(67, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.COPY, 17);

    //CTRL+V for shared paste
    this.bindAction(86, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.PASTE, 17);

    //CTRL+U
    this.bindAction(85, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHOW_USER_LIST, 17);

    //CTRL+P
    this.bindAction(80, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHOW_CONSOLE, 17);

    //CTRL+I
    this.bindAction(73, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.HIERACHY_TREE, 17);
}
/* harmony default export */ __webpack_exports__["a"] = (KeyHandler);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);

Palette.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["y" /* mxToolbar */]();
Palette.prototype.constructor = Palette;

/**
 * The palette consists of all ui elments supported by the editor
 * @classdesc The palette of the wireframing editor
 * @constructor
 * @param {DOM} container the container
 * @extends mxToolbar
 */
function Palette(container) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["y" /* mxToolbar */].call(this, container);

    this.enabled = false;

    var createTemporaryGraph = function (stylesheet) {
        var graph = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */](document.createElement('div'), null, null, stylesheet);
        graph.resetViewOnRootChange = false;
        graph.setConnectable(false);
        graph.gridEnabled = false;
        graph.autoScroll = false;
        graph.setTooltips(false);
        graph.setEnabled(false);

        // Container must be in the DOM for correct HTML rendering
        graph.container.style.visibility = 'hidden';
        graph.container.style.position = 'absolute';
        graph.container.style.overflow = 'hidden';
        graph.container.style.height = '1px';
        graph.container.style.width = '1px';

        return graph;
    };

    //TODO
    var graph = new createTemporaryGraph();
    var thumbBorder = 1;
    var thumbWidth = 50;
    var thumbHeight = 50;
    var thumbPadding = 1;

    /**
     * Get a node entry to the given parent
     * @param {mxCell} cell the cell
     * @param {Boolean} showLabel  label visibility of the graph. default is false
     * @return {mxCell} the new cell 
     */
    var getNodeEntry = function (cell, showLabel) {
        graph.labelsVisible = showLabel || false;
        graph.view.scaleAndTranslate(1, 0, 0);

        graph.addCell(cell);
        var bounds = graph.getGraphBounds();
        var s = Math.floor(Math.min((thumbWidth - 2 * thumbBorder) / bounds.width, (thumbHeight - 2 * thumbBorder) / bounds.height) * 100) / 100;
        graph.view.scaleAndTranslate(s, Math.floor((thumbWidth - bounds.width * s) / 2 / s - bounds.x), Math.floor((thumbHeight - bounds.height * s) / 2 / s - bounds.y));
        var node = null;

        // For supporting HTML labels in IE9 standards mode the container is cloned instead
        if (graph.dialect == __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].DIALECT_SVG) {
            node = graph.view.getCanvas().ownerSVGElement.cloneNode(true);
        }
        // LATER: Check if deep clone can be used for quirks if container in DOM
        else {
            node = graph.container.cloneNode(false);
            node.innerHTML = graph.container.innerHTML;
        }

        graph.getModel().clear();

        node.style.position = 'relative';
        node.style.overflow = 'hidden';
        node.style.cursor = 'move';
        node.style.left = thumbBorder + 'px';
        node.style.top = thumbBorder + 'px';
        node.style.width = thumbWidth + 'px';
        node.style.height = thumbHeight + 'px';
        node.style.visibility = '';
        node.style.minWidth = '';
        node.style.minHeight = '';
        return node;
    }

    /**
     * @param {mxCell} cell the cell
     * @param {String} name the name of the item in the palette
     * @param {Boolean} showLabel true if the label should be shown else false. Default is false
     * @return {DOM} the item
     */
    this.createItem = function (cell, name, showLabel) {
        var elt = document.createElement('a');
        elt.setAttribute('href', 'javascript:void(0);');
        elt.className = 'item tooltip';
        elt.style.overflow = 'hidden';
        var border = 2 * thumbBorder;
        elt.style.width = (thumbWidth + border) + 'px';
        elt.style.height = (thumbHeight + border) + 'px';
        elt.style.padding = thumbPadding + 'px';

        // Blocks default click action
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].addListener(elt, 'click', function (evt) {
            __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].consume(evt);
        });
        elt.appendChild(getNodeEntry(cell, showLabel));
        var tooltip = createTooltip(name);

        //var bounds = new mxRectangle(0, 0, width, height);
        elt.appendChild(tooltip);
        container.appendChild(elt);
        return elt;
    }

    var createTooltip = function (text) {
        var tooltip = document.createElement('span');
        tooltip.className = 'tooltiptext';
        tooltip.innerHTML = text;
        return tooltip;
    }
    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Palette);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_jstree_dist_jstree_min_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_jstree_dist_jstree_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_jstree_dist_jstree_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tags_TagRegistry_js__ = __webpack_require__(10);
/*global y*/









function TagEditor(cell, $editor, graph) {   
    //jstree types
    var types = {};
    var registry = __WEBPACK_IMPORTED_MODULE_6__tags_TagRegistry_js__["a" /* default */].getDescription();
    for(var key in registry)
        types[key] = { icon : registry[key].image };
    
    var tagClasses = __WEBPACK_IMPORTED_MODULE_6__tags_TagRegistry_js__["a" /* default */].getClasses();

    //var supportedTags = CONST.TAG.MAPPING[cell.constructor.name];
    var supportedTags= __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.keys(tagClasses);
    if (supportedTags && supportedTags.length > 0) {
        //Initialize the tag editor here
        var htmlTagTab = '<li><a href="#tagsTab">Interactivity</a></li>';
        var htmlTagTabContent = '<div id="tagsTab"></div>';
        var htmlTagTree = '<div id="' + cell.getId() + '_tagTree"></div>';
        $editor.find('ul').append(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.parseHTML(htmlTagTab));
        $editor.append(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.parseHTML(htmlTagTabContent));

        var $tagEditor = $editor.find('#tagsTab');
        var tagForm = new __WEBPACK_IMPORTED_MODULE_4__misc_mxExport_js__["l" /* mxForm */]('tagForm');
        var combo = tagForm.addCombo('Tag');
        
        for (var i = 0; i < supportedTags.length; i++) {
            tagForm.addOption(combo, supportedTags[i], supportedTags[i]);
        }
        //Create Tag Button
        var $createBtn = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<button>').text('Create');
        $createBtn.click(function () {
            var val = $tagEditor.find('td:contains("Tag") + td select option:selected').text();
            var tag;
            if(tagClasses.hasOwnProperty(val))
                tag = new tagClasses[val](cell, new __WEBPACK_IMPORTED_MODULE_4__misc_mxExport_js__["e" /* mxPoint */](-__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].TAG.SIZE * cell.getTagCounter(), 0), val);
            if (tag.tagObj.getAttribute('isUnique')) {
                if (cell.containsTagType(tag))//Tag type is only allowed once, so dont add it
                    return;
            }
            graph.addCellOverlay(cell, tag);

        });
        //Delete Tag Button
        var $deleteBtn = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<button>').addClass('tagDel').css('display', 'none').text('Delete');
        $deleteBtn.click(function () {
            var ref = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#' + cell.getId() + '_tagTree').jstree(true);
            var sel = ref.get_selected();
            var selTagTypes = [];
            for(var i=0;i<sel.length;i++){
                var tag = cell.getTagById(sel[i]);
                selTagTypes.push(tag.constructor.name);
            }
            if (sel.length > 0) {
                y.share.action.set(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.DELETE_TAG, {userId: y.db.userId,  cellId: cell.getId(), selected: sel, types : selTagTypes });
            }
        });

        var $tree = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.parseHTML(htmlTagTree)).jstree({
            core: {
                check_callback: true,
                themes: {
                    stripes: true,
                    ellipsis: true
                }
            },
            types: types,
            plugins: ["dnd", "types", "wholerow"]
        });

        //initialize existing tags
        if (cell.hasOwnProperty('overlays') && cell.overlays) {
            var overlays = cell.overlays;
            for (var i = 0; i < overlays.length; i++) {
                var tag = overlays[i];
                if (tag.hasOwnProperty('tagObj') && types.hasOwnProperty(tag.tagObj.getAttribute('tagType'))) {
                    $tree.jstree(true).create_node(tag.tagObj.getAttribute('parent'), {
                        id: tag.tagObj.getAttribute('id'),
                        type: tag.tagObj.getAttribute('tagType'),
                        text: tag.tagObj.getAttribute('tagType'),
                        state: {
                            selected: false
                        }
                    });

                }
            }
        }

        $tree.on('select_node.jstree', function (node, sel) {
            $editor.find('.tagAttribute').parent().remove();
            //if ($tagAttrs.length == 0) {
            var overlays = cell.overlays;
            var tagId = sel.selected[0];
            for (var i = 0; i < overlays.length; i++) {
                if ((types.hasOwnProperty(overlays[i].constructor.name) || types.hasOwnProperty(overlays[i].tooltip))
                        && overlays[i].tagObj.getAttribute('id') === tagId) {
                    var form = __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__["a" /* default */].createFormFromCellAttributes('tagAttribute', overlays[i].tagObj, overlays[i]);
                    __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__["a" /* default */].bindSharedAttributes(overlays[i], form);
                    var $tagAttrs = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div>').attr('id', cell.getId() + '_tagAttribute').addClass('tagAttribute').append(form.body);
                    $tagEditor.find('tr').eq(2).append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<td>').append($tagAttrs));
                    break;
                }
            }
            $editor.find('.tagDel').show();
            //}
        });

        $tree.on('move_node.jstree', function (node, event) {
            y.share.action.set(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.MOVE_TAG, {
                userId: y.db.userId,
                node: event.node.id,
                parent: event.parent,
                position: event.position,
                cellId: cell.getId()
            });
        });

        $tree.on('delete_node.jstree', function () {
            $editor.find('.tagDel').hide();
        });

        $tagEditor.append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<table>')
            .append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<tr>')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<td>').append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(tagForm.body)))
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<td>').append($createBtn).append($deleteBtn)))
            .append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<tr>').append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('<td>').append($tree))));
    }
}

/* harmony default export */ __webpack_exports__["a"] = (TagEditor);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapper_CAE_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HierachyTree_js__ = __webpack_require__(18);
/*global y*/








Toolbox.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["o" /* mxDefaultToolbar */]();
Toolbox.prototype.constructor = Toolbox;

/**
 * Defines the (shared) actions for copy & paste, undo & redo and grouping & ungrouping 
 * @classdesc The toolbar of the editor
 * @constructor
 * @param {DOM} container the div container in the DOM 
 * @param {mxEditor} editor the editor instance of the wireframing application
 * @extends mxDefaultToolbar
 * @requires HierachyTree
 */
function Toolbox(container, editor) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["o" /* mxDefaultToolbar */].call(this, container, editor);

    this._editor = editor;
    var that = this;

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.PASTE, function (editor, cell) {
        var codec = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxCodec */]();
        var result = codec.encode(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxClipboard */].getCells());
        var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getXml(result);
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.PASTE, {
            userId: y.db.userId,
            xml: xml
        });
    });

    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.DELETE, function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REMOVE, {
            userId: y.db.userId,
            cells: __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getIdsOfSelectedCells(that._editor.graph)
        });
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHOW_USER_LIST, function (editor, cell) {
        var $window = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#userList').parents('.mxWindow').parents('.mxWindow');
        if ($window.is(':visible'))
            $window.hide();
        else $window.show();
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNDO, function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].UNDO, y.db.userId);
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.REDO, function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REDO, y.db.userId);
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GROUP, function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].GROUP_CELLS, {
            userId: y.db.userId,
            ids: __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getIdsOfSelectedCells(that._editor.graph)
        });
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNGROUP, function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].UNGROUP_CELLS, {
            userId: y.db.userId,
            ids: __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getIdsOfSelectedCells(that._editor.graph)
        });
    });

    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.EXPORT, function () {
        var link = document.createElement('a');
        link.download = "wireframe.xml";
        link.href = 'data:,' + encodeURI(y.share.data.get('wireframe'));
        link.click();
    });

    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHOW_CONSOLE, function () {
        if (__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["q" /* mxLog */].isVisible())
            __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["q" /* mxLog */].hide();
        else
            __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["q" /* mxLog */].show();
    });

    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.IMPORT, function (editor) {
        var input = document.createElement('input');
        input.type = 'file';

        //$(input).change(function(){});
        //input.addEventListener('change', function(){});
        input.onchange = function () {
            var fileReader, files, file;
            fileReader = new FileReader();
            fileReader.onload = function (e) {
                var data = e.target.result;
                try {
                    var json = JSON.parse(data);
                    //transform model to wireframe
                    var wirefarme = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__mapper_CAE_js__["a" /* ModelToWireframe */])(json, editor);
                    //apply layout
                    y.share.data.set('wireframe', wirefarme);
                    y.share.action.set('reload', true);
                } catch (e) {
                    console.error(e);
                    try {
                        __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.parseXML(data);
                        y.share.data.set('wireframe', data);
                        y.share.action.set('reload', true);
                    } catch (e) {
                        console.error('no valid wireframe model or front end component model');
                    }
                }
                //TODO improve import

            };
            files = this.files;
            if (!files || files.length === 0) return;
            file = files[0];
            fileReader.readAsText(file);
        };
        input.click();
    });

    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SAVE, function () {
        __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].Save(editor.graph);
    })

    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SYNC, function (editor) {
        var frontendModel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__mapper_CAE_js__["b" /* WireframeToModel */])(editor.graph.model, y.share.data.get('metamodel'));
        y.share.data.set('model', frontendModel);
        y.share.canvas.set('ReloadWidgetOperation', 'import');
    });

    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.HIERACHY_TREE, function (editor) {
        if (__WEBPACK_IMPORTED_MODULE_5__HierachyTree_js__["a" /* default */].isVisible())
            __WEBPACK_IMPORTED_MODULE_5__HierachyTree_js__["a" /* default */].hide();
        else
            __WEBPACK_IMPORTED_MODULE_5__HierachyTree_js__["a" /* default */].show();
    })

    y.share.action.observe(function (event) {
        switch (event.name) {
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].UNDO:
                //that._editor.execute("undo");
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.undo();
                    that._editor.graph.setSelectionCells(cells);
                } else
                    that._editor.undo();
                __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].Save(that._editor.graph);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REDO:
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.redo();
                    that._editor.graph.setSelectionCells(cells);
                } else
                    that._editor.redo();
                __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].Save(that._editor.graph);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].REMOVE:
                that._editor.graph.setSelectionCells(__WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getCellsFromIdList(that._editor.graph, event.value.cells));
                that._editor.execute("delete");
                that._editor.graph.updateBounds();
                __WEBPACK_IMPORTED_MODULE_5__HierachyTree_js__["a" /* default */].remove(event.value.cells);
                if (y.db.userId === event.value.userId)
                    __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].Save(that._editor.graph);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].GROUP_CELLS:
                var cells = __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getCellsFromIdList(that._editor.graph, event.value.ids);
                var group = that._editor.graph.groupCells(null, 20, cells);
                if (y.db.userId === event.value.userId) {
                    //that._editor.graph.setSelectionCells(group);
                    that._editor.graph.getSelectionModel().setCell(group);
                    group.createShared(true);
                }
                that._editor.graph.updateBounds();
                __WEBPACK_IMPORTED_MODULE_5__HierachyTree_js__["a" /* default */].group(group, cells);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].UNGROUP_CELLS:
                var cells = that._editor.graph.ungroupCells(__WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getCellsFromIdList(that._editor.graph, event.value.ids));
                if (y.db.userId === event.value.userId)
                    that._editor.graph.setSelectionCells(cells);
                that._editor.graph.updateBounds();
                __WEBPACK_IMPORTED_MODULE_5__HierachyTree_js__["a" /* default */].ungroup(cells);
                break;
            case __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.PASTE:
                var selectedCells = that._editor.graph.getSelectionCells();

                var doc = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(event.value.xml);
                var elt = doc.documentElement.firstChild.childNodes[1];
                var cells = [];
                while (elt != null) {
                    var codec = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxCodec */]();
                    var cell = codec.decode(elt);
                    cells.push(cell);
                    elt = elt.nextSibling;
                }
                __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxClipboard */].setCells(cells);
                var pastedCells = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxClipboard */].paste(that._editor.graph);

                if (event.value.userId !== y.db.userId) {
                    that._editor.graph.setSelectionCells(selectedCells);
                } else {
                    for (var i = 0; i < pastedCells.length; i++)
                        if (pastedCells[i].hasOwnProperty('createShared'))
                            pastedCells[i].createShared(true);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GRAPH_RESIZE: //event triggerd in index.html
                if (y.db.userId !== event.value.userId) {
                    //var size = $('#wireframeWrap').css(["width", "height"]);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#wireframeWrap').css("width", event.value.width).css("height", event.value.height);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#wireframe').css("width", event.value.width).css("height", event.value.height);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#draggingBar').css("width", event.value.width);
                }
                var prevBounds = that._editor.graph.maximumGraphBounds;
                that._editor.graph.maximumGraphBounds = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["n" /* mxRectangle */](0, 0, event.value.width, event.value.height);
                break;
            case 'reload':
                window.location.reload();
                break;
        }
    });

    this.addSeparator = function (icon) {
        //The first two lines are from the addSeperator(icon) of mxDefaultToolbar
        icon = icon || __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.SEPERATOR;
        var item = this.toolbar.addSeparator(icon);
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(item).addClass("mxSeparator");
        return item;
    }

    //this.addSeparator();
    var item = this.addItem('Save', __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.SAVE, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SAVE);
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(item).addClass('wfSave');
    //this.addSeparator();
    this.addItem("Copy", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.COPY, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.COPY);
    this.addItem("Paste", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.PASTE, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.PASTE);
    //  this.addSeparator();
    this.addItem("Delete", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.DELETE, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.DELETE);
    //this.addSeparator();
    //this.addItem("Cut", "images/toolbox/cut.gif", "shared_cut");
    this.addItem("Undo", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.UNDO, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNDO);
    this.addItem("Redo", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.REDO, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.REDO);
    //this.addSeparator();
    this.addItem("Group", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.GROUP, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GROUP);
    this.addItem("Ungroup", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.UNGROUP, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNGROUP);
    //this.addSeparator();
    this.addItem("Import", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.IMPORT, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.IMPORT);
    this.addItem("Export", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.EXPORT, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.EXPORT);
    //this.addSeparator();
    //this.addItem("User List", CONST.IMAGES.USER_LIST, CONST.ACTIONS.SHOW_USER_LIST);
    this.addItem('Synchronize with Syncmeta', __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.SYNC, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SYNC);
    //this.addSeparator();

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Toolbox);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_randomcolor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_randomcolor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_randomcolor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_noty__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_noty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_noty__);
/*global  y*/
/**
 * @module
 */




/**
 * Generate a user list wrapped in a mxWindow
 * Retrieve all necessary infromation with y.share.yfUsers.get(y.db.userId) 
 * @example y.share.yfUsers.get(y.db.userId) = 
        {
            id: "some id",
            name: "Name Surname",
            image: "A url",
            color: "a color"
        }
 * @param {Object} user the object consists of the data about the user
 * @param {Boolean} visible true if the mxWindow is visible or false if not 
 * @return {undefined}
 */
function UserList(user, visible) {
    /**
     * the div html elements that contains the user list
     * @member {jQuery}
     */
    var $userList = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#userList');

    /**
     * The user list table
     * @member {jQuery}
     */
    var $userTable = $userList.find('table');

    /**
     * The ids of all remote users
     * @member {String[]}
     */
    var remoteUsers = [];

    /**
     * The default height of the mxWindow 
     * @default 50
     * @member {Integer}
     */
    var height = 50;
    
    /**
     * The default width of the mxWindow
     * @member {Integer}
     * @default 210
     */
    var width = 210;
    
    /**
     * The mxWindow-instance of the user list
     * @member {mxWindow}
     */
    var wnd = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["a" /* mxWindow */]("User List", $userList[0], 600, 100, width, height, false, true);
    wnd.setVisible(visible !== undefined ? visible : true);
    wnd.setMaximizable(false);
    wnd.setResizable(true);
    wnd.setClosable(true);
    wnd.destroyOnClose = false;

    /**
     * @event
     * @return {undefined}
     * @memberof {UserList}
     */
    window.onbeforeunload = function () {
        y.share.yfJoin.set('leave', y.db.userId);
    };
    window.onunload = function () {
        y.share.yfJoin.set('leave', y.db.userId);
    }
    /**
     * Generate a row entry for user list table
     * @param {String} userId the user id
     * @param {String} userName the name of the user
     * @param {String} imageUrl the url to the avatar of the user
     * @param {String} color the randomed color for the user
     * @return {JQuery} the tr-element as a jquery object
     */
    var getUserEntry = function (userId, userName, imageUrl, color) {
        var entry = '<tr id="' + userId + '" style="display: flex; background : ' + color + '"><td><img src="' + imageUrl + '" height="42" width="42"></td><td style="font-size: 15;color: white;padding : 12;">' + userName + '</td></tr>';
        return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(entry);
    }
    if (user) {
        y.share.yfUsers.observe(function (event) {
            if (event.name !== y.db.userId && remoteUsers.indexOf(event.name) == -1) {
                var $entry = getUserEntry(event.name, event.value.name, event.value.image, event.value.color);
                $userTable.append($entry);
                remoteUsers.push(event.name);
                height += 45;
                wnd.setSize(width, height);
                new __WEBPACK_IMPORTED_MODULE_3_noty___default.a({
                    type: 'success',
                    layout : 'topRight',
                    text: 'User ' + event.value.name + ' joined the space',
                    timeout: 750
                }).show();
            }
        });
        y.share.yfJoin.observe(function (event) {
            if (event.name === 'leave' && y.db.userId !== event.value) {
                __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#' + event.value).remove();
                if (remoteUsers.indexOf(event.value) !== -1)
                    remoteUsers.splice(remoteUsers.indexOf(event.value), 1);
                new __WEBPACK_IMPORTED_MODULE_3_noty___default.a({
                    type: 'error',
                    layout : 'topRight',
                    text: 'User ' + y.share.yfUsers.get(event.value).name + ' left the space',
                    timeout: 750
                }).show();
                return;
            }
            if (event.name !== y.db.userId && !event.value) {
                y.share.yfJoin.set(y.db.userId, {
                    receiver: event.name,
                    userInfo: y.share.yfUsers.get(y.db.userId)
                });
            } else if (event.value && event.value.receiver === y.db.userId && remoteUsers.indexOf(event.name) == -1) {
                $userTable.append(getUserEntry(event.value.name, event.value.userInfo.name, event.value.userInfo.image, event.value.userInfo.color));
                remoteUsers.push(event.value.userId);
                height += 45;
                wnd.setSize(width, height);
            }
        });

        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.g-signin2').hide();
        var color = __WEBPACK_IMPORTED_MODULE_2_randomcolor___default()();
        var $userEntry = getUserEntry(y.db.userId, user.name, user.imageUrl, color);
        $userTable.append($userEntry);
        $userTable.append(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<tr><th>Collaborators</th></tr>'));
        height += 50;
        wnd.setSize(width, height);
        y.share.yfUsers.set(y.db.userId, {
            id: user.id,
            name: user.name,
            image: user.imageUrl,
            color: color
        });
        y.share.yfJoin.set(y.db.userId, false);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (UserList);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlays_UserOverlay_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlays_EditOverlay_js__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Awareness_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WireframeLayout_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__misc_Constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__HierachyTree_js__ = __webpack_require__(18);
/*global y*/










window.mxGeometry = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["t" /* mxGeometry */];
Wireframe.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */]();
Wireframe.prototype.constructor = Wireframe;

/**
 * @classdesc The class represents the visuale representation of the wireframe
 * @constructor
 * @param {DOM} container the div container containning the canvas
 * @param {WireframeModel} model represents the model of the wireframe
 * @extends mxGraph
 */
function Wireframe(container, model) {
    var that = this;
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].call(this, container, model);

    that.defaultOverlap = 0;
    that.foldingEnabled = false;
    that.autoExtend = false;
    that.allowAutoPanning = false;
    that.collapseToPreferredSize = false;
    that.extendParentsOnAdd = false;
    that.extendParents = false;
    that.setHtmlLabels(true);
    that.setTooltips(true); //enable tooltips for overlays
    this.dropEnabled = true;

    that.maximumGraphBounds = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["n" /* mxRectangle */](0, 0, 500, 500);
    //enable guiding lines
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["z" /* mxGraphHandler */].prototype.guidesEnabled = true;
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["z" /* mxGraphHandler */].prototype.highlightEnabled = true;

    //enables user highlighting and overlay for cells of the wireframe
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Awareness_js__["a" /* default */])(this);

    new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["A" /* mxKeyHandler */](this);
    new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["B" /* mxRubberband */](this);

    var sharedAction = null;
    var SharedCellsMovedEvent = function (wf, event) {
        var properties = event.getProperties();
        var cells = properties.cells;
        var ids = [];
        for (var i = 0; i < cells.length; i++) {
            ids.push(cells[i].id);
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
                userId: y.db.userId,
                ids: [],
                bounds: []
            };
            for (var i = 0; i < cells.length; i++) {
                sharedAction.ids.push(cells[i].id);
                sharedAction.bounds.push({
                    x: bounds[i].x,
                    y: bounds[i].y,
                    width: bounds[i].width,
                    height: bounds[i].height
                });
            }
        }

    };
    that.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].CELLS_MOVED, SharedCellsMovedEvent);
    that.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].CELLS_RESIZED, SharedCellResizedEvent);
    that.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].DOUBLE_CLICK, function (sender, evt) {
        var cell = evt.getProperty('cell');
        if (cell) {
            if (cell.hasOwnProperty('get$node')) {
                cell.get$node().css('pointer-events', 'auto');
                cell.get$node().focus();
            }
            //var e = evt.getProperty('event');
            //new PropertyEditor(cell, that, e.x, e.y);
        }
    });
    that.getSelectionModel().addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].CHANGE, function (sender, event) {
        var deselected = event.getProperty('added');
        for (var i = 0; i < deselected.length; i++) {
            if (deselected[i].hasOwnProperty('get$node'))
                deselected[i].get$node().css('pointer-events', 'none');
                __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.removeCellOverlay.call(that, deselected[i], deselected[i].getEditOverlay());
        }
        var selected = event.getProperty('removed');
        if (selected) {
            for (var i = 0; i < selected.length && selected[i]; i++) {
                var editOverlay = new __WEBPACK_IMPORTED_MODULE_3__overlays_EditOverlay_js__["a" /* default */]();
                __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.addCellOverlay.call(that, selected[i], editOverlay);
                editOverlay.bindClickEvent(that);
            }
        }
    });
    
    /**
     * Overrides the moveCells-method from the parent class to make the move NRTC 
     * @param {UIObject[]} cells the cells to move
     * @param {Integer} dx the direction of the x-axis
     * @param {Integer} dy the direction of the y-axis
     * @param {Boolean} clone should the cell be cloned. default = false
     * @param {UIObject} target the parent
     * @param {*} evt never used
     * @param {*} mapping never used
     * @param {Boolean} shared indicates if its from the shared callback or not. TODO check this could be done better
     * @return {UIObject[]} the cells which were moved as an array
     * @see {@link https://jgraph.github.io/mxgraph/docs/js-api/files/view/mxGraph-js.html#mxGraph.moveCells | moveCells}
     */
    that.moveCells = function (cells, dx, dy, clone, target, evt, mapping, shared) {
        var cells = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.moveCells.apply(this, arguments);
        if (cells.length > 0 && sharedAction && !shared) {
            sharedAction.parentId = cells[0].parent.id;
            y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].MOVE, sharedAction);
            sharedAction = null;
        }
        return cells;
    };

    /**
     * Overrides the resizeCells-method from the parent calls mxCell to make it NRTC
     * @param {UIObjec[]} cells the cells to be resized 
     * @param {mxRectangle[]} bounds the new bounds for each cell.
     * @param {Boolean} recurse recurseveily resize the childs as well
     * @param {Boolean} shared shared indicates if its from the shared callback or not. TODO check this could be done better
     * @return {UIObject[]} the cells which were resized
     * @see {@link https://jgraph.github.io/mxgraph/docs/js-api/files/view/mxGraph-js.html#mxGraph.resizeCells | resizeCells}
     */
    that.resizeCells = function (cells, bounds, recurse, shared) {
        var cells;
        that.getModel().beginUpdate();
        try {
            cells = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.resizeCells.apply(this, arguments);
        } finally {
            that.getModel().endUpdate();
            that.updateBounds();
        }
        if (cells && cells.length > 0 && sharedAction && !shared) {
            y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].RESIZE, sharedAction);
            sharedAction = null;

        }
        return cells;
    };

    that.addCellOverlay = function (cell, overlay, fromSyncMeta) {
        if (overlay instanceof __WEBPACK_IMPORTED_MODULE_2__overlays_UserOverlay_js__["a" /* default */] || overlay instanceof __WEBPACK_IMPORTED_MODULE_3__overlays_EditOverlay_js__["a" /* default */]) {
            __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.addCellOverlay.apply(this, arguments);
        } else {
            y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].ADD_OVERLAY, {
                userId: y.db.userId,
                id: cell.getId(),
                xml: overlay.toXML(),
                fromSyncMeta : !fromSyncMeta ? false : true
            });
        }
    };

    that.updateBounds = function () {
        var bounds = that.getBoundingBox(that.getDefaultParent().children);
        if(bounds){
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#wireframeWrap').resizable('option', 'minWidth', bounds.x + bounds.width);
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#wireframeWrap').resizable('option', 'minHeight', bounds.y + bounds.height);
        }
    };

    //------------------------------------------------------------------------------------------------------------------------
    //--------------------------------------Begin Yjs Observer for actions----------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------
    y.share.action.observe(function (event) {
        switch (event.name) {
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].ADD_VERTEX:
                {
                    var doc = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(event.value.data);
                    var codec = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxCodec */](doc);
                    var type = doc.documentElement.getAttribute('uiType');
                    var elt = doc.documentElement.childNodes[1];
                    var cells = [];
                    while (elt != null) {
                        var cell = codec.decode(elt);
                        cell.setId(event.value.id);
                        if (cell.hasOwnProperty('initDOM')) cell.initDOM();
                        cell.setType(type);
                        cells.push(cell);
                        elt = elt.nextSibling;
                    }
                    that.getModel().beginUpdate();
                    try {
                        if (event.value.parent)
                            that.addCells(cells, that.getModel().getCell(event.value.parent));
                        else
                            that.addCells(cells);

                    }
                    finally {
                        that.getModel().endUpdate();
                        if (!event.value.parent)
                            that.updateBounds();
                    }
                    __WEBPACK_IMPORTED_MODULE_8__HierachyTree_js__["a" /* default */].add(cell);
                    for (var i = 0; i < cells.length; i++) {
                        cells[i].createShared(event.value.userId === y.db.userId);
                    }
                    if (event.value.userId === y.db.userId) {
                        that.setSelectionCells(cells);
                        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#wireframe').focus();
                    }

                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].MOVE:
                {
                    var parent = that.getModel().getCell(event.value.parentId);
                    if (event.value.userId !== y.db.userId) {
                        that.removeListener(SharedCellsMovedEvent);
                        var cells = __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].getCellsFromIdList(that, event.value.ids);
                        if (cells.length > 0) {
                            if (event.value.dx != 0 || event.value.dy != 0)
                                that.moveCells(cells, event.value.dx, event.value.dy, false, parent, null, null, true);
                        }
                        that.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].CELLS_MOVED, SharedCellsMovedEvent);
                    }
                    __WEBPACK_IMPORTED_MODULE_8__HierachyTree_js__["a" /* default */].move(event.value.ids, event.value.parentId, parent.children.length);
                    that.updateBounds();
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].RESIZE:
                {
                    if (event.value.userId !== y.db.userId) {
                        that.removeListener(SharedCellResizedEvent);
                        var cells = __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].getCellsFromIdList(that, event.value.ids);
                        var bounds = [];
                        for (var i = 0; i < event.value.bounds.length; i++) {
                            var bound = event.value.bounds[i];
                            bounds.push(new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["n" /* mxRectangle */](bound.x, bound.y, bound.width, bound.height));
                        }
                        if (cells.length > 0) {
                            that.getModel().beginUpdate();
                            try {
                                that.resizeCells(cells, bounds, false, true);
                            } finally {
                                that.getModel().endUpdate();
                                that.updateBounds();
                                that.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].CELLS_RESIZED, SharedCellResizedEvent);
                            }
                        }
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].ADD_OVERLAY:
                {
                    var doc = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(event.value.xml);
                    var codec = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxCodec */](doc);
                    codec.decode = function (node, into) {
                        var obj = null;
                        if (node != null && node.nodeType == __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].NODETYPE_ELEMENT) {
                            var dec = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxCodecRegistry */].getCodec(node.nodeName);
                            if (dec != null) {
                                obj = dec.decode(this, node, into);
                            } else {
                                obj = node.cloneNode(true);
                                obj.removeAttribute('as');
                            }
                        }
                        return obj;
                    };
                    var tag = codec.decode(doc.documentElement);

                    var cell = that.getModel().getCell(event.value.id);
                    if (cell && tag) {
                        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxGraph */].prototype.addCellOverlay.apply(that, [cell, tag]);
                        cell.addTag(tag);
                        tag.setCell(cell);
                        if(tag.hasOwnProperty('initAttributes')) tag.initAttributes();
                        tag.createShared(y.db.userId === event.value.userId);
                        tag.bindClickEvent(that);
                        var ref = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#' + cell.getId() + '_tagTree').jstree(true);
                        if (ref) {
                            ref.create_node(null, {
                                id: tag.tagObj.getAttribute('id'),
                                type:  tag.tagObj.getAttribute('tagType'),
                                text: tag.constructor.Alias || tag.tagObj.getAttribute('tagType'),
                                state: {
                                    selected: false,
                                    opened: true
                                }
                            });
                            //if (sel) ref.edit(sel);
                        }
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_7__misc_Constants_js__["a" /* default */].ACTIONS.MOVE_TAG:
                {
                    if (event.value.userId !== y.db.userId) {
                        __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#' + event.value.cellId + '_tagTree').jstree(true).move_node(event.value.node, event.value.parent, event.value.position);
                    }
                    var cell = that.getModel().getCell(event.value.cellId);
                    var tag = cell.getTagById(event.value.node);
                    cell.removeTagById(tag.getId());
                    tag.tagObj.setAttribute('parent', event.value.parent);
                    if (event.value.parent !== '#') {
                        var parentTag = cell.getTagById(event.value.parent);
                        parentTag.addChildTag(tag);
                    }
                    cell.addTag(tag);
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_7__misc_Constants_js__["a" /* default */].ACTIONS.DELETE_TAG:
                {
                    var $tree = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#' + event.value.cellId + '_tagTree');
                    if ($tree.length > 0)
                        $tree.jstree(true).delete_node(event.value.selected);
                    //delete attribute form of the tag
                    __WEBPACK_IMPORTED_MODULE_6_jquery___default()('#propertyEditor_' + event.value.cellId).find('.tagAttribute').parent().remove();
                    var cell = that.getModel().getCell(event.value.cellId);
                    if (cell) {
                        for (var i = 0; i < event.value.selected.length; i++) {
                            var id = event.value.selected[i];
                            for (var j = 0; cell.overlays && j < cell.overlays.length; j++) {
                                var tag = cell.overlays[j];
                                if (tag.hasOwnProperty('tagObj') && tag.tagObj.getAttribute('id') === id) {
                                    that.removeCellOverlay(cell, tag);
                                    cell.removeTagById(id);
                                    var removeAllChilds = function (cell, tag) {
                                        //remove childs
                                        var childs = tag.getChildTags();
                                        for (var key in childs) {
                                            if (childs.hasOwnProperty(key)) {
                                                cell.removeTagById(key);
                                                that.removeCellOverlay(cell, childs[key]);
                                                removeAllChilds(cell, childs[key]);
                                            }
                                        }
                                    }
                                    removeAllChilds(cell, tag);
                                }
                            }
                        }
                        var k = 0;
                        var state = that.view.getState(cell);
                        if (state.overlays) {
                            for (var o in state.overlays.map) {
                                var tag = state.overlays.map[o].overlay;
                                if (tag.constructor.name !== 'UserOverlay' || tag.constructor.name !== 'EditOverlay') {
                                    tag.offset.x = -k * __WEBPACK_IMPORTED_MODULE_7__misc_Constants_js__["a" /* default */].TAG.SIZE;
                                    k++;
                                }
                            }
                            that.cellRenderer.redraw(state);
                        }

                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_7__misc_Constants_js__["a" /* default */].ACTIONS.RENAME_TAG:
                {
                    //TODO
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_7__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.APPLY_LAYOUT: {
                var layout = new __WEBPACK_IMPORTED_MODULE_5__WireframeLayout_js__["a" /* default */](that);
                layout.resizeVertices = false;

                var cell;
                if (event.value.cellId)
                    cell = that.getModel().getCell(event.value.cellId);
                else 
                    cell = that.getDefaultParent();

                if(!event.value.recursive)
                    layout.execute(cell);
                else {
                    var applyLayoutRecusively = function(parent){
                        if(parent.children && parent.children.length < 1 ) return;
                        for(var i=0;i<parent.children.length;i++){
                            var child = parent.children[i];
                            if(child.constructor.name === 'DivContainer'){
                                layout.execute(child);
                                applyLayoutRecusively(child);   
                            }
                        }
                    }
                    applyLayoutRecusively(cell);
                    layout.execute(cell);
                    
                }
                break;
            }
        }
        if (event.value.userId === y.db.userId)
            __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].Save(that);
    });
    //------------------------------------------------------------------------------------------------------------------------
    //--------------------------------------End Yjs Observer for actions------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------

    that.convertValueToString = function (cell) {
        if (__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].isNode(cell.value)) {
            if (cell.hasOwnProperty('get$node')) {
                if (!cell.get$node()) cell.initDOM();
                /*mxEvent.addListener(cell.get$node()[0], 'change', function () {
                    var elt = cell.value.cloneNode(true);
                    elt.setAttribute('label', cell.get$node().val());
                    that.model.setValue(cell, elt);
                    Util.Save(that);
                });*/
                cell.get$node().css('width', cell.geometry.width - 15).css('height', cell.geometry.height - 15);

                switch (cell.value.getAttribute('uiType').toLowerCase()) {
                    case 'link':
                    case 'textbox':
                    case 'button':
                    case 'textnode':
                        {
                            cell.get$node().click(function () {
                                that.getSelectionModel().setCell(cell);
                            });
                            break;
                        }
                    case 'paragraph':
                    case 'textarea':
                        {
                            cell.get$node().click(function () {
                                this.focus();
                                this.setSelectionRange(this.value.length, this.value.length);
                            });

                            cell.get$node().dblclick(function () {
                                this.focus();
                                this.setSelectionRange(0, this.value.length);
                            })
                            break;
                        }
                    case 'radiobutton':
                    case 'checkbox':
                        {
                            cell.get$node().find('input[type="input"]').click(function () {
                                that.getSelectionModel().setCell(cell);
                            });
                            break;
                        }
                }
                return cell.get$node()[0];
            }
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Wireframe);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(WireframeLayout, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["C" /* mxPartitionLayout */]);

/**
 * @classdesc A simple Layout for Wireframes based on the PartitionLayout from mxGraph
 * @constructor
 * @param {Wireframe} graph the wireframe 
 * @param {*} spacing the spacing
 * @param {*} border the border
 * @extends mxPartitionLayout
 */
function WireframeLayout(graph, spacing, border) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["C" /* mxPartitionLayout */].call(this, graph, true, spacing, border);
}

/**
 * @param {mxCell} parent the parent element to execute the layout at
 * @return {undefined}
 */
WireframeLayout.prototype.execute = function (parent) {
    var model = this.graph.getModel();
    var pgeo = model.getGeometry(parent);

    if (this.graph.container != null &&
        ((pgeo == null && model.isLayer(parent)) || parent == this.graph.getView().currentRoot)) {
        var width = this.graph.container.offsetWidth - 1;
        var height = this.graph.container.offsetHeight - 1;
        pgeo = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["n" /* mxRectangle */](0, 0, width, height);
    }

    if (pgeo != null) {
        var children = [];
        var childCount = model.getChildCount(parent);

        for (var i = 0; i < childCount; i++) {
            var child = model.getChildAt(parent, i);

            if (!this.isVertexIgnored(child) && this.isVertexMovable(child)) {
                children.push(child);
            }
        }
        var n = children.length;
        if (n > 0) {
            var max_height = 0, min_parent_width = 0, min_parent_height = 0;

            model.beginUpdate();
            try {
                var geoOfFirst = model.getGeometry(children[0]);
                geoOfFirst = geoOfFirst.clone();
                geoOfFirst.x = this.border;
                //start size of the divcontainer
                geoOfFirst.y = (this.graph.isSwimlane(parent)) ? 13 : this.border;
                model.setGeometry(children[0], geoOfFirst);
                if (n > 1) {
                    for (var i = 1; i < n; i++) {
                        var child = children[i];
                        var pred = children[i - 1];
                        var geo = model.getGeometry(child);
                        var predGeo = model.getGeometry(pred);
                        if (geo != null) {
                            geo = geo.clone();
                            if (max_height < predGeo.y + predGeo.height)
                                max_height = predGeo.y + predGeo.height;
                            if(min_parent_width < predGeo.x + predGeo.width)
                                min_parent_width = predGeo.x + predGeo.width;
                            if (predGeo.x + predGeo.width + geo.width < pgeo.width) {
                                geo.x = predGeo.x + predGeo.width;
                                geo.y = predGeo.y;
                                min_parent_width = predGeo.x + predGeo.width + geo.width; 
                                min_parent_height = max_height;                                                           
                            }
                            else {
                                geo.y = max_height;
                                geo.x = this.border;
                                min_parent_height = max_height + geo.height;
                                max_height = 0;
                                if(min_parent_width < geo.x + geo.width)
                                    min_parent_width = geo.x + geo.width;
                                
                            }
                            model.setGeometry(child, geo);
                        }
                    }
                }
                else {
                    min_parent_height = geoOfFirst.height +13;
                    min_parent_width = geoOfFirst.width;
                }

                if (this.graph.getDefaultParent() != parent) {
                    var parentGeo = model.getGeometry(parent).clone();
                    parentGeo.height = min_parent_height;
                    parentGeo.width = min_parent_width;

                    model.setGeometry(parent, parentGeo);
                }
            }
            finally {
                model.endUpdate();
            }

        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (WireframeLayout);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_ComboAttributeMap_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__ = __webpack_require__(6);
/*global y*/







__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(WireframeModel, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["E" /* mxGraphModel */]);

var codec = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxCodecRegistry */].getCodec(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["E" /* mxGraphModel */]);
codec.template = new WireframeModel();
__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxCodecRegistry */].addAlias('WireframeModel', 'mxGraphModel');
window.WireframeModel = WireframeModel;

/**
 * @classdesc The conceptual model behind the wireframe
 * @constructor
 * @extends mxGraphModel
 */
function WireframeModel() {
    var that = this;
    var xmlDoc = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].createXmlDocument();
    var meta = xmlDoc.createElement('WireframeMeta');
    var comboAttrMap = new __WEBPACK_IMPORTED_MODULE_4__misc_ComboAttributeMap_js__["a" /* default */]();
    var strAttrs = [];
    /*
    var exclude = ['width', 'height'];
    if (window.hasOwnProperty('vls')) {
        for (var key in vls.nodes) {
            var node = vls.nodes[key];
            if (node.label === 'Widget') {
                for (var attrKey in node.attributes) {
                    var attr = node.attributes[attrKey];
                    if (exclude.indexOf(attr.key) === -1) {
                        if (attr.value === 'string') {
                            meta.setAttribute('_' + attr.key, '');
                            strAttrs.push('_' + attr.key);
                        } else if (attr.value === 'boolean')
                            meta.setAttribute('_' + attr.key, true);
                        else if (attr.hasOwnProperty('options')) {
                            var values = Object.keys(attr.options);
                            comboAttrMap.addComboAttr('_' + attr.key, values);
                            meta.setAttribute('_' + attr.key, values[0]);
                        }
                    }
                }
            }

        }
    }*/

    meta.setAttribute('id', __WEBPACK_IMPORTED_MODULE_5__misc_Util_js__["a" /* default */].GUID());
    meta.setAttribute('width', '500');
    meta.setAttribute('height', '500');
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["E" /* mxGraphModel */].call(this);

    /**
     * Get the meta data object of the wireframe model
     * It consists of information for the widget canvas
     * @return {XMLDocument} the meta as a XMLDocument
     */
    this.getMeta = function () {
        return meta;
    }

    /**
     * Set a value for attribute with the given name
     * @param {String} name the name of the attribute 
     * @param {string|Integer|Boolean} value the value of the attribute
     * @return {Boolean} true if the meta data object has the attribute, false if the attribute does not exists
     */
    this.setAttribute = function (name, value) {
        if (!meta.hasAttribute(name)) return false;
        meta.setAttribute(name, value);
        return true;
    }

    /**
     * Get the attribute value for a give attribute name
     * @param {String} name the name of the attribute
     * @return {String} the value of the attribute
     */
    this.getAttribute = function (name) {
        return meta.getAttribute(name);
    }

    /**
     * initialize the meta data object with a give XMLDocument
     * @param {XMLDocument} m the meta data object
     * @return {undefined}
     */
    this.initMetaFromXml = function (m) {
        meta = m;
    }

    /**
     * Get the map for the combo attribtues
     * @return {ComboAttributeMap} the ComboAttributeMap-instance
     */
    this.getComboAttrMap = function () {
        return comboAttrMap;
    }

    /**
     * initialize a shared y-text  type for the give attribute name
     * @param {String} attrName the attribute name
     * @return {undefined}
     */
    var initYText = function (attrName) {
        var ytext = y.share.attrs.get('meta' + attrName, __WEBPACK_IMPORTED_MODULE_2__node_modules_yjs_dist_y_js___default.a.Text);
        if (!ytext)
            y.share.attrs.set('meta' + attrName, __WEBPACK_IMPORTED_MODULE_2__node_modules_yjs_dist_y_js___default.a.Text);
        else {
            ytext.observe(that.getYTextObserver());
            meta.setAttribute(attrName, ytext.toString());
        }
    }

    /**
     * Get the observer function for the y-text types
     * @return {Function} the observer function
     */
    this.getYTextObserver = function () {
        var observer = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.debounce(function (evt) {
            var value = evt.object.toString();
            var path = evt.object.getPath()[0];
            var attrName = path.substring(path.indexOf('_'));
            meta.setAttribute(attrName, value);
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.wfSave').click();
        }, 500);
        return observer;
    }

    /**
     * Initilaize the shared y-text data types for the wireframe model
     * @return {undefined}
     */
    this.initSharedData = function () {
        for (var i = 0; i < strAttrs.length; i++) {
            initYText(strAttrs[i]);
        }
    }
}



/* harmony default export */ __webpack_exports__["a"] = (WireframeModel);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIMedia_js__ = __webpack_require__(35);
/**
 * @module UIElements
 */



AudioPlayer.prototype = new __WEBPACK_IMPORTED_MODULE_1__UIMedia_js__["a" /* default */]();
AudioPlayer.prototype.constructor = AudioPlayer;
window.AudioPlayer = AudioPlayer;
__WEBPACK_IMPORTED_MODULE_1__UIMedia_js__["a" /* default */].registerCodec(AudioPlayer);

/**
 * The HTML node name
 * @static 
 * @default audio
 * @readonly
 */
AudioPlayer.HTML_NODE_NAME = 'audio';

/**
 * The Name in the wireframing editor
 * @static 
 * @default AudioPlayer
 * @readonly
 */
AudioPlayer.NAME = "Audio Player";

/**
 * @classdesc The Audio Player HTML 5 element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 200, 30)] the width, height, x and y of the ui element
 * @extends UIMedia
 */
function AudioPlayer(geometry) {
    if (!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 200, 30);
    //style in html5stencils.xml and registered in the editor
    var style = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + "=AudioPlayer;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=none;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=grey;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_ASPECT + '=fixed;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_EDITABLE + "=0;";

    __WEBPACK_IMPORTED_MODULE_1__UIMedia_js__["a" /* default */].call(this, geometry, style);
}
/* harmony default export */ __webpack_exports__["a"] = (AudioPlayer);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__ = __webpack_require__(1);
/**
 * @module UIElements
 */




Button.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
Button.prototype.constructor = Button;
__WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].registerCodec(Button);
//Global for the codec converter
window.Button = Button;

/**
 * The HTML node name
 * @static 
 * @default button
 * @readonly
 */
Button.HTML_NODE_NAME = 'button';

/**
 * The Name in the wireframing editor
 * @static 
 * @default Button
 * @readonly
 */
Button.NAME = "Button";

/**
 * A concrete button class representing a button ui element of the wireframe
 * @classdesc The Button html element
 * @constructor
 * @param {mxGeometry} [geometry=new mxGeometry(0, 0, 100, 50)] the width, height, x and y of the ui element
 * @extends UIText
 */
function Button(geometry) {
    /**
     * The default text for the label
     * @member {String}
     * @default Button
     */
    var text = 'Button';

    if (!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 100, 50);

    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('_disabled', false);
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_type', 'button');
    this.getComboAttrMap().addComboAttr('_type', ['button', 'reset', 'submit']);

    /**
     * Crate the html input element for the button element
     * @return {undefined}
     * @override
     */
    this.initDOM = function () {
        __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].prototype.initDOM.call(this);
        var $node = this.get$node();
        $node.css('text-align', 'center')
            .css('border-radius', '12px')
            .css('background-color', 'rgb(227, 227, 228)')
            .css('border-style', 'ridge')
            .val(text);
        this.set$node($node);
    }

    /**
     * @override
     * @param {boolean} createdByLocalUser indicates if the the function was called by the local user or not
     * @return {undefined}
     */
    this.createShared = function (createdByLocalUser) {
        __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].prototype.createShared.call(this, createdByLocalUser);
    };
}

/**
 * Init shared content for the button
 * @override
 */
Button.prototype.initShared = function(){
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].prototype.initShared.call(this);
}
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__ = __webpack_require__(1);
/**
 * @module UIElements
 */



CheckBox.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
CheckBox.prototype.constructor = CheckBox;
__WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].registerCodec(CheckBox);
//Global for the codec converter
window.CheckBox = CheckBox;

/**
 * The Name in the wireframing editor
 * @static 
 * @default CheckBox
 * @readonly
 */
CheckBox.NAME = "Checkbox";

/**
 * @classdesc A HTMl checkbox element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 150, 30)] the width, height, x and y of the ui element
 * @extends UIText
 */
function CheckBox(geometry) {
    var text = 'Option';
    if (!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 150, 30);
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('_checked', false);
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_disabled', false);

    this.initDOM = function () {
        this.set$node(
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<div>')
            .css('pointer-events', 'none')
            .append(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<input>').attr('type', 'checkbox').attr('checked', true).attr('disabled', true))
            .append(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<input>')
                .attr('type', 'input')
                .css('font-size', 15)
                .css('width', this.geometry.width - 30)
                .css('height', this.geometry.height - 10)
                .css('background-color', 'transparent')
                .css('border-style', 'initial')
                .val(text)));
    }
}
CheckBox.prototype.bindLabel = function(ytext){
    ytext.bind(this.get$node().find('input[type="input"]')[0]);
}

CheckBox.prototype.initShared = function () {
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].prototype.initShared.call(this);
}
/* harmony default export */ __webpack_exports__["a"] = (CheckBox);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIControl_js__ = __webpack_require__(9);
/**
 * @module UIElements
 */




__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(DivContainer, __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */]);
window.DivContainer = DivContainer;
__WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].registerCodec(DivContainer);

/**
 * The HTML node name
 * @static 
 * @default div
 * @readonly
 */
DivContainer.HTML_NODE_NAME = 'div';

/**
 * The Name of element in the Wireframing editor
 * @static 
 * @default UI Component Container
 * @readonly
 */
DivContainer.NAME = "UI Component Container";

/**
 * @classdesc A HTMl div element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 180, 150)] the width, height, x and y of the ui element
 * @extends UIControl
 */
function DivContainer(geometry) {
    if (!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 180, 150);
    var style = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + "=" + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].SHAPE_SWIMLANE + ';' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=none;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_POINTER_EVENTS + "=true;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=rgba(91, 93, 90, 0.50);' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_VERTICAL_ALIGN + '=middle;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_LABEL_BACKGROUNDCOLOR + '=none;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FONTSIZE + '=11;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STARTSIZE + '=13;' +
        //mxConstants.STYLE_HORIZONTAL + '=false;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FONTCOLOR + '=rgba(91, 93, 90, 0.25);' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_EDITABLE + "=0;"; 

    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].call(this, geometry, style);
    this.setAttribute('label', 'Container');
    this.setConnectable(false);
}
/* harmony default export */ __webpack_exports__["a"] = (DivContainer);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UIControl_js__ = __webpack_require__(9);
/*global y*/
/**
 * @module UIElements
 */




Image.prototype = new __WEBPACK_IMPORTED_MODULE_2__UIControl_js__["a" /* default */]();
Image.prototype.constructor = Image;

/**
 * The HTML node name
 * @static 
 * @default img
 * @readonly
 */
Image.HTML_NODE_NAME = 'img';

/**
 * The Name in the wireframing editor
 * @static 
 * @default Image
 * @readonly
 */
Image.NAME = "Image";

window.Image = Image;

var codec = __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["c" /* mxUtils */].clone(__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["k" /* mxCodecRegistry */].getCodec(__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["u" /* mxCell */]));
codec.template = new Image();
__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["k" /* mxCodecRegistry */].register(codec);

/**
 * @classdesc A HTMl image element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 128, 128)] the width, height, x and y of the ui element
 * @extends UIMedia
 */
function Image(geometry) {
    if(!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 128, 128);
    //style in html5stencils.xml and registered in the editor
    var style = __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + '=image;' +
        __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["i" /* mxConstants */].STYLE_EDITABLE + "=0;";

    __WEBPACK_IMPORTED_MODULE_2__UIControl_js__["a" /* default */].call(this, geometry, style);
    this.setAttribute('_src','');
}
Image.prototype.createShared = function(createdByLocalUser){
    __WEBPACK_IMPORTED_MODULE_2__UIControl_js__["a" /* default */].prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser){
        y.share.attrs.set(this.getId()+'_src', __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default.a.Text);
    }
}

Image.prototype.initShared = function(){
    __WEBPACK_IMPORTED_MODULE_2__UIControl_js__["a" /* default */].prototype.initShared.call(this);
    this.initYText('_src');
}
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIText_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__ = __webpack_require__(1);
/*global y*/
/**
 * @module UIElements
 */



Link.prototype = new __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */]();
Link.prototype.constructor = Link;
__WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].registerCodec(Link);

/**
 * The HTML node name
 * @static 
 * @default a
 * @readonly
 */
Link.HTML_NODE_NAME = 'a';

/**
 * The Name of element in the Wireframing editor
 * @static 
 * @default Link
 * @readonly
 */
Link.NAME = "Link";

//Global for the codec converter
window.Link = Link;

/**
 * @classdesc A HTMl link element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 50, 30)] the width, height, x and y of the ui element
 * @extends UIMedia
 */
function Link(geometry) {
    var text = 'Link';
    if(!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 50, 30)
    __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('_href', '');

    /**
     * Initialize the DOM element of the shape
     * @return {undefined}
     */
    this.initDOM = function () {
        __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].prototype.initDOM.call(this);
        var $input = this.get$node();
        $input.css('color', 'blue')
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('text-decoration', 'underline')
            .val(text);
        this.set$node($input);
    }
    return this;
}

/**
 * Create the ytext-types for the attributes of the Link
 * @param {boolean} createdByLocalUser only the local user is allowed to create the y-text object
 * @return {undefined} 
 */
Link.prototype.createShared = function(createdByLocalUser){
    __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser){
        y.share.attrs.set(this.getId()+'_href', __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default.a.Text);
    }
}

/**
 * Intialize the y-text elements for the attributes
 * @return {undefined}
 */
Link.prototype.initShared = function(){
    __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].prototype.initShared.call(this);
    this.initYText('_href');
}
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__ = __webpack_require__(1);
/**
 * @module UIElements
 */


Paragraph.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
Paragraph.prototype.constructor = Paragraph;
__WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].registerCodec(Paragraph);
window.Paragraph = Paragraph;

/**
 * The HTML node name
 * @static 
 * @default p
 * @readonly
 */
Paragraph.HTML_NODE_NAME = 'p';

/**
 * The Name of element in the Wireframing editor
 * @static 
 * @default Paragraph of Text
 * @readonly
 */
Paragraph.NAME = "Paragraph of Text";

/**
 * @classdesc A HTMl paragraph element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 150, 35)] the width, height, x and y of the ui element
 * @extends UIText
 */
function Paragraph(geometry) {
    var text = 'Some text for this paragraph';
    if(!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 150, 35);
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);

    this.initDOM = function () {
        __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].prototype.initDOM.call(this, 'textarea');
        var $node = this.get$node();
        $node.css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('overflow', 'hidden')
            .css('resize', 'none')
            .text(text);
        this.set$node($node);
    }
    return this;
}

/* harmony default export */ __webpack_exports__["a"] = (Paragraph);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__ = __webpack_require__(1);
/**
 * @module UIElements
 */




RadioButton.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
RadioButton.prototype.constructor = RadioButton;
__WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].registerCodec(RadioButton);
//Global for the codec converter
window.RadioButton = RadioButton;

/**
 * The Name in the wireframing editor
 * @static 
 * @default RadioButton
 * @readonly
 */
RadioButton.NAME = "Radio Button";

function RadioButton(geometry) {
    var text = 'Option';
    if (!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 150, 30);
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('_checked', false);
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_disabled', false);

    this.initDOM = function () {
        this.set$node
            (__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<div>')
                .css('pointer-events', 'none')
                .append(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<input>').attr('type', 'radio').attr('checked', true))
                .append(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<input>').attr('type', 'input')
                    .css('font-size', 15)
                    .css('width', this.geometry.width - 30)
                    .css('height', this.geometry.height - 10)
                    .css('background-color', 'transparent')
                    .css('border-style', 'initial')
                    .val(text)));
    }
    return this;
}
RadioButton.prototype.bindLabel = function (ytext) {
    ytext.bind(this.get$node().find('input[type="input"]')[0]);
}

RadioButton.prototype.initShared = function () {
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].prototype.initShared.call(this);
}
/* harmony default export */ __webpack_exports__["a"] = (RadioButton);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIText_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__ = __webpack_require__(1);
/*global y*/
/**
 * @module UIElements
 */




TextArea.prototype = new __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */]();
TextArea.prototype.constructor = TextArea;
__WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].registerCodec(TextArea);
window.TextArea = TextArea;

/**
 * The HTML node name
 * @static 
 * @default textarea
 * @readonly
 */
TextArea.HTML_NODE_NAME = 'textarea';

/**
 * The Name of element in the Wireframing editor
 * @static 
 * @default Multi-Line Text Area
 * @readonly
 */
TextArea.NAME = "Multi-Line Text Area";

/**
 * @classdesc A HTMl textarea element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 200, 55)] the width, height, x and y of the ui element
 * @extends UIText
 */
function TextArea(geometry) {
    var text = 'Multi-Line text input area';
    // var text = 'hallo';
    if (!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 200, 55);

    __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('_placeholder', '');
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_maxlength', '');
    this.value.setAttribute('_readonly', false);
    this.value.setAttribute('_disabled', false);
    this.value.setAttribute('_cols', '');
    this.value.setAttribute('_rows', '');
    this.initDOM = function () {
        __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].prototype.initDOM.call(this, 'textarea');
        var $node = this.get$node()
        $node.css('overflow', 'hidden')
            .css('resize', 'none')
            .text(text);
        this.set$node($node);
    }
    return this;
}
TextArea.prototype.createShared = function (createdByLocalUser) {
    __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].prototype.createShared.call(this, createdByLocalUser);
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_placeholder', __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default.a.Text);
        y.share.attrs.set(this.getId() + '_maxlength', __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default.a.Text);
        y.share.attrs.set(this.getId() + '_cols', __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default.a.Text);
        y.share.attrs.set(this.getId() + '_rows', __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default.a.Text);
    }
}

TextArea.prototype.initShared = function () {
    __WEBPACK_IMPORTED_MODULE_1__UIText_js__["a" /* default */].prototype.initShared.call(this);
    this.initYText('_placeholder');
    this.initYText('_maxlength');
    this.initYText('_cols');
    this.initYText('_rows');
}
/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__ = __webpack_require__(1);
/**
 * @module UIElements
 */



TextBox.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
TextBox.prototype.constructor = TextBox;

/**
 * The HTML node name
 * @static 
 * @default input
 * @readonly
 */
TextBox.HTML_NODE_NAME = 'input';

/**
 * The Name of element in the Wireframing editor
 * @static 
 * @default TextBox
 * @readonly
 */
TextBox.NAME = "TextBox";
var codec = __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["c" /* mxUtils */].clone(__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["k" /* mxCodecRegistry */].getCodec(__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["u" /* mxCell */]));
codec.template = new TextBox();
codec.isCellCodec   = function(){return true;};
__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["k" /* mxCodecRegistry */].register(codec);
window.TextBox = TextBox;

/**
 * @classdesc A HTMl textbox element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 120, 30)] the width, height, x and y of the ui element
 * @extends UIText
 */
function TextBox(geometry) {
    var text = 'Some Text...';
    if(!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 120, 30);
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.setAttribute('_autofocus', false);
    this.setAttribute('_disabled', false);
    this.setAttribute('_autocomplete', 'off');
    this.getComboAttrMap().addComboAttr('_autocomplete',  ['off', 'on']);
    this.initDOM = function(){
        __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].prototype.initDOM.call(this);
        var $node =this.get$node()
        $node.val(text);
        this.set$node($node);
    }
    return this;
}
TextBox.prototype.initShared = function(){
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].prototype.initShared.call(this);
}   
/* harmony default export */ __webpack_exports__["a"] = (TextBox);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__ = __webpack_require__(1);
/**
 * @module UIElements
 */



TextNode.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
TextNode.prototype.constructor = TextNode;
__WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].registerCodec(TextNode);
//Global for the codec converter
window.TextNode = TextNode;

/**
 * The HTML node name
 * @static 
 * @default text
 * @readonly
 */
TextNode.HTML_NODE_NAME = 'text';

/**
 * The Name in the wireframing editor
 * @static 
 * @default TextNode
 * @readonly
 */
TextNode.NAME = "Text Node";

/**
 * @classdesc A HTMl textnode element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 75, 30)] the width, height, x and y of the ui element
 * @extends UIText
 */
function TextNode(geometry) {
    var text = 'text';
    if(!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 75, 30);
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);

    this.initDOM = function(element){
        __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].prototype.initDOM.call(this, element);
        var $node = this.get$node();
        $node.css('background-color', 'transparent')
            .css('border-style', 'initial')
            .val(text);
        this.set$node($node);
    }

    return this;
}


/* harmony default export */ __webpack_exports__["a"] = (TextNode);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UIMedia_js__ = __webpack_require__(35);
/*global y*/
/**
 * @module UIElements
 */




window.VideoPlayer = VideoPlayer;
VideoPlayer.prototype = new __WEBPACK_IMPORTED_MODULE_2__UIMedia_js__["a" /* default */]();
VideoPlayer.prototype.constructor = VideoPlayer;
__WEBPACK_IMPORTED_MODULE_2__UIMedia_js__["a" /* default */].registerCodec(VideoPlayer);

/**
 * The HTML node name
 * @static 
 * @default video
 * @readonly
 */
VideoPlayer.HTML_NODE_NAME = 'video';

/**
 * The Name in the wireframing editor
 * @static 
 * @default VideoPlayer
 * @readonly
 */
VideoPlayer.NAME = "Video Player";

/**
 * @classdesc The Video Player HTML 5 element
 * @constructor
 * @param {mxGeometry} [geometry=new mxGeometry(0, 0, 200, 100)] the width, height, x and y of the ui element
 * @extends UIMedia
 */
function VideoPlayer(geometry) {
    if(!geometry)
        geometry = new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["t" /* mxGeometry */](0, 0, 200, 100);
    //style in html5stencils.xml and registered in the editor
    var style = __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["i" /* mxConstants */].STYLE_SHAPE + "=VideoPlayer;" +
        __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR + "=none;" +
        __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR + '=grey;' +
        __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["i" /* mxConstants */].STYLE_ASPECT + '=fixed;' +
        __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["i" /* mxConstants */].STYLE_EDITABLE + "=0;";

    __WEBPACK_IMPORTED_MODULE_2__UIMedia_js__["a" /* default */].call(this, geometry, style);
    this.value.setAttribute('_poster', '');
}

VideoPlayer.prototype.createShared = function(createdByLocalUser){
    __WEBPACK_IMPORTED_MODULE_2__UIMedia_js__["a" /* default */].prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser)
        y.share.attrs.set(this.getId()+'_poster', __WEBPACK_IMPORTED_MODULE_0__node_modules_yjs_dist_y_js___default.a.Text);
}

VideoPlayer.prototype.initShared = function(){
    __WEBPACK_IMPORTED_MODULE_2__UIMedia_js__["a" /* default */].prototype.initShared.call(this);
    this.initYText('_poster');
}
/* harmony default export */ __webpack_exports__["a"] = (VideoPlayer);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WireframeToModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelToWireframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__ = __webpack_require__(1);
/**
 * @module FrontendComponentMapper
 */




/**
 * Map a wireframe model to a CAE frontend component model
 * @param {WireframeModel} wireframeModel the wireframe model to transform to a SyncMeta model 
 * @param {Object} vls the vls of the metamodel
 * @return {Object} the CAE frontend component model
 */
function WireframeToModel(wireframeModel, vls) {
    var htmlAttributesMap = {}, widgetAttributesMap = {};
    function getAttributeMap(attributes){
        var map = {};
        for(var attrId in attributes){
            if(attributes.hasOwnProperty(attrId)){
                var attr = attributes[attrId];
                map[attr.key] = attrId;
            }
        }
        return map;
    }
    for(var nodeId in vls.nodes){
        if(vls.nodes.hasOwnProperty(nodeId)){
            var nodeType = vls.nodes[nodeId];
            switch(nodeType.label){
                case 'HTML Element':
                    htmlAttributesMap = getAttributeMap(nodeType.attributes);
                break;
                case 'Widget':
                    widgetAttributesMap = getAttributeMap(nodeType.attributes);
                break;
            }
        }
    }
    var model = {
        attributes: {},
        nodes: {},
        edges: {}
    };
    var attributesTpl = '{"label":{"id":"modelAttributes[label]","name":"Label","value":{"id":"modelAttributes[label]","name":"Label","value":"Model Attributes"}},"left":0,"top":0,"width":0,"height":0,"zIndex":0,"type":"ModelAttributesNode","attributes":{"modelAttributes[type]":{"id":"modelAttributes[type]","name":"type","value":{"id":"modelAttributes[type]","name":"type","value":"frontend-component"},"option":"frontend-component"},"modelAttributes[name]":{"id":"modelAttributes[name]","name":"name","value":{"id":"modelAttributes[name]","name":"name","value":""}},"modelAttributes[version]":{"id":"modelAttributes[version]","name":"version","value":{"id":"modelAttributes[version]","name":"version","value":0}}}}';
    model.attributes = JSON.parse(attributesTpl);

    var nodeTpl = '{"label":<%=labelAttr%>, "left": 4500, "top":4500, "width":100, "height":100, "zIndex": 1, "type":"<%=type%>", "attributes":<%=attributes%>}';
    var attrTpl = '{"id":"<%=id%>[<%=attrName%>]", "name":"<%=attrName%>", "value":{"id":"<%=id%>[<%=attrName%>]", "name":"<%=attrName%>", "value":<%=value%>}<% if(option) {%> ,"option":<%=value%><%}%> }';
    var edgeTpl = '{"label":<%=labelAttr%>, "source":"<%=srcId%>", "target":"<%=targetId%>", "attributes":{}, "type":"<%=type%>"}';
    var attrCompiled = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.template(attrTpl);
    var nodeCompiled = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.template(nodeTpl);
    var edgeCompiled = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.template(edgeTpl);

    //Initialize the root Widget node
    var widgetNodeId;
    if(wireframeModel.getMeta().hasAttribute('id'))
        widgetNodeId = wireframeModel.getMeta().getAttribute('id');
    else
        widgetNodeId = __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].GUID();

    var label;
    var attributes = {};
    for (var i = 0; i < wireframeModel.getMeta().attributes.length; i++) {
        var attr = wireframeModel.getMeta().attributes[i];
        var attrName = attr.name[0] === '_' ? attr.name.slice(1) : attr.name;
        var json = attrCompiled({
            id: widgetNodeId,
            attrName: attrName,
            value: '"' + attr.value + '"',
            option: false
        });
        if (attrName === 'name')
            label = json;
        var id = widgetAttributesMap[attrName];
        if(id)
            attributes[id] = JSON.parse(json);

    }
    if(!label)
        label = attrCompiled({
            id: widgetNodeId,
            attrName: 'label',
            value: '""',
            option: false
        });
    var node = JSON.parse(nodeCompiled({
        type: 'Widget',
        labelAttr: label,
        attributes: JSON.stringify(attributes)
    }));
    model.nodes[widgetNodeId] = node;

    function mapHTMLElement(cell) {
        //Create the HTML Elements node     
        var label = attrCompiled({
            id: cell.id,
            attrName: 'label',
            value: '"' + cell.value.getAttribute('label') + '"',
            option: false
        });
        var attributes = {};
        attributes[htmlAttributesMap['type']] = JSON.parse(attrCompiled({
            id: cell.id,
            attrName: 'type',
            value: '"' + cell.constructor.HTML_NODE_NAME + '"',
            option: true
        }));
        attributes[htmlAttributesMap['id']] = JSON.parse(attrCompiled({
            id: cell.id,
            attrName: 'id',
            value: '""',
            option: false
        }));
        attributes[htmlAttributesMap['static']] = JSON.parse(attrCompiled({
            id: cell.id,
            attrName: 'static',
            value: false,
            option: false
        }));
        var shared = false;
        if (cell.overlays) {
            for (var i = 0; i < cell.overlays.length; i++) {
                var overlay = cell.overlays[i];
                if (overlay.constructor.name === 'SharedTag') {
                    shared = true;
                    break;
                }
            }
        }
        attributes[htmlAttributesMap['collaborative']] = JSON.parse(attrCompiled({
            id: cell.id,
            attrName: 'collaborative',
            value: shared,
            option: false
        }));
        var node = JSON.parse(nodeCompiled({
            type: 'HTML Element',
            labelAttr: label,
            attributes: JSON.stringify(attributes)
        }));
        model.nodes[cell.id] = node;

        var edgeId = __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].GUID();
        var edgeLabel = attrCompiled({
            id: edgeId,
            attrName: 'label',
            value: '""',
            option: false
        });
        var edge = JSON.parse(edgeCompiled({
            type: 'Widget to HTML Element',
            labelAttr: edgeLabel,
            srcId: widgetNodeId,
            targetId: cell.id
        }));

        if (cell.parent.id != '1') {
            var childEdgeId = __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].GUID();
            var childEdgeLabel = attrCompiled({
                id: childEdgeId,
                attrName: 'label',
                value: '""',
                option: false
            });
            var childEdge = JSON.parse(edgeCompiled({
                type: 'hasChild',
                labelAttr: childEdgeLabel,
                srcId: cell.parent.id,
                targetId: cell.id
            }));
            model.edges[childEdgeId] = childEdge;
        }
        model.edges[edgeId] = edge;
    }

    function recursion(parent) {
        for (var i = 0; parent.children && i < parent.children.length; i++) {
            var cell = parent.children[i];
            mapHTMLElement(cell);
            if (cell.children)
                recursion(cell);
        }

    }
    recursion(wireframeModel.root.children[0]);

    return model;
}

/**
 * Transform a frontend component model from syncmeta to a wireframe XML
 * @param {Object} model the front end component model 
 * @param {mxEditor} editor the editor
 * @return {XMLDocument} the wireframe model as XML
 */
function ModelToWireframe(model, editor) {

    var xml = '<WireframeMeta><WireframeModel><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></WireframeModel></WireframeMeta>';
    var doc = __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__["c" /* mxUtils */].parseXml(xml);
    var wireframe = doc.documentElement;
    var root = wireframe.getElementsByTagName('root')[0];
    
    var childMap = {};
    for (var key in model.edges) {
        if (model.edges.hasOwnProperty(key)) {
            var edge = model.edges[key];
            if (edge.type === 'hasChild') {
                childMap[edge.target] = edge.source;
            }
        }
    }

    for (var key in model.nodes) {
        if (model.nodes.hasOwnProperty(key)) {
            var node = model.nodes[key];
            switch(node.type){
                case 'Widget':{
                    wireframe.setAttribute('height', __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].GetValueFormAttributes(node, 'height'));
                    wireframe.setAttribute('width', __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].GetValueFormAttributes(node, 'width'));
                    wireframe.setAttribute('id', key);
                    break;
                }
                case 'HTML Element':{
                    var type = __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].GetValueFormAttributes(node, 'type');
                    var Ctor = editor.getUIComponentFromHTMLName(type);
                    if(Ctor){
                        var ui = new Ctor();
                        ui.setId(key);
                        var doc = __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__["c" /* mxUtils */].parseXml(ui.toXML());
                        var uiObj = doc.documentElement;
                        
                        //geometry
                        uiObj.lastElementChild.firstChild.setAttribute('x', 0);
                        uiObj.lastElementChild.firstChild.setAttribute('y', 0);

                        //tagRoot
                        var collaborative = __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].GetValueFormAttributes(node, 'collaborative');
                        if(collaborative){
                            var sharedTagXml = '<tagObj id="'+ key + '_'+ __WEBPACK_IMPORTED_MODULE_1__misc_Util_js__["a" /* default */].GUID() +'" parent="#" tagType="Shared" isUnique="true"/>';
                            var tagObj = __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__["c" /* mxUtils */].parseXml(sharedTagXml).documentElement;
                            uiObj.firstChild.appendChild(tagObj);
                        }

                        if(childMap.hasOwnProperty(key))
                            uiObj.lastElementChild.setAttribute('parent', childMap[key]);
                        else uiObj.lastElementChild.setAttribute('parent', '1');
                        
                        if(ui.constructor.name === 'DivContainer')
                            root.prepend(uiObj);
                        else
                            root.appendChild(uiObj);
                    }
                    break;
                }
            }
        }
    }

   //return mxUtils.getPrettyXml(wireframe);
   return __WEBPACK_IMPORTED_MODULE_2__misc_mxExport_js__["c" /* mxUtils */].getXml(wireframe);
}



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PropertyEditor_js__ = __webpack_require__(19);
/**
 * @module Overlays
 */



__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(EditOverlay, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCellOverlay */]);

/**
 * The overlay to open the property editor
 * @constructor
 * @param {string} imageURL the url to the image of overlay
 * @param {*} cursor the cursor
 * @extends mxCellOverlay
 */
function EditOverlay(imageURL, cursor) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCellOverlay */].call(this, new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["h" /* mxImage */](__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.FLASH || imageURL, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].TAG.SIZE, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].TAG.SIZE), 'Edit Attributes', __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_LEFT, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_BOTTOM, new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxPoint */](0, -15), cursor);

    /**
     * Bind the click event to the overlay to open the property editor
     * @param  {Wireframe} graph the wireframe
     * @return {undefined}
     */
    this.bindClickEvent = function (graph) {
        this.addListener(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxEvent */].CLICK, function (sender, event) {
            var mouseEvent = event.getProperty('event');
            new __WEBPACK_IMPORTED_MODULE_2__PropertyEditor_js__["a" /* default */](event.getProperty('cell'), graph, mouseEvent.x, mouseEvent.y);
        })
    };
}

/* harmony default export */ __webpack_exports__["a"] = (EditOverlay);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__ = __webpack_require__(3);
/**
 * @module Overlays
 */


__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(SyncMetaSelectOverlay, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCellOverlay */]);

/**
 * The overlay to display if the node was selected in Syncmeta
 * @constructor
 * @param {string} imageURL the url to the image of overlay
 * @param {mxPoint} offset the offset of the overlay 
 * @param {*} cursor the cursor
 * @extends mxCellOverlay
 */
function SyncMetaSelectOverlay(imageURL, offset, cursor) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCellOverlay */].call(this, new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["h" /* mxImage */](__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.SYNCMETA || imageURL, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].TAG.SIZE, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].TAG.SIZE), 'Currently Selected in the Syncmeta Canvas', __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_LEFT, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_BOTTOM, offset, cursor);
}

/* harmony default export */ __webpack_exports__["a"] = (SyncMetaSelectOverlay);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);

/**
 * @module Shapes
 */

/**
 * @classdesc The shape for the AudioPlayer element
 * @constructor
 * @param {mxRectangle} bounds the bounds of the shape
 * @param {String} fill the fill color
 * @param {String} stroke the stroke type for the shape
 * @param {Integer} strokewidth the width of the stroke
 * @extends mxShape
 * @see AudioPlayer
 */
function AudioShape(bounds, fill, stroke, strokewidth) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this);
    this.bounds = bounds;
    this.fill = "white";
    this.stroke = stroke;
    this.strokewidth = (strokewidth != null) ? strokewidth : 1;
    this.barPos = 20;
    this.barHeight = 30;
};

/**
 * Extends mxShape.
 */
__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(AudioShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);

AudioShape.prototype.cst = {
    FILL_COLOR2: 'fillColor2',
    TEXT_COLOR: 'textColor',
    STROKE_COLOR2: 'strokeColor2',
    STROKE_COLOR3: 'strokeColor3',
    SHAPE: 'AudioPlayer',
    BAR_POS: 'barPos',
    BAR_HEIGHT: 'barHeight'
};

/**
 * Function: paintVertexShape
 * 
 * Paints the vertex shape.
 * 
 * @return {undefined}
 */
AudioShape.prototype.paintVertexShape = function (c, x, y, w, h) {
    var bgColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR, 'white');
    var buttonColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.FILL_COLOR2, 'grey');
    var frameColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR, 'grey');
    var filledColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.STROKE_COLOR2, 'grey');
    var emptyColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.STROKE_COLOR3, 'grey');
    var barHeight = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.BAR_HEIGHT, 25);

    w = Math.max(w, barHeight);
    h = Math.max(h, barHeight);

    c.translate(x, y);
    this.background(c, x, y, w, h, bgColor, frameColor);
    c.setShadow(false);
    this.otherShapes(c, x, y, w, h, buttonColor, frameColor, filledColor, emptyColor, h);
};

AudioShape.prototype.background = function (c, x, y, w, h, bgColor, frameColor) {   
    c.setFillColor(bgColor);
    c.setStrokeColor(frameColor);
    c.begin();
    c.moveTo(0, 0);
    c.lineTo(w, 0);
    c.lineTo(w, h);
    c.lineTo(0, h);
    c.close();
    c.fillAndStroke();
};

/**
 * @param  {} c
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number} w
 * @param  {Number} h
 * @param  {} buttonColor
 * @param  {} frameColor
 * @param  {} filledColor
 * @param  {} emptyColor
 * @param  {} barHeight
 * @return {undefined}
 */
AudioShape.prototype.otherShapes = function (c, x, y, w, h, buttonColor, frameColor, filledColor, emptyColor, barHeight) {
    var barPos = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.BAR_POS, '20');
    barPos = Math.max(0, barPos);
    barPos = Math.min(100, barPos);
    var strokeWidth = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKEWIDTH, '1');
    var buttonR = 8;
    var barY = 0 ;

    var barMin = buttonR;
    var barMax = w - buttonR;
    var barRange = barMax - barMin;
    var realBarPos = barRange * barPos / 100;
    var barEnd = barMin + realBarPos;

    //progress bar
    c.setStrokeColor(filledColor);
    c.begin();
    c.moveTo(0, barY);
    c.lineTo(barEnd, barY);
    c.stroke();
    c.setStrokeColor(emptyColor);
    c.begin();
    c.moveTo(barEnd, barY);
    c.lineTo(w, barY);
    c.stroke();

    //progress bar button
    c.setStrokeColor(frameColor);
    c.begin();
    c.ellipse(barEnd - buttonR, barY - buttonR, 2 * buttonR, 2 * buttonR);
    c.fillAndStroke();

    c.begin();
    c.setStrokeWidth(strokeWidth / 2);
    c.ellipse(barEnd - buttonR * 0.5, barY - buttonR * 0.5, buttonR, buttonR);
    c.fillAndStroke();
    c.setStrokeWidth(strokeWidth);

    var iconSize = barHeight * 0.3;
    var iconY = h - (barHeight + iconSize) * 0.5;
    var iconX = barHeight * 0.3;
    c.setFillColor(buttonColor);
    c.setStrokeColor(buttonColor);

    //play icon
    c.begin();
    c.moveTo(iconX, iconY);
    c.lineTo(iconX + iconSize, iconY + iconSize * 0.5);
    c.lineTo(iconX, iconY + iconSize);
    c.close();
    c.fillAndStroke();

    //volume icon
    var speakerX = barHeight;
    var speakerY = h - barHeight;
    c.moveTo(speakerX + barHeight * 0.05, speakerY + barHeight * 0.4);
    c.lineTo(speakerX + barHeight * 0.15, speakerY + barHeight * 0.4);
    c.lineTo(speakerX + barHeight * 0.3, speakerY + barHeight * 0.25);
    c.lineTo(speakerX + barHeight * 0.3, speakerY + barHeight * 0.75);
    c.lineTo(speakerX + barHeight * 0.15, speakerY + barHeight * 0.6);
    c.lineTo(speakerX + barHeight * 0.05, speakerY + barHeight * 0.6);
    c.close();
    c.fillAndStroke();

    c.begin();
    c.moveTo(speakerX + barHeight * 0.4, speakerY + barHeight * 0.35);
    c.arcTo(barHeight * 0.2, barHeight * 0.3, 0, 0, 1, speakerX + barHeight * 0.4, speakerY + barHeight * 0.65);
    c.moveTo(speakerX + barHeight * 0.425, speakerY + barHeight * 0.25);
    c.arcTo(barHeight * 0.225, barHeight * 0.35, 0, 0, 1, speakerX + barHeight * 0.425, speakerY + barHeight * 0.75);
    c.stroke();

    //fullscreen button
    var screenX = w - barHeight * 1.3;
    c.begin();
    c.moveTo(screenX + barHeight * 0.1, speakerY + barHeight * 0.4);
    c.lineTo(screenX + barHeight * 0.1, speakerY + barHeight * 0.3);
    c.lineTo(screenX + barHeight * 0.25, speakerY + barHeight * 0.3);

    c.moveTo(screenX + barHeight * 0.1, speakerY + barHeight * 0.6);
    c.lineTo(screenX + barHeight * 0.1, speakerY + barHeight * 0.7);
    c.lineTo(screenX + barHeight * 0.25, speakerY + barHeight * 0.7);

    c.moveTo(screenX + barHeight * 0.9, speakerY + barHeight * 0.4);
    c.lineTo(screenX + barHeight * 0.9, speakerY + barHeight * 0.3);
    c.lineTo(screenX + barHeight * 0.75, speakerY + barHeight * 0.3);

    c.moveTo(screenX + barHeight * 0.9, speakerY + barHeight * 0.6);
    c.lineTo(screenX + barHeight * 0.9, speakerY + barHeight * 0.7);
    c.lineTo(screenX + barHeight * 0.75, speakerY + barHeight * 0.7);
    c.stroke();

    var textColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.TEXT_COLOR, 'grey');
    c.begin();
    c.setFontSize(barHeight * 0.5);
    c.setFontColor(textColor);
    c.text(barHeight * 1.9, h - barHeight * 0.45, 0, 0, '0:42/4:23', __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_LEFT, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_MIDDLE, 0, null, 0, 0, 0);
};

/* harmony default export */ __webpack_exports__["a"] = (AudioShape);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);

/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(ButtonShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);

/**
 * @classdesc The shape for the Button-element
 * @constructor
 * @extends mxShape
 * @see Button
 */
function ButtonShape(){
    var str = '<shape name="button" h="25" w="171" aspect="1"><foreground><fontsize size="50"/><text str="Button" x="85" y="10" align="center" valign="middle"/></foreground><background><strokecolor color="#a4a4a4"/><fillcolor color="#e3e3e4"/><roundrect x="0" y="0" w="171" h="25" arcsize="10.851851851851851"/><fillstroke/></background></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (ButtonShape);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);

/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(CheckboxShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);

/**
 * @classdesc The shape for the Checkbox-element
 * @constructor
 * @extends mxShape
 * @see Checkbox
 */
function CheckboxShape(){
    var str = '<shape name="checkbox" w="100" h="30" aspect="1"><foreground><fontsize size="25"/><text str="Checkbox" x="25" y="25"/><fillstroke/><strokewidth width="5"/><path><move x="8" y="45"/><line x="12" y="50"/><line x="20" y="30"/></path><fillstroke/></foreground><background><strokecolor color="black"/><fillcolor color="#e3e3e4"/><rect x="0" y="25" w="25" h="30"/><fillstroke/></background></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (CheckboxShape);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(DefaultShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);
/**
 * @classdesc The default shape for the UIObject-element
 * @constructor
 * @extends mxShape
 * @see UIObject
 */
function DefaultShape(){
    var str = '<shape name="default" w="128" h="128"><background><fillcolor color="white"/><strokecolor color="black"/><rect x="0" y="0" w="128" h="128"/><fillstroke/><path><move x="0" y="0"/><line x="128" y="128"/></path><fillstroke/><path><move x="128" y="0"/><line x="0" y="128"/></path><fillstroke/></background></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (DefaultShape);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__ = __webpack_require__(3);



/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(ImageShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);
/**
 * @classdesc The shape for the Image-element
 * @constructor
 * @extends mxShape
 * @see Image
 */
function ImageShape(){
    var str = '<shape name="image" w="128" h="128" aspect="4/3"><background><fillcolor color="none"/><strokecolor color="none"/><rect x="0" y="0" w="128" h="128"/><fillstroke/></background><foreground><image src="'+ __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.IMAGE_SHAPE +'" x="0" y="0" w="128" h="128"/></foreground></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (ImageShape);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(LinkShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);
/**
 * @classdesc The shape for the Link-element
 * @constructor
 * @extends mxShape
 * @see Link
 */
function LinkShape(){
    var str = '<shape name="link" h="25" w="50" aspect="1" ><foreground><fontsize size="17"/><fontcolor color="#0000ff"/><strokecolor color="#0000ff"/><text str="Link" x="25" y="12" align="center" valign="middle"/><path><move x="8" y="20"/><line x="42" y="20"/></path><fillstroke/></foreground></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (LinkShape);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(ParagraphShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);
/**
 * @classdesc The shape for the Paragraph-element
 * @constructor
 * @extends mxShape
 * @see Paragraph
 */
function ParagraphShape(){
    var str = '<shape name="paragraph" h="25" w="171" aspect="1"><foreground><fontsize size="5"/><fontstyle style="2"/><text str="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." x="0" y="0" /><text str="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore " x="0" y="6" /><text str="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." x="0" y="12" /><text str="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." x="0" y="18" /><text str="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore " x="0" y="24" /><text str="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." x="0" y="30" /></foreground></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (ParagraphShape);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(RadioButtonShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);
/**
 * @classdesc The shape for the Radio-element
 * @constructor
 * @extends mxShape
 * @see UIObject
 */
function RadioButtonShape(){
    var str = '<shape name="radio" w="100" h="30" aspect="1"><foreground><fontsize size="25"/><text str="RadioBtn" x="21" y="23"/><strokecolor color="black"/><fillcolor color="black"/><ellipse x="5" y="32" w="10" h="10" /><fillstroke/></foreground><background><strokecolor color="black"/><fillcolor color="#e3e3e4"/><ellipse x="0" y="25" w="20" h="25" /><fillstroke/></background></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (RadioButtonShape);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(TextAreaShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);
/**
 * @classdesc The shape for the TextArea-element
 * @constructor
 * @extends mxShape
 * @see TextArea
 */
function TextAreaShape(){
    var str = '<shape name="textarea" h="70" w="171" aspect="1"><foreground><fontsize size="25"/><text str="Mulit-line input" x="0" y="0"/><text str="Text Area" x="0" y="26"/></foreground><background><strokecolor color="grey"/><fillcolor color="white"/><rect x="0" y="0" w="171" h="70"/><fillstroke/></background></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (TextAreaShape);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(TextBoxShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);
/**
 * @classdesc The shape for the TextBox-element
 * @constructor
 * @extends mxShape
 * @see TextBox
 */
function TextBoxShape(){
    var str = '<shape name="textbox" h="70" w="171" aspect="1"><foreground><fontsize size="50"/><text str="TextBox" x="0" y="0"/></foreground><background><strokecolor color="grey"/><fillcolor color="white"/><rect x="0" y="0" w="171" h="70"/><fillstroke/></background></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (TextBoxShape);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


/**
 * @module Shapes
 */

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(TextNodeShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);
/**
 * @classdesc The shape for the TextNode-element
 * @constructor
 * @extends mxShape
 * @see TextNode
 */
function TextNodeShape(){
    var str = '<shape name="textnode" h="25" w="171" aspect="1"><foreground><fontsize size="50"/><fontstyle style="1"/><text str="Text" x="85" y="10" align="center" valign="middle"/></foreground></shape>';
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].parseXml(str);
    var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["w" /* mxStencil */](xml.documentElement);
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this, stencil);
}
/* harmony default export */ __webpack_exports__["a"] = (TextNodeShape);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


/**
 * @module Shapes
 */

/**
 * @classdesc The shape for the VideoPlayer element
 * @constructor
 * @param {mxRectangle} bounds the bounds of the shape
 * @param {String} fill the fill color
 * @param {String} stroke the stroke type for the shape
 * @param {Integer} strokewidth the width of the stroke
 * @extends mxShape
 * @see VideoPlayer
 */
function VideoShape(bounds, fill, stroke, strokewidth) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */].call(this);
    this.bounds = bounds;
    this.fill = "white";
    this.stroke = stroke;
    this.strokewidth = (strokewidth != null) ? strokewidth : 1;
    this.barPos = 20;
    this.barHeight = 30;
};

/**
 * Extends mxShape.
 */
__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(VideoShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxShape */]);

VideoShape.prototype.cst = {
    FILL_COLOR2: 'fillColor2',
    TEXT_COLOR: 'textColor',
    STROKE_COLOR2: 'strokeColor2',
    STROKE_COLOR3: 'strokeColor3',
    SHAPE: 'VideoPlayer',
    BAR_POS: 'barPos',
    BAR_HEIGHT: 'barHeight'
};

/**
 * Function: paintVertexShape
 * 
 * Paints the vertex shape.
 */
VideoShape.prototype.paintVertexShape = function (c, x, y, w, h) {
    var bgColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_FILLCOLOR, 'white');
    var buttonColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.FILL_COLOR2, 'grey');
    var frameColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKECOLOR, 'grey');
    var filledColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.STROKE_COLOR2, 'grey');
    var emptyColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.STROKE_COLOR3, 'grey');
    var barHeight = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.BAR_HEIGHT, 30);

    w = Math.max(w, 5 * barHeight);
    h = Math.max(h, barHeight + 10);

    c.translate(x, y);
    this.foreground(c, x, y, w, h, bgColor, frameColor);
    c.setShadow(false);
    this.otherShapes(c, x, y, w, h, buttonColor, frameColor, filledColor, emptyColor, barHeight);

    //this.background(c, x, y, w, h);
};

VideoShape.prototype.foreground = function (c, x, y, w, h, bgColor, frameColor) {
    c.setFillColor(bgColor);
    c.setStrokeColor(frameColor);
    c.begin();
    c.moveTo(0, 0);
    c.lineTo(w, 0);
    c.lineTo(w, h);
    c.lineTo(0, h);
    c.close();
    c.fillAndStroke();
};

/*VideoShape.prototype.background = function (c, x, y, w, h) {
    c.setFillColor('none');
    c.setStrokeColor('none');
    c.rect(x, y, w, h);
    c.fillAndStroke();
}*/

VideoShape.prototype.otherShapes = function (c, x, y, w, h, buttonColor, frameColor, filledColor, emptyColor, barHeight) {
    var barPos = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.BAR_POS, '20');
    barPos = Math.max(0, barPos);
    barPos = Math.min(100, barPos);

    var strokeWidth = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].STYLE_STROKEWIDTH, '1');
    var buttonR = 8;
    var barY = h - barHeight;

    var barMin = buttonR;
    var barMax = w - buttonR;
    var barRange = barMax - barMin;
    var realBarPos = barRange * barPos / 100;
    var barEnd = barMin + realBarPos;
    
    //camera icon
    var camerIconX =  w/2 - w/4.5;
    var cameraIconY = h/2 + h/12;
    var cameraIconWidth = w * 0.3;
    var cameraIconHeight = (h - barHeight) * 0.5;
    var offset = -(cameraIconHeight*0.5);
    c.setStrokeColor(filledColor);
    c.setFillColor('#808080');
    c.begin();

    c.moveTo(camerIconX, cameraIconY);

    c.lineTo(camerIconX+cameraIconWidth, cameraIconY);
    c.lineTo(camerIconX+cameraIconWidth, cameraIconY-cameraIconHeight);
    c.lineTo(camerIconX, cameraIconY-cameraIconHeight);
    c.lineTo(camerIconX, cameraIconY);

    c.moveTo(camerIconX+cameraIconWidth +offset, cameraIconY-(cameraIconHeight/2));
    
    c.lineTo(camerIconX+cameraIconWidth+cameraIconHeight + offset, cameraIconY);
    c.lineTo(camerIconX+cameraIconWidth+cameraIconHeight + offset, cameraIconY-cameraIconHeight);
    c.lineTo(camerIconX+cameraIconWidth+offset, cameraIconY-(cameraIconHeight/2));
    c.fillAndStroke();    

    //progress bar
    c.setFillColor('none');
    c.setStrokeColor(filledColor);
    c.begin();
    c.moveTo(0, barY);
    c.lineTo(barEnd, barY);
    c.stroke();
    c.setStrokeColor(emptyColor);
    c.begin();
    c.moveTo(barEnd, barY);
    c.lineTo(w, barY);
    c.stroke();

    //progress bar button
    c.setStrokeColor(frameColor);
    c.begin();
    c.ellipse(barEnd - buttonR, barY - buttonR, 2 * buttonR, 2 * buttonR);
    c.fillAndStroke();

    c.begin();
    c.setStrokeWidth(strokeWidth / 2);
    c.ellipse(barEnd - buttonR * 0.5, barY - buttonR * 0.5, buttonR, buttonR);
    c.fillAndStroke();
    c.setStrokeWidth(strokeWidth);

    var iconSize = barHeight * 0.3;
    var iconY = h - (barHeight + iconSize) * 0.5;
    var iconX = barHeight * 0.3;
    c.setFillColor(buttonColor);
    c.setStrokeColor(buttonColor);

    //play icon
    c.begin();
    c.moveTo(iconX, iconY);
    c.lineTo(iconX + iconSize, iconY + iconSize * 0.5);
    c.lineTo(iconX, iconY + iconSize);
    c.close();
    c.fillAndStroke();

    //volume icon
    var speakerX = barHeight;
    var speakerY = h - barHeight;
    c.moveTo(speakerX + barHeight * 0.05, speakerY + barHeight * 0.4);
    c.lineTo(speakerX + barHeight * 0.15, speakerY + barHeight * 0.4);
    c.lineTo(speakerX + barHeight * 0.3, speakerY + barHeight * 0.25);
    c.lineTo(speakerX + barHeight * 0.3, speakerY + barHeight * 0.75);
    c.lineTo(speakerX + barHeight * 0.15, speakerY + barHeight * 0.6);
    c.lineTo(speakerX + barHeight * 0.05, speakerY + barHeight * 0.6);
    c.close();
    c.fillAndStroke();

    c.begin();
    c.moveTo(speakerX + barHeight * 0.4, speakerY + barHeight * 0.35);
    c.arcTo(barHeight * 0.2, barHeight * 0.3, 0, 0, 1, speakerX + barHeight * 0.4, speakerY + barHeight * 0.65);
    c.moveTo(speakerX + barHeight * 0.425, speakerY + barHeight * 0.25);
    c.arcTo(barHeight * 0.225, barHeight * 0.35, 0, 0, 1, speakerX + barHeight * 0.425, speakerY + barHeight * 0.75);
    c.stroke();

    //fullscreen button
    var screenX = w - barHeight * 1.3;
    c.begin();
    c.moveTo(screenX + barHeight * 0.1, speakerY + barHeight * 0.4);
    c.lineTo(screenX + barHeight * 0.1, speakerY + barHeight * 0.3);
    c.lineTo(screenX + barHeight * 0.25, speakerY + barHeight * 0.3);

    c.moveTo(screenX + barHeight * 0.1, speakerY + barHeight * 0.6);
    c.lineTo(screenX + barHeight * 0.1, speakerY + barHeight * 0.7);
    c.lineTo(screenX + barHeight * 0.25, speakerY + barHeight * 0.7);

    c.moveTo(screenX + barHeight * 0.9, speakerY + barHeight * 0.4);
    c.lineTo(screenX + barHeight * 0.9, speakerY + barHeight * 0.3);
    c.lineTo(screenX + barHeight * 0.75, speakerY + barHeight * 0.3);

    c.moveTo(screenX + barHeight * 0.9, speakerY + barHeight * 0.6);
    c.lineTo(screenX + barHeight * 0.9, speakerY + barHeight * 0.7);
    c.lineTo(screenX + barHeight * 0.75, speakerY + barHeight * 0.7);
    c.stroke();

    var textColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.TEXT_COLOR, 'grey');
    c.begin();
    c.setFontSize(barHeight * 0.5);
    c.setFontColor(textColor);
    c.text(barHeight * 1.9, h - barHeight * 0.45, 0, 0, '1:20/6:23', __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_LEFT, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxConstants */].ALIGN_MIDDLE, 0, null, 0, 0, 0);
};

/* harmony default export */ __webpack_exports__["a"] = (VideoShape);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AbstractTag_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TagRegistry_js__ = __webpack_require__(10);
/*global y*/
/**
 * @module Tags
 */







__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(GenericTag, __WEBPACK_IMPORTED_MODULE_1__AbstractTag_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__AbstractTag_js__["a" /* default */].registerCodec(GenericTag);

/**
 * @classdesc A generic tag class that represents a tag defined in the VLS
 * @constructor
 * @extends AbstractTag
 * @param {UIControl | AbstractTag} cell a tag or a ui element
 * @param {*} offset the offset
 * @param {String} className the node class as defined in the VLS
 */
function GenericTag(cell, offset, className) {

    var reg;
    try{
        reg = __WEBPACK_IMPORTED_MODULE_4__TagRegistry_js__["a" /* default */].get(className);
    }
    catch(e){
        reg = null;
    }
            
    if (reg)
        __WEBPACK_IMPORTED_MODULE_1__AbstractTag_js__["a" /* default */].call(this, cell, new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["h" /* mxImage */](reg.image, __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].TAG.SIZE, __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].TAG.SIZE), className, offset);
    else
        __WEBPACK_IMPORTED_MODULE_1__AbstractTag_js__["a" /* default */].call(this, cell, new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["h" /* mxImage */](__WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].IMAGES.DEFAULT_TAG, __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].TAG.SIZE, __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].TAG.SIZE), className, offset);


    this.tagObj.setAttribute('tagType', className);

    this.initAttributes = function () {
        var reg = __WEBPACK_IMPORTED_MODULE_4__TagRegistry_js__["a" /* default */].get(this.tagObj.getAttribute('tagType'));
        for (var attrKey in reg.attrs) {
            var type = reg.attrs[attrKey];
            if (type === 'string')
                this.tagObj.setAttribute('_' + attrKey, '');
            else if (type === 'boolean')
                this.tagObj.setAttribute('_' + attrKey, true);
            else {
                this.tagObj.setAttribute('_' + attrKey, type[0]);
                this.getComboAttrMap().addComboAttr('_' + attrKey, type);
            }
        }
    }

    this.createShared = function (createdByLocalUser) {
        if (createdByLocalUser) {
            var attrs = __WEBPACK_IMPORTED_MODULE_4__TagRegistry_js__["a" /* default */].get(this.tagObj.getAttribute('tagType')).attrs;
            for (var attrKey in attrs) {
                if (attrs.hasOwnProperty(attrKey) && attrs[attrKey] === 'string')
                    y.share.attrs.set(this.getId() + '_' + attrKey, __WEBPACK_IMPORTED_MODULE_3__node_modules_yjs_dist_y_js___default.a.Text);
            }
        }
    }

    this.initShared = function () {
        var attrs = __WEBPACK_IMPORTED_MODULE_4__TagRegistry_js__["a" /* default */].get(this.tagObj.getAttribute('tagType')).attrs;
        for (var attrKey in attrs) {
            if (attrs.hasOwnProperty(attrKey) && attrs[attrKey] === 'string')
                this.initYText('_' + attrKey);
        }
    }
    if (reg)
        this.initAttributes();

}
/* harmony default export */ __webpack_exports__["a"] = (GenericTag);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AbstractTag_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__ = __webpack_require__(3);
/**
 * @module Tags
 */




/**
 * An alias name for the SharedTag class
 * @default Shared
 * @static
 * @readonly 
 */
SharedTag.Alias = 'Shared';

/**
 * The URL to the image as defined in the constants-modules
 * @default CONST.IMAGES.YJS
 * @static 
 * @readonly
 */
SharedTag.IMAGE = __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].IMAGES.YJS;

__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["c" /* mxUtils */].extend(SharedTag, __WEBPACK_IMPORTED_MODULE_1__AbstractTag_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__AbstractTag_js__["a" /* default */].registerCodec(SharedTag);

/**
 * @classdesc The tag indicates if the ui element supports NRTC collaborative features realized with Yjs
 * 
 * It maps the collabortive property the front end component model
 * The tag is unique that means it is only allowed once for a cell
 * @constructor
 * @param  {UIControl} cell the cell that holds the tag
 * @param  {mxPoint} offset the offset
 * @extends AbstractTag
 */
function SharedTag(cell, offset){
    __WEBPACK_IMPORTED_MODULE_1__AbstractTag_js__["a" /* default */].call(this, cell, new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["h" /* mxImage */](SharedTag.IMAGE, __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].TAG.SIZE, __WEBPACK_IMPORTED_MODULE_2__misc_Constants_js__["a" /* default */].TAG.SIZE), 'Shared editing enabled', offset);
    this.tagObj.setAttribute('isUnique', true);
    this.tagObj.setAttribute('tagType', SharedTag.Alias);

}

/* harmony default export */ __webpack_exports__["a"] = (SharedTag);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_ROLELogin_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_misc_YjsSync_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_Main_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_mapper_CAELiveMapper_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_Loader_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_config_widget_json__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_config_widget_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__data_config_widget_json__);









__WEBPACK_IMPORTED_MODULE_0_jquery___default()(function(){
    __WEBPACK_IMPORTED_MODULE_5__js_Loader_js__["a" /* default */].init();
    var roleSpaceTitle = frameElement.baseURI.substring(frameElement.baseURI.lastIndexOf('spaces/')).replace(/spaces|#\S*|\?\S*|\//g, '');
     __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__js_misc_YjsSync_js__["a" /* default */])(roleSpaceTitle).done(function (y) {
        __WEBPACK_IMPORTED_MODULE_5__js_Loader_js__["a" /* default */].checkSuccessful(0, 25);        
        var vls = y.share.data.get('metamodel');
        if(vls){
          window.vls = vls;
        }
        else{
            var vls = __webpack_require__(48);
            window.vls = vls;
        }
        //Important load a vls before calling Main
        var editor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__js_Main_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__data_config_widget_json___default.a, true);
        __WEBPACK_IMPORTED_MODULE_5__js_Loader_js__["a" /* default */].checkSuccessful(1, 25);
        
        __WEBPACK_IMPORTED_MODULE_4__js_mapper_CAELiveMapper_js__["a" /* default */].init(editor);
        __WEBPACK_IMPORTED_MODULE_5__js_Loader_js__["a" /* default */].checkSuccessful(2, 75);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__js_ROLELogin_js__["a" /* default */])().done(function(){
            __WEBPACK_IMPORTED_MODULE_5__js_Loader_js__["a" /* default */].checkSuccessful(3, 100);
            __WEBPACK_IMPORTED_MODULE_5__js_Loader_js__["a" /* default */].destroy(500);    
        }).fail(function(){
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.widget-title-bar', frameElement.offsetParent).find('span').text('CAE-WireframingEditor[NOT LOGGED IN]');
            __WEBPACK_IMPORTED_MODULE_5__js_Loader_js__["a" /* default */].destroy(500);       
            __WEBPACK_IMPORTED_MODULE_5__js_Loader_js__["a" /* default */].checkFail(3, 100);     
        });
        
        
        
     });
});


/***/ })
],[111]);