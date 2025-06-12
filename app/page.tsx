
import Image from "next/image";
import Navbar from "@/components/navbar";
import dynamic from 'next/dynamic';
import CustomerReview from "@/components/customerReview";
// Dynamically import HeroSection and disable SSR for it
import HeroSection from "@/components/hero-section";
import ProductSection from "@/components/products";
import AboutSection from "@/components/aboutSection";
import ContactSection from "@/components/contactSection";
export default function Home() {
  return (
    <>  
    <Navbar/>
    <div className="  min-h-screen mx-auto">
    
    
      <HeroSection/>
      <div className="bg-gradient-to-l from-[#3a2d30]  via-[#281e2a]  to-[#3a2d30]" >
 <ProductSection/>
    <CustomerReview/>
    <AboutSection/>
    <ContactSection/>

      </div>
   
      </div>
      </>
  );
}
