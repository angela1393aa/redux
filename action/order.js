const { COFFEE_ORDERED, COFFEEBEAN_ORDERED } = require("./types");

const orderCoffee = (qty, income) => {
  return {
    type: COFFEE_ORDERED,
    payload: {
      qty: qty,
      income: income,
    },
  };
};
// 購買咖啡豆
const orderCoffeeBean = (qty, income) => {
  return {
    type: COFFEEBEAN_ORDERED,
    payload: {
      qty: qty, //數量
      income: income, //金錢
    },
  };
};
module.exports = {
  orderCoffee,
  orderCoffeeBean,
};
