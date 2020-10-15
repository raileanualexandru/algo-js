const readlineSync = require("readline-sync");

function randomNumber() {
    return Math.floor((Math.random() * 100) + 1);
}
let n = randomNumber();
//console.log(n);

let guess = new Number(readlineSync.question("Guess the number: "));

if(guess == n){
    console.log("Well guessed!")
}
  else if(guess < n){
        console.log("Too low");
    }
    else{
        console.log("Too high");
    }
while(guess != n){
    let guess = new Number(readlineSync.question("Guess the number: "));

if(guess == n){
    console.log("Well guessed!")
    break;
}
  else if(guess < n){
        console.log("Too low");
    }
    else{
        console.log("Too high");
    }
}