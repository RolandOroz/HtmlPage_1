let arrayRandN = [];  //1.naloga
let x;
const decASCIITable = []; //0-127




let counter;


//ASCII table in DEC
for (let i = 0; i <= 127; i++) {
    decASCIITable[i] = i;
    // console.log(decAtoZUpper[i]);
}


function sliceAToZ(toArray, start, end) {
    toArray = decASCIITable.slice(start, end);
    return toArray;
}
let decAtoZUpper = sliceAToZ(decASCIITable, 65, 91);
let decAtoZLower = sliceAToZ(decASCIITable, 97, 124);

//****************************************************
// console.log(RandomCreator(arrayN, 26, 1, 102));
console.log("\na-z slice values= " + sliceAToZ(decAtoZLower, 97, 124));  //97-122 ASCII
console.log("A-Z slice values= " + sliceAToZ(decAtoZUpper, 65, 91));     //65-90  ASCII

console.log("\nASCII Table dec array --> " + decASCIITable);
console.log("\nA-Z array--> " + decAtoZUpper)
console.log("a-z array--> " + decAtoZLower)


/*//RANDOM FUNCTION example for later use
function RandomCreator( limit,min, max) {
    for (let i = 0; i < limit; i++) {
        random = Math.floor(Math.random() * (max)+min);
        arrayRandN[i] = i + random;
        console.log(arrayRandN[i] + " " + i);
    }
}
console.log(RandomCreator( 26, 1, 100));*/
