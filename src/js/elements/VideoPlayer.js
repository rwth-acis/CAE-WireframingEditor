/*global y*/
/**
 * @module UIElements
 */
import Y from './../../../node_modules/yjs/dist/y.js';
import {
    mxConstants,
    mxGeometry
} from '../misc/mxExport.js';
import UIMedia from './UIMedia.js';

window.VideoPlayer = VideoPlayer;
VideoPlayer.prototype = new UIMedia();
VideoPlayer.prototype.constructor = VideoPlayer;
UIMedia.registerCodec(VideoPlayer);

/**
 * The HTML node name
 * @static 
 * @default video
 * @readonly
 */
VideoPlayer.HTML_NODE_NAME = 'video';

/**
 * The Name in the wireframing editor
 * @static 
 * @default VideoPlayer
 * @readonly
 */
VideoPlayer.NAME = "Video Player";

/**
 * @classdesc The Video Player HTML 5 element
 * @constructor
 * @param {mxGeometry} [geometry=new mxGeometry(0, 0, 200, 100)] the width, height, x and y of the ui element
 * @extends UIMedia
 */
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
    this.value.setAttribute('_poster', '');
    //https://static.videezy.com/system/resources/previews/000/005/341/original/Earth_Spin_Medium.mp4
    //https://www.w3schools.com/html/mov_bbb.mp4
    this.value.setAttribute('_src', 'https://rwth-acis.github.io/CAE-WireframingEditor/resources/mov_bbb.mp4');
}

VideoPlayer.prototype.createShared = function(createdByLocalUser){
    UIMedia.prototype.createShared.call(this, createdByLocalUser);
    if(createdByLocalUser)
        y.share.attrs.set(this.getId()+'_poster', Y.Text);
}

VideoPlayer.prototype.initShared = function(){
    UIMedia.prototype.initShared.call(this);
    this.initYText('_poster');
}
export default VideoPlayer;