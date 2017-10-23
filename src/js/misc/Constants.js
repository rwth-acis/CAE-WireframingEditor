var widgetMode = false;
var basePath = '<%=basePath%>';

/**
 * @module Misc
 */

/**
 * Defines the constants for actions, paths to images and other properties of the wireframing editor
 */
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
        SYNCMETA: 'images/syncmeta.png',
        YOUTUBE: 'images/youtube.png',
        POLYMER: 'images/polymer.png',
        TABLE_IMG: 'images/table.png',
        UL_IMG : 'images/ul.png',
        OL_IMG : 'images/ol.png',
        DL_IMG : 'images/dl.png',
        HTML5CANVAS: 'images/html5canvas.png',
        SVG : 'images/svg.png',
        DYNAMIC: 'images/tags/dynamic.png'
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
export default constants;