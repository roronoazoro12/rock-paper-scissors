const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const tryagain=document.getElementById('tryagain');
let playerChoice;
let computerChoice;
const choices = ['rock', 'paper', 'scissors'];
computerChoice=(choices[Math.floor(Math.random()*3)]);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        playerChoiceDisplay.innerHTML = playerChoice;
        computerChoiceDisplay.innerHTML = computerChoice;
        getResult();
        tryagain.disabled=false;
})});

function getResult(){
    if(playerChoice==computerChoice){
        resultDisplay.innerHTML = "Its a tie!"
    }
    else if(
        (playerChoice=="rock" && computerChoice=="scissors")||
        (playerChoice=="paper" && computerChoice=="rock")||
        (playerChoice=="scissors" && computerChoice=="paper")
        ){
             resultDisplay.innerHTML = "You Win!";
    } else {
        resultDisplay.innerHTML = "You lose!";
    }
}
tryagain.addEventListener("click",()=>{
    
    playerChoice=null;
    computerChoice=null;
    playerChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
})