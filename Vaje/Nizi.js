let randomValues = [];   //1.naloga
const decASCIITable = []; //0-127 ASCII dec values
let counterASCII = 127;
let random;
let randomD;
let limit = 25; //random counter limit
let randomValuesToChar = [];

//for loop to populate array indexes with num 0-127
for (let i = 0; i <= counterASCII; i++) {
  decASCIITable[i] = i;
}

//FUNCTION for slicing array
function sliceASCII(fromArray, start, end) {
  return fromArray.slice(start, end);
}

//made two arrays one for A-Z & other for a-z ASCII dec value
let decAtoZUpper = sliceASCII(decASCIITable, 65, 91);   //65-90  ASCII
let decAtoZLower = sliceASCII(decASCIITable, 97, 123);  //97-122 ASCII

//joining two arrays in to one array of ASCII dec values from A-Z to a-z
const combinedAaZzArray = decAtoZUpper.concat(decAtoZLower);

//RANDOM FUNCTION EXMPL with Math.random
function randomCreator(array) {
  random = array[Math.floor(Math.random() * limit)]
}

//for loop to populat random items in to an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operatorrray
for (let i = 0; i < limit; i++) {
  randomValues[i] = combinedAaZzArray[Math.floor(Math.random() * combinedAaZzArray.length)];
  // randomValues.push(combinedAaZzArray[Math.floor(Math.random() * combinedAaZzArray.length)]); isti kurac
}

/*
function convertDecToChar() {

}*/


//TIP**********
//start learning conditional (ternary) operator
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

//****************** Code checking ***************************************************
// console.log(RandomCreator(arrayN, 26,https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator 1, 102));
console.log("\na-z slice values= " + sliceASCII(decAtoZLower, 97, 124));
console.log("A-Z slice values= " + sliceASCII(decAtoZUpper, 65, 91));

console.log("\nASCII Table dec array --> " + decASCIITable);
console.log("\nA-Z array--> " + decAtoZUpper);
console.log("a-z array--> " + decAtoZLower);
console.log("\nCombined arrray --> " + combinedAaZzArray);
//console.log(randomCreator(combinedAaZzArray));
//console.log(random)
console.log("new array of random numbers --> " + randomValues);

//print converted dec values from random numbers to char --backwards  3. naloga
//for (let n = 0; n < randomValues.length; n++) {  //-- forward looping
for (let n = randomValues.length - 1; n >= 0; n--) {  //--backwards looping
  randomValuesToChar[n] = String.fromCharCode(randomValues[n]);
}
console.log("converted dec values from random numbers to char --> " + randomValuesToChar);


//console.log(randomValuesToChar.indexOf(String.fromCharCode(65)));
//**!!  today from here
/*let charF = randomValuesToChar[0];
let charFASCII = charF.charCodeAt(0);*/

let searchTerm = 'a';
const indexOfFirst = randomValuesToChar.indexOf(searchTerm);
console.log("occurences1 for index is -1 -> " + (indexOfFirst+1));
console.log("occurences2 is index num " + randomValuesToChar.indexOf(searchTerm, (indexOfFirst+1)));
let f = randomValuesToChar.toString();
let c= randomValuesToChar.filter(el => el === 'a');

for (let i=0; i < randomValuesToChar.length; i++) {
let d;
  if(randomValuesToChar.indexOf('a') !== -1){
    let d = randomValuesToChar[i] + i;
    console.log(randomValuesToChar[i] + " " +d.indexOf('a'));
  }
}

const str = '' //TODO convert array to string
let count = 0
let position = randomValuesToChar.indexOf('a')

while (position !== -1) {
  count++
  position = randomValuesToChar.indexOf('a', position + 1)
}
console.log(c);
console.log(f);
console.log("count " + count)

//******************* ideas to implement for later ************************************

/*//RANDOM FUNCTION EXMPL with Date.now  //TODO try out this method later
function randomArr(array) {

  randomD = array[Date.now() % array.length];
}*/

/* primer padajočega izpisa v C#
public static void Izpis(int[] tab)
{
    for (int i = 0; i < tab.Length; i++)
    {
        if(i % 10 == 0)
        {
            Console.WriteLine();
        }
        Console.Write(tab[i] + " ");
    }
}
int[] tabStevil = new int[counter];
for (int i = 0; i < counter; i++)
{
    tabStevil[i] += counter - i;
}*/
/*
console.log(RandomCreator( 26, 1, 100));*/

//********************** side notes & TODO list *******************************
//TODO
// 4. Izpiši vse pozicije A R g T f znakov na ekran. Če znaka ni v nizu izpiši vrednost -1.
// Izpis naj bo naslednji:
//   znak: A pozicije: 2, 6, 8
// znak: B pozicije: 1, 8, 11
// Izpis naj se izvrši na koncu in ne sproti med procesiranjem niza !

