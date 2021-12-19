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
function randRadius() {

}

let Circle1 = new Circle(2);
console.log(Circle1.circArea() + " " + Circle1.circDiameter());
console.log(Circle1);
console.log(Circle1 instanceof Circle); //check if it is the wright class
Circle1.printDescription();
