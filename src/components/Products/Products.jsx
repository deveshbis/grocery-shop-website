import React from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '@/services/getProducts';


const Products = async () => {
    const { products } = await getProducts()
    return (
        <div className='mt-16 max-w-7xl max-md:max-w-md mx-auto'>
            <div className="text-center mb-12 px-4">
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-black">
                    Our Fresh Products
                </h1>
                <p className="mt-4 text-lg text-black font-thin">
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits, <br /> vegetables, and salad ingredients.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    products?.length > 0 && products?.map((product) => (
                        
                        <ProductCard product={product} key={product._id}/>
                    ))}
            </div>

            <div className="flex justify-center items-center mt-6">
                <button type="button"
                    className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-[#FF6A1A] outline-none bg-transparent hover:bg-[#FF6A1A]  text-[#FF6A1A]  hover:text-white transition-all duration-300">
                    See All Products
                </button>
            </div>
        </div>
    );
};

export default Products;