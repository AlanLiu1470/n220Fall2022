let left = {width: 20, height: 100, x: 10, y: 10, speed: 5};
let right = {width : 20, height: 100, x: 770, y: 600, speed: 5};

function setup(){
createCanvas(800, 800);
}

function draw(){
    if (keyIsDown(DOWN_ARROW)) {
       left.y += left.speed;
      }//Move down
      if (keyIsDown(UP_ARROW)) {
        left.y -= left.speed;
       }//Move up
rect(left.x, left.y, left.width, left.height);
if (keyIsDown(DOWN_ARROW)) {
    right.y -= right.speed;
   }//Move up
   if (keyIsDown(UP_ARROW)) {
    right.y += right.speed;
   }//Move down
rect(right.x, right.y, right.width, right.height);
}

