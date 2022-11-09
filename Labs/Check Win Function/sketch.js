let num = document.getElementById("numbers");
let dispp = document.getElementById("disp");

function check(){ //Functio with a button to check the winner or not.
    let puts = num.value; //Get the input value.
    let splitPuts = puts.split(","); //Split input value into an array.

    console.log(splitPuts);
    let count = 0

    for (var i = 0; i < splitPuts.length; i++) {
    if (splitPuts[i] == "1"){
        count ++
    }


    }
    if(count == 3){
    dispp.innerHTML = "True"; //Return true if win
    } else {
    dispp.innerHTML = "False"; //Return false if not win
    }
}