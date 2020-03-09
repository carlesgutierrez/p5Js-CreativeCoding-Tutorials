var l = [];
function setup() {
  createCanvas(600, 600);
  for(var i= 0; i<100;i++)
      {
          l[i] = new Lines(random(500));
      }
}

function draw() {
  background(50);
  for(var i= 0; i<l.length;i++)
      {
        l[i].drawLines();
        l[i].moveLines();
      }
  
}

function mousePressed()
{
   save("lines####.jpg"); 
}


function Lines(r)
{
    this.start = createVector(r,0);
  this.end = createVector(r,height);
  this.move = createVector(0.3,0);
  this.drawLines = function()
  {
        
       stroke(r);
        strokeWeight(2);
        line(this.start.x,this.start.y,this.end.x,this.end.y);   
  }
    
  this.moveLines = function()
  {
     this.start.add(this.move);
    this.end.add(this.move);
    this.start.x += random(-5,5);
    this.end.x += random(-5,5);
    
    
  }
}