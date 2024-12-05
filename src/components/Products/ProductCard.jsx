import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    const { name, price, image, _id } = product
    return (
        <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
            < div className="bg-white flex flex-col h-full" >
                <div className="w-full h-[250px] overflow-hidden mx-auto bg-[#F4F6F6] ">
                    <Link href={`/products/${_id}`}>
                        <Image
                            width={600}
                            height={600}
                            src={image}
                            alt={name}
                            className="h-full w-full object-cover p-2"
                        />
                    </Link>
                </div>

                <div className="p-6 text-center flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                    <h4 className="text-xl text-gray-800 font-bold mt-3">${price}/kg</h4>
                </div>

                <button
                    type="button"
                    className="bg-[#D9D9D9] font-semibold hover:bg-[#FF6A1A] text-black text-sm px-2 py-2.5 w-full rounded-lg"
                >
                    Add to Cart
                </button>
            </div >
        </div >

    );
};

export default ProductCard;