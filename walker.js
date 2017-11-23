let w;
var widthScreen = 800;
var heightScreen = 600;


function setup(){
  createCanvas(widthScreen,heightScreen);
  w = new Walker(widthScreen/2,heightScreen/2);

  background(255);
}

function draw(){
  w.walk();
  w.step();
}

class Walker{
  constructor(x,y){
    this.axisX = x;
    this.axisY = y;
  }

  walk(){
    var choice = random(1);
    if(choice < 0.4) this.axisX++;
    if(choice < 0.6) this.axisX--;
    if(choice < 0.7) this.axisY++;
    else this.axisY--;
    this.axisX = constrain(this.axisX,0,width-1);
    this.axisY = constrain(this.axisY,0,height-1);
  }

  step(){
    stroke(0);
    point(this.axisX,this.axisY);
  }

}
