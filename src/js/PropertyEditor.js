/*global y*/
import {
    mxWindow
} from './misc/mxExport.js';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/tabs';
import createTagEditor from './createTagEditor.js';
import Util from './misc/Util.js';

/**
 * Generates the property editor for the given cell
 * @param {mxCell} cell 
 */
function PropertyEditor(cell, graph) {
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

    var $htmlEditor = $('#propertyEditor_' + cell.getId());
    if ($htmlEditor.length == 0) {
        var $htmlEditor = $($.parseHTML(htmlEditorTemplate)[0]);

        //Add the templates
        var htmlAttributeTab = '<li><a href="#attributesTab">Attributes</a></li>';
        var htmlAttributeTabContent = '<div id="attributesTab"></div>';
        $htmlEditor.find('ul').append($.parseHTML(htmlAttributeTab));
        $htmlEditor.append($.parseHTML(htmlAttributeTabContent));

        var form = Util.createFormFromCellAttributes('attributes', cell.value, cell);
        
        var $attrsForm = $htmlEditor.find('#attributesTab');
        $attrsForm.append(form.body);
        $(form.body).append($('<button>').click(function () {
            var data = serializeForm(form);
            cell.setValueFromJson(data);
            propertyEditorWnd.destroy();
        }).text('Ok'));
        var propertyEditorWnd = new mxWindow("Properties", $htmlEditor[0], '300', '200', '100%', '40%', true, true);
        propertyEditorWnd.setVisible(true);
        propertyEditorWnd.setMaximizable(false);
        propertyEditorWnd.setResizable(false);
        propertyEditorWnd.setClosable(false);

        bindSharedAttributes(cell);

        createTagEditor(cell, $htmlEditor, graph);
       
        $htmlEditor.tabs();
    }
}
export default PropertyEditor;