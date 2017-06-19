import $ from 'jquery';
import '../../node_modules/jstree/dist/jstree.min.js';
import CONST from './misc/Constants.js';
import { mxPoint, mxForm } from './misc/mxExport.js';
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
        var $button = $('<button>').text('Create');
        $button.click(function () {
            var val = $tagEditor.find('td:contains("Tag") + td select option:selected').text();
            var tag = new tagAliasMap[val](new mxPoint(-CONST.TAG.SIZE * cell.tagCounter, 0));
            graph.addCellOverlay(cell, tag);
            var ref = $('#' + cell.getId() + '_tagTree').jstree(true),
                sel = ref.get_selected();
            sel = sel[0];
            sel = ref.create_node(sel ? sel : null, { id: tag.tagObj.getAttribute('_id'), type: val, text: val, state :{selected : false} });
            if (sel) ref.edit(sel);
        });
        var types = {};
        types[CONST.TAG.ALIAS.EVENT] = { icon: "./" + CONST.IMAGES.EVENT_TAG };
        types[CONST.TAG.ALIAS.MICRO_CALL] = { icon: "./" + CONST.IMAGES.MICROSERVICECALL };
        types[CONST.TAG.ALIAS.FUNC] = { icon: "./" + CONST.IMAGES.FUNC_TAG };
        types[CONST.TAG.ALIAS.IWC_CALL] = { icon: "./" + CONST.IMAGES.IWC_REQ_TAG };
        types[CONST.TAG.ALIAS.IWC_RESP] = { icon: "./" + CONST.IMAGES.IWC_RESP_TAG };
        types[CONST.TAG.ALIAS.SHARED] = { icon: "./" + CONST.IMAGES.YJS };

        var $tree = $($.parseHTML(htmlTagTree)).jstree({
            core: {
                check_callback: true,
                themes: { stripes: true, ellipsis: true }
            },
            types: types,
            plugins: ["dnd", "types", "wholerow"]
        });
        $tree.on('select_node.jstree', function (node, sel) {

            //var $tagAttrs = $('#' + cell.getId() + '_tagAttribute');
            $('.tagAttribute').remove();
            //if ($tagAttrs.length == 0) {
                var overlays = cell.overlays;
                var tagId = sel.selected[0];
                for (var i = 0; i < overlays.length; i++) {
                    if (overlays[i].tagObj.getAttribute('_id') === tagId) {
                        var form = Util.createFormFromCellAttributes('tagAttribute', overlays[i].tagObj, overlays[i]);
                        var $tagAttrs = $('<div>').attr('id', cell.getId() + '_tagAttribute').addClass('tagAttribute').append(form.body);
                        $tagEditor.append($tagAttrs);
                        break;
                    }
                }
            //}
        });
        $tagEditor.append($('<div>').append($(tagForm.body).append($button))).append($tree);

    }
}

export default createTagEditor;