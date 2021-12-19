// class
class Circle {
    constructor(_radius) {
        this.radius = _radius;
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
        console.log('krog 1: ploščina ${radius} obseg: ${this.circDiameter}');
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
}

let Circle1 = new Circle(2);
console.log(Circle1.circArea() + " " + Circle1.circDiameter());
console.log(Circle1);
console.log(Circle1 instanceof Circle); //check if it is the wright class
Circle1.printDescription(randRadius());


//console.log(randRadius())
console.log(randomCircleArr)

