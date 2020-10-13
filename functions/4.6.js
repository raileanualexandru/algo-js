const readlineSync = require("readline-sync");

function factorial(a) {
    if (a == 0) {
        return 1;
    }
    else {
        return a * factorial(a - 1);
    }
}

let number = new Number(readlineSync.question("Enter a positive number: "));
console.log("number! = " + factorial(number));