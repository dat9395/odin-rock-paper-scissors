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

// HTML References
let playerScore = document.querySelector("#score-player > span");
let computerScore = document.querySelector("#score-computer > span");
let round = document.querySelector("#round > span");
let announce = document.querySelector("#announce");
let gameDiv = document.querySelector("#game");
let buttons = document.querySelectorAll("#game > button");

// Prepare a new game button
let newGame = document.createElement("button");
newGame.id = "new-game";
newGame.innerText = "NEW GAME";

// Add click event to buttons triggering game
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let result = playRound(button.id, getComputerChoice());
        // Update scores
        if (result.toLowerCase().includes("win") == true) {
            playerScore.innerText ++;
        }
        else if (result.toLowerCase().includes("lose") == true) {
            computerScore.innerText ++;
        }
        
        // Update round number and result
        round.innerText ++;
        announce.innerText = result;

        // Finish game when score reaches 5 and annouce winner
        if (playerScore.innerText == 5 || computerScore.innerText == 5) {
            if (playerScore.innerText == 5) {
                announce.innerText += ". PLAYER WINS THE GAME!";
            }
            else {
                announce.innerText += ". COMPUTER WINS THE GAME!";
            }
            
            // Disable buttons to end game
            buttons.forEach((button) => {
                button.setAttribute("disabled", "");
            })
            
            // Add new game button prepared earlier, which reload the page
            gameDiv.appendChild(newGame);
            newGame.addEventListener("click", () => {
                window.location.reload();
            })
        }
    })
})