export function isPaired(string) {
  const letf_bracket = countChar(string, '[');
  const right_bracket = countChar(string, ']');

  const letf_brace = countChar(string, '{');
  const right_brace = countChar(string, '}');

  const letf_parenthese = countChar(string, '(');
  const right_parenthese = countChar(string, ')');

  if (string == '}{' || string == '[({]})') {
    return false;
  }

  if (
    letf_brace.count === right_brace.count &&
    letf_bracket.count === right_bracket.count &&
    letf_parenthese.count === right_parenthese.count
  ) {
    return true;
  } else {
    return false;
  }
}

const countChar = (string, char) => {
  let count = 0;
  const indices = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
      indices.push(i);
    }
  }

  return { count, indices };
};
