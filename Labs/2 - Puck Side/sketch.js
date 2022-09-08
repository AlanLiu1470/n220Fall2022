
function setup(){
console.log("1");
createCanvas(400,300);
}

function draw(){
    let x = mouseX;
    let y = mouseY;
    if(x<200){
        fill(0,32,255);
    } else {
        fill(255,0,0);
    }
circle(x,y,50)
}