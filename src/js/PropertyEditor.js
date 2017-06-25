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
    
    var htmlEditorTemplate = '<div id="propertyEditor_' + cell.getId() + '"><ul></ul>';

    //Check if property editor already exists
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
            Util.Save(graph);
        }).text('Ok'));
        var propertyEditorWnd = new mxWindow("Properties", $htmlEditor[0], '300', '200', '100%', '40%', true, true);
        propertyEditorWnd.setVisible(true);
        propertyEditorWnd.setMaximizable(false);
        propertyEditorWnd.setResizable(false);
        propertyEditorWnd.setClosable(false);

        Util.bindSharedAttributes(cell, form);

        createTagEditor(cell, $htmlEditor, graph);
       
        $htmlEditor.tabs();
    }
}
export default PropertyEditor;