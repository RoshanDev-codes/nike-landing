import React from "react";
import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col gap-5">
        <h3 className="text-4xl font-palanquin font-bold">
          Our
          <span className="text-coral-red"> Popular </span>Products
        </h3>

        <p className="text-slate-gray font-montserrat leading-normal lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
