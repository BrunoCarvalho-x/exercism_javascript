export function encode(string) {
  let output = '';
  let i = 0;

  while (i < string.length) {
    let j = i + 1;
    let count = 1;

    while (string[i] == string[j] && j < string.length) {
      count++;
      j++;
    }

    if (count == 1) {
      output += string[i];
      i++;
    } else {
      output += count.toString() + string[i];
      count = 1;
      i = j;
    }
  }

  return output;
}

export function decode(string) {
  let output = '';
  let count = '';
  let i = 0;

  while (i < string.length) {
    if (/^[0-9]$/.test(string[i])) {
      count += string[i];
      i++;
    } else {
      if (count == '') {
        count = '1';
      }

      for (let j = 0; j < Number(count); j++) {
        output += string[i];
      }

      count = '';
      i++;
    }
  }

  return output;
}
