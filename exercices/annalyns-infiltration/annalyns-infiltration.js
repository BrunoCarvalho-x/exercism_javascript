export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (prisonerIsAwake || petDogIsPresent) &&
    ((!archerIsAwake && petDogIsPresent) ||
      (!archerIsAwake && !petDogIsPresent && !knightIsAwake))
  );
}
