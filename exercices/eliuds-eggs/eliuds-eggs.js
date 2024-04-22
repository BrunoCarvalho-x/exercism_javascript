export function eggCount(displayValue) {
  const binary = displayValue.toString(2);
  const sum = Array.from(String(binary), Number).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}
