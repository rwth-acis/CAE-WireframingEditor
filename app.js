webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mxExport_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_tabs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_tabs__);




function PropertyEditor(cell) {

    var _cell = cell;
    var htmlEditorTemplate = '<div id="propertyEditor_' + cell.getId() + '"><ul><li><a href="#attributesTab">Attributes</a></li><li><a href="#tagsTab">Tags</a></li></ul><div id="attributesTab"></div><div id="tagsTab"></div>';

    this.getCell = function(){
        return cell;
    }

    this.createPropertyEditor = function (form) {
        var $htmlTagEditor = __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#propertyEditor_' + cell.getId());
        if ($htmlTagEditor.length == 0) {
            var $htmlTagEditor = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(__WEBPACK_IMPORTED_MODULE_1_jquery___default.a.parseHTML(htmlEditorTemplate)[0]);

            $htmlTagEditor.tabs();
            $htmlTagEditor.find('#attributesTab').append(form.body);
            var propertyEditorWnd = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["q" /* mxWindow */]("Properties", $htmlTagEditor[0], '70', '700', '100%', '40%', true, true);
            propertyEditorWnd.setVisible(true);
            propertyEditorWnd.setMaximizable(false);
            propertyEditorWnd.setResizable(false);
            propertyEditorWnd.setClosable(true);
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (PropertyEditor);

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_resizable__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_resizable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_ui_ui_widgets_resizable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_draggable__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_ui_widgets_draggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mxExport_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Wireframe_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Palette_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Editor_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Toolbox_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_yjs__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_yjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_yjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_y_websockets_client__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_y_websockets_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_y_websockets_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_y_memory__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_y_memory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_y_memory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_y_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_y_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_y_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_y_text__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_y_text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_y_text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_y_array__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_y_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_y_array__);
__webpack_require__.e/* require */(0).then(function() {[__webpack_require__(58), __webpack_require__(57), __webpack_require__(56)];}).catch(__webpack_require__.oe);
















__WEBPACK_IMPORTED_MODULE_8_yjs___default.a.extend(__WEBPACK_IMPORTED_MODULE_13_y_array___default.a, __WEBPACK_IMPORTED_MODULE_9_y_websockets_client___default.a, __WEBPACK_IMPORTED_MODULE_10_y_memory___default.a, __WEBPACK_IMPORTED_MODULE_11_y_map___default.a, __WEBPACK_IMPORTED_MODULE_12_y_text___default.a);

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(function(){
     if (!__WEBPACK_IMPORTED_MODULE_3__mxExport_js__["a" /* mxClient */].isBrowserSupported()) {
      // Displays an error message if the browser is not supported.
      __WEBPACK_IMPORTED_MODULE_3__mxExport_js__["b" /* mxUtils */].error('Browser is not supported!', 200, false);
    } else {
      __WEBPACK_IMPORTED_MODULE_8_yjs___default()({
        db: {
          name: "memory"
        },
        connector: {
          name: "websockets-client",
          room: "yireframe"
        },
        share: {
          map: 'Map',
          action: 'Map'
        }
      }).then(function (y) {
        window.y = y;
       
        var model = new __WEBPACK_IMPORTED_MODULE_3__mxExport_js__["c" /* mxGraphModel */]();
        //mxLog.show();
        
        var container = document.getElementById('wireframe');
         //disable default context menu
        __WEBPACK_IMPORTED_MODULE_3__mxExport_js__["d" /* mxEvent */].disableContextMenu(container);
        var wireframe = new __WEBPACK_IMPORTED_MODULE_4__Wireframe_js__["a" /* default */](container, model);

        var htmlPalette = document.getElementById('palette');
        var palette = new __WEBPACK_IMPORTED_MODULE_5__Palette_js__["a" /* default */](htmlPalette);

        var editor = new __WEBPACK_IMPORTED_MODULE_6__Editor_js__["a" /* default */](wireframe, palette, toolbox);


        var htmlToolbox = document.getElementById('toolbox');
        var toolbox = new __WEBPACK_IMPORTED_MODULE_7__Toolbox_js__["a" /* default */](htmlToolbox, editor);
    
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
            y.share.action.set('graphResize', {
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
          if ($palette.is(':visible')) {
            $palette.hide();
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wireframeContainer').css('left', '-=56');
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#toolbox').css('left', '-=56');
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css('left', '-=56');
          } else {
            $palette.show();
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).css('left', '+=56');
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#wireframeContainer').css('left', '+=56');
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#toolbox').css('left', '+=56');
          }
        });
      });
    }
});

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mxExport_js__ = __webpack_require__(3);
 
UIControl.prototype = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["o" /* mxCell */]();
UIControl.prototype.constructor = UIControl;
function UIControl(value, geometry, style){
    var that = this;
    __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["o" /* mxCell */].call(this, value, geometry, style);

    
    this.setVertex(true);


    this.funct = function (wf, evt, cell) {
        wf.stopEditing(false);

        //encode UIControl
        var encoder = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["f" /* mxCodec */]();

        var pt = wf.getPointForEvent(evt);
        var v = wf.getModel().cloneCell(that);
        v.geometry.x = pt.x;
        v.geometry.y = pt.y;
        //v.style = that.style;

        var result = encoder.encode(v);
        var xml = __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["b" /* mxUtils */].getXml(result);
        y.share.map.set(__WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].ADD_VERTEX, xml);
    }

    this.makeTypeDraggable = function(type, wireframe){
        __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["b" /* mxUtils */].makeDraggable(type, wireframe, that.funct);
    }


    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (UIControl);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (Util);

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mxClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return mxEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return mxGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mxGraphModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return mxCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mxCodec; });
/* unused harmony export mxCodecRegistry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mxEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return mxGraphHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return mxConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return mxKeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return mxRubberband; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mxUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return mxRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return mxToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mxStencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return mxStencilRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return mxWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return mxGeometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return mxDefaultKeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return mxForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mxDefaultToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mxLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mxClipboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build__);

var mxLib = __WEBPACK_IMPORTED_MODULE_0__node_modules_mxgraph_javascript_dist_build___default()({
        mxImageBasePath: "images",
        mxBasePath: "."
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


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mxExport_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIControl_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__KeyHandler_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContextMenu_js__ = __webpack_require__(98);





Editor.prototype = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["j" /* mxEditor */]();
Editor.prototype.constructor = Editor;

