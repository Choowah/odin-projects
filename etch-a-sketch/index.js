let column
let row

function createColDiv(amount){
    let div = document.createElement("div")
    let container = document.getElementById("container")
    for (let i = 0; i < amount; i++){
    container.innerHTML += "<div class='colDiv'></div>";
    }
}

function createRowDiv(amount){
    let colDiv = document.querySelectorAll(".colDiv")
    for (let i = 0; i < amount; i++){
        Array.from(colDiv).forEach(colDiv => colDiv.innerHTML += "<div class='rowDiv'></div>");
        }
}

let body = document.querySelector("body")

body.addEventListener("mouseover", changeColor)

let divs = Array.from(document.querySelectorAll("div"))

divs.forEach(div => div.addEventListener("mouseover", changeColor))

function changeColor(e){
    if (e.toElement.localName !== "div") return;
    console.log(e.toElement.localName)
    e.target.classList.add("mouseover")
}

let gridSize = document.getElementById("grid-size")

gridSize.addEventListener("click", getGridSize)

function getGridSize(){
    column = prompt("Enter grid column");
    row = prompt("Enter grid row")
    if (row <= 100 && column <= 100){
        createColDiv(column);
        createRowDiv(row);
    } else {
        alert("Please enter numbers between 0 & 100")
    }
}