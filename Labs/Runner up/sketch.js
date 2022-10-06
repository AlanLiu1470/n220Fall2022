let oneDiv = document.getElementById("first");
let twoDiv = document.getElementById("second");
let threeDiv = document.getElementById("third");
let times = [20, 30, 50];

for(let i = 0; i < times.length; i++) {
oneDiv.innerHTML = times[0];//Display number one's time in the first div
twoDiv.innerHTML = times[1];//Display number two's time in the second div
threeDiv.innerHTML = times[2];//Display number three's time in the third div
};