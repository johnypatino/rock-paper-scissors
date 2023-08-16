function getComputerChoice() {
    let x = Math.floor(Math.random() * 3)
    let choice;
    if (x == 0) {
        choice = 'rock';
    }
    else if (x == 1) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    return choice;
}
function playRound(computerSelection, playerSelection) {
    let player = playerSelection.toLowerCase();
    if (computerSelection == player) {
        return ("Tied! You both chose " + player);
    }
    else if (computerSelection == 'rock' && player == 'scissors') {
        return('You lost! ' + computerSelection + ' beats ' + player)
    }
    else if (computerSelection == 'paper' && player == 'rock') {
        return ('You lost! ' + computerSelection + ' beats ' + player)
    } 
     else if (computerSelection == 'scissors' && player == 'paper') {
         return('You lost! ' + computerSelection + ' beats ' + player)
    }
    else if (computerSelection == 'scissors' && player == 'rock') {
        return ('You Win! ' + player + ' beats ' + computerSelection)
    }
    else if (computerSelection == 'rock' && player == 'paper') {
        return ('You Win! ' + player + ' beats ' + computerSelection)
    }
    else if (computerSelection == 'paper' && player == 'scissors') {
        return ('You Win! ' + player + ' beats ' + computerSelection)
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("rock, paper, scissors?");
        let computerSelection = getComputerChoice();
         console.log(playRound(computerSelection, playerSelection));
        
    }
}
game();
