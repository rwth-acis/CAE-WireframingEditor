/**
 * @module WireframeEditor/AttributeEditor
 */
import {
    mxWindow
} from './misc/mxExport.js';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/tabs';
import TagEditor from './TagEditor.js';
import Util from './misc/Util.js';

/**
 * Generates the property editor for the given cell at position (x,y)
 * @param {mxCell} cell the cell 
 * @param {Wireframe} graph the wireframe containing the cell
 * @param {Integer} x the x-coordinate 
 * @param {Integer} y the y-coordinate
 * @return {jQuery} the jquery object of the html editor in the DOM
 */
function PropertyEditor(cell, graph, x, y) {
    var id;
    if (cell)
        id = cell.getId();
    else
        id = 'meta';

    var htmlEditorTemplate = '<div id="propertyEditor_' + id + '"><ul></ul>';

    //Check if property editor already exists
    var $htmlEditor = $('#propertyEditor_' + id);
    if ($htmlEditor.length == 0) {
        var $htmlEditor = $($.parseHTML(htmlEditorTemplate)[0]);

        //Add the templates
        var htmlAttributeTab = '<li><a href="#attributesTab">Attributes</a></li>';
        var htmlAttributeTabContent = '<div id="attributesTab"></div>';
        $htmlEditor.find('ul').append($.parseHTML(htmlAttributeTab));
        $htmlEditor.append($.parseHTML(htmlAttributeTabContent));

        var form = Util.createFormFromCellAttributes('attributes', cell ? cell.value : graph.getModel().getMeta(), cell ? cell : graph.getModel());

        var $attrsForm = $htmlEditor.find('#attributesTab');
        $attrsForm.append(form.body);
        var propertyEditorWnd = new mxWindow((cell ? cell.constructor.name : 'Widget') + ' Attributes', $htmlEditor[0], x, y, '100%', '40%', true, true);
        propertyEditorWnd.setVisible(true);
        propertyEditorWnd.setMaximizable(false);
        propertyEditorWnd.setResizable(false);
        propertyEditorWnd.setClosable(true);
        
        Util.bindSharedAttributes(cell ? cell : null, form);
        if(cell)
            TagEditor(cell, $htmlEditor, graph);
        
        $htmlEditor.tabs();
    }
    return $htmlEditor;
}
export default PropertyEditor;