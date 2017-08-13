import {
    mxConstants,
    mxGeometry
} from '../misc/mxExport.js';
import UIMedia from './UIMedia.js';

AudioPlayer.prototype = new UIMedia();
AudioPlayer.prototype.constructor = AudioPlayer;
window.AudioPlayer = AudioPlayer;
UIMedia.registerCodec(AudioPlayer);

/**
 * @classdesc The Audio Player HTML 5 element
 * @constructor
 * @param {mxGeometry} [geometry= new mxGeometry(0, 0, 200, 30)] the width, height, x and y of the ui element
 * @extends UIMedia
 */
function AudioPlayer(geometry) {
    if (!geometry)
        geometry = new mxGeometry(0, 0, 200, 30);
    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + "=AudioPlayer;" +
        mxConstants.STYLE_FILLCOLOR + "=none;" +
        mxConstants.STYLE_STROKECOLOR + '=grey;' +
        mxConstants.STYLE_ASPECT + '=fixed;' +
        mxConstants.STYLE_EDITABLE + "=0;";

    UIMedia.call(this, geometry, style);
}
export default AudioPlayer;