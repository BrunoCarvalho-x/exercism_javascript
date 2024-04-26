export function abilityModifier(number) {
  if (number < 3) {
    throw new Error('Ability scores must be at least 3');
  } else if (number > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor((number - 10) / 2);
}

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }

  static rollAbility() {
    return randValue().reduce((total, currentValue) => total + currentValue, 0);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}

function randNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function dices() {
  return [randNumber(), randNumber(), randNumber(), randNumber()];
}

function randValue() {
  const dice = dices();
  const minIndex = dice.indexOf(Math.min(...dice));

  if (minIndex !== -1) {
    dice.splice(minIndex, 1);
  }

  return dice;
}
