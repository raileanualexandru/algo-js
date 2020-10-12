const readlineSync = require("readline-sync");
let min, max, current;
min = readlineSync.question("min = ");
max = readlineSync.question("max = ");
if (min > max) {
    console.log("Error, min cannot be greater than max");
}
else {

    current = readlineSync.question("current = ");

    if (current > min && current < max) {
        console.log("current number is between min and max");
    }
}
