let myLines = []; 
let totalLines = 150;
let colorHueInit = 125;

function setup() {
  createCanvas(window.screen.width, window.screen.height);
  colorMode(HSB, 100);

  colorHueInit = random(0, 255);
   
  for (let i = 0; i < totalLines; i++) {
    myLines[i] = new Line(); 
  } 
}

function draw() {

  background(50, 10, 10);

  for (let i = 0; i < totalLines; i++) {
  	myLines[i].move();
  	myLines[i].display();
  }
 
}

class Line{
	 
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50, 150);
    this.speedX = random(0, 3);
    this.speedY = random(0, 3);
    this.colorH = colorHueInit + random(-5, 5);
    this.colorS = 100 + random(-50, 50);
    this.colorV = 100 + random(-50, 50);
    this.weight = random(5, 15);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x > width + this.diameter){
    	this.x = -this.diameter;
    }
    if(this.y > height + this.diameter){
		  this.y = -this.diameter;
    }
  }

  display() {
  	let d = float(dist(mouseX, mouseY, this.x+this.diameter*0.5, this.y));
  	if (d < 100) {
      strokeWeight(this.weight + d);
    } else {
      strokeWeight(this.weight);
    } 
    this.colorH += 1;
    if (this.colorH > 100) { this.colorH = 0; }
  	stroke(this.colorH, this.colorS, this.colorV, 90);
    line(this.x, this.y, this.x+this.diameter, this.y);
  }
	
}