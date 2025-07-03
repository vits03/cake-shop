"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AllProducts } from "@/constants/constants";

type ProductCardProps = {
  product: keyof typeof AllProducts; // 'cake' | 'cakesicles' | 'strawberryDipped'
};

export default function ImageSliderCard({ product }: ProductCardProps) {
  const images = AllProducts[product].images;
  console.log(images);  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative w-full mx-auto">
      <div
        className="relative h-[275px] group overflow-hidden rounded-b-none"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={images[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className={`transition-all duration-500 ease-in-out cursor-pointer rounded-t-xl ${ product.includes("cake")  && "object-bottom"}  `   }
        />

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-3 w-3" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition"
          onClick={nextSlide}
        >
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1 mx-1 ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            } rounded-xl transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
