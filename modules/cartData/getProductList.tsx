import { AppThunk } from "../../store"
import { productListItem } from "../types.d"
import { getProductList } from "./slice"

export const getProducts = (): AppThunk => async (dispatch) => {
    try {
        const productList: productListItem[] = [
            {
                id: 1,
                name: 'Product One'
            },
            {
                id: 2,
                name: 'Product Two'
            },
            {
                id: 3,
                name: 'Product Three'
            },
            {
                id: 4,
                name: 'Product Four'
            },
            {
                id: 5,
                name: 'Product Five'
            },
        ]
        dispatch(getProductList(productList))
    } catch (err) {
        console.error('Error in product fetch', err)
    }
}