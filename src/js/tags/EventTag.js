import {mxUtils, mxImage} from '../misc/mxExport.js';
import AbstractTag from './AbstractTag.js';
import CONST from '../misc/Constants.js';

mxUtils.extend(EventTag, AbstractTag);
function EventTag(offset){
    AbstractTag.call(this, new mxImage(CONST.IMAGES.EVENT_TAG, CONST.TAG.SIZE, CONST.TAG.SIZE), 'Event', offset);
}

export default EventTag;