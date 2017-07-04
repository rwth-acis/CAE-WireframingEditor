import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';

mxUtils.extend(TextNodeShape, mxShape);
function TextNodeShape(){
    var str = '<shape name="textnode" h="25" w="171" aspect="1"><foreground><fontsize size="50"/><fontstyle style="1"/><text str="Text" x="85" y="10" align="center" valign="middle"/></foreground></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default TextNodeShape;