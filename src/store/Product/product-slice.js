import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'order',
    initialState:{
        products:[],
        productCategory:[],
        productBrand:[],
        lodding:false,
        error:"",
    },
    reducers:{
        setProductItem(state,action){
            state.products = action.payload;
        },
    }
});
export const productActions = productSlice.actions;
export default productSlice;