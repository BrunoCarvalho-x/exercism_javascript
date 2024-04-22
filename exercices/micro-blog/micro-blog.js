export function truncate(input, maxLength = 5) {
  const emojis = input
    .split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)
    .filter(Boolean);

  let truncated = emojis.slice(0, maxLength).join('');

  if (!/[\uD800-\uDFFF]/.test(truncated)) {
    truncated = truncated.slice(0, maxLength);
  }

  return truncated;
}
