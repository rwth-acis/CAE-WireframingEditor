import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';

mxUtils.extend(TextAreaShape, mxShape);
function TextAreaShape(){
    var str = '<shape name="textarea" h="70" w="171" aspect="1"><foreground><fontsize size="25"/><text str="Mulit-line input" x="0" y="0"/><text str="Text Area" x="0" y="26"/></foreground><background><strokecolor color="grey"/><fillcolor color="white"/><rect x="0" y="0" w="171" h="70"/><fillstroke/></background></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default TextAreaShape;