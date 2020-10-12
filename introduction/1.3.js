const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Enter your first name please \n');
console.log("Hello " + firstName);