const choices = ["Rock", "Paper", "Scissors"];

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScore = document.getElementById("player-score").querySelector('h2');
const computerScore = document.getElementById("computer-score").querySelector('h2');
const outcome = document.getElementById("status").querySelector('h2');

const score = [0, 0];


// Generate random int for 
function randomInteger(min, max) {
    return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}


// Generate random number from 0 to 2 and pull  choice from 'choices' and return
function getComputerChoice() {
    let i = randomInteger(0, 2);
    return choices[i];
}

// Plays the game, accepts player's choice as parameter
function play(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log("Computer: " + computerChoice + '\n' + "---");

    if (playerChoice === computerChoice) { // Edge case, prevents entering pointless checking if it's a tie.
        console.log("Tie");
        outcome.innerHTML = "Tie";
        return;
    } 

    switch(playerChoice) {
        case "Rock":
            if (computerChoice === "Paper") {
                outcome.innerHTML = "Player wins";
                score[0]++;
                playerScore.innerHTML = score[0];
                break;
            }

            if (computerChoice === "Scissors") {
                outcome.innerHTML = "Computer Wins";
                score[1]++;
                computerScore.innerHTML = score[1];
                break;
            }
        case "Paper":
            if (computerChoice === "Rock") {
                outcome.innerHTML = "Player wins";
                score[0]++;
                playerScore.innerHTML = score[0];
                break;
            }

            if (computerChoice === "Scissors") {
                outcome.innerHTML = "Computer wins";
                score[1]++;
                computerScore.innerHTML = score[1];
                break;
            }
        case "Scissors":
            if (computerChoice === "Paper") {
                outcome.innerHTML = "Player wins";
                score[0]++;
                playerScore.innerHTML = score[0];
                break;
            }

            if (computerChoice === "Rock") {
                outcome.innerHTML = "Computer wins"
                score[1]++;
                computerScore.innerHTML = score[1];
                break;
            }
    }
}

// Adding listeners to the user's buttons
function main() {
    document.addEventListener('DOMContentLoaded', () => {
        rockButton.addEventListener('click', () => {
            console.log("Player: Rock")
            play("Rock");
        })
        paperButton.addEventListener('click', () => {
            console.log("Player: Paper")
            play("Paper");
        })
        scissorsButton.addEventListener('click', () => {
            console.log("Player: Scissors")
            play("Scissors");
        })
    })
}

main();