import {
    mxUtils,
    mxConstants
} from '../misc/mxExport.js';
import UIControl from './UIControl.js';

VideoPlayer.prototype = new UIControl();
VideoPlayer.prototype.constructor = VideoPlayer;
window.VideoPlayer = VideoPlayer;

function VideoPlayer(geometry) {

    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('VideoPlayerObj');
    //TODO set attribute for the video player
    //uiObj.setAttribute();

    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + "=VideoPlayer;" +
        mxConstants.STYLE_FILLCOLOR + "=none;" +
        mxConstants.STYLE_STROKECOLOR + '=grey;' +
        mxConstants.STYLE_ASPECT + '=fixed;' +
        mxConstants.STYLE_EDITABLE + "=0;";

    UIControl.call(this, uiObj, geometry, style);
    return this;
}
export default VideoPlayer;