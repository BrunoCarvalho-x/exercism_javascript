export function cookingStatus(timer) {
  if (timer == 0) {
    return 'Lasagna is done.';
  } else if (timer == null) {
    return 'You forgot to set the timer.';
  } else {
    return 'Not done, please wait.';
  }
}

export function preparationTime(layers, avg_time = 2) {
  avg_time = avg_time ? avg_time : 2;

  return layers.length * avg_time;
}

export function quantities(layers) {
  let ingridients = {
    noodles: 0,
    sauce: 0.0,
  };

  for (let i = 0; i < layers.length; i++) {
    switch (layers[i]) {
      case 'noodles':
        ingridients.noodles += 50;
        break;
      case 'sauce':
        ingridients.sauce += 0.2;
        break;
      default:
        break;
    }
  }

  return ingridients;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, scale) {
  let scaled_recipe = { ...recipe };

  for (const ing in scaled_recipe) {
    scaled_recipe[ing] = scaled_recipe[ing] * (scale / 2);
  }

  return scaled_recipe;
}
