export class LinkedList {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
  }

  pop() {
    return this.list.pop();
  }

  shift() {
    return this.list.shift();
  }

  unshift(item) {
    return this.list.unshift(item);
  }

  delete(item) {
    let found = false;
    this.list = this.list.filter((number) => {
      if (!found && number === item) {
        found = true;
        return false;
      }
      return true;
    });
  }

  count() {
    return this.list.length;
  }
}
