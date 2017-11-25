

let bubble;
let bubble2;
var widthScreen =800;
var heightScreen = 600;

function setup(){
	createCanvas(widthScreen,heightScreen);
	bubble = new Bubble(200,200,20);
	bubble2 = new Bubble(400,200,40);

	background(0);
}

function draw(){
		background(0);
		background(0);
		bubble.move();
		bubble.show();
		bubble2.move();
		bubble2.show();
}

class Bubble{
	constructor(x,y,r){
		this.location = new PVector(x,y);
		this.velocity = new PVector(2,2);
		this.r = r
	}

	move(){
		this.location.axisX = this.location.axisX + this.velocity.axisX;
		if(this.location.axisX > widthScreen || this.location.axisX  <0) this.velocity.axisX *=-1;
		this.location.axisY = this.location.axisY + this.velocity.axisY;
		if(this.location.axisY > heightScreen || this.location.axisY  <0) this.velocity.axisY *=-1;
	}

	show(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.location.axisX,this.location.axisY,this.r*2);
	}
}

class PVector{
	constructor(x,y){
		this.axisX = x;
		this.axisY = y;
	}

}
