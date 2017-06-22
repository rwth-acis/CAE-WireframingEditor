import { mxGraphModel, mxUtils, mxCodecRegistry } from './misc/mxExport.js';

mxUtils.extend(WireframeModel, mxGraphModel);

var codec = mxCodecRegistry.getCodec(mxGraphModel)
codec.template = new WireframeModel();
mxCodecRegistry.addAlias('WireframeModel', 'mxGraphModel');
window.WireframeModel = WireframeModel;
function WireframeModel() {
    mxGraphModel.call(this);
}

export default WireframeModel;