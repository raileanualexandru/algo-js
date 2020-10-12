const readlineSync = require("readline-sync");
var dayNumber = new Number(readlineSync.question('Enter a number between 1 and 7 \n'));
dayNumber = Number(dayNumber);

switch (dayNumber) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default: console.log("Wrong choice");
}