let phi = 1.735294; //1.735294117647059; //1.6180339887498; (59/34)
let sizeInitRect = 20;
let angleRot = 60;
let bkColor;


function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  angleMode(DEGREES);
  //colorMode(HSB);
  
  //bkColor = color(10, 10, 10);
}

function draw() {
  background(10, 10);

  sizeInitRect = map(mouseX, 0, width, 10, 50);

  let counterOdds = 0;
  let sizeRectPhi = sizeInitRect;
  for (let i = 0; i < 6; i++) {
    sizeRectPhi = sizeRectPhi * phi;
    if (counterOdds % 2 == 0)
      drawHexaRects(i, sizeRectPhi, 0, angleRot);
    else
      drawHexaRects(i, sizeRectPhi, 90, angleRot);
    counterOdds++;
  }


}

function drawHexaRects(_id, _sizeRect, _initAngle, _angleDelta) {
  push();

  noFill();
  stroke(255, 255, 255, 100);
  strokeWeight(_id);

  translate(width * 0.5, height * 0.5);
  //Lets draw 3 rects with angle of the 60 degrees

  rotate(_initAngle);
  rect(0, 0, _sizeRect, _sizeRect * phi);

  rotate(_angleDelta);
  rect(0, 0, _sizeRect, _sizeRect * phi);

  rotate(_angleDelta);
  rect(0, 0, _sizeRect, _sizeRect * phi);

  //rotate(_angle);
  //rect(0, 0, sizeRect, sizeRect * phi);


  //ellipse(0,0, sizeRect);

  pop();


}