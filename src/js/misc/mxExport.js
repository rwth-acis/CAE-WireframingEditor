import mxGraphLib from "../../../node_modules/mxgraph/javascript/dist/build";
//require('../../node_modules/mxgraph/javascript/src/css/common.css');
var mxLib = mxGraphLib({
        mxImageBasePath: "images",
        mxBasePath: ".",
        mxLoadStylesheets : false
    })
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
var mxText = mxLib.mxText;
export {
    mxClient, mxEditor, mxGraph, mxGraphModel, mxCell, mxCodec, mxCodecRegistry,  mxEvent, mxGraphHandler, mxConstants,
    mxKeyHandler, mxRubberband, mxUtils, mxRectangle, mxToolbar, mxStencil, mxStencilRegistry, mxWindow, mxShape, mxStylesheet,
    mxGeometry, mxDefaultKeyHandler, mxForm, mxDefaultToolbar, mxLog, mxClipboard, mxCellRenderer, mxText
};