import { createSlice } from "@reduxjs/toolkit";

const profitSlice = createSlice({
  name: "profit",
  initialState: { value: 0, history: [] },
  reducers: {
    sellLemonade: (state) => {
      state.value += 5;
      state.history.push(state.value);
    },
    buyLemons: (state) => {
      state.value -= 2;
      state.history.push(state.value);
    },
    resetProfit: (state) => {
      state.value = 0;
      state.history = [];
    },
  },
});

export const { sellLemonade, buyLemons, resetProfit } = profitSlice.actions;
export default profitSlice.reducer;