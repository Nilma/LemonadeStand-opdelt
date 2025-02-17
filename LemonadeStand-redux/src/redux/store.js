import { configureStore } from "@reduxjs/toolkit";
import profitReducer from "./profitSlice";

const store = configureStore({
  reducer: {
    profit: profitReducer,
  },
});

export default store;
