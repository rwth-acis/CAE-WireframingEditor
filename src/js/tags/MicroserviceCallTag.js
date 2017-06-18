import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(MicroserviceCallTag, AbstractTag);
AbstractTag.registerCodec(MicroserviceCallTag);
function MicroserviceCallTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.MICROSERVICECALL, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Microservice call', offset);
}

export default MicroserviceCallTag;