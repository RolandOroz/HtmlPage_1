
//************** NODE
class TreeNode {
  constructor(id_Node, nameValue_Node, dateValue_Node, depth_Node,children_Node) {
    //values
    this.idValue_Node = randNum(1000000)
    this.nameValue_Node = nameValue_Node; //output --> N{nivo}_{index vozlišča v seznamu}
    this.dateValue_Node = randomDay(2021,0,31)
    //child
    this.children_Node = [];
    this.depth_Node = depth_Node;
  }

}
//************** TREE
class OneTree {
  constructor(id_Node) {
    this.id_Node = id_Node;
    this.children = [];
  }
}


//random id number
function randNum(divider) {
  return Math.ceil((Math.random()) * Date.now() / divider);
}

//random date generator   //TODO show only date with no time !!!!!!!!!!!!!!!!!!!!!!!
function randomDay(year, month, randomDayInterval) {
  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(Math.ceil(Math.random() * randomDayInterval));
  //return new Intl.DateTimeFormat('de-DE', ).format(date);
  return date;
}


//*********************

//random number for node creation
function randSiblingNum(num) {
  return [Math.ceil(Math.random() * num)];
}

//tree depth setter
function treeDepth(depth) {
  return Math.ceil(Math.random() * depth);
}


// **********************************************TODO make an recursive node generator
let child=[];
function generateNode(num) {
  child[num] += new TreeNode();
  const newNode = num - 1;
  if(child >= 0) {
    generateNode(num);
  }
}

//********* test **************
let node = new TreeNode(randNum(1000000),'Root',randomDay(2021,0,31),0);
let node2 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 1);
let node3 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 2);
let node4 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 1);
let node5 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 3);
let node6 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 3);
let node7 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 2);
let node8 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 2);
node.children_Node.push(node2,node4);
node2.children_Node.push(node5, node6);
node3.children_Node.push(node7,node8);

//*******LOGS**********
let num = randSiblingNum(30);
console.log("random nodes --> " + num);
// console.log("genNode " + generateNode(randSiblingNum(30)));


 console.log("\nDEPTH 0: ")
 console.log(node);
 console.log("\nDEPTH 1: ");
console.log(node.children_Node)
 console.log("\nDEPTH 2: ");
console.log(node2.children_Node)
console.log(node2.idValue_Node)
 console.log("\nDEPTH 3: ");
 console.log(node3.children_Node);


//console.log("here " + generateNode(30))
//********************************* test




//****** ideas ***************

/*//random number creator function
function randomizer(counter) {
//random numbers
  let rand = Date.now([Math.floor(Math.random() * Date.now) / counter]);
  let divis = rand.toString().slice(7, -1) * rand;
  let facX = ((rand / divis).toString().slice(4, -1) * rand / divis);
  let algR = Math.floor(divis / rand / facX.toString().slice(0, 4) * 1000) + rand.toString().slice(0, 4) / rand.toString().slice(8, -1);
  return parseInt(algR.toString().slice(-6, -1));
}*/