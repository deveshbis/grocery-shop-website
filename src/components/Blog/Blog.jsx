import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    const blogs = [
        {
            
            name: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
            date: "May 23, 2024",
            image: "https://i.ibb.co.com/znN3Qgk/blog1.png",
            description: "Eating seasonally is one of the best ways to enjoy fresh, flavorful, and nutrient-packed produce. Seasonal fruits and vegetables are not only more delicious but also more affordable and eco-friendly. By choosing what's in season, you support local farmers, reduce your carbon footprint, and savor the best nature has to offer.In winter, root vegetables like carrots, beets, and sweet potatoes shine, providing warmth and nourishment.Citrus fruits such as oranges, grapefruits, and mandarins offer a burst of vitamin C, boosting immunity during cold months.As spring approaches, tender greens like spinach, asparagus, and peas begin to emerge, adding freshness to your meals.Summer is a feast for fruit lovers, with berries, watermelons, and peaches taking center stage.These juicy, sweet fruits are perfect for refreshing snacks or desserts.Tomatoes, cucumbers, and bell peppers also thrive, making summer salads vibrant and flavorful.Finally, autumn brings a harvest of hearty squash, pumpkins, and apples, ideal for comforting soups and pies.Embracing seasonal produce not only enhances your culinary experience but also connects you to the rhythms of nature.So, explore what’s fresh right now and transform your meals with the best flavors of each season."
        },
        {
            name: "Mastering Salad Creations: Tips Delicious and Nutritious Salads",
            date: "May 23, 2024",
            image: "https://i.ibb.co.com/M7YHWRf/blog2.png",
            description: "Salads are a versatile and healthy addition to any meal, offering endless possibilities for flavor, texture, and nutrition. Mastering the art of salad-making involves a balance of fresh ingredients, creativity, and a few key techniques to elevate your dish from ordinary to extraordinary.Start with Fresh, Seasonal Greens The foundation of any great salad is fresh greens. Choose a variety of leafy vegetables like spinach, arugula, kale, or romaine lettuce. Mixing different textures and flavors creates a more interesting base and boosts nutritional value.Incorporate a rainbow of vegetables and fruits to make your salad vibrant and flavorful. Bell peppers, cucumbers, carrots, and cherry tomatoes add crunch, while fruits like berries, oranges, or apples bring sweetness and a burst of freshness.To make your salad more filling, add protein sources like grilled chicken, tofu, chickpeas, or hard-boiled eggs. Nuts, seeds, and cheese also enhance the texture and provide essential nutrients.Healthy fats like avocado, olive oil, or nuts not only improve the taste but also help your body absorb fat-soluble vitamins.Skip store-bought dressings and make your own! A simple vinaigrette with olive oil, lemon juice, and herbs can transform your salad into a gourmet dish.With these tips and tricks, you can create salads that are both delicious and nutritious, making healthy eating a delightful experience"
        },
        {
            name: "Mastering Salad Creations: Tips  Delicious and Nutritious Vegitables",
            date: "May 23, 2024",
            image: "https://i.ibb.co.com/mhWZyBt/blog3.png",
            description: "Creating the perfect vegetable and fruit salad is all about balancing flavors, textures, and colors. A well-crafted salad can be a refreshing side dish or a wholesome meal packed with vitamins, minerals, and antioxidants. Here are some essential tips and tricks to master the art of making delicious and nutritious vegetable and fruit salads.Seasonal vegetables and fruits not only taste better but also retain more nutrients. In summer, opt for juicy tomatoes, cucumbers, and bell peppers, while winter is perfect for root vegetables like carrots and beets, paired with citrus fruits like oranges and grapefruits.A great vegetable and fruit salad strikes the perfect balance between sweet and savory. Pair sweet fruits like strawberries, apples, or mangoes with savory vegetables like spinach, kale, or arugula. Add a hint of tanginess with lemon juice or balsamic vinegar.Mix crunchy vegetables like carrots, celery, and bell peppers with softer fruits like avocados, berries, or melons. Adding nuts, seeds, or croutons enhances the texture and provides a satisfying bite.For a more filling salad, include plant-based proteins like chickpeas, quinoa, or tofu. If you prefer animal-based proteins, grilled chicken or feta cheese can complement the fruits and vegetables beautifully.A simple homemade dressing can elevate your salad. Try a vinaigrette made from olive oil, lemon juice, honey, and mustard, or a yogurt-based dressing for a creamy texture.y combining fresh vegetables and fruits with the right flavors and textures, you can create salads that are both delicious and nutritious, perfect for any season!"
        },
    ]

    return (
        <div className="p-4 font-[sans-serif] mt-10">
            <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
                <div className="text-center mb-12 px-4 flex flex-col items-center">
                    <button
                        type="button"
                        className="flex items-center text-green-600 text-sm bg-green-50 px-3 py-1.5 tracking-wide rounded-full mb-4"
                    >
                        Our Blog
                    </button>

                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-black">
                        Fresh Harvest Blog
                    </h1>

                    <p className="mt-4 text-lg text-black font-thin">
                        Welcome to the Fresh Harvest Blog, your go-to resource for all things <br /> related to fresh produce, healthy eating, and culinary inspiration.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white rounded overflow-hidden shadow-md">
                            <img src={blog.image} alt={blog.name} className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <p className="text-[#4A4A52] text-[13px] font-semibold mt-4">{blog.date}</p>
                                <h3 className="text-lg font-bold text-[#212337] mb-3">{blog.name}</h3>
                                {/* <p className="text-gray-500 text-sm">
                                    {blog.description.length > 100
                                        ? `${blog.description.substring(0, 100)}...`
                                        : blog.description}
                                </p> */}

                                <Link
                                    href="#"
                                    className="mt-4  text-[#FF6A1A] text-[13px] flex items-center gap-2"
                                >
                                    Read More <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;