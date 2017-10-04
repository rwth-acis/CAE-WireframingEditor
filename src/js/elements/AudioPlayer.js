/**
 * @module UIElements
 */
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
 * The HTML node name
 * @static 
 * @default audio
 * @readonly
 */
AudioPlayer.HTML_NODE_NAME = 'audio';

/**
 * The Name in the wireframing editor
 * @static 
 * @default AudioPlayer
 * @readonly
 */
AudioPlayer.NAME = "Audio Player";

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
    this.value.setAttribute('_src', 'https://rwth-acis.github.io/CAE-WireframingEditor/resources/horse.mp3');
}
export default AudioPlayer;