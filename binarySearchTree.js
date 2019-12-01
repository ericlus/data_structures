class binarySearchTree {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }

  insert(value) {
    if (value > this.value) {
      if (this.right === null) {
        this.right = new binarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else if (value < this.value) {
      if (this.left === null) {
        this.left = new binarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    } else if (value > this.value) {
      return !!(this.right && this.right.contains(value));
    } else if (value < this.value) {
      return !!(this.left && this.left.contains(value));
    }
  }

  depthFirstSearch(callback) {
    callback(this.value);
    if (this.left) {
      this.left.depthFirstSearch(callback);
    } else if (this.right) {
      this.right.depthFirstSearch(callback);
    }
  }
}
