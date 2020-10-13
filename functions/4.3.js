const readlineSync = require("readline-sync");
let elements = new Number(readlineSync.question("Enter dimension of array: "));
function rand10() {
    return Math.floor((Math.random() * 10) + 1);
}

function multiRand(n) {
    let arr = new Array;
    for (let i = 0; i < n; i++) {
        arr.push(rand10());
    }
    return arr;
}
console.log(multiRand(elements));