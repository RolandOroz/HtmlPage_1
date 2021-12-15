let arrayRandN = [];  //1.naloga
const decASCIITable = []; //0-127
let decAtoZUpper = []; //65-90
let decAtoZLower = [];//97 -122

//let decaTozAndAtoZ = [...new Set([...decAtoZLower, ...decAtoZUpper])]; //
let counter;
let x;

//ASCII table in DEC
for (let i = 0; i <= 127; i++) {
    decASCIITable[i] = i;
    // console.log(decAtoZUpper[i]);
}

function sliceAToZ(toArray, start, end) {
    toArray = decASCIITable.slice(start, end);
    return toArray;
}

//****************************************************

console.log("a-z decvalues= " + decAtoZLower);
// console.log(RandomCreator(arrayN, 26, 1, 102));
// console.log(decASCIITable);
console.log(decASCIITable);
console.log("A-Z decvalues= " + sliceAToZ(decAtoZUpper, 65, 91));
console.log("A-Z decvalues= " + sliceAToZ(decAtoZLower, 97, 124));


/*//RANDOM FUNCTION example for later use
function RandomCreator( limit,min, max) {
    for (let i = 0; i < limit; i++) {
        random = Math.floor(Math.random() * (max)+min);
        arrayRandN[i] = i + random;
        console.log(arrayRandN[i] + " " + i);
    }
}
console.log(RandomCreator( 26, 1, 100));*/
