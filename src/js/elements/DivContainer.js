import { mxUtils, mxConstants } from '../misc/mxExport.js';
import UIControl from './UIControl.js';


mxUtils.extend(DivContainer, UIControl);
window.DivContainer = DivContainer;

function DivContainer(geometry) {
    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('DivObj');
    uiObj.setAttribute('label', 'Container');

    var style = mxConstants.STYLE_SHAPE + "=" + mxConstants.SHAPE_SWIMLANE + ';' +
        mxConstants.STYLE_FILLCOLOR + "=none;" +
        mxConstants.STYLE_POINTER_EVENTS + "=true;" +
        mxConstants.STYLE_STROKECOLOR + '=grey;' +
        mxConstants.STYLE_VERTICAL_ALIGN + '=middle;' +
        mxConstants.STYLE_LABEL_BACKGROUNDCOLOR + '=none;' +
        mxConstants.STYLE_FONTSIZE + '=11;' +
        mxConstants.STYLE_STARTSIZE + '=15;' +
        //mxConstants.STYLE_HORIZONTAL + '=false;' +
		mxConstants.STYLE_FONTCOLOR +'=black;' +
		mxConstants.STYLE_STROKECOLOR +'=black;' +
        mxConstants.STYLE_EDITABLE + "=0;";    
    
    UIControl.call(this, uiObj, geometry, style);
    this.setConnectable(false);

    return this;
}
export default DivContainer;