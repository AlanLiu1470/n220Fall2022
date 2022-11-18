let red = 0;
let green = 0;
let blue = 0;
let theColor = "rgb("+red+", "+green+", "+blue+")";//Create the basic RGB value.
let redd1 = document.getElementById("red1");
let redd2 = document.getElementById("red2");
let redd3 = document.getElementById("red3");

let greenn1 = document.getElementById("green1");
let greenn2 = document.getElementById("green2");
let greenn3 = document.getElementById("green3");

let bluee1 = document.getElementById("blue1");
let bluee2 = document.getElementById("blue2");
let bluee3 = document.getElementById("blue3");

let squr1 = document.getElementById("squ1");
let hei = 500;
let wid = 500;

squr1.style.backgroundColor = theColor 
squr1.style.height = hei + "px";
squr1.style.width = wid + "px";

redd1.addEventListener("click", addRed1);//Add a click event for each button.
redd2.addEventListener("click", addRed2);
redd3.addEventListener("click", addRed3);
greenn1.addEventListener("click", addGreen1);
greenn2.addEventListener("click", addGreen2);
greenn3.addEventListener("click", addGreen3);
bluee1.addEventListener("click", addBlue1);
bluee2.addEventListener("click", addBlue2);
bluee3.addEventListener("click", addBlue3);
function addRed1(event){ //Use function to change the numbers of RGB values. Total of three functions for +1, +5, and +10 in each value.
red += 1;
let theColor = "rgb("+red+", "+green+", "+blue+")";
squr1.style.backgroundColor = theColor
}

function addRed2(event){
red += 5;
let theColor = "rgb("+red+", "+green+", "+blue+")";
squr1.style.backgroundColor = theColor
}

function addRed3(event){
red += 10;
let theColor = "rgb("+red+", "+green+", "+blue+")";
squr1.style.backgroundColor = theColor
}

function addGreen1(event){
    green += 1;
    let theColor = "rgb("+red+", "+green+", "+blue+")";
    squr1.style.backgroundColor = theColor
    }

    function addGreen2(event){
        green += 5;
        let theColor = "rgb("+red+", "+green+", "+blue+")";
        squr1.style.backgroundColor = theColor
        }

        function addGreen3(event){
            green += 10;
            let theColor = "rgb("+red+", "+green+", "+blue+")";
            squr1.style.backgroundColor = theColor
            }

function addBlue1(event){
blue += 1;
let theColor = "rgb("+red+", "+green+", "+blue+")";
squr1.style.backgroundColor = theColor
}

function addBlue2(event){
    blue += 5;
    let theColor = "rgb("+red+", "+green+", "+blue+")";
    squr1.style.backgroundColor = theColor
    }

    function addBlue3(event){
        blue += 10;
        let theColor = "rgb("+red+", "+green+", "+blue+")";
        squr1.style.backgroundColor = theColor
        }