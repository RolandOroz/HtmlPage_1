let randomValues = [];   //1.naloga
const decASCIITable = []; //0-127 ASCII dec values
let counterASCII = 127;
let random;
let randomD;
let limit = 25; //random counter limit

//for loop to populate array indexes with num 0-127
for (let i = 0; i <= counterASCII; i++) {
  decASCIITable[i] = i;
}
//FUNCTION for slicing array
function sliceASCII(fromArray, start, end) {
  return fromArray.slice(start, end);
}
//made two arrays one for A-Z & other for a-z ASCII dec value
let decAtoZUpper = sliceASCII(decASCIITable, 65, 91);   //97-122 ASCII
let decAtoZLower = sliceASCII(decASCIITable, 97, 124);  //65-90  ASCII

//joining two arrays in to one array of ASCII dec values from A-Z to a-z
const combinedAaZzArray = decAtoZUpper.concat(decAtoZLower);

//RANDOM FUNCTION EXMPL with Math.random
function randomCreator(array) {
  random = array[Math.floor(Math.random() * limit)]
}
//for loop to populat random items in ahttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operatorrray
for (let i = 0; i < limit; i++) {
  randomValues[i] = combinedAaZzArray[Math.floor(Math.random() * combinedAaZzArray.length)] ;
  // randomValues.push(combinedAaZzArray[Math.floor(Math.random() * combinedAaZzArray.length)]); isti kurac
}
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
console.log("new array of random numbers --> " + randomValues)



//******************* ideas to implement for later ************************************

//RANDOM FUNCTION EXMPL with Date.now
function randomArr(array) {

  randomD = array[Date.now() % array.length];
}// TODO --> populate randomValues Array with (for) loop

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

//********************** side notes *******************************

// TODO --> converter from dec to char
