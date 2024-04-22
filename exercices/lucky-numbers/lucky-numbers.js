export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''));
}

export function luckyNumber(value) {
  const reversedValue = parseInt(
    value.toString().split('').reverse().join(''),
    10
  );
  return value === reversedValue;
}

export function errorMessage(input) {
  if (!input) {
    return 'Required field';
  } else if (!Number(input)) {
    return 'Must be a number besides 0';
  } else {
    return '';
  }
}
