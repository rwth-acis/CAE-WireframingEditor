import {
    mxConstants
} from '../misc/mxExport.js';
import UIMedia from './UIMedia.js';

VideoPlayer.prototype = new UIMedia();
VideoPlayer.prototype.constructor = VideoPlayer;
window.VideoPlayer = VideoPlayer;

function VideoPlayer(geometry) {

    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + "=VideoPlayer;" +
        mxConstants.STYLE_FILLCOLOR + "=none;" +
        mxConstants.STYLE_STROKECOLOR + '=grey;' +
        mxConstants.STYLE_ASPECT + '=fixed;' +
        mxConstants.STYLE_EDITABLE + "=0;";

    UIMedia.call(this, geometry, style);
    this.value.setAttribute('poster', '');

    return this;
}
export default VideoPlayer;