import { createSlice } from "@reduxjs/toolkit";

const profitSlice = createSlice({
  name: "profit",
  initialState: { value: 0 }, // Ensure "value" is initialized
  reducers: {
    sellLemonade: (state) => {
      state.value += 5;
    },
    buyLemons: (state) => {
      state.value -= 2;
    },
  },
});

export const { sellLemonade, buyLemons } = profitSlice.actions;
export default profitSlice.reducer;