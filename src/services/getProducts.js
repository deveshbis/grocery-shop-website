import axios from "axios";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async () => {
    const res = await axios.get(`${apiUrl}/products/api/product-data`)
    return res.data;
}

export const getProductsDetails = async (id) => {
    const res = await fetch(`${apiUrl}/products/api/${id}`)
    const product = res.json()
    return product;
}
