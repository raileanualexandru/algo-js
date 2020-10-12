const readlineSync = require("readline-sync");
let n = new Number(readlineSync.question("Enter a number: "));
var colectedNumbers = new Array;
var sum = 0;
for(let i = 1; i <= n; i++){
colectedNumbers[i] = new Number(readlineSync.question("Enter a number "+ i + " of "+ n + "\n" ));
sum += colectedNumbers[i];
}
console.log("sum of introduced numbers: " + sum);
