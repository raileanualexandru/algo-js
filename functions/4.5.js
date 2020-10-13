const readlineSync = require("readline-sync");
function calcDistance(xa,ya,xb,yb){
return Math.sqrt((Math.pow(xb-xa,2)+Math.pow(yb-ya,2)));
}

/*xa, ya - the coordinates of point A
  xb, yb - the coordinates of point B
  */

console.log(calcDistance(1,1,2,2));
console.log(calcDistance(1,1,3,1));
console.log(calcDistance(4,1,1,1));
console.log(calcDistance(-2,2,2,-2));

let XA = new Number(readlineSync.question("Enter XA: "));
let YA = new Number(readlineSync.question("Enter YA: "));
let XB = new Number(readlineSync.question("Enter XB: "));
let YB = new Number(readlineSync.question("Enter YB: "));

console.log("The distance between A and B is : " + calcDistance(XA,YA,XB,YB));