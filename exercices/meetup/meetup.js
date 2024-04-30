import { isLeap } from '../leap/leap';

export function meetup(yaer, month, condition, weekday) {
  const regex = /teenth/;

  for (let i = 1; i <= 7; i++) {
    const date = new Date(yaer, month - 1, i);

    if (regex.test(condition)) {
      if (weekdays[date.getDay()] == weekday) {
        if (i == 6) {
          return new Date(yaer, month - 1, i + 7);
        } else {
          return new Date(yaer, month - 1, i + 14);
        }
      }
    } else if (condition == 'first') {
      if (weekdays[date.getDay()] == weekday) {
        return date;
      }
    } else if (condition == 'second') {
      if (weekdays[date.getDay()] == weekday) {
        return new Date(yaer, month - 1, i + 7);
      }
    } else if (condition == 'third') {
      if (weekdays[date.getDay()] == weekday) {
        return new Date(yaer, month - 1, i + 14);
      }
    } else if (condition == 'fourth') {
      if (weekdays[date.getDay()] == weekday) {
        return new Date(yaer, month - 1, i + 21);
      }
    } else if (condition == 'last') {
      if (weekdays[date.getDay()] == weekday) {
        console.log(months_31.includes(month - 1));
        console.log(months_30.includes(month - 1));
        console.log(i);
        if (months_31.includes(month - 1)) {
          if (i < 4) {
            return new Date(yaer, month - 1, i + 28);
          } else {
            return new Date(yaer, month - 1, i + 21);
          }
        } else if (months_30.includes(month - 1)) {
          if (i < 3) {
            return new Date(yaer, month - 1, i + 28);
          } else {
            return new Date(yaer, month - 1, i + 21);
          }
        } else {
          if (isLeap(yaer)) {
            if (i < 2) {
              return new Date(yaer, month - 1, i + 28);
            } else {
              return new Date(yaer, month - 1, i + 21);
            }
          } else {
            return new Date(yaer, month - 1, i + 21);
          }
        }
      }
    }
  }
}

const weekdays = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const months_31 = [0, 2, 4, 6, 7, 9, 11];
const months_30 = [3, 5, 8, 10];
