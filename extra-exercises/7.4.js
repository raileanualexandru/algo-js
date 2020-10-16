const readlineSync = require("readline-sync");
var fs = require('fs');

//let pizzaFlavors = fs.readFile('pizza-flavors.txt', 'utf8');
let arr = new Array;

console.log("Hello! Welcome to the Pizza Flavors Manager.\n\n");

while (true) {
    console.log("Please choose your actions:\n\n1 - List all the pizza flavors\n2 - Add a new pizza flavor\n3 - Remove a pizza flavor\n4 - Exit this program \n\n");
    var n = parseInt(readlineSync.question("Enter your action's number: \n"));


    switch (n) {
        case 1:
            if (arr.length == 0) {
                console.log("none\n")
            } else {

                console.log("Flavors list: \n" + arr + "\n");
            }

            break;

        case 2: arr.push(readlineSync.question("flavor: "));
                console.log("\n")
            break;
        case 3: let i = parseInt(readlineSync.question("position of flavor to delete: "));
            arr.splice(i - 1, 1);

            break;
        case 4: process.exit();

        default: console.log("not a valid command!\n");
    }
}
