var x = 500;
var y = 300;

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

  strokeWeight(10);
  strokeCap(ROUND);
  line(450,700,x,y);

  fill(200,0,150);
  strokeWeight(5);
  ellipse(800,500,300,300);
}