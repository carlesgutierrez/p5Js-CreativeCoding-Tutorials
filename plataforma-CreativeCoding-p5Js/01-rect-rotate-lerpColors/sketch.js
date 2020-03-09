let sizeRect;
let posX;
let posY;
let xoff;
let myColor1;
let myColor2;

function setup() {
  createCanvas(500, 500);

  sizeRect = 100;
  posX = 100;
  posY = height*0.5;
  xoff = 0.0;
  
  myColor1 = color(92, 79, 227);
  myColor2 = color(255, 234, 15);
  
  background(10, 255);
  rectMode(CENTER);

}

function draw() {
  background(10, 3);

  posX = posX + 1;
  if (posX > width) {
    posX = 0;
  }
  
  xoff = xoff +0.03;
  posY = noise(xoff)*height;
  sizeRect = 100 + sin(frameCount * 0.01) * 200;
  
  let nuevoColor = lerpColor(myColor1, myColor2, sin(frameCount * 0.1));  
  stroke(nuevoColor);
  strokeWeight(2);
  translate(mouseX, mouseY);
  rotate(frameCount*0.1);
  
  
  noFill();
  rect(0, 0, sizeRect, sizeRect)
  
  
  //if(keyIsPressed){
   // background(10, 255);
 // }
  
 
}


function keyRelease(){
 //LO QUE QUEREMOS QUE OCURRA SOLO UNA VEZ AL KEY RELESE
}

function keyPressed(){
    background(10, 255);
}