 let sizeCircle = 60;//"asdasd"
 let valueSin = 0;

 //deltaTime
 //framecount cout[]

 let posX,posY;

function setup() {
  	createCanvas(window.screen.width, window.screen.height);

	posX = 0;
	posY = height*0.5;
}

function draw() {
  	background(200, 200, 100, 10);

	valueSin = sin(frameCount*0.4)
	console.log(valueSin);
	sizeCircle = valueSin*100;

	posX = posX+1;
	posY = posY+random(-1,+1)*10;
	if(posX > width)posX = 0;
	//posX += 1;
	//posY = 0;

	//ellipse(mouseX, mouseY, sizeCircle, sizeCircle);
	rect(posX, posY, sizeCircle, sizeCircle);
}