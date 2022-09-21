let shape = { width: 50, height: 50, red: 150, green: 100, blue: 50, xposition: 100, yposition: 100};
//Put everything in the object

function setup(){
console.log("1");
createCanvas(800, 600);
}

function draw(){
drawShape(0, 0);
}

function drawShape(theShape){ //Function for the shape
fill(shape.red, shape.green, shape.blue); //Give the shape a color
rect(shape.xposition, shape.yposition, shape.width, shape.height); //Create a rectangle with object
}