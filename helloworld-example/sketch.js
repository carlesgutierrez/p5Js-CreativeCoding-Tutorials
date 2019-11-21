fillNumberInicial = 125;
fillNumber = 0;
fillDelta = 1;
screenWith = window.screen.width;
screenHeight = window.screen.height;
ellipseWidthMax = 255;
ellipseWidth = 0;
ellipseDelta = 1;

function setup() {
  createCanvas(screenWith, screenHeight);
  background(fillNumberInicial);
}

function draw() {
  if (mouseIsPressed) {

    fillNumber=fillNumber+fillDelta;
    if (fillNumber > 254) {
      fillDelta = -1;
    }
    if (fillNumber < 1) {
      fillDelta = 1;
    }

    ellipseWidth=ellipseWidth+ellipseDelta;
    if (ellipseWidth > ellipseWidthMax) {
      ellipseDelta = -1;
    }
    if (ellipseWidth < 1) {
      ellipseDelta = 1;
    }
  }
  fill(fillNumber);
  ellipse(mouseX, mouseY, ellipseWidth, ellipseWidth);
}