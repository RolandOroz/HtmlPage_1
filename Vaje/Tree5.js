//random number for node creation
const randnumgen =
  function randSiblingNum(num) {
    return [Math.ceil(Math.random() * num)];
  }

function randomTreeGenerator(value) {
  let stringR = ""

  class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }

  }

  class Tree {
    constructor() {
      this.root = null;
    }
  }
}