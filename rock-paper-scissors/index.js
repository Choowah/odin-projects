//Generate computer signal using random
// 0 signifying rock
// 1 signifying paper
// 2 signifying scissors

let computerSignal
let formattedPlayerChoice
let result

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

// Obtain player choice

function getPlayerChoice(){
    let playerChoice = prompt("Pick Rock / Paper / Scissors")
    formattedPlayerChoice = playerChoice.toLowerCase();
    if (formattedPlayerChoice === "rock" || formattedPlayerChoice === "paper" || formattedPlayerChoice === "scissors"){
        return formattedPlayerChoice;
    } else {
        alert("Please only enter: Rock / Paper/ Scissors")
        //Will need the code to loop back to another choice without having to invoke the function again in the console
    }
}

// Create function taking two argument and generate winner or draw

function compareChoices(formattedPlayerChoice,computerSignal){
    if (formattedPlayerChoice === "rock"){
        if (computerSignal === "rock") {
            result = "It's a tie!"
            return result
        } else if (computerSignal === "paper"){
            result = "You lost!"
            return result
        } else if (computerSignal === "scissors"){
            result = "You won!"
            return result
        } else {
            result = "Issues with the computerSignal"
        }
    } else if (formattedPlayerChoice === "paper") {
        if (computerSignal === "rock") {
            result = "You won!"
            return result
        } else if (computerSignal === "paper"){
            result = "It's a tie!"
            return result
        } else if (computerSignal === "scissors"){
            result = "You lost!"
            return result
        } else {
            result = "Issues with the computerSignal"
        }
    } else if (formattedPlayerChoice === "scissors") {
        if (computerSignal === "rock") {
            result = "You lost!"
            return result
        } else if (computerSignal === "paper"){
            result = "You won!"
            return result
        } else if (computerSignal === "scissors"){
            result = "It's a tie!"
            return result
        } else {
            result = "Issues with the computerSignal"
        }
    } else {
        alert("formattedPlayerChoice is having issues")
    }
}

getComputerChoice();
getPlayerChoice();
compareChoices(formattedPlayerChoice,computerSignal);

// Console.log result (player / computer win / draw)

console.log("You chose: " + formattedPlayerChoice + "\nComputer chose: " + computerSignal + "\n" + result)