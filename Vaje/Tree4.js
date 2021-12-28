class Node {
  constructor(valueId, nodeName, rDay) {
    this.valueId = valueId;
    this.nodeName = nodeName; //N{nivo}_{index vozlišča v seznamu}
    this.rDay = rDay;
    this.children = [];

  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

function rDay(year, month, randomDayInterval) {
  const dateR = new Date();
  dateR.setFullYear(year);
  dateR.setMonth(month);
  dateR.setDate(Math.ceil(Math.random() * randomDayInterval));
  //return new Intl.DateTimeFormat('de-DE', ).format(date);
  return dateR;
}




//*****TEST********
const testTree = new Tree();

testTree.root = new Node(100,'Root', rDay(2021,0,31))
testTree.root.children.push(new Node(101,'child', rDay(2021,0,31)))
testTree.root.children.push(new Node(102,'child', rDay(2021,0,31)))
testTree.root.children[0].children.push(new Node(201,'child', rDay(2021,0,31)))


console.log(testTree.root)
console.log("\nnode name is: ")
console.log(testTree.root.nodeName)
console.log(testTree.root.children.nodeName)
console.log(testTree.root.children[0].children)