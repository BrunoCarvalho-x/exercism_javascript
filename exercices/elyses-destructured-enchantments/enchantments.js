export function getFirstCard(deck) {
  return deck[0];
}

export function getSecondCard(deck) {
  return deck[1];
}

export function swapTopTwoCards(deck) {
  [deck[0], deck[1]] = [deck[1], deck[0]];

  return deck;
}

export function discardTopCard(deck) {
  const topCard = deck.shift();
  return [topCard, deck];
}

export function insertFaceCards(deck) {
  const FACE_CARDS = ['jack', 'queen', 'king'];

  deck.length == 0 ? (deck[0] = undefined) : deck;

  for (let i = 0; i < FACE_CARDS.length; i++) {
    deck.splice(i + 1, 0, FACE_CARDS[i]);
  }

  return deck;
}
