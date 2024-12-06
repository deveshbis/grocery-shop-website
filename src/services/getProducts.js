
export const getProducts = async () => {
    const res = await fetch("http://localhost:3000/products/api/product-data")
    const products = res.json()
    return products;
}

export const getProductsDetails = async (id) => {
    const res = await fetch(`http://localhost:3000/products/api/${id}`)
    const product = res.json()
    return product;
}
