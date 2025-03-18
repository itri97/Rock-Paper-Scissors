function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 1) {
        return "paper";
    } else if (rand === 2) {
        return "scissors";
    } else {
        return "rock";
    }
}


function getHumanChoice () {
    let choice = prompt("enter your choice:");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log("you win");
            return "you win";
        } else if (humanChoice === computerChoice) {
            console.log ("its a tie");
            
        } else {
            console.log("you lose");
            return "you lose";
        }
    }
    
    
    for (i = 0 ; i < 5 ; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log ("computer:",computerSelection);
        console.log ("human:",humanSelection);

        let result = playRound(humanSelection,computerSelection);
        if (result === "you win") {
            humanScore++;
        }
        else if (result === "you lose") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("you won the game");
        alert("you won the game")
    } else if (humanScore === computerScore) {
        console.log("its a tie");
        alert("you lost the game")
    } else {
        console.log("you lost the game");
        alert("you lost the game")
    }
}

playGame();
