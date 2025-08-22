import React from "react";
import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div>
      <div>
        <img src={imgURL} className="w-full" />
      </div>
      <div className="flex mt-6 gap-2.5">
        <img
          src={star}
          alt="rating icon"
          width={24}
          height={24}
          className="object-contain"
        />
        <p className="text-slate-gray font-montserrat text-xl">(4.5)</p>
      </div>

      <h4 className="mt-3 text-2xl font-palanquin font-semibold">{name}</h4>
      <p className="mt-2 font-montserrat text-coral-red text-2xl font-semibold">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
