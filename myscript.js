function getComputerChoice() {
    //get random number from 0 to 2 and use 0, 1 and 2 to represent the 3 choices
    let randomNum = Math.floor(Math.random() * 3)

    switch(randomNum) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getPlayerChoice() {
    //set input value to lowercase to support uppercase and mixed case inputs
    let playerChoice = prompt("Enter rock, paper or scissors.").toLowerCase()

    //set default return to null so invalid inputs will return null
    switch(playerChoice) {
        case "rock":
            return "rock"
        case "paper":
            return "paper"
        case "scissors":
            return "scissors"
        default:
            return null
    }
}