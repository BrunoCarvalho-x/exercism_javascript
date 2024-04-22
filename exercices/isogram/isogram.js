export function isIsogram(word) {
  const uniqueLetters = new Set();

  for (const letter of word.toLowerCase()) {
    if (/[a-z]/.test(letter)) {
      if (uniqueLetters.has(letter)) {
        return false;
      } else {
        uniqueLetters.add(letter);
      }
    }
  }

  return true;
}
