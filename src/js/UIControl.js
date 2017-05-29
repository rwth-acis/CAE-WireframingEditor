import {mxCell, mxCodec, mxUtils, mxEvent} from './mxExport.js'; 
UIControl.prototype = new mxCell();
UIControl.prototype.constructor = UIControl;
function UIControl(value, geometry, style){
    var that = this;
    mxCell.call(this, value, geometry, style);

    
    this.setVertex(true);


    this.funct = function (wf, evt, cell) {
        wf.stopEditing(false);

        //encode UIControl
        var encoder = new mxCodec();

        var pt = wf.getPointForEvent(evt);
        var v = wf.getModel().cloneCell(that);
        v.geometry.x = pt.x;
        v.geometry.y = pt.y;
        //v.style = that.style;

        var result = encoder.encode(v);
        var xml = mxUtils.getXml(result);
        y.share.map.set(mxEvent.ADD_VERTEX, xml);
    }

    this.makeTypeDraggable = function(type, wireframe){
        mxUtils.makeDraggable(type, wireframe, that.funct);
    }


    return this;
}
export default UIControl;