import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productListItem, RootState } from "../types.d";

type productListItemState = {
    productItem: productListItem[]
    cartItem: productListItem[]
}

const initialState: productListItemState = {
    productItem: [],
    cartItem: []
}

export const slice = createSlice({
    name: "cartData",
    initialState,
    reducers: {
        getProductList: (state, action: PayloadAction<productListItem[]>) => {
            state.productItem = action.payload
        },
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
    getProductList,
    getCartItem,
    storeCartItem,
} = slice.actions;


export const cartData = slice.reducer;



