function setup(){
console.log("1");
createCanvas(800, 600);
}

function draw(){
translate(100,100);
polarPoint(100, 100); //Set the position of circles
}

function polarPoint(r){
let x = r * Math.sin(mouseX); //Set x value
let y = r * Math.cos(mouseX); //Set y value
circle(x, y, 10, 10); // Draw a circle with x and y
return createVector(x,y);
}