const CHOICES = ['rock', 'paper', 'scissors'];
let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    //Computer randomly selects rock, paper, or scissors
    return randomChoice(CHOICES);
}

function randomChoice(array) {
    // returns a random choice from the array
    return array[Math.floor(Math.random() * array.length)];
}

function playRound(playerSelection, computerSelection) {
    //Plays a single round of rock, paper, scissors
    // initialize the winner variable
    let winner;
    // conditionals based on the player's selection
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            winner = "tie";
        } else if (computerSelection === "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            winner = "player";
        } else if (computerSelection === "paper") {
            winner = "tie";
        } else {
            winner = "computer";
        }
    }
    else {
        if (computerSelection === "rock") {
            winner = "computer";
        } else if (computerSelection === "paper") {
            winner = "player";
        } else {
            winner = "tie";
        }
    }
    // update the score
    updateScore(winner)
    // print the result in the results div
    addResults(winner, playerSelection, computerSelection)
    // increase round number
    roundNumber++
}

function updateScore(winner) {
    if (winner === "player") {
        let score = Number(document.getElementById("playerscore").textContent);
        document.getElementById("playerscore").textContent = score + 1;
    }
    if (winner === "computer") {
        let score = Number(document.getElementById("computerscore").textContent);
        document.getElementById("computerscore").textContent = score + 1;
    }
}

function winnerConsole(winner, playerSelection, computerSelection) {
    //Writes a line in the console informing the player if the won or lost
    if (winner === "player") {
        alert(`You win! ${capitalizeFirstLetter(playerSelection)} ` +
            `beats ${computerSelection}.`);
    } else if (winner === "computer") {
        alert(`You lose! ${capitalizeFirstLetter(computerSelection)} ` +
            `beats ${playerSelection}.`);
    } else {
        alert(`It's a tie! You both picked ${playerSelection}`);
    }
}

function addResults(winner, playerSelection, computerSelection) {
    let result = document.createElement('p');

    if (winner === "player") {
        result.textContent = `Round ${roundNumber}: You win!` +
            ` ${capitalizeFirstLetter(playerSelection)} beats` +
            ` ${computerSelection}.`
    }
    if (winner === "computer") {
        result.textContent = `Round ${roundNumber}: You lose!` +
            ` ${capitalizeFirstLetter(computerSelection)} beats` +
            ` ${playerSelection}.`
    }
    if (winner === "tie") {
        result.textContent = `Round ${roundNumber}: Tie!` +
            ` You both selected ${playerSelection}.`
    }
    document.querySelector(".results").appendChild(result);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});

