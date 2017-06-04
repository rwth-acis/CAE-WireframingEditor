import {
    mxUtils,
    mxConstants
} from '../mxExport.js';
import UIText from './UIText.js';

Paragraph.prototype = new UIText();
Paragraph.prototype.constructor = Paragraph;

window.Paragraph = Paragraph;

function Paragraph(geometry) {
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
    // var text = 'hallo';
    var xmlDoc = mxUtils.createXmlDocument();
    var uiObj = xmlDoc.createElement('pObj');
    uiObj.setAttribute('label', text);

    UIText.call(this, text, geometry, uiObj);

    this.init = function () {
        this.__proto__.init.call(this, 'textarea');
        this.$input
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('overflow', 'hidden')
            .css('resize', 'none')
            .text(text);
    }
    return this;
}

export default Paragraph;