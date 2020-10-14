// the object created with ex 5.1
const readlineSync = require("readline-sync");

function askTvSerie(name, productionYear, castMembers) {
    this.name = readlineSync.question("Enter the NAME of your favorite TV serie \n");
    this.productionYear = readlineSync.question("Enter the PRODUCTION YEAR of your favorite TV serie \n");
    let arr = new Array;
    let n = new Number(readlineSync.question("how much member cast you have? "));
    for (let i = 0; i < n; i++) {
        arr.push(readlineSync.question("cast member " + (i + 1) + ": "));

    }
    this.castMembers = arr;

}


var obj1 = new askTvSerie;

console.log(JSON.stringify(obj1));

// exercise 5.2
var castArray = Object.values(obj1.castMembers);




function randomizeCast(tvSerie) {
    tvSerie.sort(() => Math.random() - 0.5);
}

randomizeCast(castArray);

console.log(JSON.stringify(castArray));

