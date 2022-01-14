//random number for node creation
function randNum(num) {
    return Math.ceil(Math.random() * num);
}

//TODO MAKE FUNCTION  (variables for name and date nodes)
let allNodeNames = [];
let allNodeDates = [];
let allNodeDatesGetTime = [];
let allNodeIds = [];

//collection of all date and node names
//const nameAndDateNodesMap = new Map();

//collection of all date and node names with getTime()!!!---correct collection of data
const nameAndDateNodesMapGetTime = new Map();


//const nameAndIdNodesMap = new Map();


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

    get getAllNodeNames() {
        return this.nodeName;
    };

    get getAllNodeDates() {
        return this.dateValueNode;
    };

    get getNodeDatesGetTime() {
        return this.dateValueNode.getTime();
    };

    get getAllNodeIds() {
        return this.idValueNode;
    };
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
            randNum(3),
            //randomIdNumber(1000_000),
            randomDay(2021, 0, 31));

        node.children = build(randNum(3), lvl);
        output.push(node);
    }
    return output;
}


let output = build(randNum(1), -1);



//display tree nodes visually
function displayNodeNames(arr, lvl) {

    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        let spaces = " ";

        for (let j = 0; j < lvl; j++) {
            spaces += "-";
        }
        console.log(spaces + node.nodeName);

        displayNodeNames(node.children, lvl + 1);
    }
}
displayNodeNames(output, 0);


//display one value of all nodes                        // TODO --------------------------------------------------DONE
function arrOfValues( arrValue, arr) {
    for (let i = 0; i < arr.length; i++) {

        let node = arr[i];
        //pass val with different children values to get different result
        let val = node.nodeName;
        arrValue.push(val);

        arrOfValues(arrValue, node.children);
    }
}
arrOfValues( allNodeNames, output);
console.log(allNodeNames);


// checking for node dates duplicates                   // TODO --------------------------------------------------DONE
function checkDuplicateNodeValues(arrMap, arr) {
    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        let xArr = arrMap;

        let keyPass = node.getNodeDatesGetTime;
        let valuePass = node.getAllNodeNames;

        // key/value setup for node Mapping with getTime()
        if (!xArr.has(keyPass))
            xArr.set(keyPass, []);
        xArr.get(keyPass).push(valuePass);

        checkDuplicateNodeValues( arrMap, node.children);
    }
}
checkDuplicateNodeValues(nameAndDateNodesMapGetTime, output);




// //show duplicate Ids
// function showDuplicateId(arr) {
//     const lvl = 0;
//     let name = [];
//     let id = [];
//     let tempArr = new Map();
//
//     for (let i = 0; i < arr.length; i++) {
//
//         let node = arr[i];
//
//         if (!tempArr.has(node.idValueNode))
//             tempArr.set(node.idValueNode, []);
//
//         tempArr.get(node.idValueNode).push(node.nodeName);
//
//
//
//         showDuplicateId(node.children, lvl + 1);
//         console.log(tempArr);
//     }
// }
function arrReference(nameAndIdNodesMap) {
    nameAndIdNodesMap = [];
    return nameAndIdNodesMap;
}
//show duplicate Ids
function showDuplicateId(arr) {
    const lvl = 0;

    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        if (!nameAndIdNodesMap.has(node.idValueNode))
            nameAndIdNodesMap.set(node.idValueNode, []);

        nameAndIdNodesMap.get(node.idValueNode).push(node.nodeName);

        showDuplicateId(node.children, lvl + 1);
    }
}
// search function of date value


// let nameAndDateNodesMap = new Map();
// function mapArr(arrMap, arr, key, value) {
//     const lvl = 0;
//     arrMap.x = new Map;
//     for (let i = 0; i < arr.length; i++) {
//         let node = arr[i];
//         if (!arrMap.has(node.dateValueNode))
//             arrMap.set(node.dateValueNode, []);
//         arrMap.get(node.dateValueNode).push(node.nodeName);
//         // //key/value with getTime() ---> does set collection of node names for same date !!!!!!
//         // if (!nameAndDateNodesMapGetTime.has(arr[key].getTime())) {
//         //     nameAndDateNodesMapGetTime.set(arr[key].getTime(), []);
//         // }
//         // nameAndDateNodesMapGetTime.get(arr[key].getTime()).push(arr[value]);
//         mapArr(node.children, lvl + 1);
//     }
//     // return (0);
// }
//
// mapArr(nameAndDateNodesMap, output);


function searchByDateRecord(arr, lvl, year, month, day) {
    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        let searchDateGetTime = setupDate(year, month, day).getTime();
        let dateNodeGetTime = node.dateValueNode.getTime();

        if (dateNodeGetTime === searchDateGetTime) {
            console.log("\n*********** SEARCH FUNCTION ************");
            console.log("\nsearched date is " + searchDateGetTime + " ==> " + new Date(searchDateGetTime));
            console.log("\n****************************************\n");
        }
        searchByDateRecord(node.children, lvl++);
    }
}

searchByDateRecord(output, 0, 2021, 0, 1);


//********************* console logs ***************
// Please comment out Section/s you do not want to display


// SECTION: 1
console.log('-------------------- NODES DISPLAY --------------------\n');
console.log('My nodes:\n');




// SECTION: 2
console.log();
console.log('-------------------- UNIQUE VALUES --------------------\n');
// getting unique values from date nodes with Set() and transforming back to array
//  let uniqueSetOfAllNodeDates = new Set();
//  console.log(uniqueSetOfAllNodeDates);
// const uniqueArrayOfAllNodeDates = [...uniqueSetOfAllNodeDates];
// console.log("Unique Dates Array Length: " +uniqueArrayOfAllNodeDates.length);
// let uniqueSetOfAllNodeIds = new Set(allNodeIds);
// console.log(uniqueSetOfAllNodeIds);
// const uniqueArrayOfAllNodeIds = [...uniqueSetOfAllNodeIds];
// console.log("Unique ID's Array Length: " + uniqueArrayOfAllNodeIds.length);


// SECTION: 3
console.log();
console.log('-------------------- DISPLAYING ALL NODES NAMES, DATES & IDS --------------------\n');
// allNodesValues(output);


// SECTION: 4
// console.log();
// console.log('-------------------- COMPARISON OF NODES NAME, DATE & ID LENGTH --------------------\n');
// console.log("All nodes names: " + allNodeNames.length);
// console.log("All nodes dates " + allNodeDates.length);
// console.log("All nodes Ids " + allNodeIds.length);
// console.log(allNodeDatesGetTime);


// SECTION: 5
// console.log("\n**************** MAP (no getTime() used) ***********************")
// console.log(nameAndDateNodesMap);
console.log("\n**************** MAP (with getTime() used) ***********************")
console.log(nameAndDateNodesMapGetTime);


// SECTION: 4
console.log();
console.log("\n**************** MAP (id) ***********************")
// showDuplicateId(output);
// console.log(nameAndIdNodesMap);





























//********************************* IDEAS / DUMP  ************************************************

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

//for Set() to find unique dates
// allNodeDates.push(node.dateValueNode);
// allNodeDatesGetTime.push(node.dateValueNode.getTime());
// allNodeNames.push(node.nodeName);
// allNodeIds.push(node.idValueNode);