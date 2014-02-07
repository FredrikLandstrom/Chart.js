# Chart.js refactoring proposal #

Chart.js is a wonderful library allowing front-end coders to create a limited number of types of charts using HTML5 canvas elements and Javascript. It has spawned a devoted community and, as of this writing, has 1,996 forks on GitHub. There have been repeated requests to merge many of these libraries with the main branch, but nnnick, the original creator, has been busy performing a refactor which will allow easier extension of the main library.

I largely agree with this approach. However, it has been four months since we last heard from him, and I propose that the Chart.js community undertake the refactor instead. (Nnnick, if you're listening, please chime in). Once we have built an object-oriented version of Chart.js that is reverse-compatible with the original library, we can begin to build in our own favorite features, either through pull-requests or as extensions (would like to get some feedback here). Because we will be greatly extending the capabilities of Chart.js, it would probably be useful to create dedicated website for API documentation.

## Design pattern for OO Chart.js ##

Here is where I need some feedback from veteran JS coders. 

We would organize a sequence of increasingly specific ChartElement objects. At the most basic level, the object would simply have an X and Y position and a color as properties. All classes would also have a draw() method, which would specify how the object is actually drawn on the canvas (relative to the X and Y coordinates). Everything drawn would inherit this class, directly or indirectly: axes, lines, datapoints, bars, etc.

A common property for "axial" (X-Y) charts would be properties specifying the X and Y position relative to the graph origin (rather than the canvas), with instructions for interconverting them called at instantiation. 

The advantage of this method is that is can be easily extended without interpersing new code into the existing codebase. For example, to add a second Y-axis, you just create a child class of the existing Y-axis class, and change the default X positions from 0 to something else.

##Community Standards##

There are several ways of creating classes in JS and it would be good to agree on a common format. Here is the one that makes the most sense to me:
 
    function createDrawingObject(ctx) {
        var that = {
            xPos = 0,
            yPos = 0,
            color = #000000,
            draw() = function() {
            ctx.beginPath(that.xPos, that.yPos);
                ctx.stroke();
                ctx.fill();
            };
        return that;
    }	

    function createAxialObject(ctx) {
    	var that = createDrawingObject(ctx);
		var that.chartXPos = ...
		return that;
	}



We want everything to work in raw JS, no (other) libraries.

This is not the place to submit pull requests for your awesome Chart.js fork. At least not until we get it refactored.
