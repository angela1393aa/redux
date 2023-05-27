import { configureStore } from "@reduxjs/toolkit";
import coffeeSlice from "./slices/coffeeSlice";
import coffeeBeanSlice from "./slices/coffeeBeanSlice";

const store = configureStore({
  reducer: {
    coffee: coffeeSlice, //咖啡
    coffeeBean: coffeeBeanSlice, //咖啡豆
  },
});

export default store;
