import { mxUtils, mxPartitionLayout, mxRectangle, mxGraph } from './misc/mxExport.js';
mxUtils.extend(WireframeLayout, mxPartitionLayout);

/**
 * @classdesc A simple Layout for Wireframes based on the PartitionLayout from mxGraph
 * @constructor
 * @param {Wireframe} graph the wireframe 
 * @param {*} spacing the spacing
 * @param {*} border the border
 * @extends mxPartitionLayout
 */
function WireframeLayout(graph, spacing, border) {
    mxPartitionLayout.call(this, graph, true, spacing, border);
}

/**
 * @param {mxCell} parent the parent element to execute the layout at
 * @return {undefined}
 */
WireframeLayout.prototype.execute = function (parent) {
    var model = this.graph.getModel();
    var pgeo = model.getGeometry(parent);

    if (this.graph.container != null &&
        ((pgeo == null && model.isLayer(parent)) || parent == this.graph.getView().currentRoot)) {
        var width = this.graph.container.offsetWidth - 1;
        var height = this.graph.container.offsetHeight - 1;
        pgeo = new mxRectangle(0, 0, width, height);
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
        if (n > 0) {
            var max_height = 0, min_parent_width = 0, min_parent_height = 0;

            model.beginUpdate();
            try {
                var geoOfFirst = model.getGeometry(children[0]);
                geoOfFirst = geoOfFirst.clone();
                geoOfFirst.x = this.border;
                //start size of the divcontainer
                geoOfFirst.y = (this.graph.isSwimlane(parent)) ? 13 : this.border;
                model.setGeometry(children[0], geoOfFirst);
                if (n > 1) {
                    for (var i = 1; i < n; i++) {
                        var child = children[i];
                        var pred = children[i - 1];
                        var geo = model.getGeometry(child);
                        var predGeo = model.getGeometry(pred);
                        if (geo != null) {
                            geo = geo.clone();
                            if (max_height < predGeo.y + predGeo.height)
                                max_height = predGeo.y + predGeo.height;
                            if(min_parent_width < predGeo.x + predGeo.width)
                                min_parent_width = predGeo.x + predGeo.width;
                            if (predGeo.x + predGeo.width + geo.width < pgeo.width) {
                                geo.x = predGeo.x + predGeo.width;
                                geo.y = predGeo.y;
                                min_parent_width = predGeo.x + predGeo.width + geo.width; 
                                min_parent_height = max_height;                                                           
                            }
                            else {
                                geo.y = max_height;
                                geo.x = this.border;
                                min_parent_height = max_height + geo.height;
                                max_height = 0;
                                if(min_parent_width < geo.x + geo.width)
                                    min_parent_width = geo.x + geo.width;
                                
                            }
                            model.setGeometry(child, geo);
                        }
                    }
                }
                else {
                    min_parent_height = geoOfFirst.height +13;
                    min_parent_width = geoOfFirst.width;
                }

                if (this.graph.getDefaultParent() != parent) {
                    var parentGeo = model.getGeometry(parent).clone();
                    parentGeo.height = min_parent_height;
                    parentGeo.width = min_parent_width;
                    //parent.setGeometry(parentGeo);

                    model.setGeometry(parent, parentGeo);
                    //mxGraph.prototype.resizeCell.call(this.graph, parent, new mxRectangle(parentGeo.x, parentGeo.y, min_parent_width, min_parent_height));
                }
            }
            finally {
                model.endUpdate();
            }

        }
    }
}
export default WireframeLayout;