//first create style and form
const body = document.querySelector('body');
// rounds form
const formDiv = document.createElement('div')
formDiv.id = "rounds";

formDiv.setAttribute('style', ' position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);');

const input = document.createElement('input');
input.id = "input";
input.type = "text";
input.placeholder = "Enter the number of rounds";
input.setAttribute('style','height: 34px; font-size: 16px;');
const submit = document.createElement('button');
submit.id = 'submit';
submit.innerHTML= "Submit";

formDiv.appendChild(input);
formDiv.appendChild(submit);

body.appendChild(formDiv);

const container = document.querySelector('#main');
container.setAttribute('style', ' position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);');
container.classList.add("invisible");

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')
//div to add game text
const gameText = document.createElement('div');
gameText.id = 'text';
gameText.innerHTML = "";
container.appendChild(gameText);

//reset and exit buttons created 
const end = document.createElement('div');
end.id = "gameOverChoice";
end.classList.add('invisible');

end.setAttribute('style', ' position: relative; top: 50%; left: 50%; transform: translate(-50%, 0%);');

const reset = document.createElement('button');
reset.id = "reset";
reset.innerHTML = "Yes";

const exit = document.createElement('button');
exit.id = 'exit';
exit.innerHTML = 'No';

end.appendChild(reset);
end.appendChild(exit)


container.appendChild(end);


//adding eventlisteners

let roundCount = 0;
let rounds;
let playerChoice;
let playerScore = 0;
let compScore = 0;

const computerPlay = () =>{
    let choice = ["rock", "paper", "scissors"];
    let len = choice.length;
    return choice[Math.floor(Math.random() *Math.floor(len))];
}

const checkRound = () =>{
    if(roundCount == rounds){
        rock.classList.add("invisible");
        paper.classList.add("invisible");
        scissors.classList.add("invisible");
        gameOver();
    } else{
        return;
    }
}

const clearAll = () =>{
    let allDivs = document.querySelectorAll('div');
    allDivs.forEach((div)=>{
        div.classList.add("invisible");
    });
}

submit.addEventListener('click', () => {
    rounds = document.getElementById('input').value;
    if(isNaN(Number(rounds))){
        alert("Please enter numbers only");
    }else{
        rounds = Number(rounds);
        formDiv.classList.add("invisible");
        container.classList.remove('invisible');
    }
});




exit.addEventListener('click', ()=>{
    clearAll();    
});

reset.addEventListener('click', () =>{
    clearAll();
    formDiv.classList.remove('invisible');
    gameText.classList.remove('invisible');
    rock.classList.remove("invisible");
    paper.classList.remove("invisible");
    scissors.classList.remove("invisible");
    roundCount = 0;
    playerScore = 0;
    compScore = 0;
    gameText.innerHTML = "";
});

rock.addEventListener('click', () =>{
    let comp = computerPlay();
    playerChoice = rock.innerHTML;
    gameText.innerHTML = game(playerChoice, comp);
    gameText.innerHTML += "<br /> <br />";
    gameText.innerHTML += `Player Score: ${playerScore}  Computer Score: ${compScore}`;
    roundCount++;
    
    checkRound();
     
});

paper.addEventListener('click', () =>{
    let comp = computerPlay();
    playerChoice = paper.innerHTML;
    gameText.innerHTML = game(playerChoice, comp);
    gameText.innerHTML += "<br /> <br />";
    gameText.innerHTML += `Player Score: ${playerScore}  Computer Score: ${compScore}`;
    roundCount++;    
    checkRound();    
});

scissors.addEventListener('click', () =>{
    let comp = computerPlay();
    playerChoice = scissors.innerHTML;
    gameText.innerHTML = game(playerChoice, comp);
    gameText.innerHTML += "<br /> <br />";
    gameText.innerHTML += `Player Score: ${playerScore}  Computer Score: ${compScore}`;
    roundCount++;    
    checkRound();    
});

const game = (pChoice, cChoice) =>{
    let lowerS = pChoice.toLowerCase();
    let computerSelection = cChoice;

    if( lowerS === "rock" && computerSelection === "scissors"){
       return win(pChoice,computerSelection);  
    }
    else if(lowerS === "paper" && computerSelection === "rock"){
        return win(pChoice,computerSelection);
    }
    else if(lowerS === "scissors" && computerSelection === "paper"){
        return win(pChoice,computerSelection);
    }
    else if( lowerS === "scissors" && computerSelection === "rock"){
        return lose(pChoice,computerSelection);
    }
    else if(lowerS === "rock" && computerSelection === "paper"){
        return lose(pChoice,computerSelection);
    }
    else if(lowerS === "paper" && computerSelection === "scissors"){
        return lose(pChoice,computerSelection);
    }
    else if( lowerS === "rock" && computerSelection === "rock"){
        return tie(pChoice,computerSelection);
    }
    else if(lowerS === "paper" && computerSelection === "paper"){
        return tie(pChoice,computerSelection);
    }
    else if(lowerS === "scissors" && computerSelection === "scissors"){
        return tie(pChoice,computerSelection);
    }
}

const win = (playerSelection, computerSelection) =>{
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
    
}

const lose = (playerSelection, computerSelection) =>{
    compScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
    
}

const tie = (playerSelection, computerSelection) =>{
    return `It's a Tie!  You picked: ${playerSelection} and they picked: ${computerSelection}`;
    
}

const gameOver = () => {
    if(playerScore > compScore){
        gameText.innerHTML += "<br /> <br /> Game Over. You Won! Do you want to play again?";
    }else if(playerScore < compScore){
        gameText.innerHTML += "<br /> <br />Game Over. You Lost. Do you want to play again?";
    }else{
        gameText.innerHTML += "<br /> <br />Game Over. It's a Tie! Do you want to play again?";
    }
    end.classList.remove("invisible");   
}

