/*global y*/
import {
    mxWindow,
    mxForm,
    mxPoint
} from './misc/mxExport.js';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/tabs';
import CONST from './misc/Constants.js';

import SharedTag from './tags/SharedTag.js';
import MicroserviceCallTag from './tags/MicroserviceCallTag.js';
import EventTag from './tags/EventTag.js';
import FunctionTag from './tags/FunctionTag.js';
import IWCReqTag from './tags/IWCReqTag.js';
import IWCRespTag from './tags/IWCRespTag.js';
/**
 * Generates the property editor for the given cell
 * @param {mxCell} cell 
 */
function PropertyEditor(cell, graph) {

    var tagAliasMap = {};
    tagAliasMap[CONST.TAG.ALIAS.EVENT] = EventTag;
    tagAliasMap[CONST.TAG.ALIAS.MICRO_CALL] = MicroserviceCallTag;
    tagAliasMap[CONST.TAG.ALIAS.SHARED] = SharedTag;
    tagAliasMap[CONST.TAG.ALIAS.FUNC] = FunctionTag;
    tagAliasMap[CONST.TAG.ALIAS.IWC_CALL] = IWCReqTag;
    tagAliasMap[CONST.TAG.ALIAS.IWC_RESP] = IWCRespTag;

    /**
     * Serialize the data of the given form as json
     * @param {mxForm} form 
     * @return the data as json
     */
    var serializeForm = function (form) {
        var obj = {};
        $(form.body).find('tr').map(function (i, elem) {
            var name = $(elem).find('td:first').text();
            if (name.length > 0) {
                var value;
                var $input = $(elem).find('input');
                if ($input.length > 0) {
                    if ($input.attr('type') === 'checkbox')
                        value = $input.prop('checked');
                    else
                        value = $input.val();
                } else {
                    value = $(elem).find(':selected').text();
                }
                obj[name] = value;
            }
        });
        return obj;
    }
    /**
     * Binds the shared attributes
     * @param {mxCell} cell 
     */
    var bindSharedAttributes = function (cell) {
        var id = cell.getId();
        $(form.body).find('tr').map(function (i, elem) {
            var name = $(elem).find('td:first').text();
            var $input = $(elem).find('input');
            if ($input.length > 0) {
                if ($input.attr('type') === 'text') {
                    var ytext = y.share.attrs.get(id + '_' + name);
                    if (ytext)
                        ytext.bind($input[0]);
                    //else //should actually not happen but add something to mxLog if ytext does not exists for whatever reason
                } else if ($input.attr('type') === 'checkbox') {
                    $input.change(function () {
                        y.share.attrs.set(id + '_' + name, this.checked);
                    });
                }
            } else {
                $(elem).find('select').change(function () {
                    //var optionSelected = $("option:selected", this);
                    y.share.attrs.set(id + '_' + name, this.value);
                });
            }
        });
    };

    var htmlEditorTemplate = '<div id="propertyEditor_' + cell.getId() + '"><ul></ul>';

    var $htmlTagEditor = $('#propertyEditor_' + cell.getId());
    if ($htmlTagEditor.length == 0) {
        var $htmlTagEditor = $($.parseHTML(htmlEditorTemplate)[0]);

        //Add the templates
        var htmlAttributeTab = '<li><a href="#attributesTab">Attributes</a></li>';
        var htmlAttributeTabContent = '<div id="attributesTab"></div>';
        $htmlTagEditor.find('ul').append($.parseHTML(htmlAttributeTab));
        $htmlTagEditor.append($.parseHTML(htmlAttributeTabContent));

        var form = new mxForm('attributes');
        var attrs = cell.value.attributes;
        var attr;
        for (var i = 0; i < attrs.length; i++) {
            attr = attrs[i];
            if (attr.name === 'label' || attr.name === 'uiType') continue; //skip the label and the ui-type
            if (attr.value.indexOf('true') != -1 || attr.value.indexOf('false') != -1) //a boolean value
                form.addCheckbox(attr.name, attr.value.indexOf('true') != -1 ? true : false);
            else {
                var values = cell.getComboAttr(attr.name);
                if (values) {
                    var combo = form.addCombo(attr.name);
                    for (var j = 0; j < values.length; j++) {
                        form.addOption(combo, values[j], values[j], attr.value === values[j]);
                    }
                } else
                    form.addText(attr.name, attr.value);
            }
        }

        var $attrsForm = $htmlTagEditor.find('#attributesTab');
        $attrsForm.append(form.body);
        $(form.body).append($('<button>').click(function () {
            var data = serializeForm(form);
            cell.setValueFromJson(data);
            propertyEditorWnd.destroy();
        }).text('Ok'));
        var propertyEditorWnd = new mxWindow("Properties", $htmlTagEditor[0], '300', '200', '100%', '40%', true, true);
        propertyEditorWnd.setVisible(true);
        propertyEditorWnd.setMaximizable(false);
        propertyEditorWnd.setResizable(false);
        propertyEditorWnd.setClosable(false);

        bindSharedAttributes(cell);

        var supportedTags = CONST.TAG.MAPPING[cell.constructor.name];
        if (supportedTags && supportedTags.length > 0) {
            //Initialize the tag editor here
            var htmlTagTab = '<li><a href="#tagsTab">Interactivity</a></li>';
            var htmlTagTabContent = '<div id="tagsTab"></div>';
            $htmlTagEditor.find('ul').append($.parseHTML(htmlTagTab));
            $htmlTagEditor.append($.parseHTML(htmlTagTabContent));

            var $tagEditor = $htmlTagEditor.find('#tagsTab');
            var tagForm = new mxForm('tagForm');
            var combo = tagForm.addCombo('Tag');
            for (var i = 0; i < supportedTags.length; i++) {
                tagForm.addOption(combo, supportedTags[i], supportedTags[i]);
            }
            var $button = $('<button>').text('Add');
            $button.click(function () {
                var val = $tagEditor.find('td:contains("Tag") + td select option:selected').text();
                graph.addCellOverlay(cell, new tagAliasMap[val](new mxPoint(-CONST.TAG.SIZE * cell.tagCounter, 0)));

            });
            $tagEditor.append($(tagForm.body).append($button));
        }
        $htmlTagEditor.tabs();
    }
}
export default PropertyEditor;