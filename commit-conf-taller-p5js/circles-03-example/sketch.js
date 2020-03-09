let number = 0;
let delta = 1;
let mic;

function setup() {
  createCanvas(window.screen.width, window.screen.height);
  userStartAudio();
  background(125);
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  if (mouseIsPressed) {
    number += delta;
    if (number > 254) { delta = -1; }
    if (number < 1) { delta = 1; }
  }

  let vol = mic.getLevel();
  let ellipseWidth = number + vol*1000;

  fill(number);
  ellipse(mouseX, mouseY, ellipseWidth, ellipseWidth);
}