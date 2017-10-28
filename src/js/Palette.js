/**
 * @module WireframeEditor
 */
import {
    mxToolbar,
    mxGraph,
    mxConstants,
    mxEvent
} from './misc/mxExport.js';
//not working currently
//import tippy from 'tippy.js';
var tippy = require('tippy.js');
Palette.prototype = new mxToolbar();
Palette.prototype.constructor = Palette;

/**
 * The palette consists of all ui elments supported by the editor
 * @classdesc The palette of the wireframing editor
 * @constructor
 * @param {DOM} container the container
 * @extends mxToolbar
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

    var graph = new createTemporaryGraph();
    var thumbBorder = 1;
    var thumbWidth = 48;
    var thumbHeight = 48;
    var thumbPadding = 1;

    /**
     * Get a node entry to the given parent
     * @param {mxCell} cell the cell
     * @param {Boolean} showLabel  label visibility of the graph. default is false
     * @return {mxCell} the new cell 
     */
    var getNodeEntry = function (cell, showLabel) {
        graph.labelsVisible = showLabel || false;
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
     * @param {mxCell} cell the cell
     * @param {String} name the name of the item in the palette
     * @param {Boolean} showLabel true if the label should be shown else false. Default is false
     * @return {DOM} the item
     */
    this.createItem = function (cell, name, showLabel) {
        var elt = document.createElement('a');
        elt.setAttribute('href', 'javascript:void(0);');
        elt.className = 'item';
        elt.setAttribute('title', name);
        elt.style.overflow = 'hidden';
        var border = 2 * thumbBorder;
        elt.style.width = (thumbWidth + border) + 'px';
        elt.style.height = (thumbHeight + border) + 'px';
        elt.style.padding = thumbPadding + 'px';

        // Blocks default click action
        mxEvent.addListener(elt, 'click', function (evt) {
            mxEvent.consume(evt);
        });
        elt.appendChild(getNodeEntry(cell, showLabel));

        container.appendChild(elt);
        return elt;
    }

    this.createTooltips = function () {
        tippy('.item', {
            position: 'right',
            animation: 'scale',
            duration: 1000,
            arrow: true,
            arrowSize: 'big',
            size: 'big',
            theme: 'transparent'
        })
    }

    return this;
}
export default Palette;