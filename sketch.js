var x = 100;
var y = 100;
var xspeed = 10;
var yspeed = 10.3;

class PVector{
	var x;
	var y;
	
	PVector(var x1, var y1){
		x = x1;
		y = y1;
	}
}

function setup() {
  createCanvas(640,360);
  background(120);
}

function draw() {
  background(120);
  x = x + xspeed;
  y = y + yspeed;

  if((x>width) || (x<0)){
	xspeed = xspeed *-1;
  }

  if((y>height) || (y<0)){
	yspeed = yspeed * -1;
  }

  stroke(0);
  fill(175);
  ellipse(x,y,16,16);

}
