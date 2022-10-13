var squheight = 100;
var squwidth = 300;

let dvTop = document.getElementById("top");//Top div to display clicked text

dvTop.style.backgroundColor = "#5f14ff";
dvTop.style.width = squwidth +"px";
dvTop.style.height = squheight + "px";

let dvSqu = document.getElementById("first");//First div

dvSqu.style.backgroundColor = "#32a852";
dvSqu.style.width = squwidth + "px";
dvSqu.style.height = squheight + "px";//Set up base attributes

function first(){//Function of clicking the first div
    if(first){
    dvSqu.style.fontWeight = "bold";
    dvSqu.style.fontSize = 30;
    dvSqu.style.backgroundColor = "#dcff14";//switch color when clicked
    dvTop = document.getElementById("top").innerHTML = "Alpha";}
    else {
    }
    if(second){//Bring other div back to original looking when clicked
        dvSec.style.fontWeight = "normal";
        dvSec.style.fontSize = 16;
        dvSec.style.backgroundColor = "#ffb914";}
        else {; 
}
if(third){
    dvThr.style.fontWeight = "normal";
    dvThr.style.fontSize = 16;
    dvThr.style.backgroundColor = "#ff7a14";
}
if(fourth){
    dvFou.style.fontWeight = "normal";
    dvFou.style.fontSize = 16;
    dvFou.style.backgroundColor = "#4bff14"
}
if(fifth){
    dvFif.style.fontWeight = "normal";
    dvFif.style.fontSize = 16;
    dvFif.style.backgroundColor = "#ff2014";
}
if(sixth){
    dvSix.style.fontWeight = "normal";
    dvSix.style.fontSize = 16;
    dvSix.style.backgroundColor = "#b9ff14";
}
}

let dvSec = document.getElementById("second");

dvSec.style.backgroundColor = "#ffb914";
dvSec.style.width = squwidth + "px";
dvSec.style.height = squheight + "px";

function second(){
    if(first){
        dvSqu.style.fontWeight = "normal";
        dvSqu.style.fontSize = 16;
        dvSqu.style.backgroundColor = "#32a852";}
        else {
        }
    
    if(second){
            dvSec.style.fontWeight = "bold";
            dvSec.style.fontSize = 30;
            dvSec.style.backgroundColor = "#14dcff";
            dvTop = document.getElementById("top").innerHTML = "Beta";}
            else {
    }
    if(third){
        dvThr.style.fontWeight = "normal";
        dvThr.style.fontSize = 16;
        dvThr.style.backgroundColor = "#ff7a14";
    }
    if(fourth){
        dvFou.style.fontWeight = "normal";
        dvFou.style.fontSize = 16;
        dvFou.style.backgroundColor = "#4bff14"
    }
    if(fifth){
        dvFif.style.fontWeight = "normal";
        dvFif.style.fontSize = 16;
        dvFif.style.backgroundColor = "#ff2014";
    }
    if(sixth){
        dvSix.style.fontWeight = "normal";
        dvSix.style.fontSize = 16;
        dvSix.style.backgroundColor = "#b9ff14";
    }
}

let dvThr = document.getElementById("third");

dvThr.style.backgroundColor = "#ff7a14";
dvThr.style.width = squwidth + "px";
dvThr.style.height = squheight + "px";

function third(){
    if(first){
        dvSqu.style.fontWeight = "normal";
        dvSqu.style.fontSize = 16;
        dvSqu.style.backgroundColor = "#32a852";}
        else {
        }
    
    if(second){
            dvSec.style.fontWeight = "normal";
            dvSec.style.fontSize = 16;
            dvSec.style.backgroundColor = "#ffb914";}
            else {; 
    }
    if(third){
        dvThr.style.fontWeight = "bold";
        dvThr.style.fontSize = 30;
        dvThr.style.backgroundColor = "#e014ff";
        dvTop = document.getElementById("top").innerHTML = "Gamma";}
        else { 
}
if(fourth){
    dvFou.style.fontWeight = "normal";
    dvFou.style.fontSize = 16;
    dvFou.style.backgroundColor = "#4bff14"
}
if(fifth){
    dvFif.style.fontWeight = "normal";
    dvFif.style.fontSize = 16;
    dvFif.style.backgroundColor = "#ff2014";
}
if(sixth){
    dvSix.style.fontWeight = "normal";
    dvSix.style.fontSize = 16;
    dvSix.style.backgroundColor = "#b9ff14";
}
}

