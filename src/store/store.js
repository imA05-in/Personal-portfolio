import { configureStore } from "@reduxjs/toolkit";
import gitdataSliceReducer from "./gitdataSlice";

export const store = configureStore({
  reducer: { gitdata: gitdataSliceReducer },
});
