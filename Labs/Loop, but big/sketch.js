let aDiv = document.getElementById("aDiv");
let numbers = ["10000", "20000", "30000", "40000", "50000"];

for(let i = 0; i < numbers.length; i++) { //Make the loop
aDiv.innerHTML = (numbers.toString(i));//Display every elements in the div
}