let vals = [];
let norms = [];
var widthScreen =100;
var heightScreen = 100;


function setup(){
  createCanvas(widthScreen, heightScreen);
  for(var x = 0 ; x < widthScreen;x++){
    vals.push(0);
    norms.push(0);
  }

}

function draw(){
  background(100);
  let n = montecarlo();
  var index = parseInt(n*widthScreen);
  print(index);
  vals[index]+=1;
  print(vals[index]+"a");
  stroke(255);

  var normalization = false;
  var maxy = 0.0;

  for(var x = 0 ; x < vals.length;x++){
    line(x, heightScreen, x,heightScreen-norms[x]);
    if(vals[x] > heightScreen) normalization = true;
    if(vals[x] > maxy) maxy=vals[x];
  }

  for(var x = 0 ; x < vals.length; x++){
    if(normalization) norms[x] = (vals[x]/maxy)*(heightScreen);
    else norms[x] = vals[x];
  }

  function montecarlo(){
    var foundone =false;
    var hack =0;
    while(!foundone && hack < 10000){
      var r1 = random(1);
      var r2 = random(2);
      var y = r1*r1;
      if(r2<y){
        foundone = true;
        return r1;
      }
      hack++;

    }
    return 0;
  }
}
