export function rotate(string, number) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const rotatedAlphabet = alphabet.slice(number) + alphabet.slice(0, number);

  return string
    .split('')
    .map((char) => {
      const isUpperCase = char.toUpperCase() === char;
      const lowerChar = char.toLowerCase();
      const index = alphabet.indexOf(lowerChar);

      if (index === -1) return char;

      const rotatedChar = rotatedAlphabet[index];
      return isUpperCase ? rotatedChar.toUpperCase() : rotatedChar;
    })
    .join('');
}
