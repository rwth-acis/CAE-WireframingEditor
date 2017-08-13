import CONST from '../misc/Constants.js';
import config from '../../data/config.json';
import SharedTag from './SharedTag.js';
import GenericTag from './GenericTag.js';

/**
 * @classdesc A registry for all generic and predefined tags
 * 
 * The class is a Singleton 
 * @constructor
 * @requires SharedTag
 * @requires GenericTag
 */
function TagRegistry() {
    /**
     * The description map
     * @member {Object}
     */
    var _descriptions = {};
    
    /**
     * The registry map containing all constructors
     * @member {Object}
     */
    var _registry = {};
    
    //Register the SharedTag
    _registry[SharedTag.Alias] = SharedTag;
    _descriptions[SharedTag.Alias] = {
        image: SharedTag.IMAGE
    };

    return {
        
        /**
         * Initialize the TagRegistry with the given VLS
         * @static
         * @param {Object} vls the VLS
         * @return {undefined}
         * @memberof TagRegistry
         */
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
        /**
         * 
         * @param {String} nodeClassName get the dsecription for the given node class
         * @return {Object|null} the object containing the description or null
         * @memberof TagRegistry
         */
        get: function (nodeClassName) {
            return _descriptions.hasOwnProperty(nodeClassName) ? _descriptions[nodeClassName] : null;
        },
        /**
         * Get the whole description map
         * @return {Object} the description map is returned
         * @memberof TagRegistry
         */
        getDescription: function () {
            return _descriptions;
        },
        /**
         * Get the constructor for a given name
         * @param {String} name the alias name of the class
         * @return {Function|null} the constructor function or null
         * @memberof TagRegistry
         */
        getClass: function (name) {
            return _registry.hasOwnProperty(name) ? _registry[name] : null;
        },
        /**
         * Get the whole registry map with all constructor functions for all predefined tags and generic tags from the VLS
         * @return {Object} returns the registry map
         * @memberof TagRegistry
         */
        getClasses: function () {
            return _registry;
        }
    }
}

export default new TagRegistry();