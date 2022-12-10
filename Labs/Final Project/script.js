let cell = document.querySelectorAll("#cell")
let ticTacToe = document.getElementsByClassName("TicTacToe")
let currentPlayer = "X"

function place(box) {
    if (box.innerText != "") return;
    box.innerText = currentPlayer;
    currentPlayer == "X" ? currentPlayer = "O" : currentPlayer = "X";
    checkGameBoard()
}

function checkGameBoard() {
    for (let i = 0; i <= 2; i++) {
        let first = document.getElementById("0-" + i).innerText
        let second = document.getElementById("1-" + i).innerText
        let third = document.getElementById("2-" + i).innerText
        if (first == "") continue
        if (first == second && first == third) {
            let winner = document.getElementById("winner")
            winner.style.display = "block"
        }
       
    }

    for (let i = 0; i <= 2; i++) {
        let first = document.getElementById(i + "-0").innerText
        let second = document.getElementById(i + "-1").innerText
        let third = document.getElementById(i + "-2").innerText
        if (first == "") continue
        if (first == second && first == third) {
            winner.style.display = "block"
        }
    }

    let firstD1 = document.getElementById("0-0").innerText
    let secondD1 = document.getElementById("1-1").innerText
    let thirdD1 = document.getElementById("2-2").innerText
    if (firstD1 != "" && firstD1 == secondD1 && firstD1 == thirdD1) {
        winner.style.display = "block"
    }

    let firstD2 = document.getElementById("0-2").innerText
    let secondD2 = document.getElementById("1-1").innerText
    let thirdD2 = document.getElementById("2-0").innerText
    if (firstD2 != "" && firstD2 == secondD2 && firstD2 == thirdD2) {
        winner.style.display = "block"
    }

}

function restart(){
    window.location.reload();
}