let mover1;

function setup(){
  createCanvas(500,500);
  mover1 = new Mover();
}

function draw(){
  background(0);

   mover1.update();
   mover1.edges();
   mover1.show();

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
