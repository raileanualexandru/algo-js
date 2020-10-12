const readlineSync = require("readline-sync");
let firstName = readlineSync.question('Enter your first name, please \n');
let lastName = readlineSync.question('Enter your last name, please \n');
let city = readlineSync.question('Enter your city of living, please \n');

console.log("You are "+ firstName + " " + lastName + " and you live in " + city);