import _ from 'lodash';
import Util from '../misc/Util.js';
function FrontendComponentMapper(graph) {
    var frontendModel = {
        attributes: {},
        nodes: {},
        edges: {}
    };
    var model = graph.model;
    var nodeTpl = '{"label":<%=labelAttr%>, "left": 4500, "top":4500, "width":100, "height":100, "zIndex": 1, "type":"<%=type%>", "attributes":<%=attributes%>}';
    var attrTpl = '{"id":"<%=id%>[<%=attrName%>]", "name":"<%=attrName%>", "value":{"id":"<%=id%>[<%=attrName%>]", "name":"<%=attrName%>", "value":<%=value%>}<% if(option) {%> ,"option":<%=value%><%}%> }';
    var edgeTpl = '{"label":<%=labelAttr%>, "source":"<%=srcId%>", "target":"<%=targetId%>", "attributes":{}, "type":"<%=type%>"}';
    var attrCompiled = _.template(attrTpl);
    var nodeCompiled = _.template(nodeTpl);
    var edgeCompiled = _.template(edgeTpl);

    //Initialize the root Widget node
    var widgetNodeId = Util.GUID();

    var label;
    var attributes = {};
    for (var i = 0; i < model.getMeta().attributes.length; i++) {
        var attr = model.getMeta().attributes[i];
        var attrName = attr.name[0] === '_' ? attr.name.slice(1) : attr.name;
        var json = attrCompiled({ id: widgetNodeId, attrName: attrName, value: '"' + attr.value + '"', option: false });
        if (attrName === 'name')
            label = json;
        var id = Util.GUID();
        attributes[id] = JSON.parse(json);

    }
    var node = JSON.parse(nodeCompiled({ type: 'Widget', labelAttr: label, attributes: JSON.stringify(attributes) }));
    frontendModel.nodes[widgetNodeId] = node;

    function mapHTMLElement(cell) {
        //Create the HTML Elements node     
        var label = attrCompiled({ id: cell.id, attrName: 'label', value: '"' + cell.value.getAttribute('label') + '"', option: false });
        var attributes = {};
        var id = Util.GUID();
        attributes[id] = JSON.parse(attrCompiled({ id: cell.id, attrName: 'type', value: '"' + cell.constructor.HTML_NODE_NAME + '"', option: true }));
        id = Util.GUID();
        attributes[id] = JSON.parse(attrCompiled({ id: cell.id, attrName: 'id', value: '""', option: false }));
        id = Util.GUID();
        attributes[id] = JSON.parse(attrCompiled({ id: cell.id, attrName: 'static', value: false, option: false }));
        id = Util.GUID();
        attributes[id] = JSON.parse(attrCompiled({ id: cell.id, attrName: 'collaborative', value: false, option: false }));
        var node = JSON.parse(nodeCompiled({ type: 'HTML Element', labelAttr: label, attributes: JSON.stringify(attributes) }));
        frontendModel.nodes[cell.id] = node;

        var edgeId = Util.GUID();
        var edgeLabel = attrCompiled({ id: edgeId, attrName: 'label', value: '""', option: false });
        var edge = JSON.parse(edgeCompiled({ type: 'Widget to HTML Element', labelAttr: edgeLabel, srcId: widgetNodeId, targetId: cell.id }));
        
        if(cell.parent.id != '1'){
            var childEdgeId = Util.GUID();
            var childEdgeLabel = attrCompiled({ id: edgeId, attrName: 'label', value: '""', option: false });
            var childEdge = JSON.parse(edgeCompiled({ type: 'hasChild', labelAttr: childEdgeLabel, srcId: cell.parent.id, targetId: cell.id }));
            frontendModel.edges[childEdgeId] =childEdge;
        }

        frontendModel.edges[edgeId] = edge;
    }
    function recursion(parent) {
        for (var i = 0; i < parent.children.length; i++) {
            var cell = parent.children[i];
            mapHTMLElement(cell);
            if(cell.children)
                recursion(cell);
        }

    }
    recursion(graph.getDefaultParent());

    return frontendModel;
}
export default FrontendComponentMapper;