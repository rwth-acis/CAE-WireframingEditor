import {
    mxUtils,
    mxConstants
} from '../misc/mxExport.js';
import UIControl from './UIControl.js';

AudioPlayer.prototype = new UIControl();
AudioPlayer.prototype.constructor = AudioPlayer;
window.AudioPlayer = AudioPlayer;

function AudioPlayer(geometry) {

    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('AudioPlayerObj');
    //TODO set attribute for the audio
    //uiObj.setAttribute();

    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + "=AudioPlayer;" +
        mxConstants.STYLE_FILLCOLOR + "=none;" +
        mxConstants.STYLE_STROKECOLOR + '=grey;' +
        mxConstants.STYLE_ASPECT + '=fixed;' + 
        mxConstants.STYLE_EDITABLE + "=0;";

    UIControl.call(this, uiObj, geometry, style);
    return this;
}
export default AudioPlayer;