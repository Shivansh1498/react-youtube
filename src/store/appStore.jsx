import { configureStore } from "@reduxjs/toolkit";
import allVideoSlice from "./slices/allVideoSlice";
import sidebarConfigSlice from "./slices/sidebarConfigSlice";
import liveChatSlice from "./slices/liveChatSlice";

const appStore = configureStore({
  reducer: {
    allVideos: allVideoSlice,
    sideBar: sidebarConfigSlice,
    liveChat: liveChatSlice,
  },
});

export default appStore;
