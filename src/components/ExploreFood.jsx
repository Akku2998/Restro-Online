import React from "react";

function ExploreFood(props) {
  return (
    <>
      <div className="h-auto w-1/4 mx-4">
        <div className="m-6 bg-white rounded-2xl shadow-md">
          <img
            src={props.imgsrc}
            alt="mypic"
            className="w-full h-235 border-tl-12 border-tr-12"
          />
          <div className="bg-white border-tl-12 border-tr-12 p-6">
            <h3 className="mt-5 mb-10 font-raleway bg-white capitalize">
              {props.fname} <span className="ml-16">{props.price}</span>
            </h3>

            <span className="uppercase font-raleway text-xs tracking-widest font-medium text-gray-600 bg-white">
              {props.title}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default ExploreFood;
