import React, { useState } from "react";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1, bigShoe2 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe2);

  return (
    <section className="max-container flex max-xl:flex-col min-h-screen w-full gap-10">
      <div className="xl:w-2/5 w-full max-xl:padding-x flex flex-col justify-center items-start pt-28">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className="xl:whitespace-nowrap relative z-10 xl:bg-white xl:pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>

        <p className="text-slate-gray font-montserrat text-lg mt-6 mb-14 leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="mt-20 flex justify-start items-start gap-16 w-full">
          {statistics.map((stats, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center bg-hero bg-primary bg-cover bg-center xl:min-h-screen max-xl:py-40">
        <img
          src={bigShoeImage}
          alt="shoe collection"
          className="object-contain relative z-10"
        />

        <div className="flex absolute -bottom-[5%] sm:left-[10%] max-sm:px-5 gap-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(clickedShoeImage) =>
                  setBigShoeImage(clickedShoeImage)
                }
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
