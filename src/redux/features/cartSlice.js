import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}

//cart slice

const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        //add to cart
        addToCart:(state, action) => {

        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer