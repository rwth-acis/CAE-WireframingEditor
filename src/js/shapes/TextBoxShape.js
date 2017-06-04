import {mxShape, mxConstants, mxUtils} from '../misc/mxExport';
function TextBoxShape(bounds, fill, stroke, strokewidth)
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
mxUtils.extend(TextBoxShape, mxShape);

TextBoxShape.prototype.cst = {
		MAIN_TEXT : 'mainText',
		TEXT_COLOR : 'textColor',
		TEXT_SIZE : 'textSize',
		SHAPE : 'textbox'
};

/**
 * Function: paintVertexShape
 * 
 * Paints the vertex shape.
 */
TextBoxShape.prototype.paintVertexShape = function(c, x, y, w, h)
{
	c.translate(x, y);
	this.background(c, w, h);
	c.setShadow(false);
	this.foreground(c, w, h);
};

TextBoxShape.prototype.background = function(c, w, h)
{
	c.rect(0, 0, w, h);
	c.fillAndStroke();
};

TextBoxShape.prototype.foreground = function(c, w, h)
{
	var mainText = mxUtils.getValue(this.style, TextBoxShape.prototype.cst.MAIN_TEXT, 'Some Text...').toString().split(',');
	var fontColor = mxUtils.getValue(this.style, TextBoxShape.prototype.cst.TEXT_COLOR, '#666666');
	var fontSize = mxUtils.getValue(this.style, TextBoxShape.prototype.cst.TEXT_SIZE, '17');

	c.setFontColor(fontColor);
	c.setFontSize(fontSize);

	for (var i = 0; i < mainText.length; i++)
	{
		c.text(5, i * fontSize * 1.5 + fontSize * 0.75, 0, 0, mainText[i], mxConstants.ALIGN_LEFT, mxConstants.ALIGN_MIDDLE, 0, null, 0, 0, 0);
	}
};
export default TextBoxShape;