import _ from 'lodash'; 
import Util from '../misc/Util.js';
function FrontendComponentMapper(graph){
    var frontendModel = {
        attributes : {},
        nodes :{},
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
    for(var i=0; i < model.getMeta().attributes.length; i++){
        var attr = model.getMeta().attributes[i];
        var attrName = attr.name[0] === '_' ? attr.name.slice(1) : attr.name;
        var json = attrCompiled({id : widgetNodeId, attrName : attrName, value: '"' + attr.value + '"', option: false});
        if(attrName === 'name')
            label = json;
        var id = Util.GUID();
        attributes[id] = JSON.parse(json);

    }
    var node = JSON.parse(nodeCompiled({type: 'Widget', labelAttr: label, attributes: JSON.stringify(attributes)}));
    frontendModel.nodes[widgetNodeId] = node;

    //Create the HTML Elements node     
    var parent = graph.getDefaultParent();
    for(var i=0;i<parent.children.length;i++){
        var cell = parent.children[i];

        var label = attrCompiled({id: cell.id, attrName: 'label', value: '"' + cell.value.getAttribute('label') + '"', option: false});
        var attributes = {};
        var id = Util.GUID();
        attributes[id] = JSON.parse(attrCompiled({id: cell.id, attrName : 'type', value : '"'+cell.constructor.HTML_NODE_NAME + '"', option: true}));
        id = Util.GUID();
        attributes[id] = JSON.parse(attrCompiled({id: cell.id, attrName : 'id', value :'""', option: false}));
        id = Util.GUID();
        attributes[id] = JSON.parse(attrCompiled({id: cell.id, attrName : 'static', value: false, option: false}));
        id = Util.GUID();
        attributes[id] = JSON.parse(attrCompiled({id: cell.id, attrName : 'collaborative', value: false, option: false}));
        var node = JSON.parse(nodeCompiled({type: 'HTML Element', labelAttr : label, attributes: JSON.stringify(attributes)}));
        frontendModel.nodes[cell.id] = node;

        var edgeId = Util.GUID();

        var edgeLabel = attrCompiled({id: edgeId, attrName: 'label', value: '""', option : false});
        var edge = JSON.parse(edgeCompiled({type: 'Widget to HTML Element', labelAttr: edgeLabel, srcId: widgetNodeId, targetId: cell.id}));
        
        frontendModel.edges[edgeId] = edge;
    }
    return frontendModel;

    
}
export default FrontendComponentMapper;