import CONST from '../misc/Constants.js';
import config from '../../data/config.json';
import vls from '../../data/vls.json'

function TagManager() {
    var _map = {};

    var findNodeClassInVLS = function (nodeClassName, vls) {
        var nodes = vls.nodes;
        for (var key in nodes) {
            if (nodes.hasOwnProperty(key) && nodes[key].label === nodeClassName)
                return nodes[key];
        }
        return false;
    }
    var tags = config.tags;
    for (var i = 0; i < tags.length; i++) {
        var node = findNodeClassInVLS(tags[i].node_class, vls);
        var attrs = {};

        for (var key in node.attributes) {
            var attr = node.attributes[key];
            if (attr.hasOwnProperty('options')) {
                var values = [];
                for (var v in attr.options)
                    values.push(v);
                attrs[attr.key] = values;
            }
            else
                attrs[attr.key] = attr['value'];
        }
        _map[tags[i].node_class] = {
            image: tags[i].options && tags[i].options.imgConst ? CONST.IMAGES[tags[i].options.imgConst] : CONST.IMAGES.DEFAULT_TAG,
            attrs: attrs
        };
    }

    return {
        get: function (nodeClassName) {
            return _map.hasOwnProperty(nodeClassName) ? _map[nodeClassName] : _map;
        }
    }
}

export default new TagManager();