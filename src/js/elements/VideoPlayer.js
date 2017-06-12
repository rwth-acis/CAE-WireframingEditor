/*global y*/
import Y from 'yjs';
import {
    mxConstants,
    mxGeometry
} from '../misc/mxExport.js';
import UIMedia from './UIMedia.js';

window.VideoPlayer = VideoPlayer;
VideoPlayer.prototype = new UIMedia();
VideoPlayer.prototype.constructor = VideoPlayer;
UIMedia.registerCodec(VideoPlayer);
function VideoPlayer(geometry) {
    if(!geometry)
        geometry = new mxGeometry(0, 0, 200, 100);
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

VideoPlayer.prototype.initShared = function(createdByLocalUser){
    UIMedia.prototype.initShared.call(this, createdByLocalUser);
    if(createdByLocalUser)
        y.share.attrs.set(this.getId()+'_poster', Y.Text);
}
export default VideoPlayer;