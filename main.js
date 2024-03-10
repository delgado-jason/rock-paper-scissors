let btn = document.querySelectorAll(".btn");

//let choice = [];
//let comChoice = getComputerChoice();

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", (e) =>{
        let btnPushed = btn[i].id;
        // Get player's choice
        let plChoice = getPlayerChoice(btnPushed);
        // Get computer's choice
        let comChoice = getComputerChoice();
        // Play a round
        let result = playRound(plChoice, comChoice);
        // Determine a winner
        if(result == 1){
            console.log(`You win! ${plChoice} beats ${comChoice}.`);
        } else if(result == 0){
            console.log("It's a tie!.");
        } else {
            console.log(`You lose! ${comChoice} beats ${plChoice}.`);
        }
    })
}


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
function getPlayerChoice(b){
    if(b == "rock-btn"){
        return "rock"
    }else if(b == "paper-btn"){
        return "paper";
    }else if(b == "scissors-btn") {
        return "scissors";
    }
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
    /**if(plScore > comScore){
        return "You win the game!";
    } else if(comScore > plScore){
        return "Sorry, you lose.";
    } else{
        return "Great game. It's a tiebreaker!";
    }**/
}



