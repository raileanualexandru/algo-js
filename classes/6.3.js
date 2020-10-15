class Rectangle{
    constructor(topLeftXPos,topLeftYPos,width,length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle){
        if(((otherRectangle.topLeftXPos >= this.topLeftXPos && otherRectangle.topLeftXPos <= this.topLeftXPos + this.width)
        &&(otherRectangle.topLeftYPos >= this.topLeftYPos && otherRectangle.topLeftYPos <= this.topLeftYPos + this.length))
        ||((this.topLeftXPos >= otherRectangle.topLeftXPos && this.topLeftXPos <= otherRectangle.topLeftXPos + otherRectangle.width)
        &&(this.topLeftYPos >= otherRectangle.topLeftYPos && this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.length))){
            return true;
        }
        return false;
    }
   
}
//random function
function randomPos(){
 return  Math.floor((Math.random() * 100) +1);
}

let rectangleStack = new Array;
for(let i = 0; i < 1000; i++){
    rectangleStack[i] = new Rectangle(randomPos(), randomPos(),randomPos(),randomPos());
}

for(let i = 0; i < 1000; i++){
    for( j = i+1; j < 1000; j++){
        if(rectangleStack[i].collides(rectangleStack[j])==true){
            console.log("rectangle "+ i + "collides with rectangle "+ j);
        }
    }
}