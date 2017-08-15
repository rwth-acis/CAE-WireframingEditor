/*global y*/
import {
    mxWindow,
    mxEvent
} from './misc/mxExport.js';
import $ from 'jquery';
import '../../node_modules/jstree/dist/jstree.min.js';

/**
 * @classdesc the hierachy tree visualize the hierachical structure of the ui elements in the wireframing editor and allows to edit the hierachy structure
 * @constructor
 * @requires jQuery
 * @requires jsTree
 */
function HierachyTree() {
    /**
     * The html dom element as string
     * @member {String}
     */
    var htmlTree = '<div id="hierachyTree"></div>';
    
    /**
     * the mxWindows-instance that contains the hierachy tree in the DOM
     * @member {mxWindow}
     */
    var wnd;

    /**
     * The jsTree that handles and visualize the hierachy tree
     * @member {jsTree}
     */
    var $tree = $($.parseHTML(htmlTree)).jstree({
        core: {
            multiple: false,
            check_callback: true,
            themes: {
                stripes: true,
                ellipsis: true,
                icons: false,
                dots: true
            }
        },
        contextmenu: {
            items: {
                up: {
                    label: 'Up',
                    title: 'Move the element Up in the hierachy',
                    separator_after: true,
                    action: function (event) {
                        y.share.action.set('upIndex', event.reference.prevObject.attr('id'));
                    }
                },
                down: {
                    label: 'Down',
                    title: 'Move the element down in the hierachy',
                    action: function (event) {
                        y.share.action.set('downIndex', event.reference.prevObject.attr('id'));
                    }
                }
            }
        },
        plugins: ["contextmenu"]
    });

    var addRecursive = function (parent) {
        if (!parent.children) return false;
        for (var i = 0; i < parent.children.length; i++) {
            var cell = parent.children[i];
            $tree.jstree(true).create_node(cell.parent.id === '1' ? '#' : cell.parent.id, {
                id: cell.id,
                text: cell.constructor.NAME,
                state: {
                    selected: false
                },
                pos: cell.parent.getIndex(cell)
            });
            addRecursive(cell);
        }
    };
    return {
        /**
         * Initialize the hierachy tree in a seperate mxWindow-instance
         * @param {mxEditor} editor the wireframing editor instance
         * @return {undefined}
         * @memberof HierachyTree
         */
        init: function (editor) {
            function buildTree(parent) {
                if (!parent.children) return;
                for (var i = 0; i < parent.children.length; i++) {
                    var cell = parent.children[i];
                    $tree.jstree(true).create_node(cell.parent.id === '1' ? null : cell.parent.id, {
                        id: cell.id,
                        text: cell.constructor.NAME,
                        state: {
                            selected: false,
                            opened: true
                        }
                    });
                    buildTree(cell);
                }
            }
            buildTree(editor.graph.getDefaultParent());
            $tree.jstree(true).open_all();
            document.body.appendChild($tree[0]);

            y.share.action.observe(function (event) {
                switch (event.name) {
                    case 'upIndex': {
                        var cell = editor.graph.model.getCell(event.value);
                        var index = cell.parent.getIndex(cell);
                        if (index > 0) {
                            index--;
                            cell.parent.insert(cell, index);
                            $tree.jstree(true).move_node(cell.id, cell.parent.id === '1' ? '#' : cell.parent.id, index);
                        }
                        break;
                    }
                    case 'downIndex': {
                        var cell = editor.graph.model.getCell(event.value);
                        var index = cell.parent.getIndex(cell);
                        if (index < cell.parent.children.length - 1) {
                            index++;
                            cell.parent.insert(cell, index);
                            $tree.jstree(true).move_node(cell.id, cell.parent.id === '1' ? '#' : cell.parent.id, index + 1);
                        }
                        break;
                    }
                }
            });

            var undoCallback = function (edit, event) {
                var edit = event.getProperty('edit');
                for (var i = 0; i < edit.changes.length; i++) {
                    var change = edit.changes[i];
                    if (change.constructor.name === 'mxRootChange') {
                        //TODO
                    }
                    else if (change.constructor.name === 'mxChildChange') {
                        if (!change.previous) {
                            $tree.jstree(true).create_node(change.child.parent.id === '1' ? '#' : change.child.parent.id, {
                                id: change.child.id,
                                text: change.child.constructor.NAME,
                                state: {
                                    selected: false,
                                    opened: true
                                },
                                pos: change.child.parent.getIndex(change.child)
                            });
                            addRecursive(change.child);
                        } else
                            $tree.jstree(true).delete_node(change.child.id);
                    }
                }
            };
            editor.undoManager.addListener(mxEvent.UNDO, undoCallback);
            editor.undoManager.addListener(mxEvent.REDO, undoCallback);

            wnd = new mxWindow('Hierachy', $tree[0], 300, 200, '100%', '40%', true, true);
            wnd.destroyOnClose = false;
            wnd.setVisible(false);
            wnd.setMaximizable(false);
            wnd.setResizable(false);
            wnd.setClosable(true);
        },
        /**
         * Show the mxWindow that displays the hierachy tree
         * @return {undefined}
         * @memberof HierachyTree
         */
        show: function () {
            wnd.setVisible(true);
        },
        /**
         * Hide the mxWindow that displays the hierachy tree
         * @return {undefined}
         * @memberof HierachyTree
         */
        hide: function () {
            wnd.setVisible(false);
        },
        /**
         * Check if the mxWindow-instance that displays the hierachy tree is visible
         * @return {Boolean} true if the mxWindow is visible else false
         * @memberof HierachyTree
         */
        isVisible: function () {
            return wnd.isVisible();
        },
        /**
         * Add a ui element to the hierachy tree
         * @param {UIObject} cell the ui element to add to the hierachy tree
         * @return {undefined}
         * @memberof HierachyTree
         */
        add: function (cell) {
            $tree.jstree(true).create_node(cell.parent.id === '1' ? '#' : cell.parent.id, {
                id: cell.id,
                text: cell.constructor.NAME,
                state: {
                    selected: false,
                    opened: true
                },
                pos: cell.parent.getIndex(cell)
            });
        },
        /**
         * Remove a set of cells from the hierachy tree
         * @param {String[]} cells an array of strings containing the id of the cells to remove
         * @return {undefined}
         * @memberof HierachyTree
         */
        remove: function (cells) {
            $tree.jstree(true).delete_node(cells);
        },
        /**
         * Move a entry in the hierachy tree
         * @param {UIObject} cell the cell to move
         * @param {UIObject} parent the new parent of the cell
         * @param {Integer} position the new position of the cell
         * @return {undefined}
         * @memberof HierachyTree
         */
        move: function (cell, parent, position) {
            $tree.jstree(true).move_node(cell, parent === '1' ? '#' : parent, position);
        },
        /**
         * Group a set of cells
         * The functions creates the parent of the all elements in the cells array 
         * and moves the cells to the new parent
         * @param {UIObject} group the new parent
         * @param {UIOObject[]} cells the children of the group 
         * @return {undefined}
         * @memberof HierachyTree
         */
        group: function (group, cells) {
            $tree.jstree(true).create_node(group.parent.id === '1' ? '#' : group.parent.id, {
                id: group.id,
                text: group.constructor.NAME,
                state: {
                    selected: false,
                    opened: true
                },
                pos: group.parent.getIndex(group)
            });
            for (var i = 0; i < cells.length; i++) {
                var cell = cells[i];
                $tree.jstree(true).move_node(cell.id, group.id, group.getIndex(cell));

            }
        },
        /**
         * Ungroup the cells from their parent
         * The function recursively adds the children of the deleted parent to the hierachy tree
         * @param {UIObject[]} cells the child cells which were ungrouped
         * @return {undefined}
         * @memberof HierachyTree
         */
        ungroup: function (cells) {
            var helperFnc = function(cell){
                $tree.jstree(true).create_node(cell.parent.id === '1' ? '#' : cell.parent.id, {
                    id: cell.id,
                    text: cell.constructor.NAME,
                    state: {
                        selected: false,
                        opened: true
                    },
                    pos: cell.parent.getIndex(cell)
                });
                if(cell.children){
                    for(var i=0;i<cell.children.length;i++){
                        helperFnc(cell.children[i]);
                    }
                }
            
            }
            for (var i = 0; i < cells.length; i++) {
                helperFnc(cells[i]);
            }
        }
    }
}
export default new HierachyTree();