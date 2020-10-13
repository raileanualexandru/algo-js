const readlineSync = require("readline-sync");
function calcSurface(x, y){
    return x * y;
}

let rectangleLength = new Number(readlineSync.question("Length =  "));
let rectangleWidth = new Number(readlineSync.question("Width =  "));

console.log("Rectangle surface is : " + calcSurface(rectangleLength,rectangleWidth));
