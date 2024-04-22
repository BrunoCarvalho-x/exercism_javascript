export function classify(number) {
  if (number < 1) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  const aliquots = aliquot(number);
  const sum = aliquots.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  if (sum == number) {
    return 'perfect';
  } else if (sum < number) {
    return 'deficient';
  } else {
    return 'abundant';
  }
}

function aliquot(number) {
  let aliquots = [];

  for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
      aliquots.push(i);
    }
  }

  return aliquots;
}
