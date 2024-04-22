export const age = (planet, seconds) => {
  const proporcion = orbitalPeriods[planet] * earth_orbital_in_seconds;
  const fixed_by_2 = (seconds / proporcion).toFixed(2);
  return Number(fixed_by_2);
};

const earth_orbital_in_seconds = 31557600;

const orbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