let dvFou = document.getElementById("fourth");

dvFou.style.backgroundColor = "#4bff14";
dvFou.style.width = squwidth + "px";
dvFou.style.height = squheight + "px";

function fourth(){
    if(first){
        dvSqu.style.fontWeight = "normal";
        dvSqu.style.fontSize = 16;
        dvSqu.style.backgroundColor = "#32a852";}
        else {
        }
    
    if(second){
            dvSec.style.fontWeight = "normal";
            dvSec.style.fontSize = 16;
            dvSec.style.backgroundColor = "#ffb914";}
            else {
    }
    if(third){
        dvThr.style.fontWeight = "normal";
        dvThr.style.fontSize = 16;
        dvThr.style.backgroundColor = "#ff7a14";
    }
    if(fourth){
        dvFou.style.fontWeight = "bold";
        dvFou.style.fontSize = 30;
        dvFou.style.backgroundColor = "#9d03fc"
        dvTop = document.getElementById("top").innerHTML = "Delta";}
    if(fifth){
        dvFif.style.fontWeight = "normal";
        dvFif.style.fontSize = 16;
        dvFif.style.backgroundColor = "#ff2014";
    }
    if(sixth){
        dvSix.style.fontWeight = "normal";
        dvSix.style.fontSize = 16;
        dvSix.style.backgroundColor = "#b9ff14";
    }
}

let dvFif = document.getElementById("fifth");

dvFif.style.backgroundColor = "#ff2014";
dvFif.style.width = squwidth + "px";
dvFif.style.height = squheight + "px";

function fifth(){
    if(first){
        dvSqu.style.fontWeight = "normal";
        dvSqu.style.fontSize = 16;
        dvSqu.style.backgroundColor = "#32a852";}
        else {
        }
    
    if(second){
            dvSec.style.fontWeight = "normal";
            dvSec.style.fontSize = 16;
            dvSec.style.backgroundColor = "#ffb914";}
            else {; 
    }
    if(third){
        dvThr.style.fontWeight = "normal";
        dvThr.style.fontSize = 16;
        dvThr.style.backgroundColor = "#ff7a14";
    }
    if(fourth){
        dvFou.style.fontWeight = "normal";
        dvFou.style.fontSize = 16;
        dvFou.style.backgroundColor = "#4bff14"
    }
    if(fifth){
        dvFif.style.fontWeight = "bold";
        dvFif.style.fontSize = 30;
        dvFif.style.backgroundColor = "#14ff92";
        dvTop = document.getElementById("top").innerHTML = "Epsilon";}
    if(sixth){
        dvSix.style.fontWeight = "normal";
        dvSix.style.fontSize = 16;
        dvSix.style.backgroundColor = "#b9ff14";
    }
}

let dvSix = document.getElementById("sixth");

dvSix.style.backgroundColor = "#b9ff14";
dvSix.style.width = squwidth + "px";
dvSix.style.height = squheight + "px";

function sixth(){
    if(first){
        dvSqu.style.fontWeight = "normal";
        dvSqu.style.fontSize = 16;
        dvSqu.style.backgroundColor = "#32a852";}
        else {
        }
    
    if(second){
            dvSec.style.fontWeight = "normal";
            dvSec.style.fontSize = 16;
            dvSec.style.backgroundColor = "#ffb914";}
            else {; 
    }
    if(third){
        dvThr.style.fontWeight = "normal";
        dvThr.style.fontSize = 16;
        dvThr.style.backgroundColor = "#ff7a14";
    }
    if(fourth){
        dvFou.style.fontWeight = "normal";
        dvFou.style.fontSize = 16;
        dvFou.style.backgroundColor = "#4bff14"
    }
    if(fifth){
        dvFif.style.fontWeight = "normal";
        dvFif.style.fontSize = 16;
        dvFif.style.backgroundColor = "#ff2014";
    }
    if(sixth){
        dvSix.style.fontWeight = "bold";
        dvSix.style.fontSize = 30;
        dvSix.style.backgroundColor = "#14bdff";
        dvTop = document.getElementById("top").innerHTML = "Zeta";}
}