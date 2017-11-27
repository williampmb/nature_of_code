let mover1;

function setup(){
  createCanvas(500,500);
  mover1 = new Mover();
}

function mousePressed(){
  return true;
}

function draw(){
  background(0);

  let gravity = new PVector(0,0.5);
  mover1.applyForce(gravity);

  //the way of checking a mouse event in javascript
  //https://www.w3schools.com/js/js_events_examples.asp
  // the way of checking events in p5
  // https://p5js.org/reference/  #events
  if(mouseIsPressed){
    let wind = new PVector(0.3,0);
    mover1.applyForce(wind);
  }

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
