import { createSlice } from "@reduxjs/toolkit";

const allVideoSlice = createSlice({
  name: "allVideo",
  initialState: {
    data: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addVideos } = allVideoSlice.actions;

export default allVideoSlice.reducer;
