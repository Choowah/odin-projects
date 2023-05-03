function add(a,b){
    return (parseFloat(a)+parseFloat(b)).toFixed(3);
}

function subtract(a,b){
    return parseFloat(a)-parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a)*parseFloat(b);
}

function divide(a,b){
    return parseFloat(a)/parseFloat(b);
}

let firstNumber; // firstNumber
let secondNumber; // secondNumber
let operator; //calculate operation (add / subtract / multiply / divide)
let result;

function operate(a,b,x){
    secondNumber = displayValue;

    if (operator === "add"){
        result = add(firstNumber,secondNumber)
    } else if (operator === "subtract") {
        result = subtract(firstNumber,secondNumber)
    } else if (operator === "multiply") {
        result = multiply(firstNumber,secondNumber)
    } else if (operator === "divide") {
        result = divide(firstNumber,secondNumber)
    } else {
        alert ("Operator is having problems")
    }

    calc.textContent += " " + secondNumber;
    input.textContent = result;
    displayValue = result;

    // console.log(firstNumber + " " + secondNumber + " " + operator)
    // console.log(`${operator}`(firstNumber,secondNumber));
}

let displayValue = "";

const clear = document.querySelector("#clear")
const del = document.querySelector("#delete")
const one = document.querySelectorAll(".button")[10]
const two = document.querySelectorAll(".button")[11]
const three = document.querySelectorAll(".button")[12]
const four = document.querySelectorAll(".button")[6]
const five = document.querySelectorAll(".button")[7]
const six = document.querySelectorAll(".button")[8]
const seven = document.querySelectorAll(".button")[2]
const eight = document.querySelectorAll(".button")[3]
const nine = document.querySelectorAll(".button")[4]
const zero = document.querySelectorAll(".button")[15]
const decimal = document.querySelectorAll(".button")[14]
const addButton = document.querySelectorAll(".button")[17]
const subtractButton = document.querySelectorAll(".button")[13]
const multiplyButton = document.querySelectorAll(".button")[9]
const divideButton = document.querySelectorAll(".button")[5]
const equal = document.querySelectorAll(".button")[16]
const input = document.querySelector(".input")
const calc = document.querySelector(".calculating")
const numbers = [one, two, three, four, five, six, seven, eight, nine, zero]
const operators = [addButton, subtractButton, multiplyButton, divideButton]

numbers.forEach(number => number.addEventListener("click", display))
operators.forEach(operator => operator.addEventListener("click", operatorClick))
equal.addEventListener("click",operate)
clear.addEventListener("click",clearCalc)
del.addEventListener("click",deleteLast)
decimal.addEventListener("click", checkDecimal)

function checkDecimal(){
    if(displayValue.includes(".")){
        return;
    } else {
        displayValue += ".";
        input.textContent = displayValue;
    }
}

function deleteLast(){
    displayValue = displayValue.slice(0,-1);
    input.textContent = displayValue;
}

function clearCalc(){
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "";
    input.textContent = 0;
    calc.textContent = 0;
}

function display(e){
    displayValue += e.srcElement.textContent;
    input.textContent = displayValue;
}

function operatorClick(e){
    firstNumber = displayValue;
    calc.textContent = displayValue + " " + e.srcElement.textContent;
    displayValue = "";
    input.textContent = 0;
    operator = e.target.id;
    // Collect secondNumber
}