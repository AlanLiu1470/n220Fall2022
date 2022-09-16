let obj = {car: 20, rocket: 30, keys: 40}; // Objects

function setup(){
console.log("1");
createCanvas(800,600);
}

function draw(){
    drawKeys(100, 100); //100px size
}

function drawKeys(x,y){ //x, y as arguments
    let obj = {car: 20, rocket: 30, keys: 40};
    rect(mouseX, mouseY, y, y); // Mouse track
    circle(mouseX, mouseY, x, x); // Mouse track
}