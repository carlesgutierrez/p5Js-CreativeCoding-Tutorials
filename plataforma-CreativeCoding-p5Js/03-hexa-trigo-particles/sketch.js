let angle;
let radius1 = 100;
let radius2 = 100;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background(220, 10);

  translate(width / 2, height / 2);

drawLifeFlower();


}

function drawLifeFlower() {
  let circleResolution = 6; //map(mouseX, 0, width, 3, 10);
  angle = 360 / circleResolution;

  //beginShape();
  for (let i = 0; i <= circleResolution; i++) {
    //for (var i = 0; i <= circleResolution; i++) {
    var x = cos(angle * i) * radius1;
    var y = sin(angle * i) * radius1;
    strokeWeight(5);
    point(x, y);

    //if(i==0)
    drawCircle(x, y);

    //vertex(x,y);
  }
  //endShape();
}

function drawCircle(_x, _y) {
  stroke(0);

  push();
  translate(_x, _y);
  strokeWeight(mouseY / 10);
  //for (var i = 0; i <= circleResolution; i++) {
  var x = cos(frameCount * 2) * radius2;
  var y = sin(frameCount * 2) * radius2;
  point(x, y);
  //console.log("x" + str(x) + " y = " + str(y));
  //}
  pop();
}