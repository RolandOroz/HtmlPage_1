//random number for node creation
function randNum(num) {
  return Math.ceil(Math.random() * num);
}

//random id number
function randomIdNumber(divider) {
  return Math.ceil((Math.random()) * Date.now() / divider);
}

//************** CLASS NODE
class Node {
  constructor(nodeName, idValueNode) {
    //values
    this.nodeName = nodeName;
    //random id value
    this.idValueNode = idValueNode;//randomIdNumber(1000_000);
    //random date value
    this.dateValueNode = randomDay(2021, 0, 0);
    //child
    //https://stackoverflow.com/questions/62676186/generate-random-tree-using-javascript
    //https://www.w3schools.com/jsref/jsref_from.asp
    this.children = [];
    //this.depth_Node = depth_Node;
  }
}

//random date generator
function randomDay(year, month, randomDayInterval) {
  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(Math.ceil(Math.random() * randomDayInterval));
  date.setHours(0, 0, 0, 0);  //sets T all to 0
  return  date;
}

//start array
let randomStartNodeArray = randomNumbersOfNodeIterator(0);
//recursiveNodeLevel(randomStartNodeArray, randomStartNodeArray.length);

//recursive node generator
// function recursiveNodeLevel(base, i, level) {
//   if (i > 0) {
//     recursiveNodeLevel[i - 1] = base[i-1].children = randomNumbersOfNodeIterator(level);
//     return recursiveNodeLevel(base, i -1  );
//   }
//   return recursiveNodeLevel;
// }

function build(n, lvl) {
  lvl +=1;
  if (lvl > 4) return [];
  let output = [];
  for (let i = 0; i < n; i++) {
    let node = new Node("N" + lvl + "_" + i, randNum(10), randomDay(2021, 0, 0));
    node.children = build(randNum(5), lvl);
    output.push(node);
  }
  return output;
}
console.log('--------------------------------------');
console.log('My nodes');
let output = build(randNum(5),-1);
console.log(output);


function randomNumbersOfNodeIterator(level) {
  let xNodes = randNum(29);
  let arrNode = [];
  for (let i = 0; i < xNodes; i++) {
    arrNode[i] = new Node("N" + level + "_" + i, randNum(10), randomDay(2021, 0, 0));
  }
  return arrNode;
}

//duplicate checking
function findDuplicates(searchArray, keyValue) {
  let array = searchArray;
  const uniqueValues = new Set(array.map(v => v[keyValue]));
  if (uniqueValues.size < array.length) {
    console.log('Duplicates are: ', uniqueValues.valueOf(), array.valueOf().length)
  } else {
    console.log("No Duplicates: ", uniqueValues.valueOf(), "\n#Of Arrays: " + array.valueOf().length + array.nodeName);
  }
}

//display date function
function displayNodeNames(arr, lvl, val) {
  for( let i = 0; i < arr.length; i++) {
    let node = arr[i];
    let spaces = " ";
    for(let j = 0; j < lvl; j++) {
      spaces += " " ;
    }
    console.log(spaces + node.nodeName);
    displayNodeNames( node.children, lvl + 1);
  }
}
displayNodeNames(output, 0)

// function searchByValue(arr, val) {
//   return arr.find( key => arr[val] === val);
// }
let item = output.find((el) => el.nodeName === el.nodeName);
console.log(item);


//****************************** TEST / LOGS ***************************************
//console.log("level 1 *************************************************************");
findDuplicates(output, 'dateValueNode');

//TODO recursive search function(searchArray, resultArray) --no return
function searchWithResult(searchArray, resultArray) {

}

//TODO recursive search function(searchArray) --return
function search(searchArray) {


}

//****** ideas ***************

//array generator
// function* range(start, end, step) {
//   while (start < end) {
//     yield start;
//     start += step;
//   }
// }

// const recurToN = (number = 1) => {
//   if (number > 4) return;
//   console.log(number);
//   number++;
//   recurToN(number);
// }
// recurToN();

//TODO https://mail.google.com/mail/u/0?ui=2&ik=cc00633881&attid=0.1&permmsgid=msg-a:r-1427440940777264359&th=17e00c0b01492c20&view=att&disp=safe&realattid=17e00c0925eae0193541

// let uniqueList = [];
// let dupList = [];
//
// Array.prototype.contains = function(item){
//   let filtered_item = this.filter((i) => {
//     return i.idValueNode === item.idValueNode
//   });
//   return !!filtered_item.length;
// }
//
// function contains(list, item){
//   let filtered_item = list.filter((i) => {
//     return i.idValueNode === item.idValueNode
//   });
//   return !!filtered_item.length;
// }
//
// function pushToUniqueList(item){
//   if(!uniqueList.contains(item)) uniqueList.push(item);
// }
//
// function pushToDuplicateList(item){
//   if(!dupList.contains(item)) dupList.push(item);
// }
//
// for(let i = 0; i < randomStartNodeArray.length; i++){
//   if(uniqueList.contains(randomStartNodeArray[i])){
//     pushToDuplicateList(randomStartNodeArray[i]);
//   } else {
//     pushToUniqueList(randomStartNodeArray[i]);
//   }
// }