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
children_Node//.from({length: nu});
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
  date.setHours(0, 0, 0, 0);  //sets T all to 0
  return  date;
}


//*********************



//tree depth setter
function treeDepth(depth) {
  return Math.ceil(Math.random() * depth);
}

// **********************************************TODO make an recursive node generator


//array generator
function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}
let out = Array.from(range(0,10,1));
console.log(out);

//while loop(start, x loops, step)
function nodeIterator(fromNumber, loops, step) {
  while (fromNumber < loops) {
    fromNumber = fromNumber+step;
    console.log(fromNumber);
    let n = new TreeNode((randNum(1000000),'A',randomDay(2021,0,31), 1));
    console.log(n);
  }
}
//nodeIterator(0,4,1);



console.log("************************************************")
console.log(nodeIterator(0,4,1))

console.log(nodeArray)

console.log("************************************************")


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
//  let num = randSiblingNum(30);
// console.log("random nodes --> " + num);
//console.log("genNode " + generateNode(randSiblingNum(30)));





// console.log(testTree);
// console.log(testTree);
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
//console.log(testTree.traverseBFS());
console.log("HERE")



//********************************* test

//TODO https://mail.google.com/mail/u/0?ui=2&ik=cc00633881&attid=0.1&permmsgid=msg-a:r-1427440940777264359&th=17e00c0b01492c20&view=att&disp=safe&realattid=17e00c0925eae0193541



//****** ideas ***************

