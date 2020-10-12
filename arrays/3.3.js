const arr = [100, 101, 102, 103];
const newArr = [];
for(let i = 0; l = arr.length, i < l; i++){
    newArr[i] = arr[i];
}
console.log(newArr);
// using push
const arrUsingPush = [];
for(let i = 0; l = arr.length, i < l; i++){
arrUsingPush.push(arr[i]);
}
console.log(arrUsingPush);

// using a method old version
var arrUsingMethod = [];
arrUsingMethod = arr.slice();
console.log(arrUsingMethod);
//using ES6 way
var arrUsingES6 = [];
arrUsingES6 = [...arr];
console.log(arrUsingES6);
