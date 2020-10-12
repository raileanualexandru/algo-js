const readlineSync = require("readline-sync");
let shoeSize = new Number(readlineSync.question('Enter your shoe size, please \n'));
let birthYear = new Number(readlineSync.question('Enter your year of birth, please \n'));
let calculation = (shoeSize*2 + 5)*50 - birthYear + 1766;
console.log("calculation result is: " + calculation);