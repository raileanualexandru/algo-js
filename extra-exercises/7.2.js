const readlineSync = require("readline-sync");
let n = new Number(readlineSync.question("n = "));



function fibonacci(n) {
    if ((n == 0) || (n == 1)){
        return n;
    } 
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

}

console.log("Fibonacci " + n + " = " + fibonacci(n));