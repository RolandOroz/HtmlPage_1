//random number for node creation
function randSiblingNum(num) {
  return [Math.ceil(Math.random() * num)];
}

//random array length constant
//random id number
function randNum(divider) {
  return Math.ceil((Math.random()) * Date.now() / divider);
}


//************** NODE
class TreeNode {
  constructor( nodeName) {
    //values
    this.nodeName = nodeName;
    this.idValueNode = randNum(1000000)

    this.dateValueNode = randomDay(2021,0,31)
    //child
  //https://stackoverflow.com/questions/62676186/generate-random-tree-using-javascript
  //https://www.w3schools.com/jsref/jsref_from.asp
    this.children = [];//Array.from({length: ), () => [];
    //this.depth_Node = depth_Node;
  }
}

//random node array N0
let nodeArray = randomNumbersOfNodeIterator(0);

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
  num++;
  rec(num);
}
//rec(0);
function recursiveNodeLevel(from,arr) {
  let x = arr;
  let level = 4;
  if(from > level) return;
  console.log(from);
  from++;
  recursiveNodeLevel(from);
}
recursiveNodeLevel(0);

let testTree = randomNumbersOfNodeIterator(0);
 testTree.children[0].children.push(new TreeNode(1));
 testTree.children[1].children.push(new TreeNode(1));
 testTree.children[1].children[0].children.push(new TreeNode(2));
 testTree.children[1].children[0].children[0].children.push(new TreeNode(3));
 testTree.children[1].children[0].children[0].children[0].children.push(new TreeNode(4));
 testTree.children[2].children.push(new TreeNode(1));



//node iterator
function randomNumbersOfNodeIterator(level ) {
  let xNodes = randSiblingNum(30);
  let arrNode = new TreeNode("N" + level );  //TODO samo v array
  if(level > 3) return;
  for (let i = 0; i < xNodes; i ++) {
    arrNode.children.push(new TreeNode("N" + level + "_" + i , (randNum(1000000)),
      randomDay(2021, 0, 31)));

  }return arrNode;
}
// let xNodes = randSiblingNum(30);
// let arrNode =[];
// for (let i = 0; i < xNodes; i ++) {
//   arrNode[i] = new TreeNode("N" + level + "_" + i , (randNum(1000000)), randomDay(2021, 0, 31));
// }return arrNode;
// }

console.log(testTree)

//console.log(nodeArray);
//********* test **************
// let node = new TreeNode(randNum(1000000),'Root',randomDay(2021,0,31),0);
//let node2 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 1);
//let node3 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 2);
// let node4 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 1);
// let node5 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 3);
// let node6 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 3);
// let node7 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 2);
// let node8 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 2);
// const testTree = new OneTree();  //tree
// // const testTree2 = new OneTree();
// testTree.root = new TreeNode(1);
// testTree.root.children_Node.push(new TreeNode(2));
// testTree.root.children_Node[0].children_Node.push(new TreeNode());
// testTree.root.children_Node[0].children_Node[0].children_Node.push(new TreeNode(3));



//*******LOGS**********
// console.log(testTree);
// console.log(testTree.root.children_Node);
// console.log(testTree.root.children_Node[0].children_Node[0].children_Node);
// console.log(testTree);
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
//console.log(testTree.traverseBFS());

// console.log("HERE")
// let out = Array.from(range(0,5,1));
// console.log(out);
// console.log("************************************************")
//
// // console.log(nodeArray)
// console.log("************************************************")


//*********************************

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