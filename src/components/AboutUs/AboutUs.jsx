import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className="font-sans max-w-6xl max-md:max-w-md mx-auto mt-10">
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">

                <div className="bg-white p-4 flex justify-center items-center">
                    <Image
                        width={600}
                        height={600}
                        src="https://i.ibb.co.com/25FLHDJ/Image.png"
                        className="rounded-md lg:w-4/5 z-50 relative bg-white"
                        alt="Dining Experience"
                    />
                </div>
                <div className="max-md:order-1 max-md:text-center z-50 relative">
                    <button type="button" className="flex items-center text-green-600 text-sm bg-green-50 px-3 py-1.5 tracking-wide rounded-full">
                        About us
                    </button>
                    <h2 className="text-gray-800 lg:text-4xl md:text-2xl text-xl font-extrabold mb-4 md:!leading-[56px]">About Fresh Harvest</h2>
                    <p className="text-gray-600 mt-6 text-base leading-relaxed">Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>

                    <button type="button"
                    className="mt-6 px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-[#FF6A1A] outline-none bg-transparent hover:bg-[#FF6A1A]  text-[#FF6A1A]  hover:text-white transition-all duration-300">See More</button>
                </div>



            </div>


        </div>
    );
};

export default AboutUs;