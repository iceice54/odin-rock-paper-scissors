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

//this function plays a round and calls displayResult to show results on the page, it then returns the result to use in playGame
function playRound(playerSelection, computerSelection) {
    //deal with invalid inputs
    if (playerSelection == null) {
        displayResult(playerSelection, computerSelection, "Invalid")
        return "Lose"
    }

    if (playerSelection == computerSelection) {
        displayResult(playerSelection, computerSelection, "Draw")
        return "Draw"
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors")
    || (playerSelection == "Paper" && computerSelection == "Rock")
    || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        displayResult(playerSelection, computerSelection, "Win")
        return "Win"
    } else {
        displayResult(playerSelection, computerSelection, "Lose")
        return "Lose"
    }
}

//this function creates a p element for the result of playRound and displays it on the page
function displayResult(playerSelection, computerSelection, result) {
    const resultsDiv = document.querySelector("#results");

    if (result == "Invalid") {
        let resultText = document.createElement('p');
        resultText.textContent = "You Lose! You entered an invalid input";
        resultsDiv.appendChild(resultText);
    }

    if (result == "Draw") {
        let resultText = document.createElement('p');
        resultText.textContent = `It's a draw! ${playerSelection} ties with ${computerSelection}`;
        resultsDiv.appendChild(resultText);
    }

    if (result == "Win") {
        let resultText = document.createElement('p');
        resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        resultsDiv.appendChild(resultText);
    }

    if (result == "Lose") {
        let resultText = document.createElement('p');
        resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        resultsDiv.appendChild(resultText);
    }
}

function playGame() {
    const resultsDiv = document.querySelector("#results");

    let roundsPlayed = 0
    let playerScore = 0
    let computerScore = 0

    let result
    //using event delegation
    let playerOptions = document.querySelector("#player-options");

    playerOptions.addEventListener('click', function clickEvent(event) {
        let target = event.target;

        //save the return value of playRound to use in calculating playerScore
        switch (target.id) {
            case 'rock': {
                result = playRound("Rock", getComputerChoice())
                break
            }
            case 'paper': {
                result = playRound("Paper", getComputerChoice())
                break
            }
            case 'scissors': {
                result = playRound("Scissors", getComputerChoice())
                break
            }
        }

        if (result == "Win") {
            playerScore += 1
        } else if (result == "Lose") {
            computerScore += 1
        }     

        roundsPlayed++

        //this creates a p element to display the current score and number of rounds left on page
        let scoreText = document.createElement('p');
        scoreText.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}. ${5-roundsPlayed} rounds left!`;
        resultsDiv.appendChild(scoreText)

        //since each playGame only lasts for 5 rounds, once 5 rounds is reached, show result of playGame on the page
        if (roundsPlayed == 5) {
            let gameResult = document.createElement('p');
            if (playerScore == computerScore) {
                gameResult.textContent = `The game has ended! Your score is ${playerScore} and the computer's score is ${computerScore}. It's a tie!`
            } else if (playerScore > computerScore) {
                gameResult.textContent = `The game has ended! Your score is ${playerScore} and the computer's score is ${computerScore}. You win!`
            } else if (computerScore > playerScore) {
                gameResult.textContent = `The game has ended! Your score is ${playerScore} and the computer's score is ${computerScore}. You lose!`
            }
            resultsDiv.appendChild(gameResult);
            //this removes the click event listener on the options, stopping the game from continuing
            playerOptions.removeEventListener('click', clickEvent)
        }
    })

    
}

playGame();