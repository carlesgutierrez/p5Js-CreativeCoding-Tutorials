
let myArrayPapallona = [];
let numPapallones = 10;

function setup() {
  	createCanvas(window.screen.width, window.screen.height);

  	for(let i = 0; i < numPapallones; i++){
  		myArrayPapallona[i] = new papallona();
  	}
}

function draw() {
  	background(200, 200, 100, 0); //10

  	for(let i = 0; i < numPapallones; i++){
  		myArrayPapallona[i].update();
  		myArrayPapallona[i].display();
  	}

}


class papallona{

	constructor(){
		this.x = random(width);
	    this.y = random(height);
	    this.size = random(50, 100);
	    this.valueSin = 0;
	}

	update(){
		this.x = this.x+1;
		this.y = this.y+random(-1,+1)*10;
		if(this.x > width)this.x = 0;

		this.valueSin = sin(frameCount*0.4)
		//console.log(this.valueSin);
		this.size = this.valueSin*100;
	}

	display(){
		rect(this.x, this.y, this.size, this.size);
	}

}