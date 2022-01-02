class Tree {
    #children = new Map();
    #parent = null;
    #id = Math.floor(Math.random() * Date.now()/1000_000);
    #name;

    constructor(name) {
        if (!name || typeof name !== 'string' || !name.trim.length) {
           //throw new Error('Name must be a non-empty String');
        }

        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        if (!newName || typeof newName !== 'string' || !newName.trim.length) {
            throw new Error('Cannot change name. Name must be a non-empty String');
        }
        this.#name = newName;
    }

    get identiefier() {
        return this.#id;
    }

    get children() {
      return Array.from(this.#children.values());
    }

    get parentNode() {
      return this.#parent;
    }

    set parentNode(newParent) {
      if(newParent !== this.parentNode && (newParent === null || newParent instanceof Tree)) {
        this.#parent = newParent;
      }
    }

    get childrenCount() {
      return this.#children.size;
    }

    createChildNode(name) {
      const newNode = new Tree(name);
      this.#children.set(newNode.identiefier, newNode);
      newNode.parentNode = this;

      return newNode;
    }

  #getTreeString = (node, spaceCount = 0) => {
    let str = "\n ";

    node.children.forEach((child) => {
      str += `${" ".repeat(spaceCount)}${child.name}${this.#getTreeString(child, spaceCount + 2)}`
    })
    return str;
  }

    print() {
      console.log(`\n${this.name}${this.#getTreeString(this)}`)
    }
}


//*******************
const tree = new Tree('root');
const one = tree.createChildNode('one');

tree
    .createChildNode('one')
    .createChildNode('one-1')
    .createChildNode('one-2')
    .createChildNode('one-3').parentNode.parentNode
    .createChildNode('one-3').parentNode.parentNode
    .createChildNode('two')
    .createChildNode('two-1')



console.log(tree.name);
console.log(tree.identiefier);
console.log(tree.parentNode);
console.log(tree.childrenCount);
console.log(tree.children);
console.log(tree);
console.log("*****************")
tree.print();