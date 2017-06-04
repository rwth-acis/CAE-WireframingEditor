import {mxWindow} from './misc/mxExport.js';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/tabs';

/**
 * Generates the property editor for the given cell
 * @param {mxCell} cell 
 */
function PropertyEditor(cell) {
    var htmlEditorTemplate = '<div id="propertyEditor_' + cell.getId() + '"><ul><li><a href="#attributesTab">Attributes</a></li><li><a href="#tagsTab">Tags</a></li></ul><div id="attributesTab"></div><div id="tagsTab"></div>';

    this.getCell = function(){
        return cell;
    }

    this.createPropertyEditor = function (form) {
        var $htmlTagEditor = $('#propertyEditor_' + cell.getId());
        if ($htmlTagEditor.length == 0) {
            var $htmlTagEditor = $($.parseHTML(htmlEditorTemplate)[0]);

            $htmlTagEditor.tabs();
            $htmlTagEditor.find('#attributesTab').append(form.body);
            var propertyEditorWnd = new mxWindow("Properties", $htmlTagEditor[0], '70', '700', '100%', '40%', true, true);
            propertyEditorWnd.setVisible(true);
            propertyEditorWnd.setMaximizable(false);
            propertyEditorWnd.setResizable(false);
            propertyEditorWnd.setClosable(true);
        }
    }
}
export default PropertyEditor;