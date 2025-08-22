import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className="text-center flex flex-col gap-4">
        <h3 className="text-4xl font-palanquin font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>Say?
        </h3>
        <p className="text-slate-gray font-montserrat max-w-lg text-lg mx-auto text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="mt-24 max-sm:mt-12 flex max-lg:flex-col justify-evenly max-sm:gap-7 gap-10">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