function Editor(wireframe, palette) {
    __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["j" /* mxEditor */].call(this);
    this.graph = wireframe;
    this.installUndoHandler(wireframe);
    this.setGraphContainer(wireframe.container);
    this.setToolbarContainer(palette.container);
    this.keyHandler = new __WEBPACK_IMPORTED_MODULE_2__KeyHandler_js__["a" /* default */](this);
    //Editor.prototype.disableContextMenu = false;
    //this.popupHandler = new ContextMenu('contextmenu.xml');
     new __WEBPACK_IMPORTED_MODULE_3__ContextMenu_js__["a" /* default */](this);
    //Load stencils 
    var xml = __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["b" /* mxUtils */].load('html5stencils.xml');
    var root = xml.getDocumentElement();
    var shape = root.firstChild;

    while (shape != null) {
        if (shape.nodeType == __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["k" /* mxConstants */].NODETYPE_ELEMENT) {
            __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["l" /* mxStencilRegistry */].addStencil(shape.getAttribute('name'), new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["m" /* mxStencil */](shape));
            //add UI controls and types to palette dynamically
        }
        shape = shape.nextSibling;
    }

    var DivVertex = new __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */]("Div", new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["n" /* mxGeometry */](0, 0, 100, 40), "shape=div");
    var vertex = new __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */]("Default", new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["n" /* mxGeometry */](0, 0, 100, 40), 'shape=' + __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["k" /* mxConstants */].SHAPE_CLOUD);
    var vertexActor = new __WEBPACK_IMPORTED_MODULE_1__UIControl_js__["a" /* default */]("Actor", new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["n" /* mxGeometry */](0, 0, 100, 40), 'shape=' + __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["k" /* mxConstants */].SHAPE_ACTOR);
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
/* harmony default export */ __webpack_exports__["a"] = (Editor);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mxExport_js__ = __webpack_require__(3);

Palette.prototype = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["s" /* mxToolbar */]();
Palette.prototype.constructor = Palette;

function Palette(container){
    __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["s" /* mxToolbar */].call(this, container);

    this.enabled = false;

    this.addType = function(title, icon, funct){
        var type = __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["s" /* mxToolbar */].prototype.addMode.apply(this, arguments);
        return type;
    }

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Palette);




/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mxExport_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util_js__ = __webpack_require__(29);




Toolbox.prototype = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["e" /* mxDefaultToolbar */]();
Toolbox.prototype.constructor = Toolbox;

