let randomCircleArr = [];  //random circle radius numbers
// class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //method AREA
    circArea() {
        return Math.PI * (this.radius * this.radius);
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
let valueArr = [15, 6, 29, 12, 3];
for (let i = 0; i < pcs; i++) {
    randomCircleArr.push(valueArr[Math.floor(Math.random() * pcs)]);
}


//****************** Code checking ***************************************************
let Circle01 = new Circle(6);
console.log("\n***TEST***TEST***TEST***\n");
console.log(Circle01);
console.log("Area is: " + Circle01.circArea() + ", diameter is: " + Circle01.circDiameter());
console.log(Circle01 instanceof Circle); //check if it is the wright class

console.log(randomCircleArr);


//*************************************************************************************
//Circle01.circArea(randRadius());
//console.log(randomCircleArr)
//console.log(randomCircleArr)
//console.log(Circle1)

