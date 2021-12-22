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
}

let key = 'color';
randomCircleArr[key] = 'no color defined';
//randomCircleArr["setColor"] = function(color) { randomCircleArr.color = color};  //setting the color

//pcs of circle to make
let pcs = 5;

for (let i = 0; i < pcs; i++) {
//randomCircleArr.push(valueArr[Math.floor(Math.random() * pcs)]);

  let circle = new Circle([Math.ceil(Math.random() * pcs)]);

  circle.color = 'color not defined'
  //getter always self reference --> "this."
  circle.setColor = function (color) {
     this.color = color;
  }
  circle.setColor('f3f3fe')
  circle.getColor = function (){
      return this.color;
  }

console.log(circle.getColor())


// instantiate pcs(5x) circles with rand
    randomCircleArr.push(circle);
//sum of Area
    resultAreaC += randomCircleArr[i].circArea();
//sum of Diameter
    resultDiameterC += randomCircleArr[i].circDiameter();

//print out AREA & DIAMETER & RADIUS
    console.log("Circle " + (i+1) + ": Area is: " + randomCircleArr[i].circArea()
      + ", Diameter is: " + randomCircleArr[i].circDiameter());
//print out
    console.log(" Circle " + (i+1) + ": Radius: " + randomCircleArr[i].radius + " Color: " + circle.color);
}

console.log("\nAverage Diameter of " + pcs + " Circles, with the sum value of " + resultDiameterC + " is " + resultDiameterC/pcs);
console.log("Average Area of " + pcs + " Circles, with the sum value of " + resultAreaC + " is " + resultAreaC/pcs);

//****************** Code checking ***************************************************
console.log("\n*****************\n");

//console.log("*****changed***********\n");
// console.log(randomCircleArr.color)
// console.log(randomCircleArr.setColor('f3f3fe'));
// console.log(randomCircleArr.color);
// console.log("get color ==> " + randomCircleArr.getColor);
// let colorAllC = randomCircleArr.setColor('f3f3fe');
// console.log(randomCircleArr);

console.log("***********************************  AFTER DESTROY **************************");
//destroy by keys you can
Object.keys(randomCircleArr).forEach(key => delete randomCircleArr[key]);
console.log("randomCircleArr ==> " + randomCircleArr);
console.log(randomCircleArr);
randomCircleArr = null;   // ce hoces vse zbrisat
console.log(randomCircleArr);

