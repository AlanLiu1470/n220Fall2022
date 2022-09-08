var radius = 50;
var x = -radius;
var speed = 5;

function setup(){
console.log("1");
createCanvas(800,600);
}

function draw(){
fill(0,0,255);
ellipse(x,50,radius);
    x += speed;//Increase the value of x
    if(x > width + radius){
        x = -radius;//Send the circle back to the left side of the canvas
    }
}