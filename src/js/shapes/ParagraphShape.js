import {
    mxUtils,
    mxShape,
    mxStencil
} from '../misc/mxExport.js';

/**
 * @module Shapes
 */

mxUtils.extend(ParagraphShape, mxShape);
/**
 * @classdesc The shape for the Paragraph-element
 * @constructor
 * @extends mxShape
 * @see Paragraph
 */
function ParagraphShape(){
    var str = '<shape name="paragraph" h="25" w="171" aspect="1"><foreground><fontsize size="5"/><fontstyle style="2"/><text str="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." x="0" y="0" /><text str="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore " x="0" y="6" /><text str="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." x="0" y="12" /><text str="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." x="0" y="18" /><text str="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore " x="0" y="24" /><text str="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." x="0" y="30" /></foreground></shape>';
    var xml = mxUtils.parseXml(str);
    var stencil = new mxStencil(xml.documentElement);
    mxShape.call(this, stencil);
}
export default ParagraphShape;