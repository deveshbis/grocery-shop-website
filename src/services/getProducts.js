import axios from "axios";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async () => {
  const response = await fetch(`${apiUrl}/products/api/product-data`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data;
};


export const getProductsDetails = async (id) => {
    const res = await fetch(`${apiUrl}/products/api/${id}`)
    const product = res.json()
    return product;
}
