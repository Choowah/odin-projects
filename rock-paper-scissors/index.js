//Generate computer signal using random
// 0 signifying rock
// 1 signifying paper
// 2 signifying scissors

let computerSignal
let playerSignal
let result
let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)
    if (computerChoice === 0){
        computerSignal = "rock"
    } else if (computerChoice === 1){
        computerSignal = "paper"
    } else {
        computerSignal = "scissors"
    }
    return computerSignal;
}

// // Obtain player choice

let rock = document.getElementById("rock")
rock.addEventListener("click", playerChoice);

let paper = document.getElementById("paper")
paper.addEventListener("click", playerChoice)

let scissors = document.getElementById("scissors")
scissors.addEventListener("click", playerChoice)

let announcement = document.querySelector("p")

// Create clicked animation

let img = document.querySelectorAll("img");
img.forEach(img => img.addEventListener("transitionend",removeTransition))

function playAnimation(e){
    e.target.classList.add("animated");
}
function removeTransition(e){
    if(e.propertyName !== "scale") return;
    e.target.classList.remove("animated")
    console.log(e.target)
}

function playerChoice(e){
    if(e.target.parentElement.id === "rock" || e.target.parentElement.id === "paper" || e.target.parentElement.id === "scissors"){
    playerSignal = e.target.parentElement.id;
    playAnimation(e);
    getComputerChoice();
    compareChoices(playerSignal,computerSignal);

    let playerScoreboard = document.querySelector(".score")
    playerScoreboard.textContent = playerScore
    
    let computerScoreboard = document.querySelectorAll(".score")[2]
    computerScoreboard.textContent = computerScore
    }

    if (playerScore === 5){
        alert("Player Won!")
    } else if (computerScore === 5){
        alert ("Computer Won")
    }
}

// Create function taking two argument and generate winner or draw

function compareChoices(playerSignal,computerSignal){
    if (playerSignal === "rock"){
        if (computerSignal === "rock") {
            announcement.textContent = "It's a Tie!"
        } else if (computerSignal === "paper"){
            announcement.textContent = "You lost!"
            computerScore++;
            return result
        } else if (computerSignal === "scissors"){
            announcement.textContent = "You won!"
            playerScore++;
            return result
        } else {
            result = "Issues with the computerSignal"
        }
    } else if (playerSignal === "paper") {
        if (computerSignal === "rock") {
            announcement.textContent = "You won!"
            playerScore++;
            return result
        } else if (computerSignal === "paper"){
            announcement.textContent = "It's a tie!"
            return result
        } else if (computerSignal === "scissors"){
            announcement.textContent = "You lost!"
            computerScore++;
            return result
        } else {
            result = "Issues with the computerSignal"
        }
    } else if (playerSignal === "scissors") {
        if (computerSignal === "rock") {
            announcement.textContent = "You lost!"
            computerScore++;
            return result
        } else if (computerSignal === "paper"){
            announcement.textContent = "You won!"
            playerScore++;
            return result
        } else if (computerSignal === "scissors"){
            announcement.textContent = "It's a tie!"
            return result
        } else {
            result = "Issues with the computerSignal"
        }
    } else {
        alert("codes is having issues")
    }
}



