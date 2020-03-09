var endY;
var strW_bk;
var maxColorValue;
var scaleSpaceLines = 3;

function setup() {
  
	createCanvas(640, 480);
	background(100, 100, 100);
	//background(255, 255, 255);

	//init vars
	endY = height;
	strW_bk = 3;

  	//colorMode(HSB, 360, 100, 100);
	maxColorValue = 255;

	frameRate(30); 

	//Draw Lines

	drawBkDiagonals();
}

function draw() {

//Draw Circles

	if (mouseIsPressed) {
		var colorRed = (mouseX/width)*maxColorValue;
		var colorGreen = (mouseY/height)*maxColorValue;
		var colorBlue = 100;
		console.log("Fill colorRed = " + colorRed);
		console.log("Fill colorGreen = " + colorGreen);
		console.log("Fill colorBlue = " + colorBlue);
		stroke(maxColorValue, 100, 0); 
	 	fill(maxColorValue, colorGreen, colorBlue);
	} else {
	fill(0,0,0);
	}
	ellipse(mouseX, mouseY, 80, 80);



}

//==============================================

function drawBkDiagonals() {

	console.log("drawBkDiagonals()");

	noFill();

	//////
	var deltaDiagonal = height + height*2;
	var gapY = 30*scaleSpaceLines;
	var initY = -deltaDiagonal;

/*
console.log("initY = " + initY);
console.log("endY = " + endY);
console.log("scaleSpaceLines = " + scaleSpaceLines);
console.log("gapY = " + gapY);
*/

	for (var y = initY; y < endY; y+=gapY) {

		stroke(random(0, 256), random(0, 256), 240);

		strokeWeight(strW_bk);

		line(0, y+deltaDiagonal, width, y);

		//line(0, y, width, y+deltaDiagonal);
		console.log("numlines = " + y);
	}

}

