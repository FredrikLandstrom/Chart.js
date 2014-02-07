//some example of drawing with objects

function createDrawingObject(ctx) {
    var that = {
        xPos: 0,
        yPos: 0,
        color: 'black',
        draw: function() {
        ctx.beginPath(that.xPos, that.yPos);
            ctx.stroke();
            ctx.fill();
        },
	}		
    return that;
}

function createXAxis(ctx) {
	var that = createDrawingObject(ctx);
	that.length = 100;
	that.draw = function() {
		ctx.beginPath();
		ctx.strokeStyle = that.color;
		ctx.moveTo(that.xPos, that.yPos);
		ctx.lineTo(that.xPos + that.length, that.yPos);
		ctx.stroke();
	}
	return that;
}

function createCircle(ctx) {
	var that = createDrawingObject(ctx);
	that.radius = 100;
	that.draw = function() {
		ctx.beginPath();
		ctx.arc(that.xPos, that.yPos, that.radius, 0, 2 * Math.PI, 'clockwise');
		ctx.strokeStyle = that.color;
		ctx.stroke();
	}
	return that;
}