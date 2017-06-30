import { mxUtils, mxPartitionLayout, mxRectangle } from './misc/mxExport.js';
mxUtils.extend(WireframeLayout, mxPartitionLayout);

function WireframeLayout(graph, spacing, border) {

    mxPartitionLayout.call(this, graph, true, spacing, border);

}
WireframeLayout.prototype.moveCell = function (cell, x, y) {
    mxPartitionLayout.prototype.moveCell.apply(this, arguments);
}

WireframeLayout.prototype.execute = function (parent) {
    var model = this.graph.getModel();
    var pgeo =  model.getGeometry(parent);

    if (this.graph.container != null &&
        ((pgeo == null && model.isLayer(parent)) || parent == this.graph.getView().currentRoot)) {
        var width = this.graph.container.offsetWidth - 1;
        var height = this.graph.container.offsetHeight - 1;
        pgeo =  new mxRectangle(0, 0, width, height);
    }

    if (pgeo != null) {
        var children = [];
        var childCount = model.getChildCount(parent);

        for (var i = 0; i < childCount; i++) {
            var child = model.getChildAt(parent, i);

            if (!this.isVertexIgnored(child) && this.isVertexMovable(child)) {
                children.push(child);
            }
        }
        var n = children.length;
        if (n > 1) {
            var max_height = 0;
            
            model.beginUpdate();
            try {
                var geoOfFirst = model.getGeometry(children[0]);
                geoOfFirst = geoOfFirst.clone();
                geoOfFirst.x =  this.border;
                //start size of the divcontainer
                geoOfFirst.y = (this.graph.isSwimlane(parent)) ? 13 : this.border;
                model.setGeometry(children[0], geoOfFirst);
                for (var i = 1; i < n; i++) {
                    var child = children[i];
                    var pred = children[i-1];
                    var geo = model.getGeometry(child);
                    var predGeo = model.getGeometry(pred);
                    if (geo != null) {
                        geo = geo.clone();
                        if(max_height < predGeo.y + predGeo.height)
                                max_height = predGeo.y + predGeo.height;
                        if(predGeo.x + predGeo.width+ geo.width < pgeo.width){
                            geo.x = predGeo.x + predGeo.width;
                            geo.y = predGeo.y;
                        }
                        else{
                            geo.y = max_height;
                            geo.x = this.border;
                            max_height = 0;
                        }

                        model.setGeometry(child, geo);
                    }
                }
            }
            finally {
                model.endUpdate();
            }
        }
    }

}
export default WireframeLayout;