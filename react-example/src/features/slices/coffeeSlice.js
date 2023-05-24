// src/features/slices/coffeeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCoffee: 20,
};

const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    // 這裡固定會有 sate & action 兩參數，直接對應於上面的 state
    coffeeOrdered: (state, action) => {
      state.numOfCoffee = state.numOfCoffee - action.payload.qty;
      return state;
    },
    coffeeRestocked: (state, action) => {
      state.numOfCoffee = state.numOfCoffee + action.payload.qty;
      return state;
    },
  },
});

export const { coffeeOrdered, coffeeRestocked } = coffeeSlice.actions;

export default coffeeSlice.reducer;
