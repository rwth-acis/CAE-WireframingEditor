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
 * @param {Wireframe} wireframe
 * @param {Integer} x
 * @param {Integer} y
 */
function PropertyEditor(cell, graph, x, y) {   
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
        var propertyEditorWnd = new mxWindow("Properties", $htmlEditor[0], x, y, '100%', '40%', true, true);
        propertyEditorWnd.setVisible(true);
        propertyEditorWnd.setMaximizable(false);
        propertyEditorWnd.setResizable(false);
        propertyEditorWnd.setClosable(true);

        Util.bindSharedAttributes(cell, form);

        createTagEditor(cell, $htmlEditor, graph);
       
        $htmlEditor.tabs();
    }
}
export default PropertyEditor;