export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = defineHour(hours, minutes);
    this.minutes = defineMinute(minutes);
  }

  toString() {
    const hour = this.hours < 10 ? `0${this.hours}` : `${this.hours}`;
    const minute = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`;
    return `${hour}:${minute}`;
  }

  plus(minutes) {
    this.hours = defineHour(this.hours, this.minutes + minutes);
    this.minutes = defineMinute(this.minutes + minutes);

    return this;
  }

  minus(minutes) {
    return this.plus(-minutes);
  }

  equals(otherClock) {
    return this.hours == otherClock.hours && this.minutes == otherClock.minutes;
  }
}

function defineHour(hours, minutes) {
  return (24 + (hours % 24) + (Math.floor(minutes / 60) % 24)) % 24;
}

function defineMinute(minutes) {
  return (60 + (minutes % 60)) % 60;
}
