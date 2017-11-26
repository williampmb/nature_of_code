class Mover{
  constructor(){
    // this.location = new PVector(width/2, height/2);
    // this.velocity = new PVector(width/2,height/2);
    // this.acceleration = new PVector(0,0);

    //p5.Vector from API
    this.location = createVector(width/2, height/2);
    this.velocity = createVector(width/2,height/2);
    this.acceleration = createVector(0,0);
  }

  update(){
    let mouse = createVector(mouseX,mouseY);
    mouse.sub(this.location);
    mouse.setMag(0.1);

    //this.acceleration = p5.Vector.random2D();
    this.acceleration = mouse;

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.velocity.limit(5);
  }

  edges(){
    if(this.location.x > width)  this.location.x  = 0;
    if(this.location.x < 0)      this.location.x = width;
    if(this.location.y > height) this.location.y = 0;
    if(this.location.y < 0)      this.location.y = height;
  }

  show(){
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.location.x, this.location.y, 48, 48);
  }
}
