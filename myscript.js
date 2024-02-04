function getComputerChoice() {
    //get random number from 0 to 2 and use 0, 1 and 2 to represent the 3 choices
    let randomNum = Math.floor(Math.random() * 3)
    switch(randomNum) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "stone"
    }
}