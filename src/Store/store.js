import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import NavSlice from "./NavSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    nav: NavSlice,
  },
});
