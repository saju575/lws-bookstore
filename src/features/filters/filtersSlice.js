import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tag: "all",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
    tagFilter: (state, action) => {
      state.tag = action.payload;
    },
  },
});
export default filterSlice.reducer;
export const { searchFilter, tagFilter } = filterSlice.actions;
