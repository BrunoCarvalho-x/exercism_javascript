const types = {
  null: 0,
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
};

const options = {
  ExtraSauce: 1,
  ExtraToppings: 2,
};

export function pizzaPrice(pizza, ...extras) {
  if (extras.length < 1) {
    return types[pizza.toString()];
  } else {
    const extra = extras.slice(1);

    return pizzaPrice(pizza, ...extra) + options[extras[0]];
  }
}

export function orderPrice(pizzaOrders) {
  let sum = 0;

  for (let i = 0; i < pizzaOrders.length; i++) {
    sum += pizzaPrice(pizzaOrders[i]['pizza'], ...pizzaOrders[i]['extras']);
  }

  return sum;
}
