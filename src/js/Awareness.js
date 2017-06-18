/*global y*/
import {mxEvent, mxCellHighlight} from './misc/mxExport.js';
import UserOverlay from './overlays/UserOverlay';
    /**
     * Enables cell hightlighting and overlays for user informations
     * @param {Wireframe} wireframe 
     */
    function Awareness(wireframe){
     var highlightMap = {};

    wireframe.getSelectionModel().addListener(mxEvent.CHANGE, function (sender, evt) {
        var unselectedCells = evt.getProperty('added');
        var unhighlight = [];
        for (var i = 0; i < unselectedCells.length; i++) {
            unhighlight.push(unselectedCells[i].getId());
        }
        var highlight = [];
        for (var i = 0; i < sender.cells.length; i++) {
            highlight.push(sender.cells[i].getId());
        }
        y.share.awareness.set(y.db.userId, {
            highlight: highlight,
            unhighlight: unhighlight
        });

    });

    y.share.awareness.observe(function (event) {
        if (event.name != y.db.userId) {
            //unhighlight cells
            var unhighlightCells = event.value.unhighlight;
            for (var i = 0; i < unhighlightCells.length; i++) {
                var highlight = highlightMap[unhighlightCells[i]];
                if (highlight) {
                    highlight.hide();
                    delete highlightMap[unhighlightCells[i]];
                    var cell = wireframe.getModel().getCell(unhighlightCells[i]);
                    if (cell) {
                        for (var j = 0; cell.overlays && j < cell.overlays.length; j++) {
                            if (cell.overlays[j] instanceof UserOverlay) {
                                wireframe.removeCellOverlay(cell, cell.overlays[j]);
                                j--;
                            }
                        }
                    }
                }
            }

            //highlight cells
            var highlightCells = event.value.highlight;
            for (var i = 0; i < highlightCells.length; i++) {
                var highlight = new mxCellHighlight(wireframe, '#ff0000', 2);
                highlightMap[highlightCells[i]] = highlight;
                var cell = wireframe.getModel().getCell(highlightCells[i]);
                if (cell) {
                    highlight.highlight(wireframe.view.getState(cell));
                    var overlay = new UserOverlay(event.name);
                    wireframe.addCellOverlay(cell, overlay);
                }
            }
        }
    });
}
export default Awareness;