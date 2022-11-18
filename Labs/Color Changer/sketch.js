let sq1 = document.getElementById("squ1");
let sq2 = document.getElementById("squ2");
let sq3 = document.getElementById("squ3");
let hei = 200;
let wid = 200;

sq1.style.backgroundColor = "#c4c4c4";//Create all three divs with grey background and 200x200
sq1.style.height = hei + "px";
sq1.style.width = wid + "px";

sq2.style.backgroundColor = "#c4c4c4";
sq2.style.height = hei + "px";
sq2.style.width = wid + "px";

sq3.style.backgroundColor = "#c4c4c4";
sq3.style.height = hei + "px";
sq3.style.width = wid + "px";

sq1.addEventListener("click", red);//Add the click event for each div
sq2.addEventListener("click", green);
sq3.addEventListener("click", blue);

function red(event){
sq1.style.backgroundColor = "#ff0000";//Let each div change to the corresponding color.
}

function green(event){
sq2.style.backgroundColor = "#04ff00";
}

function blue(event){
sq3.style.backgroundColor = "#0091ff";
}