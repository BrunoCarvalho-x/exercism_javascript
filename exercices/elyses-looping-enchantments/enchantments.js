export function cardTypeCheck(stack, card) {
  let count = 0;

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] == card) {
      count++;
    }
  }

  return count;
}

export function determineOddEvenCards(stack, type) {
  let count = 0;

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] % 2 == !type) {
      count++;
    }
  }

  return count;
}
