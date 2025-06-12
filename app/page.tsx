
import Image from "next/image";
import Navbar from "@/components/navbar";
import dynamic from 'next/dynamic';
import CustomerReview from "@/components/customerReview";
// Dynamically import HeroSection and disable SSR for it
import HeroSection from "@/components/hero-section";
import ProductSection from "@/components/products";
import AboutSection from "@/components/aboutSection";
export default function Home() {
  return (
    <>  
    <Navbar/>
    <div className="max-w-7xl min-h-screen  mx-auto">
    
    
      <HeroSection/>
    <ProductSection/>
    <CustomerReview/>
    <AboutSection/>
      </div>
      </>
  );
}
