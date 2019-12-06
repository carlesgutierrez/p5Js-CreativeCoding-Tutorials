var b=0;
var c=0;
var pixelsize=1;
 
function setup() {
 size(800,1000); 
 smooth();
 noStroke();
  
 
 max_distance = dist(0,0,width,height);
 }
 
 function draw(){
  background(50);
 
    for(var b=0; b <= width;b+=5){
 
    for(var c=0; c<= width;c+=50){
    
      var size = dist(mouseX,mouseY,b,c);
 
      size = size/max_distance*60;
 
      ellipse(b,c, size, size);
  }
  }
 
}