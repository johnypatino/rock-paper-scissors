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
        x.textContent =  'Tied! You both chose ' + player
    }
    else if (computerSelection == 'rock' && player == 'scissors') {
        cscore++;
        x.textContent = 'You lost! Rock beats Scissors';
    }
    else if (computerSelection == 'paper' && player == 'rock') {
        cscore++;
        x.textContent ='You lost! Paper beats Rock';
    } 
     else if (computerSelection == 'scissors' && player == 'paper') {
        cscore++;
        x.textContent ='You lost! Scissors beats Paper';
    }
    else if (computerSelection == 'scissors' && player == 'rock') {
        pscore++;
        x.textContent = 'You Win! Scissors beats Rock';
    }
    else if (computerSelection == 'rock' && player == 'paper') {
        pscore++;
        x.textContent = 'You Win! Rock beats Paper';
    }
    else if (computerSelection == 'paper' && player == 'scissors') {
        pscore++;
        x.textContent ='You Win! Paper beats Scissors!';
    }
    if (pscore >= 5) {
        x.textContent = 'You won 5 times, you are the winner'
        
    }
    if (cscore >= 5) {
        x.textContent = 'You lost 5 times, you are the Loser'
    }
    playerScore.textContent = 'Player Score: ' + pscore;
    computerScore.textContent = 'Computer Score: ' + cscore;
    scoresdiv.appendChild(playerScore);
    scoresdiv.appendChild(computerScore);
    container.appendChild(x);
    console.log(player);
}
const x = document.createElement('p');
x.style.textAlign = 'center';
const container = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', ()=> {

        let player = button.id;
        const play = document.createElement('p');
        let computerSelection = getComputerChoice();
        playRound(computerSelection, player);
        
    })
});
let pscore = 0;
let cscore = 0;
const scoresdiv = document.querySelector('#score');
const playerScore = document.createElement('h5');
playerScore.style.color ='blue';
const computerScore = document.createElement('h5')
computerScore.style.color = 'red';

