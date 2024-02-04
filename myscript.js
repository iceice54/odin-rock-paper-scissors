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
        console.log("You Lose! You entered an invalid input")
        return "Lose"
    }

    if (playerSelection == computerSelection) {
        console.log(`It's a draw! ${playerSelection} ties with ${computerSelection}`)
        return "Draw"
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors")
    || (playerSelection == "Paper" && computerSelection == "Rock")
    || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return "Win"
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return "Lose"
    }
}

function playGame() {
    let playerScore = 0
    let computerScore = 0
    //call playRound 5 times for a game with 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}. ${5-i} rounds left!`)
        let result = playRound(getPlayerChoice(), getComputerChoice());
        //no one gains or loses points for draw
        if (result == "Draw") {
            continue
        } else if (result == "Win") {
            playerScore += 1
        } else if (result == "Lose") {
            computerScore += 1
        }        
    }

    if (playerScore == computerScore) {
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}. It's a tie!`)
    } else if (playerScore > computerScore) {
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}. You win!`)
    } else if (computerScore > playerScore) {
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}. You lose!`)
    }
}

playGame()