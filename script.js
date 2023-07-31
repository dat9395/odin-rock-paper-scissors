function getComputerChoice() {
    let rand = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let choice;
    
    if (rand == 1) {
        choice = "rock";
    }
    else if (rand == 2) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    // Create a dictionary mapping results:
    let playerToComputer = {
        rock: {rock: "Draw", paper: "You lose! Paper beats Rock", scissors: "You win! Rock beats Scissors"},
        paper: {rock: "You win! Paper beats Rock", paper: "Draw", scissors: "You lose! Scissors beat Paper"},
        scissors: {rock: "You lose! Rock beats Scissors", paper: "You win! Scissors beat Paper", scissors: "Draw"}
    };

    return playerToComputer[playerSelection][computerSelection];
}

function game() {
    // Variables to store scores
    let playerScore = 0;
    let computerScore = 0;
    
    let count = 1;
    while (count <= 5) {
        console.log("ROUND " + count);
        count ++;

        // Prompt player to choose and ensure answer is valid
        let playerSelection = prompt("Choose between PAPER, ROCK or SCISSORS:").toLowerCase();
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            playerSelection = prompt("Invalid value! Please choose again between PAPER, ROCK or SCISSORS:").toLowerCase();
        }

        // Get computer's choice and display it
        const computerSelection = getComputerChoice();
        console.log("Computer's choice: " + computerSelection.toUpperCase())
        
        // Get result, calculate score and display
        let result = playRound(playerSelection, computerSelection);
        if (result.toLowerCase().includes("win") == true) {
            playerScore ++;
        }
        else if (result.toLowerCase().includes("lose") == true) {
            computerScore ++;
        }
        console.log(result);
        console.log("Current scores: Player (" + playerScore + ") vs Computer (" + computerScore + ")")
    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    }

    else if (playerScore < computerScore) {
        console.log("Player loses!");
    }
    else {
        console.log("Draw!");
    }
}
   
game();