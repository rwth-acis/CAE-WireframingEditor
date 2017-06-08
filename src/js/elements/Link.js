import UIText from './UIText.js';

Link.prototype = new UIText();
Link.prototype.constructor = Link;

//Global for the codec converter
window.Link = Link;

function Link(geometry) {
    var text = 'Link';


    UIText.call(this, text, geometry);
    this.value.setAttribute('label', text);
    this.value.setAttribute('href', '');

    this.init = function () {
        this.__proto__.init.call(this);
        this.$input.css('color', 'blue')
            .css('background-color', 'transparent')
            .css('border-style', 'initial')
            .css('text-decoration', 'underline')
            .val(text);
    }
    return this;
}

export default Link;