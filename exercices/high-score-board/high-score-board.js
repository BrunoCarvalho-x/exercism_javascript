export function createScoreBoard() {
  const score = {
    'The Best Ever': 1000000,
  };
  return score;
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;

  return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];

  return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
  if (scoreBoard.hasOwnProperty(player)) {
    scoreBoard[player] += points;
  }

  return scoreBoard;
}

export function applyMondayBonus(scoreBoard) {
  for (const score in scoreBoard) {
    scoreBoard[score] += 100;
  }

  return scoreBoard;
}

export function normalizeScore(params) {
  return params['normalizeFunction'](params['score']);
}
