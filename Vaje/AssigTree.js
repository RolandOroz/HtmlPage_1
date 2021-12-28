//random number for node creation
function randSiblingNum(num) {
  return [Math.ceil(Math.random() * num)];
}
const nu = randSiblingNum(30);
//random array length constant
const nodeArray = Array(nu);


//************** NODE
class TreeNode {
  constructor(id_Node, nodeName, dateValue_Node, depth_Node,children_Node) {
    //values
    this.idValue_Node = randNum(1000000)
    this.nodeName = nodeName; //output --> N{nivo}_{index vozlišča v seznamu}
    this.dateValue_Node = randomDay(2021,0,31)
    //child
  //https://stackoverflow.com/questions/62676186/generate-random-tree-using-javascript
  //https://www.w3schools.com/jsref/jsref_from.asp
    this.children_Node = [];//Array.from({length: ), () => [];
    this.depth_Node = depth_Node;
  }
}


//************** TREE
class OneTree {
  constructor() {
    this.root = [];
  }

  //*************** snip ******************************
  traverseBFS() {
    // no root throw error
    if(!this.root) {
      throw new Error('Tree has no ROOT node!!');
    }
  }
}
//********************************** SNIP ************************

//random id number
function randNum(divider) {
  return Math.ceil((Math.random()) * Date.now() / divider);
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

// **********************************************TODO make an recursive node generator

//while loop(start, x loops, step)
function nodeIterator(fromNumber, loops, step) {
  while (fromNumber < loops) {
    fromNumber = fromNumber+step;    ;
    let n = new TreeNode((randNum(1000000),'A',randomDay(2021,0,31), 1));
    console.log(n);
  }
}

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
// const testTree2 = new OneTree();
//testTree.root = new TreeNode();



//*******LOGS**********
// console.log(testTree);
// console.log(testTree);
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
//console.log(testTree.traverseBFS());
console.log("HERE")
let out = Array.from(range(0,10,1));
console.log(out);
console.log("************************************************")
console.log(nodeIterator(0,4,1))
console.log(nodeArray)
console.log("************************************************")


//*********************************

//TODO https://mail.google.com/mail/u/0?ui=2&ik=cc00633881&attid=0.1&permmsgid=msg-a:r-1427440940777264359&th=17e00c0b01492c20&view=att&disp=safe&realattid=17e00c0925eae0193541



//****** ideas ***************

//array generator
function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}