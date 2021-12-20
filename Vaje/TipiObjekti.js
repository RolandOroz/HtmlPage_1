let randomCircleArr = [];  //random circle radius numbers
let resultAreaC = 0;
let resultDiameterC = 0;

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
        console.log('krog: ploščina ${this.circArea} obseg: ${this.circDiameter}');
    }
}

//pcs of circle to make
let pcs = 5;
//let valueArr = [15, 6, 29, 12, 3];
for (let i = 0; i < pcs; i++) {
//randomCircleArr.push(valueArr[Math.floor(Math.random() * pcs)]);

// instantiate pcs(5x) circles with rand
    randomCircleArr.push(new Circle([Math.ceil(Math.random()
      * pcs)]));
//sum of Area
    resultAreaC += randomCircleArr[i].circArea();
//sum of Diameter
    resultDiameterC += randomCircleArr[i].circDiameter();
//print out all randCircles
    console.log("Circle " + (i+1) + ": Area is: " + randomCircleArr[i].circArea()
      + ", Diameter is: " + randomCircleArr[i].circDiameter() + " of " + Object.entries(randomCircleArr[i]));
}

// randomCircleArr["color"] = '';
// randomCircleArr["setColor"] = '';
// randomCircleArr["getColor"] = '';

let key = 'color';
randomCircleArr[key] = 'something';


//****************** Code checking ***************************************************
console.log("\n***TEST***TEST***TEST***\n");
console.log(randomCircleArr)
console.log();
console.log(randomCircleArr.color)

console.log("\nAverage Diameter of " + pcs + " Circles, with the sum value of " + resultDiameterC + " is " + resultDiameterC/pcs);
console.log("Average Area of " + pcs + " Circles, with the sum value of " + resultAreaC + " is " + resultAreaC/pcs);
//*************************************************************************************
//Circle01.circArea(randRadius());
//console.log(randomCircleArr)
//console.log(randomCircleArr)
//console.log(Circle1)

