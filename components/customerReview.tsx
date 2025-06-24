import React from "react";
import CustomerReviewCard from "./customerReviewCard";
import { Reviews } from "@/constants/constants";
const CustomerReview = () => {
  return (
    <div  id="reviews" className="flex  scroll-m-35 md:scroll-m-20 flex-col items-center   mt-20 md:px-10 px-5 ">
      {" "}
      <p className="text-3xl font-semibold my-10 text-primary  styled-font">
        🍪 Reviews 🍪
      </p>
      <section className="grid grid-cols-1 max-w-5xl  md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center w-full ">
        {Reviews.map((review, index) => (
          <CustomerReviewCard key={index} review={review} />
        ))}
      </section>
    </div>
  );
};

export default CustomerReview;
