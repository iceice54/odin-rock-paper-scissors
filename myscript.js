function getComputerChoice() {
    //get random number from 0 to 2 and use 0, 1 and 2 to represent the 3 choices
    let randomNum = Math.floor(Math.random() * 3)

    switch(randomNum) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function getPlayerChoice() {
    //set input value to lowercase to support uppercase and mixed case inputs
    let playerChoice = prompt("Enter rock, paper or scissors.").toLowerCase()

    //set default return to null so invalid inputs will return null
    switch(playerChoice) {
        case "rock":
            return "Rock"
        case "paper":
            return "Paper"
        case "scissors":
            return "Scissors"
        default:
            return null
    }
}

function playRound(playerSelection, computerSelection) {
    //deal with invalid inputs
    if (playerSelection == null) {
        return "You Lose! You entered an invalid input"
    }

    if (playerSelection == computerSelection) {
        return `It's a draw! ${playerSelection} ties with ${computerSelection}`
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors")
    || (playerSelection == "Paper" && computerSelection == "Rock")
    || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}