const readlineSync = require("readline-sync");
let firstNumber = new Number(readlineSync.question('Enter first decimal number, please \n'));
let secondNumber = new Number(readlineSync.question('Enter second decimal number, please \n'));

console.log("integer par of first decimal number is: " + Math.trunc(firstNumber));
console.log("multiplying them = " + Math.trunc(firstNumber)*secondNumber);