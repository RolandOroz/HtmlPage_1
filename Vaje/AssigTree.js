//random number for node creation
function randNum(num) {
    return Math.ceil(Math.random() * num);
}

let indexedValueCollection;

//TODO indexing date and node names
let nameAndDateNodesMap = new Map();

let arrValueNodeName = [];

//random id number
function randomIdNumber(divider) {
    return Math.ceil((Math.random()) * Date.now() / divider);
}

//******************************************* CLASS NODE ****************************************************
class Node {
    constructor(nodeName, idValueNode) {
        //values
        this.nodeName = nodeName;
        //random id value
        this.idValueNode = idValueNode;//randomIdNumber(1000_000);
        //random date value
        this.dateValueNode = randomDay(2021, 0, 3);
        //child
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

function setupDate(year, month, day) {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    date.setHours(0, 0, 0, 0);  //sets T all to 0
    return date;
}

// build tree with random nodes
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
console.log('My nodes:\n');
let output = build(randNum(1), -1);

//display tree value function
let allNodeNames = [];
let allNodeDates = [];
let allNodeDatesGetTime = [];

//display tree nodes visually
function displayNodeNames(arr, lvl) {

    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        let spaces = " ";

        for (let j = 0; j < lvl; j++) {
            spaces += "-";
        }
        // console.log(spaces + node.nodeName);   // for TESTING purpose

        nameAndDateNodesMap.set(node.dateValueNode, node.nodeName)


        console.log(node.dateValueNode);

        console.log(spaces + node.nodeName);
        allNodeDates.push(node.dateValueNode);
        allNodeDatesGetTime.push(node.dateValueNode.getTime());
        allNodeNames.push(node.nodeName);
        displayNodeNames(node.children, lvl + 1);

    }
}

displayNodeNames(output, 0);


function searchByDateRecord(arr, lvl, year, month, day) {
    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        let search = setupDate(year, month, day).getTime();
        let dateMilli = node.dateValueNode.getTime();

        if (dateMilli === search) {
            console.log("search date is " + search + " ==> " + new Date(search).toISOString());
        }
        searchByDateRecord(node.children, lvl++);

    }
}
searchByDateRecord(output, 0, 2021, 0, 1);

//getting unique values from date nodes with Set() and transforming back to array
let uniqueSetOfAllNodeDates = new Set(allNodeDatesGetTime);
console.log(uniqueSetOfAllNodeDates);
const uniqueArrayOfAllNodeDates = [ ...uniqueSetOfAllNodeDates];
console.log(uniqueArrayOfAllNodeDates);

console.log("**************** MAP ***********************")


 console.log(allNodeNames);
 console.log(allNodeDates);
 console.log(allNodeDatesGetTime);
 console.log(nameAndDateNodesMap);





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

// function randomNumbersOfNodeIterator(level) {
//     let xNodes = randNum(29);
//     let arrNode = [];
//     for (let i = 0; i < xNodes; i++) {
//         arrNode[i] = new Node("N" + level + "_" + i, randomIdNumber(1000000), randomDay(2021, 0, 31));
//     }
//     return arrNode;
// }

//duplicate checking
// function findDuplicates(searchArray, keyValue) {
//     let arr = searchArray;
//     const compare = [];
//     const duplicates = [];
//
//     for(let num of arr) {
//         if(!compare.includes(num)) {
//             compare.push(num);
//         } else {
//             duplicates.push(num);
//         }
//     }
//     return duplicates;
// }

// function listMapItems(keyItem, valueItem) {
//     let key1 = keyItem;
//     let arr2 = valueItem;
//     const valuesMap = new Map();
//     valuesMap.set(key1, arr2);
//
//     for (let [key, value] of valuesMap) {
//
//         indexedValueCollection = valuesMap;
//     }
// }
