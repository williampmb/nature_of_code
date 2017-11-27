class Liquid{
  constructor(x1_, y1,x2, y2, c){
    this.x1 = x1_;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.coeficient = c;
  }

  show(){
    noStroke();
    fill(190);
    rect(this.x1, this.y1, this.x2, this.y2);
  }

  drag(m){
    let speed = m.velocity.mag();
    let dragMag = this.coeficient*speed*speed;
    let dragVec = PVector.copyVector(m.velocity);
    dragVec.mult(-1);
    dragVec.normalize();

    dragVec.mult(dragMag);

    return dragVec;
  }

  contains(m){
    if(m.location.axisX > this.x1 && m.location.axisX < this.x1 + this.x2 &&
       m.location.axisY > this.y1 && m.location.axisY < this.y1 + this.y2){
            return true;
          }else{
            return false;
          }
  }

}
