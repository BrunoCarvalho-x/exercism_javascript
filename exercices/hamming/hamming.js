export function compute(rna1, rna2) {
  if (rna1.length != rna2.length) {
    throw new Error('strands must be of equal length');
  }

  let distance = 0;

  for (let i = 0; i < rna1.length; i++) {
    if (rna1[i] !== rna2[i]) {
      distance++;
    }
  }

  return distance;
}
