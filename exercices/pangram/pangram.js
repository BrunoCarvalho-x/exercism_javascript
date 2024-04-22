export const isPangram = (sentence) => {
  if (sentence === null || sentence.trim() === '') {
    return false;
  }

  const expected = 'abcdefghijklmnopqrstuvwxyz';
  const sortedUniqueChars = sentence
    .toLowerCase()
    .match(/[a-z]/g)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort()
    .join('');

  return sortedUniqueChars == expected;
};
