var x = 80;
var y = 60;

function setup() {
  createCanvas(1920,1080);
}

function draw() { 
  console.log("1");
  fill(25);
  ellipse(50,50,90,90);

  strokeWeight(20);
  fill(190)
  ellipse(350,350,200,200)

  fill(153);
  strokeWeight(1);
  rect(100,100,100,200);
}