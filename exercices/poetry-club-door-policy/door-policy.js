export function frontDoorResponse(line) {
  return line.charAt(0);
}

export function frontDoorPassword(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function backDoorResponse(line) {
  let i = 0;
  let last_char;
  const not_char = [' ', '\t', '\n'];

  while (i <= line.length && !last_char) {
    const current_char = line.charAt(line.length - i);
    if (!not_char.includes(current_char)) {
      last_char = current_char;
    }
    i++;
  }

  return last_char;
}

export function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please';
}
