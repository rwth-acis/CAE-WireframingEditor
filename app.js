webpackJsonp([2],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mxClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return mxEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return mxGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mxGraphModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return mxCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mxCodec; });
/* unused harmony export mxCodecRegistry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mxEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return mxGraphHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return mxConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return mxKeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return mxRubberband; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mxUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return mxRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return mxToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return mxStencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mxStencilRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return mxWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return mxShape; });
/* unused harmony export mxStylesheet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return mxGeometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return mxDefaultKeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return mxForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mxDefaultToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mxLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mxClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return mxCellRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build_js__);
/*window.mxImageBasePath = "images";
window.mxLoadResources = false;
window.mxLoadStylesheets = false;
*/


//require('../../node_modules/mxgraph/javascript/src/css/common.css');

var mxLib = __WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build_js___default()({
        mxImageBasePath: "images",
        mxBasePath: ".",
        mxLoadStylesheets : false,
        mxLoadResources : false
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
var mxCodec = mxLib.mxCodec;
var mxCodecRegistry = mxLib.mxCodecRegistry;
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
var mxLog  = mxLib.mxLog;
var mxClipboard = mxLib.mxClipboard;
var mxWindow = mxLib.mxWindow;
var mxShape = mxLib.mxShape;
var mxCellRenderer = mxLib.mxCellRenderer;
var mxStylesheet = mxLib.mxStylesheet;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIControl_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_yjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_yjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_yjs__);
/*global y*/





UIText.prototype = new __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */]();
UIText.prototype.constructor = UIText;

function UIText(text, geometry) {
    var style = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + "=rectangle;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_EDITABLE + "=0;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_RESIZABLE + "=1;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=none;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=none;';

    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].call(this, geometry, style);
    this.value.setAttribute('label', text);

    var ytext = null;
    this.$input = null;

    this.init = function (element) {
        var dom = element || 'input';
        this.$input = __WEBPACK_IMPORTED_MODULE_2_jquery___default()('<' + dom + '>')
            .css('width', this.geometry.width - 15)
            .css('height', this.geometry.height - 15)
            .css('font-size', 15);
    }
    this.initShared = function (createdByLocalUser) {
        if (createdByLocalUser) {
            ytext = y.share.attrs.set(this.getId() + '_label', __WEBPACK_IMPORTED_MODULE_3_yjs___default.a.Text);
            ytext.insert(0, text);
        }
    }
    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (UIText);

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Util__ = __webpack_require__(17);
/*global y*/


window.UIControl = UIControl;

UIControl.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["q" /* mxCell */]();
UIControl.prototype.constructor = UIControl;
function UIControl(geometry, style) {
    var that = this;
    var xmlDoc = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].createXmlDocument();
    var uiObj = xmlDoc.createElement('uiObj');
    uiObj.setAttribute('id', '');
    uiObj.setAttribute('class', '');
    uiObj.setAttribute('uiType', this.constructor.name.toLowerCase());

    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["q" /* mxCell */].call(this, uiObj, geometry, style);


    this.setVertex(true);


    this.funct = function (wf, evt/*, cell*/) {
        wf.stopEditing(false);

        //encode UIControl
        var encoder = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCodec */]();

        var pt = wf.getPointForEvent(evt);
        var v = wf.getModel().cloneCell(that);
        v.geometry.x = pt.x;
        v.geometry.y = pt.y;

        var result = encoder.encode(v);
        var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getXml(result);
        y.share.map.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].ADD_VERTEX, {
            userId: y.db.userId,
            id: __WEBPACK_IMPORTED_MODULE_1__misc_Util__["a" /* default */].GUID(),
            data: xml
        });
    }
    this.makeTypeDraggable = function (type, wireframe) {
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].makeDraggable(type, wireframe, that.funct);
    }

    this.setValueFromJson = function (json) {
        for (var key in json) {
            if (this.value.hasAttribute(key)) {
                this.value.setAttribute(key, json[key]);
            }
        }
    }

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (UIControl);

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    ACTIONS :{
        SHARED:{
            DELETE : 'shared_delete',
            GROUP : 'shared_group',
            UNGROUP : 'shared_ungroup',
            UNDO : 'shared_undo',
            REDO : 'shared_redo',
            PASTE: 'shared_paste',
            GRAPH_RESIZE: 'graphResize' 
        },
        COPY : 'copy',
        PASTE : 'paste',
        CONSOLE : 'toggleConsole',
    },
    IMAGES : {
        COPY : 'images/toolbox/copy.png',
        PASTE : 'images/toolbox/paste.png',
        DELETE: 'images/toolbox/delete.png',
        UNDO : 'images/toolbox/undo2.png',
        REDO : 'images/toolbox/redo2.png',
        GROUP: 'images/toolbox/group.png',
        UNGROUP : 'images/toolbox/ungroup.png',
        CONSOLE : 'images/toolbox/console.png'
    }
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Some helper functions
 */
function Util() {}

/**
 * Returns the Ids for cells currently selected in the graph
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
 * @param {array} ids the ids as string to look for 
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

/* harmony default export */ __webpack_exports__["a"] = (Util);

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIControl_js__ = __webpack_require__(7);


UIMedia.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIControl_js__["a" /* default */]();
UIMedia.prototype.constructor = UIMedia;

function UIMedia(geometry, style) {
    __WEBPACK_IMPORTED_MODULE_0__UIControl_js__["a" /* default */].call(this, geometry, style);
    this.value.setAttribute('src', '');
    this.value.setAttribute('controls', true);
    this.value.setAttribute('autoplay', false);
    this.value.setAttribute('muted', false);
    this.value.setAttribute('loop', false);
    this.value.setAttribute('preload', 'auto');

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (UIMedia);

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_UIControl_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__KeyHandler_js__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shapes_VideoShape_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shapes_AudioShape_js__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__elements_Link_js__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__elements_TextBox_js__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__elements_Paragraph_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__elements_TextArea_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__elements_Button_js__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__elements_TextNode_js__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__elements_CheckBox_js__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__elements_RadioButton_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_Image_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__elements_VideoPlayer_js__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__elements_AudioPlayer_js__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__elements_DivContainer_js__ = __webpack_require__(109);

/*global y*/





















Editor.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["j" /* mxEditor */]();
Editor.prototype.constructor = Editor;

function Editor(wireframe, palette) {
    var that = this;
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["j" /* mxEditor */].call(this);
    this.graph = wireframe;
    this.installUndoHandler(wireframe);
    this.setGraphContainer(wireframe.container);
    this.setToolbarContainer(palette.container);
    this.keyHandler = new __WEBPACK_IMPORTED_MODULE_2__KeyHandler_js__["a" /* default */](this);
    //Editor.prototype.disableContextMenu = false;
    //this.popupHandler = new ContextMenu('contextmenu.xml');
    new __WEBPACK_IMPORTED_MODULE_3__ContextMenu_js__["a" /* default */](this);
    //Load stencils 
    var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].load('html5stencils.xml');
    var root = xml.getDocumentElement();
    var shape = root.firstChild;

    while (shape != null) {
        if (shape.nodeType == __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].NODETYPE_ELEMENT) {
            var stencil = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["l" /* mxStencil */](shape);
            //var stencilName = shape.getAttribute('name');
            __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["m" /* mxStencilRegistry */].addStencil(shape.getAttribute('name'), stencil);
        }
        shape = shape.nextSibling;
    }

    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["n" /* mxCellRenderer */].prototype.defaultShapes[__WEBPACK_IMPORTED_MODULE_4__shapes_VideoShape_js__["a" /* default */].prototype.cst.SHAPE] = __WEBPACK_IMPORTED_MODULE_4__shapes_VideoShape_js__["a" /* default */];
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["n" /* mxCellRenderer */].prototype.defaultShapes[__WEBPACK_IMPORTED_MODULE_5__shapes_AudioShape_js__["a" /* default */].prototype.cst.SHAPE] = __WEBPACK_IMPORTED_MODULE_5__shapes_AudioShape_js__["a" /* default */];

    y.share.attrs.observe(function (event) {
        var id = event.name.substring(0, event.name.indexOf('_'));
        var cell = that.graph.getModel().getCell(id);
        if (cell instanceof __WEBPACK_IMPORTED_MODULE_13__elements_RadioButton_js__["a" /* default */] || cell instanceof __WEBPACK_IMPORTED_MODULE_12__elements_CheckBox_js__["a" /* default */])
            event.value.bind(cell.$input.find('input[type="input"]')[0]);
        else
            event.value.bind(cell.$input[0]);
    });

    //-------------------------------------------------------------------
    // Overrides functions from Wireframe which is derived from mxGraph 
    //-------------------------------------------------------------------
    /**
     * Overrides getLabel from mxGraph for the Wireframe-class
     */
    that.graph.getLabel = function (state) {
        var label = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["o" /* mxGraph */].prototype.getLabel.apply(this, arguments);
        if (state instanceof __WEBPACK_IMPORTED_MODULE_17__elements_DivContainer_js__["a" /* default */])
            return state.value.getAttribute('label');
        else return label;
    }
    /**
     * Overrices createGroupCell from the superclass mxGraph for the Wireframe-class
     */
    /*eslint-disable no-unused-vars*/
    that.graph.createGroupCell = function (cells) {
        var group = new __WEBPACK_IMPORTED_MODULE_17__elements_DivContainer_js__["a" /* default */]();
        return group;
    };
    //-------------------------------------------------------------------

    var cell, type, shapeCell;
    cell = new __WEBPACK_IMPORTED_MODULE_17__elements_DivContainer_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 250, 300));
    type = palette.createItem(cell, "UI Component Container");
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_11__elements_TextNode_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 150, 50));
    shapeCell = new __WEBPACK_IMPORTED_MODULE_1__elements_UIControl_js__["a" /* default */](cell.geometry, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + '=textnode;');
    type = palette.createItem(shapeCell, "TextNode", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_10__elements_Button_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 100, 50));
    shapeCell = new __WEBPACK_IMPORTED_MODULE_1__elements_UIControl_js__["a" /* default */](cell.geometry, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + '=button;');
    type = palette.createItem(shapeCell, "Button", false);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_6__elements_Link_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 50, 30));
    shapeCell = new __WEBPACK_IMPORTED_MODULE_1__elements_UIControl_js__["a" /* default */](cell.geometry, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + '=link;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=none;");
    type = palette.createItem(shapeCell, "Link", false);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_7__elements_TextBox_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 120, 30));
    shapeCell = new __WEBPACK_IMPORTED_MODULE_1__elements_UIControl_js__["a" /* default */](cell.geometry, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + '=textbox;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "TextBox", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_8__elements_Paragraph_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 320, 80));
    shapeCell = new __WEBPACK_IMPORTED_MODULE_1__elements_UIControl_js__["a" /* default */](cell.geometry, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + '=paragraph;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "Paragraph of Text", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_9__elements_TextArea_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 320, 80));
    shapeCell = new __WEBPACK_IMPORTED_MODULE_1__elements_UIControl_js__["a" /* default */](cell.geometry, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + '=textarea;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "TextArea", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_12__elements_CheckBox_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 150, 30));
    shapeCell = new __WEBPACK_IMPORTED_MODULE_1__elements_UIControl_js__["a" /* default */](cell.geometry, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + '=checkbox;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "Checkbox", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_13__elements_RadioButton_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 150, 30));
    shapeCell = new __WEBPACK_IMPORTED_MODULE_1__elements_UIControl_js__["a" /* default */](cell.geometry, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + '=radio;' + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=white;" + +__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=black;');
    type = palette.createItem(shapeCell, "Radio Button", true);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_14__elements_Image_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 128, 128));
    type = palette.createItem(cell, "Image", false);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_15__elements_VideoPlayer_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 200, 100));
    type = palette.createItem(cell, "Video Player", false);
    cell.makeTypeDraggable(type, wireframe);

    cell = new __WEBPACK_IMPORTED_MODULE_16__elements_AudioPlayer_js__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["p" /* mxGeometry */](0, 0, 200, 30));
    type = palette.createItem(cell, "Audio Player", false);
    cell.makeTypeDraggable(type, wireframe);


    //horizontal line
    palette.addLine();
    //palette.addBreak();

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Editor);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);

Palette.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxToolbar */]();
Palette.prototype.constructor = Palette;

/**
 * The palette of the wireframing editor
 * @param {DOM} container 
 */
function Palette(container) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["v" /* mxToolbar */].call(this, container);

    this.enabled = false;

    var createTemporaryGraph = function (stylesheet) {
        var graph = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["o" /* mxGraph */](document.createElement('div'), null, null, stylesheet);
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
     * @param {DOM} parent 
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
        if (graph.dialect == __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].DIALECT_SVG) {
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
     * @param{mxCell} cell
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
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].addListener(elt, 'click', function (evt) {
            __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].consume(evt);
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__ = __webpack_require__(9);
/*global y*/





Toolbox.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxDefaultToolbar */]();
Toolbox.prototype.constructor = Toolbox;

function Toolbox(container, editor) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["f" /* mxDefaultToolbar */].call(this, container, editor);

    this._editor = editor;
    var that = this;

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.PASTE, function (editor, cell) {
        var encoder = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCodec */]();
        var result = encoder.encode(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["h" /* mxClipboard */].getCells());
        var xml = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getXml(result);
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.PASTE, {
            userId: y.db.userId,
            xml: xml
        });
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.DELETE, function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].REMOVE, __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getIdsOfSelectedCells(that._editor.graph));
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.CONSOLE, function (editor, cell) {
        if (__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxLog */].isVisible())
            __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxLog */].setVisible(false);
        else
            __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["d" /* mxLog */].setVisible(true);
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNDO, function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].UNDO, y.db.userId);
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.REDO, function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].REDO, y.db.userId);
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GROUP, function (editor, cell) {

        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].GROUP_CELLS, {
            userId: y.db.userId,
            ids: __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getIdsOfSelectedCells(that._editor.graph)
        });
    });

    /*eslint-disable no-unused-vars*/
    editor.addAction(__WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNGROUP, function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].UNGROUP_CELLS, {
            userId: y.db.userId,
            ids: __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getIdsOfSelectedCells(that._editor.graph)
        });
    });

    y.share.action.observe(function (event) {
        switch (event.name) {
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].UNDO:
                //that._editor.execute("undo");
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.undo();
                    that._editor.graph.setSelectionCells(cells);
                } else
                    that._editor.undo();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].REDO:
                //that._editor.execute("redo");
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.redo();
                    that._editor.graph.setSelectionCells(cells);
                } else
                    that._editor.redo();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].REMOVE:
                that._editor.graph.setSelectionCells(__WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getCellsFromIdList(that._editor.graph, event.value));
                that._editor.execute("delete");
                break;
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].GROUP_CELLS:
                var group = that._editor.graph.groupCells(null, 20, __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getCellsFromIdList(that._editor.graph, event.value.ids));
                if (y.db.userId === event.value.userId)
                    //that._editor.graph.setSelectionCells(group);
                    that._editor.graph.getSelectionModel().setCell(group)
                break;
            case __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["e" /* mxEvent */].UNGROUP_CELLS:
                var cells = that._editor.graph.ungroupCells(__WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getCellsFromIdList(that._editor.graph, event.value.ids));
                if (y.db.userId === event.value.userId)
                    that._editor.graph.setSelectionCells(cells);

                break;
            case __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.PASTE:
                var selectedCells = that._editor.graph.getSelectionCells();

                var doc = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].parseXml(event.value.xml);
                var elt = doc.documentElement.firstChild;
                var cells = [];
                while (elt != null) {
                    var codec = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["g" /* mxCodec */]();
                    var cell = codec.decode(elt);
                    cells.push(cell);
                    elt = elt.nextSibling;
                }
                __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["h" /* mxClipboard */].setCells(cells);
                __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["h" /* mxClipboard */].paste(that._editor.graph);

                if (event.value.userId !== y.db.userId) {
                    that._editor.graph.setSelectionCells(selectedCells);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GRAPH_RESIZE: //event triggerd in index.html
                if (y.db.userId !== event.value.userId) {
                    //var size = $('#wireframeWrap').css(["width", "height"]);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#wireframeWrap').css("width", "+=" + event.value.dWidth).css("height", "+=" + event.value.dHeight);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#wireframe').css("width", "+=" + event.value.dWidth).css("height", "+=" + event.value.dHeight);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#draggingBar').css("width", "+=" + event.value.dWidth).css("height", "+=" + event.value.dHeight);
                }
                var prevBounds = that._editor.graph.maximumGraphBounds;
                that._editor.graph.maximumGraphBounds = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["i" /* mxRectangle */](0, 0, prevBounds.width + event.value.dWidth, prevBounds.height + event.value.height);
                break;
        }
    });

    this.addSeparator = function (icon) {
        //The first two lines are from the addSeperator(icon) of mxDefaultToolbar
        icon = icon || __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["a" /* mxClient */].imageBasePath + '/separator.gif';
        var item = this.toolbar.addSeparator(icon);
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(item).addClass("mxSeparator");
        return item;
    }

    this.addSeparator();
    this.addItem("Copy", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.COPY, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.CONSOLE);
    this.addItem("Paste", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.PASTE, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.PASTE);
    this.addSeparator();
    this.addItem("Delete", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.DELETE, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.DELETE);
    this.addSeparator();
    //this.addItem("Cut", "images/toolbox/cut.gif", "shared_cut");
    this.addItem("Undo", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.UNDO, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNDO);
    this.addItem("Redo", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.REDO, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.REDO);
    this.addSeparator();
    this.addItem("Group", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.GROUP, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GROUP);
    this.addItem("Ungroup", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.UNGROUP, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNGROUP);
    this.addSeparator();
    this.addItem("Console", __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].IMAGES.CONSOLE, __WEBPACK_IMPORTED_MODULE_3__misc_Constants_js__["a" /* default */].ACTIONS.CONSOLE);
    this.addSeparator();

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Toolbox);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elements_UIControl_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__ = __webpack_require__(17);
/*global y*/


window.UIControl = __WEBPACK_IMPORTED_MODULE_0__elements_UIControl_js__["a" /* default */];



window.mxGeometry = __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["p" /* mxGeometry */];
Wireframe.prototype = new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["o" /* mxGraph */]();
Wireframe.prototype.constructor = Wireframe;

