
const d = new Date()
//NODE
class TreeNode {
  constructor(id_Node, nameValue_Node, dateValue_Node, parent_Node, children_Node, level_Node) {
    //values
    this.idValue_Node = id_Node;
    this.nameValue_Node = nameValue_Node; //output --> N{nivo}_{index vozlišča v seznamu}
    this.dateValue_Node = dateValue_Node;
    //parent & child
    this.parent_Node = parent_Node;
    this.children_Node = children_Node;
    this.level_Node = level_Node;
  }
  depth_Node_idx() {
    return Math.floor(Math.random() * 4);
  }
}

function randNodeNum(num) {
  let numN = [Math.ceil(Math.random() * num)];
  return numN;
}

//TREE
class OneTree {
  constructor(id_Node) {
    this.root =new TreeNode();
  }
}
//*************************************************************---LGC
let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
const randDay = [];
let year = 2021;
let arrDay = [];
let day = randDay[4];

newdate = day + "." + month + "." + year;








//**************************************************************

//random number creator function
function randomizer() {
//random numbers
  let rand = Date.now([Math.floor(Math.random() * Date.now) / 1000]);
  let divis = rand.toString().slice(7, -1) * rand;
  let facX = ((rand / divis).toString().slice(4, -1) * rand / divis);
  let algR = Math.floor(divis / rand / facX.toString().slice(0, 4) * 1000) + rand.toString().slice(0, 4) / rand.toString().slice(8, -1);
  // console.log(rand)
  // console.log(divis)
  // console.log(facX)
  // console.log(k)
  // console.log(id2)
  return parseInt(algR.toString().slice(-6, -1));
}
//random date creator function






//*******TEST**********


// console.log(d.toLocaleDateString('de-DE'))
// console.log(newdate)
// console.log(randDay)
 console.log(randNodeNum(30))

