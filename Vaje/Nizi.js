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

//******************* ideas to implement for later ************************************

/*//RANDOM FUNCTION EXMPL with Date.now  //TODO try out this method later
function randomArr(array) {

  randomD = array[Date.now() % array.length];
}
*/

//********************** side notes & TODO list *******************************


