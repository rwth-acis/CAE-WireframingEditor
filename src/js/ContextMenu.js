/*global y*/
import PropertyEditor from './PropertyEditor.js';
import CONST from './misc/Constants.js';

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
            menu.addItem('Edit Attributes', CONST.IMAGES.FLASH, function (event) {
                new PropertyEditor(null, editor.graph, event.x, event.y);
            });
            menu.addSeparator();
            var sub = menu.addItem('Create..', CONST.IMAGES.ADD);
            menu.createSubmenu(sub);
            var UIComponents = editor.getUIComponents();
            for (var name in UIComponents) {
                menu.addItem(name, null, function (event) {
                    var cell = new UIComponents[event.target.innerHTML]();
                    cell.funct(editor.graph, event);
                }, sub);
            }
            menu.addSeparator();

        } else {
            menu.addItem('Edit Attributes', CONST.IMAGES.FLASH, function (event) {
                new PropertyEditor(cell, editor.graph, event.x, event.y);
            });
            menu.addSeparator();
        }
        menu.addItem('Undo', CONST.IMAGES.UNDO, function () {
            editor.execute(CONST.ACTIONS.SHARED.UNDO);
        });
        menu.addItem('Redo', CONST.IMAGES.REDO, function () {
            editor.execute(CONST.ACTIONS.SHARED.REDO);
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
            menu.addItem('Group', CONST.IMAGES.GROUP, function () {
                editor.execute(CONST.ACTIONS.SHARED.GROUP);
            });
            menu.addItem('Ungroup', CONST.IMAGES.UNGROUP, function () {
                editor.execute(CONST.ACTIONS.SHARED.UNGROUP);
            });
            menu.addSeparator();
            menu.addItem('Delete Cell', CONST.IMAGES.DELETE, function () {
                editor.execute(CONST.ACTIONS.SHARED.DELETE);
            });

        }
        menu.addItem('Apply Layout', null, function(){
            y.share.action.set(CONST.ACTIONS.SHARED.APPLY_LAYOUT, {userId: y.db.userId, cellId : cell ? cell.getId(): null});
        });
    };
};
export default ContextMenu;