import { createSlice } from "@reduxjs/toolkit";
import { ApiData } from "../ApiData";
 const productSlice=createSlice({
    name:"product",
    initialState:{item:[]},
    reducers:{
        setProducts:(state,action)=>{
            state.item=action.payload; 
        },
        searchProduct:(state,action)=>{
if (action.payload===""){
    state.item=ApiData;
}
else {
    state.item=ApiData.filter((item)=>
        item.title.includes(action.payload));
}
        }

    }

 })
 export const {setProducts,searchProduct}=productSlice.actions;
 export  default productSlice.reducer