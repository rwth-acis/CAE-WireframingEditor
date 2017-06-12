//ContextMenu.prototype = new mxDefaultPopupMenu();
import PropertyEditor from './PropertyEditor.js';
import CONST from './misc/Constants.js';
import Util from './misc/Util.js';

function ContextMenu(editor) {
    // mxDefaultPopupMenu.call(this);

    editor.graph.popupMenuHandler.factoryMethod = function (menu, cell, evt) {
        return createPopupMenu(null, menu, cell, evt);
    };

    function createPopupMenu(graph, menu, cell /*, evt*/ ) {

        if (cell == null) {
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
            menu.addItem('Show Attributes', CONST.IMAGES.FLASH, function ( /*event*/ ) {
                new PropertyEditor(cell);
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
           /* menu.addItem('Show Console', CONST.IMAGES.CONSOLE, function () {
                editor.execute(CONST.ACTIONS.CONSOLE);
            });*/
            menu.addItem('Save', null, function(){
                Util.Save(editor.graph);
            });
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
    };
    return this;
};
export default ContextMenu;