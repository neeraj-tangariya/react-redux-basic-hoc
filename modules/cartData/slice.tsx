import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productListItem, RootState } from "../types.d";

type productListItemState = {
    cartItem: productListItem[]
}

const initialState: productListItemState = {
    cartItem: []
}

export const slice = createSlice({
    name: "cartData",
    initialState,
    reducers: {
        getCartItem: (state, action: PayloadAction<productListItem[]>) => {
            state.cartItem = action.payload
        },
        storeCartItem: (state, action) => {
            state.cartItem.push(action.payload)
        },
        removeCartItem: (state, action) => {
            state.cartItem.filter(item => {
                return item.id !== action.payload
            })
        }
    },
});

export const {
    getCartItem,
    storeCartItem,
    removeCartItem
} = slice.actions;


export const cartData = slice.reducer;



