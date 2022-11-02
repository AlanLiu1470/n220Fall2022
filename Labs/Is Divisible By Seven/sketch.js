let num = document.getElementById("number");
let dvS = document.getElementById("squ");

function divi(){
if((num.value % 7) == 0){
dvS.innerHTML = "true";
} else {
dvS.innerHTML = "false";
}
}