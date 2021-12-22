//TREES = NODES & EDGES between them
//NODES = INTERNAL_nodes (have descendants) & LEAF/TERMINAL_nodes (no descendants) e.g.= folder=INTERNAL,file=LEAF
//ROOT NODE = no parent
//NODE DEPTH = steps from root node
//SAME PARENT NODE DEPTH = BROTHER/SISTER (SIBLING)
//FULL BINARY TREE = each node has exactly 0 or 2 children
//COMPLETE BINARY TREE = when all levels except the last one are full with nodes
//PERFECT BINARY TREE = when all the levels (including the last one) are full of nodes

/*Each node in a tree data structure must have the following properties:

  key: The key of the node
value: The value of the node
parent: The parent of the node (null if there is none)
children: An array of pointers to the node's children

The main operations of a tree data structure are:

  insert: Inserts a node as a child of the given parent node
remove: Removes a node and its children from the tree
find: Retrieves a given node
preOrderTraversal: Traverses the tree by recursively traversing each node followed by its children
postOrderTraversal: Traverses the tree by recursively traversing each node's children followed by the node*/

//TODO make an General tree

//EXMPL implementing Tree******************************
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}
//EXMPL create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

//EXMPL associate root with is descendants
abe.children.push(homer);
homer.children.push(bart, lisa, maggie);

console.log(abe)



//*********SOURCES****************************
//https://www.30secondsofcode.org/articles/s/js-data-structures-tree
//vozlišče = node