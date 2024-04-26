export function translate(string) {
  const codons = [];

  if (string === undefined) {
    return codons;
  }

  for (let i = 0; i < string.length; i += 3) {
    const translation = findTranslation(string.slice(i, i + 3));

    if (translation === 'STOP') {
      break;
    } else if (translation === undefined) {
      invalid();
    } else {
      codons.push(translation);
    }
  }

  return codons;
}

const translation = {
  Methionine: ['AUG'],
  Tryptophan: ['UGG'],
  Leucine: ['UUA', 'UUG'],
  Tyrosine: ['UAU', 'UAC'],
  Cysteine: ['UGU', 'UGC'],
  Phenylalanine: ['UUU', 'UUC'],
  Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
  STOP: ['UAA', 'UAG', 'UGA'],
};

function invalid() {
  throw new Error('Invalid codon');
}

function findTranslation(value) {
  for (const key in translation) {
    if (translation[key].includes(value)) {
      return key;
    }
  }
}
