
var t = 0;

function setup(){
  createCanvas(500,500);
  //frameRate(10);
}

function draw(){
  background(0);
  fill(255);
  t += 0.01;
  var x = noise(t);
  var y = noise(t);
  x = map(x,0,1,0,width);
  y = map(y,0,1,0,height);

  //var y = random(width);

  ellipse(x,y,40,40);
}
