const { COFFEE_ORDERED, COFFEEBEAN_ORDERED, CAKE_ORDERED } = require("./types");
// 購買咖啡
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
// 購買蛋糕
const orderCake = (qty, income) => {
  return {
    type: CAKE_ORDERED,
    payload: {
      qty: qty,
      income: income,
    },
  };
};

module.exports = {
  orderCoffee,
  orderCoffeeBean,
  orderCake,
};
