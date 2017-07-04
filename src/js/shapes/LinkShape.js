import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';

mxUtils.extend(LinkShape, mxShape);
function LinkShape(){
    var str = '<shape name="link" h="25" w="50" aspect="1" ><foreground><fontsize size="17"/><fontcolor color="#0000ff"/><strokecolor color="#0000ff"/><text str="Link" x="25" y="12" align="center" valign="middle"/><path><move x="8" y="20"/><line x="42" y="20"/></path><fillstroke/></foreground></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default LinkShape;