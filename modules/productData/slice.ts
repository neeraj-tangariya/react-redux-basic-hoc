import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productListItem, RootState } from "../types.d";

type productListItemState = {
    productItem: productListItem[]
}

const initialState: productListItemState = {
    productItem: [],
}

export const slice = createSlice({
    name: "productData",
    initialState,
    reducers: {
        productList: (state, action: PayloadAction<productListItem[]>) => {
            state.productItem = action.payload
        }
    },
});

export const { productList } = slice.actions;

export const productData = slice.reducer;