export function isValidCommand(command) {
  const valid_command = command.split(/[,.\s]/)[0].toLowerCase() == 'chatbot';

  return valid_command;
}

export function removeEmoji(message) {
  const regex = /\b\w*emoji\d*\w*\b/g;

  return message.replace(regex, '');
}

export function checkPhoneNumber(number) {
  const regex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;

  if (regex.test(number)) {
    return 'Thanks! You can now download me to your phone.';
  } else {
    return "Oops, it seems like I can't reach out to " + number;
  }
}

export function getURL(userInput) {
  const regex = /\b(\w+\.\w{2,})\b/g;
  const matches = userInput.match(regex);

  return matches || [];
}

export function niceToMeetYou(fullName) {
  const full_name = fullName.split(', ');

  return `Nice to meet you, ${full_name[1]} ${full_name[0]}`;
}
