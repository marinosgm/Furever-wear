import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ProductList />
      <AnimatedTestimonialsDemo />
    </div>
  );
}