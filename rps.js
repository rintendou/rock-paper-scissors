let rock = "rock";
let paper = "paper";
let scissors = "scissors";
const choices = [rock, paper, scissors];

// Generate random int for 
function randomInteger(min, max) {
    return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}


// Generate random number from 0 to 2 and pull  choice from 'choices' and return
function getComputerChoice() {
    let randomInteger = randomInteger(0, 2);
    return rps[randomInteger];
}


function getPlayerChoice() {

}

