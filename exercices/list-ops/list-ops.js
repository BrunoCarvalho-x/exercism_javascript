export class List {
  constructor(items = []) {
    this.items = [...items];
  }

  append(otherList) {
    this.items.push(...otherList.items);

    return this;
  }

  concat(otherList) {
    for (const item of otherList.items) {
      this.items = this.items.concat(item.values);
    }

    return this;
  }

  filter(filterFunction) {
    return new List(this.items.filter(filterFunction));
  }

  map(mapFunction) {
    return new List(this.items.map(mapFunction));
  }

  length() {
    return this.items.length;
  }

  foldl(reduceFunction, init) {
    return this.items.reduce(reduceFunction, init);
  }

  foldr(reduceFunction, init) {
    return this.items.reverse().reduce(reduceFunction, init);
  }

  reverse() {
    return new List([...this.items].reverse());
  }

  get values() {
    return this.items;
  }
}
