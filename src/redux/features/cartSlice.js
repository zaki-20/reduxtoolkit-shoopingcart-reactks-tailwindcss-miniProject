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
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]
            }
        },

        //remove particular cart
        removeToCart: (state, action) => {
            const data = state.carts.filter(item => item.id !== action.payload)
            state.carts = data
        },

        // remove single iteams
        removeSingleItems: (state, action) => {
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                state.carts[IteamIndex_dec].qnty -= 1
            }

        },

        //clear cart
          emptycartItem:(state,action)=>{
            state.carts = []
        }

    }
})

export const { addToCart, removeToCart, removeSingleItems,emptycartItem } = cartSlice.actions

export default cartSlice.reducer