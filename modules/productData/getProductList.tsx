import { AppThunk } from "../../store"
import { productListItem } from "../types.d"
import { fetchProduct } from "./api"
import { productList } from "./slice";

export const getProductList = (): AppThunk => async (dispatch) => {
    try {
        const products: productListItem[] = await fetchProduct();

        dispatch(productList(products))
    } catch (err) {
        console.error('Error in product fetch', err)
    }
}