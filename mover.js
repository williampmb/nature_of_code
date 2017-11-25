class Mover{
  constructor(){
    this.location = new PVector(3/2, 3/2);
    this.velocity = new PVector(1,3);
  }

  update(){
  this.location.add(this.velocity);
  }

  edges(){
    if(this.location.axisX > width)  this.location.axisX  = 0;
    if(this.location.axisX < 0)      this.location.axisX = width;
    if(this.location.axisY > height) this.location.axisY = 0;
    if(this.location.axisY < 0)      this.location.axisY = height;
  }

  show(){
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.location.axisX, this.location.axisY, 48, 48);
  }
}
