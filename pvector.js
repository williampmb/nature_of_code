class PVector{
	constructor(x,y){
		this.axisX = x;
		this.axisY = y;
	}

  add(v){
    this.axisX += v.axisX;
    this.axisY += v.axisY;
  }

  sub(v){
    this.axisX -= v.axisX;
    this.axisY -= v.axisY;
  }

  mult(scale){
    this.axisX *= scale;
    this.axisY *= scale;
  }

  mag(){
    return Math.sqrt(this.axisX * this.axisX + this.axisY * this.axisY);
  }

  normalize(){
      let magnitude = this.mag();
      this.axisX /= magnitude;
      this.axisY /= magnitude;
  }

  setMag(value){
    this.normalize();
    this.mult(value);
  }

	limit(value){
		if(this.axisX >= value) this.axisX = value;
		if(this.axisY >= value) this.axisY = value;
	}
}
