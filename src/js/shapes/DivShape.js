import {mxUtils, mxConstants, mxShape} from '../mxExport.js';

function mxShapeMockupGroup(bounds, fill, stroke, strokewidth)
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
mxUtils.extend(mxShapeMockupGroup, mxShape);

mxShapeMockupGroup.prototype.cst = {
		MAIN_TEXT : 'mainText',
		TEXT_SIZE : 'textSize',
		TEXT_COLOR : 'textColor',
		FILL_COLOR2 : 'fillColor2',
		SHAPE_GROUP : 'DivContainer'
};

/**
 * Function: paintVertexShape
 * 
 * Paints the vertex shape.
 */
mxShapeMockupGroup.prototype.paintVertexShape = function(c, x, y, w, h)
{
	var groupString = mxUtils.getValue(this.style, mxShapeMockupGroup.prototype.cst.MAIN_TEXT, 'Group').toString();
	var fontSize = mxUtils.getValue(this.style, mxShapeMockupGroup.prototype.cst.TEXT_SIZE, 17);

	var textWidth = mxUtils.getSizeForString(groupString, fontSize, mxConstants.DEFAULT_FONTFAMILY).width;

	if (textWidth === 0)
	{
		textWidth = Math.max(80, textWidth);
	}

	c.translate(x, y);

	w = Math.max(w, textWidth + 15);
	h = Math.max(h, fontSize + 10);

	this.background(c, w, h, textWidth, fontSize);
	c.setShadow(false);
	this.foreground(c, w, h, textWidth, fontSize);
	this.buttonText(c, w, h, groupString, fontSize);
};

mxShapeMockupGroup.prototype.background = function(c, w, h, textWidth, fontSize)
{
	c.roundrect(0, fontSize * 0.5, w, h - fontSize * 0.5, 5, 5);
	c.fillAndStroke();
};

mxShapeMockupGroup.prototype.foreground = function(c, w, h, textWidth, fontSize)
{
	var fillColor = mxUtils.getValue(this.style, mxShapeMockupGroup.prototype.cst.FILL_COLOR2, 'transparent');
	c.setFillColor(fillColor);
	c.roundrect(3, 0, textWidth + 6, fontSize * 1.5, fontSize * 0.25, fontSize * 0.25);
	c.fill();
};

mxShapeMockupGroup.prototype.buttonText = function(c, w, h, textString, fontSize)
{
	var fontColor = mxUtils.getValue(this.style, mxShapeMockupGroup.prototype.cst.TEXT_COLOR, 'grey');
	c.setFontColor(fontColor);
	c.setFontSize(fontSize);
	c.text(0, fontSize*0.25, 0, 0, textString, mxConstants.ALIGN_LEFT, mxConstants.ALIGN_TOP, 0, null, 0, 0, 0);
};

export default mxShapeMockupGroup;