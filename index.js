const choiceArray = ["Rock", "Paper", "Scissors"]
const message = document.querySelector(".message");
let score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
score = 0;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", playGame)
}

 function playGame(e){
    let playerChoice = e.target.innerText;
    console.log(playerChoice)
    let computerHand = Math.floor(Math.random() * choiceArray.length);
    let computerChoice = choiceArray[computerHand];
    console.log(computerChoice)
    message.innerHTML = "Computer's hand " + computerChoice + "<br>";
    let outcome;
    if(playerChoice === computerChoice){
        outcome = "The game is tie!"
    } else if ((playerChoice === "Paper") && (computerChoice === "Rock")){
        outcome = "Player Won";
        score++;
    } else if (playerChoice === "Rock" && computerChoice === "Scissors"){
        outcome = "Player Won";
        score++;
    } else if (playerChoice === "Scissors" && computerChoice === "Paper"){
        outcome = "Player Won";
        score++;
    } else {
        outcome = "Player Lost";
        score--;
    }
    message.innerHTML += `${outcome} <br> Player ${score}`
 }