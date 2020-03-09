let xoff = 0.0;
let mic;
let bAudioReact = true;
let xoffDelta = 0.0;

function setup() {

  createCanvas(windowWidth, windowHeight);

  if(bAudioReact){
    colorMode(HSB, 100);
    userStartAudio();
    mic = new p5.AudioIn();
    mic.start();
  }
}

function draw() {

strokeWeight(10 + mouseX / 20);

  if(bAudioReact){
    alphaBk = map(mouseY, 0, width, 0, 50);
    background(0, 0, 100, alphaBk);
    let vol = mic.getLevel();
    //console.log(vol);
    mapHueColor = map(vol, 0, 0.2, 10, 255);
    stroke(mapHueColor, 100, 100);
    let mapVol4xOff = map(vol, 0, 0.5, 0.1, 2);
    xoff = xoffDelta + mapVol4xOff;
    if(mapVol4xOff < 1){
      xoffDelta += 0.01;
    }else xoffDelta = 0;
  }else{
    background(255, (mouseY/height)*height); 
    xoff = xoff + mouseX/width; 
  }

    let n = noise(xoff) * width;
    line(n, 0, n, height);
}