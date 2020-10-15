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

let obj1 = new Rectangle(0,0,10,5);
let obj2 = new Rectangle(9,4,5,5);
let obj3 = new Rectangle(15,15,1,1);
console.log(obj2.collides(obj1));
console.log(obj3.collides(obj1));

