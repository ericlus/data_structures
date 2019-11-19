class Set {
  constructor() {
    this.storage = {};
  }

  add(value) {
    this.storage[value] = true;
  }

  contains(value) {
    return !!this.storage[value];
  }

  remove(value) {
    delete this.storage[value];
  }
}
