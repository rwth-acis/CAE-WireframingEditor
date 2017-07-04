import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';

mxUtils.extend(ImageShape, mxShape);
function ImageShape(){
    var str = '<shape name="image" w="128" h="128" aspect="4/3"><background><fillcolor color="none"/><strokecolor color="none"/><rect x="0" y="0" w="128" h="128"/><fillstroke/></background><foreground><image src="./images/image.png" x="0" y="0" w="128" h="128"/></foreground></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default ImageShape;