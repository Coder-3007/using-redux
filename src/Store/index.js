// Redux is a predictable state container for JavaScript applications,
//  commonly used with libraries like React to manage application state
// in a more predictable and maintainable way

// we have to combine multiple slices

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cart-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
