export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    const rows = this.matrix.split('\n');
    const matrixArray = rows.map((row) => row.split(' ').map(Number));

    return matrixArray;
  }

  get columns() {
    const rows = this.rows;
    const numColumns = rows[0].length;

    const columns = Array.from({ length: numColumns }, () => []);

    for (let row of rows) {
      for (let i = 0; i < numColumns; i++) {
        columns[i].push(row[i]);
      }
    }

    return columns;
  }
}
