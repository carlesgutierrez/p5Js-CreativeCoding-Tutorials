let posDot1, posDot2, last_posDot1, last_posDot2;

let angle = 0;
let radious1 = 0;
let radious2 = 0;
let noiseDelta = 0;

//Colors
let colorBk;
let alphaBk = 0;
//let myColors = [];

//-----------------------------------------------------
function setup() {
  createCanvas(1024, 768);

  //2 random points moving in a noisy radius
  posDot1 = createVector(0, 0, 0);
  posDot2 = createVector(0, 0, 0);
  last_posDot1 = createVector(0, 0, 0);
  last_posDot2 = createVector(0, 0, 0);

  //Radiuos movements
  marginRad1 = width * 0.5;
  marginRad2 = width * 0.5;
  rotationSpeed = 0.05;
  console.log("rotationSpeed = " +str(rotationSpeed));


  //setup colors
  colorBk = color(10, 10, 10, alphaBk);
  //myColors[0] = color(255, 0, 0);
  //myColors[1] = color(255, 141, 0);
  //myColors[2] = color(255, 247, 0);
  //myColors[3] = color(255, 85, 0);
  //myColors[4] = color(255, 251, 167);

  
  background(10, 10, 10, 255);
}


//-----------------------------------------------------
function update() {
  angle += rotationSpeed;

  let cosine, sine, tangent;
  let marginRad1 = width * 0.5;
  let marginRad2 = width * 0.5;
  let marginRads = abs(width * 0.5 - mouseX) * 0.5;
  //console.log("marginRads = " +str(marginRads));

  let rad1 = radious1 + marginRads * 2;
  let rad2 = radious2 + marginRads * 0.5;

  noiseDelta += sin(frameCount * 0.001) * 0.01;

  //save last values . just equals would make a ref value so lets do ot per values x,y
  last_posDot1.x = posDot1.x;
  last_posDot1.y = posDot1.y;
  last_posDot2.x = posDot2.x;
  last_posDot2.y = posDot2.y;

  let myangle = angle % TWO_PI;

  //here we get the sine and cosine values for the angle... TODO myAngle?
  cosine = cos(angle);
  sine = sin(angle);
  //console.log(sine);
  //console.log(angle);

  posDot1.x = cosine * rad1 //* noise(noiseDelta);
  posDot1.y = sine * rad1 //* noise(noiseDelta); //here we set the cyan circle position

  posDot2.x = cosine * rad2 //* noise(noiseDelta);
  posDot2.y = sine * rad2 //* noise(noiseDelta);
  
  //console.log(posDot1.x);

}

//-----------------------------------------------------
function draw() {

  update();

  //fill(colorBk);
  //rect(0,0,width, height);
  background(colorBk);

  translate(width * 0.5, height * 0.5);

  let grayColor;
  let alphaGrayColor;
  grayColor = map(mouseX, 0, width, 0, 255);
  alphaGrayColor = map(mouseY, 0, height, 200, 100);
  let invertColor = 255 - grayColor;

  push();
  //fill(myColors[0], 250);
  fill(grayColor, alphaGrayColor); //(frameCount*0.01)%255
  stroke(invertColor, alphaGrayColor);

  beginShape(QUADS); //QUAD_STRIP make something wrong
  vertex(last_posDot1.x, last_posDot1.y);
  vertex(posDot1.x, posDot1.y);
  vertex(posDot2.x, posDot2.y);
  vertex(last_posDot2.x, last_posDot2.y);
  endShape();
  pop();
  
  fill(255);
  point(last_posDot1.x, last_posDot1.y);
  point(posDot1.x, posDot1.y);
  point(posDot2.x, posDot2.y);
  point(last_posDot2.x, last_posDot2.y);
  

}

//-----------------------------------------------------
function keyReleased(){
  background(10, 10, 10, 255);
}