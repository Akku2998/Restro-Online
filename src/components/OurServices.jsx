import React from "react";

function OurServices() {
  return (
    <>
      <div className="w-full">
        <div className="flex w-full items-center my-16">
          <div className="w-1/12 h-5 bg-teal-600 transform rotate-90"></div>
          <div className="w-4/12">
            <h1 className="w-1/2 text-6xl font-bold text-purple-900">
              Our Services
            </h1>
          </div>
          <div className=" w-6/12">
            <p className="text-2xl text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              blanditiis id magni repellendus, harum quo rerum? Impedit
              accusantium voluptatum itaque ratione, aliquam harum illo corporis
              maxime quidem temporibus aspernatur consequatur.
            </p>
          </div>
          <div className="w-1/12"></div>
        </div>
        <div
          style={{
            backgroundImage: "url('./dots-bg2.svg')",
            backgroundSize: "100%",
          }}
        >
          <div className="mx-16 flex">
            <div className="w-7/12">
              <div className="flex">
                <div className="">
                  <img
                    src="/advanced-table-booking.svg"
                    className="ml-2 px-40 py-10"
                    alt="table"
                  />
                </div>
                <img src="/big-left-arrow.svg" className="" />
                <div className="mt-20 ml-4">
                  <p className="text-2xl font-bold text-purple-900">
                    advanced table
                  </p>
                  <p className="text-2xl font-bold text-purple-900">
                    booking ------
                  </p>
                  <p className="text-sm text-gray-500">Lorem Ipsum dolor sit</p>
                  <p className="text-sm text-gray-500">amet,consectetur</p>
                  <p className="text-sm text-gray-500">
                    adipiscing elit, sed do
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="ml-2 px-40 py-10">
                  <p className="text-2xl font-bold text-purple-900">
                    Food for Free
                  </p>
                  <p className="text-2xl font-bold text-purple-900">
                    --------24/7
                  </p>
                  <p className="text-sm text-gray-500">Lorem Ipsum dolor sit</p>
                  <p className="text-sm text-gray-500">amet,consectetur</p>
                  <p className="text-sm text-gray-500">
                    adipiscing elit, sed do
                  </p>
                </div>
                <img
                  src="/big-left-arrow.svg"
                  className="transform rotate-180"
                />
                <div className="">
                  <img
                    src="/food-for-free.svg"
                    className="mt-5 ml-4"
                    alt="table"
                  />
                </div>
              </div>
            </div>
            <div className="w-5/12">
              <div className="flex flex-col items-center justify-center bg-gray-100 h-full w-10/12 m-8">
                <img
                  className="w-40"
                  src="/free-home-delivery-at-your-door-steps.svg"
                  alt="bike"
                />
                <div className="mt-8 w-7/12 text-left text-3xl font-bold text-purple-900">
                  free home delivery at your door steps
                </div>
                <div className="w-7/12 text-2xl text-gray-500 text-center px-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OurServices;
