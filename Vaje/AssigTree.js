//random number for node creation
function randNum(num) {
    return Math.ceil(Math.random() * num);
}

//result arrays for search function
let resultValue1 = [];
let resultValue2 = [];

let indexedValueCollection;

//TODO indexing date and node names


let arrValueDateNode = new Set();
let arrValueNodeName = [];

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
        this.dateValueNode = randomDay(2021, 0, 1);
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
    return date;
}

function searchByDate(year, month, day) {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    date.setHours(0, 0, 0, 0);  //sets T all to 0
    return date;
}


function build(n, lvl) {
    lvl += 1;
    if (lvl > 4) return [];
    let output = [];

    for (let i = 0; i < n; i++) {
        let node = new Node("N" + lvl + "_" + i,
            randomIdNumber(1000_000),
            randomDay(2021, 0, 31));

        node.children = build(randNum(3), lvl);
        output.push(node);
    }
    return output;
}

console.log('------------------ NODES --------------------');
console.log('My nodes');
let output = build(randNum(2), -1);

//console.log(output);


function randomNumbersOfNodeIterator(level) {
    let xNodes = randNum(29);
    let arrNode = [];
    for (let i = 0; i < xNodes; i++) {
        arrNode[i] = new Node("N" + level + "_" + i, randomIdNumber(1000000), randomDay(2021, 0, 31));
    }
    return arrNode;
}

//duplicate checking
function findDuplicates(searchArray, keyValue) {
    let arr = searchArray;
    const compare = [];
    const duplicates = [];

    for(let num of arr) {
        if(!compare.includes(num)) {
            compare.push(num);
        } else {
            duplicates.push(num);
        }
    }
    return duplicates;
}

// unique Date values
const uniqueValues = new Set(output.map(v => v.dateValueNode));
//display tree value function
function displayNodeNames(arr, lvl) {

    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        let spaces = " ";
        arrValueNodeName.push(node.nodeName);
        arrValueDateNode.add(node.dateValueNode);
        for (let j = 0; j < lvl; j++) {
            spaces += "-";
        }
        // console.log(spaces + node.nodeName);   // for TESTING purpose
         console.log(node.dateValueNode);
//************************************************************** date search HERE!!

        if (output.length < arrValueDateNode.length) {
            console.log("HELLO!!!!")
        }

        console.log(spaces + node.nodeName);
        displayNodeNames(node.children, lvl + 1);
    }
}

displayNodeNames(output, 0);

let modifiedArr;
function searchByValueRec(arr, lvl, year, month, day) {

    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        let search = searchByDate(year, month, day).getTime();
        let dateMilli = node.dateValueNode.getTime();
        let arr2 = node.nodeName;

        //console.log(spaces + node.nodeName);  // for TESTING purpose
        //console.log(node.dateValueNode);      // for TESTING purpose

        if (dateMilli === search) {
            resultValue1.push(node.dateValueNode);
            modifiedArr = arr.map(function(element){
                return arr2;

            });
            // arr2[i] = resultValue2.push(node.nodeName);
        }
        searchByValueRec(node.children, lvl++);
    }
}

searchByValueRec(output, 0, 2021, 0, 1);

console.log("**************** MAP ***********************")

// console.log("\nResult for Date")
//  console.log(resultValue1);
//  console.log(resultValue1.length);
// console.log("Result for Node Name")
//   console.log(resultValue2);
//   console.log(resultValue2.length);

//let searchVal = searchByDate(2021, 0, 2).getTime();

function listMapItems(keyItem, valueItem) {
    let arr1 = keyItem;
    let arr2 = valueItem;
    const valuesMap = new Map();
    valuesMap.set(arr1, arr2);

    for (const [key, value] of valuesMap) {
        // console.log(key);
        // console.log(value);
        indexedValueCollection = valuesMap;
    }
}

// listMapItems(arrValueDateNode, arrValueNodeName);
 listMapItems(resultValue1, modifiedArr);
 console.log(indexedValueCollection);
 console.log(indexedValueCollection.size);
 // console.log(arrValueNodeName);
 //console.log(arrValueDateNode);
// console.log(uniqueValues);




//*********************************************************************************
// function displayNodeNames(arr, lvl, val) {
//   for( let i = 0; i < arr.length; i++) {
//     let node = arr[i];
//     let spaces = " ";
//     for(let j = 0; j < lvl; j++) {
//       spaces += " " ;
//     }
//     console.log(spaces + node.nodeName);
//     displayNodeNames( node.children, lvl + 1);
//   }
// }
// displayNodeNames(output, 0)
//
// function searchByValue(arr, val) {
//   return arr.find( key => ar
//   r[val] === val);
// }

//dateValueNode


//****************************** TEST / LOGS ***************************************
//console.log("level 1 *************************************************************");
//findDuplicates(output, 'dateValueNode');

//TODO recursive search function(searchArray, resultArray) --no return
// function searchWithResult(searchArray, resultArray) {
//   let tempSearchArr = searchArray;
//   let resultArray = searchArray.find();
//   for(let i = 0; i < searchArray.length; i++) {
//     if (searchArray.find('2020-12-30T23:00:00.000Z')) {
//       tempSearchArr[i] += searchArray.dateValueNode;
//       console.log(tempSearchArr);
//     }
//   }
// }


// searchWithResult(output);
// //TODO recursive search function(searchArray) --return
// function search(searchArray) {
//
//
// }

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

// console.log("return search*************************************")
// let index = output.findIndex(function (arr, index) {
//   console.log(arr);
//   return arr.dateValueNode.toString() === 'Thu Dec 31 2020 00:00:00 GMT+0100 (GMT+01:00)';
// })
// console.log(index)

//console.log(output[0].dateValueNode.toString())

// let foundDate = function (el, index, arr) {
//  // console.log(el + " " + index + " " + arr);
//   if (el.dateValueNode.toString() === 'Thu Dec 31 2020 00:00:00 GMT+0100 (GMT+01:00)') {
//     return arr + index;
//   }
// }

// https://mail.google.com/mail/u/0?ui=2&ik=cc00633881&attid=0.1&permmsgid=msg-a:r-1427440940777264359&th=17e00c0b01492c20&view=att&disp=safe&realattid=17e00c0925eae0193541

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