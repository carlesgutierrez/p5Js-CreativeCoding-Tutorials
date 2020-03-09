
let mic;
let rotCounter = 0.0;
let bAudioReact = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(255);
  strokeWeight(3);
  stroke(0, 25);

  if(bAudioReact){
    colorMode(HSB, 100);
    userStartAudio();
    mic = new p5.AudioIn();
    mic.start();
  }
}

function update(){
    let vol = mic.getLevel();
    //console.log(vol);
    let mapVolRot = map(vol, 0, 0.3, 0.01, 0.1);
    if(mapVolRot > 0.05) rotCounter += mapVolRot;
}

function draw() {
  if(bAudioReact)update();

  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(width / 2, height / 2);
    rotate(rotCounter);

    var circleResolution = int(map(mouseY + 100, 0, height, 3, 10));
    var radius = mouseX - width / 2;
    var angle = TAU / circleResolution;

    beginShape();
    for (var i = 0; i <= circleResolution; i++) {
      var x = cos(angle * i) * radius;
      var y = sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();

    pop();
  }
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
