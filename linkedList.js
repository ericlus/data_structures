class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    if (!this.head) {
      this.head = new Node(value);
    }

    if (this.tail) {
      this.head.next = new Node(value);
    }

    this.tail = new Node(value);
  }

  removeHead() {
    const headValue = this.head.value;
    this.head = this.head.next;
    return headValue;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
