let num = document.getElementById("numbers");
let dispp = document.getElementById("disp");

function check(){
    let puts = num.value; //Get the input value
    let splitPuts = puts.split(",");//Split the input value into an array

    console.log(splitPuts);
    let count = 0

    for (var i = 0; i < splitPuts.length; i++) {
    if (splitPuts[i] == "1"){
        count ++
    }


    }
    if(count == 3){ // Check if there are three "1s" in the array
    dispp.innerHTML = "Winner";
    } else {
    dispp.innerHTML = "Not Winner";
    }
}