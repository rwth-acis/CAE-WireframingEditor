import CONST from '../misc/Constants.js';
import config from '../../data/config.json';
import SharedTag from './SharedTag.js';
import GenericTag from './GenericTag.js';

function TagRegistry() {
    var _descriptions = {};
    var _registry = {};
    _registry[SharedTag.Alias] = SharedTag;
    _descriptions[SharedTag.Alias] = {
        image: SharedTag.IMAGE
    };

    return {
        initFromVLS: function (vls) {
            var findNodeClassInVLS = function (nodeClassName, vls) {
                var nodes = vls.nodes;
                for (var key in nodes) {
                    if (nodes.hasOwnProperty(key) && nodes[key].label === nodeClassName)
                        return nodes[key];
                }
                return false;
            }
            var tags = config.tags;
            if (tags) {
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
                        } else
                            attrs[attr.key] = attr['value'];
                    }
                    _descriptions[tags[i].node_class] = {
                        image: tags[i].options && tags[i].options.imgConst ? CONST.IMAGES[tags[i].options.imgConst] : CONST.IMAGES.DEFAULT_TAG,
                        attrs: attrs
                    };
                    _registry[tags[i].node_class] = GenericTag;
                }
            }
        },
        get: function (nodeClassName) {
            return _descriptions.hasOwnProperty(nodeClassName) ? _descriptions[nodeClassName] : null;
        },
        getDescription: function () {
            return _descriptions;
        },
        getClass: function (name) {
            return _registry.hasOwnProperty(name) ? _registry[name] : null;
        },
        getClasses: function () {
            return _registry;
        }
    }
}

export default new TagRegistry();