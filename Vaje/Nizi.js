const decASCIITable = []; //0-127 ASCII dec values  //1.naloga

let x;
let counterASCII = 127;

//for loop to populate array indexes with num 0-127
for (let i = 0; i <= counterASCII; i++) {
    decASCIITable[i] = i;
    // console.log(decAtoZUpper[i]);
}
//function
function sliceASCII(fromArray, start, end) {
    fromArray = decASCIITable.slice(start, end);
    return fromArray;
}
let decAtoZUpper = sliceASCII(decASCIITable, 65, 91);   //97-122 ASCII
let decAtoZLower = sliceASCII(decASCIITable, 97, 124);  //65-90  ASCII

//****************************************************
// console.log(RandomCreator(arrayN, 26, 1, 102));
console.log("\na-z slice values= " + sliceASCII(decAtoZLower, 97, 124));
console.log("A-Z slice values= " + sliceASCII(decAtoZUpper, 65, 91));

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
