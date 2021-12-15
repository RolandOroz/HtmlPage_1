const randomValues = [];   //1.naloga
const decASCIITable = []; //0-127 ASCII dec values
let counterASCII = 127;

//for loop to populate array indexes with num 0-127
for (let i = 0; i <= counterASCII; i++) {
    decASCIITable[i] = i;
    // console.log(decAtoZUpper[i]);
}
//FUNCTION for slicing array
function sliceASCII(fromArray, start, end) {
    fromArray = decASCIITable.slice(start, end);
    return fromArray;
}
//made two arrays one for A-Z & other for a-z ASCII dec value
let decAtoZUpper = sliceASCII(decASCIITable, 65, 91);   //97-122 ASCII
let decAtoZLower = sliceASCII(decASCIITable, 97, 124);  //65-90  ASCII

//joining two arrays in to one array of ASCII dec values from A-Z to a-z
const combinedAaZzArray = decAtoZUpper.concat(decAtoZLower);

//****************** Code checking ***************************************************
// console.log(RandomCreator(arrayN, 26, 1, 102));
console.log("\na-z slice values= " + sliceASCII(decAtoZLower, 97, 124));
console.log("A-Z slice values= " + sliceASCII(decAtoZUpper, 65, 91));

console.log("\nASCII Table dec array --> " + decASCIITable);
console.log("\nA-Z array--> " + decAtoZUpper);
console.log("a-z array--> " + decAtoZLower);
console.log("\nCombined arrray --> " + combinedAaZzArray);

//******************* ideas to implement for later ************************************
/* //RANDOM FUNCTION EXMPL
function RandomCreator( limit,min, max) {
    for (let i = 0; i < limit; i++) {
        random = Math.floor(Math.random() * (max)+min);
        arrayRandN[i] = i + random;
        console.log(arrayRandN[i] + " " + i);
    }
}
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
// TODO --> random value selector from combined array with pick limiter
// TODO --> populate randomValues Array with (for) loop
// TODO --> converter from dec to char
