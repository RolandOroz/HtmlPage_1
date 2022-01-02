class Tree {
    #children = new Map();
    #parent = null;
    #id = Math.floor(Mat.random() * Date.now());
    #name;

    constructor(name) {
        if (!name || typeof name !== 'string' || !name.trim.length) {
            throw new Error('Name must be a non-empty String');
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

}
