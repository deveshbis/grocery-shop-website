import { getProducts } from '@/services/getProducts';
import React from 'react';
import ProductCard from './ProductCard';

const RelatedProduct = async () => {
    const { products } = await getProducts()

    return (
        <div className="p-4 font-[sans-serif] mt-10">
            <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
                <div className="text-center mb-12 px-4 flex flex-col items-center">
                    <button
                        type="button"
                        className="flex items-center text-green-600 text-sm bg-green-50 px-3 py-1.5 tracking-wide rounded-full mb-4"
                    >
                        Our Products
                    </button>

                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-black">
                        Related products
                    </h1>

                    <p className="mt-4 text-lg text-black font-thin">
                        We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        products?.length > 0 && products.slice(0, 4).map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))}
                </div>
            </div>

        </div>
    );
};

export default RelatedProduct;
