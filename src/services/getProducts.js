import axios from "axios";

export const getProducts = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/api/product-data`)
    return res.data;
}

export const getProductsDetails = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/api/${id}`)
    const product = res.json()
    return product;
}
