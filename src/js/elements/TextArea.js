/*global y*/
import Y from 'yjs';
import UIText from './UIText.js';
import {
    mxGeometry
} from '../misc/mxExport.js';

TextArea.prototype = new UIText();
TextArea.prototype.constructor = TextArea;
UIText.registerCodec(TextArea);
window.TextArea = TextArea;

function TextArea(geometry) {
    var text = 'Multi-Line text input area';
    // var text = 'hallo';
    if (!geometry)
        geometry = new mxGeometry(0, 0, 320, 80);

    UIText.call(this, text, geometry);
    this.value.setAttribute('_placeholder', '');
    this.value.setAttribute('_autofocus', false);
    this.value.setAttribute('_maxlength', '');
    this.value.setAttribute('_readonly', false);
    this.value.setAttribute('_disabled', false);
    this.value.setAttribute('_cols', '');
    this.value.setAttribute('_rows', '');
    this.initDOM = function () {
        UIText.prototype.initDOM.call(this, 'textarea');
        var $node = this.get$node()
        $node.css('overflow', 'hidden')
            .css('resize', 'none')
            .text(text);
        this.set$node($node);
    }
    return this;
}
TextArea.prototype.createShared = function (createdByLocalUser) {
    UIText.prototype.createShared.call(this, createdByLocalUser);
    if (createdByLocalUser) {
        y.share.attrs.set(this.getId() + '_placeholder', Y.Text);
        y.share.attrs.set(this.getId() + '_maxlength', Y.Text);
        y.share.attrs.set(this.getId() + '_cols', Y.Text);
        y.share.attrs.set(this.getId() + '_rows', Y.Text);
    }
}

TextArea.prototype.initShared = function () {
    UIText.prototype.initShared.call(this);
    this.initYText('_placeholder');
    this.initYText('_maxlength');
    this.initYText('_cols');
    this.initYText('_rows');
}
export default TextArea;