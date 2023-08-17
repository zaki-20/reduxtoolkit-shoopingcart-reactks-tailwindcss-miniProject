import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}

//cart slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {
        //add to cart
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex(item => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
            } else {
                const temp = {...action.payload, qnty: 1}
                state.carts = [...state.carts, temp]
            }

        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer