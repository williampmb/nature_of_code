let m;

function setup(){
  createCanvas(500,500);
  m = new Mover();
}

function draw(){
  background(255);

  m.update();
  m.edges();
  m.show();

  // background(255);
  // strokeWeight(2);
  // stroke(0);
  // noFill();
  //
  // translate(width/2, height/2);
  // ellipse(0,0,4,4);
  //
  // let mouse = new PVector(mouseX,mouseY);
  // let center = new PVector(width/2, height/2);
  //
  // mouse.sub(center);


  //mouse.mult(2);
  //mouse.normalize();
  //print(mouse.mag());
  //mouse.mult(100);
  // mouse.setMag(10);
  //
  // line(0, 0, mouse.axisX, mouse.axisY);
}
