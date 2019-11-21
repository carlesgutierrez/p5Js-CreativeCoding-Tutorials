let xoff = 0.0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(204);
  xoff = xoff + 10;
  let n = noise(xoff) * width;
  line(n, 0, n, height);
}