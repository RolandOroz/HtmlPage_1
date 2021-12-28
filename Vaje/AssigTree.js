//random number for node creation
function randSiblingNum(num) {
  return [Math.ceil(Math.random() * num)];
}
const nu = randSiblingNum(30);
//************** NODE
class TreeNode {
  constructor(id_Node, nodeName, dateValue_Node, depth_Node,children_Node) {
    //values
    this.idValue_Node = randNum(1000000)
    this.nodeName = nodeName; //output --> N{nivo}_{index vozlišča v seznamu}
    this.dateValue_Node = randomDay(2021,0,31)
    //child
  //https://stackoverflow.com/questions/62676186/generate-random-tree-using-javascript
    this.children_Node = children_Node//.from({length: nu});
    this.depth_Node = depth_Node;
  }

}
//************** TREE
class OneTree {
  constructor() {
    this.root = null;
  }

  //*************** snip ******************************
  traverseBFS() {
    // no root throw error
    if(!this.root) {
      throw new Error('Tree has no ROOT node!!');
    }
    /*
    //start a new Queue
    const queue = new Queue();
    //keep a tally of all values in the tree
    const treeValues = [];
    //add root to queue
    queue.enqueue(this.root);
    //while queue is not empty
    while (queue.size !== 0) {
      //get TreeNode Children
      const nodeChildren = queue.first.value.children;
      //if node has children, loop and add each to queue
      if (nodeChildren.length !== 0) {
        nodeChildren.forEach(child => queue.enqueue(child));
      }
      //push the first item in the queue to the tree values
      treeValues.push(queue.first.value);
      //remove first node from queue
      queue.dequeue();
    }
    //return values, should be all TreeNodes
    return treeValues;
  }
}
//********************************** SNIP ************************
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //newnode goes to back of the line/end of the queue
  enqueue(value) {
    const newNode = new QueueNode(value);
    //if queue is empty
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      // add current first pointer to new first(new node), and make new node new first
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    //add 1 to size
    this.size++;

    return this;
    //*************** snip ******************************

  }
  // dequeue nodes off the front of the line
  dequeue() {
    //if queue is empty return false
    if (this.size === 0) return false;
    //get dequeuedNode
    const dequeuedNode = this.first;
    //get new first (could be NULL if stack is length 1)
    const newFirst = this.first.next;
    //if newFirst is null, reassign last to newFirst(null)
    if (!newFirst) {
      this.last = newFirst;
    }
    //assign new first
    this.first = newFirst;
    //remove refernce to list
    dequeuedNode.next = null;
    //remove 1 from size
    this.size--;
    //return dequeuednode
    return dequeuedNode;
  }

  log() {
    let currentNode = this.first;
    let i = 0;
    while (currentNode) {
      console.log(i, currentNode.value);
      i++;
      currentNode = currentNode.next;
    }
  }
}
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;*/
  }
}
//********************************** SNIP ************************

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
  date.setHours(0);
  //return new Intl.DateTimeFormat('de-DE', ).format(date);
  return  date;
}


//*********************



//tree depth setter
function treeDepth(depth) {
  return Math.ceil(Math.random() * depth);
}

function WithoutTime(dateTime) {
  var date = new Date(dateTime.getTime());
  date.setHours(0, 0, 0, 0);
  return date;
}

// **********************************************TODO make an recursive node generator
function nodeRecursiveIterator(arr, i) {
  if (arr.length === i) {
    return;
  }
  console.log(arr[i])
  nodeRecursiveIterator(arr, ++i)
}


function nodeIterator(num) {
  let end = randSiblingNum(num);
  for (let i = 0; i < end; i ++) {
    console.log(i);
    let n = new TreeNode((randNum(1000000),'A',randomDay(2021,0,31), 1));
    console.log(n)
    //return n;
  }
}

console.log(nodeIterator(30))

//********* test **************
// let node = new TreeNode(randNum(1000000),'Root',randomDay(2021,0,31),0);
//let node2 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 1);
//let node3 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 2);
// let node4 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 1);
// let node5 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 3);
// let node6 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 3);
// let node7 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 2);
// let node8 = new TreeNode(randNum(1000000),'child',randomDay(2021,0,31), 2);
const testTree = new OneTree();  //tree
const testTree2 = new OneTree();
testTree.root = new TreeNode(new TreeNode((randNum(1000000),'A',randomDay(2021,0,31), 1)));  // node
testTree.root.children_Node.push(new TreeNode((randNum(1000000),'childA',randomDay(2021,0,31), 1)));
testTree.root.children_Node.push(new TreeNode((randNum(1000000),'childB',randomDay(2021,0,31), 1)));
testTree.root.children_Node[0].children_Node.push(new TreeNode(randNum(1000000),'child2',randomDay(2021,0,31), 1));
testTree.root.children_Node[1].children_Node.push(new TreeNode(randNum(1000000),'child3',randomDay(2021,0,31), 1));
testTree.root.children_Node[1].children_Node.push(new TreeNode(randNum(1000000),'child3',randomDay(2021,0,31), 1));
//testTree2.root.children_Node[nodeIterator(30)];



//*******LOGS**********
//  let num = randSiblingNum(30);
// console.log("random nodes --> " + num);
//console.log("genNode " + generateNode(randSiblingNum(30)));



testTree.root = new TreeNode();

console.log(testTree);
console.log(testTree);
console.log();
console.log();
console.log();
console.log();
console.log();
//console.log(testTree.traverseBFS());
console.log("HERE")
nodeRecursiveIterator(testTree.root.children_Node, 0)


//********************************* test





//****** ideas ***************

