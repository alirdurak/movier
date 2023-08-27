import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  data: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { change, updateData } = searchSlice.actions;
export default searchSlice.reducer;
