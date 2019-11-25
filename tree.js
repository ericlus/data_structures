class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const node = new Tree(value);
    this.children.push(node);
  }

  contains(value) {
    let result = false;
    const checkNodes = node => {
      if (node.value === value) {
        result = true;
      }
      for (let i = 0; i < node.children.length; i++) {
        checkNodes(node.children[i]);
      }
    };
    checkNodes(this);
    return result;
  }
}
