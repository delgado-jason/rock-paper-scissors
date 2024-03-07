// Get the computer's choice
function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);

    if (choice == 1){
        return "rock";
    } else if (choice == 2){
        return "paper";
    } else{
        return "scissors";
    }
}

// Get the player's choice
function getPlayerChoice(){
    let choice = prompt("Please choose rock, paper, or scissors: ").toLowerCase();
    return choice;
}

//Play a round
function playRound(plChoice, comChoice){
    const WIN = 1;
    const TIE = 0;
    const LOSE = -1;
    
    // Determine the winner
    if(plChoice == "rock" && comChoice == "scissors"){
        return WIN;
    } else if(plChoice == "rock" && comChoice == "rock"){
        return TIE;
    } else if(plChoice == "paper" && comChoice == "rock"){
        return WIN;
    } else if(plChoice == "paper" && comChoice == "paper"){
        return TIE;
    } else if(plChoice == "scissors" && comChoice == "paper"){
        return WIN;
    } else if(plChoice == "scissors" && comChoice == "scissors"){
        return TIE;
    } else{
        return LOSE;
    }
}

function playGame(){
    // Set initial scores
    let plScore = 0;
    let comScore = 0;

    // Set counter
    let count = 0;
    while(count < 5){
        count++;
        let playersChoice = getPlayerChoice();
        let computersChoice = getComputerChoice();
        let result = playRound(playersChoice, computersChoice);
        if(result == 1){
            plScore = plScore + 1;
            console.log(`You win! ${playersChoice} beats ${computersChoice}.`);
        } else if(result == 0){
            console.log("It's a tie!.");
        } else {
            comScore = comScore + 1;
            console.log(`You lose! ${computersChoice} beats ${playersChoice}.`);
        }

    }
    if(plScore > comScore){
        return "You win the game!";
    } else if(comScore > plScore){
        return "Sorry, you lose.";
    } else{
        return "Great game. It's a tiebreaker!";
    }
}

console.log(playGame());
