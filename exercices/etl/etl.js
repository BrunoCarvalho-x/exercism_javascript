export function transform(input) {
  const output = {};

  Object.keys(input).forEach((key) => {
    input[key].forEach((subKey) => {
      const lowerSubKey = subKey.toLowerCase();
      output[lowerSubKey] = Number(key);
    });
  });

  return output;
}
