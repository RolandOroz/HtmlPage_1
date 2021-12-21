let randomCircleArr = [];  //random circle radius numbers
let resultAreaC = 0;
let resultDiameterC = 0;
let colorC = 0;

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

let key = 'color';
randomCircleArr[key] = 'no color defined';
randomCircleArr["setColor"] = function(color) { randomCircleArr.color = color};  //setting the color
// Object.defineProperty(randomCircleArr, "setColor", {
//   set : function(colorS) { randomCircleArr.color = colorS}
// });
//get color method



//pcs of circle to make
let pcs = 5;
//let valueArr = [15, 6, 29, 12, 3];
for (let i = 0; i < pcs; i++) {
//randomCircleArr.push(valueArr[Math.floor(Math.random() * pcs)]);
  let circle = new Circle([Math.ceil(Math.random() * pcs)]);
  /*Object.defineProperty(circle, "color", {
    get : function () {
      return circle.color;
    },
    set : function (color) {
      circle.color = color;
    }
  });
  circle.setColor('f3f3fe');*/

  circle.setColor = function (color) {
    this.setColor = color;
  }
  circle.setColor('5555')
  //circle.color = ''
// instantiate pcs(5x) circles with rand
    randomCircleArr.push(circle);
//sum of Area
    resultAreaC += randomCircleArr[i].circArea();
//sum of Diameter
    resultDiameterC += randomCircleArr[i].circDiameter();

//print out AREA & DIAMETER & RADIUS
    console.log("Circle " + (i+1) + ": Area is: " + randomCircleArr[i].circArea()
      + ", Diameter is: " + randomCircleArr[i].circDiameter() + " of " + Object.entries(randomCircleArr[i]));
//print out
    console.log(" Circle " + (i+1) + ": Radius: " + randomCircleArr[i].radius + " Color: " + circle.color);
}

console.log("\nAverage Diameter of " + pcs + " Circles, with the sum value of " + resultDiameterC + " is " + resultDiameterC/pcs);
console.log("Average Area of " + pcs + " Circles, with the sum value of " + resultAreaC + " is " + resultAreaC/pcs);

//****************** Code checking ***************************************************
console.log("\n*****************\n");
console.log(randomCircleArr.setColor('555'))
console.log(randomCircleArr.color)

//console.log("*****changed***********\n");
// console.log(randomCircleArr.color)
// console.log(randomCircleArr.setColor('f3f3fe'));
// console.log(randomCircleArr.color);
// console.log("get color ==> " + randomCircleArr.getColor);
// let colorAllC = randomCircleArr.setColor('f3f3fe');
// console.log(randomCircleArr);

console.log("***********************************  AFTER DESTROY **************************");

//destroy by keys
Object.keys(randomCircleArr).forEach(key => delete randomCircleArr[key]);
console.log("randomCircleArr ==> " + randomCircleArr);
console.log(randomCircleArr);
