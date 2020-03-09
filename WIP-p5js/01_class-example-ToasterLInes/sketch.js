//let myLine;
let myLines = []; 
let  totalLines = 60;
let colorHueInit = 80;

function setup() {
  //createCanvas(640, 480);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
   
  //myLine = new Diago(); 
  for (let i = 0; i < totalLines; i++) {
    myLines[i] = new Diago(); 
  }
 
}

function draw() {

background(50, 10, 10);

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255, 255, 255);
  }

  for (let i = 0; i < totalLines; i++) {
  	myLines[i].move();
  	myLines[i].display();
  }

  
}

//Diagona line with other animations
class Diago{
	 
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50, 100);
    this.speed = random(1, 5);;
    this.colorH = colorHueInit + random(-2, 2);
    this.colorS = 50 + random(-10, 10);
    this.colorV = 100;//colorHueInit + random(-10, 10);
  }

  move() {
    this.x += this.speed; //random(-this.speed, this.speed);
    this.y += this.speed; //random(-this.speed, this.speed);
    if(this.x > width + this.diameter){
    	this.x = -this.diameter;
    }
    if(this.y > height + this.diameter){
		this.y = -this.diameter;
    }
    //console.log('position line x =' +str(this.x));
    //console.log('position line y =' +str(this.y));
  }

  display() {
  	let d = float(dist(mouseX, mouseY, this.x+this.diameter*.5, this.y));
  	if(d<100)strokeWeight(5 + d);
    else strokeWeight(5);
  	stroke(this.colorH, this.colorS, this.colorV, 90);
    line(this.x, this.y, this.x+this.diameter, this.y);
  }

	
}