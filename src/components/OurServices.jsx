import React from 'react'

function OurServices() {
    return (
        <>
            <div className="w-full h-screen">



                <div className="left w-1/2 ml-10 mt-20 flex items-center">
                    <div className="w-40 h-5 bg-teal-600 transform rotate-90"></div>
                    <h1 className="text-6xl font-bold text-purple-900 px-10 leading-tight ml-4">
                        Our<br /> Services
                    </h1>
                    <div className="mt-8">
                        <p className="text-lg text-gray-500">
                            Lorem Ipsum dolor is sit amet,consectetur adipiscing elit, sed
                        </p>
                        <p className="text-lg text-gray-500">
                            do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                        <p className="text-lg text-gray-500">
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>
                        <p className="text-lg text-gray-500">
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                
             
                
                <div className="h-screen lg:h-full bg-cover bg-center" style={{ backgroundImage: "url('./dots-bg2.svg')", backgroundSize: "120%" }}>
                    <div className="flex">
                        <img src="/advanced-table-booking.svg" className="ml-2 px-40 py-10" alt="table" />
                        <img src="/big-left-arrow.svg" className="" />
                        <div className="mt-20 ml-4">
                            <p className="text-2xl font-bold text-purple-900">
                                advanced table
                            </p>
                            <p className="text-2xl font-bold text-purple-900">
                                booking ------
                            </p>
                            <p className="text-sm text-gray-500">
                                Lorem Ipsum dolor sit
                            </p>
                            <p className="text-sm text-gray-500">
                                amet,consectetur
                            </p>
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
                            <p className="text-sm text-gray-500">
                                Lorem Ipsum dolor sit
                            </p>
                            <p className="text-sm text-gray-500">
                                amet,consectetur
                            </p>
                            <p className="text-sm text-gray-500">
                                adipiscing elit, sed do
                            </p>
                        </div>
                        <img src="/big-left-arrow.svg" className="transform rotate-180" />
                        <img src="/food-for-free.svg" className="mt-5 ml-4" alt="table" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurServices