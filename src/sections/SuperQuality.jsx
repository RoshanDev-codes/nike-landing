import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="max-container flex max-lg:flex-col gap-10">
      <div className="flex-1 flex items-start justify-center flex-col gap-5">
        <h3 className="text-4xl font-palanquin font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>Quality Shoes
        </h3>

        <p className="text-slate-gray lg:max-w-lg font-montserrat text-lg leading-normal">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="text-slate-gray lg:max-w-lg font-montserrat text-lg leading-normal">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-5">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
