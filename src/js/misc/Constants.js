var constants = {
    ACTIONS: {
        SHARED: {
            DELETE: 'shared_delete',
            GROUP: 'shared_group',
            UNGROUP: 'shared_ungroup',
            UNDO: 'shared_undo',
            REDO: 'shared_redo',
            PASTE: 'shared_paste',
            GRAPH_RESIZE: 'graphResize'
        },
        COPY: 'copy',
        PASTE: 'paste',
        CONSOLE: 'toggleConsole',
        EXPORT : 'export', 
        IMPORT : 'import'
    },
    IMAGES: {
        COPY: 'images/toolbox/copy.png',
        PASTE: 'images/toolbox/paste.png',
        DELETE: 'images/toolbox/delete.png',
        UNDO: 'images/toolbox/undo2.png',
        REDO: 'images/toolbox/redo2.png',
        GROUP: 'images/toolbox/group.png',
        UNGROUP: 'images/toolbox/ungroup.png',
        CONSOLE: 'images/toolbox/console.png',
        ADD: 'images/toolbox/add.png',
        FLASH: 'images/toolbox/flash.png',
        IMPORT : 'images/toolbox/import.png',
        EXPORT : 'images/toolbox/export.png',
        YJS: 'images/tags/yjs.png',
        MICROSERVICECALL: 'images/tags/las2peer-logo-circle.png',
        EVENT_TAG: 'images/tags/event.png',
        FUNC_TAG: 'images/tags/func.png',
        IWC_REQ_TAG: 'images/tags/IWCRequest.png',
        IWC_RESP_TAG: 'images/tags/IWCResponse.png'
    },
    TAG: {
        SIZE: 20,
        ALIAS: {
            EVENT: 'Event',
            MICRO_CALL: 'Mircoservice Call',
            FUNC: 'Function',
            IWC_CALL: 'IWC Call',
            IWC_RESP: 'IWC Response',
            SHARED: 'Share'
        },
    }
};

var T = constants.TAG.ALIAS;
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
}
export default constants;