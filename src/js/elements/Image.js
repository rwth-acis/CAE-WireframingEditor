import {
    mxUtils,
    mxConstants
} from '../misc/mxExport.js';
import UIControl from './UIControl.js';

Image.prototype = new UIControl();
Image.prototype.constructor = Image;
window.Image = Image;

function Image(geometry) {

    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('ImageObj');
    //TODO set attribute for the image
    //uiObj.setAttribute();

    //style in html5stencils.xml and registered in the editor
    var style = mxConstants.STYLE_SHAPE + '=image;' +
        mxConstants.STYLE_EDITABLE + "=0;";

    UIControl.call(this, uiObj, geometry, style);
    return this;
}
export default Image;