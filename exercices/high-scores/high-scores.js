export class HighScores {
  constructor(input) {
    this.input = input;
  }

  get scores() {
    return this.input;
  }

  get latest() {
    return this.input[this.input.length - 1];
  }

  get personalBest() {
    return Math.max(...this.input);
  }

  get personalTopThree() {
    const max_3 = this.input.sort((a, b) => b - a).slice(0, 3);

    return max_3;
  }
}
