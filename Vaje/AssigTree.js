//random number creator function
function randomizer() {
//random numbers
  let rand = Date.now([Math.floor(Math.random() * Date.now) / 1000]);
  let divis = rand.toString().slice(7, -1) * rand;
  let facX = ((rand / divis).toString().slice(4, -1) * rand / divis);
  let algR = Math.floor(divis / rand / facX.toString().slice(0, 4) * 1000) + rand.toString().slice(0, 4) / rand.toString().slice(8, -1);
  return parseInt(algR.toString().slice(-6, -1));
}



//************** NODE
class TreeNode {
  constructor(id_Node, nameValue_Node, dateValue_Node, parent_Node, children_Node, level_Node) {
    //values
    this.idValue_Node = randomizer();
    this.nameValue_Node = nameValue_Node; //output --> N{nivo}_{index vozlišča v seznamu}
    this.dateValue_Node = randDate(1,2019,31);
    //parent & child
    this.parent_Node = parent_Node;
    this.children_Node = [];
    this.level_Node = level_Node;
  }

}

//************** TREE
class OneTree {
  constructor(id_Node) {
    this.root =new TreeNode();
  }
}





//random date creation **TEST**
function randDate (month, year, days) {
  // this.month;  //use Date.now()!!
  // this.year;
  let day = Math.ceil(Math.random() * days)
  return day + "." + month + "." + year;
}

//random number for node creation
function randSiblingNum(num) {
  return [Math.ceil(Math.random() * num)];
}

//tree depth setter
function treeDepth(depth) {
  return Math.ceil(Math.random() * depth);
}
let node = new TreeNode();
let num = randSiblingNum(30);
let children_Node = [];

function generNode(num) {
  console.log(num);
  const newNode = num - 1;
  if(newNode >= 0) {
    generNode(newNode);
  }

}

//*******LOGS/TEST**********



console.log(node)
console.log(randSiblingNum(4))
console.log("random nodes --> " + num);
console.log(generNode(num));



