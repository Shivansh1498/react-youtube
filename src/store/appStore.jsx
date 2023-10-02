import { configureStore } from "@reduxjs/toolkit";
import allVideoSlice from "./slices/allVideoSlice";
import sidebarConfigSlice from "./slices/sidebarConfigSlice";

const appStore = configureStore({
  reducer: {
    allVideos: allVideoSlice,
    sideBar: sidebarConfigSlice,
  },
});

export default appStore;
