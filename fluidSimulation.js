var liquid;
var movers= [];

function setup(){
  createCanvas(500,500);

  liquid = new Liquid(0, height/2, width, height/2, 0.1);
  for(let i = 0 ; i < 10; i++){
    movers[i] = new Mover();
  }
}

function draw(){
  background(255);
  liquid.show();

  for(var i = 0 ; i < movers.length; i++){
    if(liquid.contains(movers[i])){
        let dragForce = liquid.drag(movers[i]);
        movers[i].applyForce(dragForce);
    }

    let m = 0.1*movers[i].mass;
    let gravity = new PVector(0,m);
    movers[i].applyForce(gravity);
    movers[i].edges();
    movers[i].update();
    movers[i].show();

  }
}
