//ContextMenu.prototype = new mxDefaultPopupMenu();
//ContextMenu.prototype.constructor = ContextMenu;
import {mxForm} from './mxExport.js';
import PropertyEditor from './PropertyEditor.js';

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
                 var form = new mxForm('properties');
                form.addText("Style", cell.getStyle());

               var propertyEditor =  new PropertyEditor(cell);
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
export default ContextMenu;