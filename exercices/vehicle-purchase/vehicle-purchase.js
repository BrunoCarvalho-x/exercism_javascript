export function needsLicense(kind) {
  if (kind == 'car' || kind == 'truck') {
    return true;
  } else {
    return false;
  }
}

export function chooseVehicle(option1, option2) {
  let my_choice;

  if (option1 < option2) {
    my_choice = `${option1} is clearly the better choice.`;
  } else {
    my_choice = `${option2} is clearly the better choice.`;
  }

  return my_choice;
}

export function calculateResellPrice(originalPrice, age) {
  let final_price;

  if (age < 3) {
    final_price = originalPrice * 0.8;
  } else if (age >= 3 && age <= 10) {
    final_price = originalPrice * 0.7;
  } else {
    final_price = originalPrice * 0.5;
  }

  return final_price;
}
