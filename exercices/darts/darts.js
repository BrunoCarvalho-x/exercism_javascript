export function score(x, y) {
  const dist = Math.sqrt(x * x + y * y);

  if (dist <= 1) {
    return 10;
  } else if (dist <= 5) {
    return 5;
  } else if (dist <= 10) {
    return 1;
  } else {
    return 0;
  }
}