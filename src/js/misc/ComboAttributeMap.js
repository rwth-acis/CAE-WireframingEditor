/**
 * A simple map to handle combo attributes for the Wireframe Model, UI Controls and Tags
 */
function ComboAttributeMap(){
    var comboAttr = {};
    this.getComboAttr = function (name) {
        if (comboAttr.hasOwnProperty(name))
            return comboAttr[name];
        else return undefined;
    }
    this.addComboAttr = function (name, values) {
        if (!comboAttr.hasOwnProperty(name)) {
            comboAttr[name] = values;
            return true;
        } else return false;
    }
}
export default ComboAttributeMap;