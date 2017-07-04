import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';

mxUtils.extend(TextBoxShape, mxShape);
function TextBoxShape(){
    var str = '<shape name="textbox" h="70" w="171" aspect="1"><foreground><fontsize size="50"/><text str="TextBox" x="0" y="0"/></foreground><background><strokecolor color="grey"/><fillcolor color="white"/><rect x="0" y="0" w="171" h="70"/><fillstroke/></background></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default TextBoxShape;