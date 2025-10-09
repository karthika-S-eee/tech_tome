import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import detailSlice from "./detailSlic";
import productSlice from "./productSlice";
 const store=configureStore({
    reducer:{
        cartItem:cartSlice,
        detail:detailSlice,
        product:productSlice
    },
 })
 export default store;