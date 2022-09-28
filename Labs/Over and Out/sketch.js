var squheight = 100;
var squwidth = 100;

let dvSqu = document.getElementById("squ");

dvSqu.style.backgroundColor = "#398bf7";//Basic color
dvSqu.style.width = squwidth + "px";
dvSqu.style.height = squheight + "px";

function change(){ //Function that will run when mouse is on the div
dvSqu.style.backgroundColor = "#000000";
}

function back(){ //Function that will run when mouse is off the div
dvSqu.style.backgroundColor = "#398bf7";
}