export function transpose(input) {
  let matrix = [];
  const rows = input.length;
  const colunms = input.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');

  for (let i = 0; i < colunms.length; i++) {
    matrix[i] = '';

    for (let j = 0; j < rows; j++) {
      if (input[j][i] == undefined) {
        matrix[i] += ' ';
      } else {
        matrix[i] += input[j][i];
      }
    }
  }

  let k = colunms.length - 1;
  while (k > 0) {
    console.log(matrix[k][matrix[k].length - 1]);

    if (matrix[k][matrix[k].length - 1] == ' ') {
      if (
        matrix[k + 1] != undefined &&
        matrix[k + 1].length < matrix[k].length
      ) {
        matrix[k] = matrix[k].slice(0, -1);
        continue;
      } else if (matrix[k + 1] == undefined) {
        matrix[k] = matrix[k].slice(0, -1);
        continue;
      }
    }

    k--;
  }

  return matrix;
}
