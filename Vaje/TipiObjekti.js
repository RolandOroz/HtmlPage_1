// class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //method AREA
    circArea() {
        return Math.PI*(this.radius * this.radius);
    }
    //method DIAMETER
    circDiameter() {
        return 2 * Math.PI * this.radius;
    }
    //method DESCRIPTION of class
    printDescription() {
        console.log('krog 1: ploščina ${this.circArea} obseg: ${this.circDiameter}');
    }
}


// TODO making a function for random radius values
let pcs = 5;
let randomCircleArr = [];

function randRadius() {
    let valueArr = [15, 6, 29, 12, 3];
    for (let i = 0; i < pcs; i++ ) {
        randomCircleArr.push(valueArr[Math.floor(Math.random()
            * pcs)]);
    }
    // let Circle1 = new Circle(randomCircleArr[0].value);
    // let Circle2 = new Circle(randomCircleArr[1]);
    // let Circle3 = new Circle(randomCircleArr[2]);
    // let Circle4 = new Circle(randomCircleArr[3]);
    // let Circle5 = new Circle(randomCircleArr[4]);

}


//****************** Code checking ***************************************************
let Circle01 = new Circle(6);
console.log(Circle01);
console.log("Area is: " + Circle01.circArea() + ", diameter is: " + Circle01.circDiameter());
console.log(Circle01 instanceof Circle); //check if it is the wright class





//*************************************************************************************
//Circle01.circArea(randRadius());
//console.log(randomCircleArr)
//console.log(randomCircleArr)
//console.log(Circle1)

