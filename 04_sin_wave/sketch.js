let mySinLines;// Declare object

function setup() {
    //createCanvas(710, 400);
    createCanvas(window.screen.width, window.screen.height);

    mySinLines = new SinLines();
    mySinLines.setup();
}

function draw() {
    background(0);
    
    mySinLines.draw();
}

//sublines of HLine
class SinLines {

  constructor() {
    //dash intermitente mod 2
    //let dashCounter;

    this.xspacing = 16; // Distance between each horizontal location
    this.w; // Width of entire wave
    this.theta = 0.0; // Start angle at 0
    this.amplitude = 75.0; // Height of wave
    this.period = 500.0; // How many pixels before the wave repeats
    this.dx; // Value for incrementing x
    this.yvalues; // Using an array to store height values for the wave
  }

  setup() {
    this.w = width + 16;
    this.dx = (TWO_PI / this.period) * this.xspacing;
    this.yvalues = new Array(floor(this.w / this.xspacing));
  }

  draw() {
    this.calcWave();
    this.renderWave();
  }

  calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    this.theta += 0.02;

    // For every x value, calculate a y value with sine function
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x) * this.amplitude;
      x += this.dx;
    }
  }

  renderWave() {
    noStroke();
    fill(255);
    // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < this.yvalues.length; x++) {
      ellipse(x * this.xspacing, height / 2 + this.yvalues[x], 16, 16);
    }
  }


/*
     void drawDashedLine(int i){
       
       //noFill();
       //line dash 
         if(lineType==1){
             fill(color1);
             stroke(color1);
         }
         else if(lineType ==2){
             fill(color2);
             stroke(color2);
         }
         else if(lineType ==3){
             fill(color3);
             stroke(color3);
         }else {
             fill(color3);
             stroke(grayColor);
         }
         
         //if(i>0 && (i%2==0))line(xvalues[i-1],yPos, xvalues[i], yPos);
         //if(i>0)line(xvalues[i-1],yPos, xvalues[i], yPos);
     
         //creative rects
         //if(i>0 && (i%2==0))rect(xvalues[i-1],yPos, xvalues[i] - xvalues[i-1],yPos, hRect);
         //if(i>0 && (i%2==0))rect(xvalues[i-1],yPos, xvalues[i] - xvalues[i-1], yPos, 100);
         
         //fixed h rect
         if(i>0 && (i%2==0))rect(xvalues[i-1],yPos, xvalues[i] - xvalues[i-1], hRect);
    */      
         //rotating cube
         /*
         pushMatrix();
         if(i>0 && (i%2==0))translate(-xvalues[i]+(xvalues[i] - xvalues[i-1])*.5,-yPos); //width*.5,height*.5);
         if(i>0 && (i%2==0))rotate(theta*.001);//dx);
         if(i>0 && (i%2==0))translate(xvalues[i]+(xvalues[i] - xvalues[i-1])*.5,yPos); //width*.5,height*.5);
         if(i>0 && (i%2==0))rect(xvalues[i-1],yPos, xvalues[i] - xvalues[i-1], hRect);
         popMatrix();
         */
         
    // }

}