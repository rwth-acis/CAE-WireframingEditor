import {mxShape, mxUtils, mxConstants} from '../misc/mxExport.js';
function LinkShape(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
 * Extends mxShape.
 */
mxUtils.extend(LinkShape, mxShape);

LinkShape.prototype.cst = {
		LINK_TEXT : 'linkText',
		TEXT_SIZE : 'textSize',
		TEXT_COLOR : 'textColor',
		SHAPE : 'link'
}

/**
 * Function: paintVertexShape
 * 
 * Paints the vertex shape.
 */
LinkShape.prototype.paintVertexShape = function(c, x, y, w, h)
{
	var linkText = mxUtils.getValue(this.style, LinkShape.prototype.cst.LINK_TEXT, 'Link');
	var textSize = mxUtils.getValue(this.style, LinkShape.prototype.cst.TEXT_SIZE, '17');
	var textColor = mxUtils.getValue(this.style, LinkShape.prototype.cst.TEXT_COLOR, '#0000ff');

	c.translate(x, y);
	var width = mxUtils.getSizeForString(linkText, textSize, mxConstants.DEFAULT_FONTFAMILY).width;
	c.setStrokeColor(textColor);
	c.setFontSize(textSize);
	c.setFontColor(textColor);

	c.text(w * 0.5, h * 0.5, 0, 0, linkText, mxConstants.ALIGN_CENTER, mxConstants.ALIGN_MIDDLE, 0, null, 0, 0, 0);

	c.begin();
	c.moveTo(w * 0.5 - width * 0.5, (h + parseInt(textSize, 10)) * 0.5);
	c.lineTo(w * 0.5 + width * 0.5, (h + parseInt(textSize, 10)) * 0.5);
	c.stroke();
};
export default LinkShape;