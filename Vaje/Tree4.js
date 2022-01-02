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
  dateR.setHours(0, 0, 0, 0);
  //return new Intl.DateTimeFormat('de-DE', ).format(date);
  return dateR;
}
//random id number
function randNum(divider) {
  return Math.ceil((Math.random()) * Date.now() / divider);
}



//*****TEST********
const testTree = new Tree();

testTree.root = new Node(randNum(1000_000),'Root', rDay(2021,0,31))
testTree.root.children.push(new Node(randNum(1000_000),'child', rDay(2021,0,31)))
testTree.root.children.push(new Node(randNum(1000_000),'child', rDay(2021,0,31)))
testTree.root.children[0].children.push(new Node(randNum(1000_000),'child', rDay(2021,0,31)))


console.log(testTree.root)
console.log("\nnode name is: ")
console.log(testTree.root.nodeName)
console.log(testTree.root.children.nodeName)
console.log(testTree.root.children[0].children)