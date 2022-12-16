import { AppThunk } from "../../store"
import { productListItem } from "../types.d"
import { fetchProduct } from "./api"
import { getProductList } from "./slice"

export const getProducts = (): AppThunk => async (dispatch) => {
    try {
        const products: productListItem[] = await fetchProduct();

        dispatch(getProductList(products))
    } catch (err) {
        console.error('Error in product fetch', err)
    }
}