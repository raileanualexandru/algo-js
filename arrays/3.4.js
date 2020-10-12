const arr = [78,34,5,67,3,45,100,150,12];
let min = arr[0];
let max = arr[0];
let l = arr.length;
for ( let i = 0; i < l; i++){
    if(arr[i] < min ){
        min = arr[i];
    }
}
console.log("min of array is: " + min);

for(let i = 0; i < l; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log("max of array is : " + max);

// using Math methods

console.log("min of array using method is : " + Math.min(...arr));
console.log("max of array using method is : " + Math.max(...arr));