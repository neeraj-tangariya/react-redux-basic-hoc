export type productListItem = {
    id: number
    name: string,
    image?: string
}

export type RootState = {
    cartData: productListItem[],
}