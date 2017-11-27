class Mover{
  constructor(){
    //this.location = new PVector(random(width), height/2);
    this.location = new PVector(random(width), 0);
    this.velocity = new PVector(0.1,0.1);
    this.acceleration = new PVector(0,0);
    this.mass = random(0.5,3);
    //p5.Vector from API
    // this.location = createVector(width/2, height/2);
    // this.velocity = createVector(width/2,height/2);
    // this.acceleration = createVector(0,0);
  }

  update(){
    // let mouse = createVector(mouseX,mouseY);
    // let mouse = new PVector(mouseX,mouseY);
    // mouse.sub(this.location);
    // mouse.setMag(0.1);

    //this.acceleration = p5.Vector.random2D();
    //this.acceleration = mouse;
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
    //this.velocity.limit(5);
  }

  //Newton's 2nd law with mass
  applyForce(force){
    let result = PVector.div(force,this.mass);
    this.acceleration.add(result);
  }

  edges(){
    if(this.location.axisX > width)  {
      this.location.axisX = width;
      this.velocity.axisX *= -1;
    }
    if(this.location.axisX < 0 )  {
      this.location.axisX = 0;
      this.velocity.axisX *= -1;
    }
    //if(this.location.axisX < 0)      this.location.axisX = width;
    if(this.location.axisY > height){
       this.location.axisY = height;
       this.velocity.axisY *= -1;
    }

    if(this.location.axisY < 0){
       this.location.axisY = 0;
       this.velocity.axisY *= -1;
    }
    //if(this.location.axisY < 0)      this.location.axisY = height;
  }

  show(){
    stroke(0);
    strokeWeight(2);
    fill(170);
    ellipse(this.location.axisX, this.location.axisY, this.mass*20, this.mass*20);
  }

}
