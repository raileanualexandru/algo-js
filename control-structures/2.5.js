const readlineSync = require("readline-sync");
let favNumber = new Number(readlineSync.question('Enter your favorite number \n'));
while(favNumber != 42){
    console.log("Are you sure?");
    let favNumber = new Number(readlineSync.question('Enter your favorite number \n'));
    if(favNumber==42){
        console.log("this is !!!!");
        break;
    }
}