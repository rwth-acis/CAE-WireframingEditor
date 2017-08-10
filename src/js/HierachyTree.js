/*global y*/
import {
    mxWindow,
} from './misc/mxExport.js';
import $ from 'jquery';
import '../../node_modules/jstree/dist/jstree.min.js';

function HierachyTree() {
    var htmlTree = '<div id="hierachyTree"></div>';
    var wnd;
    var $tree = $($.parseHTML(htmlTree)).jstree({
        core: {
            check_callback: true,
            themes: {
                stripes: true,
                ellipsis: true,
                dots: true
            }
        },
        contextmenu: {
            items: {
                up: {
                    label: 'Up',
                    title: 'Move the element Up in the hierachy',
                    separator_after: true,
                    action : function(event){
                        y.share.action.set('upIndex', event.reference.prevObject.attr('id'));
                    }
                },
                down: {
                    label: 'Down',
                    title: 'Move the element down in the hierachy',
                    action : function(event){
                        y.share.action.set('downIndex', event.reference.prevObject.attr('id'));
                    }
                }
            }
        },
        plugins: ["types", "wholerow", "contextmenu"]
    });
    return {
        init: function (graph) {
            function buildTree(parent) {
                if (!parent.children) return;
                for (var i = 0; i < parent.children.length; i++) {
                    var cell = parent.children[i];
                    $tree.jstree(true).create_node(cell.parent.id === '1' ? null : cell.parent.id, {
                        id: cell.id,
                        text: cell.constructor.NAME,
                        state: {
                            selected: false
                        }
                    });
                    buildTree(cell);
                }
            }
            buildTree(graph.getDefaultParent());
            $tree.jstree(true).open_all();
            document.body.appendChild($tree[0]);

            y.share.action.observe(function(event){
                switch(event.name){
                    case 'upIndex':{
                        var cell = graph.model.getCell(event.value);
                        var index = cell.parent.getIndex(cell);
                        if(index > 0){
                            index--;
                            cell.parent.insert(cell, index);
                            $tree.jstree(true).move_node(cell.id, cell.parent.id === '1' ? '#' : cell.parent.id, index);
                        }
                        break;
                    }
                    case 'downIndex': {
                        var cell = graph.model.getCell(event.value);
                        var index = cell.parent.getIndex(cell);
                        if(index < cell.parent.children.length-1){
                            index++;
                            cell.parent.insert(cell, index);
                            $tree.jstree(true).move_node(cell.id, cell.parent.id === '1' ? '#' : cell.parent.id, index+1);
                        }
                        break;
                    }
                }
            });
            wnd = new mxWindow('Hierachy', $tree[0], 300, 200, '100%', '40%', true, true);
            wnd.destroyOnClose = false;
            wnd.setVisible(false);
            wnd.setMaximizable(false);
            wnd.setResizable(false);
            wnd.setClosable(true);
        },
        show: function () {
            wnd.setVisible(true);
        },
        hide: function () {
            wnd.setVisible(false);
        },
        isVisible: function () {
            return wnd.isVisible();
        },
        add: function (cell) {
            $tree.jstree(true).create_node(cell.parent.id === '1' ? '#' : cell.parent.id, {
                id: cell.id,
                text: cell.constructor.NAME,
                state: {
                    selected: false
                },
                pos: cell.parent.getIndex(cell)
            });
        },
        remove : function(cells){
            $tree.jstree(true).delete_node(cells);
        },
        move : function(cell, parent, position){
            $tree.jstree(true).move_node(cell, parent === '1' ? '#' : parent, position);

        }
    }
}
export default new HierachyTree();