/*global y*/
import { mxEvent, mxCellHighlight, mxPoint } from './misc/mxExport.js';
import UserOverlay from './overlays/UserOverlay';
import CONST from './misc/Constants.js';
/**
 * Enables cell hightlighting and overlays for user informations
 * @param {Wireframe} wireframe 
 */
function Awareness(wireframe) {
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
            var userInfo = y.share.yfUsers.get(event.name);

            //unhighlight cells
            var unhighlightCells = event.value.unhighlight;
            for (var i = 0; i < unhighlightCells.length; i++) {
                var highlightId = unhighlightCells[i] + '_' + event.name;
                var highlight = highlightMap[highlightId];
                if (highlight) {
                    highlight.hide();
                    delete highlightMap[highlightId];
                    var cell = wireframe.getModel().getCell(unhighlightCells[i]);
                    if (cell) {
                        for (var j = 0; cell.overlays && j < cell.overlays.length; j++) {
                            if (cell.overlays[j] instanceof UserOverlay && cell.overlays[j].getUserId() === event.name) {
                                wireframe.removeCellOverlay(cell, cell.overlays[j]);
                                j--;
                            }
                        }
                        var k = 0;
                        var state = wireframe.view.getState(cell);
                        if (state.overlays) {
                            for (var o in state.overlays.map) {
                                var tag = state.overlays.map[o].overlay;
                                if (tag instanceof UserOverlay) {
                                    tag.offset.x = -k * CONST.TAG.SIZE;
                                    k++;
                                }
                            }
                            wireframe.cellRenderer.redraw(state);
                        }
                    }
                }
            }


                //highlight cells
                var highlightCells = event.value.highlight;
                for (var i = 0; i < highlightCells.length; i++) {
                    var highlight = new mxCellHighlight(wireframe, userInfo ? userInfo.color : '#672d2d', 2);
                    highlightMap[highlightCells[i] + '_' + event.name] = highlight;
                    var cell = wireframe.getModel().getCell(highlightCells[i]);
                    if (cell) {
                        highlight.highlight(wireframe.view.getState(cell));
                        var overlay;
                        var offset = null;
                        var userOverlayCount = 0;
                        if (cell.overlays && cell.overlays.length > 0) {
                            for (var j = 0; j < cell.overlays.length; j++) {
                                if (cell.overlays[i] instanceof UserOverlay)
                                    userOverlayCount++;
                            }
                            offset = new mxPoint(-CONST.TAG.SIZE * userOverlayCount, 0)
                        }
                        if (userInfo)
                            overlay = new UserOverlay(event.name, userInfo.name, userInfo.image, offset);
                        else
                            overlay = new UserOverlay(event.name, 'Unknown User', null, offset);
                        wireframe.addCellOverlay(cell, overlay);
                    }
                }
            }
        });
}
export default Awareness;