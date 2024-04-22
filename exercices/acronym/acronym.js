export const parse = (string) => {
  const splited_string = string.split(/[\s-]+/);
  return splited_string
    .map((item) => item.replace(/_/g, '').charAt(0).toUpperCase())
    .join('');
};
