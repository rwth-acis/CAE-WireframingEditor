import {mxDefaultKeyHandler} from './mxExport.js';
KeyHandler.prototype = new mxDefaultKeyHandler();
KeyHandler.prototype.constructor = KeyHandler;

/**
 * The KeyHandler for the Wireframing Editor
 * For key codes see:
 * https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
 * @param {mxGraph} graph 
 */
function KeyHandler(editor){
    mxDefaultKeyHandler.call(this, editor);

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
export default KeyHandler;