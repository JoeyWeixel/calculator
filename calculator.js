function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(!Number(b)) return undefined;
    return a / b;
}

function operate(a, b, operator){
    if(operator === '+') return add(a,b);
    if(operator === '-') return subtract(a,b);
    if(operator === '*') return multiply(a,b);
    if(operator === '/') return divide(a,b);
    else return b;
}

function clear(){
    storedNumber = "0";
    editingNumber = "0";
    operator = undefined;
    displayNumber(editingNumber);
}

function displayNumber(number){
    screen.textContent = number;
}

function switchEditingNumber(){
    storedNumber = operate(storedNumber, editingNumber, operator);
        editingNumber = "0";
        displayNumber(Math.round(Number(storedNumber) * 100) / 100);
}

function onClick(e){
    let selection = e.target;
    if(selection.classList.contains("clear")) clear();
    if(selection.classList.contains("number")){
        editingNumber = Number(editingNumber)*10 + Number(selection.innerText);
        displayNumber(editingNumber);
    }
    if(selection.classList.contains("operator")){ 
        switchEditingNumber();
        operator = selection.innerText;
    }
    if(selection.classList.contains("equal")){
        switchEditingNumber();
        operator = undefined;
    }
    return undefined;
}

// (firstNumber + secondNumber) - 

const screen = document.querySelector('.display .text');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => addEventListener('click', onClick));

let editingNumber = "0";
let storedNumber = "0";
let operator;
clear();