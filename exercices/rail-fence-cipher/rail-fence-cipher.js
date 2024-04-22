export function encode(message, rails) {
  let output = '';
  let encode_message = new Array();

  const pattern_code = pattern(rails);

  for (let i = 0; i < rails; i++) {
    encode_message[i] = new Array();
  }

  for (let j = 0; j < message.length; j++) {
    const line = pattern_code[j % ((rails - 1) * 2)];

    encode_message[line].push(message[j]);
  }

  for (let k = 0; k < encode_message.length; k++) {
    output += encode_message[k].join('');
  }

  return output;
}

export function decode(message, rails) {
  const messageLength = message.length;
  const patternCode = pattern(rails);
  const decodedMessage = new Array(messageLength).fill('');

  let index = 0;

  for (let i = 0; i < rails; i++) {
    for (let j = 0; j < messageLength; j++) {
      if (patternCode[j % ((rails - 1) * 2)] === i) {
        decodedMessage[j] = message[index++];
      }
    }
  }

  return decodedMessage.join('');
}

function pattern(rails) {
  if (rails <= 0) return [];

  const output = [];
  for (let i = 0; i < rails; i++) {
    output.push(i);
  }
  for (let i = rails - 2; i > 0; i--) {
    output.push(i);
  }
  return output;
}
