var numLines = 360;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(SQUARE);

}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  var circleResolution = int(map(mouseY, 0, height, 2, 80));
  var radius = mouseX - width / 2; //Half Width or height to be able to reach all from the middle.
  var angle = TAU / circleResolution;

  strokeWeight(mouseY / 20);

  for (var i = 0; i <= circleResolution; i++) {
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;
    line(0, 0, x, y);
  }

}

function mousePressed()
{
   save("lines####.jpg"); 
}
