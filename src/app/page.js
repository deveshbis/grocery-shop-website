import AboutUs from "@/components/AboutUs/AboutUs";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Testimonial from "@/components/Testimonial/Testimonial";


export default function Home() {
  return (
    <div>
      <Hero />
      <Products/>
      <AboutUs/>
      <Testimonial/>
    </div>
  );
}
