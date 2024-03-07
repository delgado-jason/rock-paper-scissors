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
    const WIN = `You win! ${plChoice} beats ${comChoice}.`;
    const TIE = "It's a tie!";
    const LOSE = `You lose! ${comChoice} beats ${plChoice}.`;
    
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

console.log(playRound(getPlayerChoice(), getComputerChoice()));