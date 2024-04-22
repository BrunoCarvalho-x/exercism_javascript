export function totalBirdCount(birdsPerDay) {
  let total_birds = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    total_birds += birdsPerDay[i];
  }

  return total_birds;
}

export function birdsInWeek(birdsPerDay, week) {
  let birds_in_week = [];

  birds_in_week = birdsPerDay.slice((week - 1) * 7, week * 7);

  return totalBirdCount(birds_in_week);
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 == 0) {
      birdsPerDay[i] += 1;
    }
  }

  return birdsPerDay;
}
