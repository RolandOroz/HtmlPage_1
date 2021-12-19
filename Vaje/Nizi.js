let randomValues = [];   //1.naloga
const decASCIITable = []; //0-127 ASCII dec values
let counterASCII = 127;


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

/*//RANDOM FUNCTION EXMPL with Math.random
function randomCreator(array) {
  random = array[Math.floor(Math.random() * limit)]
}*/

//for loop to populate random items in to an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operatorrray
for (let i = 0; i < limit; i++) {
  randomValues[i] = combinedAaZzArray[Math.floor(Math.random() * combinedAaZzArray.length)];
  // randomValues.push(combinedAaZzArray[Math.floor(Math.random() * combinedAaZzArray.length)]); same as above
}

//TIP**********
//start learning conditional (ternary) operator
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

//****************** Code checking ***************************************************

 console.log("new array of random numbers --> " + randomValues);
//************************************************************************************

//print converted dec values from random numbers to char --backwards  3. naloga
//for (let n = 0; n < randomValues.length; n++) {  //-- forward looping
for (let n = randomValues.length - 1; n >= 0; n--) {  //--backwards looping
  randomValuesToChar[n] = String.fromCharCode(randomValues[n]);
}
console.log("converted dec values from random numbers to char --> " + randomValuesToChar);

// function to find ALL occurrences of a searching element
function findIndexOfAllOccur(array,searchingElement) {
  let indices = [];
  let tempArray = array;
  let element = searchingElement;
  let idx = tempArray.indexOf(element);
  if(idx == -1){indices.push(idx);}  //push -1 to array

  // loops through whole index
  while (idx != -1) {
    indices.push(idx);
    idx = tempArray.indexOf(element, idx + 1);
  }
    return console.log("element: '" + element + "' index position: " + indices);
}

console.log(findIndexOfAllOccur(randomValuesToChar,'A'))
console.log(findIndexOfAllOccur(randomValuesToChar,'R'))
console.log(findIndexOfAllOccur(randomValuesToChar,'g'))
console.log(findIndexOfAllOccur(randomValuesToChar,'T'))
console.log(findIndexOfAllOccur(randomValuesToChar,'f'))
console.log(findIndexOfAllOccur(randomValuesToChar,'l'))


//let c= randomValuesToChar.filter(el => el === 'a');

/*for (let i=0; i < randomValuesToChar.length; i++) {
let d;
  if(randomValuesToChar.indexOf('a') !== -1){
    let d = randomValuesToChar[i];
    console.log(d);
  }
}*/

/*const str = randomValuesToChar.toString();
let count = 0;
let position = str.indexOf('a');

//counter of occurrences
while (position !== -1) {
  count++;
  position = str.indexOf('a', position + 1);
}
console.log(str);
console.log("count " + count);*/

//******************* ideas to implement for later ************************************

/*//RANDOM FUNCTION EXMPL with Date.now  //TODO try out this method later
function randomArr(array) {

  randomD = array[Date.now() % array.length];
}
*/

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


