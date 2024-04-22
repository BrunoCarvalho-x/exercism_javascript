export function findAnagrams(string, input) {
  let anagrams = [];
  const sortedstring = string.toLowerCase().split('').sort().join('');

  for (let i = 0; i < input.length; i++) {
    const sortedinput = input[i].toLowerCase().split('').sort().join('');

    if (
      sortedinput == sortedstring &&
      string.toLowerCase() != input[i].toLowerCase()
    ) {
      anagrams.push(input[i]);
    }
  }

  return anagrams;
}
