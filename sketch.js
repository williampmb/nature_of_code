

let bubble;
let bubble2;

function setup(){
	createCanvas(800,600);
	bubble = new Bubble(200,200,20);
	bubble2 = new Bubble(400,200,40);
	print(bubble.x,bubble.y);

	//w = new Walker();
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
		this.x = x;
		this.y = y;
		this.r = r
	}

	move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}

	show(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x,this.y,this.r*2);
	}


}
