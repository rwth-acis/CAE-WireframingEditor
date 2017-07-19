import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';

mxUtils.extend(DefaultShape, mxShape);
function DefaultShape(){
    var str = '<shape name="default" w="128" h="128"><background><fillcolor color="white"/><strokecolor color="black"/><rect x="0" y="0" w="128" h="128"/><fillstroke/><path><move x="0" y="0"/><line x="128" y="128"/></path><fillstroke/><path><move x="128" y="0"/><line x="0" y="128"/></path><fillstroke/></background></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default DefaultShape;