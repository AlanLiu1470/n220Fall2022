let ball = {radius: 50, x: -50, y: 50, speed: 5};

function setup(){
console.log("1");
createCanvas(800,600);
}

function draw(){
fill(0,0,255);
ellipse(ball.x,ball.y,ball.radius);
    ball.x += ball.speed;//Increase the value of x
    if(ball.x > width + ball.radius){
        ball.x = -50;//Send the circle back to the left side of the canvas
    }
}