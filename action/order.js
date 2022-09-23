const { COFFEE_ORDERED } = require("./types");

const orderCoffee = (qty, income) => {
  return {
    type: COFFEE_ORDERED,
    payload: {
      qty: qty,
      income: income,
    },
  };
};

module.exports = {
  orderCoffee,
};
