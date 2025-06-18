"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { UserCircle } from "lucide-react";
import { useEffect } from "react";
import cupcake from "@/public/cupcake.png";
import donut from "@/public/donut.png";
import cakeSlice from "@/public/cake-slice.png";

interface Review {
  name: string;
  image: string;
  comment: string;
  product: string;
}

type ReviewsProps = {
  review: Review;
};

const CustomerReviewCard = ({ review }: ReviewsProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=" py-2  px-4 w-8/10 md:w-95/100 justify-center items-center relative flex flex-col border-primary bg-white border-4 rounded-2xl shadow-lg"
    >
      <Image
        src={cakeSlice}
        height={100}
        width={100}
        alt="cupcake"
        className="absolute size-12 rotate-15 top-6 left-2"
      />
      <Image
        src={donut}
        height={100}
        width={100}
        alt="cupcake"
        className="absolute size-17 rotate-15  bottom-4  -right-1"
      />

      <p className="text-primary text-xs self-center font-medium mb-3">
        {review.product}
      </p>
      <p className="text-md text-pink-950 w-8/10 my-2 py-7 styled-font font-medium  text-center">
      " {review.comment} "
      </p>

      <div className="user-section    flex gap-2 text-xs font-medium text-primary">
        <Image src={review.image} height={30} width={30} className="rounded-full" alt="user" />
        <p className="self-center ">{review.name}</p>{" "}
      </div>
    </motion.div>
  );
};

export default CustomerReviewCard;
