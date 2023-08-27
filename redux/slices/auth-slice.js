import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = authSlice.actions;
export default authSlice.reducer;
