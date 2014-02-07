//some example of drawing with objects

function createDrawingObject(ctx) {
    var that = {
        xPos: 0,
        yPos: 0,
        color: '#000000;',
        draw: function() {
        ctx.beginPath(that.xPos, that.yPos);
            ctx.stroke();
            ctx.fill();
        },
	}		
    return that;
}

function createLine(ctx) {
	var that = createDrawingObject(ctx);
	that.length = 100;
	that.draw = function() {
		ctx.beginPath();
		ctx.moveTo(that.xPos, that.yPos);
		ctx.lineTo(that.xPos + that.length, that.yPos);
		ctx.stroke();
	}
	return that;
}