//first create style and form

const container = document.querySelector('#main');
container.setAttribute('style', ' position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')

//reset and exit buttons created 
const reset = document.createElement('button');
reset.id = "reset";
reset.innerHTML = "Reset";

const exit = document.createElement('button');
exit.id = 'exit';
exit.innerHTML = 'Exit';

//container.appendChild(reset);




/*let rounds;
let playerScore = 0;
let compScore = 0;

const roundCount = () => {
        rounds = prompt("Enter the amount of rounds you want to play.");
        while(isNaN(Number(rounds))){
            rounds = prompt("Please enter numbers only");
        }
        rounds = Number(rounds);
    }
const game = () =>{
    roundCount();
    let n = rounds;
    while(n > 0){
        playRound();
        console.log(`Score     PlayerScore: ${playerScore}  ComputerScore: ${compScore}`);
        n--;
    }
    reset();
    console.log("Game Over!")
    return 0;
}

const reset = () => {
    let resetPrompt = prompt("Enter R to reset the game or E to exit" );
    while(resetPrompt.toLowerCase() != "r" && resetPrompt.toLowerCase() != "e"){
        resetPrompt = prompt("CHOOSE R OR E");
    }
    resetPrompt = resetPrompt.toLowerCase();
    if (resetPrompt == "r") {
        playerScore = 0;
        compScore = 0;
        console.log(`GAME HAS BEEN RESET \n SCORES: \n PlayerScore: ${playerScore} ComputerScore: ${compScore}`);
        game();
    } else if(resetPrompt == "e"){
            return 0;
        }
    

}

const computerPlay = () =>{
    let choice = ["rock", "paper", "scissors"];
    let len = choice.length;
    return choice[Math.floor(Math.random() *Math.floor(len))];
}

function playRound(){
    
    let playerSelection = prompt("Rock, Paper, or Scissors? Choose one.");
    
    
    while(playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors"){
        playerSelection = prompt("Rock, Paper, or Scissors? Choose one.");

    }

    let computerSelection = computerPlay();
    let lowerS = playerSelection.toLowerCase();
    
    if( lowerS === "rock" && computerSelection === "scissors"){
        win(playerSelection,computerSelection);
        
    }
    else if(lowerS === "paper" && computerSelection === "rock"){
        win(playerSelection,computerSelection);
    }
    else if(lowerS === "scissors" && computerSelection === "paper"){
        win(playerSelection,computerSelection);
    }
    else if( lowerS === "scissors" && computerSelection === "rock"){
        lose(playerSelection,computerSelection);
    }
    else if(lowerS === "rock" && computerSelection === "paper"){
        lose(playerSelection,computerSelection);
    }
    else if(lowerS === "paper" && computerSelection === "scissors"){
        lose(playerSelection,computerSelection);
    }
    else if( lowerS === "rock" && computerSelection === "rock"){
        tie(playerSelection,computerSelection);
    }
    else if(lowerS === "paper" && computerSelection === "paper"){
        tie(playerSelection,computerSelection);
    }
    else if(lowerS === "scissors" && computerSelection === "scissors"){
        tie(playerSelection,computerSelection);
    }


}


const win = (playerSelection, computerSelection) =>{
    playerScore++;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
}

const lose = (playerSelection, computerSelection) =>{
    compScore++;
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
}

const tie = (playerSelection, computerSelection) =>{
    console.log(`It's a Tie!  You picked: ${playerSelection} and they picked: ${computerSelection}`);
}


game();*/
