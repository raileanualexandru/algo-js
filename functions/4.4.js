//generating Array
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
let tempArr = [];
tempArr = multiRand(elements);



//exercise 4.4
//average
function average(arr){
    let sum = 0;
 for(let i = 0; l = arr.length, i < l; i++){
    sum += arr[i];
 }
 return sum / arr.length;

}

//min function
function min(arr){
    let minimum = arr[0];
    for ( let i = 0; l = arr.length, i < l; i++){
        if (arr[i] < minimum){
        minimum = arr[i];
        }
    }
    return minimum;
}

//max function
function max(arr){
    let maximum = arr[0];
    for(let i = 0; l = arr.length, i < l; i++){
        if(arr[i] > maximum){
            maximum = arr[i];
        }
    }
    return maximum;
}


console.log(tempArr);
console.log("array average is: " + average(tempArr));
console.log("min of array is : "+ min(tempArr));
console.log("max of array is : "+ max(tempArr));