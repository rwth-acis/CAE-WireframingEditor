/*global y*/
import $ from 'jquery';
import '../../node_modules/jstree/dist/jstree.min.js';
import CONST from './misc/Constants.js';
import {
    mxPoint,
    mxForm
} from './misc/mxExport.js';
import Util from './misc/Util.js';

import SharedTag from './tags/SharedTag.js';
import MicroserviceCallTag from './tags/MicroserviceCallTag.js';
import EventTag from './tags/EventTag.js';
import FunctionTag from './tags/FunctionTag.js';
import IWCReqTag from './tags/IWCReqTag.js';
import IWCRespTag from './tags/IWCRespTag.js';

function createTagEditor(cell, $editor, graph) {

    var tagAliasMap = {};
    tagAliasMap[CONST.TAG.ALIAS.EVENT] = EventTag;
    tagAliasMap[CONST.TAG.ALIAS.MICRO_CALL] = MicroserviceCallTag;
    tagAliasMap[CONST.TAG.ALIAS.SHARED] = SharedTag;
    tagAliasMap[CONST.TAG.ALIAS.FUNC] = FunctionTag;
    tagAliasMap[CONST.TAG.ALIAS.IWC_CALL] = IWCReqTag;
    tagAliasMap[CONST.TAG.ALIAS.IWC_RESP] = IWCRespTag;

    //jstree types
    var types = {};
    types[EventTag.name] = {
        icon: "./" + CONST.IMAGES.EVENT_TAG
    };
    types[MicroserviceCallTag.name] = {
        icon: "./" + CONST.IMAGES.MICROSERVICECALL
    };
    types[FunctionTag.name] = {
        icon: "./" + CONST.IMAGES.FUNC_TAG
    };
    types[IWCReqTag.name] = {
        icon: "./" + CONST.IMAGES.IWC_REQ_TAG
    };
    types[IWCRespTag.name] = {
        icon: "./" + CONST.IMAGES.IWC_RESP_TAG
    };
    types[SharedTag.name] = {
        icon: "./" + CONST.IMAGES.YJS
    };

    var supportedTags = CONST.TAG.MAPPING[cell.constructor.name];
    if (supportedTags && supportedTags.length > 0) {
        //Initialize the tag editor here
        var htmlTagTab = '<li><a href="#tagsTab">Interactivity</a></li>';
        var htmlTagTabContent = '<div id="tagsTab"></div>';
        var htmlTagTree = '<div id="' + cell.getId() + '_tagTree"></div>';
        $editor.find('ul').append($.parseHTML(htmlTagTab));
        $editor.append($.parseHTML(htmlTagTabContent));

        var $tagEditor = $editor.find('#tagsTab');
        var tagForm = new mxForm('tagForm');
        var combo = tagForm.addCombo('Tag');
        for (var i = 0; i < supportedTags.length; i++) {
            tagForm.addOption(combo, supportedTags[i], supportedTags[i]);
        }
        var $createBtn = $('<button>').text('Create');
        $createBtn.click(function () {
            var val = $tagEditor.find('td:contains("Tag") + td select option:selected').text();
            var tag = new tagAliasMap[val](cell, new mxPoint(-CONST.TAG.SIZE * cell.getTagCounter(), 0));
            if (tag.tagObj.getAttribute('isUnique')) {
                if (cell.containsTagType(tag))//Tag type is only allowed once, so dont add it
                    return;
            }
            graph.addCellOverlay(cell, tag);

        });

        var $deleteBtn = $('<button>').addClass('tagDel').css('display', 'none').text('Delete');
        $deleteBtn.click(function () {
            var ref = $('#' + cell.getId() + '_tagTree').jstree(true);
            var sel = ref.get_selected();
            if (sel.length > 0) {
                y.share.action.set(CONST.ACTIONS.DELETE_TAG, { cellId: cell.getId(), selected: sel });
            }
        });

        var $tree = $($.parseHTML(htmlTagTree)).jstree({
            core: {
                check_callback: true,
                themes: {
                    stripes: true,
                    ellipsis: true
                }
            },
            types: types,
            plugins: ["dnd", "types", "wholerow"]
        });

        //initialize existing tags
        if (cell.hasOwnProperty('overlays') && cell.overlays) {
            var overlays = cell.overlays;
            for (var i = 0; i < overlays.length; i++) {
                var tag = overlays[i];
                if (types.hasOwnProperty(tag.constructor.name)) {
                    $tree.jstree(true).create_node(null, {
                        id: tag.tagObj.getAttribute('id'),
                        type: tag.constructor.name,
                        text: tag.constructor.Alias,
                        state: {
                            selected: false
                        }
                    });

                }
            }
        }

        $tree.on('select_node.jstree', function (node, sel) {
            $editor.find('.tagAttribute').parent().remove();
            //if ($tagAttrs.length == 0) {
            var overlays = cell.overlays;
            var tagId = sel.selected[0];
            for (var i = 0; i < overlays.length; i++) {
                if (types.hasOwnProperty(overlays[i].constructor.name) && overlays[i].tagObj.getAttribute('id') === tagId) {
                    var form = Util.createFormFromCellAttributes('tagAttribute', overlays[i].tagObj, overlays[i]);
                    Util.bindSharedAttributes(overlays[i], form);
                    var $tagAttrs = $('<div>').attr('id', cell.getId() + '_tagAttribute').addClass('tagAttribute').append(form.body);
                    $tagEditor.find('tr').eq(2).append($('<td>').append($tagAttrs));
                    break;
                }
            }
            $editor.find('.tagDel').show();
            //}
        });

        $tree.on('move_node.jstree', function (node, event) {
            y.share.action.set(CONST.ACTIONS.MOVE_TAG, {
                userId: y.db.userId,
                node: event.node.id,
                parent: event.parent,
                position: event.position,
                cellId: cell.getId()
            });

        });

        $tree.on('delete_node.jstree', function () {
            $editor.find('.tagDel').hide();
        });

        $tagEditor.append($('<table>')
            .append($('<tr>')
                .append($('<td>').append($(tagForm.body)))
                .append($('<td>').append($createBtn).append($deleteBtn)))
            .append($('<tr>').append($('<td>').append($tree))));
    }
}

export default createTagEditor;