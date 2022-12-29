export const fetchProduct = async () => {
    const data = await fetch(`http://3.83.214.70:3000/api/products`).then((res) =>
        res.json()
    );
    return data
}