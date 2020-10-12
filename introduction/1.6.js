const readlineSync = require("readline-sync");
let firstNumber = new Number(readlineSync.question('Enter 1 number, please \n'));
let secondNumber = new Number(readlineSync.question('Enter 2 number, please \n'));
console.log("the rest of the integer division is " + firstNumber % secondNumber);
