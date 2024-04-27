import { configureStore } from "@reduxjs/toolkit";
import coffeeSlice from "./slices/coffeeSlice";
import coffeeBeanSlice from "./slices/coffeeBeanSlice";
import cakeSlice from "./slices/cakeSlice";

const store = configureStore({
  reducer: {
    coffee: coffeeSlice, //咖啡
    coffeeBean: coffeeBeanSlice, //咖啡豆
    cake: cakeSlice, //蛋糕
  },
});

export default store;
