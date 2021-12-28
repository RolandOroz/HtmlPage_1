const randnumgen = //random number for node creation
  function randSiblingNum(num) {
    return [Math.ceil(Math.random() * num)];
  }

function randTreeGenerator(value) {
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