let favorDiv = document.getElementById("Favor");
let favors = ["Video game", "Gun Model", "Racing Car", "Electrc Music", "Chinese Language"];

for(let i = 0; i < favors.length; i++) {
favorDiv.innerHTML += favors[i] + ", is one of my favorite things. <br />";//+= to make the loop display all elements. <br/> to make the result display vertically.
}