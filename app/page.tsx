
"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import dynamic from 'next/dynamic';
import CustomerReview from "@/components/customerReview";
// Dynamically import HeroSection and disable SSR for it
const HeroSection = dynamic(() => import('@/components/hero-section'), { ssr: false });import ProductSection from "@/components/products";
export default function Home() {
  return (
    <>  
    <Navbar/>
    <div className="max-w-7xl min-h-screen  mx-auto">
    
    
      <HeroSection/>
    <ProductSection/>
    <CustomerReview/>
      </div>
      </>
  );
}
