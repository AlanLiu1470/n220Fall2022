
function setup(){
console.log("1");
createCanvas(400,300);
}

function draw(){
    let x = mouseX;//Variables for mouse tracking
    let y = mouseY;
    if(x<200){//Have a invisible line in the middle of the canvas
        fill(0,32,255);//Turn the circle in blue color
    } else {
        fill(255,0,0);//Turn the circle in red color
    }
circle(x,y,50)
}