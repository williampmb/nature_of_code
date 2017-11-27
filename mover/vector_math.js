// let mover1;
let movers = [];
var moversIniLeng = 5;

function setup(){
  createCanvas(500,500);
  //frameRate(1);
  for(var i = 0 ; i < moversIniLeng ;i++) {
    let mover1 = new Mover();
    movers.push(mover1);

  }
}

function mousePressed(){
  return true;
}

function draw(){
  background(0);

  for(var i = 0 ; i < movers.length;i++){
    let gravity = new PVector(0,0.5);
    //force = mass1*mass2*G/dist(obj1,obj2)
    //force = Cons(mass1*G/dist(obj1,obj2))*mass2
    //Acc = Cons*mass2/mass2;
    //Acc = Cons
    gravity.mult(movers[i].mass);
    movers[i].applyForce(gravity);

    //the way of checking a mouse event in javascript
    //https://www.w3schools.com/js/js_events_examples.asp
    // the way of checking events in p5
    // https://p5js.org/reference/  #events
    // if(mouseIsPressed){
    //   //let wind = new PVector(0.3,0);
    //   //movers[i].applyForce(wind);
    //   let friction = PVector.copyVector(movers[i].velocity);
    //   friction.normalize();
    //   friction.mult(-1);
    //
    //   let cof = 0.1;
    //   friction.mult(cof);
    //
    //   movers[i].applyForce(friction);
    // }
    if(mouseIsPressed){
      let dragForce = PVector.copyVector(movers[i].velocity);
      dragForce.normalize();
      dragForce.mult(-1);

      let cod = 0.003;
      let speed = movers[i].velocity.mag();
      dragForce.mult(cod*speed*speed);

      movers[i].applyForce(dragForce);
    }
    //print(movers[i].velocity);




    movers[i].update();
    movers[i].edges();
    movers[i].show();
  }

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
