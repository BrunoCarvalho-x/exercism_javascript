export function clean(number) {
  const clean_number = number.replace(/[()\s\-.+]/g, '');

  if (/[a-zA-Z]/.test(clean_number)) {
    throw new Error('Letters not permitted');
  }

  if (/[!"#$%&'()*,-./:;<=>?@[\]^_`{|}~]/.test(clean_number)) {
    throw new Error('Punctuations not permitted');
  }

  if (clean_number.length < 10) {
    throw new Error('Incorrect number of digits');
  }

  if (clean_number.length == 10) {
    if (clean_number[0] == 0) {
      throw new Error('Area code cannot start with zero');
    }

    if (clean_number[0] == 1) {
      throw new Error('Area code cannot start with one');
    }

    if (clean_number[3] == 0) {
      throw new Error('Exchange code cannot start with zero');
    }

    if (clean_number[3] == 1) {
      throw new Error('Exchange code cannot start with one');
    }
  }

  if (clean_number.length == 11) {
    if (clean_number[1] == 0) {
      throw new Error('Area code cannot start with zero');
    }

    if (clean_number[1] == 1) {
      throw new Error('Area code cannot start with one');
    }

    if (clean_number[4] == 0) {
      throw new Error('Exchange code cannot start with zero');
    }

    if (clean_number[4] == 1) {
      throw new Error('Exchange code cannot start with one');
    }

    if (clean_number[0] != 1) {
      throw new Error('11 digits must start with 1');
    }

    return clean_number.slice(1);
  }

  if (clean_number.length > 11) {
    throw new Error('More than 11 digits');
  }

  return clean_number;
}
