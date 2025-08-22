import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 min-w-[350px] sm:min-w-[350px] py-16 px-10 shadow-3xl rounded-[20px]">
      <div className="bg-coral-red w-12 h-12 rounded-full flex justify-center items-center">
        <img src={imgURL} width={24} height={24} />
      </div>
      <h4 className="mt-2 text-3xl font-palanquin font-bold">{label}</h4>
      <p className="mt-1 text-lg font-montserrat text-slate-gray leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
