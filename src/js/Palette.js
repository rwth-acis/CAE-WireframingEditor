import {
    mxToolbar,
    mxGraph,
    mxConstants,
    mxEvent,
    mxRectangle
} from './mxExport.js';
Palette.prototype = new mxToolbar();
Palette.prototype.constructor = Palette;

/**
 * The palette of the wireframing editor
 * @param {DOM} container 
 */
function Palette(container) {
    mxToolbar.call(this, container);

    this.enabled = false;

    var createTemporaryGraph = function (stylesheet) {
        var graph = new mxGraph(document.createElement('div'), null, null, stylesheet);
        graph.resetViewOnRootChange = false;
        graph.setConnectable(false);
        graph.gridEnabled = false;
        graph.autoScroll = false;
        graph.setTooltips(false);
        graph.setEnabled(false);

        // Container must be in the DOM for correct HTML rendering
        graph.container.style.visibility = 'hidden';
        graph.container.style.position = 'absolute';
        graph.container.style.overflow = 'hidden';
        graph.container.style.height = '1px';
        graph.container.style.width = '1px';

        return graph;
    };

    //TODO
    var graph = new createTemporaryGraph();
    var thumbBorder = 1;
    var thumbWidth = 50;
    var thumbHeight = 50;
    var thumbPadding = 1;

    /**
     * Get a node entry to the given parent
     * @param {DOM} parent 
     */
    var getNodeEntry = function (cell) {
        graph.view.scaleAndTranslate(1, 0, 0);
        
        graph.addCell(cell);
        var bounds = graph.getGraphBounds();
        var s = Math.floor(Math.min((thumbWidth - 2 * thumbBorder) / bounds.width, (thumbHeight - 2 * thumbBorder) / bounds.height) * 100) / 100;
        graph.view.scaleAndTranslate(s, Math.floor((thumbWidth - bounds.width * s) / 2 / s - bounds.x), Math.floor((thumbHeight - bounds.height * s) / 2 / s - bounds.y));
        var node = null;

        // For supporting HTML labels in IE9 standards mode the container is cloned instead
        if (graph.dialect == mxConstants.DIALECT_SVG) {
            node = graph.view.getCanvas().ownerSVGElement.cloneNode(true);
        }
        // LATER: Check if deep clone can be used for quirks if container in DOM
        else {
            node = graph.container.cloneNode(false);
            node.innerHTML = graph.container.innerHTML;
        }

        graph.getModel().clear();

        node.style.position = 'relative';
        node.style.overflow = 'hidden';
        node.style.cursor = 'move';
        node.style.left = thumbBorder + 'px';
        node.style.top = thumbBorder + 'px';
        node.style.width = thumbWidth + 'px';
        node.style.height = thumbHeight + 'px';
        node.style.visibility = '';
        node.style.minWidth = '';
        node.style.minHeight = '';
        return node;
    }
    
    /**
     * @param{mxCell} cell
     */
    this.createItem = function (cell) {
        var elt = document.createElement('a');
        elt.setAttribute('href', 'javascript:void(0);');
        elt.className = 'item';
        elt.style.overflow = 'hidden';
        var border = 2 * thumbBorder;
        elt.style.width = (thumbWidth + border) + 'px';
        elt.style.height = (thumbHeight + border) + 'px';
        elt.style.padding = thumbPadding + 'px';

        // Blocks default click action
        mxEvent.addListener(elt, 'click', function (evt) {
            mxEvent.consume(evt);
        });
        elt.appendChild(getNodeEntry(cell, elt));
        //var bounds = new mxRectangle(0, 0, width, height);
        container.appendChild(elt);
        return elt;
    }
    return this;
}
export default Palette;