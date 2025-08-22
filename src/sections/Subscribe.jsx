import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex max-lg:flex-col justify-between gap-10 items-center">
      <div>
        <h3 className="text-4xl font-palanquin font-bold lg:max-w-md">
          Sign Up for
          <span className="text-coral-red"> Updates </span>& Newsletter
        </h3>
      </div>

      <div className="lg:w-[40%] w-full">
        <div className="sm:border flex max-sm:flex-col justify-between gap-5 overflow-hidden  sm:border-slate-gray sm:rounded-full p-2.5">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="flex-1 pl-5 max-sm:border outline-none max-sm:border-slate-gray max-sm:p-5 max-sm:rounded-full"
          />
          <Button label="Sign up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
