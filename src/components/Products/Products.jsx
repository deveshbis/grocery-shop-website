import Image from 'next/image';
import React from 'react';

const Products = () => {

    const items = [
        {
            name: "Mushroom",
            category: "vegetable",
            price: 120,
            image: "https://i.ibb.co.com/khdGV4c/16.png",
            rating: 4.7,
            description: "A sweet and crunchy fruit rich in fiber and antioxidants, perfect for snacking or adding to salads and desserts."
        },
        {
            name: "Mustard",
            category: "vegetable",
            price: 60,
            image: "https://i.ibb.co.com/jL9b0kp/16-7.png",
            rating: 4.5,
            description: "A nutritious root vegetable high in beta-carotene, ideal for soups, stews, or enjoyed raw as a healthy snack."
        },
        {
            name: "Orange",
            category: "fruit",
            price: 250,
            image: "https://i.ibb.co.com/BPbxd5b/16-1.png",
            rating: 4.8,
            description: "A classic salad with crisp romaine lettuce, Parmesan cheese, croutons, and a creamy Caesar dressing."
        },
        {
            name: "Pomegranate",
            category: "fruit",
            price: 40,
            image: "https://i.ibb.co.com/WvzcDkv/16-2.png",
            rating: 4.6,
            description: "A soft and sweet fruit packed with potassium, ideal for a quick energy boost or as a smoothie ingredient."
        },
        {
            name: "Kiwi",
            category: "fruit",
            price: 80,
            image: "https://i.ibb.co.com/NxRWBRq/16-3.png",
            rating: 4.4,
            description: "A nutrient-rich vegetable high in vitamins and minerals, often steamed or stir-fried for a healthy meal."
        },
        {
            name: "Coconat",
            category: "fruit",
            price: 220,
            image: "https://i.ibb.co.com/PrGWLPX/16-4.png",
            rating: 4.7,
            description: "A refreshing salad with cucumbers, tomatoes, onions, olives, and feta cheese, dressed with olive oil and herbs."
        },
        {
            name: "Guava",
            category: "fruit",
            price: 150,
            image: "https://i.ibb.co.com/t8KxjDz/16-5.png",
            rating: 4.9,
            description: "A juicy and sweet berry that is a great source of vitamin C, perfect for desserts or as a healthy snack."
        },
        {
            name: "Eggplant",
            category: "vegetable",
            price: 50,
            image: "https://i.ibb.co.com/5hRbkW7/16-6.png",
            rating: 4.3,
            description: "A versatile vegetable used in a variety of dishes, from mashed potatoes to fries and soups."
        },
        // {
        //     name: "Fruit Salad",
        //     category: "salad",
        //     price: 180,
        //     image: "https://example.com/fruit-salad.jpg",
        //     rating: 4.6,
        //     description: "A colorful mix of fresh fruits like apples, bananas, grapes, and oranges, served with a light syrup or yogurt."
        // },
        // {
        //     name: "Simple Green Salad",
        //     category: "salad",
        //     price: 70,
        //     image: "https://example.com/orange.jpg",
        //     rating: 4.8,
        //     description: "A citrus fruit known for its juicy and tangy flavor, rich in vitamin C and perfect for juices or snacking."
        // },
        // {
        //     name: "Spinach",
        //     category: "salad",
        //     price: 90,
        //     image: "https://example.com/spinach.jpg",
        //     rating: 4.5,
        //     description: "A leafy green vegetable packed with iron and vitamins, often used in salads, smoothies, or as a side dish."
        // },
        // {
        //     name: "Coleslaw",
        //     category: "salad",
        //     price: 200,
        //     image: "https://example.com/coleslaw.jpg",
        //     rating: 4.7,
        //     description: "A crunchy salad made with shredded cabbage and carrots, tossed in a creamy mayonnaise-based dressing."
        // }
    ]

    return (
        <div className='mt-16 max-w-7xl max-md:max-w-md mx-auto'>
            <div className="text-center mb-12 px-4">
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-black">
                    Our Fresh Products
                </h1>
                <p className="mt-4 text-lg text-black font-thin">
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits, <br /> vegetables, and salad ingredients.
                </p>
                <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
                    <button type="button"
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300">All</button>
                    <button type="button"
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300">fruit</button>
                    <button type="button"
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300">vegetable</button>
                    <button type="button"
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300">salad</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
                        <div className="bg-white flex flex-col h-full">
                            <div className="w-full h-[250px] overflow-hidden mx-auto bg-[#F4F6F6] ">
                                <Image
                                    width={600}
                                    height={600}
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover p-2"
                                />
                            </div>

                            <div className="p-6 text-center flex-1">
                                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                {/* <p className="text-sm text-gray-600 mt-1">{item.category}</p> */}
                                <h4 className="text-xl text-gray-800 font-bold mt-3">${item.price}/kg</h4>
                                {/* <p className="text-yellow-500 mt-2">Rating: ⭐{item.rating}</p> */}
                            </div>

                            <button
                                type="button"
                                className="bg-[#D9D9D9] font-semibold hover:bg-[#FF6A1A] text-black text-sm px-2 py-2.5 w-full rounded-lg"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center mt-6">
                <button type="button"
                    className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-[#FF6A1A] outline-none bg-transparent hover:bg-[#FF6A1A]  text-[#FF6A1A]  hover:text-white transition-all duration-300">See All Products</button>
            </div>
        </div>
    );
};

export default Products;