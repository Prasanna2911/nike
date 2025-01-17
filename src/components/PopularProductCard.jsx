import React from "react";

const PopularProductCard = ({ imgUrl, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgUrl}
        alt={name}
        className="w-[280px] h-[280px] object-cover"
      />
    </div>
  );
};

export default PopularProductCard;
