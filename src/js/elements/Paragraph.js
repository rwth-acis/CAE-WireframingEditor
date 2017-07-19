import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';
Paragraph.prototype = new UIText();
Paragraph.prototype.constructor = Paragraph;
UIText.registerCodec(Paragraph);
window.Paragraph = Paragraph;
Paragraph.HTML_NODE_NAME = 'p';
Paragraph.NAME = "Paragraph of Text";
function Paragraph(geometry) {
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
    if(!geometry)
        geometry = new mxGeometry(0, 0, 320, 80);
    UIText.call(this, text, geometry);

    this.initDOM = function () {
        UIText.prototype.initDOM.call(this, 'textarea');
        var $node = this.get$node();
        $node.css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('overflow', 'hidden')
            .css('resize', 'none')
            .text(text);
        this.set$node($node);
    }
    return this;
}

export default Paragraph;