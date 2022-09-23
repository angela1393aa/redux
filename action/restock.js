const {
  COFFEE_RESTOCKED,
  COFFEEBEAN_RESTOCKED,
  CAKE_RESTOCKED,
} = require("./types");

// 補咖啡的 function
const restockCoffee = (qty, pay) => {
  return {
    type: COFFEE_RESTOCKED,
    payload: {
      qty: qty,
      pay: pay,
    },
  };
};
// 補咖啡豆的 function
const restockCoffeeBean = (qty, pay) => {
  return {
    type: COFFEEBEAN_RESTOCKED,
    payload: {
      qty: qty,
      pay: pay,
    },
  };
};
// 補蛋糕的 function
const restockCake = (qty, pay) => {
  return {
    type: CAKE_RESTOCKED,
    payload: {
      qty: qty,
      pay: pay,
    },
  };
};
module.exports = {
  restockCoffee,
  restockCoffeeBean,
  restockCake,
};
