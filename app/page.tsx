
import Image from "next/image";
import Navbar from "@/components/navbar";
import dynamic from 'next/dynamic';
import CustomerReview from "@/components/customerReview";
// Dynamically import HeroSection and disable SSR for it
import HeroSection from "@/components/hero-section";
import ProductSection from "@/components/products";
import AboutSection from "@/components/aboutSection";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>  
    <Navbar/>
    <div className="  min-h-screen mx-auto">
    
    
      <HeroSection/>
      <div className="bg-[#fafafa] " >
 <ProductSection/>
    <CustomerReview/>
    <AboutSection/>
    <ContactSection/>
<Footer/>
      </div>
   
      </div>
      </>
  );
}
