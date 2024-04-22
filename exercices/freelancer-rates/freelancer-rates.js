export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  return Math.ceil(
    monthRate(ratePerHour) * fullmonth(numDays) * (1 - discount) +
      (numDays - 22 * fullmonth(numDays)) * dayRate(ratePerHour)
  );
}

function monthRate(ratePerHour) {
  return dayRate(ratePerHour) * 22;
}

function fullmonth(numDays) {
  return Math.floor(numDays / 22);
}
