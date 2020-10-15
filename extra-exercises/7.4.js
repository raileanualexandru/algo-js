const readlineSync = require("readline-sync");
var fs = require('fs');

console.log("Hello! Welcome to the Pizza Flavors Manager.\n\n Please choose your actions:\n\n1 - List all the pizza flavors\n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program ");

let n = new Number(readlineSync.question("Enter your action's number: "));


