const readline = require("readline-sync");
let num1 = readline.question("Please enter your first number");
let num2=readline.question("Please enter your second number");
let operator=readline.question("Please enter the operation to perform: +, -, *, /")

function add(num1,num2) {
    return num1 + num2;
}
function sub(num1,num2) {
    return num1 - num2;
}
function mul(num1,num2,) {
    return num1 * num2;
}
function div(num1,num2) {
    return num1 / num2;
}
if  (operator === '+') {
console.log("The result is: " + (add(Number(num1),Number(num2))))
if (operator === '-')
console.log("The result is: " + (sub(Number(num1),Number(num2))))
if (operator === '*')
console.log("The result is: " + (mul(Number(num1),Number(num2))))
if (operator === '/')
console.log("The result is: " + (div(Number(num1),Number(num2))))
} else {
    console.log("Error")
}