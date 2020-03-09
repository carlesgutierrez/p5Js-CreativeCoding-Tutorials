let angle = 0;
let largoLinea = 100;
let mic;
let color1;
let color2;
let interColors;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(0);
  
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  
  //colors
  color1 = color("#FFEBAF");
  color2 = color("#616FB0");
}

function update(){
  angle++;
  
} 

function draw() {
  update();
  
  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel()*10;
  interColors = lerpColor(color1, color2, mic.getLevel());
  
  background(220, 0);
  translate(mouseX, mouseY);
  rotate(angle);
  stroke(interColors, 255);
  line(0,0,100+largoLinea*vol, 0);
}