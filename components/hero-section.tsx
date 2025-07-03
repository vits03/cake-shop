"use client"
import React from "react";
import { Button } from "./ui/button";
import dynamic from "next/dynamic";
import wa from "@/public/whatsapp.png";

const ModelViewer = dynamic(() => import("./modelViewer"), {
  ssr: false,
  loading: () =>   <div className="w-64 h-[70vh] mt-15 bg-pink-200 animate-pulse rounded-2xl flex items-center justify-center text-pink-600 font-semibold">
      <p>Loading...</p>
    </div>, // optional fallback
});import Image from "next/image";
import { motion } from "framer-motion";
import cookie from "@/public/cookie.png";
import { useWindowSize } from "@react-hook/window-size";
const HeroSection = () => {
  //inlcude  header msg , gradient bg and rotating 3d model.
    const [width, height] = useWindowSize();
  return (
    <div id="hero" className=" hero  ">
      
      
      <section className="max-w-7xl mt-15  mx-auto  md:px-10 px-5 flex flex-col py-5 pb-10">
        <a
          href="http://wa.me/59256089"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 left-5 z-50 cursor-pointer"
        >
          <Image
            src={wa}
            alt="WhatsApp"
            height={60}
            width={60}
            className="fixed bottom-12 right-5 z-50 cursor-pointer"
          />
        </a>
        <div className="main-wrapper styled-font font-semibold flex flex-col md:flex-row md:justify-evenly justify-between items-center">
          <div className="header self-start   mt-10 md:mt-30">
            <div className="text-2xl lg:text-4xl min-w-60 text-primary leading-tight">
              <div className="wrapper">
                <div className="slide-container px-2  s">
                  <div className="slide">Delight </div>
                  <div className="slide">Freshness </div>
                  <div className="slide">Love </div>
                  <div className="slide">Comfort </div>
                  <div className="slide">Goodness </div>
                  <div className="slide">Passion </div>
                  <div className="slide"> Celebration </div>
                  <div className="slide">Craft </div>
                  <div className="slide"> Bliss </div>
                </div>
              </div>
              <p className="mt-2 px-2  text-primary ">
                in every{" "}
                <span className="bite-text">
                  bite{" "}
                  <Image
                    alt="cookie"
                    className="size-8
              
              
              inline-block "
                    src={cookie}
                  />
                </span>
              </p>
            </div>
            <div>
              <p className="text-pink-950 font-normal mt-5 ml-2">
                we offer custom cakes and selected pastries.
              </p>
            </div>
            <div className="mx-auto">
              <a
                href="#products"
                className="inline-block transition-all animate-pulse"
              >
                <Button className="mt-10 text-lg px-5  font-medium  py-6 rounded-full">
                  view  cakes
                </Button>
              </a>
            </div>
          </div>
          <div className="3d-item relative">
        
            <ModelViewer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
