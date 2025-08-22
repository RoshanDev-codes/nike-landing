import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleOnClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      onClick={handleOnClick}
      className={`rounded-lg border-2 ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
    >
      <div className="bg-card bg-cover bg-center sm:h-40 sm:w-40 max-sm:p-4 rounded-lg flex justify-center items-center">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
