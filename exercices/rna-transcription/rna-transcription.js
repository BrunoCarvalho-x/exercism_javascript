export const toRna = (rna) => {
  let tranlated_rna = [];

  for (let i = 0; i < rna.length; i++) {
    tranlated_rna[i] = translation[rna[i]];
  }

  return tranlated_rna.join('');
};

const translation = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};
