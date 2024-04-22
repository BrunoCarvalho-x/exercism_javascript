export function timeToMixJuice(name) {
  const mixingTimes = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
  };

  return mixingTimes[name] || 2.5;
}

export function limesToCut(wedgesNeeded, limes) {
  return fruitsToCut(wedgesNeeded, limes, {
    small: 6,
    medium: 8,
    large: 10,
  });
}

export function remainingOrders(timeLeft, orders) {
  const mixingTimes = orders.map((order) => timeToMixJuice(order));

  let i = 0;
  let time = 0;

  while (time < timeLeft && i < mixingTimes.length) {
    time += mixingTimes[i];
    i++;
  }

  return orders.slice(i);
}

function fruitsToCut(wedgesNeeded, fruits, wedgeCounts) {
  let i = 0;
  let wedges = 0;

  while (wedges < wedgesNeeded && i < fruits.length) {
    const wedgeCount = wedgeCounts[fruits[i]];

    if (wedgeCount !== undefined) {
      wedges += wedgeCount;
      i++;
    } else {
      break;
    }
  }

  return i;
}
