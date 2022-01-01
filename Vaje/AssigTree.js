//random number for node creation
function randSiblingNum(num) {
  return [Math.ceil(Math.random() * num)];
}

//random id number
function randNum(divider) {
  return Math.ceil((Math.random()) * Date.now() / divider);
}

//************** CLASS NODE
class TreeNode {
  constructor( nodeName, children) {
    //values
    this.nodeName = nodeName;
    //random id value
    this.idValueNode = randNum(1000000)
    //random date value
    this.dateValueNode = randomDay(2021,0,31)
    //child
  //https://stackoverflow.com/questions/62676186/generate-random-tree-using-javascript
  //https://www.w3schools.com/jsref/jsref_from.asp
    this.children = children;//Array.from({length: ), () => [];
    //this.depth_Node = depth_Node;
  }
}

//random node array level N0
//let randomNodeArray = new TreeNode();
//let randomNodeArray = [null];
let randomNodeArray = randomNumbersOfNodeIterator(0);


//random date generator
function randomDay(year, month, randomDayInterval) {
  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(Math.ceil(Math.random() * randomDayInterval));
  date.setHours(0, 0, 0, 0);  //sets T all to 0
  return  date;
}

// **********************************************TODO make an recursive node generator
//recursive node level
function rec(num) {
  if(num > 4) return;
  console.log(num);
   randomNodeArray = randomNumbersOfNodeIterator(num-1);
  num++;
  rec(num);
}

function randomNumbersOfNodeIterator(level) {
  let xNodes = randSiblingNum(6);
  let arrNode = [];
  for (let i = 0; i < xNodes; i++) {
    arrNode[i] = new TreeNode("N" + level + "_" + i, (randNum(1000000)), randomDay(2021, 0, 31));
  }
  return arrNode;
}
let hgt = recursiveNodeLevel(randomNodeArray, randomNodeArray.length);
//**********
function recursiveNodeLevel(base, i,j) {

  if (i > 0) {
    recursiveNodeLevel[i - 1] = base[i-1].children = randomNumbersOfNodeIterator((i));
     recursiveNodeLevel[i - 1] = base[i-1].children.children = randomNumbersOfNodeIterator((i));
     recursiveNodeLevel[i - 1] = base[i-1].children.children.children = randomNumbersOfNodeIterator((i));
     recursiveNodeLevel[i - 1] = base[i-1].children.children.children.children = randomNumbersOfNodeIterator((i));
    return recursiveNodeLevel(base, i -1  );
  }
  return recursiveNodeLevel;
}

//******* TEST / LOGS **********
console.log("level 1 *************************************************************");
  console.log(randomNodeArray);
  console.log();
  console.log();
console.log("level 2 *************************************************************");
  console.log(randomNodeArray[0].idValueNode);
  console.log(randomNodeArray[0].children);
  console.log();
  console.log();
console.log("level 3 *************************************************************");
  console.log(randomNodeArray[0].children.idValueNode);
  console.log(randomNodeArray[0].children.children);
  console.log();
  console.log();
console.log("level 4 *************************************************************");
  console.log(randomNodeArray[0].children[0].children.idValueNode);
  console.log(randomNodeArray[0].children[0].children.children);
 // console.log("****************************************")





//TODO https://mail.google.com/mail/u/0?ui=2&ik=cc00633881&attid=0.1&permmsgid=msg-a:r-1427440940777264359&th=17e00c0b01492c20&view=att&disp=safe&realattid=17e00c0925eae0193541



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

// let xNodes = randSiblingNum(30);
// let arrNode =[];
// for (let i = 0; i < xNodes; i ++) {
//   arrNode[i] = new TreeNode("N" + level + "_" + i , (randNum(1000000)), randomDay(2021, 0, 31));
// }return arrNode;
// }

// function randomNumbersOfNodeIterator(level) {
//   let xNodes = randSiblingNum(30);
//   let arrNode = [];
//   for (let i = 0; i < xNodes; i++) {
//     arrNode[i] = new TreeNode("N" + level + "_" + i, (randNum(1000000)), randomDay(2021, 0, 31));
//   }
//   return arrNode;
// }

// function randomNumbersOfNodeIterator2(level) {
//   let xNodes = randSiblingNum(30);
//   let arrNode = [];
//   for (let i = 0; i < xNodes; i++) {
//     arrNode[i] = new TreeNode("N" + level + "_" + i, (randNum(1000000)), randomDay(2021, 0, 31));
//   }
//   return arrNode;
// }