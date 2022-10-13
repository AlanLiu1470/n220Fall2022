//Before I start this project, I go search for tons of references to figure out how to start.
let game = () => {//Base function for the game
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
    let playGame = () => {//Function to set up the player and the computer
        let rockP = document.querySelector('.rock');
        let paperP = document.querySelector('.paper');
        let scissorP = document.querySelector('.scissor');
        let guardP = document.querySelector('.guard')
        let playerOptions = [rockP,paperP,scissorP,guardP];
        let computerOptions = ['rock','paper','scissors']
         
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                let movesLeft = document.querySelector('.movesleft');
                moves += 1;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                 
                let choiceNumber = Math.floor(Math.random()*3);
                let computerChoice = computerOptions[choiceNumber];
 
                winner(this.innerText,computerChoice)
                 
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
         
    }
 
    let winner = (player,computer) => {//Function to decide who won
        let result = document.querySelector('.result');
        let playerScoreBoard = document.querySelector('.p-count');
        let computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won With Paper';
                computerScore += 1;
                computerScoreBoard.textContent = computerScore;
 
            }else{
                result.textContent = 'Player Won With Rock'
                playerScore += 1;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won With Rock';
                computerScore += 1;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won With Scissors';
                playerScore += 1;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won With Scissors';
                computerScore += 1;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won With Paper';
                playerScore += 1;
                playerScoreBoard.textContent = playerScore;
            }
        }
        if(player == 'guard'){
            result.textContent = 'Player Guard';
            playerScore -= 0.5
            playerScoreBoard.textContent = playerScore;
        }
    }

    let gameOver = (playerOptions,movesLeft) => {//Function to stop the game
 
        let chooseMove = document.querySelector('.move');
        let result = document.querySelector('.result');
        let restart = document.querySelector('.restart');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won'
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
        }
        restart.innerText = 'Restart';
        restart.style.display = 'flex'
        restart.addEventListener('click',() => {
            window.location.reload();//Restart the game
        })
    }
 
    playGame();
     
}

game();