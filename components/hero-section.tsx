import React from "react";
import { Button } from "./ui/button";
import dynamic from "next/dynamic";
import wa from "@/public/whatsapp.png";
import ModelViewer from "./modelViewer";
import Image from "next/image";
import { motion } from "framer-motion";
import cookie from "@/public/cookie.png";
const HeroSection = () => {
  //inlcude  header msg , gradient bg and rotating 3d model.
  return (
    <div className=" bg-gradient-to-b from-[#281e2a] via-[#3a2d30]  to-[#281e2a]">
      <section className="h-[calc(100vh-73px)] max-w-7xl  mx-auto  md:px-10 px-5 flex flex-col py-5">
        <a
          href="http://wa.me/58249318"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 left-5 z-50 cursor-pointer"
        >
          <Image
            src={wa}
            alt="WhatsApp"
            height={60}
            width={60}
            className="fixed bottom-15 right-5 z-50 cursor-pointer"
          />
        </a>
        <div className="main-wrapper  flex flex-col md:flex-row md:justify-evenly justify-between items-center">
          <div className="header self-start  mt-10 md:mt-30">
            <div className="text-4xl min-w-60 text-primary leading-tight">
              <div className="wrapper">
                <div className="slide-container s">
                  <div className="slide">Delight 🥰</div>
                  <div className="slide">Freshness 🍰</div>
                  <div className="slide">Love ❤️</div>
                  <div className="slide">Comfort 🛋️</div>
                  <div className="slide">Goodness 🌟</div>
                  <div className="slide">Passion 🍓</div>
                  <div className="slide"> Celebration 🎉</div>
                  <div className="slide">Craft 🧁</div>
                  <div className="slide"> Bliss 🌈</div>
                </div>
              </div>
              <p className="mt-2 text-primary ">in every <span className="bite-text">bite <Image alt="cookie" className="size-8
              
              
              inline-block " src={cookie}/></span></p>
            </div>
            <div className="mx-auto">
              <a href="#products" className="inline-block transition-all animate-pulse"><Button className="mt-10 text-md px-5 py-6 rounded-full">view our cakes</Button></a>
            </div>
          </div>
          <div className="3d-item ">
            <ModelViewer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
