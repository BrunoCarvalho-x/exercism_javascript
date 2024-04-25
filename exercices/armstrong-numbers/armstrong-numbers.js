export const isArmstrongNumber = (number) => {
  const stringNumber = number.toString();
  const power = stringNumber.length;

  const sum = stringNumber
    .split('')
    .reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);

  return sum === number;
};
