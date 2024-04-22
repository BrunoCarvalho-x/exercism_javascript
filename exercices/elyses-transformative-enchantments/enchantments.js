export function seeingDouble(deck) {
  return deck.map((value) => value * 2);
}

export function threeOfEachThree(deck) {
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] == 3) {
      deck.splice(i, 0, 3, 3);
      i += 2;
    }
  }

  return deck;
}

export function middleTwo(deck) {
  return [deck[4], deck[5]];
}

export function sandwichTrick(deck) {
  deck.splice(deck.length / 2, 0, deck[deck.length - 1]);

  deck.splice(deck.length - 1, 1);

  deck.splice(deck.length / 2 + 1, 0, deck[0]);

  deck.splice(0, 1);

  return deck;
}

export function twoIsSpecial(deck) {
  let two = [];

  for (let i = 0; i < deck.length; i++) {
    if (deck[i] == 2) {
      two.push(deck[i]);
    }
  }

  return two;
}

export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

export function reorder(deck) {
  return deck.reverse();
}