function Toolbox(container, editor) {
    __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["e" /* mxDefaultToolbar */].call(this, container, editor);

    this._editor = editor;
    var that = this;
    
    editor.addAction("shared_paste", function (editor, cell) {
        var encoder = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["f" /* mxCodec */]();
        var result = encoder.encode(__WEBPACK_IMPORTED_MODULE_0__mxExport_js__["g" /* mxClipboard */].getCells());
        var xml = __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["b" /* mxUtils */].getXml(result);
        y.share.action.set("paste", { userId: y.db.userId, xml: xml });
        //editor.execute("paste", cell);
    });

    editor.addAction('shared_delete', function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].REMOVE, __WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].getIdsOfSelectedCells(that._editor.graph));
    });

    editor.addAction("toggleConsole", function (editor, cell) {
        if (__WEBPACK_IMPORTED_MODULE_0__mxExport_js__["h" /* mxLog */].isVisible())
            __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["h" /* mxLog */].setVisible(false);
        else
            __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["h" /* mxLog */].setVisible(true);
    });

    editor.addAction("shared_undo", function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].UNDO, y.db.userId);
    });

    editor.addAction("shared_redo", function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].REDO, y.db.userId);
    });

    editor.addAction("shared_group", function (editor, cell) {

        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].GROUP_CELLS, {userId: y.db.userId, ids : __WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].getIdsOfSelectedCells(that._editor.graph)});
    });

    editor.addAction("shared_ungroup", function (editor, cell) {
        y.share.action.set(__WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].UNGROUP_CELLS, {userId: y.db.userId, ids : __WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].getIdsOfSelectedCells(that._editor.graph)});
    });

    y.share.action.observe(function (event) {
        switch (event.name) {
            case __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].UNDO:
                //that._editor.execute("undo");
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.undo();
                    that._editor.graph.setSelectionCells(cells);
                }
                else
                    that._editor.undo();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].REDO:
                //that._editor.execute("redo");
                if (event.value !== y.db.userId) {
                    var cells = that._editor.graph.getSelectionCells();
                    that._editor.redo();
                    that._editor.graph.setSelectionCells(cells);
                }
                else
                    that._editor.redo();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].REMOVE:
                that._editor.graph.setSelectionCells(__WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].getCellsFromIdList(that._editor.graph, event.value));
                that._editor.execute("delete");
                break;
            case __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].GROUP_CELLS:
                //if(y.db.userId !== event.value.userId)
                    that._editor.graph.groupCells(null, null, __WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].getCellsFromIdList(that._editor.graph, event.value.ids));
                //else
                //    that._editor.execute("group");
                break;
            case __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["d" /* mxEvent */].UNGROUP_CELLS:
                // if(y.db.userId !== event.value.userId)
                    that._editor.graph.ungroupCells(__WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].getCellsFromIdList(that._editor.graph, event.value.ids));
                //else
                //    that._editor.execute("ungroup");
                break;
            case "paste":
                    var selectedCells = that._editor.graph.getSelectionCells();
                   
                    var doc = __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["b" /* mxUtils */].parseXml(event.value.xml);
                    var elt = doc.documentElement.firstChild;
                    var cells = [];
                    while (elt != null) {
                        var codec = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["f" /* mxCodec */]();
                        var cell = codec.decode(elt);
                        cells.push(cell);
                        elt = elt.nextSibling;
                    }   
                    __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["g" /* mxClipboard */].setCells(cells);
                    __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["g" /* mxClipboard */].paste(that._editor.graph);
                    
                    if (event.value.userId  !== y.db.userId) {
                        that._editor.graph.setSelectionCells(selectedCells);
                    }
                break;
            case "graphResize": //event triggerd in index.html
                if(y.db.userId !== event.value.userId){
                    //var size = $('#wireframeWrap').css(["width", "height"]);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#wireframeWrap').css("width", "+="+ event.value.dWidth).css("height", "+="+ event.value.dHeight);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#wireframe').css("width", "+="+ event.value.dWidth).css("height", "+="+ event.value.dHeight);
                    __WEBPACK_IMPORTED_MODULE_1_jquery___default()('#draggingBar').css("width", "+="+ event.value.dWidth).css("height", "+="+ event.value.dHeight);                
                }
                var prevBounds = that._editor.graph.maximumGraphBounds;
                that._editor.graph.maximumGraphBounds = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["i" /* mxRectangle */](0,0, prevBounds.width + event.value.dWidth, prevBounds.height + event.value.height);
            break;
        }
    });

    this.addSeparator = function(icon){
        //The first two lines are from the addSeperator(icon) of mxDefaultToolbar
        icon = icon || __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["a" /* mxClient */].imageBasePath + '/separator.gif';
	    var item = this.toolbar.addSeparator(icon);
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(item).addClass("mxSeparator");
        return item;
    }

    this.addSeparator();
    this.addItem("Copy", "images/toolbox/copy.gif", "copy");
    this.addItem("Paste", "images/toolbox/paste.gif", "shared_paste");
    this.addSeparator();
    this.addItem("Delete", "images/toolbox/delete2.png", "shared_delete");
    this.addSeparator();
    //this.addItem("Cut", "images/toolbox/cut.gif", "shared_cut");
    this.addItem("Undo", "images/toolbox/undo.gif", "shared_undo");
    this.addItem("Redo", "images/toolbox/redo.gif", "shared_redo");
    this.addSeparator();
    this.addItem("Group", "images/toolbox/group.gif", "shared_group");
    this.addItem("Ungroup", "images/toolbox/ungroup.gif", "shared_ungroup");
    this.addSeparator();
    this.addItem("Console", "images/toolbox/console.gif", "toggleConsole");
    this.addSeparator();

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Toolbox);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIControl_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mxExport_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util_js__ = __webpack_require__(29);

