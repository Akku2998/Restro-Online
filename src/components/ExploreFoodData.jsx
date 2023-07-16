import React from "react";
import ExploreFood from "./ExploreFood";
import { foodData } from "../data/foodData";
export const ExploreFoodData = () => {
  return (
    <div>
      <h1 className="py-8 text-center font-raleway tracking-wide font-semibold text-2xl mb-8 bg-white text-gray-500">
        Explore our Foods
      </h1>
      <div className="flex w-full flex-wrap justify-center">
        {foodData.map((item, index) => (
          <ExploreFood
            key={index}
            imgsrc={item.imgsrc}
            fname={item.fname}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