function Wireframe(container) {
    var that = this;
    __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["o" /* mxGraph */].call(this, container);

    //var handler = new mxGraphHandler(that)

    that.foldingEnabled = false;
    that.autoExtend = false;
    that.setHtmlLabels(true);

    that.maximumGraphBounds = new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["i" /* mxRectangle */](0, 0, 500, 500);
    //enable guiding lines
    __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["w" /* mxGraphHandler */].prototype.guidesEnabled = true;
    __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["w" /* mxGraphHandler */].prototype.highlightEnabled = true;

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
    that.addListener(__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["e" /* mxEvent */].CELLS_MOVED, SharedCellsMovedEvent);
    that.addListener(__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["e" /* mxEvent */].CELLS_RESIZED, SharedCellResizedEvent);
    /*that.addListener(mxEvent.CELLS_ADDED, function(wf, event){
        var test = true;
    });*/


    this.dropEnabled = true;

    //For the DynamicGrid
    //this.graphHandler.scaleGrid = true; 
    //this.setPanning(true);

    new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["x" /* mxKeyHandler */](this);
    new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["y" /* mxRubberband */](this);

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



    that.moveCells = function (cells, dx, dy, clone, target, evt, mapping, shared) {
        var cells = __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["o" /* mxGraph */].prototype.moveCells.apply(this, arguments);
        if (cells.length > 0 && sharedAction && !shared) {
            sharedAction.parentId = cells[0].parent.id;
            y.share.map.set(__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["e" /* mxEvent */].MOVE, sharedAction);
            sharedAction = null;
        }
        return cells;
    }
    that.resizeCells = function (cells, bounds, recurse, shared) {
        var cells = __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["o" /* mxGraph */].prototype.resizeCells.apply(this, arguments);
        if (cells.length > 0 && sharedAction && !shared) {
            y.share.map.set(__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["e" /* mxEvent */].RESIZE, sharedAction);
            sharedAction = null;
        }
        return cells;
    };
    y.share.map.observe(function (event) {
        switch (event.name) {
            case __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["e" /* mxEvent */].ADD_VERTEX:
                {
                    var doc = __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["b" /* mxUtils */].parseXml(event.value.data);
                    var codec = new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["g" /* mxCodec */](doc);
                    var elt = doc.documentElement;
                    var cells = [];
                    while (elt != null) {
                        var cell = codec.decode(elt);
                        cell.setId(event.value.id);
                        if (cell.hasOwnProperty('init')) cell.init();
                        cells.push(cell);
                        elt = elt.nextSibling;
                    }
                    that.addCells(cells);
                    for (var i = 0; i < cells.length; i++) {
                        if (cells[i].hasOwnProperty('initShared'))
                            cells[i].initShared(event.value.userId === y.db.userId);
                    }

                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["e" /* mxEvent */].MOVE:
                {
                    if (event.value.userId !== y.db.userId) {
                        that.removeListener(SharedCellsMovedEvent);
                        var cells = __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getCellsFromIdList(that, event.value.ids);
                        if (cells.length > 0) {
                            if (event.value.dx != 0 || event.value.dy != 0)
                                that.moveCells(cells, event.value.dx, event.value.dy, false, that.getModel().getCell(event.value.parentId), null, null, true);
                        }
                        that.addListener(__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["e" /* mxEvent */].CELLS_MOVED, SharedCellsMovedEvent);
                    }
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["e" /* mxEvent */].RESIZE:
                {
                    if (event.value.userId !== y.db.userId) {
                        var cells = __WEBPACK_IMPORTED_MODULE_2__misc_Util_js__["a" /* default */].getCellsFromIdList(that, event.value.ids);
                        var bounds = [];
                        for (var i = 0; i < event.value.bounds.length; i++) {
                            var bound = event.value.bounds[i];
                            bounds.push(new __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["i" /* mxRectangle */](bound.x, bound.y, bound.width, bound.height));
                        }
                        if (cells.length > 0)
                            that.resizeCells(cells, bounds, false, true);
                    }
                    break;
                }
        }
    });

    that.convertValueToString = function (cell) {
        if (__WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["b" /* mxUtils */].isNode(cell.value)) {
            if (cell.hasOwnProperty('$input')) {
                __WEBPACK_IMPORTED_MODULE_1__misc_mxExport_js__["e" /* mxEvent */].addListener(cell.$input[0], 'change', function ( /*event*/) {
                    var elt = cell.value.cloneNode(true);
                    elt.setAttribute('label', cell.$input.val());
                    that.model.setValue(cell, elt);
                });
                cell.$input.css('width', cell.geometry.width - 15).css('height', cell.geometry.height - 15);

                switch (cell.value.getAttribute('uiType').toLowerCase()) {
                    case 'link':
                    case 'textbox':
                    case 'button':
                    case 'textnode':
                        {
                            cell.$input.click(function ( /*event*/) {
                                that.getSelectionModel().setCell(cell);
                            });
                            break;
                        }
                    case 'paragraph':
                    case 'textarea':
                        {
                            cell.$input.click(function ( /*event*/) {
                                this.focus();
                                this.setSelectionRange(this.value.length, this.value.length);
                            });

                            cell.$input.dblclick(function ( /*event*/) {
                                this.focus();
                                this.setSelectionRange(0, this.value.length);
                            })
                            break;
                        }
                    case 'radiobutton':
                    case 'checkbox': {
                        cell.$input.find('input[type="input"]').click(function ( /*event*/) {
                            that.getSelectionModel().setCell(cell);
                        });
                        break;
                    }
                }
                return cell.$input[0];
            }
        }
    }
    /*
    var cellLabelChanged = that.cellLabelChanged;
    that.cellLabelChanged = function (cell, newValue, autoSize) {
        if (mxUtils.isNode(cell.value) && cell.value.nodeName.toLowerCase() == 'uiobject') {
            // Clones the value for correct undo/redo
            var elt = cell.value.cloneNode(true);
            elt.setAttribute('label', newValue);
            newValue = elt;
        }

        cellLabelChanged.apply(this, arguments);
    };

    // Overrides method to create the editing value
    //var getEditingValue = that.getEditingValue;
    that.getEditingValue = function (cell) {
        if (mxUtils.isNode(cell.value) && cell.value.nodeName.toLowerCase() == 'uiobject') {
            return cell.getAttribute('label');
        }
    };*/
    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Wireframe);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_yjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_yjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_yjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_y_websockets_client__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_y_websockets_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_y_websockets_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_y_memory__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_y_memory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_y_memory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_y_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_y_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_y_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_y_text__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_y_text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_y_text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_y_array__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_y_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_y_array__);







__WEBPACK_IMPORTED_MODULE_1_yjs___default.a.extend(__WEBPACK_IMPORTED_MODULE_6_y_array___default.a, __WEBPACK_IMPORTED_MODULE_2_y_websockets_client___default.a, __WEBPACK_IMPORTED_MODULE_3_y_memory___default.a, __WEBPACK_IMPORTED_MODULE_4_y_map___default.a, __WEBPACK_IMPORTED_MODULE_5_y_text___default.a);

/* harmony default export */ __webpack_exports__["a"] = (function (space) {
    var deferred = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
    __WEBPACK_IMPORTED_MODULE_1_yjs___default()({
        db: {
            name: "memory"
        },
        connector: {
            name: "websockets-client",
            room: space || 'yireframe'
        },
        share: {
            map: 'Map',
            action: 'Map',
            attrs: 'Map'
        }
    }).then(function (y) {
        window.y = y;
        deferred.resolve(y);
    });
    return deferred.promise();
});


/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PropertyEditor_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__ = __webpack_require__(9);
//ContextMenu.prototype = new mxDefaultPopupMenu();



function ContextMenu(editor) {
    // mxDefaultPopupMenu.call(this);

    editor.graph.popupMenuHandler.factoryMethod = function (menu, cell, evt) {
        return createPopupMenu(null, menu, cell, evt);
    };

    function createPopupMenu(graph, menu, cell/*, evt*/) {

        if (cell == null) {
            var sub = menu.addItem('Create..', null);
            menu.createSubmenu(sub);
            menu.addItem('Element 1', null, function (event) {
                //TODO
                var test = true;
            }, sub);
            menu.addSeparator();
        } else {
            menu.addItem('Show Attributes', null, function (/*event*/) {
                new __WEBPACK_IMPORTED_MODULE_0__PropertyEditor_js__["a" /* default */](cell);
            });
            menu.addSeparator();
        }
        menu.addItem('Undo', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.UNDO, function () {
            editor.execute(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.UNDO);
        });
        menu.addItem('Redo', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.REDO, function () {
            editor.execute(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.REDO);
        });
        menu.addSeparator();
        if (cell == null) {

            menu.addItem('Show Console', __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].IMAGES.CONSOLE, function () {
                editor.execute(__WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.CONSOLE);
            });
        } else {
            //TODO copy & paste for context menu needs rework
            /*menu.addItem('Copy', 'images/toolbox/copy.gif', function () {
                editor.execute("copy");
            });
            menu.addItem('Paste', 'images/toolbox/paste.gif', function () {
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
    };
    return this;
};
/* harmony default export */ __webpack_exports__["a"] = (ContextMenu);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__ = __webpack_require__(9);


KeyHandler.prototype = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["u" /* mxDefaultKeyHandler */]();
KeyHandler.prototype.constructor = KeyHandler;

/**
 * The KeyHandler for the Wireframing Editor
 * For key codes see:
 * https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
 * @param {mxGraph} graph 
 */
function KeyHandler(editor){
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["u" /* mxDefaultKeyHandler */].call(this, editor);

    //delete-key
    this.bindAction(46, __WEBPACK_IMPORTED_MODULE_1__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.DELETE);
    
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

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (KeyHandler);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_tabs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_tabs__);




/**
 * Generates the property editor for the given cell
 * @param {mxCell} cell 
 */
function PropertyEditor(cell) {
    var htmlEditorTemplate = '<div id="propertyEditor_' + cell.getId() + '"><ul><li><a href="#attributesTab">Attributes</a></li><li><a href="#tagsTab">Interactivity</a></li></ul><div id="attributesTab"></div><div id="tagsTab"></div>';

    var form = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["s" /* mxForm */]('attributes');
    var attrs = cell.value.attributes;
    var attr;
    for (var i = 0; i < attrs.length; i++) {
        attr = attrs[i];
        if(attr.name ==='label' || attr.name ==='uiType') continue; //skip the label and the ui-type
        if (attr.value.indexOf('true') != -1 || attr.value.indexOf('false') != -1)//a boolean value
            form.addCheckbox(attr.name, attr.value.indexOf('true') != -1 ? true : false);
        else form.addText(attr.name, attr.value);
    }

    var $htmlTagEditor = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#propertyEditor_' + cell.getId());
    if ($htmlTagEditor.length == 0) {
        var $htmlTagEditor = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.parseHTML(htmlEditorTemplate)[0]);

        $htmlTagEditor.tabs();
        $htmlTagEditor.find('#attributesTab').append(form.body);
        var propertyEditorWnd = new __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["t" /* mxWindow */]("Properties", $htmlTagEditor[0], '300', '200', '100%', '40%', true, true);
        propertyEditorWnd.setVisible(true);
        propertyEditorWnd.setMaximizable(false);
        propertyEditorWnd.setResizable(false);
        propertyEditorWnd.setClosable(true);

        //Adds Ok and Cancel Button to the form
        form.addButtons(
            function () {
                //function for the ok button

                var data = serializeForm(form);
                cell.setValueFromJson(data);
                propertyEditorWnd.destroy();
            },
            function () {
                //function for the cancel button
                propertyEditorWnd.destroy();
            });

        var serializeForm = function (form) {
            var obj = {};
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(form.body).find('tr').map(function (i, elem) {
                var name = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(elem).find('td:first').text();
                if (name.length > 0) {
                    var value;
                    var $input = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(elem).find('input');
                    if ($input.attr('type') === 'checkbox')
                        value = $input.prop('checked');
                    else
                        value = $input.val();
                    obj[name] = value;
                }
            });
            return obj;
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (PropertyEditor);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIMedia_js__ = __webpack_require__(33);



AudioPlayer.prototype = new __WEBPACK_IMPORTED_MODULE_1__UIMedia_js__["a" /* default */]();
AudioPlayer.prototype.constructor = AudioPlayer;
window.AudioPlayer = AudioPlayer;

function AudioPlayer(geometry) {
        
    //style in html5stencils.xml and registered in the editor
    var style = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + "=AudioPlayer;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=none;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=grey;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_ASPECT + '=fixed;' + 
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_EDITABLE + "=0;";

    __WEBPACK_IMPORTED_MODULE_1__UIMedia_js__["a" /* default */].call(this,geometry, style);
    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (AudioPlayer);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(4);


Button.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
Button.prototype.constructor = Button;

//Global for the codec converter
window.Button = Button;

function Button(geometry) {
    var text = 'Button';
    
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('disabled', false);
    this.value.setAttribute('autofocus', false);
    this.value.setAttribute('type', 'button');

    this.init = function(){
        this.__proto__.init.call(this);
        this.$input
            .css('text-align', 'center')
            .css('border-radius', '12px')
            .css('background-color', 'rgb(227, 227, 228)')
            .css('border-style', 'ridge')
            .val(text);
    }

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);



CheckBox.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
CheckBox.prototype.constructor = CheckBox;

//Global for the codec converter
window.CheckBox = CheckBox;

function CheckBox(geometry) {
    var text = 'Option';

    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('checked', false);
    this.value.setAttribute('autofocus', false);
    this.value.setAttribute('disabled', false);

    this.init = function () {
        this.$input = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<div>')
            .append(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<input>').attr('type', 'checkbox').attr('checked', true))
            .append(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<input>')
            .attr('type', 'input')
            .css('font-size', 15)
            .css('width', this.geometry.width - 30) 
            .css('height', this.geometry.height - 10)
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .val(text));
    }
    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (CheckBox);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIControl_js__ = __webpack_require__(7);




__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].extend(DivContainer, __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */]);
window.DivContainer = DivContainer;

function DivContainer(geometry) {
    var style = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + "=" + __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].SHAPE_SWIMLANE + ';' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=none;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_POINTER_EVENTS + "=true;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=grey;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_VERTICAL_ALIGN + '=middle;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_LABEL_BACKGROUNDCOLOR + '=none;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FONTSIZE + '=11;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STARTSIZE + '=13;' +
        //mxConstants.STYLE_HORIZONTAL + '=false;' +
		__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FONTCOLOR +'=black;' +
		__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR +'=black;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_EDITABLE + "=0;";    
    
    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].call(this, geometry, style);
    this.setAttribute('label', 'Container');
    this.setConnectable(false);

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (DivContainer);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIControl_js__ = __webpack_require__(7);



Image.prototype = new __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */]();
Image.prototype.constructor = Image;
window.Image = Image;

function Image(geometry) {

    //style in html5stencils.xml and registered in the editor
    var style = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + '=image;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_EDITABLE + "=0;";

    __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */].call(this, geometry, style);
    this.setAttribute('src','');
    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(4);


Link.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
Link.prototype.constructor = Link;

//Global for the codec converter
window.Link = Link;

function Link(geometry) {
    var text = 'Link';


    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('label', text);
    this.value.setAttribute('href', '');

    this.init = function () {
        this.__proto__.init.call(this);
        this.$input.css('color', 'blue')
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('text-decoration', 'underline')
            .val(text);
    }
    return this;
}

/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(4);


Paragraph.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
Paragraph.prototype.constructor = Paragraph;

window.Paragraph = Paragraph;

function Paragraph(geometry) {
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);

    this.init = function () {
        this.__proto__.init.call(this, 'textarea');
        this.$input
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('overflow', 'hidden')
            .css('resize', 'none')
            .text(text);
    }
    return this;
}

/* harmony default export */ __webpack_exports__["a"] = (Paragraph);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);



RadioButton.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
RadioButton.prototype.constructor = RadioButton;

//Global for the codec converter
window.RadioButton = RadioButton;

function RadioButton(geometry) {
    var text = 'Option';

    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('checked', false);
    this.value.setAttribute('autofocus', false);
    this.value.setAttribute('disabled', false);

    this.init = function () {
        this.$input = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('<div>')
            .append(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<input>').attr('type', 'radio').attr('checked', true))
            .append(__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<input>')
            .attr('type', 'input')
            .css('font-size', 15)
            .css('width', this.geometry.width - 30) 
            .css('height', this.geometry.height - 10)
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .val(text));
    }
    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (RadioButton);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(4);


TextArea.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
TextArea.prototype.constructor = TextArea;

window.TextArea = TextArea;

function TextArea(geometry) {
    var text='Multi-Line text input area';
   // var text = 'hallo';
   

    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.value.setAttribute('placeholder', '');
    this.value.setAttribute('autofocus', false);
    this.value.setAttribute('maxlength', '');
    this.value.setAttribute('readonly', false);
    this.value.setAttribute('disabled', false);
    this.value.setAttribute('cols', '');
    this.value.setAttribute('rows', '');
    this.init = function () {
        this.__proto__.init.call(this, 'textarea');
        this.$input
            .css('overflow', 'hidden')
            .css('resize', 'none')
            .text(text);
    }
    return this;
}

/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(4);


TextBox.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
TextBox.prototype.constructor = TextBox;

//Global for the codec converter
window.TextBox = TextBox;

function TextBox(geometry) {
    var text = 'Some Text...';

    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);
    this.setAttribute('autofocus', false);
    this.setAttribute('disabled', false);
    this.setAttribute('autocomplete', 'off');
    this.init = function(){
        this.__proto__.init.call(this);
        this.$input.val(text);
    }

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (TextBox);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIText_js__ = __webpack_require__(4);


TextNode.prototype = new __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */]();
TextNode.prototype.constructor = TextNode;

//Global for the codec converter
window.TextNode = TextNode;

function TextNode(geometry) {
    var text = 'A simple TextNode...';
    
    __WEBPACK_IMPORTED_MODULE_0__UIText_js__["a" /* default */].call(this, text, geometry);

    this.init = function () {
        this.__proto__.init.call(this);
        this.$input
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .val(text);
    }

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (TextNode);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIMedia_js__ = __webpack_require__(33);



VideoPlayer.prototype = new __WEBPACK_IMPORTED_MODULE_1__UIMedia_js__["a" /* default */]();
VideoPlayer.prototype.constructor = VideoPlayer;
window.VideoPlayer = VideoPlayer;

function VideoPlayer(geometry) {

    //style in html5stencils.xml and registered in the editor
    var style = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_SHAPE + "=VideoPlayer;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR + "=none;" +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=grey;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_ASPECT + '=fixed;' +
        __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_EDITABLE + "=0;";

    __WEBPACK_IMPORTED_MODULE_1__UIMedia_js__["a" /* default */].call(this, geometry, style);
    this.value.setAttribute('poster', '');

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (VideoPlayer);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_resizable__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_resizable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_resizable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_draggable__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__misc_YjsSync_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__misc_Constants_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Wireframe_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Palette_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Editor_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Toolbox_js__ = __webpack_require__(38);
__webpack_require__.e/* require */(0).then(function() {[__webpack_require__(58), __webpack_require__(56), __webpack_require__(55), __webpack_require__(57)];}).catch(__webpack_require__.oe);











__WEBPACK_IMPORTED_MODULE_0_jquery___default()(function(){
     if (!__WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["a" /* mxClient */].isBrowserSupported()) {
      // Displays an error message if the browser is not supported.
      __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["b" /* mxUtils */].error('Browser is not supported!', 200, false);
    } else {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__misc_YjsSync_js__["a" /* default */])().done(function (y) {
        var model = new __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["c" /* mxGraphModel */]();
        __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["d" /* mxLog */].show();
        
        var container = document.getElementById('wireframe');
         //disable default context menu
        __WEBPACK_IMPORTED_MODULE_3__misc_mxExport_js__["e" /* mxEvent */].disableContextMenu(container);
        var wireframe = new __WEBPACK_IMPORTED_MODULE_6__Wireframe_js__["a" /* default */](container, model);

        var htmlPalette = document.getElementById('palette');
        var palette = new __WEBPACK_IMPORTED_MODULE_7__Palette_js__["a" /* default */](htmlPalette);

        var editor = new __WEBPACK_IMPORTED_MODULE_8__Editor_js__["a" /* default */](wireframe, palette, toolbox);


        var htmlToolbox = document.getElementById('toolbox');
        var toolbox = new __WEBPACK_IMPORTED_MODULE_9__Toolbox_js__["a" /* default */](htmlToolbox, editor);
    
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wireframeWrap').resizable({
          handles: "n, e, s, w, se, sw, nw, ne",
          containment: '#wireframeContainer',
          //aspectRatio: 4/3,
          minWidth: 320,
          minHeight: 200,
          alsoResize: "#wireframe, #draggingBar",
          classes: {
            "ui-resizable-se": "ui-icon ui-icon-grip-diagonal-se"
          },
          stop: function (event, ui) {
            //propagate graph resize to other users; handled in Toolbox.js
            y.share.action.set(__WEBPACK_IMPORTED_MODULE_5__misc_Constants_js__["a" /* default */].ACTIONS.SHARED.GRAPH_RESIZE, {
              userId: y.db.userId,
              dHeight: ui.size.height - ui.originalSize.height,
              dWidth: ui.size.width - ui.originalSize.width
            });

          }
        });

        __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#wireframeWrap").draggable({
          handle: "#draggingBar",
          containment: '#wireframeContainer'
        });

        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.hsplit').click(function () {
          var $palette = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#palette');
          var paletteWidth = $palette.css('width');
          if ($palette.is(':visible')) {
            $palette.hide();
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wireframeContainer').css('left', '-='+ paletteWidth);
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#toolbox').css('left', '-=' +paletteWidth);
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css('left', '-=' + paletteWidth);
          } else {
            $palette.show();
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css('left', '+=' +paletteWidth);
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wireframeContainer').css('left', '+=' + paletteWidth);
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#toolbox').css('left', '+=' + paletteWidth);
          }
        });
      });
    }
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


function AudioShape(bounds, fill, stroke, strokewidth) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["r" /* mxShape */].call(this);
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
__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].extend(AudioShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["r" /* mxShape */]);

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
 */
AudioShape.prototype.paintVertexShape = function (c, x, y, w, h) {
    var bgColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR, 'white');
    var buttonColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.FILL_COLOR2, 'grey');
    var frameColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR, 'grey');
    var filledColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.STROKE_COLOR2, 'grey');
    var emptyColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.STROKE_COLOR3, 'grey');
    var barHeight = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.BAR_HEIGHT, 25);

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

AudioShape.prototype.otherShapes = function (c, x, y, w, h, buttonColor, frameColor, filledColor, emptyColor, barHeight) {
    var barPos = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.BAR_POS, '20');
    barPos = Math.max(0, barPos);
    barPos = Math.min(100, barPos);
    var strokeWidth = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKEWIDTH, '1');
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

    var textColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, AudioShape.prototype.cst.TEXT_COLOR, 'grey');
    c.begin();
    c.setFontSize(barHeight * 0.5);
    c.setFontColor(textColor);
    c.text(barHeight * 1.9, h - barHeight * 0.45, 0, 0, '0:42/4:23', __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].ALIGN_LEFT, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].ALIGN_MIDDLE, 0, null, 0, 0, 0);
};

/* harmony default export */ __webpack_exports__["a"] = (AudioShape);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__ = __webpack_require__(1);


function VideoShape(bounds, fill, stroke, strokewidth) {
    __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["r" /* mxShape */].call(this);
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
__WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].extend(VideoShape, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["r" /* mxShape */]);

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
    var bgColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_FILLCOLOR, 'white');
    var buttonColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.FILL_COLOR2, 'grey');
    var frameColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR, 'grey');
    var filledColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.STROKE_COLOR2, 'grey');
    var emptyColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.STROKE_COLOR3, 'grey');
    var barHeight = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.BAR_HEIGHT, 30);

    w = Math.max(w, 5 * barHeight);
    h = Math.max(h, barHeight + 10);

    c.translate(x, y);
    this.background(c, x, y, w, h, bgColor, frameColor);
    c.setShadow(false);
    this.otherShapes(c, x, y, w, h, buttonColor, frameColor, filledColor, emptyColor, barHeight);
};

VideoShape.prototype.background = function (c, x, y, w, h, bgColor, frameColor) {
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

VideoShape.prototype.otherShapes = function (c, x, y, w, h, buttonColor, frameColor, filledColor, emptyColor, barHeight) {
    var barPos = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.BAR_POS, '20');
    barPos = Math.max(0, barPos);
    barPos = Math.min(100, barPos);

    var strokeWidth = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].STYLE_STROKEWIDTH, '1');
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

    var textColor = __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["b" /* mxUtils */].getValue(this.style, VideoShape.prototype.cst.TEXT_COLOR, 'grey');
    c.begin();
    c.setFontSize(barHeight * 0.5);
    c.setFontColor(textColor);
    c.text(barHeight * 1.9, h - barHeight * 0.45, 0, 0, '1:20/6:23', __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].ALIGN_LEFT, __WEBPACK_IMPORTED_MODULE_0__misc_mxExport_js__["k" /* mxConstants */].ALIGN_MIDDLE, 0, null, 0, 0, 0);
};

/* harmony default export */ __webpack_exports__["a"] = (VideoShape);

