let btn = document.querySelectorAll(".btn");
let uiResult = document.querySelector("#results>p");
uiResult.textContent = "";

let uiPlayerScore = document.querySelector(".pScoreSpan");
let uiComScore = document.querySelector(".cScoreSpan");
let plScore = 0;
let comScore = 0;
let counter = 0;

//let choice = [];
//let comChoice = getComputerChoice();

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", (e) =>{
        counter++
        let btnPushed = btn[i].id;
        // Get player's choice
        let plChoice = getPlayerChoice(btnPushed);
        // Get computer's choice
        let comChoice = getComputerChoice();
        // Play a round
        let result = playRound(plChoice, comChoice);
        // Determine a winner
        if(counter == 5){
            if(plScore > comScore){
                uiResult.textContent = "You Win the Game! Congratz!";
                counter = 0;
                plScore = 0;
                comScore = 0;
                uiComScore.textContent = comScore;
                uiPlayerScore.textContent = plScore;
            }else if(comScore > plScore){
                uiResult.textContent = "You Lose. Play again.";
                counter = 0;
                plScore = 0;
                comScore = 0;
                uiComScore.textContent = comScore;
                uiPlayerScore.textContent = plScore;
            }else{
                uiResult.textContent = "It's a tie. Next time.";
                counter = 0;
                plScore = 0;
                comScore = 0;
                uiComScore.textContent = comScore;
                uiPlayerScore.textContent = plScore;
            }
        }else{
            if(result == 1){
                plScore++;
                uiPlayerScore.textContent = plScore;
                uiResult.textContent = `You win! ${plChoice} beats ${comChoice}.`;
            } else if(result == 0){
                uiResult.textContent = "It's a tie!.";
            } else {
                comScore++;
                uiComScore.textContent = comScore;
                uiResult.textContent = `You lose! ${comChoice} beats ${plChoice}.`;
            }
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



