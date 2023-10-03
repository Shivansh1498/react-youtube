import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MOCK_DATA } from "../../utils/liveChatMockData";

const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    data: [],
  },
  reducers: {
    addToLiveChat: (state, action) => {
      state.data.splice(LIVE_CHAT_MOCK_DATA.length, 1);
      state.data.unshift(action.payload);
    },
  },
});

export const { addToLiveChat } = liveChatSlice.actions;

export default liveChatSlice.reducer;
