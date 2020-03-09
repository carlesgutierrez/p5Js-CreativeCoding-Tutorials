let sizeRect = 100;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220, 0); //
  
  sizeRect = sin(frameCount*0.01)*100;
  
  if(mouseIsPressed){
    //ellipse(mouseX, mouseY, 125, 125);
    rectMode(CENTER);
    rect(mouseX, mouseY, sizeRect, sizeRect);
  }
  
  
}

function keyPressed() {
  background(220, 255); //
  console.log("hola");
}