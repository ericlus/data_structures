class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  pop() {
    if (this.size()) {
      const deleted = this.storage[this.count];
      delete this.storage[this.count];
      this.count--;
      return deleted;
    }
  }

  size() {
    return this.count;
  }
}
