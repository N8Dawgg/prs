const PAPER = 0, ROCK = 1, SCISSORS = 2;
const SIGN_NAME = ["paper", "rock", "scissors"];

function string2Sign(inputStr) {
    if (inputStr.toLowerCase() == "paper") {
        return PAPER;
    } else if (inputStr.toLowerCase() == "rock") {
        return ROCK;
    } else if (inputStr.toLowerCase() == "scissors") {
        return SCISSORS;
    }
}

function playRound(playerInput, comInput) {
    if (playerInput == comInput) {
        return "You both chose " + SIGN_NAME[playerInput] + "! It's a tie!";
    }
    else if (comInput == (playerInput + 1)%3) {
        return "You picked " + SIGN_NAME[playerInput] + " and I picked " + SIGN_NAME[comInput] + "! You win!";
    }
    else 
    {
        return "You picked " + SIGN_NAME[playerInput] + " and I picked " + SIGN_NAME[comInput] + "! I win!";
    }
}

function createComInput() {
    return Math.floor(Math.random() * 3)
}

function game() {
    let choice = prompt("Paper, rock or scissors...");
    alert(playRound(string2Sign(choice),createComInput()));
    game();
}

game();
