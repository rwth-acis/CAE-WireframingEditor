import {
    mxConstants
} from '../misc/mxExport.js';
import UIMedia from './UIMedia.js';

AudioPlayer.prototype = new UIMedia();
AudioPlayer.prototype.constructor = AudioPlayer;
window.AudioPlayer = AudioPlayer;

function AudioPlayer(geometry) {
        
    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + "=AudioPlayer;" +
        mxConstants.STYLE_FILLCOLOR + "=none;" +
        mxConstants.STYLE_STROKECOLOR + '=grey;' +
        mxConstants.STYLE_ASPECT + '=fixed;' + 
        mxConstants.STYLE_EDITABLE + "=0;";

    UIMedia.call(this,geometry, style);
    return this;
}
export default AudioPlayer;