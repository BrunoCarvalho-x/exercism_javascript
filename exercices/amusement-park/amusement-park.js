export function createVisitor(name, age, ticketId) {
  const visitor = {
    name: name,
    age: age,
    ticketId: ticketId,
  };

  return visitor;
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;

  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  for (const key in tickets) {
    if (key == ticketId && tickets[key] != null) {
      return `sold to ${tickets[key]}`;
    } else if (key == ticketId && tickets[key] == null) {
      return 'not sold';
    }
  }

  return 'unknown ticket id';
}

export function simpleTicketStatus(tickets, ticketId) {
  for (const key in tickets) {
    if (key == ticketId && tickets[key] != null) {
      return `${tickets[key]}`;
    }
  }

  return 'invalid ticket !!!';
}

export function gtcVersion(visitor) {
  for (const key in visitor) {
    if (key == 'gtc') {
      for (const sub_key in visitor[key]) {
        if (sub_key == 'version') {
          return visitor[key][sub_key];
        }
      }
    }
  }
}
