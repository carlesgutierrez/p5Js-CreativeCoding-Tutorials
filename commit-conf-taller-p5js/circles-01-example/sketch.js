function setup() {
  createCanvas(window.screen.width, window.screen.height);
  background(125);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(85)
  }
  ellipse(mouseX, mouseY, 125, 125);
}