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
            // not implemented yet
        }
    },
});

export const {
    getCartItem,
    storeCartItem,
} = slice.actions;


export const cartData = slice.reducer;



