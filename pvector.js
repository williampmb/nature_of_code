var count=0;
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

	div(scale){
		this.axisX /= scale;
		this.axisY /= scale;
	}



  mag(){
    return Math.sqrt(this.axisX * this.axisX + this.axisY * this.axisY);
  }

  normalize(){
      let magnitude = this.mag();
			if(magnitude != 0){
				this.axisX /= magnitude;
	      this.axisY /= magnitude;
			}
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

PVector.div = function(vector, scalar){
		let result = new PVector(vector.axisX/scalar, vector.axisY/scalar);
		return result;
}

PVector.copyVector = function(vector){
		let result = new PVector(vector.axisX, vector.axisY);
		return result;
}
