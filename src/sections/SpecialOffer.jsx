import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="max-container flex max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img src={offer} alt="offer image" className="object-contain" />
      </div>

      <div className="flex-1 flex flex-col gap-5 justify-center items-start">
        <h3 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special </span>Offer
        </h3>

        <p className="text-slate-gray font-montserrat text-lg leading-normal xl:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="text-slate-gray font-montserrat text-lg leading-normal xl:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional
        </p>

        <div className="flex mt-5 gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
