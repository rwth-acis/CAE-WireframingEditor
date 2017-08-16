/**
 * @module Misc
 */

/**
 * A simple map to handle combo attributes for the Wireframe Model, UI Controls and Tags
 * @constructor 
 */
function ComboAttributeMap(){
    var comboAttr = {};
    /**
     * Get the combo attribute with given name
     * @param  {String} name the name of attribute
     * @return {String[]|undefined} the array of possible values of the combo attribute
     */
    this.getComboAttr = function (name) {
        if (comboAttr.hasOwnProperty(name))
            return comboAttr[name];
        else return undefined;
    }
    /**
     * Add a combo attribute to the map
     * @param  {String} name the name of the attribute
     * @param {String[]} values the array of values of the combo attribute
     * @return {Boolean} true if the attribute was added to the map else false
     */
    this.addComboAttr = function (name, values) {
        if (!comboAttr.hasOwnProperty(name)) {
            comboAttr[name] = values;
            return true;
        } else return false;
    }
}
export default ComboAttributeMap;