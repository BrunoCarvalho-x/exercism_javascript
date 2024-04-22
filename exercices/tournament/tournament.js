export function tournamentTally(all_info_matchs) {
  let result_table = 'Team                           | MP |  W |  D |  L |  P';

  if (all_info_matchs == '') {
    return result_table;
  }

  const games_info = all_info_matchs.split(/[;\n]/).map((str) => str.trim());
  const matches = games_info.length / 3;
  const matches2 = matches * 2;

  let i = 0;
  let j = 0;
  const matrix_info = Array.from({ length: matches2 }, () => Array(6).fill(0));

  for (let match = 0; match < matches; match++) {
    matrix_info[i][0] = games_info[j];
    matrix_info[i + 1][0] = games_info[j + 1];

    switch (games_info[j + 2]) {
      case 'win':
        matrix_info[i][1]++;
        matrix_info[i][2]++;
        matrix_info[i][5] += 3;

        matrix_info[i + 1][1]++;
        matrix_info[i + 1][4]++;
        break;
      case 'loss':
        matrix_info[i][1]++;
        matrix_info[i][4]++;

        matrix_info[i + 1][1]++;
        matrix_info[i + 1][2]++;
        matrix_info[i + 1][5] += 3;
        break;
      case 'draw':
        matrix_info[i][1]++;
        matrix_info[i][3]++;
        matrix_info[i][5]++;

        matrix_info[i + 1][1]++;
        matrix_info[i + 1][3]++;
        matrix_info[i + 1][5]++;
        break;
    }

    i += 2;
    j += 3;
  }

  i = 0;
  j = 1;
  while (i < matches2) {
    while (j < matches2) {
      if (matrix_info[i][0] === matrix_info[j][0]) {
        matrix_info[i][1] += matrix_info[j][1];
        matrix_info[i][2] += matrix_info[j][2];
        matrix_info[i][3] += matrix_info[j][3];
        matrix_info[i][4] += matrix_info[j][4];
        matrix_info[i][5] += matrix_info[j][5];

        matrix_info[j] = Array(6).fill(0);
      }
      j++;
    }
    i++;
    j = i + 1;
  }

  i = 0;
  j = 1;
  while (i < matches2) {
    while (j < matches2) {
      if (matrix_info[i][5] < matrix_info[j][5]) {
        [matrix_info[i], matrix_info[j]] = [matrix_info[j], matrix_info[i]];
      } else if (matrix_info[i][5] === matrix_info[j][5]) {
        if (matrix_info[i][0] !== 0 && matrix_info[j][0] !== 0) {
          if (matrix_info[i][0] > matrix_info[j][0]) {
            [matrix_info[i], matrix_info[j]] = [matrix_info[j], matrix_info[i]];
          }
        }
      }
      j++;
    }
    i++;
    j = i + 1;
  }

  for (let team = 0; team < matches2; team++) {
    if (matrix_info[team][0] !== 0) {
      result_table += `\n${matrix_info[team][0].padEnd(30)} | ${matrix_info[team][1].toString().padStart(2)} | ${matrix_info[team][2].toString().padStart(2)} | ${matrix_info[team][3].toString().padStart(2)} | ${matrix_info[team][4].toString().padStart(2)} | ${matrix_info[team][5].toString().padStart(2)}`;
    }
  }

  return result_table;
}
