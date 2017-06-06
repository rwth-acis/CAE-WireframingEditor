//ContextMenu.prototype = new mxDefaultPopupMenu();
//ContextMenu.prototype.constructor = ContextMenu;
import {mxForm} from './misc/mxExport.js';
import PropertyEditor from './PropertyEditor.js';
import CONST from './misc/Constants.js';

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
                 var form = new mxForm('properties');
                form.addText("Style", cell.getStyle());

               var propertyEditor =  new PropertyEditor(cell);
               propertyEditor.createPropertyEditor(form);
            });
            menu.addSeparator();
        }
        menu.addItem('Undo', CONST.IMAGES.UNDO, function () {
            editor.execute(CONST.ACTIONS.SHARED.UNDO);
        });
        menu.addItem('Redo', CONST.IMAGES.REDO, function () {
            editor.execute(CONST.ACTIONS.SHARED.REDO);
        });
        menu.addSeparator();
        if (cell == null) {

            menu.addItem('Show Console', CONST.IMAGES.CONSOLE, function () {
                editor.execute(CONST.ACTIONS.CONSOLE);
            });
        } else {
            //TODO copy & paste for context menu needs rework
            /*menu.addItem('Copy', 'images/toolbox/copy.gif', function () {
                editor.execute("copy");
            });
            menu.addItem('Paste', 'images/toolbox/paste.gif', function () {
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