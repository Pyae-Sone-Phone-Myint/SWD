import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    totalAmount : 0,
    Quantity : 0

}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state,{payload}) => {
            state.cartItems = [...state.cartItems, {...payload}]
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;