/***/ })
],[118]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWlzYy9teEV4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWxlbWVudHMvVUlUZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbGVtZW50cy9VSUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21pc2MvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9taXNjL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VsZW1lbnRzL1VJTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9vbGJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvV2lyZWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9taXNjL1lqc1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvbnRleHRNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9LZXlIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Qcm9wZXJ0eUVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWxlbWVudHMvQXVkaW9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VsZW1lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWxlbWVudHMvQ2hlY2tCb3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VsZW1lbnRzL0RpdkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWxlbWVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VsZW1lbnRzL0xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VsZW1lbnRzL1BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWxlbWVudHMvUmFkaW9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VsZW1lbnRzL1RleHRBcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbGVtZW50cy9UZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9lbGVtZW50cy9UZXh0Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZWxlbWVudHMvVmlkZW9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zaGFwZXMvQXVkaW9TaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2hhcGVzL1ZpZGVvU2hhcGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFHQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUhBQXNEO0FBQ3RELG9HQUF5QztBQUN6QyxxR0FBMEM7QUFDMUMsd0dBQTZDO0FBQzdDLDBHQUErQzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFOzs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFNQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0U7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBVUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyTUFBa0Y7QUFDbEY7QUFDQTs7QUFFQTtBQUNBLHlNQUFnRjtBQUNoRjtBQUNBOztBQUVBO0FBQ0EsdU1BQThFLG9HQUF5QztBQUN2SDtBQUNBOztBQUVBO0FBQ0EsME1BQWlGLHFHQUEwQyx3R0FBNkM7QUFDeEs7QUFDQTs7QUFFQTtBQUNBLDRNQUFtRixxR0FBMEMsd0dBQTZDO0FBQzFLO0FBQ0E7O0FBRUE7QUFDQSwyTUFBa0YscUdBQTBDLHdHQUE2QztBQUN6SztBQUNBOztBQUVBO0FBQ0EsMk1BQWtGLHFHQUEwQyx3R0FBNkM7QUFDeks7QUFDQTs7QUFFQTtBQUNBLHdNQUErRSxxR0FBMEMsd0dBQTZDO0FBQ3RLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7O0FDekpDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxJQUFJO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLElBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0U7Ozs7Ozs7Ozs7O0FDckhBO0FBQUE7QUFVQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFOzs7Ozs7Ozs7QUN6S0E7QUFBQTtBQUNBOztBQUVBO0FBV0M7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOzs7QUFHUDs7QUFFQTtBQUNBLHlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsK0JBQStCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRTs7Ozs7Ozs7O0FDN0Q0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFFOzs7Ozs7Ozs7Ozs7QUNyQzJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RTs7Ozs7Ozs7O0FDaEVDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUhBQXdEO0FBQ3hELHdHQUE2QztBQUM3QywwR0FBK0M7QUFDL0Msc0dBQTJDO0FBQzNDLG9HQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0Esc0U7Ozs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUU7Ozs7Ozs7OztBQy9CK0I7QUFDL0I7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxxTUFBK0U7QUFDL0Usd0dBQTZDO0FBQzdDLDZHQUFrRDtBQUNsRCwwR0FBK0M7QUFDL0MsK0dBQW9EO0FBQ3BELG9IQUF5RDtBQUN6RCxxR0FBMEM7QUFDMUMsc0dBQTJDO0FBQzNDLGlEQUFpRDtBQUNqRCxrR0FBdUM7QUFDdkMsb0dBQXlDO0FBQ3pDLG9HQUF5QyxFOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVFOzs7Ozs7Ozs7QUN6QkM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw2R0FBa0Q7QUFDbEQsb0dBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFOzs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEOzs7Ozs7OztBQzNCQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvRTs7Ozs7Ozs7OztBQ3hCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRTs7Ozs7Ozs7QUMvQkE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUU7Ozs7Ozs7O0FDOUJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFOzs7Ozs7OztBQ3RCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUU7Ozs7Ozs7OztBQ3JCQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1IQUF3RDtBQUN4RCx3R0FBNkM7QUFDN0MsMEdBQStDO0FBQy9DLHNHQUEyQztBQUMzQyxvR0FBeUM7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLENBQUMsRTs7Ozs7Ozs7QUMxRUE7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRTs7Ozs7Ozs7QUMvSkM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyp3aW5kb3cubXhJbWFnZUJhc2VQYXRoID0gXCJpbWFnZXNcIjtcbndpbmRvdy5teExvYWRSZXNvdXJjZXMgPSBmYWxzZTtcbndpbmRvdy5teExvYWRTdHlsZXNoZWV0cyA9IGZhbHNlO1xuKi9cbmltcG9ydCBteEdyYXBoTGliIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbXhncmFwaC9qYXZhc2NyaXB0L2Rpc3QvYnVpbGQuanNcIjtcblxuLy9yZXF1aXJlKCcuLi8uLi9ub2RlX21vZHVsZXMvbXhncmFwaC9qYXZhc2NyaXB0L3NyYy9jc3MvY29tbW9uLmNzcycpO1xuXG52YXIgbXhMaWIgPSBteEdyYXBoTGliKHtcbiAgICAgICAgbXhJbWFnZUJhc2VQYXRoOiBcImltYWdlc1wiLFxuICAgICAgICBteEJhc2VQYXRoOiBcIi5cIixcbiAgICAgICAgbXhMb2FkU3R5bGVzaGVldHMgOiBmYWxzZSxcbiAgICAgICAgbXhMb2FkUmVzb3VyY2VzIDogZmFsc2VcbiAgICB9KTtcbi8qdmFyIG14Z3JhcGggPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL214Z3JhcGgvamF2YXNjcmlwdC9kaXN0L2J1aWxkXCIpKHtcbiAgICAgIG14SW1hZ2VCYXNlUGF0aDogXCIuLi9ub2RlX21vZHVsZXMvbXhncmFwaC9qYXZhc2NyaXB0L3NyYy9pbWFnZXNcIixcbiAgICAgIG14QmFzZVBhdGg6IFwiLi4vbm9kZV9tb2R1bGVzL214Z3JhcGgvamF2YXNjcmlwdC9zcmNcIlxuICAgIH0pOyovXG5cbnZhciBteENsaWVudCA9IG14TGliLm14Q2xpZW50O1xudmFyIG14RWRpdG9yID0gbXhMaWIubXhFZGl0b3I7XG52YXIgbXhHcmFwaCA9IG14TGliLm14R3JhcGg7XG52YXIgbXhHcmFwaE1vZGVsID0gbXhMaWIubXhHcmFwaE1vZGVsO1xudmFyIG14Q2VsbCA9IG14TGliLm14Q2VsbDtcbnZhciBteENvZGVjID0gbXhMaWIubXhDb2RlYztcbnZhciBteENvZGVjUmVnaXN0cnkgPSBteExpYi5teENvZGVjUmVnaXN0cnk7XG52YXIgbXhFdmVudCA9IG14TGliLm14RXZlbnQ7XG52YXIgbXhHcmFwaEhhbmRsZXIgPSBteExpYi5teEdyYXBoSGFuZGxlcjtcbnZhciBteENvbnN0YW50cyA9IG14TGliLm14Q29uc3RhbnRzO1xudmFyIG14S2V5SGFuZGxlciA9IG14TGliLm14S2V5SGFuZGxlcjtcbnZhciBteFJ1YmJlcmJhbmQgPSBteExpYi5teFJ1YmJlcmJhbmQ7XG52YXIgbXhVdGlscyA9IG14TGliLm14VXRpbHM7XG52YXIgbXhSZWN0YW5nbGUgPSBteExpYi5teFJlY3RhbmdsZTtcbnZhciBteFRvb2xiYXIgPSBteExpYi5teFRvb2xiYXI7XG52YXIgbXhTdGVuY2lsID0gbXhMaWIubXhTdGVuY2lsO1xudmFyIG14U3RlbmNpbFJlZ2lzdHJ5ID0gbXhMaWIubXhTdGVuY2lsUmVnaXN0cnk7XG52YXIgbXhHZW9tZXRyeSA9IG14TGliLm14R2VvbWV0cnk7XG52YXIgbXhEZWZhdWx0S2V5SGFuZGxlciA9IG14TGliLm14RGVmYXVsdEtleUhhbmRsZXI7XG52YXIgbXhGb3JtID0gbXhMaWIubXhGb3JtO1xudmFyIG14RGVmYXVsdFRvb2xiYXIgPSBteExpYi5teERlZmF1bHRUb29sYmFyO1xudmFyIG14TG9nICA9IG14TGliLm14TG9nO1xudmFyIG14Q2xpcGJvYXJkID0gbXhMaWIubXhDbGlwYm9hcmQ7XG52YXIgbXhXaW5kb3cgPSBteExpYi5teFdpbmRvdztcbnZhciBteFNoYXBlID0gbXhMaWIubXhTaGFwZTtcbnZhciBteENlbGxSZW5kZXJlciA9IG14TGliLm14Q2VsbFJlbmRlcmVyO1xudmFyIG14U3R5bGVzaGVldCA9IG14TGliLm14U3R5bGVzaGVldDtcbmV4cG9ydCB7XG4gICAgbXhDbGllbnQsIG14RWRpdG9yLCBteEdyYXBoLCBteEdyYXBoTW9kZWwsIG14Q2VsbCwgbXhDb2RlYywgbXhDb2RlY1JlZ2lzdHJ5LCAgbXhFdmVudCwgbXhHcmFwaEhhbmRsZXIsIG14Q29uc3RhbnRzLFxuICAgIG14S2V5SGFuZGxlciwgbXhSdWJiZXJiYW5kLCBteFV0aWxzLCBteFJlY3RhbmdsZSwgbXhUb29sYmFyLCBteFN0ZW5jaWwsIG14U3RlbmNpbFJlZ2lzdHJ5LCBteFdpbmRvdywgbXhTaGFwZSwgbXhTdHlsZXNoZWV0LFxuICAgIG14R2VvbWV0cnksIG14RGVmYXVsdEtleUhhbmRsZXIsIG14Rm9ybSwgbXhEZWZhdWx0VG9vbGJhciwgbXhMb2csIG14Q2xpcGJvYXJkLCBteENlbGxSZW5kZXJlclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9taXNjL214RXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qZ2xvYmFsIHkqL1xuaW1wb3J0IHtcbiAgICBteENvbnN0YW50c1xufSBmcm9tICcuLi9taXNjL214RXhwb3J0LmpzJztcbmltcG9ydCBVSUNvbnRyb2wgZnJvbSAnLi9VSUNvbnRyb2wuanMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBZIGZyb20gJ3lqcyc7XG5cblVJVGV4dC5wcm90b3R5cGUgPSBuZXcgVUlDb250cm9sKCk7XG5VSVRleHQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVUlUZXh0O1xuXG5mdW5jdGlvbiBVSVRleHQodGV4dCwgZ2VvbWV0cnkpIHtcbiAgICB2YXIgc3R5bGUgPSBteENvbnN0YW50cy5TVFlMRV9TSEFQRSArIFwiPXJlY3RhbmdsZTtcIiArXG4gICAgICAgIG14Q29uc3RhbnRzLlNUWUxFX0VESVRBQkxFICsgXCI9MDtcIiArXG4gICAgICAgIG14Q29uc3RhbnRzLlNUWUxFX1JFU0laQUJMRSArIFwiPTE7XCIgK1xuICAgICAgICBteENvbnN0YW50cy5TVFlMRV9GSUxMQ09MT1IgKyBcIj1ub25lO1wiICtcbiAgICAgICAgbXhDb25zdGFudHMuU1RZTEVfU1RST0tFQ09MT1IgKyAnPW5vbmU7JztcblxuICAgIFVJQ29udHJvbC5jYWxsKHRoaXMsIGdlb21ldHJ5LCBzdHlsZSk7XG4gICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgdGV4dCk7XG5cbiAgICB2YXIgeXRleHQgPSBudWxsO1xuICAgIHRoaXMuJGlucHV0ID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBkb20gPSBlbGVtZW50IHx8ICdpbnB1dCc7XG4gICAgICAgIHRoaXMuJGlucHV0ID0gJCgnPCcgKyBkb20gKyAnPicpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsIHRoaXMuZ2VvbWV0cnkud2lkdGggLSAxNSlcbiAgICAgICAgICAgIC5jc3MoJ2hlaWdodCcsIHRoaXMuZ2VvbWV0cnkuaGVpZ2h0IC0gMTUpXG4gICAgICAgICAgICAuY3NzKCdmb250LXNpemUnLCAxNSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdFNoYXJlZCA9IGZ1bmN0aW9uIChjcmVhdGVkQnlMb2NhbFVzZXIpIHtcbiAgICAgICAgaWYgKGNyZWF0ZWRCeUxvY2FsVXNlcikge1xuICAgICAgICAgICAgeXRleHQgPSB5LnNoYXJlLmF0dHJzLnNldCh0aGlzLmdldElkKCkgKyAnX2xhYmVsJywgWS5UZXh0KTtcbiAgICAgICAgICAgIHl0ZXh0Lmluc2VydCgwLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cbmV4cG9ydCBkZWZhdWx0IFVJVGV4dDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9lbGVtZW50cy9VSVRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLypnbG9iYWwgeSovXG5pbXBvcnQge1xuICAgIG14Q2VsbCxcbiAgICBteENvZGVjLFxuICAgIG14VXRpbHMsXG4gICAgbXhFdmVudFxufSBmcm9tICcuLy4uL21pc2MvbXhFeHBvcnQuanMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vbWlzYy9VdGlsJztcbndpbmRvdy5VSUNvbnRyb2wgPSBVSUNvbnRyb2w7XG5cblVJQ29udHJvbC5wcm90b3R5cGUgPSBuZXcgbXhDZWxsKCk7XG5VSUNvbnRyb2wucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVUlDb250cm9sO1xuZnVuY3Rpb24gVUlDb250cm9sKGdlb21ldHJ5LCBzdHlsZSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgeG1sRG9jID0gbXhVdGlscy5jcmVhdGVYbWxEb2N1bWVudCgpO1xuICAgIHZhciB1aU9iaiA9IHhtbERvYy5jcmVhdGVFbGVtZW50KCd1aU9iaicpO1xuICAgIHVpT2JqLnNldEF0dHJpYnV0ZSgnaWQnLCAnJyk7XG4gICAgdWlPYmouc2V0QXR0cmlidXRlKCdjbGFzcycsICcnKTtcbiAgICB1aU9iai5zZXRBdHRyaWJ1dGUoJ3VpVHlwZScsIHRoaXMuY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgIG14Q2VsbC5jYWxsKHRoaXMsIHVpT2JqLCBnZW9tZXRyeSwgc3R5bGUpO1xuXG5cbiAgICB0aGlzLnNldFZlcnRleCh0cnVlKTtcblxuXG4gICAgdGhpcy5mdW5jdCA9IGZ1bmN0aW9uICh3ZiwgZXZ0LyosIGNlbGwqLykge1xuICAgICAgICB3Zi5zdG9wRWRpdGluZyhmYWxzZSk7XG5cbiAgICAgICAgLy9lbmNvZGUgVUlDb250cm9sXG4gICAgICAgIHZhciBlbmNvZGVyID0gbmV3IG14Q29kZWMoKTtcblxuICAgICAgICB2YXIgcHQgPSB3Zi5nZXRQb2ludEZvckV2ZW50KGV2dCk7XG4gICAgICAgIHZhciB2ID0gd2YuZ2V0TW9kZWwoKS5jbG9uZUNlbGwodGhhdCk7XG4gICAgICAgIHYuZ2VvbWV0cnkueCA9IHB0Lng7XG4gICAgICAgIHYuZ2VvbWV0cnkueSA9IHB0Lnk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IGVuY29kZXIuZW5jb2RlKHYpO1xuICAgICAgICB2YXIgeG1sID0gbXhVdGlscy5nZXRYbWwocmVzdWx0KTtcbiAgICAgICAgeS5zaGFyZS5tYXAuc2V0KG14RXZlbnQuQUREX1ZFUlRFWCwge1xuICAgICAgICAgICAgdXNlcklkOiB5LmRiLnVzZXJJZCxcbiAgICAgICAgICAgIGlkOiBVdGlsLkdVSUQoKSxcbiAgICAgICAgICAgIGRhdGE6IHhtbFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5tYWtlVHlwZURyYWdnYWJsZSA9IGZ1bmN0aW9uICh0eXBlLCB3aXJlZnJhbWUpIHtcbiAgICAgICAgbXhVdGlscy5tYWtlRHJhZ2dhYmxlKHR5cGUsIHdpcmVmcmFtZSwgdGhhdC5mdW5jdCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZUZyb21Kc29uID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmhhc0F0dHJpYnV0ZShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoa2V5LCBqc29uW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5leHBvcnQgZGVmYXVsdCBVSUNvbnRyb2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZWxlbWVudHMvVUlDb250cm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBBQ1RJT05TIDp7XG4gICAgICAgIFNIQVJFRDp7XG4gICAgICAgICAgICBERUxFVEUgOiAnc2hhcmVkX2RlbGV0ZScsXG4gICAgICAgICAgICBHUk9VUCA6ICdzaGFyZWRfZ3JvdXAnLFxuICAgICAgICAgICAgVU5HUk9VUCA6ICdzaGFyZWRfdW5ncm91cCcsXG4gICAgICAgICAgICBVTkRPIDogJ3NoYXJlZF91bmRvJyxcbiAgICAgICAgICAgIFJFRE8gOiAnc2hhcmVkX3JlZG8nLFxuICAgICAgICAgICAgUEFTVEU6ICdzaGFyZWRfcGFzdGUnLFxuICAgICAgICAgICAgR1JBUEhfUkVTSVpFOiAnZ3JhcGhSZXNpemUnIFxuICAgICAgICB9LFxuICAgICAgICBDT1BZIDogJ2NvcHknLFxuICAgICAgICBQQVNURSA6ICdwYXN0ZScsXG4gICAgICAgIENPTlNPTEUgOiAndG9nZ2xlQ29uc29sZScsXG4gICAgfSxcbiAgICBJTUFHRVMgOiB7XG4gICAgICAgIENPUFkgOiAnaW1hZ2VzL3Rvb2xib3gvY29weS5wbmcnLFxuICAgICAgICBQQVNURSA6ICdpbWFnZXMvdG9vbGJveC9wYXN0ZS5wbmcnLFxuICAgICAgICBERUxFVEU6ICdpbWFnZXMvdG9vbGJveC9kZWxldGUucG5nJyxcbiAgICAgICAgVU5ETyA6ICdpbWFnZXMvdG9vbGJveC91bmRvMi5wbmcnLFxuICAgICAgICBSRURPIDogJ2ltYWdlcy90b29sYm94L3JlZG8yLnBuZycsXG4gICAgICAgIEdST1VQOiAnaW1hZ2VzL3Rvb2xib3gvZ3JvdXAucG5nJyxcbiAgICAgICAgVU5HUk9VUCA6ICdpbWFnZXMvdG9vbGJveC91bmdyb3VwLnBuZycsXG4gICAgICAgIENPTlNPTEUgOiAnaW1hZ2VzL3Rvb2xib3gvY29uc29sZS5wbmcnXG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL21pc2MvQ29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qKlxuICogU29tZSBoZWxwZXIgZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIFV0aWwoKSB7fVxuXG4vKipcbiAqIFJldHVybnMgdGhlIElkcyBmb3IgY2VsbHMgY3VycmVudGx5IHNlbGVjdGVkIGluIHRoZSBncmFwaFxuICogQHJldHVybnthcnJheX0gYXJyYXkgb2YgaWRzXG4gKi9cblV0aWwuZ2V0SWRzT2ZTZWxlY3RlZENlbGxzID0gZnVuY3Rpb24gKGdyYXBoKSB7XG4gICAgdmFyIGNlbGxzID0gZ3JhcGguZ2V0U2VsZWN0aW9uQ2VsbHMoKTtcbiAgICB2YXIgaWRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZHMucHVzaChjZWxsc1tpXS5pZCk7XG4gICAgfVxuICAgIHJldHVybiBpZHM7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGNlbGxzIGZvciB0aGUgZ2l2ZW4gaWRzXG4gKiBAcGFyYW0ge2FycmF5fSBpZHMgdGhlIGlkcyBhcyBzdHJpbmcgdG8gbG9vayBmb3IgXG4gKi9cblV0aWwuZ2V0Q2VsbHNGcm9tSWRMaXN0ID0gZnVuY3Rpb24gKGdyYXBoLCBpZHMpIHtcbiAgICB2YXIgY2VsbHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjZWxscy5wdXNoKGdyYXBoLmdldE1vZGVsKCkuZ2V0Q2VsbChpZHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGNlbGxzO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIEdVSUQgc3RyaW5nLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIGdlbmVyYXRlZCBHVUlELlxuICogQGV4YW1wbGUgYWY4YTg0MTY2ZTE4YTMwN2JkOWNmMmM5NDdiYmIzYWFcbiAqIEBhdXRob3IgU2xhdmlrIE1lbHRzZXIgKHNsYXZpa0BtZWx0c2VyLmluZm8pLlxuICogQGxpbmsgaHR0cDovL3NsYXZpay5tZWx0c2VyLmluZm8vP3A9MTQyXG4gKi9cblV0aWwuR1VJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBfcDgocykge1xuICAgICAgICB2YXIgcCA9IChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KSArIFwiMDAwMDAwMDAwXCIpLnN1YnN0cigyLCA4KTtcbiAgICAgICAgcmV0dXJuIHMgPyBwLnN1YnN0cigwLCA0KSArIHAuc3Vic3RyKDQsIDQpIDogcDtcbiAgICB9XG4gICAgcmV0dXJuIF9wOCgpICsgX3A4KHRydWUpICsgX3A4KHRydWUpICsgX3A4KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWlzYy9VdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgVUlDb250cm9sIGZyb20gJy4vVUlDb250cm9sLmpzJztcblxuVUlNZWRpYS5wcm90b3R5cGUgPSBuZXcgVUlDb250cm9sKCk7XG5VSU1lZGlhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFVJTWVkaWE7XG5cbmZ1bmN0aW9uIFVJTWVkaWEoZ2VvbWV0cnksIHN0eWxlKSB7XG4gICAgVUlDb250cm9sLmNhbGwodGhpcywgZ2VvbWV0cnksIHN0eWxlKTtcbiAgICB0aGlzLnZhbHVlLnNldEF0dHJpYnV0ZSgnc3JjJywgJycpO1xuICAgIHRoaXMudmFsdWUuc2V0QXR0cmlidXRlKCdjb250cm9scycsIHRydWUpO1xuICAgIHRoaXMudmFsdWUuc2V0QXR0cmlidXRlKCdhdXRvcGxheScsIGZhbHNlKTtcbiAgICB0aGlzLnZhbHVlLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCBmYWxzZSk7XG4gICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoJ2xvb3AnLCBmYWxzZSk7XG4gICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnLCAnYXV0bycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5leHBvcnQgZGVmYXVsdCBVSU1lZGlhO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2VsZW1lbnRzL1VJTWVkaWEuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuLypnbG9iYWwgeSovXG5pbXBvcnQge1xuICAgIG14RWRpdG9yLFxuICAgIG14VXRpbHMsXG4gICAgbXhTdGVuY2lsLFxuICAgIG14U3RlbmNpbFJlZ2lzdHJ5LFxuICAgIG14R2VvbWV0cnksXG4gICAgbXhDb25zdGFudHMsXG4gICAgbXhDZWxsUmVuZGVyZXIsXG4gICAgbXhHcmFwaFxufSBmcm9tICcuL21pc2MvbXhFeHBvcnQuanMnO1xuaW1wb3J0IFVJQ29udHJvbCBmcm9tICcuL2VsZW1lbnRzL1VJQ29udHJvbC5qcyc7XG5pbXBvcnQgS2V5SGFuZGxlciBmcm9tICcuL0tleUhhbmRsZXIuanMnO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vQ29udGV4dE1lbnUuanMnO1xuXG5pbXBvcnQgVmlkZW9QbGF5ZXJTaGFwZSBmcm9tICcuL3NoYXBlcy9WaWRlb1NoYXBlLmpzJztcbmltcG9ydCBBdWRpb1BsYXllclNoYXBlIGZyb20gJy4vc2hhcGVzL0F1ZGlvU2hhcGUuanMnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuL2VsZW1lbnRzL0xpbmsuanMnO1xuaW1wb3J0IFRleHRCb3ggZnJvbSAnLi9lbGVtZW50cy9UZXh0Qm94LmpzJztcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi9lbGVtZW50cy9QYXJhZ3JhcGguanMnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vZWxlbWVudHMvVGV4dEFyZWEuanMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2VsZW1lbnRzL0J1dHRvbi5qcyc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9lbGVtZW50cy9UZXh0Tm9kZS5qcyc7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSAnLi9lbGVtZW50cy9DaGVja0JveC5qcyc7XG5pbXBvcnQgUmFkaW9CdG4gZnJvbSAnLi9lbGVtZW50cy9SYWRpb0J1dHRvbi5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9lbGVtZW50cy9JbWFnZS5qcyc7XG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnLi9lbGVtZW50cy9WaWRlb1BsYXllci5qcyc7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSAnLi9lbGVtZW50cy9BdWRpb1BsYXllci5qcyc7XG5pbXBvcnQgRGl2Q29udGFpbmVyIGZyb20gJy4vZWxlbWVudHMvRGl2Q29udGFpbmVyLmpzJztcblxuRWRpdG9yLnByb3RvdHlwZSA9IG5ldyBteEVkaXRvcigpO1xuRWRpdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVkaXRvcjtcblxuZnVuY3Rpb24gRWRpdG9yKHdpcmVmcmFtZSwgcGFsZXR0ZSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBteEVkaXRvci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuZ3JhcGggPSB3aXJlZnJhbWU7XG4gICAgdGhpcy5pbnN0YWxsVW5kb0hhbmRsZXIod2lyZWZyYW1lKTtcbiAgICB0aGlzLnNldEdyYXBoQ29udGFpbmVyKHdpcmVmcmFtZS5jb250YWluZXIpO1xuICAgIHRoaXMuc2V0VG9vbGJhckNvbnRhaW5lcihwYWxldHRlLmNvbnRhaW5lcik7XG4gICAgdGhpcy5rZXlIYW5kbGVyID0gbmV3IEtleUhhbmRsZXIodGhpcyk7XG4gICAgLy9FZGl0b3IucHJvdG90eXBlLmRpc2FibGVDb250ZXh0TWVudSA9IGZhbHNlO1xuICAgIC8vdGhpcy5wb3B1cEhhbmRsZXIgPSBuZXcgQ29udGV4dE1lbnUoJ2NvbnRleHRtZW51LnhtbCcpO1xuICAgIG5ldyBDb250ZXh0TWVudSh0aGlzKTtcbiAgICAvL0xvYWQgc3RlbmNpbHMgXG4gICAgdmFyIHhtbCA9IG14VXRpbHMubG9hZCgnaHRtbDVzdGVuY2lscy54bWwnKTtcbiAgICB2YXIgcm9vdCA9IHhtbC5nZXREb2N1bWVudEVsZW1lbnQoKTtcbiAgICB2YXIgc2hhcGUgPSByb290LmZpcnN0Q2hpbGQ7XG5cbiAgICB3aGlsZSAoc2hhcGUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoc2hhcGUubm9kZVR5cGUgPT0gbXhDb25zdGFudHMuTk9ERVRZUEVfRUxFTUVOVCkge1xuICAgICAgICAgICAgdmFyIHN0ZW5jaWwgPSBuZXcgbXhTdGVuY2lsKHNoYXBlKTtcbiAgICAgICAgICAgIC8vdmFyIHN0ZW5jaWxOYW1lID0gc2hhcGUuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgICBteFN0ZW5jaWxSZWdpc3RyeS5hZGRTdGVuY2lsKHNoYXBlLmdldEF0dHJpYnV0ZSgnbmFtZScpLCBzdGVuY2lsKTtcbiAgICAgICAgfVxuICAgICAgICBzaGFwZSA9IHNoYXBlLm5leHRTaWJsaW5nO1xuICAgIH1cblxuICAgIG14Q2VsbFJlbmRlcmVyLnByb3RvdHlwZS5kZWZhdWx0U2hhcGVzW1ZpZGVvUGxheWVyU2hhcGUucHJvdG90eXBlLmNzdC5TSEFQRV0gPSBWaWRlb1BsYXllclNoYXBlO1xuICAgIG14Q2VsbFJlbmRlcmVyLnByb3RvdHlwZS5kZWZhdWx0U2hhcGVzW0F1ZGlvUGxheWVyU2hhcGUucHJvdG90eXBlLmNzdC5TSEFQRV0gPSBBdWRpb1BsYXllclNoYXBlO1xuXG4gICAgeS5zaGFyZS5hdHRycy5vYnNlcnZlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgaWQgPSBldmVudC5uYW1lLnN1YnN0cmluZygwLCBldmVudC5uYW1lLmluZGV4T2YoJ18nKSk7XG4gICAgICAgIHZhciBjZWxsID0gdGhhdC5ncmFwaC5nZXRNb2RlbCgpLmdldENlbGwoaWQpO1xuICAgICAgICBpZiAoY2VsbCBpbnN0YW5jZW9mIFJhZGlvQnRuIHx8IGNlbGwgaW5zdGFuY2VvZiBDaGVja0JveClcbiAgICAgICAgICAgIGV2ZW50LnZhbHVlLmJpbmQoY2VsbC4kaW5wdXQuZmluZCgnaW5wdXRbdHlwZT1cImlucHV0XCJdJylbMF0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBldmVudC52YWx1ZS5iaW5kKGNlbGwuJGlucHV0WzBdKTtcbiAgICB9KTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE92ZXJyaWRlcyBmdW5jdGlvbnMgZnJvbSBXaXJlZnJhbWUgd2hpY2ggaXMgZGVyaXZlZCBmcm9tIG14R3JhcGggXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIGdldExhYmVsIGZyb20gbXhHcmFwaCBmb3IgdGhlIFdpcmVmcmFtZS1jbGFzc1xuICAgICAqL1xuICAgIHRoYXQuZ3JhcGguZ2V0TGFiZWwgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gbXhHcmFwaC5wcm90b3R5cGUuZ2V0TGFiZWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHN0YXRlIGluc3RhbmNlb2YgRGl2Q29udGFpbmVyKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnZhbHVlLmdldEF0dHJpYnV0ZSgnbGFiZWwnKTtcbiAgICAgICAgZWxzZSByZXR1cm4gbGFiZWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWNlcyBjcmVhdGVHcm91cENlbGwgZnJvbSB0aGUgc3VwZXJjbGFzcyBteEdyYXBoIGZvciB0aGUgV2lyZWZyYW1lLWNsYXNzXG4gICAgICovXG4gICAgLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG4gICAgdGhhdC5ncmFwaC5jcmVhdGVHcm91cENlbGwgPSBmdW5jdGlvbiAoY2VsbHMpIHtcbiAgICAgICAgdmFyIGdyb3VwID0gbmV3IERpdkNvbnRhaW5lcigpO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHZhciBjZWxsLCB0eXBlLCBzaGFwZUNlbGw7XG4gICAgY2VsbCA9IG5ldyBEaXZDb250YWluZXIobmV3IG14R2VvbWV0cnkoMCwgMCwgMjUwLCAzMDApKTtcbiAgICB0eXBlID0gcGFsZXR0ZS5jcmVhdGVJdGVtKGNlbGwsIFwiVUkgQ29tcG9uZW50IENvbnRhaW5lclwiKTtcbiAgICBjZWxsLm1ha2VUeXBlRHJhZ2dhYmxlKHR5cGUsIHdpcmVmcmFtZSk7XG5cbiAgICBjZWxsID0gbmV3IFRleHROb2RlKG5ldyBteEdlb21ldHJ5KDAsIDAsIDE1MCwgNTApKTtcbiAgICBzaGFwZUNlbGwgPSBuZXcgVUlDb250cm9sKGNlbGwuZ2VvbWV0cnksIG14Q29uc3RhbnRzLlNUWUxFX1NIQVBFICsgJz10ZXh0bm9kZTsnKTtcbiAgICB0eXBlID0gcGFsZXR0ZS5jcmVhdGVJdGVtKHNoYXBlQ2VsbCwgXCJUZXh0Tm9kZVwiLCB0cnVlKTtcbiAgICBjZWxsLm1ha2VUeXBlRHJhZ2dhYmxlKHR5cGUsIHdpcmVmcmFtZSk7XG5cbiAgICBjZWxsID0gbmV3IEJ1dHRvbihuZXcgbXhHZW9tZXRyeSgwLCAwLCAxMDAsIDUwKSk7XG4gICAgc2hhcGVDZWxsID0gbmV3IFVJQ29udHJvbChjZWxsLmdlb21ldHJ5LCBteENvbnN0YW50cy5TVFlMRV9TSEFQRSArICc9YnV0dG9uOycpO1xuICAgIHR5cGUgPSBwYWxldHRlLmNyZWF0ZUl0ZW0oc2hhcGVDZWxsLCBcIkJ1dHRvblwiLCBmYWxzZSk7XG4gICAgY2VsbC5tYWtlVHlwZURyYWdnYWJsZSh0eXBlLCB3aXJlZnJhbWUpO1xuXG4gICAgY2VsbCA9IG5ldyBMaW5rKG5ldyBteEdlb21ldHJ5KDAsIDAsIDUwLCAzMCkpO1xuICAgIHNoYXBlQ2VsbCA9IG5ldyBVSUNvbnRyb2woY2VsbC5nZW9tZXRyeSwgbXhDb25zdGFudHMuU1RZTEVfU0hBUEUgKyAnPWxpbms7JyArIG14Q29uc3RhbnRzLlNUWUxFX0ZJTExDT0xPUiArIFwiPW5vbmU7XCIpO1xuICAgIHR5cGUgPSBwYWxldHRlLmNyZWF0ZUl0ZW0oc2hhcGVDZWxsLCBcIkxpbmtcIiwgZmFsc2UpO1xuICAgIGNlbGwubWFrZVR5cGVEcmFnZ2FibGUodHlwZSwgd2lyZWZyYW1lKTtcblxuICAgIGNlbGwgPSBuZXcgVGV4dEJveChuZXcgbXhHZW9tZXRyeSgwLCAwLCAxMjAsIDMwKSk7XG4gICAgc2hhcGVDZWxsID0gbmV3IFVJQ29udHJvbChjZWxsLmdlb21ldHJ5LCBteENvbnN0YW50cy5TVFlMRV9TSEFQRSArICc9dGV4dGJveDsnICsgbXhDb25zdGFudHMuU1RZTEVfRklMTENPTE9SICsgXCI9d2hpdGU7XCIgKyArbXhDb25zdGFudHMuU1RZTEVfU1RST0tFQ09MT1IgKyAnPWJsYWNrOycpO1xuICAgIHR5cGUgPSBwYWxldHRlLmNyZWF0ZUl0ZW0oc2hhcGVDZWxsLCBcIlRleHRCb3hcIiwgdHJ1ZSk7XG4gICAgY2VsbC5tYWtlVHlwZURyYWdnYWJsZSh0eXBlLCB3aXJlZnJhbWUpO1xuXG4gICAgY2VsbCA9IG5ldyBQYXJhZ3JhcGgobmV3IG14R2VvbWV0cnkoMCwgMCwgMzIwLCA4MCkpO1xuICAgIHNoYXBlQ2VsbCA9IG5ldyBVSUNvbnRyb2woY2VsbC5nZW9tZXRyeSwgbXhDb25zdGFudHMuU1RZTEVfU0hBUEUgKyAnPXBhcmFncmFwaDsnICsgbXhDb25zdGFudHMuU1RZTEVfRklMTENPTE9SICsgXCI9d2hpdGU7XCIgKyArbXhDb25zdGFudHMuU1RZTEVfU1RST0tFQ09MT1IgKyAnPWJsYWNrOycpO1xuICAgIHR5cGUgPSBwYWxldHRlLmNyZWF0ZUl0ZW0oc2hhcGVDZWxsLCBcIlBhcmFncmFwaCBvZiBUZXh0XCIsIHRydWUpO1xuICAgIGNlbGwubWFrZVR5cGVEcmFnZ2FibGUodHlwZSwgd2lyZWZyYW1lKTtcblxuICAgIGNlbGwgPSBuZXcgVGV4dEFyZWEobmV3IG14R2VvbWV0cnkoMCwgMCwgMzIwLCA4MCkpO1xuICAgIHNoYXBlQ2VsbCA9IG5ldyBVSUNvbnRyb2woY2VsbC5nZW9tZXRyeSwgbXhDb25zdGFudHMuU1RZTEVfU0hBUEUgKyAnPXRleHRhcmVhOycgKyBteENvbnN0YW50cy5TVFlMRV9GSUxMQ09MT1IgKyBcIj13aGl0ZTtcIiArICtteENvbnN0YW50cy5TVFlMRV9TVFJPS0VDT0xPUiArICc9YmxhY2s7Jyk7XG4gICAgdHlwZSA9IHBhbGV0dGUuY3JlYXRlSXRlbShzaGFwZUNlbGwsIFwiVGV4dEFyZWFcIiwgdHJ1ZSk7XG4gICAgY2VsbC5tYWtlVHlwZURyYWdnYWJsZSh0eXBlLCB3aXJlZnJhbWUpO1xuXG4gICAgY2VsbCA9IG5ldyBDaGVja0JveChuZXcgbXhHZW9tZXRyeSgwLCAwLCAxNTAsIDMwKSk7XG4gICAgc2hhcGVDZWxsID0gbmV3IFVJQ29udHJvbChjZWxsLmdlb21ldHJ5LCBteENvbnN0YW50cy5TVFlMRV9TSEFQRSArICc9Y2hlY2tib3g7JyArIG14Q29uc3RhbnRzLlNUWUxFX0ZJTExDT0xPUiArIFwiPXdoaXRlO1wiICsgK214Q29uc3RhbnRzLlNUWUxFX1NUUk9LRUNPTE9SICsgJz1ibGFjazsnKTtcbiAgICB0eXBlID0gcGFsZXR0ZS5jcmVhdGVJdGVtKHNoYXBlQ2VsbCwgXCJDaGVja2JveFwiLCB0cnVlKTtcbiAgICBjZWxsLm1ha2VUeXBlRHJhZ2dhYmxlKHR5cGUsIHdpcmVmcmFtZSk7XG5cbiAgICBjZWxsID0gbmV3IFJhZGlvQnRuKG5ldyBteEdlb21ldHJ5KDAsIDAsIDE1MCwgMzApKTtcbiAgICBzaGFwZUNlbGwgPSBuZXcgVUlDb250cm9sKGNlbGwuZ2VvbWV0cnksIG14Q29uc3RhbnRzLlNUWUxFX1NIQVBFICsgJz1yYWRpbzsnICsgbXhDb25zdGFudHMuU1RZTEVfRklMTENPTE9SICsgXCI9d2hpdGU7XCIgKyArbXhDb25zdGFudHMuU1RZTEVfU1RST0tFQ09MT1IgKyAnPWJsYWNrOycpO1xuICAgIHR5cGUgPSBwYWxldHRlLmNyZWF0ZUl0ZW0oc2hhcGVDZWxsLCBcIlJhZGlvIEJ1dHRvblwiLCB0cnVlKTtcbiAgICBjZWxsLm1ha2VUeXBlRHJhZ2dhYmxlKHR5cGUsIHdpcmVmcmFtZSk7XG5cbiAgICBjZWxsID0gbmV3IEltYWdlKG5ldyBteEdlb21ldHJ5KDAsIDAsIDEyOCwgMTI4KSk7XG4gICAgdHlwZSA9IHBhbGV0dGUuY3JlYXRlSXRlbShjZWxsLCBcIkltYWdlXCIsIGZhbHNlKTtcbiAgICBjZWxsLm1ha2VUeXBlRHJhZ2dhYmxlKHR5cGUsIHdpcmVmcmFtZSk7XG5cbiAgICBjZWxsID0gbmV3IFZpZGVvUGxheWVyKG5ldyBteEdlb21ldHJ5KDAsIDAsIDIwMCwgMTAwKSk7XG4gICAgdHlwZSA9IHBhbGV0dGUuY3JlYXRlSXRlbShjZWxsLCBcIlZpZGVvIFBsYXllclwiLCBmYWxzZSk7XG4gICAgY2VsbC5tYWtlVHlwZURyYWdnYWJsZSh0eXBlLCB3aXJlZnJhbWUpO1xuXG4gICAgY2VsbCA9IG5ldyBBdWRpb1BsYXllcihuZXcgbXhHZW9tZXRyeSgwLCAwLCAyMDAsIDMwKSk7XG4gICAgdHlwZSA9IHBhbGV0dGUuY3JlYXRlSXRlbShjZWxsLCBcIkF1ZGlvIFBsYXllclwiLCBmYWxzZSk7XG4gICAgY2VsbC5tYWtlVHlwZURyYWdnYWJsZSh0eXBlLCB3aXJlZnJhbWUpO1xuXG5cbiAgICAvL2hvcml6b250YWwgbGluZVxuICAgIHBhbGV0dGUuYWRkTGluZSgpO1xuICAgIC8vcGFsZXR0ZS5hZGRCcmVhaygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvRWRpdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQge1xuICAgIG14VG9vbGJhcixcbiAgICBteEdyYXBoLFxuICAgIG14Q29uc3RhbnRzLFxuICAgIG14RXZlbnRcbn0gZnJvbSAnLi9taXNjL214RXhwb3J0LmpzJztcblBhbGV0dGUucHJvdG90eXBlID0gbmV3IG14VG9vbGJhcigpO1xuUGFsZXR0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYWxldHRlO1xuXG4vKipcbiAqIFRoZSBwYWxldHRlIG9mIHRoZSB3aXJlZnJhbWluZyBlZGl0b3JcbiAqIEBwYXJhbSB7RE9NfSBjb250YWluZXIgXG4gKi9cbmZ1bmN0aW9uIFBhbGV0dGUoY29udGFpbmVyKSB7XG4gICAgbXhUb29sYmFyLmNhbGwodGhpcywgY29udGFpbmVyKTtcblxuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGNyZWF0ZVRlbXBvcmFyeUdyYXBoID0gZnVuY3Rpb24gKHN0eWxlc2hlZXQpIHtcbiAgICAgICAgdmFyIGdyYXBoID0gbmV3IG14R3JhcGgoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIG51bGwsIG51bGwsIHN0eWxlc2hlZXQpO1xuICAgICAgICBncmFwaC5yZXNldFZpZXdPblJvb3RDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgZ3JhcGguc2V0Q29ubmVjdGFibGUoZmFsc2UpO1xuICAgICAgICBncmFwaC5ncmlkRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBncmFwaC5hdXRvU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgIGdyYXBoLnNldFRvb2x0aXBzKGZhbHNlKTtcbiAgICAgICAgZ3JhcGguc2V0RW5hYmxlZChmYWxzZSk7XG5cbiAgICAgICAgLy8gQ29udGFpbmVyIG11c3QgYmUgaW4gdGhlIERPTSBmb3IgY29ycmVjdCBIVE1MIHJlbmRlcmluZ1xuICAgICAgICBncmFwaC5jb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBncmFwaC5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBncmFwaC5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgZ3JhcGguY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgICAgICBncmFwaC5jb250YWluZXIuc3R5bGUud2lkdGggPSAnMXB4JztcblxuICAgICAgICByZXR1cm4gZ3JhcGg7XG4gICAgfTtcblxuICAgIC8vVE9ET1xuICAgIHZhciBncmFwaCA9IG5ldyBjcmVhdGVUZW1wb3JhcnlHcmFwaCgpO1xuICAgIHZhciB0aHVtYkJvcmRlciA9IDE7XG4gICAgdmFyIHRodW1iV2lkdGggPSA1MDtcbiAgICB2YXIgdGh1bWJIZWlnaHQgPSA1MDtcbiAgICB2YXIgdGh1bWJQYWRkaW5nID0gMTtcblxuICAgIC8qKlxuICAgICAqIEdldCBhIG5vZGUgZW50cnkgdG8gdGhlIGdpdmVuIHBhcmVudFxuICAgICAqIEBwYXJhbSB7RE9NfSBwYXJlbnQgXG4gICAgICovXG4gICAgdmFyIGdldE5vZGVFbnRyeSA9IGZ1bmN0aW9uIChjZWxsLCBzaG93TGFiZWwpIHtcbiAgICAgICAgZ3JhcGgubGFiZWxzVmlzaWJsZSA9IHNob3dMYWJlbCB8fCBmYWxzZTtcbiAgICAgICAgZ3JhcGgudmlldy5zY2FsZUFuZFRyYW5zbGF0ZSgxLCAwLCAwKTtcblxuICAgICAgICBncmFwaC5hZGRDZWxsKGNlbGwpO1xuICAgICAgICB2YXIgYm91bmRzID0gZ3JhcGguZ2V0R3JhcGhCb3VuZHMoKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKE1hdGgubWluKCh0aHVtYldpZHRoIC0gMiAqIHRodW1iQm9yZGVyKSAvIGJvdW5kcy53aWR0aCwgKHRodW1iSGVpZ2h0IC0gMiAqIHRodW1iQm9yZGVyKSAvIGJvdW5kcy5oZWlnaHQpICogMTAwKSAvIDEwMDtcbiAgICAgICAgZ3JhcGgudmlldy5zY2FsZUFuZFRyYW5zbGF0ZShzLCBNYXRoLmZsb29yKCh0aHVtYldpZHRoIC0gYm91bmRzLndpZHRoICogcykgLyAyIC8gcyAtIGJvdW5kcy54KSwgTWF0aC5mbG9vcigodGh1bWJIZWlnaHQgLSBib3VuZHMuaGVpZ2h0ICogcykgLyAyIC8gcyAtIGJvdW5kcy55KSk7XG4gICAgICAgIHZhciBub2RlID0gbnVsbDtcblxuICAgICAgICAvLyBGb3Igc3VwcG9ydGluZyBIVE1MIGxhYmVscyBpbiBJRTkgc3RhbmRhcmRzIG1vZGUgdGhlIGNvbnRhaW5lciBpcyBjbG9uZWQgaW5zdGVhZFxuICAgICAgICBpZiAoZ3JhcGguZGlhbGVjdCA9PSBteENvbnN0YW50cy5ESUFMRUNUX1NWRykge1xuICAgICAgICAgICAgbm9kZSA9IGdyYXBoLnZpZXcuZ2V0Q2FudmFzKCkub3duZXJTVkdFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMQVRFUjogQ2hlY2sgaWYgZGVlcCBjbG9uZSBjYW4gYmUgdXNlZCBmb3IgcXVpcmtzIGlmIGNvbnRhaW5lciBpbiBET01cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gZ3JhcGguY29udGFpbmVyLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IGdyYXBoLmNvbnRhaW5lci5pbm5lckhUTUw7XG4gICAgICAgIH1cblxuICAgICAgICBncmFwaC5nZXRNb2RlbCgpLmNsZWFyKCk7XG5cbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgbm9kZS5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUubGVmdCA9IHRodW1iQm9yZGVyICsgJ3B4JztcbiAgICAgICAgbm9kZS5zdHlsZS50b3AgPSB0aHVtYkJvcmRlciArICdweCc7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB0aHVtYldpZHRoICsgJ3B4JztcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSB0aHVtYkhlaWdodCArICdweCc7XG4gICAgICAgIG5vZGUuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgICAgICBub2RlLnN0eWxlLm1pbldpZHRoID0gJyc7XG4gICAgICAgIG5vZGUuc3R5bGUubWluSGVpZ2h0ID0gJyc7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbXtteENlbGx9IGNlbGxcbiAgICAgKi9cbiAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiAoY2VsbCwgbmFtZSwgc2hvd0xhYmVsKSB7XG4gICAgICAgIHZhciBlbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGVsdC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpO1xuICAgICAgICBlbHQuY2xhc3NOYW1lID0gJ2l0ZW0gdG9vbHRpcCc7XG4gICAgICAgIGVsdC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICB2YXIgYm9yZGVyID0gMiAqIHRodW1iQm9yZGVyO1xuICAgICAgICBlbHQuc3R5bGUud2lkdGggPSAodGh1bWJXaWR0aCArIGJvcmRlcikgKyAncHgnO1xuICAgICAgICBlbHQuc3R5bGUuaGVpZ2h0ID0gKHRodW1iSGVpZ2h0ICsgYm9yZGVyKSArICdweCc7XG4gICAgICAgIGVsdC5zdHlsZS5wYWRkaW5nID0gdGh1bWJQYWRkaW5nICsgJ3B4JztcblxuICAgICAgICAvLyBCbG9ja3MgZGVmYXVsdCBjbGljayBhY3Rpb25cbiAgICAgICAgbXhFdmVudC5hZGRMaXN0ZW5lcihlbHQsICdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIG14RXZlbnQuY29uc3VtZShldnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWx0LmFwcGVuZENoaWxkKGdldE5vZGVFbnRyeShjZWxsLCBzaG93TGFiZWwpKTtcbiAgICAgICAgdmFyIHRvb2x0aXAgPSBjcmVhdGVUb29sdGlwKG5hbWUpO1xuXG4gICAgICAgIC8vdmFyIGJvdW5kcyA9IG5ldyBteFJlY3RhbmdsZSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgZWx0LmFwcGVuZENoaWxkKHRvb2x0aXApO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWx0KTtcbiAgICAgICAgcmV0dXJuIGVsdDtcbiAgICB9XG5cbiAgICB2YXIgY3JlYXRlVG9vbHRpcCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHZhciB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0b29sdGlwLmNsYXNzTmFtZSA9ICd0b29sdGlwdGV4dCc7XG4gICAgICAgIHRvb2x0aXAuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHRvb2x0aXA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuZXhwb3J0IGRlZmF1bHQgUGFsZXR0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9QYWxldHRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKmdsb2JhbCB5Ki9cbmltcG9ydCB7XG4gICAgbXhEZWZhdWx0VG9vbGJhcixcbiAgICBteEV2ZW50LFxuICAgIG14Q29kZWMsXG4gICAgbXhMb2csXG4gICAgbXhDbGllbnQsXG4gICAgbXhDbGlwYm9hcmQsXG4gICAgbXhVdGlscyxcbiAgICBteFJlY3RhbmdsZVxufSBmcm9tICcuL21pc2MvbXhFeHBvcnQuanMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBVdGlsIGZyb20gJy4vbWlzYy9VdGlsLmpzJztcbmltcG9ydCBDT05TVCBmcm9tICcuL21pc2MvQ29uc3RhbnRzLmpzJztcblxuVG9vbGJveC5wcm90b3R5cGUgPSBuZXcgbXhEZWZhdWx0VG9vbGJhcigpO1xuVG9vbGJveC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUb29sYm94O1xuXG5mdW5jdGlvbiBUb29sYm94KGNvbnRhaW5lciwgZWRpdG9yKSB7XG4gICAgbXhEZWZhdWx0VG9vbGJhci5jYWxsKHRoaXMsIGNvbnRhaW5lciwgZWRpdG9yKTtcblxuICAgIHRoaXMuX2VkaXRvciA9IGVkaXRvcjtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAvKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbiAgICBlZGl0b3IuYWRkQWN0aW9uKENPTlNULkFDVElPTlMuU0hBUkVELlBBU1RFLCBmdW5jdGlvbiAoZWRpdG9yLCBjZWxsKSB7XG4gICAgICAgIHZhciBlbmNvZGVyID0gbmV3IG14Q29kZWMoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGVuY29kZXIuZW5jb2RlKG14Q2xpcGJvYXJkLmdldENlbGxzKCkpO1xuICAgICAgICB2YXIgeG1sID0gbXhVdGlscy5nZXRYbWwocmVzdWx0KTtcbiAgICAgICAgeS5zaGFyZS5hY3Rpb24uc2V0KENPTlNULkFDVElPTlMuU0hBUkVELlBBU1RFLCB7XG4gICAgICAgICAgICB1c2VySWQ6IHkuZGIudXNlcklkLFxuICAgICAgICAgICAgeG1sOiB4bWxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbiAgICBlZGl0b3IuYWRkQWN0aW9uKENPTlNULkFDVElPTlMuU0hBUkVELkRFTEVURSwgZnVuY3Rpb24gKGVkaXRvciwgY2VsbCkge1xuICAgICAgICB5LnNoYXJlLmFjdGlvbi5zZXQobXhFdmVudC5SRU1PVkUsIFV0aWwuZ2V0SWRzT2ZTZWxlY3RlZENlbGxzKHRoYXQuX2VkaXRvci5ncmFwaCkpO1xuICAgIH0pO1xuXG4gICAgLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG4gICAgZWRpdG9yLmFkZEFjdGlvbihDT05TVC5BQ1RJT05TLkNPTlNPTEUsIGZ1bmN0aW9uIChlZGl0b3IsIGNlbGwpIHtcbiAgICAgICAgaWYgKG14TG9nLmlzVmlzaWJsZSgpKVxuICAgICAgICAgICAgbXhMb2cuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG14TG9nLnNldFZpc2libGUodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICAvKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cbiAgICBlZGl0b3IuYWRkQWN0aW9uKENPTlNULkFDVElPTlMuU0hBUkVELlVORE8sIGZ1bmN0aW9uIChlZGl0b3IsIGNlbGwpIHtcbiAgICAgICAgeS5zaGFyZS5hY3Rpb24uc2V0KG14RXZlbnQuVU5ETywgeS5kYi51c2VySWQpO1xuICAgIH0pO1xuXG4gICAgLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG4gICAgZWRpdG9yLmFkZEFjdGlvbihDT05TVC5BQ1RJT05TLlNIQVJFRC5SRURPLCBmdW5jdGlvbiAoZWRpdG9yLCBjZWxsKSB7XG4gICAgICAgIHkuc2hhcmUuYWN0aW9uLnNldChteEV2ZW50LlJFRE8sIHkuZGIudXNlcklkKTtcbiAgICB9KTtcblxuICAgIC8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xuICAgIGVkaXRvci5hZGRBY3Rpb24oQ09OU1QuQUNUSU9OUy5TSEFSRUQuR1JPVVAsIGZ1bmN0aW9uIChlZGl0b3IsIGNlbGwpIHtcblxuICAgICAgICB5LnNoYXJlLmFjdGlvbi5zZXQobXhFdmVudC5HUk9VUF9DRUxMUywge1xuICAgICAgICAgICAgdXNlcklkOiB5LmRiLnVzZXJJZCxcbiAgICAgICAgICAgIGlkczogVXRpbC5nZXRJZHNPZlNlbGVjdGVkQ2VsbHModGhhdC5fZWRpdG9yLmdyYXBoKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xuICAgIGVkaXRvci5hZGRBY3Rpb24oQ09OU1QuQUNUSU9OUy5TSEFSRUQuVU5HUk9VUCwgZnVuY3Rpb24gKGVkaXRvciwgY2VsbCkge1xuICAgICAgICB5LnNoYXJlLmFjdGlvbi5zZXQobXhFdmVudC5VTkdST1VQX0NFTExTLCB7XG4gICAgICAgICAgICB1c2VySWQ6IHkuZGIudXNlcklkLFxuICAgICAgICAgICAgaWRzOiBVdGlsLmdldElkc09mU2VsZWN0ZWRDZWxscyh0aGF0Ll9lZGl0b3IuZ3JhcGgpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgeS5zaGFyZS5hY3Rpb24ub2JzZXJ2ZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlIG14RXZlbnQuVU5ETzpcbiAgICAgICAgICAgICAgICAvL3RoYXQuX2VkaXRvci5leGVjdXRlKFwidW5kb1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudmFsdWUgIT09IHkuZGIudXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZWxscyA9IHRoYXQuX2VkaXRvci5ncmFwaC5nZXRTZWxlY3Rpb25DZWxscygpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9lZGl0b3IudW5kbygpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9lZGl0b3IuZ3JhcGguc2V0U2VsZWN0aW9uQ2VsbHMoY2VsbHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9lZGl0b3IudW5kbygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBteEV2ZW50LlJFRE86XG4gICAgICAgICAgICAgICAgLy90aGF0Ll9lZGl0b3IuZXhlY3V0ZShcInJlZG9cIik7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnZhbHVlICE9PSB5LmRiLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbHMgPSB0aGF0Ll9lZGl0b3IuZ3JhcGguZ2V0U2VsZWN0aW9uQ2VsbHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fZWRpdG9yLnJlZG8oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fZWRpdG9yLmdyYXBoLnNldFNlbGVjdGlvbkNlbGxzKGNlbGxzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fZWRpdG9yLnJlZG8oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbXhFdmVudC5SRU1PVkU6XG4gICAgICAgICAgICAgICAgdGhhdC5fZWRpdG9yLmdyYXBoLnNldFNlbGVjdGlvbkNlbGxzKFV0aWwuZ2V0Q2VsbHNGcm9tSWRMaXN0KHRoYXQuX2VkaXRvci5ncmFwaCwgZXZlbnQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB0aGF0Ll9lZGl0b3IuZXhlY3V0ZShcImRlbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbXhFdmVudC5HUk9VUF9DRUxMUzpcbiAgICAgICAgICAgICAgICB2YXIgZ3JvdXAgPSB0aGF0Ll9lZGl0b3IuZ3JhcGguZ3JvdXBDZWxscyhudWxsLCAyMCwgVXRpbC5nZXRDZWxsc0Zyb21JZExpc3QodGhhdC5fZWRpdG9yLmdyYXBoLCBldmVudC52YWx1ZS5pZHMpKTtcbiAgICAgICAgICAgICAgICBpZiAoeS5kYi51c2VySWQgPT09IGV2ZW50LnZhbHVlLnVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgLy90aGF0Ll9lZGl0b3IuZ3JhcGguc2V0U2VsZWN0aW9uQ2VsbHMoZ3JvdXApO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9lZGl0b3IuZ3JhcGguZ2V0U2VsZWN0aW9uTW9kZWwoKS5zZXRDZWxsKGdyb3VwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBteEV2ZW50LlVOR1JPVVBfQ0VMTFM6XG4gICAgICAgICAgICAgICAgdmFyIGNlbGxzID0gdGhhdC5fZWRpdG9yLmdyYXBoLnVuZ3JvdXBDZWxscyhVdGlsLmdldENlbGxzRnJvbUlkTGlzdCh0aGF0Ll9lZGl0b3IuZ3JhcGgsIGV2ZW50LnZhbHVlLmlkcykpO1xuICAgICAgICAgICAgICAgIGlmICh5LmRiLnVzZXJJZCA9PT0gZXZlbnQudmFsdWUudXNlcklkKVxuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9lZGl0b3IuZ3JhcGguc2V0U2VsZWN0aW9uQ2VsbHMoY2VsbHMpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENPTlNULkFDVElPTlMuU0hBUkVELlBBU1RFOlxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZENlbGxzID0gdGhhdC5fZWRpdG9yLmdyYXBoLmdldFNlbGVjdGlvbkNlbGxzKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZG9jID0gbXhVdGlscy5wYXJzZVhtbChldmVudC52YWx1ZS54bWwpO1xuICAgICAgICAgICAgICAgIHZhciBlbHQgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgdmFyIGNlbGxzID0gW107XG4gICAgICAgICAgICAgICAgd2hpbGUgKGVsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2RlYyA9IG5ldyBteENvZGVjKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZWxsID0gY29kZWMuZGVjb2RlKGVsdCk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIGVsdCA9IGVsdC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbXhDbGlwYm9hcmQuc2V0Q2VsbHMoY2VsbHMpO1xuICAgICAgICAgICAgICAgIG14Q2xpcGJvYXJkLnBhc3RlKHRoYXQuX2VkaXRvci5ncmFwaCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudmFsdWUudXNlcklkICE9PSB5LmRiLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9lZGl0b3IuZ3JhcGguc2V0U2VsZWN0aW9uQ2VsbHMoc2VsZWN0ZWRDZWxscyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDT05TVC5BQ1RJT05TLlNIQVJFRC5HUkFQSF9SRVNJWkU6IC8vZXZlbnQgdHJpZ2dlcmQgaW4gaW5kZXguaHRtbFxuICAgICAgICAgICAgICAgIGlmICh5LmRiLnVzZXJJZCAhPT0gZXZlbnQudmFsdWUudXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIHNpemUgPSAkKCcjd2lyZWZyYW1lV3JhcCcpLmNzcyhbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICQoJyN3aXJlZnJhbWVXcmFwJykuY3NzKFwid2lkdGhcIiwgXCIrPVwiICsgZXZlbnQudmFsdWUuZFdpZHRoKS5jc3MoXCJoZWlnaHRcIiwgXCIrPVwiICsgZXZlbnQudmFsdWUuZEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyN3aXJlZnJhbWUnKS5jc3MoXCJ3aWR0aFwiLCBcIis9XCIgKyBldmVudC52YWx1ZS5kV2lkdGgpLmNzcyhcImhlaWdodFwiLCBcIis9XCIgKyBldmVudC52YWx1ZS5kSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2RyYWdnaW5nQmFyJykuY3NzKFwid2lkdGhcIiwgXCIrPVwiICsgZXZlbnQudmFsdWUuZFdpZHRoKS5jc3MoXCJoZWlnaHRcIiwgXCIrPVwiICsgZXZlbnQudmFsdWUuZEhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwcmV2Qm91bmRzID0gdGhhdC5fZWRpdG9yLmdyYXBoLm1heGltdW1HcmFwaEJvdW5kcztcbiAgICAgICAgICAgICAgICB0aGF0Ll9lZGl0b3IuZ3JhcGgubWF4aW11bUdyYXBoQm91bmRzID0gbmV3IG14UmVjdGFuZ2xlKDAsIDAsIHByZXZCb3VuZHMud2lkdGggKyBldmVudC52YWx1ZS5kV2lkdGgsIHByZXZCb3VuZHMuaGVpZ2h0ICsgZXZlbnQudmFsdWUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRTZXBhcmF0b3IgPSBmdW5jdGlvbiAoaWNvbikge1xuICAgICAgICAvL1RoZSBmaXJzdCB0d28gbGluZXMgYXJlIGZyb20gdGhlIGFkZFNlcGVyYXRvcihpY29uKSBvZiBteERlZmF1bHRUb29sYmFyXG4gICAgICAgIGljb24gPSBpY29uIHx8IG14Q2xpZW50LmltYWdlQmFzZVBhdGggKyAnL3NlcGFyYXRvci5naWYnO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMudG9vbGJhci5hZGRTZXBhcmF0b3IoaWNvbik7XG4gICAgICAgICQoaXRlbSkuYWRkQ2xhc3MoXCJteFNlcGFyYXRvclwiKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgdGhpcy5hZGRTZXBhcmF0b3IoKTtcbiAgICB0aGlzLmFkZEl0ZW0oXCJDb3B5XCIsIENPTlNULklNQUdFUy5DT1BZLCBDT05TVC5BQ1RJT05TLkNPTlNPTEUpO1xuICAgIHRoaXMuYWRkSXRlbShcIlBhc3RlXCIsIENPTlNULklNQUdFUy5QQVNURSwgQ09OU1QuQUNUSU9OUy5TSEFSRUQuUEFTVEUpO1xuICAgIHRoaXMuYWRkU2VwYXJhdG9yKCk7XG4gICAgdGhpcy5hZGRJdGVtKFwiRGVsZXRlXCIsIENPTlNULklNQUdFUy5ERUxFVEUsIENPTlNULkFDVElPTlMuU0hBUkVELkRFTEVURSk7XG4gICAgdGhpcy5hZGRTZXBhcmF0b3IoKTtcbiAgICAvL3RoaXMuYWRkSXRlbShcIkN1dFwiLCBcImltYWdlcy90b29sYm94L2N1dC5naWZcIiwgXCJzaGFyZWRfY3V0XCIpO1xuICAgIHRoaXMuYWRkSXRlbShcIlVuZG9cIiwgQ09OU1QuSU1BR0VTLlVORE8sIENPTlNULkFDVElPTlMuU0hBUkVELlVORE8pO1xuICAgIHRoaXMuYWRkSXRlbShcIlJlZG9cIiwgQ09OU1QuSU1BR0VTLlJFRE8sIENPTlNULkFDVElPTlMuU0hBUkVELlJFRE8pO1xuICAgIHRoaXMuYWRkU2VwYXJhdG9yKCk7XG4gICAgdGhpcy5hZGRJdGVtKFwiR3JvdXBcIiwgQ09OU1QuSU1BR0VTLkdST1VQLCBDT05TVC5BQ1RJT05TLlNIQVJFRC5HUk9VUCk7XG4gICAgdGhpcy5hZGRJdGVtKFwiVW5ncm91cFwiLCBDT05TVC5JTUFHRVMuVU5HUk9VUCwgQ09OU1QuQUNUSU9OUy5TSEFSRUQuVU5HUk9VUCk7XG4gICAgdGhpcy5hZGRTZXBhcmF0b3IoKTtcbiAgICB0aGlzLmFkZEl0ZW0oXCJDb25zb2xlXCIsIENPTlNULklNQUdFUy5DT05TT0xFLCBDT05TVC5BQ1RJT05TLkNPTlNPTEUpO1xuICAgIHRoaXMuYWRkU2VwYXJhdG9yKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cbmV4cG9ydCBkZWZhdWx0IFRvb2xib3g7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvVG9vbGJveC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLypnbG9iYWwgeSovXG5pbXBvcnQgVUlDb250cm9sIGZyb20gJy4vZWxlbWVudHMvVUlDb250cm9sLmpzJztcblxud2luZG93LlVJQ29udHJvbCA9IFVJQ29udHJvbDtcbmltcG9ydCB7XG4gICAgbXhHcmFwaCxcbiAgICBteEV2ZW50LFxuICAgIG14R3JhcGhIYW5kbGVyLFxuICAgIG14Q29kZWMsXG4gICAgbXhLZXlIYW5kbGVyLFxuICAgIG14UnViYmVyYmFuZCxcbiAgICBteFV0aWxzLFxuICAgIG14UmVjdGFuZ2xlLFxuICAgIG14R2VvbWV0cnlcbn0gZnJvbSAnLi9taXNjL214RXhwb3J0LmpzJztcbmltcG9ydCBVdGlsIGZyb20gJy4vbWlzYy9VdGlsLmpzJztcblxud2luZG93Lm14R2VvbWV0cnkgPSBteEdlb21ldHJ5O1xuV2lyZWZyYW1lLnByb3RvdHlwZSA9IG5ldyBteEdyYXBoKCk7XG5XaXJlZnJhbWUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV2lyZWZyYW1lO1xuXG5mdW5jdGlvbiBXaXJlZnJhbWUoY29udGFpbmVyKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIG14R3JhcGguY2FsbCh0aGlzLCBjb250YWluZXIpO1xuXG4gICAgLy92YXIgaGFuZGxlciA9IG5ldyBteEdyYXBoSGFuZGxlcih0aGF0KVxuXG4gICAgdGhhdC5mb2xkaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoYXQuYXV0b0V4dGVuZCA9IGZhbHNlO1xuICAgIHRoYXQuc2V0SHRtbExhYmVscyh0cnVlKTtcblxuICAgIHRoYXQubWF4aW11bUdyYXBoQm91bmRzID0gbmV3IG14UmVjdGFuZ2xlKDAsIDAsIDUwMCwgNTAwKTtcbiAgICAvL2VuYWJsZSBndWlkaW5nIGxpbmVzXG4gICAgbXhHcmFwaEhhbmRsZXIucHJvdG90eXBlLmd1aWRlc0VuYWJsZWQgPSB0cnVlO1xuICAgIG14R3JhcGhIYW5kbGVyLnByb3RvdHlwZS5oaWdobGlnaHRFbmFibGVkID0gdHJ1ZTtcblxuICAgIHZhciBzaGFyZWRBY3Rpb24gPSBudWxsO1xuICAgIHZhciBTaGFyZWRDZWxsc01vdmVkRXZlbnQgPSBmdW5jdGlvbiAod2YsIGV2ZW50KSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gZXZlbnQuZ2V0UHJvcGVydGllcygpO1xuICAgICAgICB2YXIgY2VsbHMgPSBwcm9wZXJ0aWVzLmNlbGxzO1xuICAgICAgICB2YXIgaWRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlkcy5wdXNoKGNlbGxzW2ldLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBzaGFyZWRBY3Rpb24gPSB7XG4gICAgICAgICAgICB1c2VySWQ6IHkuZGIudXNlcklkLFxuICAgICAgICAgICAgZHg6IHByb3BlcnRpZXMuZHgsXG4gICAgICAgICAgICBkeTogcHJvcGVydGllcy5keSxcbiAgICAgICAgICAgIGlkczogaWRzXG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgU2hhcmVkQ2VsbFJlc2l6ZWRFdmVudCA9IGZ1bmN0aW9uIChncmFwaCwgZXZlbnQpIHtcbiAgICAgICAgLy9Qcm91ZGx5IHN0b2xlbiBmcm9tIHRoZSBkb2NzXG4gICAgICAgIHZhciBjZWxscyA9IGV2ZW50LmdldFByb3BlcnR5KCdjZWxscycpO1xuICAgICAgICB2YXIgYm91bmRzID0gZXZlbnQuZ2V0UHJvcGVydHkoJ2JvdW5kcycpO1xuICAgICAgICBpZiAoY2VsbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChncmFwaC5nZXRNb2RlbCgpLmdldENoaWxkQ291bnQoY2VsbHNbaV0pID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ2VvID0gZ3JhcGguZ2V0Q2VsbEdlb21ldHJ5KGNlbGxzW2ldKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGdyYXBoLmdldENoaWxkQ2VsbHMoY2VsbHNbaV0sIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJiID0gZ3JhcGguZ2V0Qm91bmRpbmdCb3hGcm9tR2VvbWV0cnkoY2hpbGRyZW4sIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW8gPSBnZW8uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlby53aWR0aCA9IE1hdGgubWF4KGdlby53aWR0aCwgYmIud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvLmhlaWdodCA9IE1hdGgubWF4KGdlby5oZWlnaHQsIGJiLmhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoLmdldE1vZGVsKCkuc2V0R2VvbWV0cnkoY2VsbHNbaV0sIGdlbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGFyZWRBY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiB5LmRiLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBpZHM6IFtdLFxuICAgICAgICAgICAgICAgIGJvdW5kczogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkQWN0aW9uLmlkcy5wdXNoKGNlbGxzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICBzaGFyZWRBY3Rpb24uYm91bmRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB4OiBib3VuZHNbaV0ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYm91bmRzW2ldLnksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBib3VuZHNbaV0ud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYm91bmRzW2ldLmhlaWdodFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuICAgIHRoYXQuYWRkTGlzdGVuZXIobXhFdmVudC5DRUxMU19NT1ZFRCwgU2hhcmVkQ2VsbHNNb3ZlZEV2ZW50KTtcbiAgICB0aGF0LmFkZExpc3RlbmVyKG14RXZlbnQuQ0VMTFNfUkVTSVpFRCwgU2hhcmVkQ2VsbFJlc2l6ZWRFdmVudCk7XG4gICAgLyp0aGF0LmFkZExpc3RlbmVyKG14RXZlbnQuQ0VMTFNfQURERUQsIGZ1bmN0aW9uKHdmLCBldmVudCl7XG4gICAgICAgIHZhciB0ZXN0ID0gdHJ1ZTtcbiAgICB9KTsqL1xuXG5cbiAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcblxuICAgIC8vRm9yIHRoZSBEeW5hbWljR3JpZFxuICAgIC8vdGhpcy5ncmFwaEhhbmRsZXIuc2NhbGVHcmlkID0gdHJ1ZTsgXG4gICAgLy90aGlzLnNldFBhbm5pbmcodHJ1ZSk7XG5cbiAgICBuZXcgbXhLZXlIYW5kbGVyKHRoaXMpO1xuICAgIG5ldyBteFJ1YmJlcmJhbmQodGhpcyk7XG5cbiAgICAvKlxuICAgIHJ1YmJlckJhbmQubW91c2VEb3duID0gZnVuY3Rpb24od2YsIGV2dCl7XG4gICAgICAgIG14TG9nLmRlYnVnKFwibXhSdWJiZXJCYW5kIE1vdXNlRG93biBFdmVudFwiKTtcbiAgICAgICAgbXhSdWJiZXJiYW5kLnByb3RvdHlwZS5tb3VzZURvd24uY2FsbCh0aGlzLCB3ZiwgZXZ0KTtcbiAgICB9O1xuICAgIHJ1YmJlckJhbmQubW91c2VVcCA9IGZ1bmN0aW9uKHdmLCBldnQpe1xuICAgICAgICBteExvZy5kZWJ1ZyhcIm14UnViYmVyQmFuZCBNb3VzZXVwIEV2ZW50XCIpO1xuICAgICAgICBteFJ1YmJlcmJhbmQucHJvdG90eXBlLm1vdXNlVXAuY2FsbCh0aGlzLCB3ZiwgZXZ0KTtcbiAgICB9O1xuICAgICovXG5cblxuXG4gICAgdGhhdC5tb3ZlQ2VsbHMgPSBmdW5jdGlvbiAoY2VsbHMsIGR4LCBkeSwgY2xvbmUsIHRhcmdldCwgZXZ0LCBtYXBwaW5nLCBzaGFyZWQpIHtcbiAgICAgICAgdmFyIGNlbGxzID0gbXhHcmFwaC5wcm90b3R5cGUubW92ZUNlbGxzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChjZWxscy5sZW5ndGggPiAwICYmIHNoYXJlZEFjdGlvbiAmJiAhc2hhcmVkKSB7XG4gICAgICAgICAgICBzaGFyZWRBY3Rpb24ucGFyZW50SWQgPSBjZWxsc1swXS5wYXJlbnQuaWQ7XG4gICAgICAgICAgICB5LnNoYXJlLm1hcC5zZXQobXhFdmVudC5NT1ZFLCBzaGFyZWRBY3Rpb24pO1xuICAgICAgICAgICAgc2hhcmVkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxuICAgIHRoYXQucmVzaXplQ2VsbHMgPSBmdW5jdGlvbiAoY2VsbHMsIGJvdW5kcywgcmVjdXJzZSwgc2hhcmVkKSB7XG4gICAgICAgIHZhciBjZWxscyA9IG14R3JhcGgucHJvdG90eXBlLnJlc2l6ZUNlbGxzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChjZWxscy5sZW5ndGggPiAwICYmIHNoYXJlZEFjdGlvbiAmJiAhc2hhcmVkKSB7XG4gICAgICAgICAgICB5LnNoYXJlLm1hcC5zZXQobXhFdmVudC5SRVNJWkUsIHNoYXJlZEFjdGlvbik7XG4gICAgICAgICAgICBzaGFyZWRBY3Rpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9O1xuICAgIHkuc2hhcmUubWFwLm9ic2VydmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQubmFtZSkge1xuICAgICAgICAgICAgY2FzZSBteEV2ZW50LkFERF9WRVJURVg6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG9jID0gbXhVdGlscy5wYXJzZVhtbChldmVudC52YWx1ZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvZGVjID0gbmV3IG14Q29kZWMoZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsdCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZWxscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjZWxsID0gY29kZWMuZGVjb2RlKGVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnNldElkKGV2ZW50LnZhbHVlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmhhc093blByb3BlcnR5KCdpbml0JykpIGNlbGwuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsdCA9IGVsdC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGF0LmFkZENlbGxzKGNlbGxzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxzW2ldLmhhc093blByb3BlcnR5KCdpbml0U2hhcmVkJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV0uaW5pdFNoYXJlZChldmVudC52YWx1ZS51c2VySWQgPT09IHkuZGIudXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgbXhFdmVudC5NT1ZFOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnZhbHVlLnVzZXJJZCAhPT0geS5kYi51c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVtb3ZlTGlzdGVuZXIoU2hhcmVkQ2VsbHNNb3ZlZEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjZWxscyA9IFV0aWwuZ2V0Q2VsbHNGcm9tSWRMaXN0KHRoYXQsIGV2ZW50LnZhbHVlLmlkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC52YWx1ZS5keCAhPSAwIHx8IGV2ZW50LnZhbHVlLmR5ICE9IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUNlbGxzKGNlbGxzLCBldmVudC52YWx1ZS5keCwgZXZlbnQudmFsdWUuZHksIGZhbHNlLCB0aGF0LmdldE1vZGVsKCkuZ2V0Q2VsbChldmVudC52YWx1ZS5wYXJlbnRJZCksIG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5hZGRMaXN0ZW5lcihteEV2ZW50LkNFTExTX01PVkVELCBTaGFyZWRDZWxsc01vdmVkRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgbXhFdmVudC5SRVNJWkU6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudmFsdWUudXNlcklkICE9PSB5LmRiLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGxzID0gVXRpbC5nZXRDZWxsc0Zyb21JZExpc3QodGhhdCwgZXZlbnQudmFsdWUuaWRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib3VuZHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQudmFsdWUuYm91bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvdW5kID0gZXZlbnQudmFsdWUuYm91bmRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kcy5wdXNoKG5ldyBteFJlY3RhbmdsZShib3VuZC54LCBib3VuZC55LCBib3VuZC53aWR0aCwgYm91bmQuaGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlc2l6ZUNlbGxzKGNlbGxzLCBib3VuZHMsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoYXQuY29udmVydFZhbHVlVG9TdHJpbmcgPSBmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICBpZiAobXhVdGlscy5pc05vZGUoY2VsbC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChjZWxsLmhhc093blByb3BlcnR5KCckaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIG14RXZlbnQuYWRkTGlzdGVuZXIoY2VsbC4kaW5wdXRbMF0sICdjaGFuZ2UnLCBmdW5jdGlvbiAoIC8qZXZlbnQqLykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWx0ID0gY2VsbC52YWx1ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsdC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgY2VsbC4kaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vZGVsLnNldFZhbHVlKGNlbGwsIGVsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2VsbC4kaW5wdXQuY3NzKCd3aWR0aCcsIGNlbGwuZ2VvbWV0cnkud2lkdGggLSAxNSkuY3NzKCdoZWlnaHQnLCBjZWxsLmdlb21ldHJ5LmhlaWdodCAtIDE1KTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2VsbC52YWx1ZS5nZXRBdHRyaWJ1dGUoJ3VpVHlwZScpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGluayc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRib3gnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdidXR0b24nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZXh0bm9kZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC4kaW5wdXQuY2xpY2soZnVuY3Rpb24gKCAvKmV2ZW50Ki8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRTZWxlY3Rpb25Nb2RlbCgpLnNldENlbGwoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhcmFncmFwaCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLiRpbnB1dC5jbGljayhmdW5jdGlvbiAoIC8qZXZlbnQqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UodGhpcy52YWx1ZS5sZW5ndGgsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuJGlucHV0LmRibGNsaWNrKGZ1bmN0aW9uICggLypldmVudCovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSgwLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW9idXR0b24nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuJGlucHV0LmZpbmQoJ2lucHV0W3R5cGU9XCJpbnB1dFwiXScpLmNsaWNrKGZ1bmN0aW9uICggLypldmVudCovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRTZWxlY3Rpb25Nb2RlbCgpLnNldENlbGwoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjZWxsLiRpbnB1dFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKlxuICAgIHZhciBjZWxsTGFiZWxDaGFuZ2VkID0gdGhhdC5jZWxsTGFiZWxDaGFuZ2VkO1xuICAgIHRoYXQuY2VsbExhYmVsQ2hhbmdlZCA9IGZ1bmN0aW9uIChjZWxsLCBuZXdWYWx1ZSwgYXV0b1NpemUpIHtcbiAgICAgICAgaWYgKG14VXRpbHMuaXNOb2RlKGNlbGwudmFsdWUpICYmIGNlbGwudmFsdWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAndWlvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBDbG9uZXMgdGhlIHZhbHVlIGZvciBjb3JyZWN0IHVuZG8vcmVkb1xuICAgICAgICAgICAgdmFyIGVsdCA9IGNlbGwudmFsdWUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgZWx0LnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGVsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGxMYWJlbENoYW5nZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgLy8gT3ZlcnJpZGVzIG1ldGhvZCB0byBjcmVhdGUgdGhlIGVkaXRpbmcgdmFsdWVcbiAgICAvL3ZhciBnZXRFZGl0aW5nVmFsdWUgPSB0aGF0LmdldEVkaXRpbmdWYWx1ZTtcbiAgICB0aGF0LmdldEVkaXRpbmdWYWx1ZSA9IGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgIGlmIChteFV0aWxzLmlzTm9kZShjZWxsLnZhbHVlKSAmJiBjZWxsLnZhbHVlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3Vpb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGNlbGwuZ2V0QXR0cmlidXRlKCdsYWJlbCcpO1xuICAgICAgICB9XG4gICAgfTsqL1xuICAgIHJldHVybiB0aGlzO1xufVxuZXhwb3J0IGRlZmF1bHQgV2lyZWZyYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL1dpcmVmcmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBZIGZyb20gJ3lqcyc7XG5pbXBvcnQgeVdlYnNvY2tldHNDbGllbnQgZnJvbSAneS13ZWJzb2NrZXRzLWNsaWVudCc7XG5pbXBvcnQgeU1lbW9yeSBmcm9tICd5LW1lbW9yeSc7XG5pbXBvcnQgeU1hcCBmcm9tICd5LW1hcCc7XG5pbXBvcnQgeVRleHQgZnJvbSAneS10ZXh0JztcbmltcG9ydCB5QXJyYXkgZnJvbSAneS1hcnJheSc7XG5ZLmV4dGVuZCh5QXJyYXksIHlXZWJzb2NrZXRzQ2xpZW50LCB5TWVtb3J5LCB5TWFwLCB5VGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzcGFjZSkge1xuICAgIHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcbiAgICBZKHtcbiAgICAgICAgZGI6IHtcbiAgICAgICAgICAgIG5hbWU6IFwibWVtb3J5XCJcbiAgICAgICAgfSxcbiAgICAgICAgY29ubmVjdG9yOiB7XG4gICAgICAgICAgICBuYW1lOiBcIndlYnNvY2tldHMtY2xpZW50XCIsXG4gICAgICAgICAgICByb29tOiBzcGFjZSB8fCAneWlyZWZyYW1lJ1xuICAgICAgICB9LFxuICAgICAgICBzaGFyZToge1xuICAgICAgICAgICAgbWFwOiAnTWFwJyxcbiAgICAgICAgICAgIGFjdGlvbjogJ01hcCcsXG4gICAgICAgICAgICBhdHRyczogJ01hcCdcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgd2luZG93LnkgPSB5O1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHkpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9taXNjL1lqc1N5bmMuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vQ29udGV4dE1lbnUucHJvdG90eXBlID0gbmV3IG14RGVmYXVsdFBvcHVwTWVudSgpO1xuaW1wb3J0IFByb3BlcnR5RWRpdG9yIGZyb20gJy4vUHJvcGVydHlFZGl0b3IuanMnO1xuaW1wb3J0IENPTlNUIGZyb20gJy4vbWlzYy9Db25zdGFudHMuanMnO1xuXG5mdW5jdGlvbiBDb250ZXh0TWVudShlZGl0b3IpIHtcbiAgICAvLyBteERlZmF1bHRQb3B1cE1lbnUuY2FsbCh0aGlzKTtcblxuICAgIGVkaXRvci5ncmFwaC5wb3B1cE1lbnVIYW5kbGVyLmZhY3RvcnlNZXRob2QgPSBmdW5jdGlvbiAobWVudSwgY2VsbCwgZXZ0KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3B1cE1lbnUobnVsbCwgbWVudSwgY2VsbCwgZXZ0KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUG9wdXBNZW51KGdyYXBoLCBtZW51LCBjZWxsLyosIGV2dCovKSB7XG5cbiAgICAgICAgaWYgKGNlbGwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHN1YiA9IG1lbnUuYWRkSXRlbSgnQ3JlYXRlLi4nLCBudWxsKTtcbiAgICAgICAgICAgIG1lbnUuY3JlYXRlU3VibWVudShzdWIpO1xuICAgICAgICAgICAgbWVudS5hZGRJdGVtKCdFbGVtZW50IDEnLCBudWxsLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAvL1RPRE9cbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9IHRydWU7XG4gICAgICAgICAgICB9LCBzdWIpO1xuICAgICAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgnU2hvdyBBdHRyaWJ1dGVzJywgbnVsbCwgZnVuY3Rpb24gKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgICAgIG5ldyBQcm9wZXJ0eUVkaXRvcihjZWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBtZW51LmFkZEl0ZW0oJ1VuZG8nLCBDT05TVC5JTUFHRVMuVU5ETywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWRpdG9yLmV4ZWN1dGUoQ09OU1QuQUNUSU9OUy5TSEFSRUQuVU5ETyk7XG4gICAgICAgIH0pO1xuICAgICAgICBtZW51LmFkZEl0ZW0oJ1JlZG8nLCBDT05TVC5JTUFHRVMuUkVETywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWRpdG9yLmV4ZWN1dGUoQ09OU1QuQUNUSU9OUy5TSEFSRUQuUkVETyk7XG4gICAgICAgIH0pO1xuICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xuICAgICAgICBpZiAoY2VsbCA9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgnU2hvdyBDb25zb2xlJywgQ09OU1QuSU1BR0VTLkNPTlNPTEUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY3V0ZShDT05TVC5BQ1RJT05TLkNPTlNPTEUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL1RPRE8gY29weSAmIHBhc3RlIGZvciBjb250ZXh0IG1lbnUgbmVlZHMgcmV3b3JrXG4gICAgICAgICAgICAvKm1lbnUuYWRkSXRlbSgnQ29weScsICdpbWFnZXMvdG9vbGJveC9jb3B5LmdpZicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY3V0ZShcImNvcHlcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgnUGFzdGUnLCAnaW1hZ2VzL3Rvb2xib3gvcGFzdGUuZ2lmJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjdXRlKFwic2hhcmVkX3Bhc3RlXCIpO1xuICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgnR3JvdXAnLCBDT05TVC5JTUFHRVMuR1JPVVAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY3V0ZShDT05TVC5BQ1RJT05TLlNIQVJFRC5HUk9VUCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgnVW5ncm91cCcsIENPTlNULklNQUdFUy5VTkdST1VQLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWN1dGUoQ09OU1QuQUNUSU9OUy5TSEFSRUQuVU5HUk9VUCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oJ0RlbGV0ZSBDZWxsJywgQ09OU1QuSU1BR0VTLkRFTEVURSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjdXRlKENPTlNULkFDVElPTlMuU0hBUkVELkRFTEVURSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udGV4dE1lbnU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvQ29udGV4dE1lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQge214RGVmYXVsdEtleUhhbmRsZXJ9IGZyb20gJy4vbWlzYy9teEV4cG9ydC5qcyc7XG5pbXBvcnQgQ09OU1QgZnJvbSAnLi9taXNjL0NvbnN0YW50cy5qcyc7XG5LZXlIYW5kbGVyLnByb3RvdHlwZSA9IG5ldyBteERlZmF1bHRLZXlIYW5kbGVyKCk7XG5LZXlIYW5kbGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEtleUhhbmRsZXI7XG5cbi8qKlxuICogVGhlIEtleUhhbmRsZXIgZm9yIHRoZSBXaXJlZnJhbWluZyBFZGl0b3JcbiAqIEZvciBrZXkgY29kZXMgc2VlOlxuICogaHR0cHM6Ly93d3cuY2FtYmlhcmVzZWFyY2guY29tL2FydGljbGVzLzE1L2phdmFzY3JpcHQtY2hhci1jb2Rlcy1rZXktY29kZXNcbiAqIEBwYXJhbSB7bXhHcmFwaH0gZ3JhcGggXG4gKi9cbmZ1bmN0aW9uIEtleUhhbmRsZXIoZWRpdG9yKXtcbiAgICBteERlZmF1bHRLZXlIYW5kbGVyLmNhbGwodGhpcywgZWRpdG9yKTtcblxuICAgIC8vZGVsZXRlLWtleVxuICAgIHRoaXMuYmluZEFjdGlvbig0NiwgQ09OU1QuQUNUSU9OUy5TSEFSRUQuREVMRVRFKTtcbiAgICBcbiAgICAvL0NUUkwrRyBmb3Igc2hhcmVkIGdyb3VwaW5nXG4gICAgdGhpcy5iaW5kQWN0aW9uKDcxLCBDT05TVC5BQ1RJT05TLlNIQVJFRC5HUk9VUCwgMTcpO1xuXG4gICAgLy9DVFJMK0ggZm9yIHNoYXJlZCB1bmdyb3VwaW5nXG4gICAgdGhpcy5iaW5kQWN0aW9uKDcyLCBDT05TVC5BQ1RJT05TLlNIQVJFRC5VTkdST1VQLCAxNyk7XG5cbiAgICAvL0NUUkwrWiBmb3Igc2hhcmVkIFVuZG9cbiAgICB0aGlzLmJpbmRBY3Rpb24oOTAsIENPTlNULkFDVElPTlMuU0hBUkVELlVORE8sIDE3KTtcblxuICAgIC8vQ1RSTCtZIGZvciBzaGFyZWQgUmVkb1xuICAgIHRoaXMuYmluZEFjdGlvbig4OSwgQ09OU1QuQUNUSU9OUy5TSEFSRUQuUkVETywgMTcpO1xuXG4gICAgLy9DVFJMK0MgZm9yIGNvcHlcbiAgICB0aGlzLmJpbmRBY3Rpb24oNjcsIENPTlNULkFDVElPTlMuQ09QWSwgMTcpO1xuXG4gICAgLy9DVFJMK1YgZm9yIHNoYXJlZCBwYXN0ZVxuICAgIHRoaXMuYmluZEFjdGlvbig4NiwgQ09OU1QuQUNUSU9OUy5QQVNURSwgMTcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5leHBvcnQgZGVmYXVsdCBLZXlIYW5kbGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL0tleUhhbmRsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgeyBteFdpbmRvdywgbXhGb3JtIH0gZnJvbSAnLi9taXNjL214RXhwb3J0LmpzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2pxdWVyeS11aS91aS93aWRnZXRzL3RhYnMnO1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgcHJvcGVydHkgZWRpdG9yIGZvciB0aGUgZ2l2ZW4gY2VsbFxuICogQHBhcmFtIHtteENlbGx9IGNlbGwgXG4gKi9cbmZ1bmN0aW9uIFByb3BlcnR5RWRpdG9yKGNlbGwpIHtcbiAgICB2YXIgaHRtbEVkaXRvclRlbXBsYXRlID0gJzxkaXYgaWQ9XCJwcm9wZXJ0eUVkaXRvcl8nICsgY2VsbC5nZXRJZCgpICsgJ1wiPjx1bD48bGk+PGEgaHJlZj1cIiNhdHRyaWJ1dGVzVGFiXCI+QXR0cmlidXRlczwvYT48L2xpPjxsaT48YSBocmVmPVwiI3RhZ3NUYWJcIj5JbnRlcmFjdGl2aXR5PC9hPjwvbGk+PC91bD48ZGl2IGlkPVwiYXR0cmlidXRlc1RhYlwiPjwvZGl2PjxkaXYgaWQ9XCJ0YWdzVGFiXCI+PC9kaXY+JztcblxuICAgIHZhciBmb3JtID0gbmV3IG14Rm9ybSgnYXR0cmlidXRlcycpO1xuICAgIHZhciBhdHRycyA9IGNlbGwudmFsdWUuYXR0cmlidXRlcztcbiAgICB2YXIgYXR0cjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyc1tpXTtcbiAgICAgICAgaWYoYXR0ci5uYW1lID09PSdsYWJlbCcgfHwgYXR0ci5uYW1lID09PSd1aVR5cGUnKSBjb250aW51ZTsgLy9za2lwIHRoZSBsYWJlbCBhbmQgdGhlIHVpLXR5cGVcbiAgICAgICAgaWYgKGF0dHIudmFsdWUuaW5kZXhPZigndHJ1ZScpICE9IC0xIHx8IGF0dHIudmFsdWUuaW5kZXhPZignZmFsc2UnKSAhPSAtMSkvL2EgYm9vbGVhbiB2YWx1ZVxuICAgICAgICAgICAgZm9ybS5hZGRDaGVja2JveChhdHRyLm5hbWUsIGF0dHIudmFsdWUuaW5kZXhPZigndHJ1ZScpICE9IC0xID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgZWxzZSBmb3JtLmFkZFRleHQoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgJGh0bWxUYWdFZGl0b3IgPSAkKCcjcHJvcGVydHlFZGl0b3JfJyArIGNlbGwuZ2V0SWQoKSk7XG4gICAgaWYgKCRodG1sVGFnRWRpdG9yLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHZhciAkaHRtbFRhZ0VkaXRvciA9ICQoJC5wYXJzZUhUTUwoaHRtbEVkaXRvclRlbXBsYXRlKVswXSk7XG5cbiAgICAgICAgJGh0bWxUYWdFZGl0b3IudGFicygpO1xuICAgICAgICAkaHRtbFRhZ0VkaXRvci5maW5kKCcjYXR0cmlidXRlc1RhYicpLmFwcGVuZChmb3JtLmJvZHkpO1xuICAgICAgICB2YXIgcHJvcGVydHlFZGl0b3JXbmQgPSBuZXcgbXhXaW5kb3coXCJQcm9wZXJ0aWVzXCIsICRodG1sVGFnRWRpdG9yWzBdLCAnMzAwJywgJzIwMCcsICcxMDAlJywgJzQwJScsIHRydWUsIHRydWUpO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvclduZC5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICBwcm9wZXJ0eUVkaXRvclduZC5zZXRNYXhpbWl6YWJsZShmYWxzZSk7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yV25kLnNldFJlc2l6YWJsZShmYWxzZSk7XG4gICAgICAgIHByb3BlcnR5RWRpdG9yV25kLnNldENsb3NhYmxlKHRydWUpO1xuXG4gICAgICAgIC8vQWRkcyBPayBhbmQgQ2FuY2VsIEJ1dHRvbiB0byB0aGUgZm9ybVxuICAgICAgICBmb3JtLmFkZEJ1dHRvbnMoXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy9mdW5jdGlvbiBmb3IgdGhlIG9rIGJ1dHRvblxuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBzZXJpYWxpemVGb3JtKGZvcm0pO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0VmFsdWVGcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUVkaXRvclduZC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vZnVuY3Rpb24gZm9yIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAgICAgICAgICAgICAgcHJvcGVydHlFZGl0b3JXbmQuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNlcmlhbGl6ZUZvcm0gPSBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgJChmb3JtLmJvZHkpLmZpbmQoJ3RyJykubWFwKGZ1bmN0aW9uIChpLCBlbGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSAkKGVsZW0pLmZpbmQoJ3RkOmZpcnN0JykudGV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJChlbGVtKS5maW5kKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGlucHV0LmF0dHIoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJGlucHV0LnByb3AoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgIG9ialtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5RWRpdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL1Byb3BlcnR5RWRpdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHtcbiAgICBteENvbnN0YW50c1xufSBmcm9tICcuLi9taXNjL214RXhwb3J0LmpzJztcbmltcG9ydCBVSU1lZGlhIGZyb20gJy4vVUlNZWRpYS5qcyc7XG5cbkF1ZGlvUGxheWVyLnByb3RvdHlwZSA9IG5ldyBVSU1lZGlhKCk7XG5BdWRpb1BsYXllci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBdWRpb1BsYXllcjtcbndpbmRvdy5BdWRpb1BsYXllciA9IEF1ZGlvUGxheWVyO1xuXG5mdW5jdGlvbiBBdWRpb1BsYXllcihnZW9tZXRyeSkge1xuICAgICAgICBcbiAgICAvL3N0eWxlIGluIGh0bWw1c3RlbmNpbHMueG1sIGFuZCByZWdpc3RlcmVkIGluIHRoZSBlZGl0b3JcbiAgICB2YXIgc3R5bGUgPSBteENvbnN0YW50cy5TVFlMRV9TSEFQRSArIFwiPUF1ZGlvUGxheWVyO1wiICtcbiAgICAgICAgbXhDb25zdGFudHMuU1RZTEVfRklMTENPTE9SICsgXCI9bm9uZTtcIiArXG4gICAgICAgIG14Q29uc3RhbnRzLlNUWUxFX1NUUk9LRUNPTE9SICsgJz1ncmV5OycgK1xuICAgICAgICBteENvbnN0YW50cy5TVFlMRV9BU1BFQ1QgKyAnPWZpeGVkOycgKyBcbiAgICAgICAgbXhDb25zdGFudHMuU1RZTEVfRURJVEFCTEUgKyBcIj0wO1wiO1xuXG4gICAgVUlNZWRpYS5jYWxsKHRoaXMsZ2VvbWV0cnksIHN0eWxlKTtcbiAgICByZXR1cm4gdGhpcztcbn1cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUGxheWVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2VsZW1lbnRzL0F1ZGlvUGxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IFVJVGV4dCBmcm9tICcuL1VJVGV4dC5qcyc7XG5cbkJ1dHRvbi5wcm90b3R5cGUgPSBuZXcgVUlUZXh0KCk7XG5CdXR0b24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnV0dG9uO1xuXG4vL0dsb2JhbCBmb3IgdGhlIGNvZGVjIGNvbnZlcnRlclxud2luZG93LkJ1dHRvbiA9IEJ1dHRvbjtcblxuZnVuY3Rpb24gQnV0dG9uKGdlb21ldHJ5KSB7XG4gICAgdmFyIHRleHQgPSAnQnV0dG9uJztcbiAgICBcbiAgICBVSVRleHQuY2FsbCh0aGlzLCB0ZXh0LCBnZW9tZXRyeSk7XG4gICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgIHRoaXMudmFsdWUuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCBmYWxzZSk7XG4gICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLl9fcHJvdG9fXy5pbml0LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuJGlucHV0XG4gICAgICAgICAgICAuY3NzKCd0ZXh0LWFsaWduJywgJ2NlbnRlcicpXG4gICAgICAgICAgICAuY3NzKCdib3JkZXItcmFkaXVzJywgJzEycHgnKVxuICAgICAgICAgICAgLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoMjI3LCAyMjcsIDIyOCknKVxuICAgICAgICAgICAgLmNzcygnYm9yZGVyLXN0eWxlJywgJ3JpZGdlJylcbiAgICAgICAgICAgIC52YWwodGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZWxlbWVudHMvQnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IFVJVGV4dCBmcm9tICcuL1VJVGV4dC5qcyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5DaGVja0JveC5wcm90b3R5cGUgPSBuZXcgVUlUZXh0KCk7XG5DaGVja0JveC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDaGVja0JveDtcblxuLy9HbG9iYWwgZm9yIHRoZSBjb2RlYyBjb252ZXJ0ZXJcbndpbmRvdy5DaGVja0JveCA9IENoZWNrQm94O1xuXG5mdW5jdGlvbiBDaGVja0JveChnZW9tZXRyeSkge1xuICAgIHZhciB0ZXh0ID0gJ09wdGlvbic7XG5cbiAgICBVSVRleHQuY2FsbCh0aGlzLCB0ZXh0LCBnZW9tZXRyeSk7XG4gICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsIGZhbHNlKTtcbiAgICB0aGlzLnZhbHVlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGlucHV0ID0gJCgnPGRpdj4nKVxuICAgICAgICAgICAgLmFwcGVuZCgkKCc8aW5wdXQ+JykuYXR0cigndHlwZScsICdjaGVja2JveCcpLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKSlcbiAgICAgICAgICAgIC5hcHBlbmQoJCgnPGlucHV0PicpXG4gICAgICAgICAgICAuYXR0cigndHlwZScsICdpbnB1dCcpXG4gICAgICAgICAgICAuY3NzKCdmb250LXNpemUnLCAxNSlcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgdGhpcy5nZW9tZXRyeS53aWR0aCAtIDMwKSBcbiAgICAgICAgICAgIC5jc3MoJ2hlaWdodCcsIHRoaXMuZ2VvbWV0cnkuaGVpZ2h0IC0gMTApXG4gICAgICAgICAgICAuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50JylcbiAgICAgICAgICAgIC5jc3MoJ2JvcmRlci1zdHlsZScsICdpbml0aWFsJylcbiAgICAgICAgICAgIC52YWwodGV4dCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2VsZW1lbnRzL0NoZWNrQm94LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgbXhVdGlscywgbXhDb25zdGFudHMgfSBmcm9tICcuLi9taXNjL214RXhwb3J0LmpzJztcbmltcG9ydCBVSUNvbnRyb2wgZnJvbSAnLi9VSUNvbnRyb2wuanMnO1xuXG5cbm14VXRpbHMuZXh0ZW5kKERpdkNvbnRhaW5lciwgVUlDb250cm9sKTtcbndpbmRvdy5EaXZDb250YWluZXIgPSBEaXZDb250YWluZXI7XG5cbmZ1bmN0aW9uIERpdkNvbnRhaW5lcihnZW9tZXRyeSkge1xuICAgIHZhciBzdHlsZSA9IG14Q29uc3RhbnRzLlNUWUxFX1NIQVBFICsgXCI9XCIgKyBteENvbnN0YW50cy5TSEFQRV9TV0lNTEFORSArICc7JyArXG4gICAgICAgIG14Q29uc3RhbnRzLlNUWUxFX0ZJTExDT0xPUiArIFwiPW5vbmU7XCIgK1xuICAgICAgICBteENvbnN0YW50cy5TVFlMRV9QT0lOVEVSX0VWRU5UUyArIFwiPXRydWU7XCIgK1xuICAgICAgICBteENvbnN0YW50cy5TVFlMRV9TVFJPS0VDT0xPUiArICc9Z3JleTsnICtcbiAgICAgICAgbXhDb25zdGFudHMuU1RZTEVfVkVSVElDQUxfQUxJR04gKyAnPW1pZGRsZTsnICtcbiAgICAgICAgbXhDb25zdGFudHMuU1RZTEVfTEFCRUxfQkFDS0dST1VORENPTE9SICsgJz1ub25lOycgK1xuICAgICAgICBteENvbnN0YW50cy5TVFlMRV9GT05UU0laRSArICc9MTE7JyArXG4gICAgICAgIG14Q29uc3RhbnRzLlNUWUxFX1NUQVJUU0laRSArICc9MTM7JyArXG4gICAgICAgIC8vbXhDb25zdGFudHMuU1RZTEVfSE9SSVpPTlRBTCArICc9ZmFsc2U7JyArXG5cdFx0bXhDb25zdGFudHMuU1RZTEVfRk9OVENPTE9SICsnPWJsYWNrOycgK1xuXHRcdG14Q29uc3RhbnRzLlNUWUxFX1NUUk9LRUNPTE9SICsnPWJsYWNrOycgK1xuICAgICAgICBteENvbnN0YW50cy5TVFlMRV9FRElUQUJMRSArIFwiPTA7XCI7ICAgIFxuICAgIFxuICAgIFVJQ29udHJvbC5jYWxsKHRoaXMsIGdlb21ldHJ5LCBzdHlsZSk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ0NvbnRhaW5lcicpO1xuICAgIHRoaXMuc2V0Q29ubmVjdGFibGUoZmFsc2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5leHBvcnQgZGVmYXVsdCBEaXZDb250YWluZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZWxlbWVudHMvRGl2Q29udGFpbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHtcbiAgICBteENvbnN0YW50c1xufSBmcm9tICcuLi9taXNjL214RXhwb3J0LmpzJztcbmltcG9ydCBVSUNvbnRyb2wgZnJvbSAnLi9VSUNvbnRyb2wuanMnO1xuXG5JbWFnZS5wcm90b3R5cGUgPSBuZXcgVUlDb250cm9sKCk7XG5JbWFnZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbWFnZTtcbndpbmRvdy5JbWFnZSA9IEltYWdlO1xuXG5mdW5jdGlvbiBJbWFnZShnZW9tZXRyeSkge1xuXG4gICAgLy9zdHlsZSBpbiBodG1sNXN0ZW5jaWxzLnhtbCBhbmQgcmVnaXN0ZXJlZCBpbiB0aGUgZWRpdG9yXG4gICAgdmFyIHN0eWxlID0gbXhDb25zdGFudHMuU1RZTEVfU0hBUEUgKyAnPWltYWdlOycgK1xuICAgICAgICBteENvbnN0YW50cy5TVFlMRV9FRElUQUJMRSArIFwiPTA7XCI7XG5cbiAgICBVSUNvbnRyb2wuY2FsbCh0aGlzLCBnZW9tZXRyeSwgc3R5bGUpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzcmMnLCcnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2VsZW1lbnRzL0ltYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IFVJVGV4dCBmcm9tICcuL1VJVGV4dC5qcyc7XG5cbkxpbmsucHJvdG90eXBlID0gbmV3IFVJVGV4dCgpO1xuTGluay5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMaW5rO1xuXG4vL0dsb2JhbCBmb3IgdGhlIGNvZGVjIGNvbnZlcnRlclxud2luZG93LkxpbmsgPSBMaW5rO1xuXG5mdW5jdGlvbiBMaW5rKGdlb21ldHJ5KSB7XG4gICAgdmFyIHRleHQgPSAnTGluayc7XG5cblxuICAgIFVJVGV4dC5jYWxsKHRoaXMsIHRleHQsIGdlb21ldHJ5KTtcbiAgICB0aGlzLnZhbHVlLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCB0ZXh0KTtcbiAgICB0aGlzLnZhbHVlLnNldEF0dHJpYnV0ZSgnaHJlZicsICcnKTtcblxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fX3Byb3RvX18uaW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLiRpbnB1dC5jc3MoJ2NvbG9yJywgJ2JsdWUnKVxuICAgICAgICAgICAgLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpXG4gICAgICAgICAgICAuY3NzKCdib3JkZXItc3R5bGUnLCAnaW5pdGlhbCcpXG4gICAgICAgICAgICAuY3NzKCd0ZXh0LWRlY29yYXRpb24nLCAndW5kZXJsaW5lJylcbiAgICAgICAgICAgIC52YWwodGV4dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2VsZW1lbnRzL0xpbmsuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgVUlUZXh0IGZyb20gJy4vVUlUZXh0LmpzJztcblxuUGFyYWdyYXBoLnByb3RvdHlwZSA9IG5ldyBVSVRleHQoKTtcblBhcmFncmFwaC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhZ3JhcGg7XG5cbndpbmRvdy5QYXJhZ3JhcGggPSBQYXJhZ3JhcGg7XG5cbmZ1bmN0aW9uIFBhcmFncmFwaChnZW9tZXRyeSkge1xuICAgIHZhciB0ZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSwgZWFxdWUgaXBzYSBxdWFlIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcyBldCBxdWFzaSBhcmNoaXRlY3RvIGJlYXRhZSB2aXRhZSBkaWN0YSBzdW50IGV4cGxpY2Fiby4gTmVtbyBlbmltIGlwc2FtIHZvbHVwdGF0ZW0gcXVpYSB2b2x1cHRhcyBzaXQgYXNwZXJuYXR1ciBhdXQgb2RpdCBhdXQgZnVnaXQsIHNlZCBxdWlhIGNvbnNlcXV1bnR1ciBtYWduaSBkb2xvcmVzIGVvcyBxdWkgcmF0aW9uZSB2b2x1cHRhdGVtIHNlcXVpIG5lc2NpdW50LiBOZXF1ZSBwb3JybyBxdWlzcXVhbSBlc3QsIHF1aSBkb2xvcmVtIGlwc3VtIHF1aWEgZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyLCBhZGlwaXNjaSB2ZWxpdCwgc2VkIHF1aWEgbm9uIG51bXF1YW0gZWl1cyBtb2RpIHRlbXBvcmEgaW5jaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYW0gYWxpcXVhbSBxdWFlcmF0IHZvbHVwdGF0ZW0uIFV0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtIGV4ZXJjaXRhdGlvbmVtIHVsbGFtIGNvcnBvcmlzIHN1c2NpcGl0IGxhYm9yaW9zYW0sIG5pc2kgdXQgYWxpcXVpZCBleCBlYSBjb21tb2RpIGNvbnNlcXVhdHVyPyBRdWlzIGF1dGVtIHZlbCBldW0gaXVyZSByZXByZWhlbmRlcml0IHF1aSBpbiBlYSB2b2x1cHRhdGUgdmVsaXQgZXNzZSBxdWFtIG5paGlsIG1vbGVzdGlhZSBjb25zZXF1YXR1ciwgdmVsIGlsbHVtIHF1aSBkb2xvcmVtIGV1bSBmdWdpYXQgcXVvIHZvbHVwdGFzIG51bGxhIHBhcmlhdHVyPyc7XG5cbiAgICBVSVRleHQuY2FsbCh0aGlzLCB0ZXh0LCBnZW9tZXRyeSk7XG5cbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX19wcm90b19fLmluaXQuY2FsbCh0aGlzLCAndGV4dGFyZWEnKTtcbiAgICAgICAgdGhpcy4kaW5wdXRcbiAgICAgICAgICAgIC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKVxuICAgICAgICAgICAgLmNzcygnYm9yZGVyLXN0eWxlJywgJ2luaXRpYWwnKVxuICAgICAgICAgICAgLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJylcbiAgICAgICAgICAgIC5jc3MoJ3Jlc2l6ZScsICdub25lJylcbiAgICAgICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2VsZW1lbnRzL1BhcmFncmFwaC5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBVSVRleHQgZnJvbSAnLi9VSVRleHQuanMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuUmFkaW9CdXR0b24ucHJvdG90eXBlID0gbmV3IFVJVGV4dCgpO1xuUmFkaW9CdXR0b24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmFkaW9CdXR0b247XG5cbi8vR2xvYmFsIGZvciB0aGUgY29kZWMgY29udmVydGVyXG53aW5kb3cuUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcblxuZnVuY3Rpb24gUmFkaW9CdXR0b24oZ2VvbWV0cnkpIHtcbiAgICB2YXIgdGV4dCA9ICdPcHRpb24nO1xuXG4gICAgVUlUZXh0LmNhbGwodGhpcywgdGV4dCwgZ2VvbWV0cnkpO1xuICAgIHRoaXMudmFsdWUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZmFsc2UpO1xuICAgIHRoaXMudmFsdWUuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCBmYWxzZSk7XG4gICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRpbnB1dCA9ICQoJzxkaXY+JylcbiAgICAgICAgICAgIC5hcHBlbmQoJCgnPGlucHV0PicpLmF0dHIoJ3R5cGUnLCAncmFkaW8nKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSkpXG4gICAgICAgICAgICAuYXBwZW5kKCQoJzxpbnB1dD4nKVxuICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAnaW5wdXQnKVxuICAgICAgICAgICAgLmNzcygnZm9udC1zaXplJywgMTUpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsIHRoaXMuZ2VvbWV0cnkud2lkdGggLSAzMCkgXG4gICAgICAgICAgICAuY3NzKCdoZWlnaHQnLCB0aGlzLmdlb21ldHJ5LmhlaWdodCAtIDEwKVxuICAgICAgICAgICAgLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpXG4gICAgICAgICAgICAuY3NzKCdib3JkZXItc3R5bGUnLCAnaW5pdGlhbCcpXG4gICAgICAgICAgICAudmFsKHRleHQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9lbGVtZW50cy9SYWRpb0J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBVSVRleHQgZnJvbSAnLi9VSVRleHQuanMnO1xuXG5UZXh0QXJlYS5wcm90b3R5cGUgPSBuZXcgVUlUZXh0KCk7XG5UZXh0QXJlYS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUZXh0QXJlYTtcblxud2luZG93LlRleHRBcmVhID0gVGV4dEFyZWE7XG5cbmZ1bmN0aW9uIFRleHRBcmVhKGdlb21ldHJ5KSB7XG4gICAgdmFyIHRleHQ9J011bHRpLUxpbmUgdGV4dCBpbnB1dCBhcmVhJztcbiAgIC8vIHZhciB0ZXh0ID0gJ2hhbGxvJztcbiAgIFxuXG4gICAgVUlUZXh0LmNhbGwodGhpcywgdGV4dCwgZ2VvbWV0cnkpO1xuICAgIHRoaXMudmFsdWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcnKTtcbiAgICB0aGlzLnZhbHVlLnNldEF0dHJpYnV0ZSgnYXV0b2ZvY3VzJywgZmFsc2UpO1xuICAgIHRoaXMudmFsdWUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnJyk7XG4gICAgdGhpcy52YWx1ZS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgZmFsc2UpO1xuICAgIHRoaXMudmFsdWUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB0aGlzLnZhbHVlLnNldEF0dHJpYnV0ZSgnY29scycsICcnKTtcbiAgICB0aGlzLnZhbHVlLnNldEF0dHJpYnV0ZSgncm93cycsICcnKTtcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX19wcm90b19fLmluaXQuY2FsbCh0aGlzLCAndGV4dGFyZWEnKTtcbiAgICAgICAgdGhpcy4kaW5wdXRcbiAgICAgICAgICAgIC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAuY3NzKCdyZXNpemUnLCAnbm9uZScpXG4gICAgICAgICAgICAudGV4dCh0ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2VsZW1lbnRzL1RleHRBcmVhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IFVJVGV4dCBmcm9tICcuL1VJVGV4dC5qcyc7XG5cblRleHRCb3gucHJvdG90eXBlID0gbmV3IFVJVGV4dCgpO1xuVGV4dEJveC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUZXh0Qm94O1xuXG4vL0dsb2JhbCBmb3IgdGhlIGNvZGVjIGNvbnZlcnRlclxud2luZG93LlRleHRCb3ggPSBUZXh0Qm94O1xuXG5mdW5jdGlvbiBUZXh0Qm94KGdlb21ldHJ5KSB7XG4gICAgdmFyIHRleHQgPSAnU29tZSBUZXh0Li4uJztcblxuICAgIFVJVGV4dC5jYWxsKHRoaXMsIHRleHQsIGdlb21ldHJ5KTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXV0b2ZvY3VzJywgZmFsc2UpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuX19wcm90b19fLmluaXQuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy4kaW5wdXQudmFsKHRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufVxuZXhwb3J0IGRlZmF1bHQgVGV4dEJveDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9lbGVtZW50cy9UZXh0Qm94LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IFVJVGV4dCBmcm9tICcuL1VJVGV4dC5qcyc7XG5cblRleHROb2RlLnByb3RvdHlwZSA9IG5ldyBVSVRleHQoKTtcblRleHROb2RlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRleHROb2RlO1xuXG4vL0dsb2JhbCBmb3IgdGhlIGNvZGVjIGNvbnZlcnRlclxud2luZG93LlRleHROb2RlID0gVGV4dE5vZGU7XG5cbmZ1bmN0aW9uIFRleHROb2RlKGdlb21ldHJ5KSB7XG4gICAgdmFyIHRleHQgPSAnQSBzaW1wbGUgVGV4dE5vZGUuLi4nO1xuICAgIFxuICAgIFVJVGV4dC5jYWxsKHRoaXMsIHRleHQsIGdlb21ldHJ5KTtcblxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fX3Byb3RvX18uaW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLiRpbnB1dFxuICAgICAgICAgICAgLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpXG4gICAgICAgICAgICAuY3NzKCdib3JkZXItc3R5bGUnLCAnaW5pdGlhbCcpXG4gICAgICAgICAgICAudmFsKHRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufVxuZXhwb3J0IGRlZmF1bHQgVGV4dE5vZGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZWxlbWVudHMvVGV4dE5vZGUuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQge1xuICAgIG14Q29uc3RhbnRzXG59IGZyb20gJy4uL21pc2MvbXhFeHBvcnQuanMnO1xuaW1wb3J0IFVJTWVkaWEgZnJvbSAnLi9VSU1lZGlhLmpzJztcblxuVmlkZW9QbGF5ZXIucHJvdG90eXBlID0gbmV3IFVJTWVkaWEoKTtcblZpZGVvUGxheWVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZpZGVvUGxheWVyO1xud2luZG93LlZpZGVvUGxheWVyID0gVmlkZW9QbGF5ZXI7XG5cbmZ1bmN0aW9uIFZpZGVvUGxheWVyKGdlb21ldHJ5KSB7XG5cbiAgICAvL3N0eWxlIGluIGh0bWw1c3RlbmNpbHMueG1sIGFuZCByZWdpc3RlcmVkIGluIHRoZSBlZGl0b3JcbiAgICB2YXIgc3R5bGUgPSBteENvbnN0YW50cy5TVFlMRV9TSEFQRSArIFwiPVZpZGVvUGxheWVyO1wiICtcbiAgICAgICAgbXhDb25zdGFudHMuU1RZTEVfRklMTENPTE9SICsgXCI9bm9uZTtcIiArXG4gICAgICAgIG14Q29uc3RhbnRzLlNUWUxFX1NUUk9LRUNPTE9SICsgJz1ncmV5OycgK1xuICAgICAgICBteENvbnN0YW50cy5TVFlMRV9BU1BFQ1QgKyAnPWZpeGVkOycgK1xuICAgICAgICBteENvbnN0YW50cy5TVFlMRV9FRElUQUJMRSArIFwiPTA7XCI7XG5cbiAgICBVSU1lZGlhLmNhbGwodGhpcywgZ2VvbWV0cnksIHN0eWxlKTtcbiAgICB0aGlzLnZhbHVlLnNldEF0dHJpYnV0ZSgncG9zdGVyJywgJycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9lbGVtZW50cy9WaWRlb1BsYXllci5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInJlcXVpcmUoWycuLy4uL2Nzcy9zdHlsZS5jc3MnLCAnLi8uLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL3RoZW1lLmNzcycsICcuLy4uLy4uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdGhlbWVzL2Jhc2UvdGFicy5jc3MnLCAnLi4vLi4vbm9kZV9tb2R1bGVzL214Z3JhcGgvamF2YXNjcmlwdC9zcmMvY3NzL2NvbW1vbi5jc3MnXSk7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICAnanF1ZXJ5LXVpL3VpL3dpZGdldHMvcmVzaXphYmxlJztcbmltcG9ydCAgJ2pxdWVyeS11aS91aS93aWRnZXRzL2RyYWdnYWJsZSc7XG5pbXBvcnQge214Q2xpZW50LCBteFV0aWxzLCBteEV2ZW50LCBteEdyYXBoTW9kZWwsIG14TG9nfSBmcm9tICcuL21pc2MvbXhFeHBvcnQuanMnO1xuaW1wb3J0IFlqc1N5bmMgZnJvbSAnLi9taXNjL1lqc1N5bmMuanMnO1xuaW1wb3J0IENPTlNUIGZyb20gJy4vbWlzYy9Db25zdGFudHMuanMnO1xuXG5pbXBvcnQgV2lyZWZyYW1lIGZyb20gJy4vV2lyZWZyYW1lLmpzJztcbmltcG9ydCBQYWxldHRlIGZyb20gJy4vUGFsZXR0ZS5qcyc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yLmpzJztcbmltcG9ydCBUb29sYm94IGZyb20gJy4vVG9vbGJveC5qcyc7XG4kKGZ1bmN0aW9uKCl7XG4gICAgIGlmICghbXhDbGllbnQuaXNCcm93c2VyU3VwcG9ydGVkKCkpIHtcbiAgICAgIC8vIERpc3BsYXlzIGFuIGVycm9yIG1lc3NhZ2UgaWYgdGhlIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZC5cbiAgICAgIG14VXRpbHMuZXJyb3IoJ0Jyb3dzZXIgaXMgbm90IHN1cHBvcnRlZCEnLCAyMDAsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgWWpzU3luYygpLmRvbmUoZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IG14R3JhcGhNb2RlbCgpO1xuICAgICAgICBteExvZy5zaG93KCk7XG4gICAgICAgIFxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpcmVmcmFtZScpO1xuICAgICAgICAgLy9kaXNhYmxlIGRlZmF1bHQgY29udGV4dCBtZW51XG4gICAgICAgIG14RXZlbnQuZGlzYWJsZUNvbnRleHRNZW51KGNvbnRhaW5lcik7XG4gICAgICAgIHZhciB3aXJlZnJhbWUgPSBuZXcgV2lyZWZyYW1lKGNvbnRhaW5lciwgbW9kZWwpO1xuXG4gICAgICAgIHZhciBodG1sUGFsZXR0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWxldHRlJyk7XG4gICAgICAgIHZhciBwYWxldHRlID0gbmV3IFBhbGV0dGUoaHRtbFBhbGV0dGUpO1xuXG4gICAgICAgIHZhciBlZGl0b3IgPSBuZXcgRWRpdG9yKHdpcmVmcmFtZSwgcGFsZXR0ZSwgdG9vbGJveCk7XG5cblxuICAgICAgICB2YXIgaHRtbFRvb2xib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9vbGJveCcpO1xuICAgICAgICB2YXIgdG9vbGJveCA9IG5ldyBUb29sYm94KGh0bWxUb29sYm94LCBlZGl0b3IpO1xuICAgIFxuICAgICAgICAkKCcjd2lyZWZyYW1lV3JhcCcpLnJlc2l6YWJsZSh7XG4gICAgICAgICAgaGFuZGxlczogXCJuLCBlLCBzLCB3LCBzZSwgc3csIG53LCBuZVwiLFxuICAgICAgICAgIGNvbnRhaW5tZW50OiAnI3dpcmVmcmFtZUNvbnRhaW5lcicsXG4gICAgICAgICAgLy9hc3BlY3RSYXRpbzogNC8zLFxuICAgICAgICAgIG1pbldpZHRoOiAzMjAsXG4gICAgICAgICAgbWluSGVpZ2h0OiAyMDAsXG4gICAgICAgICAgYWxzb1Jlc2l6ZTogXCIjd2lyZWZyYW1lLCAjZHJhZ2dpbmdCYXJcIixcbiAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICBcInVpLXJlc2l6YWJsZS1zZVwiOiBcInVpLWljb24gdWktaWNvbi1ncmlwLWRpYWdvbmFsLXNlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgIC8vcHJvcGFnYXRlIGdyYXBoIHJlc2l6ZSB0byBvdGhlciB1c2VyczsgaGFuZGxlZCBpbiBUb29sYm94LmpzXG4gICAgICAgICAgICB5LnNoYXJlLmFjdGlvbi5zZXQoQ09OU1QuQUNUSU9OUy5TSEFSRUQuR1JBUEhfUkVTSVpFLCB7XG4gICAgICAgICAgICAgIHVzZXJJZDogeS5kYi51c2VySWQsXG4gICAgICAgICAgICAgIGRIZWlnaHQ6IHVpLnNpemUuaGVpZ2h0IC0gdWkub3JpZ2luYWxTaXplLmhlaWdodCxcbiAgICAgICAgICAgICAgZFdpZHRoOiB1aS5zaXplLndpZHRoIC0gdWkub3JpZ2luYWxTaXplLndpZHRoXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIiN3aXJlZnJhbWVXcmFwXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgICAgaGFuZGxlOiBcIiNkcmFnZ2luZ0JhclwiLFxuICAgICAgICAgIGNvbnRhaW5tZW50OiAnI3dpcmVmcmFtZUNvbnRhaW5lcidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmhzcGxpdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgJHBhbGV0dGUgPSAkKCcjcGFsZXR0ZScpO1xuICAgICAgICAgIHZhciBwYWxldHRlV2lkdGggPSAkcGFsZXR0ZS5jc3MoJ3dpZHRoJyk7XG4gICAgICAgICAgaWYgKCRwYWxldHRlLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkcGFsZXR0ZS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjd2lyZWZyYW1lQ29udGFpbmVyJykuY3NzKCdsZWZ0JywgJy09JysgcGFsZXR0ZVdpZHRoKTtcbiAgICAgICAgICAgICQoJyN0b29sYm94JykuY3NzKCdsZWZ0JywgJy09JyArcGFsZXR0ZVdpZHRoKTtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgJy09JyArIHBhbGV0dGVXaWR0aCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRwYWxldHRlLnNob3coKTtcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdsZWZ0JywgJys9JyArcGFsZXR0ZVdpZHRoKTtcbiAgICAgICAgICAgICQoJyN3aXJlZnJhbWVDb250YWluZXInKS5jc3MoJ2xlZnQnLCAnKz0nICsgcGFsZXR0ZVdpZHRoKTtcbiAgICAgICAgICAgICQoJyN0b29sYm94JykuY3NzKCdsZWZ0JywgJys9JyArIHBhbGV0dGVXaWR0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHtcbiAgICBteFV0aWxzLFxuICAgIG14U2hhcGUsXG4gICAgbXhDb25zdGFudHNcbn0gZnJvbSAnLi4vbWlzYy9teEV4cG9ydC5qcyc7XG5cbmZ1bmN0aW9uIEF1ZGlvU2hhcGUoYm91bmRzLCBmaWxsLCBzdHJva2UsIHN0cm9rZXdpZHRoKSB7XG4gICAgbXhTaGFwZS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuYm91bmRzID0gYm91bmRzO1xuICAgIHRoaXMuZmlsbCA9IFwid2hpdGVcIjtcbiAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICB0aGlzLnN0cm9rZXdpZHRoID0gKHN0cm9rZXdpZHRoICE9IG51bGwpID8gc3Ryb2tld2lkdGggOiAxO1xuICAgIHRoaXMuYmFyUG9zID0gMjA7XG4gICAgdGhpcy5iYXJIZWlnaHQgPSAzMDtcbn07XG5cbi8qKlxuICogRXh0ZW5kcyBteFNoYXBlLlxuICovXG5teFV0aWxzLmV4dGVuZChBdWRpb1NoYXBlLCBteFNoYXBlKTtcblxuQXVkaW9TaGFwZS5wcm90b3R5cGUuY3N0ID0ge1xuICAgIEZJTExfQ09MT1IyOiAnZmlsbENvbG9yMicsXG4gICAgVEVYVF9DT0xPUjogJ3RleHRDb2xvcicsXG4gICAgU1RST0tFX0NPTE9SMjogJ3N0cm9rZUNvbG9yMicsXG4gICAgU1RST0tFX0NPTE9SMzogJ3N0cm9rZUNvbG9yMycsXG4gICAgU0hBUEU6ICdBdWRpb1BsYXllcicsXG4gICAgQkFSX1BPUzogJ2JhclBvcycsXG4gICAgQkFSX0hFSUdIVDogJ2JhckhlaWdodCdcbn07XG5cbi8qKlxuICogRnVuY3Rpb246IHBhaW50VmVydGV4U2hhcGVcbiAqIFxuICogUGFpbnRzIHRoZSB2ZXJ0ZXggc2hhcGUuXG4gKi9cbkF1ZGlvU2hhcGUucHJvdG90eXBlLnBhaW50VmVydGV4U2hhcGUgPSBmdW5jdGlvbiAoYywgeCwgeSwgdywgaCkge1xuICAgIHZhciBiZ0NvbG9yID0gbXhVdGlscy5nZXRWYWx1ZSh0aGlzLnN0eWxlLCBteENvbnN0YW50cy5TVFlMRV9GSUxMQ09MT1IsICd3aGl0ZScpO1xuICAgIHZhciBidXR0b25Db2xvciA9IG14VXRpbHMuZ2V0VmFsdWUodGhpcy5zdHlsZSwgQXVkaW9TaGFwZS5wcm90b3R5cGUuY3N0LkZJTExfQ09MT1IyLCAnZ3JleScpO1xuICAgIHZhciBmcmFtZUNvbG9yID0gbXhVdGlscy5nZXRWYWx1ZSh0aGlzLnN0eWxlLCBteENvbnN0YW50cy5TVFlMRV9TVFJPS0VDT0xPUiwgJ2dyZXknKTtcbiAgICB2YXIgZmlsbGVkQ29sb3IgPSBteFV0aWxzLmdldFZhbHVlKHRoaXMuc3R5bGUsIEF1ZGlvU2hhcGUucHJvdG90eXBlLmNzdC5TVFJPS0VfQ09MT1IyLCAnZ3JleScpO1xuICAgIHZhciBlbXB0eUNvbG9yID0gbXhVdGlscy5nZXRWYWx1ZSh0aGlzLnN0eWxlLCBBdWRpb1NoYXBlLnByb3RvdHlwZS5jc3QuU1RST0tFX0NPTE9SMywgJ2dyZXknKTtcbiAgICB2YXIgYmFySGVpZ2h0ID0gbXhVdGlscy5nZXRWYWx1ZSh0aGlzLnN0eWxlLCBBdWRpb1NoYXBlLnByb3RvdHlwZS5jc3QuQkFSX0hFSUdIVCwgMjUpO1xuXG4gICAgdyA9IE1hdGgubWF4KHcsIGJhckhlaWdodCk7XG4gICAgaCA9IE1hdGgubWF4KGgsIGJhckhlaWdodCk7XG5cbiAgICBjLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICB0aGlzLmJhY2tncm91bmQoYywgeCwgeSwgdywgaCwgYmdDb2xvciwgZnJhbWVDb2xvcik7XG4gICAgYy5zZXRTaGFkb3coZmFsc2UpO1xuICAgIHRoaXMub3RoZXJTaGFwZXMoYywgeCwgeSwgdywgaCwgYnV0dG9uQ29sb3IsIGZyYW1lQ29sb3IsIGZpbGxlZENvbG9yLCBlbXB0eUNvbG9yLCBoKTtcbn07XG5cbkF1ZGlvU2hhcGUucHJvdG90eXBlLmJhY2tncm91bmQgPSBmdW5jdGlvbiAoYywgeCwgeSwgdywgaCwgYmdDb2xvciwgZnJhbWVDb2xvcikgeyAgIFxuICAgIGMuc2V0RmlsbENvbG9yKGJnQ29sb3IpO1xuICAgIGMuc2V0U3Ryb2tlQ29sb3IoZnJhbWVDb2xvcik7XG4gICAgYy5iZWdpbigpO1xuICAgIGMubW92ZVRvKDAsIDApO1xuICAgIGMubGluZVRvKHcsIDApO1xuICAgIGMubGluZVRvKHcsIGgpO1xuICAgIGMubGluZVRvKDAsIGgpO1xuICAgIGMuY2xvc2UoKTtcbiAgICBjLmZpbGxBbmRTdHJva2UoKTtcbn07XG5cbkF1ZGlvU2hhcGUucHJvdG90eXBlLm90aGVyU2hhcGVzID0gZnVuY3Rpb24gKGMsIHgsIHksIHcsIGgsIGJ1dHRvbkNvbG9yLCBmcmFtZUNvbG9yLCBmaWxsZWRDb2xvciwgZW1wdHlDb2xvciwgYmFySGVpZ2h0KSB7XG4gICAgdmFyIGJhclBvcyA9IG14VXRpbHMuZ2V0VmFsdWUodGhpcy5zdHlsZSwgQXVkaW9TaGFwZS5wcm90b3R5cGUuY3N0LkJBUl9QT1MsICcyMCcpO1xuICAgIGJhclBvcyA9IE1hdGgubWF4KDAsIGJhclBvcyk7XG4gICAgYmFyUG9zID0gTWF0aC5taW4oMTAwLCBiYXJQb3MpO1xuICAgIHZhciBzdHJva2VXaWR0aCA9IG14VXRpbHMuZ2V0VmFsdWUodGhpcy5zdHlsZSwgbXhDb25zdGFudHMuU1RZTEVfU1RST0tFV0lEVEgsICcxJyk7XG4gICAgdmFyIGJ1dHRvblIgPSA4O1xuICAgIHZhciBiYXJZID0gMCA7XG5cbiAgICB2YXIgYmFyTWluID0gYnV0dG9uUjtcbiAgICB2YXIgYmFyTWF4ID0gdyAtIGJ1dHRvblI7XG4gICAgdmFyIGJhclJhbmdlID0gYmFyTWF4IC0gYmFyTWluO1xuICAgIHZhciByZWFsQmFyUG9zID0gYmFyUmFuZ2UgKiBiYXJQb3MgLyAxMDA7XG4gICAgdmFyIGJhckVuZCA9IGJhck1pbiArIHJlYWxCYXJQb3M7XG5cbiAgICAvL3Byb2dyZXNzIGJhclxuICAgIGMuc2V0U3Ryb2tlQ29sb3IoZmlsbGVkQ29sb3IpO1xuICAgIGMuYmVnaW4oKTtcbiAgICBjLm1vdmVUbygwLCBiYXJZKTtcbiAgICBjLmxpbmVUbyhiYXJFbmQsIGJhclkpO1xuICAgIGMuc3Ryb2tlKCk7XG4gICAgYy5zZXRTdHJva2VDb2xvcihlbXB0eUNvbG9yKTtcbiAgICBjLmJlZ2luKCk7XG4gICAgYy5tb3ZlVG8oYmFyRW5kLCBiYXJZKTtcbiAgICBjLmxpbmVUbyh3LCBiYXJZKTtcbiAgICBjLnN0cm9rZSgpO1xuXG4gICAgLy9wcm9ncmVzcyBiYXIgYnV0dG9uXG4gICAgYy5zZXRTdHJva2VDb2xvcihmcmFtZUNvbG9yKTtcbiAgICBjLmJlZ2luKCk7XG4gICAgYy5lbGxpcHNlKGJhckVuZCAtIGJ1dHRvblIsIGJhclkgLSBidXR0b25SLCAyICogYnV0dG9uUiwgMiAqIGJ1dHRvblIpO1xuICAgIGMuZmlsbEFuZFN0cm9rZSgpO1xuXG4gICAgYy5iZWdpbigpO1xuICAgIGMuc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGggLyAyKTtcbiAgICBjLmVsbGlwc2UoYmFyRW5kIC0gYnV0dG9uUiAqIDAuNSwgYmFyWSAtIGJ1dHRvblIgKiAwLjUsIGJ1dHRvblIsIGJ1dHRvblIpO1xuICAgIGMuZmlsbEFuZFN0cm9rZSgpO1xuICAgIGMuc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGgpO1xuXG4gICAgdmFyIGljb25TaXplID0gYmFySGVpZ2h0ICogMC4zO1xuICAgIHZhciBpY29uWSA9IGggLSAoYmFySGVpZ2h0ICsgaWNvblNpemUpICogMC41O1xuICAgIHZhciBpY29uWCA9IGJhckhlaWdodCAqIDAuMztcbiAgICBjLnNldEZpbGxDb2xvcihidXR0b25Db2xvcik7XG4gICAgYy5zZXRTdHJva2VDb2xvcihidXR0b25Db2xvcik7XG5cbiAgICAvL3BsYXkgaWNvblxuICAgIGMuYmVnaW4oKTtcbiAgICBjLm1vdmVUbyhpY29uWCwgaWNvblkpO1xuICAgIGMubGluZVRvKGljb25YICsgaWNvblNpemUsIGljb25ZICsgaWNvblNpemUgKiAwLjUpO1xuICAgIGMubGluZVRvKGljb25YLCBpY29uWSArIGljb25TaXplKTtcbiAgICBjLmNsb3NlKCk7XG4gICAgYy5maWxsQW5kU3Ryb2tlKCk7XG5cbiAgICAvL3ZvbHVtZSBpY29uXG4gICAgdmFyIHNwZWFrZXJYID0gYmFySGVpZ2h0O1xuICAgIHZhciBzcGVha2VyWSA9IGggLSBiYXJIZWlnaHQ7XG4gICAgYy5tb3ZlVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjA1LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNCk7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjE1LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNCk7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjMsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC4yNSk7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjMsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC43NSk7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjE1LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNik7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjA1LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNik7XG4gICAgYy5jbG9zZSgpO1xuICAgIGMuZmlsbEFuZFN0cm9rZSgpO1xuXG4gICAgYy5iZWdpbigpO1xuICAgIGMubW92ZVRvKHNwZWFrZXJYICsgYmFySGVpZ2h0ICogMC40LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuMzUpO1xuICAgIGMuYXJjVG8oYmFySGVpZ2h0ICogMC4yLCBiYXJIZWlnaHQgKiAwLjMsIDAsIDAsIDEsIHNwZWFrZXJYICsgYmFySGVpZ2h0ICogMC40LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNjUpO1xuICAgIGMubW92ZVRvKHNwZWFrZXJYICsgYmFySGVpZ2h0ICogMC40MjUsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC4yNSk7XG4gICAgYy5hcmNUbyhiYXJIZWlnaHQgKiAwLjIyNSwgYmFySGVpZ2h0ICogMC4zNSwgMCwgMCwgMSwgc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjQyNSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjc1KTtcbiAgICBjLnN0cm9rZSgpO1xuXG4gICAgLy9mdWxsc2NyZWVuIGJ1dHRvblxuICAgIHZhciBzY3JlZW5YID0gdyAtIGJhckhlaWdodCAqIDEuMztcbiAgICBjLmJlZ2luKCk7XG4gICAgYy5tb3ZlVG8oc2NyZWVuWCArIGJhckhlaWdodCAqIDAuMSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjQpO1xuICAgIGMubGluZVRvKHNjcmVlblggKyBiYXJIZWlnaHQgKiAwLjEsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC4zKTtcbiAgICBjLmxpbmVUbyhzY3JlZW5YICsgYmFySGVpZ2h0ICogMC4yNSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjMpO1xuXG4gICAgYy5tb3ZlVG8oc2NyZWVuWCArIGJhckhlaWdodCAqIDAuMSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjYpO1xuICAgIGMubGluZVRvKHNjcmVlblggKyBiYXJIZWlnaHQgKiAwLjEsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC43KTtcbiAgICBjLmxpbmVUbyhzY3JlZW5YICsgYmFySGVpZ2h0ICogMC4yNSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjcpO1xuXG4gICAgYy5tb3ZlVG8oc2NyZWVuWCArIGJhckhlaWdodCAqIDAuOSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjQpO1xuICAgIGMubGluZVRvKHNjcmVlblggKyBiYXJIZWlnaHQgKiAwLjksIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC4zKTtcbiAgICBjLmxpbmVUbyhzY3JlZW5YICsgYmFySGVpZ2h0ICogMC43NSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjMpO1xuXG4gICAgYy5tb3ZlVG8oc2NyZWVuWCArIGJhckhlaWdodCAqIDAuOSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjYpO1xuICAgIGMubGluZVRvKHNjcmVlblggKyBiYXJIZWlnaHQgKiAwLjksIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC43KTtcbiAgICBjLmxpbmVUbyhzY3JlZW5YICsgYmFySGVpZ2h0ICogMC43NSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjcpO1xuICAgIGMuc3Ryb2tlKCk7XG5cbiAgICB2YXIgdGV4dENvbG9yID0gbXhVdGlscy5nZXRWYWx1ZSh0aGlzLnN0eWxlLCBBdWRpb1NoYXBlLnByb3RvdHlwZS5jc3QuVEVYVF9DT0xPUiwgJ2dyZXknKTtcbiAgICBjLmJlZ2luKCk7XG4gICAgYy5zZXRGb250U2l6ZShiYXJIZWlnaHQgKiAwLjUpO1xuICAgIGMuc2V0Rm9udENvbG9yKHRleHRDb2xvcik7XG4gICAgYy50ZXh0KGJhckhlaWdodCAqIDEuOSwgaCAtIGJhckhlaWdodCAqIDAuNDUsIDAsIDAsICcwOjQyLzQ6MjMnLCBteENvbnN0YW50cy5BTElHTl9MRUZULCBteENvbnN0YW50cy5BTElHTl9NSURETEUsIDAsIG51bGwsIDAsIDAsIDApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9TaGFwZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zaGFwZXMvQXVkaW9TaGFwZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7XG4gICAgbXhVdGlscyxcbiAgICBteFNoYXBlLFxuICAgIG14Q29uc3RhbnRzXG59IGZyb20gJy4uL21pc2MvbXhFeHBvcnQuanMnO1xuXG5mdW5jdGlvbiBWaWRlb1NoYXBlKGJvdW5kcywgZmlsbCwgc3Ryb2tlLCBzdHJva2V3aWR0aCkge1xuICAgIG14U2hhcGUuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmJvdW5kcyA9IGJvdW5kcztcbiAgICB0aGlzLmZpbGwgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgdGhpcy5zdHJva2V3aWR0aCA9IChzdHJva2V3aWR0aCAhPSBudWxsKSA/IHN0cm9rZXdpZHRoIDogMTtcbiAgICB0aGlzLmJhclBvcyA9IDIwO1xuICAgIHRoaXMuYmFySGVpZ2h0ID0gMzA7XG59O1xuXG4vKipcbiAqIEV4dGVuZHMgbXhTaGFwZS5cbiAqL1xubXhVdGlscy5leHRlbmQoVmlkZW9TaGFwZSwgbXhTaGFwZSk7XG5cblZpZGVvU2hhcGUucHJvdG90eXBlLmNzdCA9IHtcbiAgICBGSUxMX0NPTE9SMjogJ2ZpbGxDb2xvcjInLFxuICAgIFRFWFRfQ09MT1I6ICd0ZXh0Q29sb3InLFxuICAgIFNUUk9LRV9DT0xPUjI6ICdzdHJva2VDb2xvcjInLFxuICAgIFNUUk9LRV9DT0xPUjM6ICdzdHJva2VDb2xvcjMnLFxuICAgIFNIQVBFOiAnVmlkZW9QbGF5ZXInLFxuICAgIEJBUl9QT1M6ICdiYXJQb3MnLFxuICAgIEJBUl9IRUlHSFQ6ICdiYXJIZWlnaHQnXG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uOiBwYWludFZlcnRleFNoYXBlXG4gKiBcbiAqIFBhaW50cyB0aGUgdmVydGV4IHNoYXBlLlxuICovXG5WaWRlb1NoYXBlLnByb3RvdHlwZS5wYWludFZlcnRleFNoYXBlID0gZnVuY3Rpb24gKGMsIHgsIHksIHcsIGgpIHtcbiAgICB2YXIgYmdDb2xvciA9IG14VXRpbHMuZ2V0VmFsdWUodGhpcy5zdHlsZSwgbXhDb25zdGFudHMuU1RZTEVfRklMTENPTE9SLCAnd2hpdGUnKTtcbiAgICB2YXIgYnV0dG9uQ29sb3IgPSBteFV0aWxzLmdldFZhbHVlKHRoaXMuc3R5bGUsIFZpZGVvU2hhcGUucHJvdG90eXBlLmNzdC5GSUxMX0NPTE9SMiwgJ2dyZXknKTtcbiAgICB2YXIgZnJhbWVDb2xvciA9IG14VXRpbHMuZ2V0VmFsdWUodGhpcy5zdHlsZSwgbXhDb25zdGFudHMuU1RZTEVfU1RST0tFQ09MT1IsICdncmV5Jyk7XG4gICAgdmFyIGZpbGxlZENvbG9yID0gbXhVdGlscy5nZXRWYWx1ZSh0aGlzLnN0eWxlLCBWaWRlb1NoYXBlLnByb3RvdHlwZS5jc3QuU1RST0tFX0NPTE9SMiwgJ2dyZXknKTtcbiAgICB2YXIgZW1wdHlDb2xvciA9IG14VXRpbHMuZ2V0VmFsdWUodGhpcy5zdHlsZSwgVmlkZW9TaGFwZS5wcm90b3R5cGUuY3N0LlNUUk9LRV9DT0xPUjMsICdncmV5Jyk7XG4gICAgdmFyIGJhckhlaWdodCA9IG14VXRpbHMuZ2V0VmFsdWUodGhpcy5zdHlsZSwgVmlkZW9TaGFwZS5wcm90b3R5cGUuY3N0LkJBUl9IRUlHSFQsIDMwKTtcblxuICAgIHcgPSBNYXRoLm1heCh3LCA1ICogYmFySGVpZ2h0KTtcbiAgICBoID0gTWF0aC5tYXgoaCwgYmFySGVpZ2h0ICsgMTApO1xuXG4gICAgYy50cmFuc2xhdGUoeCwgeSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kKGMsIHgsIHksIHcsIGgsIGJnQ29sb3IsIGZyYW1lQ29sb3IpO1xuICAgIGMuc2V0U2hhZG93KGZhbHNlKTtcbiAgICB0aGlzLm90aGVyU2hhcGVzKGMsIHgsIHksIHcsIGgsIGJ1dHRvbkNvbG9yLCBmcmFtZUNvbG9yLCBmaWxsZWRDb2xvciwgZW1wdHlDb2xvciwgYmFySGVpZ2h0KTtcbn07XG5cblZpZGVvU2hhcGUucHJvdG90eXBlLmJhY2tncm91bmQgPSBmdW5jdGlvbiAoYywgeCwgeSwgdywgaCwgYmdDb2xvciwgZnJhbWVDb2xvcikge1xuICAgIGMuc2V0RmlsbENvbG9yKGJnQ29sb3IpO1xuICAgIGMuc2V0U3Ryb2tlQ29sb3IoZnJhbWVDb2xvcik7XG4gICAgYy5iZWdpbigpO1xuICAgIGMubW92ZVRvKDAsIDApO1xuICAgIGMubGluZVRvKHcsIDApO1xuICAgIGMubGluZVRvKHcsIGgpO1xuICAgIGMubGluZVRvKDAsIGgpO1xuICAgIGMuY2xvc2UoKTtcbiAgICBjLmZpbGxBbmRTdHJva2UoKTtcbn07XG5cblZpZGVvU2hhcGUucHJvdG90eXBlLm90aGVyU2hhcGVzID0gZnVuY3Rpb24gKGMsIHgsIHksIHcsIGgsIGJ1dHRvbkNvbG9yLCBmcmFtZUNvbG9yLCBmaWxsZWRDb2xvciwgZW1wdHlDb2xvciwgYmFySGVpZ2h0KSB7XG4gICAgdmFyIGJhclBvcyA9IG14VXRpbHMuZ2V0VmFsdWUodGhpcy5zdHlsZSwgVmlkZW9TaGFwZS5wcm90b3R5cGUuY3N0LkJBUl9QT1MsICcyMCcpO1xuICAgIGJhclBvcyA9IE1hdGgubWF4KDAsIGJhclBvcyk7XG4gICAgYmFyUG9zID0gTWF0aC5taW4oMTAwLCBiYXJQb3MpO1xuXG4gICAgdmFyIHN0cm9rZVdpZHRoID0gbXhVdGlscy5nZXRWYWx1ZSh0aGlzLnN0eWxlLCBteENvbnN0YW50cy5TVFlMRV9TVFJPS0VXSURUSCwgJzEnKTtcbiAgICB2YXIgYnV0dG9uUiA9IDg7XG4gICAgdmFyIGJhclkgPSBoIC0gYmFySGVpZ2h0O1xuXG4gICAgdmFyIGJhck1pbiA9IGJ1dHRvblI7XG4gICAgdmFyIGJhck1heCA9IHcgLSBidXR0b25SO1xuICAgIHZhciBiYXJSYW5nZSA9IGJhck1heCAtIGJhck1pbjtcbiAgICB2YXIgcmVhbEJhclBvcyA9IGJhclJhbmdlICogYmFyUG9zIC8gMTAwO1xuICAgIHZhciBiYXJFbmQgPSBiYXJNaW4gKyByZWFsQmFyUG9zO1xuICAgIFxuICAgIC8vY2FtZXJhIGljb25cbiAgICB2YXIgY2FtZXJJY29uWCA9ICB3LzIgLSB3LzQuNTtcbiAgICB2YXIgY2FtZXJhSWNvblkgPSBoLzIgKyBoLzEyO1xuICAgIHZhciBjYW1lcmFJY29uV2lkdGggPSB3ICogMC4zO1xuICAgIHZhciBjYW1lcmFJY29uSGVpZ2h0ID0gKGggLSBiYXJIZWlnaHQpICogMC41O1xuICAgIHZhciBvZmZzZXQgPSAtKGNhbWVyYUljb25IZWlnaHQqMC41KTtcbiAgICBjLnNldFN0cm9rZUNvbG9yKGZpbGxlZENvbG9yKTtcbiAgICBjLnNldEZpbGxDb2xvcignIzgwODA4MCcpO1xuICAgIGMuYmVnaW4oKTtcblxuICAgIGMubW92ZVRvKGNhbWVySWNvblgsIGNhbWVyYUljb25ZKTtcblxuICAgIGMubGluZVRvKGNhbWVySWNvblgrY2FtZXJhSWNvbldpZHRoLCBjYW1lcmFJY29uWSk7XG4gICAgYy5saW5lVG8oY2FtZXJJY29uWCtjYW1lcmFJY29uV2lkdGgsIGNhbWVyYUljb25ZLWNhbWVyYUljb25IZWlnaHQpO1xuICAgIGMubGluZVRvKGNhbWVySWNvblgsIGNhbWVyYUljb25ZLWNhbWVyYUljb25IZWlnaHQpO1xuICAgIGMubGluZVRvKGNhbWVySWNvblgsIGNhbWVyYUljb25ZKTtcblxuICAgIGMubW92ZVRvKGNhbWVySWNvblgrY2FtZXJhSWNvbldpZHRoICtvZmZzZXQsIGNhbWVyYUljb25ZLShjYW1lcmFJY29uSGVpZ2h0LzIpKTtcbiAgICBcbiAgICBjLmxpbmVUbyhjYW1lckljb25YK2NhbWVyYUljb25XaWR0aCtjYW1lcmFJY29uSGVpZ2h0ICsgb2Zmc2V0LCBjYW1lcmFJY29uWSk7XG4gICAgYy5saW5lVG8oY2FtZXJJY29uWCtjYW1lcmFJY29uV2lkdGgrY2FtZXJhSWNvbkhlaWdodCArIG9mZnNldCwgY2FtZXJhSWNvblktY2FtZXJhSWNvbkhlaWdodCk7XG4gICAgYy5saW5lVG8oY2FtZXJJY29uWCtjYW1lcmFJY29uV2lkdGgrb2Zmc2V0LCBjYW1lcmFJY29uWS0oY2FtZXJhSWNvbkhlaWdodC8yKSk7XG4gICAgYy5maWxsQW5kU3Ryb2tlKCk7ICAgIFxuXG4gICAgLy9wcm9ncmVzcyBiYXJcbiAgICBjLnNldEZpbGxDb2xvcignbm9uZScpO1xuICAgIGMuc2V0U3Ryb2tlQ29sb3IoZmlsbGVkQ29sb3IpO1xuICAgIGMuYmVnaW4oKTtcbiAgICBjLm1vdmVUbygwLCBiYXJZKTtcbiAgICBjLmxpbmVUbyhiYXJFbmQsIGJhclkpO1xuICAgIGMuc3Ryb2tlKCk7XG4gICAgYy5zZXRTdHJva2VDb2xvcihlbXB0eUNvbG9yKTtcbiAgICBjLmJlZ2luKCk7XG4gICAgYy5tb3ZlVG8oYmFyRW5kLCBiYXJZKTtcbiAgICBjLmxpbmVUbyh3LCBiYXJZKTtcbiAgICBjLnN0cm9rZSgpO1xuXG4gICAgLy9wcm9ncmVzcyBiYXIgYnV0dG9uXG4gICAgYy5zZXRTdHJva2VDb2xvcihmcmFtZUNvbG9yKTtcbiAgICBjLmJlZ2luKCk7XG4gICAgYy5lbGxpcHNlKGJhckVuZCAtIGJ1dHRvblIsIGJhclkgLSBidXR0b25SLCAyICogYnV0dG9uUiwgMiAqIGJ1dHRvblIpO1xuICAgIGMuZmlsbEFuZFN0cm9rZSgpO1xuXG4gICAgYy5iZWdpbigpO1xuICAgIGMuc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGggLyAyKTtcbiAgICBjLmVsbGlwc2UoYmFyRW5kIC0gYnV0dG9uUiAqIDAuNSwgYmFyWSAtIGJ1dHRvblIgKiAwLjUsIGJ1dHRvblIsIGJ1dHRvblIpO1xuICAgIGMuZmlsbEFuZFN0cm9rZSgpO1xuICAgIGMuc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGgpO1xuXG4gICAgdmFyIGljb25TaXplID0gYmFySGVpZ2h0ICogMC4zO1xuICAgIHZhciBpY29uWSA9IGggLSAoYmFySGVpZ2h0ICsgaWNvblNpemUpICogMC41O1xuICAgIHZhciBpY29uWCA9IGJhckhlaWdodCAqIDAuMztcbiAgICBjLnNldEZpbGxDb2xvcihidXR0b25Db2xvcik7XG4gICAgYy5zZXRTdHJva2VDb2xvcihidXR0b25Db2xvcik7XG5cbiAgICAvL3BsYXkgaWNvblxuICAgIGMuYmVnaW4oKTtcbiAgICBjLm1vdmVUbyhpY29uWCwgaWNvblkpO1xuICAgIGMubGluZVRvKGljb25YICsgaWNvblNpemUsIGljb25ZICsgaWNvblNpemUgKiAwLjUpO1xuICAgIGMubGluZVRvKGljb25YLCBpY29uWSArIGljb25TaXplKTtcbiAgICBjLmNsb3NlKCk7XG4gICAgYy5maWxsQW5kU3Ryb2tlKCk7XG5cbiAgICAvL3ZvbHVtZSBpY29uXG4gICAgdmFyIHNwZWFrZXJYID0gYmFySGVpZ2h0O1xuICAgIHZhciBzcGVha2VyWSA9IGggLSBiYXJIZWlnaHQ7XG4gICAgYy5tb3ZlVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjA1LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNCk7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjE1LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNCk7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjMsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC4yNSk7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjMsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC43NSk7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjE1LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNik7XG4gICAgYy5saW5lVG8oc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjA1LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNik7XG4gICAgYy5jbG9zZSgpO1xuICAgIGMuZmlsbEFuZFN0cm9rZSgpO1xuXG4gICAgYy5iZWdpbigpO1xuICAgIGMubW92ZVRvKHNwZWFrZXJYICsgYmFySGVpZ2h0ICogMC40LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuMzUpO1xuICAgIGMuYXJjVG8oYmFySGVpZ2h0ICogMC4yLCBiYXJIZWlnaHQgKiAwLjMsIDAsIDAsIDEsIHNwZWFrZXJYICsgYmFySGVpZ2h0ICogMC40LCBzcGVha2VyWSArIGJhckhlaWdodCAqIDAuNjUpO1xuICAgIGMubW92ZVRvKHNwZWFrZXJYICsgYmFySGVpZ2h0ICogMC40MjUsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC4yNSk7XG4gICAgYy5hcmNUbyhiYXJIZWlnaHQgKiAwLjIyNSwgYmFySGVpZ2h0ICogMC4zNSwgMCwgMCwgMSwgc3BlYWtlclggKyBiYXJIZWlnaHQgKiAwLjQyNSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjc1KTtcbiAgICBjLnN0cm9rZSgpO1xuXG4gICAgLy9mdWxsc2NyZWVuIGJ1dHRvblxuICAgIHZhciBzY3JlZW5YID0gdyAtIGJhckhlaWdodCAqIDEuMztcbiAgICBjLmJlZ2luKCk7XG4gICAgYy5tb3ZlVG8oc2NyZWVuWCArIGJhckhlaWdodCAqIDAuMSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjQpO1xuICAgIGMubGluZVRvKHNjcmVlblggKyBiYXJIZWlnaHQgKiAwLjEsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC4zKTtcbiAgICBjLmxpbmVUbyhzY3JlZW5YICsgYmFySGVpZ2h0ICogMC4yNSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjMpO1xuXG4gICAgYy5tb3ZlVG8oc2NyZWVuWCArIGJhckhlaWdodCAqIDAuMSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjYpO1xuICAgIGMubGluZVRvKHNjcmVlblggKyBiYXJIZWlnaHQgKiAwLjEsIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC43KTtcbiAgICBjLmxpbmVUbyhzY3JlZW5YICsgYmFySGVpZ2h0ICogMC4yNSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjcpO1xuXG4gICAgYy5tb3ZlVG8oc2NyZWVuWCArIGJhckhlaWdodCAqIDAuOSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjQpO1xuICAgIGMubGluZVRvKHNjcmVlblggKyBiYXJIZWlnaHQgKiAwLjksIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC4zKTtcbiAgICBjLmxpbmVUbyhzY3JlZW5YICsgYmFySGVpZ2h0ICogMC43NSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjMpO1xuXG4gICAgYy5tb3ZlVG8oc2NyZWVuWCArIGJhckhlaWdodCAqIDAuOSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjYpO1xuICAgIGMubGluZVRvKHNjcmVlblggKyBiYXJIZWlnaHQgKiAwLjksIHNwZWFrZXJZICsgYmFySGVpZ2h0ICogMC43KTtcbiAgICBjLmxpbmVUbyhzY3JlZW5YICsgYmFySGVpZ2h0ICogMC43NSwgc3BlYWtlclkgKyBiYXJIZWlnaHQgKiAwLjcpO1xuICAgIGMuc3Ryb2tlKCk7XG5cbiAgICB2YXIgdGV4dENvbG9yID0gbXhVdGlscy5nZXRWYWx1ZSh0aGlzLnN0eWxlLCBWaWRlb1NoYXBlLnByb3RvdHlwZS5jc3QuVEVYVF9DT0xPUiwgJ2dyZXknKTtcbiAgICBjLmJlZ2luKCk7XG4gICAgYy5zZXRGb250U2l6ZShiYXJIZWlnaHQgKiAwLjUpO1xuICAgIGMuc2V0Rm9udENvbG9yKHRleHRDb2xvcik7XG4gICAgYy50ZXh0KGJhckhlaWdodCAqIDEuOSwgaCAtIGJhckhlaWdodCAqIDAuNDUsIDAsIDAsICcxOjIwLzY6MjMnLCBteENvbnN0YW50cy5BTElHTl9MRUZULCBteENvbnN0YW50cy5BTElHTl9NSURETEUsIDAsIG51bGwsIDAsIDAsIDApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9TaGFwZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zaGFwZXMvVmlkZW9TaGFwZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=