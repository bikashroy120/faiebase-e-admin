import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart/cart-slice";
import orderSlice from "./Order/order-slice";
import imageSlice from "./ImageUpload/image-slice"

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        order:orderSlice.reducer,
        img:imageSlice.reducer,
     }
});
export default store;