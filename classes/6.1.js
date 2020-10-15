class Circle{
    constructor (xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius; 
    }
    move(xOffset, yOffset){
      this.xPos = this.xPos + xOffset;
      this.yPos = this.yPos + yOffset;
    }
    get surface(){
    return Math.PI * Math.pow(this.radius,2);
    }
}

let obj1 = new Circle(1,5,5);
console.log("obj1 surface" + obj1.surface);
console.log(obj1);
obj1.move(2,3);
console.log(obj1);