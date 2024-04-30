export const hey = (message) => {
  const no_space = message.replace(/\s+/g, '');
  if (
    '?' == message[message.length - 1] ||
    no_space[no_space.length - 1] == '?'
  ) {
    if (/[a-zA-Z]/.test(message)) {
      if (message === message.toUpperCase()) {
        return "Calm down, I know what I'm doing!";
      } else {
        return 'Sure.';
      }
    } else {
      return 'Sure.';
    }
  } else if (message.replace(/\s+/g, '') == '') {
    return 'Fine. Be that way!';
  } else if (message === message.toUpperCase()) {
    if (/[a-zA-Z]/.test(message)) {
      return 'Whoa, chill out!';
    } else {
      return 'Whatever.';
    }
  } else {
    return 'Whatever.';
  }
};
