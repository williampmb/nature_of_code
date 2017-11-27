class Mover{
  constructor(){
    this.location = new PVector(width/2, height/2);
    this.velocity = new PVector(width/2,height/2);
    this.acceleration = new PVector(0,0);

    //p5.Vector from API
    // this.location = createVector(width/2, height/2);
    // this.velocity = createVector(width/2,height/2);
    // this.acceleration = createVector(0,0);
  }

  update(){
    // let mouse = createVector(mouseX,mouseY);
    let mouse = new PVector(mouseX,mouseY);
    mouse.sub(this.location);
    mouse.setMag(0.001);

    //this.acceleration = p5.Vector.random2D();
    this.acceleration = mouse;
    print(this.acceleration);
    this.velocity.add(this.acceleration);
    print(this.velocity);
    this.location.add(this.velocity);
    //print("location: " + this.location.axisX );
    this.velocity.limit(5);
  }

  edges(){
    if(this.location.axisX > width)  this.location.axisX = 0;
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
