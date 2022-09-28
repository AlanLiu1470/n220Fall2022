var squheight = 100;
var squwidth = 100;

let dvSqu = document.getElementById("squ");

dvSqu.style.backgroundColor = "#32a852";//Give the div a green color
dvSqu.style.width = squwidth + "px";
dvSqu.style.height = squheight + "px";

function bigger(){ //The funcion that will run when div is cliked
squheight *= 1.1;//Increase width
squwidth *= 1.1;//Increase height
dvSqu.style.width = squwidth + "px";
dvSqu.style.height = squheight + "px";
}