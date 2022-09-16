function setup(){
console.log("1");
createCanvas(800, 600);
}

function draw(){
redRemover(100,100);
}

function redRemover (color){
    let noRed = 0;
    fill(170, 200, 150); //Color the circle
    fill(noRed, 200, 150); //Set red to 0
    circle(50, 50, 50, 50);
}

//Sorry about that, I know the code is wrong, but no matter how I try it's just not working to me. I would like to ask Mr.Travis about how to do this homework and learn from it.