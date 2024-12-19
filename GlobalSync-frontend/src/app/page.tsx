import { FAQ } from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative flex-col items-center justify-center">
      <Hero />      
      <Features />
      <AnimatedTestimonialsDemo />
      <FAQ />
      <Footer />
    </div>
  );
}
