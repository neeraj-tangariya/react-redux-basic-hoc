export type productListItem = {
    id: number,
    name: string,
    url: string,
    price: number,
    quantity: number,
    description: string,
    created_at: string,
    updated_at: string,
}

export type RootState = {
    cartData: productListItem[],
    productData: productListItem[]
}