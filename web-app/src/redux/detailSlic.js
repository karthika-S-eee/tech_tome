import { createSlice } from "@reduxjs/toolkit";
const detailSlice = createSlice({
    name: "detail",
    initialState: {
        detailes: []
    },
    reducers: {
        increment1: (state, action) => {
            state.cart.push({...action.payload, quantity: 1});
          },
          addItem: (state, action) => {
            const selectedItem = state.cart.find(item => item.id === action.payload.id);
            if (selectedItem) {
              selectedItem.quantity += 1;
            } else {
              state.cart.push({...action.payload, quantity: 1});
            }
          },
          decrement1: (state, action) => {
            const selectedItem = state.cart.find(item => item.id === action.payload.id);
            if (selectedItem && selectedItem.quantity > 1) {
              selectedItem.quantity -= 1;
            } else {
              state.cart = state.cart.filter(item => item.id !== action.payload.id);
            }
          },
          removeItem: (state, action) => {
            const selectedItem = state.cart.find(item => item.id === action.payload);
            if (selectedItem) {
              state.cart = state.cart.filter(item => item.id !== action.payload);
            }
          }
            }
})
export const { increment1, decrement1,addItem,removeItem } = detailSlice.actions;
export default detailSlice.reducer;