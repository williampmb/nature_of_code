//review array in javascript

// var words = ["love", "seattle","uwlax", "Washington"];
// var nums = [100,25,12,72];
// var index =0;
let bubbles = [];
// var num =23;

var widthScreen =500;
var heightScreen = 500;

// it could use mouseDragged(){}
function mousePressed(){
  let r = random(10,50);
  //mouseX and mouseY from p5.js
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function setup(){
  createCanvas(widthScreen,heightScreen);
  // for( let i = 0 ; i<2000;i++){
  //   let x = random(width);
  //   let y = random(height);
  //   let r = random(10,40);
  //   // bubbles[i] = new Bubble(random(10,300),random(10,500),random(10,50));
  //   bubbles[i] = new Bubble(x,y,r);
  // }

	background(0);
}


function draw(){
  background(0);

  //-----------
  // ellipse(width/2, height/2, num,num);
  // ellipse(50, 50, nums[1],nums[1]);
  // fill(255);
  // textSize(32);
  // text(words[index], 100,100);
  //-----------
  // for( var i = 0 ; i < nums.length; i++){
  //   stroke(255);
  //   noFill();
  //   ellipse(100+ 50*i, 50+50*i, nums[i],nums[i]);
  //   ellipse(width/2, height/2, nums[i],nums[i]);
  // }
  //-----------
  for( let i = 0 ; i<bubbles.length;i++){
    bubbles[i].move();
    bubbles[i].show();
  }

}

//mousePressed event
// function mousePressed(){
//   index = index +1;
//   if(index == words.length) index = 0;
// }

class Bubble{
	constructor(x,y,r){
		this.location = new PVector(x,y);
		this.velocity = new PVector(random(2,10),random(2,10));
		this.r = r
	}

	move(){
		// this.location.axisX = this.location.axisX + this.velocity.axisX;
		// if(this.location.axisX > widthScreen || this.location.axisX  <0) this.velocity.axisX *=-1;
		// this.location.axisY = this.location.axisY + this.velocity.axisY;
		// if(this.location.axisY > heightScreen || this.location.axisY  <0) this.velocity.axisY *=-1;
    this.location.axisX = this.location.axisX + random(-5,5);
    this.location.axisY = this.location.axisY + random(-5,5);
	}

	show(){
		stroke(255);
		strokeWeight(4);
		noFill();
    // noStroke();
    // fill(255,10);
		ellipse(this.location.axisX,this.location.axisY,this.r*2);
	}
}

class PVector{
	constructor(x,y){
		this.axisX = x;
		this.axisY = y;
	}
}
