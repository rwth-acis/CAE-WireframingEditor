import {mxToolbar} from './mxExport.js';
Palette.prototype = new mxToolbar();
Palette.prototype.constructor = Palette;

function Palette(container){
    mxToolbar.call(this, container);

    this.enabled = false;

    this.addType = function(title, icon, funct){
        var type = mxToolbar.prototype.addMode.apply(this, arguments);
        return type;
    }

    return this;
}
export default Palette;


