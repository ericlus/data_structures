class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.first = 1;
  }

  enqueue(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  dequeue() {
    if (this.size()) {
      const deleted = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return deleted;
    }
  }

  size() {
    return this.count - this.first + 1;
  }
}
