/*global y*/
import { mxWindow, mxForm } from './misc/mxExport.js';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/tabs';

/**
 * Generates the property editor for the given cell
 * @param {mxCell} cell 
 */
function PropertyEditor(cell) {

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
                if ($input.attr('type') === 'checkbox')
                    value = $input.prop('checked');
                else
                    value = $input.val();
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
            if ($input.attr('type') === 'text') {
                var ytext = y.share.attrs.get(id + '_' + name);
                if (ytext)
                    ytext.bind($input[0]);
                //else //should actually not happen but add something to mxLog if ytext does not exists for whatever reason
            }
        });
    };

    var htmlEditorTemplate = '<div id="propertyEditor_' + cell.getId() + '"><ul><li><a href="#attributesTab">Attributes</a></li><li><a href="#tagsTab">Interactivity</a></li></ul><div id="attributesTab"></div><div id="tagsTab"></div>';

    var form = new mxForm('attributes');
    var attrs = cell.value.attributes;
    var attr;
    for (var i = 0; i < attrs.length; i++) {
        attr = attrs[i];
        if (attr.name === 'label' || attr.name === 'uiType') continue; //skip the label and the ui-type
        if (attr.value.indexOf('true') != -1 || attr.value.indexOf('false') != -1)//a boolean value
            form.addCheckbox(attr.name, attr.value.indexOf('true') != -1 ? true : false);
        else form.addText(attr.name, attr.value);
    }

    var $htmlTagEditor = $('#propertyEditor_' + cell.getId());
    if ($htmlTagEditor.length == 0) {
        var $htmlTagEditor = $($.parseHTML(htmlEditorTemplate)[0]);

        $htmlTagEditor.tabs();
        $htmlTagEditor.find('#attributesTab').append(form.body);
        var propertyEditorWnd = new mxWindow("Properties", $htmlTagEditor[0], '300', '200', '100%', '40%', true, true);
        propertyEditorWnd.setVisible(true);
        propertyEditorWnd.setMaximizable(false);
        propertyEditorWnd.setResizable(false);
        propertyEditorWnd.setClosable(true);

        //Adds Ok and Cancel Button to the form
        form.addButtons(
            function () {
                //function for the ok button
                var data = serializeForm(form);
                cell.setValueFromJson(data);
                propertyEditorWnd.destroy();
            },
            function () {
                //function for the cancel button
                propertyEditorWnd.destroy();
            });
        bindSharedAttributes(cell);
    }
}
export default PropertyEditor;