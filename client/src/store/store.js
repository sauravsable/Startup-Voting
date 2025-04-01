import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";
import mobileNavSlice from "../slice/mobNavSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    mobileNav: mobileNavSlice,
  },
});

export default store;
