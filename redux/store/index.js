import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slices/search-slice";
import authSlice from "../slices/auth-slice";
export const store = configureStore({
  reducer: {
    searchSlice,
    authSlice,
  },
});
