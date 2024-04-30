export class GradeSchool {
  constructor() {
    this.notes = {};
  }

  roster() {
    const deepCopy = JSON.parse(JSON.stringify(this.notes));

    for (const key in deepCopy) {
      deepCopy[key] = deepCopy[key].sort();
    }

    return deepCopy;
  }

  add(name, note) {
    if (this.notes[note]) {
      this.notes[note].push(name);
    } else {
      for (const key in this.notes) {
        if (this.notes[key].includes(name)) {
          this.notes[key] = this.notes[key].filter(
            (student) => student !== name
          );
        }
      }

      this.notes[note] = [name];
    }
  }

  grade(note) {
    if (this.notes[note]) {
      const sortedCopy = this.notes[note].slice().sort();
      return sortedCopy;
    } else {
      return [];
    }
  }
}