window.UIControl = __WEBPACK_IMPORTED_MODULE_0__UIControl_js__["a" /* default */];


window.mxGeometry = __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["n" /* mxGeometry */];
Wireframe.prototype = new __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["t" /* mxGraph */]();
Wireframe.prototype.constructor = Wireframe;
function Wireframe(container, model) {
    var that = this;
    __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["t" /* mxGraph */].call(this, container);

    var handler = new __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["u" /* mxGraphHandler */](that)

    that.foldingEnabled = false;
    that.autoExtend = false;
    that.maximumGraphBounds = new __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["i" /* mxRectangle */](0,0,500,500);
    //enable guiding lines
    __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["u" /* mxGraphHandler */].prototype.guidesEnabled = true;
    __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["u" /* mxGraphHandler */].prototype.highlightEnabled = true;

    //register Codec for UIControl

    var deltas = [];
    handler.mouseDown = function (wf, evt) {
        var cells = wf.getSelectionCells();
        for (var i = 0; i < cells.length; i++) {
            deltas.push({
                prevX: cells[i].geometry.x,
                prevY: cells[i].geometry.y,
                prevHeight: cells[i].geometry.height,
                prevWidth: cells[i].geometry.width
            });
        }
    };
    handler.mouseUp = function (wf, evt) {
        var cells = wf.getSelectionCells();
        if (cells.length > 0 && deltas.length > 0) {
            var dx = cells[0].geometry.x - deltas[0].prevX;
            var dy = cells[0].geometry.y - deltas[0].prevY;
            //Check if its is a dragging operation
            if (dx !== 0 || dy !== 0)
                y.share.map.set(__WEBPACK_IMPORTED_MODULE_1__mxExport_js__["d" /* mxEvent */].MOVE, {
                    userId: y.db.userId,
                    dx: dx,
                    dy: dy,
                    ids: __WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].getIdsOfSelectedCells(that)
                });
            else {
                var dHeight, dWidth;
                for (var i = 0; i < cells.length; i++) {
                    dWidth = cells[i].geometry.width - deltas[i].prevWidth;
                    dHeight = cells[i].geometry.height - deltas[i].prevHeight;
                    if (dWidth !== 0 || dHeight !== 0) {
                        y.share.map.set(__WEBPACK_IMPORTED_MODULE_1__mxExport_js__["d" /* mxEvent */].RESIZE, {
                            userId: y.db.userId,
                            id: cells[i].getId(),
                            x: cells[i].geometry.x,
                            y: cells[i].geometry.y,
                            height: cells[i].geometry.height,
                            width: cells[i].geometry.width
                        });
                        break;
                    }
                  
                }
            }
        }
        deltas = [];
    };


    this.dropEnabled = true;

    //For the DynamicGrid
    //this.graphHandler.scaleGrid = true; 
    //this.setPanning(true);

    new __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["v" /* mxKeyHandler */](this);
    new __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["w" /* mxRubberband */](this);

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

    that.createGroupCell = function (cells) {
        var group = __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["t" /* mxGraph */].prototype.createGroupCell.apply(this, arguments);
        group.setStyle('fillColor=none;' + __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["k" /* mxConstants */].STYLE_STROKECOLOR + '=black');
        return group;
    };

    y.share.map.observe(function (event) {
        switch (event.name) {
            case __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["d" /* mxEvent */].ADD_VERTEX: {
                var doc = __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["b" /* mxUtils */].parseXml(event.value);
                var codec = new __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["f" /* mxCodec */](doc);
                var elt = doc.documentElement;
                var cells = [];
                while (elt != null) {
                    var cell = codec.decode(elt);
                    cells.push(cell);
                    elt = elt.nextSibling;
                }
                that.addCells(cells);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["d" /* mxEvent */].MOVE: {
                if (event.value.userId !== y.db.userId) {
                    var cells = __WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].getCellsFromIdList(that, event.value.ids);
                    if (cells.length > 0) {
                        if (event.value.dx != 0 || event.value.dy != 0)
                            handler.moveCells(cells, event.value.dx, event.value.dy);
                    }
                }
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["d" /* mxEvent */].RESIZE: {
                if (event.value.userId !== y.db.userId) {
                    var cell = that.getModel().getCell(event.value.id);
                    if (cell)
                        that.resizeCell(cell, new __WEBPACK_IMPORTED_MODULE_1__mxExport_js__["i" /* mxRectangle */](event.value.x, event.value.y, event.value.width, event.value.height));
                }
                break;
            }
        }
    });
    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (Wireframe);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mxExport_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PropertyEditor_js__ = __webpack_require__(100);
//ContextMenu.prototype = new mxDefaultPopupMenu();
//ContextMenu.prototype.constructor = ContextMenu;



function ContextMenu(editor) {
    // mxDefaultPopupMenu.call(this);

    editor.graph.popupMenuHandler.factoryMethod = function (menu, cell, evt) {
        return createPopupMenu(wireframe, menu, cell, evt);
    };

    function createPopupMenu(graph, menu, cell, evt) {

        if (cell == null) {
            var sub = menu.addItem('Create..', null);
            menu.createSubmenu(sub);
            menu.addItem('Element 1', 'images/actor.gif', function (event) {
                //TODO
                var test = true;
            }, sub);
            menu.addSeparator();
        } else {
            menu.addItem('Show Attributes', null, function (event) {
                 var form = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["p" /* mxForm */]('properties');
                form.addText("Style", cell.getStyle());

               var propertyEditor =  new __WEBPACK_IMPORTED_MODULE_1__PropertyEditor_js__["a" /* default */](cell);
               propertyEditor.createPropertyEditor(form);
            });
            menu.addSeparator();
        }
        menu.addItem('Undo', 'images/toolbox/undo.gif', function () {
            editor.execute("shared_undo");
        });
        menu.addItem('Redo', 'images/toolbox/redo.gif', function () {
            editor.execute("shared_redo");
        });
        menu.addSeparator();
        if (cell == null) {

            menu.addItem('Show Console', 'images/toolbox/console.gif', function () {
                editor.execute("toggleConsole");
            });
        } else {
            //TODO copy & paste for context menu needs rework
            /*menu.addItem('Copy', 'images/toolbox/copy.gif', function () {
                editor.execute("copy");
            });
            menu.addItem('Paste', 'images/toolbox/paste.gif', function () {
                editor.execute("shared_paste");
            });*/
            menu.addItem('Group', 'images/toolbox/group.gif', function () {
                editor.execute("shared_group");
            });
            menu.addItem('Ungroup', 'images/toolbox/ungroup.gif', function () {
                editor.execute("shared_ungroup");
            });
            menu.addSeparator();
            menu.addItem('Delete Cell', 'images/toolbox/delete2.png', function () {
                editor.execute("shared_delete");
            });
        }
    };
    return this;
};
/* harmony default export */ __webpack_exports__["a"] = (ContextMenu);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mxExport_js__ = __webpack_require__(3);

KeyHandler.prototype = new __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["r" /* mxDefaultKeyHandler */]();
KeyHandler.prototype.constructor = KeyHandler;

/**
 * The KeyHandler for the Wireframing Editor
 * For key codes see:
 * https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
 * @param {mxGraph} graph 
 */
function KeyHandler(editor){
    __WEBPACK_IMPORTED_MODULE_0__mxExport_js__["r" /* mxDefaultKeyHandler */].call(this, editor);

    //delete-key
    this.bindAction(46, 'shared_delete');
    
    //CTRL+G for shared grouping
    this.bindAction(71, 'shared_group', 17);

    //CTRL+H for shared ungrouping
    this.bindAction(72, 'shared_ungroup', 17);

    //CTRL+Z for shared Undo
    this.bindAction(90, 'shared_undo', 17);

    //CTRL+Y for shared Redo
    this.bindAction(89, 'shared_redo', 17);

    //CTRL+C for copy
    this.bindAction(67, 'copy', 17);

    //CTRL+V for shared paste
    this.bindAction(86, 'shared_paste', 17);

    return this;
}
/* harmony default export */ __webpack_exports__["a"] = (KeyHandler);

/***/ })

},[101]);
//# sourceMappingURL=app.map