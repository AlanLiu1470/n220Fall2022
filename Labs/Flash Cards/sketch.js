let answ1 = document.getElementById("ans1");
let answ2 = document.getElementById("ans2");
let answ3 = document.getElementById("ans3");
let ques1 = document.getElementById("qus1");
let ques2 = document.getElementById("qus2");
let ques3 = document.getElementById("qus3");

ques1.addEventListener("click", answer1);//Add a click event for each button
ques2.addEventListener("click", answer2);
ques3.addEventListener("click", answer3);

function answer1(event){//Display the correct answer in the div after the button is clicked.
answ1.innerHTML = "Flash Cards.";
}

function answer2(event){
answ2.innerHTML = "Indianapolis.";
}

function answer3(event){
    answ3.innerHTML = "Beijing.";
    }