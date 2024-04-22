export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.triangleType = this.calculateTriangleType();
  }

  get isEquilateral() {
    return ['equilateral'].includes(this.triangleType);
  }

  get isIsosceles() {
    return ['isosceles', 'equilateral'].includes(this.triangleType);
  }

  get isScalene() {
    return ['scalene'].includes(this.triangleType);
  }

  calculateTriangleType() {
    const [a, b, c] = this.sides;
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || b + c <= a || a + c <= b) {
      return 'invalid';
    } else if (a === b && b === c) {
      return 'equilateral';
    } else if (a === b || b === c || a === c) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}
