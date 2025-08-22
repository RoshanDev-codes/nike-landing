import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div>
        <img
          src={imgURL}
          alt="customer"
          className="rounded-full"
          width={120}
          height={120}
        />
      </div>

      <p className="text-slate-gray font-montserrat text-lg leading-normal max-w-sm text-center">
        {feedback}
      </p>
      <div className="flex gap-2.5 -mt-1">
        <img
          src={star}
          alt="rating icon"
          className="object-contain"
          width={24}
          height={24}
        />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h4 className="text-3xl font-bold font-palanquin -mt-4">
        {customerName}
      </h4>
    </div>
  );
};

export default ReviewCard;
